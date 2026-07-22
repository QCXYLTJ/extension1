import { lib, game, ui, get, ai, _status } from '../../noname.js';
function _toConsumableArray(arr) {
	if (Array.isArray(arr)) {
		for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
			arr2[i] = arr[i];
		}
		return arr2;
	} else {
		return Array.from(arr);
	}
}
function _defineProperty(obj, key, value) {
	if (key in obj) {
		Reflect.defineProperty(obj, key, {
			value: value,
		});
	} else {
		obj[key] = value;
	}
	return obj;
}
game.import('extension', function (lib, game, ui, get, ai, _status) {
	return {
		name: '侠客风云传',
		content(config, pack) {
			lib.arenaReady.push(function () {
				if (lib.storage.XKsave == undefined)
					game.save('XKsave', {
						XXM_lv: 1,
						XXM_exp: 0,
						WM_lv: 1,
						WM_exp: 0,
						Zhaoshi: ['XK_jietou'],
						Neigong: ['XK_jianghu'],
						Equip: ['XK_jietou', 'XK_jianghu', 'XK_zhujuezhili', 'XK_zhujue'],
					});
				var relib = setInterval(function () {
					//小虾米
					var LV = lib.storage.XKsave.XXM_lv;
					var LV = 1;
					lib.characterTitle['XK_xiaoxiami'] = ' Lv.' + LV + ' Exp:' + lib.storage.XKsave.XXM_exp + '/' + LV * 20 + '</span>';
					var str1 = '<center><font color=#38309d>【野球拳】</font></center><font color=#F0F>【劈石破玉】</font>出牌阶段限1次,你可与1名其他角色猜拳,胜利方视为对对方使用1张不计次数的杀,若你失败重置此技能.';
					var str2 = '<center><font color=#38309d>【野拳神功】</font></center><font color=#F0F>【猜心】</font>当你使用杀指定目标时可与其猜拳,若胜利此杀不可被响应,失败则其摸1张牌.';
					if (LV >= 2) str2 += '</br><font color=#F0F>【变拳】</font>锁定技,若你猜拳未胜利,有概率使结果变为胜利;10级时必定胜利.';
					if (LV >= 5) str1 += '</br><font color=#F0F>【铁拳无敌】</font>当你使用杀时,可声明1种未以此法声明过的武器,你拥有该武器的技能直至此杀结算结束.';
					if (LV >= 7) str2 += '</br><font color=#F0F>【击溃】</font>锁定技,当你使用杀造成伤害时,令伤害随机增加0~2点;10级时高伤害概率提高.';
					if (LV >= 10) str1 += "</br><font color=#F0F>【石破天惊】</font>你可跳过摸牌/出牌阶段,如此你于下回合使用杀时:令目标获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a><a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_zhongshang');\">【重伤】</a>2回合/可指定任意名额外目标.";
					if (LV < 4) {
						str2 += "</br><font color=#F0F>【小周天运转】</font>体力70%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;手牌上限+1;回合开始时随机移除0~1项异常状态.";
					} else if (LV < 8) {
						str2 += "</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.";
					} else {
						str2 += "</br><font color=#F0F>【元婴出世】</font>体力40%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数、手牌上限+1;回合开始时随机移除1~2项异常状态.";
					}
					lib.translate['XK_yeqiuquan_info'] = str1;
					lib.translate['XK_yequan_info'] = str2;
					//东方未明
					var DLV = lib.storage.XKsave.WM_lv;
					lib.characterTitle['XK_weiming'] = ' Lv.' + DLV + ' Exp:' + lib.storage.XKsave.WM_exp + '/' + DLV * 10 + '</span>';
					if (lib.character['XK_weiming'] != undefined) {
						lib.character['XK_weiming'][3] = lib.storage.XKsave.Equip;
						if (lib.config.XK_zigong) {
							lib.character['XK_weiming'][0] = 'female';
						}
					}
				}, 2000);
			});
			var XK_style = document.createElement('style');
			XK_style.innerHTML = ".player .identity[data-color='XK_xia'],";
			XK_style.innerHTML += "div[data-nature='XK_xia'],";
			XK_style.innerHTML += "span[data-nature='XK_xia'] {text-shadow: black 0 0 1px,rgba(232, 18, 28,1) 0 0 2px,rgba(232, 18, 28,1) 0 0 5px,rgba(232, 18, 28,1) 0 0 10px,rgba(232, 18, 28,1) 0 0 10px}";
			XK_style.innerHTML += "div[data-nature='XK_xiat'],";
			XK_style.innerHTML += "span[data-nature='XK_xiat'] {text-shadow: black 0 0 1px,rgba(232, 18, 28,1) 0 0 2px,rgba(232, 18, 28,1) 0 0 5px,rgba(232, 18, 28,1) 0 0 5px,rgba(232, 18, 28,1) 0 0 5px,black 0 0 1px;}";
			XK_style.innerHTML += "div[data-nature='XK_xiat'],";
			XK_style.innerHTML += "span[data-nature='XK_xiat'] {text-shadow: black 0 0 1px,rgba(232, 18, 28,1) 0 0 2px,rgba(232, 18, 28,1) 0 0 2px,rgba(232, 18, 28,1) 0 0 2px,rgba(232, 18, 28,1) 0 0 2px,black 0 0 1px;}";
			document.head.appendChild(XK_style);
			lib.group.add('XK_xia');
			lib.translate.XK_xia = '侠';
			lib.translate.XK_xia2 = '侠';
			lib.groupnature.XK_xia = 'XK_xia';
			var tenUi = document.createElement('style');
			tenUi.innerHTML += ".player>.camp-zone[data-camp='XK_xia']>.camp-back {background: linear-gradient(to bottom, rgb(200,7,7), rgb(119,4,4));}";
			tenUi.innerHTML += ".player>.camp-zone[data-camp='XK_xia']>.camp-name {text-shadow: 0 0 5px rgb(164, 14, 14), 0 0 10px rgb(164, 14, 14), 0 0 15px rgb(164, 14, 14);}";
			document.head.appendChild(tenUi);
			// ---------------------------------------武将分栏------------------------------------------//
			if (lib.rank) {
				lib.rank.rarity.junk.addArray(['XK_qili', 'XK_shiyan', 'XK_shenxiangyun', 'XK_leizhentian', 'XK_taya', 'XK_qinhongshang', 'XK_shenlan', 'XK_wangrong', 'XK_fengchuixue', 'XK_lanting', 'XK_jiwen', 'XK_renqingxuan', 'XK_weiziling', 'XK_zhaoyaer', 'XK_shuipanpan', 'XK_shenyi', 'XK_budong', 'XK_tangzhonghui', 'XK_huachi']);
				lib.rank.rarity.rare.addArray(['XK_jiwushuang', 'XK_guyuexuan', 'XK_jingji', 'XK_xuanmingzi', 'XK_luoshejun', 'XK_jiuyin', 'XK_huangdi', 'XK_xianyin', 'XK_lingxianger', 'XK_chuhui', 'XK_fujianhan', 'XK_zhengxuan', 'XK_mengqiansi', 'XK_fangyunhua', 'XK_qijiangjun', 'XK_longmo', 'XK_huajiuse', 'XK_nalanyan', 'XK_yuepangzi', 'XK_lang', 'XK_laohu', 'XK_yangyun', 'XK_xianxier', 'XK_renhaoran']);
				lib.rank.rarity.epic.addArray(['XK_kexianglong', 'XK_yangdi', 'XK_wuxiazi', 'XK_chenchongying', 'XK_wuyin', 'XK_youjin', 'XK_zhuorenqing', 'XK_heizhongluowang', 'XK_tianjilaodao', 'XK_yinshiyun', 'XK_yuwenxingcheng', 'XK_xuedaoshaozhu', 'XK_fenghuayishi', 'XK_bore', 'XK_caodai', 'XK_hetuo', 'XK_fanweili', 'XK_fengqingxiao', 'XK_wuse', 'XK_ying', 'XK_luyuer', 'XK_fomu', 'XK_rentianxiang', 'XK_saiwangye']);
				lib.rank.rarity.legend.addArray(['XK_jiansheng', 'XK_licangtian', 'XK_licanglong', 'XK_yandansheng', 'XK_jiangtianxiong', 'XK_xiaolinzi', 'XK_xuanligong', 'XK_xuziyi', 'XK_xuziqi', 'XK_wali', 'XK_shiguang']);
			}
			lib.element.player.addBuff = function () {
				var next = game.createEvent('addBuff');
				next.player = this;
				var event = _status.event;
				for (var i = 0; i < arguments.length; i++) {
					if (get.itemtype(arguments[i]) == 'player') {
						next.source = arguments[i];
					} else if (typeof arguments[i] == 'number') {
						next.num = arguments[i];
					} else if (typeof arguments[i] == 'string') {
						next.skill = arguments[i];
					}
				}
				if (next.num == undefined) next.num = 2;
				if (next.source == undefined) next.source = this;
				next.setContent(lib.element.content.addBuff);
				return next;
			};
			lib.element.content.addBuff = function () {
				'step 0';
				var bufflist = player.storage.XK_buff;
				var info = lib.skill[skill];
				var mar = false;
				for (var i = 0; i < bufflist.length; i++) {
					if (bufflist[i][0] == skill) {
						bufflist[i][1] = num;
						mar = true;
					}
				}
				if (!mar) {
					if (info.ai['XK_debuff'] || info.ai['XK_buff']) {
						if (!player.storage.XK_buff) {
							player.storage.XK_buff = [];
						}
						if (info.ai['XK_debuff'] && player.hasSkill('XK_judu')) {
							num++;
						}
						if (skill == 'XK_neishang') {
							if (source.hasSkillTag('XK_wushi')) {
								var temp1 = player.maxHp * 0.7,
									temp2 = player.maxHp * 0.9,
									temp3 = player.maxHp;
							} else {
								var temp1 = player.maxHp * 0.4,
									temp2 = player.maxHp * 0.6,
									temp3 = player.maxHp * 0.7;
							}
							if ((player.hasSkillTag('XK_neigong1') && player.hp <= temp1) || (player.hasSkillTag('XK_neigong2') && player.hp <= temp2) || (player.hasSkillTag('XK_neigong3') && player.hp <= temp3) || !player.hasSkillTag('XK_neigong')) {
								player.addSkill(skill);
								player.storage.XK_buff.push([skill, num]);
								game.log(player, '获得了【', bufflist[i][0], '】状态', num, '回合.');
							}
						} else {
							player.addSkill(skill);
							player.storage.XK_buff.push([skill, num]);
							game.log(player, '获得了【', bufflist[i][0], '】状态', num, '回合.');
						}
					}
				}
			};
			lib.element.player.changeStorage = function () {
				var next = game.createEvent('changeStorage');
				next.player = this;
				var event = _status.event;
				for (var i = 0; i < arguments.length; i++) {
					if (typeof arguments[i] === 'boolean') {
						next.forced = arguments[i];
					} else if (typeof arguments[i] == 'number') {
						next.num = arguments[i];
					} else if (typeof arguments[i] == 'string') {
						next.skill = arguments[i];
					}
				}
				next.setContent(lib.element.content.changeStorage);
				return next;
			};
			lib.element.content.changeStorage = function () {
				'step 0';
				if (forced) {
					player.storage[skill].add(num);
				} else {
					player.storage[skill].remove(num);
				}
				('step 1');
				if (player.storage[skill].length) {
					player.markSkill(skill);
				} else player.unmarkSkill(skill);
			};
			lib.element.player.removeBuff = function (type, min, max, total, gt) {
				'step 0';
				if (!this.storage.XK_buff) return;
				var bufflist = this.storage.XK_buff;
				if (!total) {
					var removelist = [];
					for (var i = 0; i < bufflist.length; i++) {
						var info = lib.skill[bufflist[i][0]];
						if (info.ai[type]) {
							if (gt && info.ai['XK_du']) continue;
							removelist.push(bufflist[i][0]);
						}
					}
					if (!removelist.length) {
						return;
					}
					removelist.sort(lib.sort.random);
					var num = Math.min(removelist.length, [min, max].randomGet());
					for (var i = 0; i < num; i++) {
						for (var j = 0; j < bufflist.length; j++) {
							if (bufflist[j][0] == removelist[i]) {
								game.log(this, '失去了【', bufflist[j][0], '】状态');
								this.removeSkill(bufflist[j][0]);
								bufflist.splice(j--, 1);
							}
						}
					}
				} else {
					for (var i = 0; i < bufflist.length; i++) {
						var info = lib.skill[bufflist[i][0]];
						if (info.ai[type]) {
							game.log(this, '失去了【', bufflist[i][0], '】状态');
							this.removeSkill(bufflist[i][0]);
							bufflist.splice(i--, 1);
						}
					}
				}
				('step 1');
			};
			lib.element.player.deleteBuff = function (skill) {
				'step 0';
				if (!this.storage.XK_buff) return;
				var bufflist = this.storage.XK_buff;
				for (var i = 0; i < bufflist.length; i++) {
					if (bufflist[i][0] == skill) {
						this.removeSkill(bufflist[i][0]);
						this.unmarkSkill(skill);
						bufflist.splice(i--, 1);
					}
				}
				('step 1');
				game.log(this, '失去了【', skill, '】状态');
			};
			lib.element.player.getXKBuff = function (type) {
				var list = [];
				if (!this.storage.XK_buff) {
					this.storage.XK_buff = [];
				}
				for (var i of this.storage.XK_buff) {
					var info = lib.skill[i[0]];
					if (info.ai && info.ai[type]) {
						list.add(i);
					}
				}
				return list;
			}; //QQQ
			lib.element.player.getWugong = function (type) {
				var skills = this.skills.slice(0);
				for (var i = 0; i < skills.length; i++) {
					var info = lib.skill[skills[i]];
					if (!info.ai || !info.ai[type]) {
						skills.splice(i--, 1);
					}
				}
				return skills;
			};
			lib.element.player.learnSkill = function (skill, type) {
				'step 0';
				this.isXiake = false;
				if (this.hasSkillTag('XK_neigong') || this.hasSkillTag('XK_zhaoshi')) this.isXiake = true;
				('step 1');
				if (!this.isXiake) {
					var str = lib.translate[skill + '_info'].match(/>【(\S*)】</)[1];
					var sk = this.getOriginalSkills();
					for (var i = 0; i < sk.length; i++) {
						if (lib.translate[sk[i] + '_info']) this.removeSkill(sk[i]);
					}
					if (type == 'XK_neigong') {
						this.addSkill('XK_jietou');
						this.addSkill(skill);
						game.log(this, '习得了【街头格斗术】、', '【', str, '】.');
					}
					if (type == 'XK_zhaoshi') {
						this.addSkill(skill);
						this.addSkill('XK_jianghu');
						game.log(this, '习得了【', str, '】、', '【江湖内功】.');
					}
				}
				('step 2');
				if (this.isXiake) {
					var skills = this.getSkills(true, false);
					for (var i = 0; i < skills.length; i++) {
						var info = lib.skill[skills[i]];
						if (info.ai && info.ai[type]) {
							this.removeSkill(skills[i]);
						}
					}
					var str = lib.translate[skill + '_info'].match(/>【(\S*)】</)[1];
					this.addSkill(skill);
					game.log(this, '习得了【', str, '】');
				}
			};
			lib.element.player.checkHp = function (per, type) {
				if (type && type == 'equal') {
					return this.hp <= this.maxHp * per;
				} else {
					return this.hp < this.maxHp * per;
				}
			};
			game.XK_OpenDialog = function (title, content, type) {
				if (!game.XK_CurrentDialogs) {
					game.XK_CurrentDialogs = [];
				}
				if (type == 'buff') {
					var dialog = ui.create.div('.XK-dialog', document.body);
					game.XK_CurrentDialogs.push(dialog);
					var text = ui.create.div('.XK-dialog-text', dialog);
					text.innerHTML = content;
					var titlediv = ui.create.div('.XK-dialog-title', dialog);
					titlediv.innerHTML = title;
					var close = ui.create.div('.XK-dialog-close', dialog);
					close.addEventListener('click', function () {
						game.XK_CurrentDialogs.remove(dialog);
						dialog.delete();
					});
				} else {
					var dialog = ui.create.div('.XK-longdialog', document.body);
					game.XK_CurrentDialogs.push(dialog);
					var text = ui.create.div('.XK-longdialog-text', dialog);
					text.innerHTML = content;
					var titlediv = ui.create.div('.XK-longdialog-title', dialog);
					titlediv.innerHTML = title;
					var close = ui.create.div('.XK-longdialog-close', dialog);
					close.addEventListener('click', function () {
						game.XK_CurrentDialogs.remove(dialog);
						dialog.delete();
					});
				}
				return dialog;
			};
			window.BuffIntro = function (buffname) {
				var title = '',
					type = 'buff',
					content = '';
				var info = lib.skill[buffname];
				if (info.ai['XK_debuff']) {
					title = '负面状态:';
				} else if (info.ai['XK_buff']) {
					title = '正面状态:';
				} else if (info.ai['XK_tai']) {
					title = '累积状态:';
				} else if (info.ai['XK_neigong']) {
					title = '内功:';
					type = 'nobuff';
				} else {
					title = '招式:';
					type = 'nobuff';
				}
				if (type == 'buff') {
					title += get.translation(buffname);
					content += '<br>';
					if (buffname != 'XK_neishang') {
						content += '&nbsp;&nbsp;' + info.intro.content() + '.';
					} else {
						content += '&nbsp;&nbsp;身受内伤,功体无法运转;摸牌阶段摸牌数-1.';
					}
				} else {
					title += lib.translate[buffname + '_info'].match(/>【(\S*)】</)[1];
					content += info.description;
				}
				game.XK_OpenDialog(title, content, type);
			};
			var url = 'extension/侠客风云传';
			lib.init.css(url, 'extension');
			lib.XK_skillrank;
		},
		precontent(XK) {
			game.import('character', function () {
				var XKFYZ = {
					name: 'XKFYZ',
					connect: true,
					character: {
						XK_saiwangye: ['male', 'XK_xia', 5, ['XK_jiuyinshenzhua', 'XK_jiuyinfeixu'], []],
						XK_rentianxiang: ['male', 'XK_xia', 4, ['XK_jinyizhan', 'XK_jinyishengong'], []],
						XK_renhaoran: ['male', 'XK_xia', 4, ['XK_wuyuejianyi', 'XK_shenjianjue'], []],
						XK_luyuer: ['male', 'XK_xia', 3, ['XK_qixingjianfa', 'XK_beidounuoyi'], []],
						XK_ying: ['male', 'XK_xia', 2, ['XK_zhuifengxunzong', 'XK_wangniangong'], []],
						XK_fomu: ['female', 'XK_xia', '3/6', ['XK_kongquezhenyan', 'XK_kongquemizhou'], []],
						XK_yangyun: ['male', 'XK_xia', 4, ['XK_tianshanhuanying', 'XK_mingdingjue'], []],
						XK_xianxier: ['female', 'XK_xia', 5, ['XK_qishijianji', 'XK_zhandouyanwu'], []],
						XK_wuse: ['male', 'XK_xia', 5, ['XK_baoxiangrulai', 'XK_jinzhongzhao'], []],
						XK_yuepangzi: ['male', 'XK_xia', 4, ['XK_feixingzhi', 'XK_yinyuantaohui', 'XK_zhenshishenfen'], ['zhu']],
						XK_laohu: ['male', 'XK_xia', 4, ['XK_hujiadaofa', 'XK_feihugong'], []],
						XK_nalanyan: ['male', 'XK_xia', 4, ['XK_feipuliantian', 'XK_xiaoaohongchen'], []],
						XK_lang: ['male', 'XK_xia', 4, ['XK_miqingdafa', 'XK_dingxiwuliang'], []],
						XK_fengqingxiao: ['male', 'XK_xia', 5, ['XK_dajingangzhang', 'XK_shaolinjiuyang'], []],
						XK_huachi: ['female', 'XK_xia', 4, ['XK_baihuacuoquan', 'XK_yunvxinjing'], []],
						XK_tangzhonghui: ['female', 'XK_xia', 3, ['XK_feidao', 'XK_sankushengong'], []],
						XK_mingjiaojiaozhu: ['male', 'XK_xia', 7, ['XK_qiankundanuoyi', 'XK_jiuyangshengong'], []], //宗师开始
						XK_dalishizi: ['male', 'XK_xia', 4, ['XK_liumaishenjian', 'XK_lingboweibu'], []],
						XK_riyuejiaozhu: ['male', 'XK_xia', '5/6', ['XK_riyuezhangfa', 'XK_xixingdafa'], []],
						XK_litanhua: ['male', 'XK_xia', 4, ['XK_xiaolifeidao', 'XK_xiuluozhenjing'], []],
						XK_fengzhongzhishen: ['male', 'XK_xia', 5, ['XK_fengshentuifa', 'XK_bingxinjue'], []],
						XK_jinlunguoshi: ['male', 'XK_xia', '6/8', ['XK_longxiangborezhang', 'XK_longxiangbore'], []],
						XK_yihuagongzhu: ['female', 'XK_xia', 5, ['XK_yihuajieyu', 'XK_mingyugong'], []],
						XK_wudangzushi: ['male', 'XK_xia', '4/8', ['XK_taijiquan', 'XK_chunyangwuji'], []],
						XK_linghudaxia: ['male', 'XK_xia', 5, ['XK_dugujiujian', 'XK_yijinjing'], []], //宗师结束
						XK_huajiuse: ['male', 'XK_xia', 5, ['XK_tianxuezhifa', 'XK_tianxuegong'], []],
						XK_fanweili: ['female', 'XK_xia', 6, ['XK_xiuluowuqing', 'XK_xiuluobafeng'], []],
						XK_budong: ['male', 'XK_xia', 4, ['XK_chanyizizai', 'XK_jingangbuhuai'], []],
						XK_shenyi: ['male', 'XK_xia', 3, ['XK_jinzhenjiemai', 'XK_yaowangshenpian'], []],
						XK_caodai: ['male', 'XK_xia', 5, ['XK_duomingsanxian', 'XK_zixiashengong'], []],
						XK_longmo: ['male', 'XK_xia', 4, ['XK_kuangfengdaofa', 'XK_qianrenjue'], []],
						XK_qijiangjun: ['male', 'XK_xia', 5, ['XK_pojunqiangfa', 'XK_weizhenbafang'], []],
						XK_hetuo: ['male', 'XK_xia', 5, ['XK_huoyandao', 'XK_luohanxiangmo'], []],
						XK_fangyunhua: ['male', 'XK_xia', 4, ['XK_taijijian', 'XK_wudangqiankun', 'XK_nengqunengshen'], ['zhu']],
						XK_bore: ['male', 'XK_xia', '4/5', ['XK_tiangangquan', 'XK_tiangangwuji'], []],
						XK_mengqiansi: ['female', 'XK_xia', '3/4', ['XK_wanghunzhangfa', 'XK_wanghunsanjue'], []],
						XK_shuipanpan: ['female', 'XK_xia', 4, ['XK_emeijianfa', 'XK_emeijiuyang'], []],
						XK_fenghuayishi: ['male', 'XK_xia', '4/6', ['XK_huxiaozhang', 'XK_shouwangjing'], []],
						XK_xuedaoshaozhu: ['male', 'XK_xia', 4, ['XK_daomojiushi', 'XK_xuehaimogong'], []],
						XK_zhengxuan: ['male', 'XK_xia', 4, ['XK_biyijianfa', 'XK_tianshanxinfa'], []],
						XK_yuwenxingcheng: ['male', 'XK_xia', 4, ['XK_motiannu', 'XK_moshougong'], []],
						XK_shiguang: ['male', 'XK_xia', 5, ['XK_baguayoushen', 'XK_tianlongbabugong'], []],
						XK_fujianhan: ['male', 'XK_xia', 4, ['XK_bawangjianfa', 'XK_xiayinjue'], []],
						XK_chuhui: ['female', 'XK_xia', 4, ['XK_taohuashan', 'XK_lingfeijing'], []],
						XK_zhaoyaer: ['female', 'XK_xia', 3, ['XK_pianshudaquan', 'XK_shengcunfaze'], []],
						XK_wali: ['male', 'XK_xia', 6, ['XK_wudijixianliu', 'XK_wuyagushenggong'], []],
						XK_yinshiyun: ['male', 'XK_xia', 4, ['XK_xuwudaofa', 'XK_sijiexinjue'], []],
						XK_xuziqi: ['male', 'XK_xia', 4, ['XK_dugujiujian', 'XK_baqin'], []],
						XK_xuziyi: ['male', 'XK_xia', 5, ['XK_datian', 'XK_weiwoduzungong'], []],
						XK_weiziling: ['female', 'XK_xia', 4, ['XK_zilingnichang', 'XK_longtengbaobian'], []],
						XK_heizhongluowang: ['male', 'XK_xia', 6, ['XK_zhanguosha', 'XK_sanqianruoshui'], []],
						XK_tianjilaodao: ['male', 'XK_xia', 5, ['XK_kongmingquan', 'XK_xiantiangong'], []],
						XK_zhuorenqing: ['male', 'XK_xia', 4, ['XK_taijijianfa', 'XK_taijishengong'], []],
						XK_lingxianger: ['female', 'XK_xia', 4, ['XK_qixianjianyi', 'XK_qingxinpusan'], []],
						XK_xianyin: ['female', 'XK_xia', 4, ['XK_yuyinraoliang', 'XK_shengwuaiyue'], []],
						XK_jiwen: ['female', 'XK_xia', 4, ['XK_yinshebianfa', 'XK_shoushengong'], []],
						XK_renqingxuan: ['female', 'XK_xia', 3, ['XK_zimutiangou', 'XK_wanhualijing'], []],
						XK_fengchuixue: ['female', 'XK_xia', 4, ['XK_xinheyiqizhao', 'XK_xinheyiqigong'], []],
						XK_lanting: ['female', 'XK_xia', 4, ['XK_dulongzhuihun', 'XK_wanduxinjing'], []],
						XK_huangdi: ['male', 'XK_xia', 4, ['XK_diwangshengong', 'XK_jiulonghuti', 'XK_diyiren'], ['zhu']],
						XK_jiuyin: ['female', 'XK_xia', 5, ['XK_jiuyinbaiguzhua', 'XK_jiuyincanjing'], []],
						XK_youjin: ['male', 'XK_xia', '5/6', ['XK_youlongjianfa', 'XK_wuwangshengong'], []],
						XK_wangrong: ['female', 'XK_xia', 3, ['XK_paodingdao', 'XK_paodinggong'], []],
						XK_luoshejun: ['male', 'XK_xia', 6, ['XK_cuihunbaidu', 'XK_wanshedafa'], []],
						XK_xuanmingzi: ['male', 'XK_xia', 5, ['XK_xuanmingqisha', 'XK_huagongdafa', 'XK_yanghui'], ['zhu']],
						XK_shenlan: ['female', 'XK_xia', 4, ['XK_chansibazhua', 'XK_wudubaodian'], []],
						XK_wuyin: ['male', 'XK_xia', 5, ['XK_miaodizhi', 'XK_yijinjing', 'XK_niepan'], ['zhu']],
						XK_chenchongying: ['male', 'XK_xia', 5, ['XK_canhuabaojian', 'XK_canhuabaodian'], []],
						XK_qinhongshang: ['female', 'XK_xia', 4, ['XK_pilidaofa', 'XK_pilixinfa'], []],
						XK_taya: ['female', 'XK_xia', 3, ['XK_tianji', 'XK_taiyixingchen'], []],
						XK_jingji: ['male', 'XK_xia', 5, ['XK_daojian', 'XK_yanxing'], []],
						XK_guyuexuan: ['male', 'XK_xia', 6, ['XK_shuihu', 'XK_pengfei'], []],
						XK_wuxiazi: ['male', 'XK_xia', 6, ['XK_tianshanliuyang', 'XK_beimingwuxiang', 'XK_bocai'], ['zhu']],
						XK_leizhentian: ['male', 'XK_xia', 5, ['XK_zhentianchui', 'XK_kuangleigong'], []],
						XK_shenxiangyun: ['female', 'XK_xia', 3, ['XK_qinglian', 'XK_wangyouxinfa'], []],
						XK_shiyan: ['female', 'XK_xia', 3, ['XK_yanzici', 'XK_feiyangong'], []],
						XK_qili: ['female', 'XK_xia', 4, ['XK_yeqiuquan1', 'XK_yequan1'], []],
						XK_yangdi: ['male', 'XK_xia', 5, ['XK_canyangshenzhang', 'XK_canyangxinfa'], []],
						XK_xuanligong: ['male', 'XK_xia', 7, ['XK_hundun', 'XK_tiancan', 'XK_huanxiang'], ['zhu']],
						XK_kexianglong: ['male', 'XK_xia', 5, ['XK_shiba', 'XK_xianglong'], []],
						XK_jiwushuang: ['female', 'XK_xia', 5, ['XK_lianzhang', 'XK_xuangong'], []],
						XK_weiming: ['male', 'XK_xia', 4, ['XK_jietou', 'XK_jianghu', 'XK_zhujuezhili', 'XK_zhujue'], []],
						XK_xiaoxiami: ['male', 'XK_xia', 4, ['XK_yeqiuquan', 'XK_yequan', 'XK_zhujue'], []],
						XK_yandansheng: ['male', 'XK_xia', 8, ['XK_yanluo', 'XK_wujian', 'XK_qijin'], ['zhu']],
						XK_jiangtianxiong: ['male', 'XK_xia', '6/8', ['XK_disha', 'XK_wuji', 'XK_tiangang'], ['zhu']],
						XK_xiaolinzi: ['male', 'XK_xia', 7, ['XK_pixie', 'XK_kuihua', 'XK_saodang'], ['zhu']],
						XK_licangtian: ['male', 'XK_xia', 9, ['XK_datian', 'XK_fantian', 'XK_yintuoluo'], ['zhu']],
						XK_licanglong: ['male', 'XK_xia', 8, ['XK_jiulongpo', 'XK_baqin', 'XK_henglan'], ['zhu']],
						XK_jiansheng: ['male', 'XK_xia', 7, ['XK_wanjianjue', 'XK_wanjianguizong', 'XK_jianbai'], ['zhu']],
					},
					characterSort: {
						XKFYZ: {
							XK_tianzi: ['XK_xuanligong', 'XK_yangdi', 'XK_chenchongying', 'XK_huangdi', 'XK_yinshiyun', 'XK_qijiangjun', 'XK_huajiuse', 'XK_fengqingxiao', 'XK_bore'],
							XK_qijie: ['XK_yandansheng', 'XK_leizhentian', 'XK_xianyin', 'XK_tianjilaodao', 'XK_heizhongluowang', 'XK_mengqiansi', 'XK_shenyi', 'XK_huachi', 'XK_xianxier'],
							XK_hongyan: ['XK_shenlan', 'XK_wangrong', 'XK_lanting', 'XK_renqingxuan', 'XK_jiwen', 'XK_qili', 'XK_shiyan', 'XK_shenxiangyun', 'XK_zhaoyaer', 'XK_qinhongshang'],
							XK_tianyi: ['XK_xiaolinzi', 'XK_jiangtianxiong', 'XK_youjin', 'XK_jiuyin', 'XK_fengchuixue', 'XK_hetuo', 'XK_lang', 'XK_fomu', 'XK_saiwangye'],
							XK_tianlong: ['XK_licanglong', 'XK_licangtian', 'XK_jiwushuang', 'XK_xuanmingzi', 'XK_luoshejun', 'XK_lingxianger', 'XK_fanweili', 'XK_nalanyan', 'XK_rentianxiang'],
							XK_chuanzhong: ['XK_jiansheng', 'XK_kexianglong', 'XK_wuxiazi', 'XK_wuyin', 'XK_zhuorenqing', 'XK_caodai', 'XK_laohu', 'XK_wuse', 'XK_renhaoran'],
							XK_qingnian: ['XK_taya', 'XK_chuhui', 'XK_fangyunhua', 'XK_shuipanpan', 'XK_fujianhan', 'XK_longmo', 'XK_budong', 'XK_tangzhonghui', 'XK_yangyun'],
							XK_zhujue: ['XK_xiaoxiami', 'XK_weiming', 'XK_weiziling', 'XK_guyuexuan', 'XK_jingji', 'XK_xuziyi', 'XK_xuziqi', 'XK_yuepangzi'],
							XK_youqing: ['XK_wali', 'XK_shiguang', 'XK_yuwenxingcheng', 'XK_zhengxuan', 'XK_xuedaoshaozhu', 'XK_fenghuayishi', 'XK_ying', 'XK_luyuer'],
							XK_zongshi: ['XK_linghudaxia', 'XK_wudangzushi', 'XK_yihuagongzhu', 'XK_jinlunguoshi', 'XK_fengzhongzhishen', 'XK_litanhua', 'XK_riyuejiaozhu', 'XK_dalishizi', 'XK_mingjiaojiaozhu'],
						},
					},
					characterIntro: {
						XK_saiwangye: '东北金人的王爷,本名完颜赛尔康,是当年金小学王爷完颜康与宫女私通所生的后人.金国覆灭后,拥有王族血统的赛王爷力拼再起,企图重振金国的荣景.',
						XK_rentianxiang: '天龙八部之迦楼罗,武功高强,个性豪达,不拘小节.忠于老教主天王,与龙王不合,辞去教中职务远居关外,与大鹏金翅鸟为伴.',
						XK_renhaoran: '铸剑山庄庄主,终生与剑为伴,单凭听音观影便可知剑的优劣.唯武功不济,无力维持任家的江湖地位,在天龙教与武林正道之间摇摆不定,随时准备屈从于强者.',
						XK_ying: '废城,无名杀元老级别的资深老玩家,具有贴吧吧主、贴吧群的群主等一系列身份,热爱无名杀,经常出面维护无名杀的声誉.本扩展中废城的技能皆为其本人设计.',
						XK_luyuer: '本人性格酷爱放荡不羁,两耳不闻窗外事,一心喜爱练习剑法但却对关乎自己或者好友的事,睚眦必报(无名杀决战平安京扩展交流群:927885094).',
						XK_fomu: '原本是孔雀王朝圣女身边的侍母,孔雀王朝被黑冢罗王所灭后,佛母亦得到了解放.从此转入黑暗之中,做一些不为人知的勾当.',
						XK_yangyun: '雍容的酒之君子,与傅剑寒为知交,两人不打不相识.与傅剑寒对酒的见解大异其趣.',
						XK_xianxier: '原是侍奉法兰西王公贵族的骑士,有着相当高强的剑技.',
						XK_wuse: '少林般若堂首座,对本门七十二绝艺有着极深厚的浸淫,号称少林武痴.统管少林十八铜人.',
						XK_yuepangzi: '隐元阁少阁主,是个玩世不恭的游侠.对于风水与盗墓知识有着深厚的浸淫,总是有办法寻到许多不为人知的秘境.',
						XK_laohu: '逍遥谷的仆人,平日张罗打点谷内日常事务.十分擅长铸造,常打造兵器下山贩卖,维持谷内的开销.身世不详,似乎家学渊源,有一把家传的冷月宝刀,刀法实力,极其深厚.',
						XK_nalanyan: '天龙八部之紧那罗.常常与干达婆一起行动,擅长歌舞.容姿极为出众.天王心腹,一心要救天王脱困.',
						XK_lang: '天意城的杀手,本名不详.是个妖娇美艳的女子,有着足以令任何男人心动的美妙躯体.生性浪荡,擅长以色诱术杀敌.然而她的身上似乎有一些小秘密？',
						XK_fengqingxiao: '少林俗家弟子,锦衣卫中人,是个百年难得一见的练武奇才.',
						XK_huachi: '忘忧七贤之一,园艺天下无双,一年一度洛阳花会的评审.除了无瑕子外,还与奇女子任清璇是忘年之交.个性内向害羞,不善言谈,但一提到园艺就能侃侃而谈.',
						XK_tangzhonghui: '唐冠南之妹,唐家的掌上明珠.浸染于日益阴损毒辣的唐门之中,却是出淤泥而不染.性格善解人意.',
						XK_mingjiaojiaozhu: '中土明教第三十四代教主.融合九阳神功、乾坤大挪移神功为一体,当世无敌.此外还精研医术和毒术,术绝尘寰.为人仁侠仗义,一生救人无数.(使用<九阳神功>秘籍后,【九阳神功】进阶)',
						XK_yihuagongzhu: '移花宫的大宫主,拥有绝顶美丽的脸和一双明亮的眼睛,而且气质出尘,绝代风华.性情淡漠残酷,气质清冷高华,待任何人都冷酷无情、严厉冰冷.(使用<明玉功>秘籍后,【明玉功】进阶)',
						XK_litanhua: '曾是朝廷殿试第三名「探花」,故人称「小李探花」,而后厌倦功名,弃官归隐;小李飞刀,例不虚发,百晓生所著<兵器谱>上排名第三.(使用<小李飞刀>秘籍后,【小李飞刀】进阶)',
						XK_riyuejiaozhu: '日月神教的教主,武学修为深不可测,是江湖上数一数二的人物.虽然自大狂妄,专横骄傲,却也不只一味自大,拥有类似政治家的精明眼光与手腕.(使用<吸星大法>秘籍后,【吸星大法】进阶)',
						XK_dalishizi: '大理国镇南王段正淳的世子,<南帝>段智兴的祖父.因不小心闯入无量山的<琅嬛福地>中,从洞中一尊玉像<神仙姐姐>处学会<凌波微步>和<北冥神功>.(使用<六脉神剑>/<凌波微步>秘籍后,【六脉神剑】/【凌波微步】进阶)',
						XK_jinlunguoshi: '属于蒙古密教金刚宗,同时也是效忠于蒙古的国师.性格特征不太突出,亦正亦邪,膨胀自大,心理素质较差.(使用<龙象般若功>秘籍后,【龙象般若功】进阶)',
						XK_fengzhongzhishen: '长相英俊潇洒,心地善良,性情温然恬淡.少年入天下会,与步惊云相识,此后开启了他们一系列武林大事,成为继无名之后的唯二神话,被誉为风中之神.(使用<风神腿法>秘籍后,【风神腿法】进阶)',
						XK_wudangzushi: '为人天赋异禀、正气凛然,宽和从容,颇有仙风道骨之姿,是当世无出其右的武学奇才.百岁之时自创太极拳剑,将武当派发扬光大,威名远扬.(使用<太极拳>秘籍后,【太极拳】进阶)',
						XK_linghudaxia: '华山派大弟子,后成为恒山派掌门.个性放荡不羁,爽朗豁达,豪迈潇洒,亦不拘小节,有高度的忠诚心境,侠义心肠,并且深情不移.(使用<独孤九剑>秘籍后,【独孤九剑】进阶)',
						XK_huajiuse: '朝鲜四大高手,生来便目不识物,但凭着超乎常人的触觉与嗅觉而练就绝世武功.',
						XK_fanweili: '天龙八部之阿修罗.武功莫测高深,个性狂野不羁,常着一袭蓝色披风.与任天翔有过一段感情纠葛,却又反目成仇.平素住在修罗宫,极少在江湖露面,但一旦有任天翔出现,阿修罗势必会加入其敌对阵营.',
						XK_budong: '因儿时曾遭逢巨变,导致心智发展封闭而迟缓,直到十岁才会言语.却也因此得以专心于武道的修练,年纪虽小,实力在少林寺内已出类拔萃.',
						XK_shenyi: '忘忧七贤之一,沈湘芸之父,悬壶济世的名医,忘忧七贤中在江湖走动最多的一人.',
						XK_longmo: '点苍派少门主,风流倜傥、个性直爽.点苍派向来以剑立道,但龙墨却对刀情有独钟,另辟蹊径将点苍剑法融入快刀施展,因此而遭到点苍耆老们的反对,一气之下,远走出门.',
						XK_caodai: '华山派现任掌门,爱女如命,平素为人慈和.但极重正邪之别.视魔教为武林之疸,亟欲除之后快.',
						XK_qijiangjun: '当今朝廷硕果仅存的忠臣良将,忠君爱国,树功甚伟.一心想找出东厂勾结外寇之证据.',
						XK_hetuo: '吐蕃大轮寺护寺明王,与利空法王并称吐蕃两大活佛,佛法修为精湛,一手火焰刀出神入化,但内心却十分功利,未达目的不择手段.',
						XK_fangyunhua: '武当派大弟子.相貌堂堂,风流倜傥,武功为当代弟子之首,自称是风流剑客.除了女人之外,对于历代书法名家的作品也多有偏爱.',
						XK_bore: '本是洛阳富商之后,却有着极高的武学天赋.外表正直,常行侠仗义,为善一方,人称河洛大侠.交友广阔,人脉极广,但光鲜的背后,似乎有着不为人知的重大秘密.',
						XK_mengqiansi: '酆都的斥候,出身不详,隐身于台面之下,负责刺探与情报搜集.擅使迷魂术,配合其美色时常可以套出一些极其隐密的情报.',
						XK_shuipanpan: '峨嵋派弟子,是个英气蓬勃的女侠.个性干练果断,恩怨分明,素来有巾帼不让须眉的美誉,亦是上届少年英雄会探花,排名仅在谷月轩与萧复之下.',
						XK_fenghuayishi: '动物园长.无名杀官方扩展群群友.',
						XK_xuedaoshaozhu: '血刀门门主.无名杀官方扩展群群友,大型扩展<玄武江湖>背景故事的作者.',
						XK_zhengxuan: '写作郎情妾意,读作奸夫淫妇.无名杀官方扩展群群友,大型扩展<云将扩展>的作者.',
						XK_yuwenxingcheng: '无名杀官方扩展群群友,大型扩展<玄武江湖>的作者.',
						XK_shiguang: '无名杀官方扩展群群友,一号友情客串角色,为扩展<侠客风云传>的完善提供了极大的帮助.',
						XK_fujianhan: '无师自通的剑术奇才,无意中得到一本兵书,从其中兵法创出一套剑法,名为霸王剑法,其剑招看似平常,却皆能在关键之时克敌制胜.此人有过人的酒量曾和老酒鬼大战三百回合不分胜负.',
						XK_chuhui: '与江南第一名妓香儿并称的奇女子,真实身分是侠盗夜飘香,似乎拥有十分传奇的身世.',
						XK_zhaoyaer: '小名紫衣,外表清纯美丽,看似柔弱婉约,其实是诈骗集团中人.赵雅儿本为孤儿,被一诈骗集团之人所收养,长大后与收养她之人以母女关系进行诈骗.',
						XK_wali: '作者很懒,什么都没有留下……',
						XK_yinshiyun: '朝鲜四大高手之一,刀后尹嫫欣之子.命犯天煞孤星,早已下定决心此生只与魔刀为伴.',
						XK_xuziqi: '徐子易之弟,喜游历,志于撰写徐氏游记.喜欢收集各地文物、土产.武学造诣极端深厚,懂得不少失传百年以上的绝活,且擅长各种杂学,厨艺堪比朝廷御厨.',
						XK_xuziyi: '江湖说书人,号称无所不知,身世成谜.江湖上所有大小事情均逃不过他的掌握.着有<武林通鉴>一书,对于江湖人物的生平事迹有详细记载,并有其独到的见解与排名.',
						XK_weiziling: '银枪卫豹的千金,精灵古怪,聪黠多变.个性有些刁蛮任性且得理不饶人,对于看不过眼的事绝不宽放.然而内心十分温柔善良,偶尔也会展现柔情似水的一面.',
						XK_tianjilaodao: '年过百岁,修为精湛的奇人.一身失传的全真教武学,在江湖中罕逢敌手,其师父是百年前名动江湖的丐帮帮主耶律大侠.',
						XK_heizhongluowang: '东瀛海上霸主,统领成千上万的倭寇,对沿海造成极大的威胁.亦是东瀛忍者集团首领,施得诡秘的忍术而使人防不胜防,精通无声杀人法.',
						XK_zhuorenqing: '现任武当掌门何秋娟的生父,与易兰有一段不为人知的过往.因方云华人品不佳、性格跋扈,担心武当的未来而有意要将掌门之位传于武功平平,却为人敦厚的古实,却不料就此埋下武当内乱的隐忧.',
						XK_lingxianger: '天龙八部之乾达婆,性情温和的女性,只喜欢弹琴、音乐,不喜与人交往.天王心腹,一心要救天王脱离少林.同时还有另外一个身份,为江南第一名妓,年仅一八岁便艳名远播,但是卖艺不卖身.曾有富商出一万两为其赎身,却遭拒,并不以卖艺为耻.',
						XK_xianyin: '忘忧七贤之一,精于音律.传说她所弹奏的乐曲有如天籁之音,能控制人的喜怒哀乐.',
						XK_jiwen: '兽王庄四庄主.自小由义父庄主万青山一手带大.对于捕兽、驯兽手法自是轻车熟路,手中的皮鞭乃其八岁那年所杀的巨鳄皮制成.个性独立,性格泼辣.',
						XK_renqingxuan: '修罗宫四宫主.貌如月季,态拟水仙.个性善良,但不易和人亲近,身世鲜为人知.此人深爱花艺,对各类花卉如数家珍,身上会散发出一股淡淡花香,是个谜样的女子.',
						XK_fengchuixue: '天意城杀手,代号为「花」.为四大杀手之一「侍」的徒弟.忠于组织,外冷内热;容貌秀美,气质孤傲.平日作男性打扮行动.师父「侍」因任务失败而死,此后便一直等待着为师父复仇的机会.',
						XK_lanting: '毒龙教历任最年轻的教主.面貌姣好,有苗家姑娘的直率与天真,却又有手段狠毒的一面,让人着实猜不透她的心.擅长使毒、淬毒;喜爱江南丝绸织品.',
						XK_huangdi: '老子就是朕,朕就是皇帝!',
						XK_jiuyin: '原峨嵋弟子,偷窃峨嵋周师祖的九阴真经残篇后叛逃出门,练得一身阴毒的武功,实力不在当年的周芷若与梅超风之下.',
						XK_youjin: '戴着罗剎面具,以恶鬼形象威吓贼寇的锦衣卫指挥使.位阶三品,实力精强,不下于任何一个名门正派的掌门.',
						XK_wangrong: '塞外好汉王虎之女,被金刀王虎送到逍遥谷学艺,成为逍遥谷的小师妹,天资灵慧聪颖、娇美顽皮、精于厨艺、擅长刀法、口才极好.',
						XK_luoshejun: '天龙八部之摩呼罗迦,天龙教中使毒的高手.个性阴沉,行事毒辣,在江湖中恶名远播.隶属龙王麾下,专司笼络武林各大门派的势力.',
						XK_xuanmingzi: '无瑕子的师弟,原本也是逍遥谷传人,在无瑕子跟萧潇之间,有着一段不为人知的纠葛,因此对天山派十分怨恨.后叛出逍遥谷,投奔天龙教,为人阴狠,十分懂得利用人性的弱点.身具百年前失传的「化功大法」绝活,并擅于用毒.',
						XK_shenlan: '怪医沈鸩与白丝之女,沈湘芸的堂姐.个性怪辟,最喜欢钻研毒术,隐居在谷外的大森林中.后用主角的身体炼出了<七彩蛊王>,并到西域行医,以毒术为他人治病,成为了当地赫赫有名的<毒大夫>.',
						XK_wuyin: '少林方丈,无字辈的大师兄.十年前联络正道高手击败天龙教,囚禁厉苍天的主谋.然而令他始料不及的是,厉苍天的继任者龙王,比其兄更为狡诈凶险,天龙教并未因教主被擒而没落,反而更加壮大.',
						XK_chenchongying: '东厂头目,手段阴狠,武功造诣不明.是当今朝中最令忠臣义士切齿痛恨的一人.借囚禁忠臣的机会,打算诱出与朝廷作对的江湖人,并将他们一网打尽.',
						XK_qinhongshang: '霹雳堂护法,一心想重振霹雳堂威名.看似高傲强悍,实则内心也有柔情似水的一面.',
						XK_taya: '花族少女,天资聪颖,可举一反三,对于数术极有兴趣,因此被星像塔中的长老收为徒弟,专门学习数学与天文方面知识,被称为部族中的智者「沙吉丝」.',
						XK_jingji: '逍遥谷第四代二弟子,身世不详.热衷兵器,无瑕子多传其刀剑功夫,配合其惯用武器更显威力.常与师兄一起行侠仗义,但名气不如大师兄.个性倨傲,说话刻薄辛辣,其实心地不坏,是嘴硬心热的人物.',
						XK_guyuexuan: '逍遥谷第四代大弟子,内力修为精纯,无瑕子多传其拳掌功夫.为人端方斯文,一身正气.平日行走江湖,维护正义,故人称逍遥拳不平.曾在陜北独力歼灭西北十三大盗,平日以收集瓷器为乐.',
						XK_wuxiazi: '逍遥谷第三代掌门,年近七十,武学造诣极高,曾与其交过手的前辈几乎均已仙逝,故无人知道其武功现在已至何等境地.在江湖上德高望重,近年来已不太出谷,专心研究琴、棋、书、画.',
						XK_leizhentian: '五岳四龙之一,浑号「轰天槌」.',
						XK_shenxiangyun: '娴雅端秀,为忘忧谷神医之女.通灵体质,平素温和善良,有些小任性.但对厌恶的人事物毫不假以辞色.喜欢研究新的丹药,有收集伞的嗜好.',
						XK_shiyan: '身世不详,人称「盗墓燕」.由于从小便是孤儿,养成独立而古灵精怪的个性,见钱眼开,喜好一切的财宝古玩,尤以金饰为甚.',
						XK_yangdi: '野拳门门主齐老之独生女,娇俏而生性乖巧,爱吃酸甜的零嘴.平时随着齐老在街头卖艺,无意习武,一心只想做个普通的姑娘.',
						XK_yangdi: '当今朝廷的国师,武功集西域与天竺、以及中土少林寺之长,实力犹胜少林方丈.',
						XK_xuanligong: '练就天残神功的奇人,自幼就被送入宫中.精于易容,老谋深算,在天意城的杀手代称是:「缺」.',
						XK_kexianglong: '上任丐帮帮主,武林名宿,身负神龙腿法、降龙十八掌等多门绝学.为人热血侠义,在江湖颇有声望.平生只有一个弱点,一旦闻到了叫化鸡的味道,便走不动路.',
						XK_jiwushuang: '天龙八部之夜叉,身着红衣的艳美女子.擅长轻功,邪气逼人,龙王麾下的第一战将.',
						XK_weiming: '立志成为要超越小虾米的大英雄,逍遥谷第四代弟子,体内潜藏着无限的可能性.',
						XK_xiaoxiami: '二十一世纪的人,在家玩计算机玩到睡著,不知道什麼原因误打误撞穿越了时空,来到了一个刀光剑影的武侠世界.为了回到温暖的家,小虾米努力成为武林盟主,并且蒐集到了十四天书,最终在「南贤」、「北丑」等人的协助之下,终於找到了圣堂,打败武林十大高手,进入时空的裂隙.',
						XK_yandansheng: '酆都帮主,统领着上千「鬼众」,自海外阿鼻岛崛起的一代怪杰,素有大志,为人粗中有细,豪气干云.早年联合东海龙宫和神枪会逐步壮大,称霸东南沿海,败官兵,退倭寇,在东南沿海有着极高声望,如今已然成为绿林第一大帮派.',
						XK_jiangtianxiong: '杀手组织天意城的首领,其真实身分、来历皆不明,就连许多资深杀手都未曾亲眼见过本人,甚至还有天意城主根本不只一人的传说.',
						XK_xiaolinzi: '天意城城主,也是法外三旬事件幕后真正主使,为了称雄武林而无所不用其极.即便拖着残缺的身躯,百年来心里的火焰都未曾熄灭.',
						XK_licangtian: '天龙八部之首,天龙教创教者.在许多江湖人心中,天王就是邪恶的化身、武林大魔头.但很少有人知道天王心中的宏图伟业,要在遥远的西方,创建一个没有纷争的理想国.',
						XK_licanglong: '天龙八部之龙,现任天龙教教主.与兄长厉苍天相比,龙王行事更加霸道乖戾,武功手段更为狠毒.龙王的唯一目标,就是称霸武林.',
						XK_jiansheng: '少时便名噪江湖,剑法精妙,无人能当,世人皆称之为剑圣,真名已佚,后厌倦江湖,十年前隐居剑庐.',
					}, //介绍
					characterTitle: {
						XK_saiwangye: '塞北之虎',
						XK_rentianxiang: '迦楼罗',
						XK_renhaoran: '铸剑庄主',
						XK_luyuer: '逍遥一梦',
						XK_ying: '蹑影追风',
						XK_fomu: '辟邪忠仆',
						XK_yangyun: '江湖游侠',
						XK_xianxier: '王家骑士',
						XK_wuse: '少林三神僧',
						XK_yuepangzi: '隐元少阁主',
						XK_laohu: '雪山飞狐',
						XK_nalanyan: '紧那罗',
						XK_lang: '天意之浪',
						XK_fengqingxiao: '青天灼日',
						XK_huachi: '花香四溢',
						XK_tangzhonghui: '紫飞刀',
						XK_mingjiaojiaozhu: '九阳宗师',
						XK_riyuejiaozhu: '吸星宗师',
						XK_fengzhongzhishen: '风神宗师',
						XK_yihuagongzhu: '明玉宗师',
						XK_litanhua: '飞刀宗师',
						XK_jinlunguoshi: '龙象宗师',
						XK_dalishizi: '六脉宗师',
						XK_wudangzushi: '太极宗师',
						XK_linghudaxia: '九剑宗师',
						XK_huajiuse: '花间诗人',
						XK_fanweili: '阿修罗',
						XK_budong: '不语罗汉',
						XK_shenyi: '医仙',
						XK_caodai: '岱宗如何',
						XK_longmo: '点苍刀',
						XK_qijiangjun: '忠字当头',
						XK_hetuo: '大轮明王',
						XK_fangyunhua: '玉面侠剑',
						XK_bore: '河洛大侠',
						XK_mengqiansi: '孟婆',
						XK_shuipanpan: '冰心女侠',
						XK_fenghuayishi: '动物园长',
						XK_xuedaoshaozhu: '血魔傲刃',
						XK_zhengxuan: '郎情妾意剑',
						XK_yuwenxingcheng: '丹心墨道',
						XK_shiguang: '年轻的天王',
						XK_fujianhan: '饮中四侠',
						XK_chuhui: '夜飘香',
						XK_zhaoyaer: '骗子少女',
						XK_wali: '作者',
						XK_yinshiyun: '天煞孤星',
						XK_xuziqi: '十全少年',
						XK_xuziyi: '江湖百晓生',
						XK_weiziling: '紫霓裳',
						XK_heizhongluowang: '东瀛霸主',
						XK_tianjilaodao: '先天子',
						XK_zhuorenqing: '真武道人',
						XK_lingxianger: '乾达婆',
						XK_xianyin: '忘忧七贤',
						XK_jiwen: '河东狮',
						XK_renqingxuan: '姚黄仙子',
						XK_fengchuixue: '天意之花',
						XK_lanting: '毒龙教主',
						XK_huangdi: '天下第一人',
						XK_jiuyin: '咒诅佛',
						XK_youjin: '铁面罗剎',
						XK_wangrong: '小师妹',
						XK_luoshejun: '摩呼罗迦',
						XK_xuanmingzi: '辣手毒心',
						XK_shenlan: '怪医少女',
						XK_wuyin: '少林方丈',
						XK_chenchongying: '东厂不败',
						XK_qinhongshang: '霹雳火',
						XK_taya: '沙吉丝',
						XK_jingji: '刀剑双绝',
						XK_guyuexuan: '逍遥拳不平',
						XK_wuxiazi: '逍遥散人',
						XK_leizhentian: '轰天槌',
						XK_shenxiangyun: '小医仙',
						XK_shiyan: '盗墓燕',
						XK_qili: '江湖游侠',
						XK_yangdi: '大明国师',
						XK_xuanligong: '西厂统领',
						XK_kexianglong: '飞天神龙',
						XK_jiwushuang: '夜叉',
						XK_yandansheng: '阎罗',
						XK_jiangtianxiong: '天意城主',
						XK_xiaolinzi: '辟邪老人',
						XK_licangtian: '天王',
						XK_licanglong: '龙王',
						XK_jiansheng: '花仙',
					}, //称号
					perfectPair: {}, //珠联壁合
					skill: {
						//侠客技能
						XK_jiuyinshenzhua: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_saiwangye';
							},
							init(player) {
								player.storage.XK_shitianbaifan = 0;
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_saiwangye.mp3');
							},
							group: ['XK_shitianbaifan', 'XK_shitianbaifanex', 'XK_zhuihunyinsha'],
							ai: {
								XKzhaoshi: true,
							},
						},
						XK_shitianbaifan: {
							trigger: { player: 'phaseBefore' },
							forced: true,
							content() {
								var next = player.phaseUse();
								event.next.remove(next);
								trigger.next.push(next);
							},
						},
						XK_shitianbaifanex: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: { player: ['phaseDrawBefore', 'phaseUseBefore'] },
							prompt2(event, player) {
								if (event.name == 'phaseDraw') {
									return '是否跳过摸牌阶段？';
								} else {
									return '是否跳过出牌阶段？';
								}
							},
							filter(event, player) {
								return true;
							},
							check(event, player) {
								if (event.name == 'phaseDraw') {
									if (player.countCards('h') < 3) return false;
									if (!player.hasSkill('XK_kuangnu')) return true;
									if (player.hasSkill('XK_fanshou')) return true;
								} else {
									if (!player.hasSkill('XK_fanshou')) return true;
								}
							},
							content() {
								if (trigger.name == 'phaseDraw') {
									game.log(player, '跳过了摸牌阶段');
								} else {
									game.log(player, '跳过了出牌阶段');
								}
								player.storage.XK_shitianbaifan++;
								trigger.cancel();
							},
						},
						XK_zhuihunyinsha: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: ['phaseAfter'],
							},
							_priority: -299,
							filter(event, player) {
								return player.storage.XK_shitianbaifan && player.storage.XK_shitianbaifan > 0;
							},
							forced: true,
							content() {
								var num1 = player.storage.XK_shitianbaifan;
								if (num1 >= 1) player.addBuff('XK_kuangnu', 2, player);
								if (num1 >= 2) player.addBuff('XK_fanshou', 2, player);
								if (num1 >= 3) player.addBuff('XK_shihun', 2, player);
								player.storage.XK_shitianbaifan = 0;
							},
							ai: {
								XK_selfbuff: true,
							},
						},
						XK_jiuyinfeixu: {
							init(player) {
								player.storage.XK_wuqu = 0;
							},
							group: ['XK_wuqu', 'XK_wuqu1', 'XK_wuqu2', 'XK_dazhoutian', 'XK_dazhoutian1'],
							ai: {
								XKneigong: true,
							},
						},
						XK_wuqu: {
							enable: ['chooseToRespond', 'chooseToUse'],
							filterCard(card) {
								return false;
							},
							position: 'he',
							viewAs: {
								name: 'sha',
							},
							selectCard: -1,
							viewAsFilter(player) {
								var nm = player.storage.XK_wuqu;
								return player.countCards('he') > nm;
							},
							prompt: '你可弃置X张牌摸1张牌,视为使用或打出1张杀,X为你本轮已发动此技能次数',
							check(card) {
								var num = player.storage.XK_wuqu;
								return num < 3;
							},
							onuse(result, player) {
								var num = player.storage.XK_wuqu;
								if (num > 0) {
									player.chooseToDiscard('he', num, true);
								}
								player.draw();
								player.storage.XK_wuqu++;
								game.playAudio('../extension/侠客风云传/audio/XK_wuqu1.mp3');
							},
							onrespond(event, player) {
								var num = player.storage.XK_wuqu;
								if (num > 0) {
									player.chooseToDiscard('he', num, true);
								}
								player.draw();
								player.storage.XK_wuqu++;
								game.playAudio('../extension/侠客风云传/audio/XK_wuqu1.mp3');
							},
							ai: {
								respondSha: true,
							},
						},
						XK_wuqu1: {
							trigger: {
								player: ['chooseToRespondBegin', 'chooseToUseBegin'],
							},
							filter(event, player) {
								if (event.responded) return false;
								if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
								if (event.name == 'chooseToRespond' && !lib.filter.cardRespondable({ name: 'shan' }, player, event)) return false;
								var nm = player.storage.XK_wuqu;
								return player.countCards('he') >= nm;
							},
							check(event, player) {
								return !player.countCards('h', 'shan');
							},
							prompt2(event, player) {
								return '你可弃置X张牌摸1张牌,视为使用或打出1张闪,X为你本轮已发动此技能次数';
							},
							content() {
								'step 0';
								var num = player.storage.XK_wuqu;
								if (num > 0) {
									player.chooseToDiscard('he', num, true);
								}
								player.storage.XK_wuqu++;
								('step 1');
								player.draw();
								('step 2');
								trigger.untrigger();
								trigger.responded = true;
								trigger.result = { bool: true, card: { name: 'shan' } };
								game.playAudio('../extension/侠客风云传/audio/XK_wuqu1.mp3');
							},
							ai: {
								respondShan: true,
								effect: {
									target(card, player, target, effect) {
										if (get.tag(card, 'respondShan')) return 0.5;
									},
								},
							},
						},
						XK_wuqu2: {
							trigger: {
								global: 'roundStart',
							},
							charlotte: true,
							_priority: 20,
							forced: true,
							content() {
								player.storage.XK_wuqu = 0;
							},
						},
						XK_shihun: {
							charlotte: true,
							intro: {
								content(storage) {
									return '噬魂夺魄,你使用杀造成伤害后,可回复1点体力或获得目标1张手牌';
								},
							},
							mark: true,
							trigger: {
								source: 'damageEnd',
							},
							_priority: 28,
							filter(event, player) {
								if (!event.card || event.card.name != 'sha' || !event.notLink()) return false;
								if (event.num <= 0) return false;
								return event.player.countCards('h') || player.isDamaged();
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseControlList(['回复1点体力', '获得' + get.translation(trigger.player) + '1张手牌'])
									.set('ai', function (event, player) {
										if (player.isDamaged()) return 0;
										else return 1;
									})
									.set('prompt', '【噬魂】:请选择一项');
								('step 1');
								if (result.control != 'cancel2') {
									if (result.index == 0) {
										player.recover();
									} else {
										player.gainPlayerCard('h', trigger.player, 1, true);
									}
								}
							},
							ai: {
								XK_buff: true,
							},
						},
						XK_jinyizhan: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_rentianxiang';
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_rentianxiang.mp3');
							},
							group: ['XK_jindiaopengfei', 'XK_jinyizhanchi'],
							ai: {
								XKzhaoshi: true,
							},
						},
						XK_jindiaopengfei: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: { global: ['loseAfter', 'cardsDiscardAfter'] },
							forced: true,
							filter(event, player) {
								if (!player.isPhaseUsing()) return false;
								if (event.name == 'lose' && event.position != ui.discardPile) return false;
								var list = [];
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (['diamond', 'club'].includes(i.suit)) list.push(i);
									}
								game.getGlobalHistory(
									'cardMove',
									function (evt) {
										if (evt == event || (evt.name != 'lose' && evt.name != 'cardsDiscard')) return false;
										if (evt.name == 'lose' && evt.position != ui.discardPile) return false;
										for (var i = 0; i < evt.cards.length; i++) {
											var card = evt.cards[i];
											list.remove(card);
										}
									},
									event
								);
								return list.length;
							},
							content() {
								'step 0';
								var lts = [];
								for (var i = 0; i < trigger.cards.length; i++) {
									var st = trigger.cards[i].suit;
									if (st == 'diamond' || st == 'club') {
										lts.push(trigger.cards[i]);
									}
								}
								game.getGlobalHistory(
									'cardMove',
									function (evt) {
										if (evt == trigger || (evt.name != 'lose' && evt.name != 'cardsDiscard')) return false;
										if (evt.name == 'lose' && evt.position != ui.discardPile) return false;
										for (var i = 0; i < evt.cards.length; i++) {
											var card = evt.cards[i];
											lts.remove(card);
										}
									},
									trigger
								);
								if (lts.length == 0) {
									event.finish();
								} else {
									if (!player.hasSkill('XK_lianji')) {
										player.addSkill('XK_lianji');
									}
									player.storage.XK_lianji += lts.length;
									if (player.storage.XK_lianji > 5) {
										player.storage.XK_lianji = 5;
									}
								}
							},
						},
						XK_jinyizhanchi: {
							audio: 'ext:侠客风云传/audio:1',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								if (!player.countCards('h')) return false;
								return game.hasPlayer(function (current) {
									return current != player && current.countCards('h');
								});
							},
							prompt: '出牌阶段开始,你可令你与1名其他角色重铸1张手牌,若你/该角色重铸的是闪/杀,你获得【追魂】/【识破】1回合.',
							filterTarget(card, player, target) {
								return player != target && target.countCards('h');
							},
							selectTarget: 1,
							content() {
								'step 0';
								event.pla = player;
								player.chooseCardButton('请重铸一张手牌,若你所重铸的是闪,你获得【追魂】1回合.', player.getCards('h'), 1, true).ai = function (button) {
									var att = get.attitude(event.pla, target);
									if (att > 0) {
										if (button.link.name == 'shan') return 20;
									}
									return 6 - get.value(button.link);
								};
								('step 1');
								event.cd1 = result.links[0];
								player.lose(event.cd1, ui.discardPile);
								player.$throw(event.cd1, 1000);
								game.log(player, '将', event.cd1, '置入了弃牌堆');
								player.draw();
								('step 2');
								target.chooseCardButton('请重铸一张手牌,若你所重铸的是杀,令' + get.translation(player) + '获得【识破】1回合.', target.getCards('h'), 1, true).ai = function (button) {
									var att = get.attitude(target, event.pla);
									if (att > 0) {
										if (button.link.name == 'sha') return 20;
									}
									return 6 - get.value(button.link);
								};
								('step 3');
								event.cd2 = result.links[0];
								target.lose(event.cd2, ui.discardPile);
								target.$throw(event.cd2, 1000);
								game.log(target, '将', event.cd2, '置入了弃牌堆');
								target.draw();
								('step 4');
								if (event.cd1.name == 'shan') {
									player.addBuff('XK_zhuihun', 1, player);
								}
								if (event.cd2.name == 'sha') {
									player.addBuff('XK_shipo', 1, player);
								}
							},
							ai: {
								XK_selfbuff: true,
								expose: 0.3,
								result: {
									target: 1,
								},
								order: 9,
							},
						},
						XK_jinyishengong: {
							group: ['XK_liezhua', 'XK_liezhuaex', 'XK_dazhoutian', 'XK_dazhoutian1'],
							ai: {
								XKneigong: true,
							},
						},
						XK_liezhua: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								global: 'shaMiss',
							},
							forced: true,
							filter(event, player) {
								if (event.player == player) return false;
								if (player.hasSkill('XK_liezhua2')) return false;
								return get.itemtype(event.cards) == 'cards' && get.position(event.cards[0], true) == 'o';
							},
							content() {
								'step 0';
								event.pla = player;
								trigger.player.chooseBool(get.prompt('XK_liezhua'), '是否令' + get.translation(player) + '获得' + get.translation(trigger.cards) + '？').set('ai', function () {
									var trigger = _status.event.getTrigger();
									return get.attitude(trigger.player, event.pla) > 0;
								});
								('step 1');
								if (result.bool) {
									player.gain(trigger.cards, 'gain2');
									player.addTempSkill('XK_liezhua2');
								}
							},
						},
						XK_liezhuaex: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								source: 'damageAfter',
							},
							forced: true,
							filter(event, player) {
								if (player.hasSkill('XK_liezhua2')) return false;
								if (!event.card || event.card.name != 'sha' || !event.notLink()) return false;
								return get.itemtype(event.cards) == 'cards' && get.position(event.cards[0], true) == 'o';
							},
							content() {
								'step 0';
								player.chooseTarget(get.prompt('XK_liezhua'), '你可令1名其他角色获得' + get.translation(trigger.cards), function (card, player, target) {
									return player != target;
								}).ai = function (target) {
									var att = get.attitude(player, target);
									return att;
								};
								('step 1');
								if (result.targets?.length) {
									result.targets[0].gain(trigger.cards, 'gain2');
									player.addTempSkill('XK_liezhua2');
								}
							},
						},
						XK_liezhua2: {
							charlotte: true,
						},
						XK_wuyuejianyi: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_renhaoran';
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_renhaoran.mp3');
							},
							group: ['XK_zhenwuyue', 'XK_zhenwuyueex'],
							ai: {
								XKzhaoshi: true,
							},
						},
						XK_zhenwuyue: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							_priority: 15,
							forced: true,
							content() {
								'step 0';
								var list1 = [];
								var list = get.inpile('equip');
								for (var i = 0; i < list.length; i++) {
									var card = { name: list[i] };
									var info = get.info(card);
									if (info.subtype == 'equip1' && info.skills) {
										list1.push(list[i]);
									}
								}
								for (var i = 0; i < list1.length; i++) {
									list1[i] = ['武器', '', list1[i]];
								}
								if (list1.length) {
									var dialog = ui.create.dialog('声明一张武器牌令你获得其特效直到下回合开始', [list1, 'vcard'], 'hidden');
									player.chooseButton(dialog, true).set('ai', function (button) {
										var nm = button.link[2];
										if (player.countCards('h', { name: nm }) > 1) return 20;
										return get.equipValue(card);
									});
								}
								('step 1');
								if (result.bool) {
									player.addTempSkill('XK_zhenwuyueex', { player: 'phaseAfter' });
									var card = { name: result.buttons[0].link[2] };
									var name = result.buttons[0].link[2];
									player.storage.XK_zhenwuyueex = name;
									game.log(player, '获得了', get.translation(name), '的效果');
									var info = get.info(card);
									if (info.skills) {
										player.addAdditionalSkill('XK_zhenwuyueex', info.skills);
										player.markSkill('XK_zhenwuyueex');
									} else {
										player.removeAdditionalSkill('XK_zhenwuyueex');
									}
								}
							},
							ai: {
								expose: 0.3,
							},
						},
						XK_zhenwuyueex: {
							audio: 'ext:侠客风云传/audio:1',
							charlotte: true,
							marktext: '镇',
							intro: {
								content(storage) {
									if (storage) {
										return '获得了:' + get.translation(storage) + '的效果';
									}
								},
							},
							onremove(player) {
								player.unmarkSkill('XK_zhenwuyueex');
							},
							filter(event, player) {
								if (!player.storage.XK_zhenwuyueex) return false;
								return event.card.name == player.storage.XK_zhenwuyueex;
							},
							trigger: {
								player: ['equipAfter'],
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget(
										get.prompt('XK_zhenwuyue'),
										'你可令1名其他角色获得【晕眩】1回合',
										1,
										false,
										function (card, player, target) {
											return target != player;
										},
										true
									)
									.set('ai', function (target) {
										var att = get.attitude(player, target);
										return -att;
									});
								('step 1');
								if (result.targets?.length) {
									result.targets[0].addBuff('XK_yunxuan', 1, player);
								}
							},
						},
						XK_shenjianjue: {
							group: ['XK_yebing', 'XK_shanjia', 'XK_xiaozhoutian'],
							ai: {
								XKneigong: true,
							},
						},
						XK_yebing: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'phaseDiscardAfter',
							},
							filter(event, player) {
								return event.cards && event.cards.length;
							},
							_priority: -1,
							forced: true,
							content() {
								'step 0';
								var tp = trigger.cards.length;
								if (tp == 1) event.tp = 'XK_shangyao';
								else if (tp == 2) event.tp = 'XK_taihuang';
								else if (tp == 3) event.tp = 'XK_fengmozhang';
								else event.tp = 'XK_aotianshenjian';
								player
									.chooseTarget(
										get.prompt('XK_yebing'),
										'你可令1名角色装备' + get.translation(event.tp),
										1,
										false,
										function (card, player, target) {
											return true;
										},
										true
									)
									.set('ai', function (target) {
										var att = get.attitude(player, target);
										if (!target.isEmpty(1)) att = 0;
										return att;
									});
								('step 1');
								if (result.bool) {
									var st = ['club', 'heart', 'diamond', 'spade'].randomGet();
									var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].randomGet();
									result.targets[0].equip(game.createCard({ name: event.tp, suit: st, number: num }));
								}
							},
							ai: {
								expose: 0.4,
							},
						},
						XK_shanjia: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'phaseUseBegin',
							},
							filter(event, player) {
								return player.countCards('e') < 4;
							},
							check(event, player) {
								var nm = 4 - player.countCards('e');
								return nm > 2 && player.hp > 1;
							},
							prompt2(event, player) {
								var nm = 4 - player.countCards('e');
								return '你可失去1点体力并摸' + nm + '张牌.';
							},
							content() {
								var nm = 4 - player.countCards('e');
								player.loseHp();
								player.draw(nm);
							},
						},
						XK_qixingjianfa: {
							init(player, skill) {
								player.storage.XK_xingmieguangli_a = [];
								player.storage.XK_xingmieguangli_b = [];
							},
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_luyuer';
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_luyuer.mp3');
							},
							group: ['XK_xingmieguangli', 'XK_xingmieguangli1'],
							ai: {
								XKzhaoshi: true,
							},
						},
						XK_xingmieguangli: {
							audio: 'ext:侠客风云传/audio:1',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								if (player.getCardUsable('sha') == 0) return false;
								if (player.countCards('h', { color: 'red' }) && !player.hasJudge('lebu')) return true;
								if (player.countCards('h', { color: 'black' }) && !player.hasJudge('bingliang')) return true;
								return false;
							},
							content() {
								'step 0';
								player
									.chooseCard(get.prompt('XK_xingmieguangli'), '可将1张红/黑色手牌当作乐不思蜀/兵粮寸断置于自己判定区,视为使用1张伤害基数+1的杀,目标需将1张其他颜色手牌置于其判定区,否则此杀无法被闪避.', function (card) {
										if (player.hasJudge('bingliang')) return get.color(card) == 'red';
										if (player.hasJudge('lebu')) return get.color(card) == 'black';
										return get.color(card) == 'red' || get.color(card) == 'black';
									})
									.set('ai', function (card) {
										return 4.5 - get.value(card);
									});
								('step 1');
								if (result.cards?.length) {
									if (get.color(result.cards[0]) == 'red') {
										var na = 'lebu';
									} else {
										var na = 'bingliang';
									}
									player.useCard({ name: na }, result.cards, player);
									event.Cardcolor = get.color(result.cards[0]);
									player.chooseUseTarget({ name: 'sha' }, true, true);
								} else event.finish();
							},
							ai: {
								order: 9,
								result: {
									player: 2,
								},
							},
						},
						XK_xingmieguangli1: {
							trigger: {
								player: 'shaBegin',
							},
							forced: true,
							filter(event, player) {
								return event.getParent(3).name == 'XK_xingmieguangli' && event.getParent(3).Cardcolor;
							},
							content() {
								'step 0';
								trigger.baseDamage++;
								event.col = trigger.getParent(3).Cardcolor;
								('step 1');
								var nm = trigger.target.countCards('h', function (card) {
									return get.color(card) != event.col;
								});
								if (!nm) {
									event.goto(3);
								} else {
									trigger.target
										.chooseCard('将一张颜色不为' + get.translation(event.col) + '的手牌置于你的判定区(红色:乐不思蜀,黑色:兵粮寸断),否则无法闪避' + get.translation(player) + '对你使用的' + get.translation(trigger.card), function (card) {
											return get.color(card) != event.col;
										})
										.set('ai', function (card) {
											var tar = _status.event.getTrigger().target;
											if (!tar.hasUsableCard('shan')) return -1;
											return 4.5 - get.value(card);
										});
								}
								('step 2');
								if (result.cards?.length) {
									if (get.color(result.cards[0]) == 'red') {
										var na = 'lebu';
									} else {
										var na = 'bingliang';
									}
									trigger.target.useCard({ name: na }, result.cards, trigger.target);
									event.finish();
								} else event.goto(3);
								('step 3');
								trigger.directHit = true;
							},
						},
						XK_beidounuoyi: {
							group: ['XK_xingxuexuanzhuan', 'XK_douzhuanxingyi', 'XK_dazhoutian', 'XK_dazhoutian1'],
							ai: {
								XKneigong: true,
							},
						},
						XK_xingxuexuanzhuan: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								source: 'damageBegin4',
							},
							filter(event, player) {
								if (event.parent.name == 'XK_xingxuexuanzhuan') return false;
								if (!event.notLink()) return false;
								return event.num > 1;
							},
							forced: true,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('XK_xingxuexuanzhuan'), '你造成伤害时,可为任意名角色分配此回复数值.', [1, trigger.num], function (card, player, target) {
									return true;
								}).ai = function (target) {
									var nu = _status.event.getTrigger().nature;
									var eff = get.damageEffect(target, player, player, nu);
									return eff;
								};
								('step 1');
								if (result.targets?.length) {
									event.tars = result.targets.splice(0);
									event.nm = trigger.num;
								} else event.finish();
								('step 2');
								if (event.tars.length == event.nm) {
									for (var i = 0; i < event.tars.length; i++) {
										event.tars[i].damage(player, 1, trigger.nature, 'nocard');
									}
									event.goto(5);
								} else if (event.tars.length == 1) {
									event.tars[0].damage(player, event.nm, trigger.nature, 'nocard');
									event.goto(5);
								} else {
									var target = event.tars.shift();
									event.current = target;
								}
								('step 3');
								if (event.current) {
									var lt = [];
									for (var i = 1; i <= event.nm - event.tars.length; i++) {
										lt.push(i);
									}
									player
										.chooseControl(lt, true)
										.set('ai', function (event) {
											return 1;
										})
										.set('prompt', '为' + get.translation(event.current) + '分配几点伤害？');
								}
								('step 4');
								event.current.damage(player, result.control, trigger.nature, 'nocard');
								event.nm -= result.control;
								event.goto(2);
								('step 5');
								trigger.num = 0;
							},
						},
						XK_douzhuanxingyi: {
							audio: 'ext:侠客风云传/audio:1',
							_priority: 15,
							trigger: {
								target: ['shaBefore'],
							},
							filter(event, player) {
								if (event.player == player) return false;
								if (!player.countCards('j')) return false;
								return game.hasPlayer(function (current) {
									return current != player && !event.targets.includes(current);
								});
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('XK_douzhuanxingyi'), '你可令1名不为' + get.translation(trigger.card) + '目标的其他角色选择1项:代替你成为此杀目标;将你判定区1张牌移至其判定区.', 1, function (card, player, target) {
										var trigger = _status.event.getTrigger();
										return !trigger.targets.includes(target);
									})
									.set('ai', function (target) {
										var trigger = _status.event.getTrigger();
										var player = _status.event.player;
										return get.effect(target, trigger.card, player, player);
									});
								('step 1');
								if (result.targets?.length) {
									player.line(result.targets[0], 'green');
									event.tar = result.targets[0];
									event.tar.chooseCardButton('将' + get.translation(player) + '判定区的一张牌移至你的判定区,否则代替其成为' + get.translation(trigger.card) + '的目标', player.getCards('j'), false).ai = function (button) {
										return 9 - get.value(button.link);
									};
								} else event.finish();
								('step 2');
								if (result.links?.length) {
									var link = result.links[0];
									if (link.viewAs) {
										event.tar.addJudge({ name: link.viewAs }, [link]);
									} else {
										event.tar.addJudge(link);
									}
									player.$give(link, event.tar);
								} else {
									trigger.targets.remove(player);
									trigger.targets.push(event.tar);
									trigger.target = event.tar;
								}
							},
							ai: {
								expose: 0.4,
								effect: {
									target(card, player, target) {
										if (!target.countCards('j')) return;
										if (card.name == 'sha') return 0.5;
									},
								},
							},
						},
						XK_zhuifengxunzong: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_ying';
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_ying.mp3');
							},
							group: ['XK_guiyingxunzong', 'XK_zhuifengciying', 'XK_zhuifengciying1'],
							ai: {
								XKzhaoshi: true,
							},
						},
						XK_guiyingxunzong: {
							audio: 'ext:侠客风云传/audio:1',
							enable: 'phaseUse',
							usable: 1,
							changeSeat: true,
							filterTarget(card, player, target) {
								return player != target && player.next != target;
							},
							prompt: '你可与一名其他角色交换位置,如此你获得【飞燕】2回合、其获得【断筋】1回合.',
							selectTarget: 1,
							content() {
								game.swapSeat(player, target);
								player.addBuff('XK_feiyantai', 2, player);
								target.addBuff('XK_duanjin', 1, player);
							},
							ai: {
								order: 5,
								result: {
									player(player, target) {
										var att = get.attitude(player, target);
										if (att > 0) return -1;
										if (target == player.next && att < 0) return -att;
										var att2 = get.attitude(player, player.next);
										if (target == player.next.next && att < 0 && att2 < 0) return -att - att2;
										return 0;
									},
								},
								XK_selfbuff: true,
								expose: 0.3,
							},
						},
						XK_zhuifengciying: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								source: 'damageBegin2',
							},
							filter(event, player) {
								return event.notLink() && player.inRange(event.player);
							},
							forced: true,
							content() {
								trigger.num++;
								game.playAudio('../extension/侠客风云传/audio/XK_zhuifengciying1.mp3');
							},
							ai: {
								damageBonus: true,
								XK_shabonus: true,
							},
						},
						XK_zhuifengciying1: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'damageBegin2',
							},
							filter(event, player) {
								return player.inRange(event.source);
							},
							forced: true,
							content() {
								trigger.num--;
								game.playAudio('../extension/侠客风云传/audio/XK_zhuifengciying1.mp3');
							},
							ai: {
								nodamage: true,
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'damage')) {
											if (!target.hasFriend()) return;
											if (target.inRange(player)) return [1, 1.5];
										}
									},
								},
							},
						},
						XK_wangniangong: {
							init(player) {
								player.storage.XK_wangnianwuwang = [];
							},
							group: ['XK_wangnianwuwang', 'XK_wangnianwuwang1', 'XK_wangnianwunian', 'XK_dazhoutian', 'XK_dazhoutian1'],
							ai: {
								XKneigong: true,
							},
						},
						XK_wangnianwuwang: {
							mod: {
								targetEnabled(card, player, target) {
									if (player != target && target.storage.XK_wangnianwuwang.length) {
										var st = card.suit;
										if (target.storage.XK_wangnianwuwang.includes(st)) return false;
									}
								},
							},
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'phaseJieshuBegin',
							},
							forced: true,
							marktext: '妄',
							intro: {
								content(storage) {
									if (storage) {
										return '已声明花色:' + get.translation(storage);
									}
								},
							},
							content() {
								'step 0';
								var func = function (card, target, num) {
									var list = ['♥️️', '♦️️', '♣️️', '♠️️'];
									var choiceList = ui.create.dialog('【无妄】:你可声明' + num + '种花色,直到你下回合开始,其他角色无法使用该花色牌指定你为目标.', 'forcebutton');
									for (var i = 0; i < list.length; i++) {
										var str = '<div class="popup text" style="width:calc(100% - 10px);display:inline-block">';
										if (i == 0) str += '<div>';
										str += list[i];
										if (i == 0) str += '</div>';
										str += '</div>';
										var next = choiceList.add(str);
										next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
										next.firstChild.link = i;
										Object.setPrototypeOf(next, lib.element.Button.prototype); //QQQ
										choiceList.buttons.add(next.firstChild);
									}
									return choiceList;
								};
								var nm = player.isMinHp(false) ? 2 : 1;
								if (player.isOnline2()) {
									player.send(func, get.translation(trigger.card), get.translation(trigger.player), nm);
								}
								event.dialog = func(get.translation(trigger.card), get.translation(trigger.player), nm);
								if (player != game.me || _status.auto) {
									event.dialog.style.display = 'none';
								}
								var next = player.chooseButton();
								next.set('forced', false);
								next.set('selectButton', [nm, nm]);
								next.set('filterButton', function (button) {
									return true;
								});
								next.set('ai', function (button) {
									switch (button.link) {
										case 0: {
											return -1;
										}
										case 1: {
											return -1;
										}
										case 2: {
											return 2;
										}
										case 3: {
											return 1;
										}
									}
								});
								('step 1');
								event.dialog.close();
								var map = [
									function (trigger, player, event) {
										player.storage.XK_wangnianwuwang.push('heart');
									},
									function (trigger, player, event) {
										player.storage.XK_wangnianwuwang.push('diamond');
									},
									function (trigger, player, event) {
										player.storage.XK_wangnianwuwang.push('club');
									},
									function (trigger, player, event) {
										player.storage.XK_wangnianwuwang.push('spade');
									},
								];
								if (result.links?.length) {
									player.markSkill('XK_wangnianwuwang');
									for (var i = 0; i < result.links.length; i++) {
										map[result.links[i]](trigger, player, event);
									}
								}
							},
						},
						XK_wangnianwuwang1: {
							trigger: {
								player: 'phaseBefore',
							},
							forced: true,
							content() {
								player.storage.XK_wangnianwuwang = [];
								player.unmarkSkill('XK_wangnianwuwang');
							},
						},
						XK_wangnianwunian: {
							audio: 'ext:侠客风云传/audio:1',
							mod: {
								cardEnabled2(card, player) {
									if (_status.event.skill == undefined && get.type(card) == 'XK_miji') return false;
								},
								cardUsable(card, player) {
									if (_status.event.skill == undefined && get.type(card) == 'XK_miji') return false;
								},
							},
							position: 'h',
							filterTarget(card, player, target) {
								return true;
							},
							filter(event, player) {
								return player.countCards('h', { type: 'XK_miji' });
							},
							filterCard(card) {
								return get.type(card) == 'XK_miji';
							},
							check(card) {
								return 20 - get.value(card);
							},
							enable: 'phaseUse',
							selectTarget: 1,
							prompt: '弃置1张秘籍牌令1名角色获得【归元】3回合.',
							content() {
								target.addBuff('XK_guiyuan', 3, player);
							},
							ai: {
								order: 9,
								result: {
									target(player, target, card) {
										if (target.hasSkill('XK_guiyuan')) return 0.5;
										return 3;
									},
								},
							},
						},
						XK_kongquezhenyan: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_fomu';
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_fomu.mp3');
							},
							group: ['XK_kongquelunwu', 'XK_liudaoyuanman'],
							ai: {
								XKzhaoshi: true,
							},
						},
						XK_kongquelunwu: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								global: 'damageBegin4',
							},
							_priority: -1,
							check(event, player) {
								return get.attitude(player, event.player) > 0;
							},
							prompt2(event, player) {
								return '你可交给' + get.translation(event.player) + event.num + '张手牌,或者代替其承受' + event.num + '点伤害.';
							},
							filter(event, player) {
								return event.source != player && event.player != player;
							},
							logTarget: 'player',
							content() {
								'step 0';
								player.chooseCard('是否交给' + get.translation(trigger.player) + trigger.num + '张手牌？', trigger.num, false).ai = function (card) {
									var trigger = _status.event.getTrigger();
									if (trigger.num >= trigger.player.hp) {
										return -1;
									} else {
										if (trigger.num >= player.countCards('h')) {
											return 10 - get.value(card);
										}
										return 8 - get.value(card);
									}
								};
								('step 1');
								if (result.cards?.length) {
									trigger.player.gain(result.cards, player, 'giveAuto');
									event.finish();
								} else {
									player.chooseBool('是否代替' + get.translation(trigger.player) + '承受' + trigger.num + '点伤害？').set('ai', function () {
										var tri = _status.event.getTrigger();
										if (get.attitude(player, tri.player) > 0) {
											if (tri.num > player.hp) return false;
											if (player.hp > 1) return true;
											else {
												return player.hasUsableCard('tao') || player.hasUsableCard('jiu');
											}
										}
										return false;
									});
								}
								('step 2');
								if (result.bool) {
									trigger.player = player;
								}
							},
						},
						XK_liudaoyuanman: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'recoverBegin',
							},
							filter(event, player) {
								return _status.currentPhase != player && event.num > 0;
							},
							check(event, player) {
								var att = get.attitude(player, _status.currentPhase);
								return att < 0;
							},
							logTarget(event, player) {
								return _status.currentPhase;
							},
							prompt2(event, player) {
								return '是否令' + get.translation(_status.currentPhase) + '获得【刺目】【恐惧】2回合？';
							},
							content() {
								var tar = _status.currentPhase;
								tar.addBuff('XK_cimu', 2, player);
								tar.addBuff('XK_kongju', 2, player);
							},
							ai: {
								expose: 0.5,
							},
						},
						XK_kongquemizhou: {
							group: ['XK_mantuluo', 'XK_mantuluoex', 'XK_dazhoutian', 'XK_dazhoutian1'],
							ai: {
								XKneigong: true,
							},
						},
						XK_mantuluo: {
							audio: 'ext:侠客风云传/audio:1',
							mod: {
								maxHandcard(player, num) {
									var nm = Math.max(player.hp, player.getDamagedHp());
									return nm;
								},
							},
							trigger: { player: ['dyingBegin', 'dyingAfter'] },
							forced: true,
							content() {
								player.draw();
							},
						},
						XK_mantuluoex: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: { player: 'loseEnd' },
							forced: true,
							filter(event, player) {
								if (player.countCards('h')) return false;
								return event.hs && event.hs.length;
							},
							content() {
								player.draw();
							},
							ai: {
								threaten: 0.8,
								effect: {
									target(card, player, target) {
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
						XK_tianshanhuanying: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_yangyun';
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_yangyun.mp3');
							},
							group: ['XK_huanyingwuxing'],
							ai: {
								XKzhaoshi: true,
							},
						},
						XK_huanyingwuxing: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								global: 'damageBegin2',
							},
							_priority: 11,
							filter(event, player) {
								if (player.hasSkill('XK_huanyingwuxingex')) return false;
								if (event.player == player) return false;
								if (event.source == player) return false;
								return event.num > 0;
							},
							logTarget: 'player',
							prompt2(event, player) {
								return '是否与' + get.translation(event.player) + '交换位置？如此你代替其承受' + event.num + '点伤害并令' + get.translation(event.source) + '获得【重伤】2回合.';
							},
							check(event, player) {
								var eff = get.damageEffect(event.player, event.source, player, event.nature);
								if (eff > 0) return false;
								if (player.hp <= event.player.hp) return false;
								return player.hp > event.num;
							},
							content() {
								'step 0';
								game.swapSeat(player, trigger.player);
								('step 1');
								trigger.player = player;
								('step 2');
								player.addTempSkill('XK_huanyingwuxingex', 'roundStart');
								trigger.source.addBuff('XK_zhongshang', 2, player);
							},
							ai: {
								expose: 0.5,
							},
						},
						XK_huanyingwuxingex: {
							charlotte: true,
						},
						XK_mingdingjue: {
							init(player) {
								player.storage.XK_niuyin = 0;
							},
							group: ['XK_niuyin', 'XK_niuyinex', 'XK_mingdingti', 'XK_xiaozhoutian'],
							ai: {
								XKneigong: true,
							},
						},
						XK_niuyin: {
							audio: 'ext:侠客风云传/audio:1',
							marktext: '饮',
							intro: {
								content(storage) {
									return '当前有 <span class="bluetext">' + storage + '</span> 枚<饮>';
								},
							},
							enable: 'phaseUse',
							filter(event, player) {
								if (player.getCardUsable('jiu') <= 0) return false;
								return player.storage.XK_niuyin > 0;
							},
							content() {
								'step 0';
								player.storage.XK_niuyin--;
								('step 1');
								if (player.storage.XK_niuyin <= 0) {
									player.unmarkSkill('XK_niuyin');
								}
								player.useCard({ name: 'jiu' }, player);
							},
							ai: {
								order: 9,
								maixie: true,
								maixie_hp: true,
								result: {
									player(player) {
										if (player.hasUsableCard('sha')) return 2;
										return -1;
									},
								},
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'damage')) {
											if (!target.hasFriend()) return;
											if (player.hp > 3) return [1, 2];
											if ((player.hp = 3)) return [1, 1.5];
											if (player.hp < 3) return [1, 1];
										}
									},
								},
							},
						},
						XK_niuyinex: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: ['damageAfter', 'loseHpAfter'],
							},
							forced: true,
							_priority: 7,
							filter(event, player) {
								return event.num > 0;
							},
							content() {
								player.storage.XK_niuyin += trigger.num;
								player.markSkill('XK_niuyin');
							},
						},
						XK_mingdingti: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: { player: 'useCard1' },
							forced: true,
							_priority: 999,
							firstDo: true,
							filter(event, player) {
								return event.card && event.card.name == 'sha' && player.hasSkill('jiu');
							},
							logTarget: 'targets',
							content() {
								for (var i = 0; i < trigger.targets.length; i++) {
									var id = trigger.targets[i].playerid;
									var map = trigger.customArgs;
									if (!map[id]) map[id] = {};
									if (typeof map[id].shanRequired == 'number') {
										map[id].shanRequired++;
									} else {
										map[id].shanRequired = 2;
									}
								}
							},
						},
						XK_qishijianji: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_xianxier';
							},
							init(player) {
								player.storage.XK_axinajingtan = [1, 1, 1];
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_xianxier.mp3');
							},
							group: ['XK_axinajingtan', 'XK_axinajingtan1', 'XK_axinajingtan2', 'XK_nvshenkuanshu'],
							ai: {
								XKzhaoshi: true,
							},
						},
						XK_axinajingtan: {
							audio: 'ext:侠客风云传/audio:1',
							intro: {
								content(storage, player, skill) {
									var str = '本轮你使用的:</br>';
									str += '<杀>效果基数为:' + player.storage.XK_axinajingtan[0] + '</br>';
									str += '<桃>效果基数为:' + player.storage.XK_axinajingtan[1] + '</br>';
									str += '<酒>效果基数为:' + player.storage.XK_axinajingtan[2];
									return str;
								},
							},
							trigger: {
								global: 'roundStart',
							},
							forced: true,
							_priority: 7,
							content() {
								'step 0';
								player.storage.XK_axinajingtan = [1, 1, 1];
								player.unmarkSkill('XK_axinajingtan');
								('step 1');
								player.chooseBool(get.prompt('XK_axinajingtan'), '为本轮你使用的杀、桃、酒分配共计3点效果基数？').set('ai', function () {
									return true;
								});
								('step 2');
								if (result.bool) {
									event.nm = 3;
								} else event.finish();
								('step 3');
								var lt = [];
								for (var i = 0; i <= event.nm; i++) {
									lt.push(i);
								}
								player
									.chooseControl(lt, true)
									.set('ai', function (event) {
										if (player.hp == 1) return 0;
										if (player.hasUsableCard('sha')) return 2;
										return 1;
									})
									.set('prompt', '为本轮你使用的杀的效果基数分配一个数值');
								('step 4');
								if (result.control != 0) {
									player.storage.XK_axinajingtan[0] = result.control;
									event.nm -= result.control;
								} else player.storage.XK_axinajingtan[0] = 0;
								('step 5');
								if (event.nm > 0) {
									var lt = [];
									for (var i = 0; i <= event.nm; i++) {
										lt.push(i);
									}
									player
										.chooseControl(lt, true)
										.set('ai', function (event) {
											if (player.isHealthy()) return 0;
											if (player.getDamagedHp() >= 2) return 2;
											return 1;
										})
										.set('prompt', '为本轮你使用的桃的效果基数分配一个数值');
								} else {
									player.storage.XK_axinajingtan[1] = 0;
									player.storage.XK_axinajingtan[2] = 0;
									event.goto(7);
								}
								('step 6');
								if (result.control != 0) {
									player.storage.XK_axinajingtan[1] = result.control;
									event.nm -= result.control;
								} else player.storage.XK_axinajingtan[1] = 0;
								('step 7');
								player.storage.XK_axinajingtan[2] = event.nm;
								player.markSkill('XK_axinajingtan');
							},
						},
						XK_axinajingtan1: {
							trigger: {
								player: ['taoBefore', 'jiuBefore', 'shaBefore'],
							},
							firstDo: true,
							_priority: 999,
							forced: true,
							content() {
								if (trigger.name == 'sha') {
									var nm = player.storage.XK_axinajingtan[0] - 1;
									trigger.baseDamage += nm;
								} else if (trigger.name == 'tao') {
									var nm = player.storage.XK_axinajingtan[1] - 1;
									trigger.baseDamage += nm;
								} else if (trigger.name == 'jiu') {
									var nm = player.storage.XK_axinajingtan[2] - 1;
									trigger.baseDamage += nm;
								}
							},
						},
						XK_axinajingtan2: {
							trigger: {
								player: ['recoverBegin'],
							},
							filter(event, player) {
								var evt = event.parent;
								if (evt.name != 'tao') return false;
								return evt.baseDamage == 0;
							},
							firstDo: 999,
							forced: true,
							content() {
								trigger.num = 0;
							},
						},
						XK_nvshenkuanshu: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'recoverBegin',
							},
							_priority: -999,
							filter(event, player) {
								if (event.parent.name == 'XK_nvshenkuanshu') return false;
								return event.num > 0;
							},
							forced: true,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('XK_nvshenkuanshu'), '是否为任意名角色分配共计' + trigger.num + '点回复数值？', [1, trigger.num], function (card, player, target) {
									return target.isDamaged();
								}).ai = function (target) {
									var eff = get.recoverEffect(target, player, player);
									return eff;
								};
								('step 1');
								if (result.targets?.length) {
									event.tars = result.targets.splice(0);
									event.mk = false;
									if (!event.tars.includes(player)) event.mk = true;
									event.nm = trigger.num;
								} else event.finish();
								('step 2');
								if (event.tars.length == event.nm) {
									for (var i = 0; i < event.tars.length; i++) {
										event.tars[i].recover();
									}
									event.goto(5);
								} else if (event.tars.length == 1) {
									event.tars[0].recover(event.nm);
									event.goto(5);
								} else {
									var target = event.tars.shift();
									event.current = target;
								}
								('step 3');
								if (event.current) {
									var lt = [];
									for (var i = 1; i <= event.nm - event.tars.length; i++) {
										lt.push(i);
									}
									player
										.chooseControl(lt, true)
										.set('ai', function (event) {
											var tp = event.current.getDamagedHp();
											if (tp > 2) return 2;
											return 1;
										})
										.set('prompt', '为' + get.translation(event.current) + '分配几点回复数值？');
								}
								('step 4');
								event.current.recover(result.control);
								event.nm -= result.control;
								event.goto(2);
								('step 5');
								trigger.num = 0;
								('step 6');
								if (event.mk) {
									player.chooseBool('是否为本轮你使用的杀、桃、酒分配共计3点效果基数？').set('ai', function () {
										return true;
									});
								} else event.finish();
								('step 7');
								if (result.bool) {
									event.nm = 3;
								} else event.finish();
								('step 8');
								var lt = [];
								for (var i = 0; i <= event.nm; i++) {
									lt.push(i);
								}
								player
									.chooseControl(lt, true)
									.set('ai', function (event) {
										if (player.hp == 1) return 0;
										if (player.hasUsableCard('sha')) return 2;
										return 1;
									})
									.set('prompt', '为本轮你使用的杀的效果基数分配一个数值');
								('step 9');
								if (result.control != 0) {
									player.storage.XK_axinajingtan[0] = result.control;
									event.nm -= result.control;
								} else player.storage.XK_axinajingtan[0] = 0;
								('step 10');
								if (event.nm > 0) {
									var lt = [];
									for (var i = 0; i <= event.nm; i++) {
										lt.push(i);
									}
									player
										.chooseControl(lt, true)
										.set('ai', function (event) {
											if (player.isHealthy()) return 0;
											if (player.getDamagedHp() >= 2) return 2;
											return 1;
										})
										.set('prompt', '为本轮你使用的桃的效果基数分配一个数值');
								} else {
									player.storage.XK_axinajingtan[1] = 0;
									player.storage.XK_axinajingtan[2] = 0;
									event.goto(7);
								}
								('step 11');
								if (result.control != 0) {
									player.storage.XK_axinajingtan[1] = result.control;
									event.nm -= result.control;
								} else player.storage.XK_axinajingtan[1] = 0;
								('step 12');
								player.storage.XK_axinajingtan[2] = event.nm;
								player.markSkill('XK_axinajingtan');
							},
							ai: {
								expose: 0.5,
							},
						},
						XK_zhandouyanwu: {
							init(player) {
								player.storage.XK_yanwuqu = 1;
								player.markSkill('XK_yanwuqu');
							},
							group: ['XK_yanwuqu', 'XK_yanwuqu1', 'XK_dazhoutian', 'XK_dazhoutian1'],
							ai: {
								XKneigong: true,
							},
						},
						XK_yanwuqu: {
							audio: 'ext:侠客风云传/audio:1',
							marktext: '舞',
							intro: {
								content(storage, player, skill) {
									if (player.storage.XK_yanwuqu == 1) return '你每使用1张牌,需要摸1张牌';
									else if (player.storage.XK_yanwuqu == 2) return '你每使用1张牌,需要重铸1张牌';
									else if (player.storage.XK_yanwuqu == 3) return '你每使用1张牌,需要弃置1张牌';
								},
							},
							trigger: {
								player: 'useCard',
							},
							forced: true,
							filter(event, player) {
								if (player.storage.XK_yanwuqu != 1 && !player.countCards('he')) return false;
								return event.card;
							},
							content() {
								'step 0';
								if (player.storage.XK_yanwuqu == 1) {
									player.draw();
									event.goto(3);
								} else if (player.storage.XK_yanwuqu == 2) {
									player.chooseCardButton('重铸1张牌', player.getCards('he'), true).ai = function (button) {
										return 6 - get.value(button.link);
									};
								} else if (player.storage.XK_yanwuqu == 3) {
									player.chooseToDiscard('he', 1, true);
									event.goto(3);
								}
								('step 1');
								if (result.links?.length) {
									var cards = result.links;
									player.lose(cards, ui.discardPile);
									player.$throw(cards, 1000);
									game.log(player, '将', cards, '置入了弃牌堆');
									event.draw = { bool: true, num: cards.length };
								} else event.finish();
								('step 2');
								if (event.draw && event.draw.bool) {
									player.draw(event.draw.num);
								}
								('step 3');
								if (player.storage.XK_yanwuqu == 3) {
									player.storage.XK_yanwuqu = 1;
								} else player.storage.XK_yanwuqu++;
							},
						},
						XK_yanwuqu1: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: ['changeHp', 'phaseBefore'],
							},
							prompt2(event, player) {
								switch (player.storage.XK_yanwuqu) {
									case 1:
										var str = '<你每使用1张牌,需要摸1张牌>';
										break;
									case 2:
										var str = '<你每使用1张牌,需要重铸1张牌>';
										break;
									case 3:
										var str = '<你每使用1张牌,需要弃置1张牌>';
										break;
								}
								return '是否使【阿西娜的惊叹】跳至下一个状态？(当前状态:' + str + ')';
							},
							check(event, player) {
								return player.storage.XK_yanwuqu == 3;
							},
							_priority: 7,
							filter(event, player) {
								if (!player.storage.XK_yanwuqu) return false;
								return event.num != 0;
							},
							content() {
								if (player.storage.XK_yanwuqu == 3) {
									player.storage.XK_yanwuqu = 1;
								} else player.storage.XK_yanwuqu++;
							},
							ai: {
								expose: 0.3,
							},
						},
						XK_dagongzhifa: {
							description: '<font color=#F0F>【996】</font>每轮限1次,回合结束时,你可获得1个额外的回合;如此额外回合结束后,你失去1点体力并翻面.</br><font color=#F0F>【快速码字】</font>出牌阶段开始,你可失去1点体力使你本回合使用杀的次数+X,X为你的体力值;本回合结束时,若你于本回合击杀过其他角色,你回复1点体力并将武将牌翻至正面,否则你弃置2张牌.',
							trigger: {
								player: 'phaseBefore',
							},
							_priority: 999,
							filter(event, player) {
								return player.name != 'XK_weiming';
							},
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio', player.name);
							},
							group: ['XK_996', 'XK_kuaisimazi'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_996: {
							trigger: {
								player: 'phaseAfter',
							},
							prompt2(event, player) {
								return '是否获得1个额外的回合？如此额外回合结束后,你失去点体力并翻面.';
							},
							_priority: 20,
							check(event, player) {
								return true;
							},
							filter(event, player) {
								return !player.hasSkill('XK_9962');
							},
							content() {
								player.phase('nodelay');
								player.addTempSkill('XK_9961', { player: 'phaseJieshuEnd' });
								player.addTempSkill('XK_9962', 'roundStart');
							},
						},
						XK_9961: {
							onremove(player) {
								player.loseHp();
								player.turnOver();
							},
							charlotte: true,
						},
						XK_9962: {
							charlotte: true,
						},
						XK_kuaisimazi: {
							trigger: {
								player: 'phaseUseBegin',
							},
							prompt2(event, player) {
								return '是否失去1点体力使你本回合使用杀的次数+X,X为你的体力值？如此本回合结束时,若你于本回合击杀过其他角色,你回复1点体力并将武将牌翻至正面,否则你弃置2张牌.';
							},
							check(event, player) {
								if (!player.hasSkill('XK_9961')) return false;
								return player.hp > 2;
							},
							content() {
								player.loseHp();
								player.addTempSkill('XK_kuaisimazi1', { player: 'phaseAfter' });
							},
						},
						XK_kuaisimazi1: {
							mod: {
								cardUsable(card, player, num) {
									if (card.name == 'sha') return num + player.hp;
								},
							},
							audio: 'ext:侠客风云传/audio:1',
							_priority: -10,
							trigger: {
								player: ['phaseJieshuAfter'],
							},
							forced: true,
							content() {
								if (player.getStat('kill') > 0) {
									player.recover();
									player.turnOver(false);
								} else {
									player.chooseToDiscard('h', 2, true);
								}
							},
						},
						XK_baoxiangrulai: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_wuse';
							},
							init(player) {
								player.storage.XK_sifangjieyuan = [];
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_wuse.mp3');
							},
							group: ['XK_sifangjieyuan', 'XK_sifangjieyuanex', 'XK_sifangjieyuan2', 'XK_zhufajiekong', 'XK_zhufajiekongex'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_sifangjieyuan: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								global: 'useCardEnd',
							},
							usable: 1,
							forced: true,
							filter(event, player) {
								if (!player.countCards('h')) return false;
								if (event.card.isCard) {
									if (get.type(event.card) != 'trick') return false;
									if (get.position(event.cards[0], true) == 'o') return true;
								}
								return false;
							},
							content() {
								'step 0';
								player.chooseCard(get.prompt('XK_sifangjieyuan', trigger.player), 'h', [1, 2], '是否弃置1至2张手牌,令' + get.translation(trigger.player) + '获得' + get.translation(trigger.card) + ',若你弃置了2张牌,其使用此牌时可使你也成为目标.').ai = function (card) {
									var trigger = _status.event.getTrigger();
									if (get.attitude(player, trigger.player) <= 0) return false;
									if (trigger.card.name == 'zengbin') return 6 - get.value(card);
									if (get.value(trigger.card) > 5 && ui.selected.cards.length == 0) return 4 - get.value(card);
									return -1;
								};
								('step 1');
								if (result.cards?.length) {
									if (result.cards.length == 2) {
										player.storage.XK_sifangjieyuan.push(trigger.cards[0]);
									}
									player.discard(result.cards);
									trigger.player.gain(trigger.cards[0], 'gain2');
								}
							},
							ai: {
								expose: 0.3,
								effect: {
									target(card, player, target) {
										if (get.type(card) == 'trick') {
											if (!target.hasFriend()) return;
											if (!target.storage.XK_sifangjieyuan || !target.storage.XK_sifangjieyuan.includes(card)) return;
											return 0.5;
										}
									},
								},
							},
						},
						XK_sifangjieyuanex: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								global: 'useCardBegin',
							},
							forced: true,
							filter(event, player) {
								if (event.targets.includes(player)) return false;
								return player.storage.XK_sifangjieyuan.includes(event.cards[0]);
							},
							_priority: -2,
							content() {
								'step 0';
								event.pla = player;
								trigger.player.chooseBool(get.prompt('XK_sifangjieyuan'), '是否令' + get.translation(player) + '也成为你使用的' + get.translation(trigger.card) + '的目标？').set('ai', function () {
									var trigger = _status.event.getTrigger();
									var eff = get.effect(event.pla, trigger.card, trigger.player, trigger.player);
									return eff > 0;
								});
								('step 1');
								if (result.bool) {
									trigger.targets.add(player);
									player.storage.XK_sifangjieyuan.remove(trigger.cards[0]);
								}
							},
						},
						XK_sifangjieyuan2: {
							trigger: {
								global: 'loseAfter',
							},
							forced: true,
							filter(event, player) {
								return player.storage.XK_sifangjieyuan && player.storage.XK_sifangjieyuan.length;
							},
							_priority: -2,
							content() {
								for (var i = 0; i < trigger.cards.length; i++) {
									if (player.storage.XK_sifangjieyuan.includes(trigger.cards[i])) {
										player.storage.XK_sifangjieyuan.remove(trigger.cards[i]);
									}
								}
							},
						},
						XK_zhufajiekong: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								source: 'damageBegin',
							},
							filter(event, player) {
								if (event.player == player) return false;
								if (player.hasSkill('XK_zhufajiekong2')) return false;
								return event.num > 0;
							},
							_priority: 17,
							forced: true,
							content() {
								'step 0';
								player.addBuff('XK_shouhu', 2, player);
								player.addTempSkill('XK_zhufajiekong2', 'roundStart');
								('step 1');
								trigger.cancel();
							},
						},
						XK_zhufajiekongex: {
							trigger: {
								player: 'damageBegin',
							},
							filter(event, player) {
								if (event.source && event.source == player) return false;
								if (player.hasSkill('XK_zhufajiekong3')) return false;
								return event.num > 0;
							},
							_priority: 17,
							forced: true,
							content() {
								'step 0';
								player.addBuff('XK_henglian', 2, player);
								player.addTempSkill('XK_zhufajiekong3', 'roundStart');
								('step 1');
								trigger.cancel();
							},
							ai: {
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'damage')) {
											if (player.hasSkillTag('jueqing')) return;
											if (target.hasSkill('XK_zhufajiekong3')) return;
											if (!target.hasFriend()) return;
											return 0.7;
										}
									},
								},
							},
						},
						XK_zhufajiekong2: {
							charlotte: true,
						},
						XK_zhufajiekong3: {
							charlotte: true,
						},
						XK_jinzhongzhao: {
							group: ['XK_duanyilianshen', 'XK_duanyilianshen1', 'XK_dazhoutian', 'XK_dazhoutian1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_duanyilianshen: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								global: 'useCardAfter',
							},
							forced: true,
							filter(event, player) {
								if (!get.tag(event.card, 'damage')) return false;
								if (!event.targets.includes(player)) return false;
								return event.player != player && get.itemtype(event.cards) == 'cards' && get.position(event.cards[0], true) == 'o';
							},
							_priority: -2,
							content() {
								player.gain(trigger.cards, 'gain2');
							},
						},
						XK_duanyilianshen1: {
							trigger: {
								player: 'phaseJieshuBegin',
							},
							forced: true,
							_priority: 7,
							content() {
								'step 0';
								var cds = player.getCards('h'),
									todis = [];
								for (var i = 0; i < cds.length; i++) {
									if (get.tag(cds[i], 'damage')) todis.push(cds[i]);
								}
								if (!todis.length) event.finish();
								else {
									player.lose(todis, ui.discardPile);
									player.$throw(todis, 1000);
									game.log(player, '将', todis, '置入了弃牌堆');
									event.draw = { bool: true, num: todis.length };
								}
								('step 1');
								if (event.draw && event.draw.bool) {
									player.draw(event.draw.num);
								}
							},
						},
						XK_feixingzhi: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_yuepangzi';
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_yuepangzi.mp3');
							},
							group: ['XK_zhaixingjiuying'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_zhaixingjiuying: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'phaseDrawBegin',
							},
							filter(event, player) {
								return game.hasPlayer(function (current) {
									return current != player && current.hp < player.hp && current.countCards('h');
								});
							},
							_priority: -999,
							check(event, player) {
								var num = game.countPlayer(function (current) {
									var att = get.attitude(player, current);
									return current != player && current.hp < player.hp && att <= 0 && current.countCards('h');
								});
								return num >= event.num;
							},
							prompt2(event, player) {
								var targets = game.filterPlayer(function (current) {
									return current != player && current.hp < player.hp && current.countCards('h');
								});
								return '是否将摸牌阶段改为获得' + get.translation(targets) + '各1张手牌？';
							},
							content() {
								'step 0';
								var targets = game.filterPlayer(function (current) {
									return current != player && current.hp < player.hp && current.countCards('h');
								});
								for (var i = 0; i < targets.length; i++) {
									player.gainPlayerCard(targets[i], 1, 'h', true);
								}
								('step 1');
								trigger.cancel();
							},
						},
						XK_yinyuantaohui: {
							init(player) {
								player.storage.XK_zhengqi = ['交给1名其他角色1张牌'];
								player.storage.XK_zhengqi_a = [];
							},
							group: ['XK_lianshan', 'XK_zhengqi', 'XK_zhengqi1', 'XK_xiaozhoutian'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_lianshan: {
							audio: 'ext:侠客风云传/audio:1',
							enable: 'phaseUse',
							usable: 1,
							position: 'he',
							filter(event, player) {
								return player.countCards('he') > 0;
							},
							filterCard(card) {
								var suit = card.suit;
								for (var i = 0; i < ui.selected.cards.length; i++) {
									if (ui.selected.cards[i].suit == suit) return false;
								}
								return true;
							},
							complexCard: true,
							check(card) {
								return 6 - get.value(card);
							},
							selectCard: [2, 4],
							content() {
								'step 0';
								event.num1 = cards.length;
								player.lose(cards, ui.discardPile);
								player.$throw(cards, 1000);
								game.log(player, '将', cards, '置入了弃牌堆');
								player.draw(event.num1);
								('step 1');
								if (event.num1 == 2 && !player.storage.XK_zhengqi.includes('弃置手牌数最多的角色1张牌')) {
									var str = '弃置手牌数最多的角色1张牌';
								}
								if (event.num1 == 3 && !player.storage.XK_zhengqi.includes('摸1张牌')) {
									var str = '摸1张牌';
								}
								if (event.num1 == 4 && !player.storage.XK_zhengqi.includes('令1名角色回复1点体力')) {
									var str = '令1名角色回复1点体力';
								}
								if (str) {
									player.storage.XK_zhengqi.push(str);
								}
							},
							ai: {
								order: 1,
								result: {
									player: 2,
								},
							},
						},
						XK_zhengqi: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
							},
							forced: true,
							content() {
								'step 0';
								var list = [];
								list = list.concat(player.storage.XK_zhengqi);
								list.remove(player.storage.XK_zhengqi_a);
								list.push('取消');
								player
									.chooseControl(list)
									.set('ai', function (event) {
										if (list.includes('令1名角色回复1点体力')) {
											if (
												game.hasPlayer(function (current) {
													return current.isDamaged() && get.attitude(player, current) > 0;
												})
											)
												return '令1名角色回复1点体力';
										}
										if (list.includes('摸1张牌')) return '摸1张牌';
										if (list.includes('弃置手牌数最多的角色1张牌')) {
											if (
												game.hasPlayer(function (current) {
													return current.isMaxHandcard() && get.attitude(player, current) < 0;
												})
											)
												return '弃置手牌数最多的角色1张牌';
										}
										if (player.countCards('h', 'du')) return '交给1名其他角色1张牌';
										return '取消';
									})
									.set('prompt', '【正气】:请选择1项发动');
								('step 1');
								if (result.control == '摸1张牌') {
									player.storage.XK_zhengqi_a.push(result.control);
									player.draw();
									event.finish();
								} else if (result.control != '取消') {
									player.storage.XK_zhengqi_a.push(result.control);
									event.con = result.control;
									if (event.con == '交给1名其他角色1张牌') {
										player.chooseCardTarget({
											filterCard(card) {
												return true;
											},
											position: 'he',
											selectCard: 1,
											selectTarget: 1,
											filterTarget(card, player, target) {
												return player != target;
											},
											ai1(card) {
												return card.name == 'du';
											},
											ai2(target) {
												var att = get.attitude(player, target);
												return -att;
											},
											prompt: '交给1名其他角色1张牌',
										});
									} else event.goto(3);
								} else event.finish();
								('step 2');
								if (result.targets?.length) {
									result.targets[0].gain(result.cards[0], player, 'giveAuto');
									event.finish();
								} else event.finish();
								('step 3');
								player.chooseTarget(event.con, function (card, player, target) {
									if (event.con == '弃置手牌数最多的角色1张牌') return target.isMaxHandcard();
									if (event.con == '令1名角色回复1点体力') return target.isDamaged();
									return false;
								}).ai = function (target) {
									var att = get.attitude(player, target);
									if (event.con == '弃置手牌数最多的角色1张牌') return -att;
									if (event.con == '令1名角色回复1点体力') return att;
									return -1;
								};
								('step 4');
								if (result.bool) {
									if (event.con == '弃置手牌数最多的角色1张牌') {
										player.discardPlayerCard(result.targets[0], 'he', true);
									}
									if (event.con == '令1名角色回复1点体力') {
										result.targets[0].recover();
									}
								}
							},
						},
						XK_zhengqi1: {
							trigger: {
								player: ['phaseBefore'],
							},
							forced: true,
							_priority: 9,
							content() {
								player.storage.XK_zhengqi_a = [];
							},
						},
						XK_zhenshishenfen: {
							charlotte: true,
							group: ['XK_bianshen'],
							init(player) {
								player.storage.XK_bianshen = false;
							},
						},
						XK_bianshen: {
							audio: 'ext:侠客风云传/audio:1',
							forced: true,
							juexingji: true,
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							filter(event, player) {
								if (!player.hasZhuSkill('XK_bianshen')) return false;
								var plas = game.players,
									num1 = 0,
									num2 = 0;
								for (var i = 0; i < plas.length; i++) {
									if (plas[i].identity == 'zhong') num1++;
									if (plas[i].identity == 'fan') num2++;
								}
								return !player.storage.XK_bianshen && num1 == 0 && num2 > 2;
							},
							content() {
								'step 0';
								player.awakenSkill('XK_bianshen');
								player.storage.XK_bianshen = true;
								('step 1');
								player.recover();
								var ZS = player.getWugong('XK_zhaoshi');
								var NG = player.getWugong('XK_neigong');
								player.removeSkill(ZS[0]);
								player.removeSkill(NG[0]);
								('step 2');
								player.addSkill('XK_wudijixianliu');
								player.addSkill('XK_wuyagushenggong');
								player.node.avatar.setBackgroundImage('extension/侠客风云传/image/XK_wali.jpg');
								player.removeSkill('XK_zhenshishenfen');
							},
						},
						XK_hujiadaofa: {
							trigger: {
								player: 'phaseBefore',
							},
							init(player) {
								player.storage.XK_bafangcangdao = [];
							},
							filter(event, player) {
								return player.name == 'XK_laohu';
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_laohu.mp3');
							},
							group: ['XK_bafangcangdao', 'XK_bafangcangdao1', 'XK_bafangcangdaoex', 'XK_bimentieshan'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_bafangcangdao: {
							audio: 'ext:侠客风云传/audio:1',
							marktext: '藏',
							intro: {
								content: 'cards',
							},
							trigger: {
								player: ['loseEnd'],
							},
							filter(event, player) {
								if (!player.equiping) return false;
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (i.original == 'e' && get.subtype(i) == 'equip1') return true;
									}
								return false;
							},
							forced: true,
							content() {
								var card = [];
								for (var i = 0; i < trigger.cards.length; i++) {
									if (trigger.cards[i].original == 'e' && get.subtype(trigger.cards[i]) == 'equip1') {
										var check = true,
											tp = player.storage.XK_bafangcangdao;
										if (tp.length) {
											for (var j = 0; j < tp.length; j++) {
												if (tp[j].name == trigger.cards[i].name) {
													check = false;
												}
											}
											if (check) {
												card[0] = trigger.cards[i];
											}
										} else {
											card[0] = trigger.cards[i];
										}
									}
								}
								if (card[0]) {
									player.storage.XK_bafangcangdao.push(card[0]);
									player.markSkill('XK_bafangcangdao');
									var info = get.info(card[0]);
									if (info.skills) {
										player.addAdditionalSkill('XK_bafangcangdao', info.skills, true);
									}
								}
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (get.subtype(card) == 'equip1') return [1, 3];
									},
								},
							},
						},
						XK_bafangcangdao1: {
							trigger: {
								player: 'dieBegin',
							},
							forced: true,
							filter(event, player) {
								return player.storage.XK_bafangcangdao.length;
							},
							content() {
								player.storage.XK_bafangcangdao.discard();
								player.$throw(player.storage.XK_bafangcangdao);
							},
						},
						XK_bafangcangdaoex: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								global: 'loseAfter',
							},
							forced: true,
							filter(event, player) {
								if (event.player == player) return false;
								if (!player.countCards('h')) return false;
								for (var i = 0; i < event.cards.length; i++) {
									if (event.cards[i].original == 'e' && get.type(event.cards[i]) == 'equip' && get.position(event.cards[i]) == 'd') {
										return true;
									}
								}
								return false;
							},
							content() {
								'step 0';
								event.cds = [];
								for (var i = 0; i < trigger.cards.length; i++) {
									if (trigger.cards[i].original == 'e' && get.type(trigger.cards[i]) == 'equip' && get.position(trigger.cards[i]) == 'd') {
										event.cds.push(trigger.cards[i]);
									}
								}
								('step 1');
								if (event.cds.length) {
									event.cd = event.cds.shift();
									event.gain = [];
								} else event.goto(4);
								('step 2');
								player
									.chooseToDiscard(get.prompt('XK_bafangcangdao'), 'h', false, 1, '是否弃置1张手牌获得' + get.translation(event.cd) + '？', function (card) {
										return true;
									})
									.set('ai', function (card) {
										if (get.subtype(event.cd) == 'equip1') return 7 - get.value(card);
										return 5 - get.value(card);
									});
								('step 3');
								if (result.bool) {
									event.gain.push(event.cd);
								}
								event.goto(1);
								('step 4');
								if (event.gain && event.gain.length) {
									player.gain(event.gain, 'gain2');
								}
							},
						},
						XK_bimentieshan: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'phaseAfter',
							},
							forced: true,
							filter(event, player) {
								return player.isMaxEquip(false);
							},
							_priority: 18,
							content() {
								player.addBuff('XK_daoguangzhoujia', 1, player);
							},
							ai: { XK_selfbuff: true },
						},
						XK_feihugong: {
							group: ['XK_yinhumizong', 'XK_xiaozhoutian'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_yinhumizong: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: ['chooseToRespondBegin', 'chooseToUseBegin'],
							},
							filter(event, player) {
								if (player.countCards('h') > 0) return false;
								if (event.responded) return false;
								if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
								if (event.name == 'chooseToRespond' && !lib.filter.cardRespondable({ name: 'shan' }, player, event)) return false;
								return _status.currentPhase; //QQQ
							},
							check(event, player) {
								var att = get.attitude(player, _status.currentPhase);
								return att <= 0;
							},
							prompt2(event, player) {
								return '是否摸1张牌视为使用或打出1张闪？如此,令' + get.translation(_status.currentPhase) + '获得【震撼】2回合.';
							},
							content() {
								player.draw();
								trigger.untrigger();
								trigger.responded = true;
								trigger.result = { bool: true, card: { name: 'shan' } };
								_status.currentPhase.addBuff('XK_zhenhan', 2, player);
							},
							ai: {
								respondShan: true,
								skillTagFilter(player) {
									if (player.countCards('h')) return false;
								},
								effect: {
									target(card, player, target, effect) {
										if (get.tag(card, 'respondShan') && target.countCards('h') == 0) return 0.5;
									},
								},
							},
						},
						XK_feipuliantian: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_nalanyan';
							},
							init(player) {
								player.storage.XK_zhuhuayangwu = {};
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_nalanyan.mp3');
							},
							group: ['XK_zhuhuayangwu', 'XK_zhuhuayangwu1'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_zhuhuayangwu: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'useCardToPlayered',
							},
							prompt2(event, player) {
								var mp = player.storage.XK_zhuhuayangwu,
									tp = 0,
									str = '';
								if (mp[event.target]) {
									tp = mp[event.target] + 1;
								} else {
									tp = 1;
								}
								switch (tp) {
									case 1:
										str = '【目盲】';
										break;
									case 2:
										str = '【散功】';
										break;
									case 3:
										str = '【断筋】';
										break;
								}
								return '是否令' + get.translation(event.target) + '获得' + str + '2回合？';
							},
							check(event, player) {
								var att = get.attitude(player, event.target);
								return att <= 0;
							},
							filter(event, player) {
								if (event.target == player) return false;
								if (!event.targets || !event.targets.length || !event.isPhaseUsing(player)) return false;
								var evt = player.getLastUsed(1);
								if (!evt || !evt.targets || !evt.targets.length || !evt.isPhaseUsing(player)) return false;
								return evt.targets.includes(event.target);
							},
							content() {
								'step 0';
								if (player.storage.XK_zhuhuayangwu[trigger.target]) {
									player.storage.XK_zhuhuayangwu[trigger.target]++;
								} else {
									player.storage.XK_zhuhuayangwu[trigger.target] = 1;
								}
								('step 1');
								var tp = player.storage.XK_zhuhuayangwu[trigger.target];
								switch (tp) {
									case 1:
										var buff = 'XK_mumang';
										break;
									case 2:
										var buff = 'XK_sangong';
										break;
									case 3:
										var buff = 'XK_duanjin';
										break;
								}
								trigger.target.addBuff(buff, 2, player);
							},
							mod: {
								aiOrder(player, card, num) {
									if (player.isPhaseUsing() && (!player.getStat('triggerSkill').XK_zhuhuayangwu || !player.getStat('triggerSkill').XK_zhuhuayangwu < 3)) {
										var evt = player.getLastUsed();
										if (
											evt &&
											evt.targets &&
											evt.targets.length &&
											evt.isPhaseUsing(player) &&
											game.hasPlayer(function (current) {
												return evt.targets.includes(current) && player.canUse(card, current) && get.effect(current, card, player, player) > 0;
											})
										) {
											return num + 10;
										}
									}
								},
							},
							ai: {
								effect: {
									player(card, player, target) {
										var evt = player.getLastUsed();
										if (evt && evt.targets.includes(target) && (!player.getStat('triggerSkill').XK_zhuhuayangwu || !player.getStat('triggerSkill').XK_zhuhuayangwu < 3) && player.isPhaseUsing(player)) return [1.5, 0];
									},
								},
							},
						},
						XK_zhuhuayangwu1: {
							trigger: {
								player: 'phaseUseAfter',
							},
							forced: true,
							content() {
								player.storage.XK_zhuhuayangwu = {};
							},
						},
						XK_xiaoaohongchen: {
							init(player) {
								player.storage.XK_xiaoao = [];
								player.storage.XK_xiaoao_a = '';
								player.storage.XK_hongchen = [];
							},
							group: ['XK_xiaoao', 'XK_hongchen', 'XK_dazhoutian', 'XK_dazhoutian1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_xiaoao: {
							audio: 'ext:侠客风云传/audio:1',
							marktext: '傲',
							intro: {
								content(content, player) {
									var temp = player.storage.XK_xiaoao_a,
										temp1 = player.storage.XK_xiaoao;
									var str = '';
									if (temp == '') str = '当前未声明任何牌';
									else str = '当前声明牌:' + get.translation(temp);
									if (!temp1.length) str += '</br>【笑傲】无记录的牌';
									else str += '</br>【笑傲】已记录的牌:' + get.translation(temp1);
									var temp2 = player.storage.XK_hongchen;
									if (temp2 && temp2.length) {
										str += '</br>【红尘】已获得的牌:' + get.translation(temp2);
									}
									return str;
								},
							},
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							_priority: 7,
							forced: true,
							content() {
								'step 0';
								var list = [];
								for (var i = 0; i < lib.inpile.length; i++) {
									if (get.type(lib.inpile[i]) == 'trick' && !player.storage.XK_xiaoao.includes(lib.inpile[i])) {
										list.push(['锦囊', '', lib.inpile[i]]);
									}
								}
								if (list.length) {
									player.chooseButton(['声明并记录一张普通锦囊牌', [list, 'vcard']]).set('ai', function (button) {
										var card = { name: button.link[2] };
										if (player.countCards('h', { name: card.name })) {
											return get.value(card);
										}
										return get.value(card) / 3;
									});
								} else event.finish();
								('step 1');
								if (result.links?.length) {
									var name = result.links[0][2];
									game.log(player, '声明并记录了', name);
									player.storage.XK_xiaoao.push(name);
									player.storage.XK_xiaoao_a = name;
									player.addTempSkill('XK_xiaoaoex', { player: 'phaseBefore' });
									player.markSkill('XK_xiaoao');
								}
							},
						},
						XK_xiaoaoex: {
							charlotte: true,
							onremove(player, skill) {
								player.storage.XK_xiaoao_a = '';
							},
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								global: 'useCardAfter',
							},
							filter(event, player) {
								if (event.getParent(2).skill == 'XK_xiaoaoex') return false;
								if (player.storage.XK_xiaoao_a != event.card.name) return false;
								return true;
							},
							check(event, player) {
								var eff = 0;
								for (var i = 0; i < event.targets.length; i++) {
									eff += get.effect(event.targets[i], event.card, event.player, player);
								}
								return eff > 0;
							},
							prompt2(event, player) {
								return '是否令' + get.translation(event.player) + '对' + get.translation(event.targets) + '使用的' + get.translation(event.card) + '额外结算一次？';
							},
							logTarget: 'player',
							content() {
								trigger.player.useCard(trigger.card, trigger.cards, trigger.targets, false);
							},
							ai: {
								expose: 0.4,
							},
						},
						XK_hongchen: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								global: 'useCardAfter',
							},
							_priority: 99,
							check(event, player) {
								var val = 0;
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										val += get.value(i);
									}
								return val > 2;
							},
							prompt2(event, player) {
								return '是否移除【笑傲】中的记录,获得' + get.translation(event.cards) + '?';
							},
							filter(event, player) {
								if (event.getParent(2).skill == 'XK_xiaoaoex') return false;
								if (event.player == player) return false;
								if (player.storage.XK_hongchen.includes(event.card.name)) return false;
								if (!player.storage.XK_xiaoao.includes(event.card.name)) return false;
								if (event.card) {
									return get.itemtype(event.cards) == 'cards' && get.position(event.cards[0], true) == 'o';
								}
								return false;
							},
							content() {
								player.gain(trigger.cards, 'gain2');
								player.storage.XK_hongchen.push(trigger.card.name);
								player.storage.XK_xiaoao.remove(trigger.card.name);
								if (player.storage.XK_xiaoao_a == trigger.card.name) {
									player.storage.XK_xiaoao_a = '';
								}
							},
							ai: {
								combo: 'XK_xiaoao',
							},
						},
						XK_miqingdafa: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_lang';
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_lang.mp3');
							},
							group: ['XK_yiluanqingmi'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_yiluanqingmi: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								global: 'roundStart',
							},
							_priority: -99,
							filter(event, player) {
								return game.hasPlayer(function (current) {
									return current != player && !current.hasSkill('XK_yiluanqingmi3');
								});
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('XK_yiluanqingmi'), '指定1名角色,本轮当你成为普通锦囊牌或基本牌的目标时,若该角色不为此牌目标,其也成为此牌目标.', 1, false, function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 1');
								if (result.targets?.length) {
									player.storage.XK_yiluanqingmi1 = result.targets[0];
									player.addTempSkill('XK_yiluanqingmi1', 'roundStart');
									result.targets[0].addTempSkill('XK_yiluanqingmi3', 'roundStart');
									result.targets[0].markSkillCharacter('XK_yiluanqingmi3', player, '意乱情迷', '当' + get.translation(player) + '成为普通锦囊牌和基本牌的目标时,若你不为其目标,你也成为其目标');
								}
							},
						},
						XK_yiluanqingmi1: {
							onremove(player, skill) {
								delete player.storage.XK_yiluanqingmi1;
							},
							trigger: {
								global: ['useCardBegin'],
							},
							check(event, player) {
								var tar = player.storage.XK_yiluanqingmi1;
								var eff = get.effect(tar, event.card, event.player, player);
								return eff > 0;
							},
							prompt2(event, player) {
								return '是否令' + get.translation(player.storage.XK_yiluanqingmi1) + '也成为' + get.translation(event.player) + '所使用的' + get.translation(event.card) + '的目标？';
							},
							filter(event, player) {
								if (!player.storage.XK_yiluanqingmi1) return false;
								if (get.type(event.card) != 'basic' && get.type(event.card) != 'trick') return false;
								var tar = player.storage.XK_yiluanqingmi1;
								return event.targets && !event.targets.includes(tar) && event.targets.includes(player);
							},
							content() {
								var tar = player.storage.XK_yiluanqingmi1;
								trigger.targets.add(tar);
								game.log(tar, '成为了', trigger.card, '的目标.');
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										var tp = get.type(card);
										if (!target.storage.XK_yiluanqingmi || target.storage.XK_yiluanqingmi == '') return;
										if (tp != 'basic' && tp != 'trick') return;
										return 0.8;
									},
								},
							},
							group: ['XK_yiluanqingmi1_clear'],
							subSkill: {
								clear: {
									trigger: { global: 'dieBegin' },
									silent: true,
									filter(event, player) {
										return event.player == player || (player.storage.XK_yiluanqingmi1 && player.storage.XK_yiluanqingmi1 == event.player);
									},
									content() {
										player.storage.XK_yiluanqingmi1.removeSkill('XK_yiluanqingmi3');
										player.removeSkill('XK_yiluanqingmi1');
									},
								},
							},
						},
						XK_yiluanqingmi3: {
							onremove(player, skill) {
								player.unmarkSkill('XK_yiluanqingmi3');
							},
							charlotte: true,
						},
						XK_dingxiwuliang: {
							group: ['XK_linfengying', 'XK_dizhiyou', 'XK_xiaozhoutian'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_linfengying: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								global: 'phaseZhunbeiBegin',
							},
							_priority: 3,
							filter(event, player) {
								if (event.player == player) return false;
								return event.player.countCards('j');
							},
							prompt2(event, player) {
								return '是否使' + get.translation(event.player) + '弃置其判定区的所有牌,并失去' + event.player.countCards('j') + '点体力？';
							},
							check(event, player) {
								var att = get.attitude(player, event.player);
								if (att > 0) {
									if (event.player.hp <= 2) return false;
									return event.player.hasJudge('bingliang') || event.player.hasJudge('lebu');
								} else {
									if (event.player.hp <= 2) return true;
									return !event.player.hasJudge('bingliang') && !event.player.hasJudge('lebu');
								}
							},
							content() {
								var nm = trigger.player.countCards('j');
								trigger.player.discard(trigger.player.getCards('j'));
								trigger.player.loseHp(nm);
							},
						},
						XK_dizhiyou: {
							trigger: {
								global: 'recoverBegin',
							},
							filter(event, player) {
								if (event.player == player) return false;
								if (player.hasSkill('XK_dizhiyou1')) return false;
								if (event.num <= 0) return false;
								return true;
							},
							check(event, player) {
								return get.attitude(player, event.player) < 0;
							},
							prompt2(event, player) {
								return '是否使' + get.translation(event.player) + '的回复值-1？如此你获得【毒盾】2回合.';
							},
							logTarget: 'player',
							content() {
								trigger.num--;
								player.addBuff('XK_dudun', 2, player);
								if (!player.hasSkill('XK_dizhiyou1')) {
									player.addTempSkill('XK_dizhiyou1', 'roundStart');
								}
							},
							ai: {
								expose: 0.3,
							},
						},
						XK_dizhiyou1: {
							charlotte: true,
						},
						XK_dajingangzhang: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_fengqingxiao';
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_fengqingxiao.mp3');
							},
							group: ['XK_weituozhang', 'XK_jingangborezhang'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_weituozhang: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								target: 'useCardToPlayer',
							},
							forced: true,
							_priority: -1,
							filter(event, player) {
								return event.card.name == 'sha' && event.player != player;
							},
							content() {
								'step 0';
								player
									.chooseControlList(['视为对' + get.translation(trigger.player) + '使用1张杀', '获得【丧心】2回合'])
									.set('ai', function (event, player) {
										if (!player.hasSkill('XK_sangxin')) return 1;
										return 0;
									})
									.set('prompt', '是否发动【金刚如来】？');
								('step 1');
								if (result.index == 0) {
									player.useCard({ name: 'sha' }, trigger.player, true);
								} else if (result.index == 1) {
									player.addBuff('XK_sangxin', 2, player);
								}
							},
							ai: {
								expose: 0.2,
							},
						},
						XK_jingangborezhang: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								source: 'damageEnd',
							},
							_priority: -2,
							forced: true,
							filter(event, player) {
								return event.num >= 2;
							},
							content() {
								trigger.player.addBuff('XK_kongju', 1, player);
								trigger.player.addBuff('XK_pojia', 1, player);
							},
						},
						XK_shaolinjiuyang: {
							group: ['XK_chenzhang', 'XK_dazhoutian', 'XK_dazhoutian1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_chenzhang: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: { player: ['phaseBefore', 'changeHp'] },
							forced: true,
							init(player) {
								if (game.online) return;
								player.removeAdditionalSkill('baobian');
								var list = [];
								if (player.hp <= 5) {
									list.push('XK_jingang_re');
								}
								if (player.hp <= 3) {
									list.push('XK_duantiguiyuan_re');
								}
								if (player.hp <= 1) {
									list.push('XK_yijinduangu_re');
								}
								if (list.length) {
									player.addAdditionalSkill('XK_chenzhang', list);
								}
							},
							derivation: ['XK_jingang_re', 'XK_duantiguiyuan_re', 'XK_yijinduangu_re'],
							content() {
								if (trigger.name == 'changeHp' && trigger.num < 0) {
									game.playAudio('../extension/侠客风云传/audio/XK_chenzhang.mp3');
								}
								player.removeAdditionalSkill('XK_chenzhang');
								var list = [];
								if (player.hp <= 5) {
									list.push('XK_jingang_re');
								}
								if (player.hp <= 3) {
									list.push('XK_duantiguiyuan_re');
								}
								if (player.hp <= 1) {
									list.push('XK_yijinduangu_re');
								}
								if (list.length) {
									player.addAdditionalSkill('XK_chenzhang', list);
								}
							},
							ai: {
								maixie: true,
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'damage')) {
											if (!target.hasFriend()) return;
											if (target.hp >= 4) return [0, 1];
										}
										if (get.tag(card, 'recover') && player.hp >= player.maxHp - 1) return [0, 0];
									},
								},
							},
						},
						XK_jingang_re: {
							group: ['XK_jingang'],
						},
						XK_duantiguiyuan_re: {
							group: ['XK_duantiguiyuan'],
						},
						XK_yijinduangu_re: {
							group: ['XK_yijinduangu'],
						},
						XK_baihuacuoquan: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_huachi';
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_huachi.mp3');
							},
							group: ['XK_mantianhuayu', 'XK_baihuaqizhan'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_mantianhuayu: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'useCardBefore',
							},
							_priority: 15,
							check(event, player) {
								var eff = 0;
								for (var i = 0; i < event.targets.length; i++) {
									eff += get.effect(event.targets[i], event.card, player, player);
									if (get.attitude(player, event.targets[i]) > 0) {
										eff -= 2;
									} else eff += 2;
								}
								return eff >= 0;
							},
							prompt2(event, player) {
								return '是否使你对' + get.translation(event.targets) + '使用的' + get.translation(event.card) + '效果改为令其获得【聚气】2回合.';
							},
							filter(event, player) {
								if (get.type(event.card) != 'trick') return false;
								if (!event.targets.length) return false;
								return true;
							},
							logTarget(event, player) {
								return event.targets;
							},
							content() {
								trigger.setContent(function () {
									var evt = _status.event;
									for (var i = 0; i < evt.targets.length; i++) {
										evt.targets[i].addBuff('XK_juqi', 2, player);
									}
									player.lose(evt.cards, ui.discardPile);
									player.$throw(evt.cards, 1000);
								});
							},
						},
						XK_baihuaqizhan: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'phaseDrawBegin1',
							},
							check(event, player) {
								return event.num < 3;
							},
							prompt2(event, player) {
								return '是否跳过摸牌阶段并展示牌堆顶3张牌,获得其中的非基本牌？根据获得的牌数你:0,视为使用1张万箭齐发;1,视为使用1张无中生有;2,令1名其他角色获得【破绽】2回合.';
							},
							content() {
								'step 0';
								var cards = get.cards(3);
								game.cardsGotoOrdering(cards);
								player.showCards(cards, '【百花齐绽】');
								var cardsx = [];
								for (var i = 0; i < cards.length; i++) {
									if (get.type(cards[i]) != 'basic') {
										cardsx.push(cards[i]);
										cards.splice(i--, 1);
									}
								}
								game.cardsDiscard(cards);
								event.nm = cardsx.length;
								player.gain(cardsx, 'gain2');
								('step 1');
								if (event.nm == 0) {
									player.chooseUseTarget({ name: 'wanjian' }, true);
									event.goto(3);
								} else if (event.nm == 1) {
									player.useCard({ name: 'wuzhong' }, player);
									event.goto(3);
								} else if (event.nm == 2) {
									player.chooseTarget('令1名其他角色获得【破绽】2回合', 1, true, function (card, player, target) {
										return player != target;
									}).ai = function (target) {
										var att = get.attitude(player, target);
										if (target.hasSkill('XK_pozhan')) att /= 5;
										return -att;
									};
								} else event.goto(3);
								('step 2');
								if (result.targets?.length) {
									player.line(result.targets[0]);
									result.targets[0].addBuff('XK_pozhan', 2, player);
								}
								('step 3');
								trigger.cancel(null, null, 'notrigger');
							},
						},
						XK_yunvxinjing: {
							init(player) {
								player.storage.XK_huafa = ['sha', 'shan', 'tao'];
								player.markSkill('XK_huafa');
							},
							group: ['XK_huafa', 'XK_xiaozhoutian'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_huafa: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								global: ['useCardAfter', 'respondAfter'],
							},
							intro: {
								content(storage, player, skill) {
									var str = '';
									switch (player.storage.XK_huafa[0]) {
										case 'sha':
											str = '其他角色使用或打出的杀进入弃牌堆时,可使你获得之';
											break;
										case 'shan':
											str = '其他角色使用或打出的闪进入弃牌堆时,可使你获得之';
											break;
										case 'tao':
											str = '其他角色使用或打出的桃进入弃牌堆时,可使你获得之';
											break;
									}
									return str;
								},
							},
							forced: true,
							filter(event, player) {
								if (event.player == player) return false;
								if (event.card && event.card.name == player.storage.XK_huafa[0]) {
									return get.itemtype(event.cards) == 'cards' && get.position(event.cards[0], true) == 'o';
								}
								return false;
							},
							content() {
								'step 0';
								event.pa = player;
								trigger.player.chooseBool('【花法】:是否令' + get.translation(player) + '获得你的' + get.translation(trigger.cards) + '？').ai = function (event, player) {
									var pla = _status.event.getTrigger().player;
									var att = get.attitude(pla, event.pa);
									return att > 0;
								};
								('step 1');
								if (result.bool) {
									player.gain(trigger.cards, 'gain2');
									var temp = player.storage.XK_huafa.shift();
									player.storage.XK_huafa.push(temp);
								}
							},
							ai: {
								expose: 0.2,
							},
						},
						XK_feidao: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_tangzhonghui';
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_tangzhonghui.mp3');
							},
							group: ['XK_chudao'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_chudao: {
							audio: 'ext:侠客风云传/audio:1',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.countCards('h');
							},
							position: 'h',
							selectCard: [1, Infinity],
							filterCard: true,
							prompt: '出牌阶段限1次,你可弃置任意张手牌并摸等量的牌,如此你获得(弃置牌数/2)层【连击】.',
							check(card) {
								return 6 - get.value(card);
							},
							content() {
								'step 0';
								player.draw(cards.length);
								var nm = Math.ceil(cards.length / 2);
								if (!player.hasSkill('XK_lianji')) {
									player.addSkill('XK_lianji');
								}
								player.storage.XK_lianji += 2;
								if (player.storage.XK_lianji > 5) {
									player.storage.XK_lianji = 5;
								}
							},
							ai: {
								order: 1,
								result: {
									player: 1,
								},
							},
						},
						XK_sankushengong: {
							group: ['XK_libuxufa', 'XK_libuxufa1', 'XK_dupo', 'XK_xiaozhoutian'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_libuxufa: {
							audio: 'ext:侠客风云传/audio:1',
							_priority: 8,
							trigger: {
								player: ['shaBefore'],
							},
							filter(event, player) {
								var hs = player.getCards('h');
								for (var i = 0; i < hs.length; i++) {
									if (get.tag(hs[i], 'damage')) return true;
								}
								return false;
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseToDiscard('h', false, 1, '【例不虚发】:选择弃置1张带有伤害标签的牌,使你使用的' + get.translation(trigger.card) + '的伤害与响应所需的闪+1,且此杀无视防具.', function (card) {
										return get.tag(card, 'damage');
									})
									.set('ai', function (card) {
										var tri = _status.event.getTrigger();
										if (get.attitude(player, tri.targets[0]) > 0) return 0;
										if (tri.targets[0].hp < 2) return 0;
										return 5 - get.value(card);
									});
								('step 1');
								if (result.bool) {
									player.addTempSkill('XK_guixi1', { player: 'shaAfter' });
									if (typeof trigger.shanRequired == 'number') {
										trigger.shanRequired += 1;
									} else {
										trigger.shanRequired = 2;
									}
									trigger.ADDdamage = 1;
								}
							},
							ai: {
								expose: 0.2,
							},
						},
						XK_libuxufa1: {
							trigger: {
								source: 'damageBegin1',
							},
							filter(event, player) {
								if (!event.card || event.card.name != 'sha' || !event.notLink()) return false;
								return typeof event.parent.ADDdamage == 'number' && event.parent.ADDdamage > 0;
							},
							forced: true,
							content() {
								var num1 = trigger.parent.ADDdamage;
								trigger.num += num1;
							},
							ai: {
								damageBonus: true,
								XK_shabonus: true,
							},
						},
						XK_dupo: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								source: 'damageBegin4',
							},
							_priority: 3,
							filter(event, player) {
								if (event.num <= 0) return false;
								if (!event.card || event.card.name != 'sha') return false;
								return event.notLink();
							},
							forced: true,
							content() {
								'step 0';
								var func = function (card, target, num) {
									var list = ['令' + target + '获得【中毒】2回合', '令你摸2张牌'];
									var choiceList = ui.create.dialog('【毒魄】:可选择至多' + num + '项,每选择1项,你使用的' + card + '对' + target + '所造成的伤害-1.', 'forcebutton');
									for (var i = 0; i < list.length; i++) {
										var str = '<div class="popup text" style="width:calc(100% - 10px);display:inline-block">';
										if (i == 0) str += '<div>';
										str += list[i];
										if (i == 0) str += '</div>';
										str += '</div>';
										var next = choiceList.add(str);
										next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
										next.firstChild.link = i;
										Object.setPrototypeOf(next, lib.element.Button.prototype); //QQQ
										choiceList.buttons.add(next.firstChild);
									}
									return choiceList;
								};
								var nm = Math.min(2, trigger.num);
								if (player.isOnline2()) {
									player.send(func, get.translation(trigger.card), get.translation(trigger.player), nm);
								}
								event.dialog = func(get.translation(trigger.card), get.translation(trigger.player), nm);
								if (player != game.me || _status.auto) {
									event.dialog.style.display = 'none';
								}
								var next = player.chooseButton();
								next.set('forced', false);
								next.set('selectButton', [1, nm]);
								next.set('filterButton', function (button) {
									return true;
								});
								next.set('ai', function (button) {
									var player = _status.event.player;
									var event = _status.event.getTrigger();
									var att = get.attitude(player, event.player);
									switch (button.link) {
										case 0: {
											return !event.player.hasSkill('XSzhongdu') && att < 0;
										}
										case 1: {
											return att > 0;
										}
									}
								});
								('step 1');
								event.dialog.close();
								var map = [
									function (trigger, player, event) {
										trigger.player.addBuff('XK_zhongdu', 2, player);
										trigger.num--;
									},
									function (trigger, player, event) {
										player.draw(2);
										trigger.num--;
									},
								];
								if (result.links?.length) {
									for (var i = 0; i < result.links.length; i++) {
										game.log(player, '选择了', '#g【毒魄】', '的', '#y选项' + get.cnNumber(result.links[i] + 1, true));
										map[result.links[i]](trigger, player, event);
									}
								}
							},
							ai: {
								threaten: 1.1,
							},
						},
						XK_qiankundanuoyi: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_mingjiaojiaozhu';
							},
							init(player) {
								player.storage.XK_yinyanglunzhuan = 0;
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_mingjiaojiaozhu.mp3');
							},
							group: ['XK_xixingnaqi', 'XK_yinyanglunzhuan', 'XK_yinyanglunzhuan1'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_xixingnaqi: {
							trigger: {
								player: 'useCardBefore',
							},
							filter(event, player) {
								if (event.card.name != 'sha') return false;
								if (event.targets.length > 1) return false;
								return game.hasPlayer(function (current) {
									return player != current && current != event.targets[0] && current.inRange(event.targets[0]);
								});
							},
							usable: 1,
							_priority: 9,
							check(event, player) {
								return get.attitude(player, event.targets[0]) <= 0;
							},
							//audio:"ext:侠客风云传/audio:1",
							prompt2(event, player) {
								var plas = game.filterPlayer(function (current) {
									return player != current && current != event.targets[0] && current.inRange(event.targets[0]);
								});
								return '是否令' + get.translation(plas) + '依次选择1项:对目标使用1张杀;令你摸1张牌？';
							},
							content() {
								'step 0';
								if (player.name == 'XK_mingjiaojiaozhu') {
									game.playAudio('../extension/侠客风云传/audio/XK_xixingnaqi1.mp3');
								}
								var plas = game.filterPlayer(function (current) {
									return player != current && current != trigger.targets[0] && current.inRange(trigger.targets[0]);
								});
								event.tars = plas.sort(lib.sort.seat);
								('step 1');
								if (event.tars.length) {
									var target = event.tars.shift();
									event.current = target;
								} else event.finish();
								('step 2');
								if (event.current) {
									event.current
										.chooseControlList(['对' + get.translation(trigger.targets[0]) + '使用1张杀', '令' + get.translation(player) + '摸1张牌'], true)
										.set('ai', function (event, player) {
											var tar = _status.event.getTrigger().targets[0];
											if (get.attitude(event.current, tar) > 0) return 1;
											return 0;
										})
										.set('prompt', '【吸星纳气】:请选择一项');
								}
								('step 3');
								if (result.index == 0 && event.current.hasUsableCard('sha')) {
									event.current.chooseToUse({ name: 'sha' }, trigger.targets[0], -1, '对' + get.translation(trigger.targets[0]) + '使用1张杀', true).set('targetRequired', true);
								} else {
									game.log(event.current, '令', player, '摸1张牌.');
									player.draw();
								}
								event.goto(1);
							},
						},
						XK_yinyanglunzhuan: {
							//audio:"ext:侠客风云传/audio:1",
							enable: 'phaseUse',
							filterCard: true,
							selectCard: [1, Infinity],
							discard: false,
							lose: false,
							filterTarget(card, player, target) {
								return player != target && !target.hasSkill('XK_yinyanglunzhuan2');
							},
							check(card) {
								var player = get.owner(card);
								if (player.countCards('h') < player.hp) return -1;
								if (ui.selected.cards.length > 2) return -1;
								if (!ui.selected.cards.length) return 6 - get.value(card);
								else return 8 - get.value(card);
							},
							content() {
								if (player.name == 'XK_mingjiaojiaozhu') {
									game.playAudio('../extension/侠客风云传/audio/XK_yinyanglunzhuan1.mp3');
								}
								target.gain(cards, player, 'giveAuto');
								if (cards.length >= 2) {
									player.storage.XK_yinyanglunzhuan++;
								}
								target.addTempSkill('XK_yinyanglunzhuan2');
							},
							ai: {
								order: 1,
								result: {
									target(player, target) {
										if (target.hasSkillTag('nogain')) return 0;
										if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
											if (target.hasSkillTag('nodu')) return 0;
											return -10;
										}
										if (target.hasJudge('lebu')) return 0;
										var nh = target.countCards('h');
										if (player.countCards('h') < 3) return 0;
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
								threaten: 0.9,
							},
						},
						XK_yinyanglunzhuan1: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: ['phaseUseEnd'],
							},
							_priority: 7,
							filter(event, player) {
								return player.storage.XK_yinyanglunzhuan > 0;
							},
							forced: true,
							content() {
								'step 0';
								event.nm = player.storage.XK_yinyanglunzhuan;
								event.basiclist = [];
								event.basiclist.push(['基本', '', 'sha']);
								event.basiclist.push(['基本', '', 'sha', 'fire']);
								event.basiclist.push(['基本', '', 'sha', 'thunder']);
								event.basiclist.push(['基本', '', 'jiu']);
								event.basiclist.push(['基本', '', 'tao']);
								('step 1');
								if (event.basiclist.length && event.nm > 0) {
									player.chooseButton(['是否视为使用1张基本牌', [event.basiclist, 'vcard']], false).set('ai', function (button) {
										if (player.isDamaged()) {
											if (button.link[2] == 'tao') return 9;
										} else if (event.nm > 1) {
											if (button.link[2] == 'jiu') return 7;
										} else if (button.link[2] == 'sha' && button.link[3] == 'fire') return 4;
										return 1;
									});
								} else event.goto(3);
								('step 2');
								if (result.links?.length) {
									player.chooseUseTarget({ name: result.links[0][2], nature: result.links[0][3] }, false);
									for (var i = 0; i < event.basiclist.length; i++) {
										if (event.basiclist[i][2] == result.links[0][2] && event.basiclist[i][3] == result.links[0][3]) event.basiclist.splice(i--, 1);
									}
									event.nm--;
									event.goto(1);
								} else event.goto(3);
								('step 3');
								player.storage.XK_yinyanglunzhuan = 0;
							},
						},
						XK_yinyanglunzhuan2: {
							charlotte: true,
						},
						XK_riyuezhangfa: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_riyuejiaozhu';
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_riyuejiaozhu.mp3');
							},
							group: ['XK_xiongyan'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_xiongyan: {
							//audio:"ext:侠客风云传/audio:1",
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							filter(event, player) {
								return game.hasPlayer(function (current) {
									return player != current && player.inRange(current);
								});
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('XK_xiongyan'), '是否对攻击范围内的1名其他角色造成1点伤害？如此,你可将本回合的判定/摸牌/出牌阶段移至弃牌阶段之后.', 1, false, function (card, player, target) {
										return target != player && player.inRange(target);
									})
									.set('ai', function (target) {
										var eff = get.damageEffect(target, player, player);
										return eff;
									});
								('step 1');
								if (result.bool) {
									if (player.name == 'XK_riyuejiaozhu') {
										game.playAudio('../extension/侠客风云传/audio/XK_xiongyan1.mp3');
									}
									result.targets[0].damage(1, player, 'nocard');
									player
										.chooseControl('判定阶段', '摸牌阶段', '出牌阶段', '不选择', true, function (event, player) {
											if (!player.needsToDiscard()) return '摸牌阶段';
											return '判定阶段';
										})
										.set('prompt', '你可以使本回合的一个阶段移至弃牌阶段之后.');
								} else event.finish();
								('step 2');
								if (result.control != '不选择') {
									switch (result.control) {
										case '判定阶段':
											player.skip('phaseJudge');
											break;
										case '摸牌阶段':
											player.skip('phaseDraw');
											break;
										case '出牌阶段':
											player.skip('phaseUse');
											break;
									}
									player.addTempSkill('XK_xiongyan1');
									player.storage.XK_xiongyan1 = result.control;
								} else event.finish();
							},
							ai: {
								damage: true,
							},
						},
						XK_xiongyan1: {
							init(player) {
								player.storage.XK_xiongyan = '';
							},
							trigger: {
								player: ['phaseDiscardAfter'],
							},
							charlotte: true,
							forced: true,
							filter(event, player) {
								return player.storage.XK_xiongyan1 != '';
							},
							content() {
								switch (player.storage.XK_xiongyan1) {
									case '判定阶段':
										player.phaseJudge();
										break;
									case '摸牌阶段':
										player.phaseDraw();
										break;
									case '出牌阶段':
										player.phaseUse();
										break;
								}
								player.storage.XK_xiongyan = '';
							},
						},
						XK_xiuluozhenjing: {
							init(player) {
								player.storage.XK_xueseqiangwei = [];
							},
							group: ['XK_xueseqiangwei', 'XK_shayi', 'XK_dazhoutian', 'XK_dazhoutian1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_xueseqiangwei: {
							intro: {
								content: 'cards',
							},
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'useCardAfter',
							},
							filter(event, player) {
								if (player.storage.XK_xueseqiangwei.length >= 4) return false;
								return true;
							},
							forced: true,
							content() {
								'step 0';
								player.draw();
								('step 1');
								var sts = [];
								for (var i = 0; i < player.storage.XK_xueseqiangwei.length; i++) {
									sts.add(player.storage.XK_xueseqiangwei[i].suit);
								}
								event.cds = player.getCards('h');
								for (var j = 0; j < event.cds.length; j++) {
									if (sts.includes(event.cds[j].suit)) event.cds.splice(j--, 1);
								}
								('step 2');
								if (event.cds.length) {
									player.chooseCardButton('【血色蔷薇】:将一张手牌置于武将牌上.', event.cds, 1, true).ai = function (button) {
										return 9 - get.value(button.link);
									};
								} else event.finish();
								('step 3');
								if (result.links?.length) {
									var cd = result.links[0];
									player.lose(cd, ui.special, 'toStorage');
									player.storage.XK_xueseqiangwei.push(cd);
									if (player.storage.XK_xueseqiangwei.length != 0) {
										player.markSkill('XK_xueseqiangwei');
									}
								}
							},
						},
						XK_shayi: {
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							filter(event, player) {
								return player.storage.XK_xueseqiangwei.length >= 4;
							},
							forced: true,
							content() {
								'step 0';
								if (player.name == 'XK_litanhua') {
									game.playAudio('../extension/侠客风云传/audio/XK_shayi1.mp3');
								}
								if (player.countCards('j')) {
									player.discard(player.getCards('j'));
								}
								game.cardsDiscard(player.storage.XK_xueseqiangwei);
								player.storage.XK_xueseqiangwei = [];
								player.unmarkSkill('XK_xueseqiangwei');
								player.addTempSkill('XK_shayi1');
							},
						},
						XK_shayi1: {
							mark: true,
							intro: {
								content(storage) {
									return '基本牌均视为火杀';
								},
							},
							mod: {
								cardname(card, player, name) {
									if (get.type2(card.name) == 'basic' && card.name != 'sha') {
										return 'sha';
									}
								},
								cardnature(card, player, name) {
									if (get.type2(card.name) == 'basic') {
										return 'fire';
									}
								},
							},
						},
						XK_bingxinjue: {
							init(player) {
								player.storage.XK_xinrubingqing = [];
							},
							group: ['XK_xinrubingqing', 'XK_tiantabujing', 'XK_dazhoutian', 'XK_dazhoutian1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_xinrubingqing: {
							intro: {
								content: 'cards',
							},
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								var cds = player.getCards('h');
								for (var i = 0; i < cds.length; i++) {
									if (get.type(cds[i]) == 'basic' && lib.filter.cardEnabled(cds[i], player)) return true;
								}
								return false;
							},
							content() {
								'step 0';
								if (player.name == 'XK_fengzhongzhishen') {
									game.playAudio('../extension/侠客风云传/audio/XK_xinrubingqing1.mp3');
								}
								var lt = [];
								var cds = player.getCards('h');
								for (var i = 0; i < cds.length; i++) {
									if (get.type(cds[i]) == 'basic' && lib.filter.cardEnabled(cds[i], player)) lt.push(cds[i]);
								}
								player.chooseCardButton('【心如冰清】:将1张基本牌置于武将牌上视为使用之,此牌不计入使用次数.', lt, 1, false).ai = function (button) {
									return get.value(button.link);
								};
								('step 1');
								if (result.links?.length) {
									var cd = result.links[0];
									player.chooseUseTarget({ name: cd.name, nature: cd.nature, suit: cd.suit, number: cd.number }, false);
									player.lose(cd, ui.special, 'toStorage');
									player.storage.XK_xinrubingqing.push(cd);
									if (player.storage.XK_xinrubingqing.length != 0) {
										player.markSkill('XK_xinrubingqing');
									}
								}
							},
							ai: {
								order: 9,
								result: {
									player: 1,
								},
							},
						},
						XK_tiantabujing: {
							trigger: {
								player: 'damageAfter',
							},
							filter(event, player) {
								if (event.num <= 0) return false;
								return player.storage.XK_xinrubingqing.length;
							},
							forced: true,
							content() {
								'step 0';
								var cdx = player.storage.XK_xinrubingqing;
								event.cds = [];
								for (var i = 0; i < cdx.length; i++) {
									if (lib.filter.cardEnabled(cdx[i], player)) {
										event.cds.push(cdx[i]);
									}
								}
								('step 1');
								if (event.cds.length) {
									player.chooseCardButton('【万变犹定】:选择使用1张武将牌上的牌,且此牌无距离限制.', event.cds, false).ai = function (button) {
										return get.value(button.link);
									};
								} else event.finish();
								('step 2');
								if (result.links?.length) {
									if (player.name == 'XK_fengzhongzhishen') {
										game.playAudio('../extension/侠客风云传/audio/XK_tiantabujing1.mp3');
									}
									player.chooseUseTarget(result.links[0], 'nodistance');
									player.storage.XK_xinrubingqing.remove(result.links[0]);
									if (player.storage.XK_xinrubingqing.length == 0) player.unmarkSkill('XK_xinrubingqing');
								}
							},
							ai: {
								maixie: true,
								skillTagFilter(player) {
									if (player.storage.XK_xinrubingqing.length <= 0) return false;
								},
							},
						},
						XK_longxiangborezhang: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_jinlunguoshi';
							},
							init(player) {
								player.storage.XK_wushangbore = false;
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_jinlunguoshi.mp3');
							},
							group: ['XK_wushangbore', 'XK_wushangbore1'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_wushangbore: {
							//audio:"ext:侠客风云传/audio:1",
							trigger: {
								source: 'damageBegin4',
							},
							filter(event, player) {
								if (player.storage.XK_wushangbore) return false;
								if (!event.card || (event.card.name != 'sha' && event.card.name != 'juedou') || !event.notLink()) return false;
								return player.isDamaged();
							},
							check(event, player) {
								return get.attitude(player, event.player) <= 0;
							},
							prompt2(event, player) {
								var nm = Math.ceil(player.getDamagedHp() / 2);
								return '是否使你对' + get.translation(event.player) + '造成的伤害增加' + nm + '？';
							},
							content() {
								if (player.name == 'XK_jinlunguoshi') {
									game.playAudio('../extension/侠客风云传/audio/XK_wushangbore2.mp3');
								} else {
									game.playAudio('../extension/侠客风云传/audio/XK_wushangbore1.mp3');
								}
								var nm = Math.ceil(player.getDamagedHp() / 2);
								trigger.num += nm;
								player.storage.XK_wushangbore = true;
							},
							ai: {
								damageBonus: true,
								XK_shabonus: true,
							},
						},
						XK_wushangbore1: {
							trigger: {
								player: ['changeHp'],
							},
							charlotte: true,
							forced: true,
							filter(event, player) {
								return event.num != 0;
							},
							content() {
								player.storage.XK_wushangbore = false;
							},
						},
						XK_yihuajieyu: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_yihuagongzhu';
							},
							init(player) {
								player.storage.XK_yihua = [];
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_yihuagongzhu.mp3');
							},
							group: ['XK_yihua', 'XK_yihua1', 'XK_jieyu'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_yihua: {
							//audio:"ext:侠客风云传/audio:1",
							trigger: {
								player: 'phaseDrawBegin',
							},
							forced: true,
							_priority: -7,
							filter(event, player) {
								return event.num > 0;
							},
							content() {
								'step 0';
								player.storage.XK_yihua = [];
								player.chooseTarget(
									get.prompt('XK_yihua'),
									'是否获得至多' + get.translation(trigger.num) + '名角色各1张手牌？如此出牌阶段结束你需交给这些角色各1张牌并令其获得【移】标记.',
									[1, trigger.num],
									function (card, player, target) {
										return player != target && target.countCards('h');
									},
									function (target) {
										var att = get.attitude(player, target),
											hs = target.countCards('h');
										if (att > 0) return hs <= 2;
										else return hs >= 3;
									}
								);
								('step 1');
								if (result.bool) {
									if (player.name == 'XK_yihuagongzhu') {
										game.playAudio('../extension/侠客风云传/audio/XK_yihua1.mp3');
									}
									trigger.num -= result.targets.length;
									player.storage.XK_yihua = result.targets;
									for (var i = 0; i < result.targets.length; i++) {
										player.gainPlayerCard('h', result.targets[i], 1, true);
										result.targets[i].addSkill('XK_yihua2');
										result.targets[i].storage.XK_yihua2 = player;
										result.targets[i].markSkillCharacter('XK_yihua2', player, '移', '出牌阶段开始,你需对' + get.translation(player) + '使用1张杀,否则令其摸1张牌.');
									}
								} else {
									event.finish();
								}
								('step 2');
								if (trigger.num <= 0) game.delay();
							},
							ai: {
								expose: 0.3,
							},
						},
						XK_yihua1: {
							//audio:"ext:侠客风云传/audio:1",
							trigger: {
								player: 'phaseUseEnd',
							},
							forced: true,
							filter(event, player) {
								return player.countCards('he') && player.storage.XK_yihua.length;
							},
							content() {
								'step 0';
								var tars = player.storage.XK_yihua;
								event.tars = tars.sort(lib.sort.seat);
								('step 1');
								if (event.tars.length) {
									var target = event.tars.shift();
									event.current = target;
								} else event.goto(4);
								('step 2');
								if (event.current && player.countCards('he')) {
									player.chooseCard('【移花】:交给' + get.translation(event.current) + '一张牌', 'he', 1, true).ai = function (card) {
										return 6 - get.value(card);
									};
								} else event.goto(4);
								('step 3');
								if (result.cards?.length) {
									event.current.gain(result.cards, player, 'giveAuto');
								}
								event.goto(1);
								('step 4');
								player.storage.XK_yihua = [];
							},
							ai: {
								threaten: 1.2,
								expose: 0.3,
							},
						},
						XK_yihua2: {
							onremove(player) {
								player.unmarkSkill('XK_yihua2');
							},
							charlotte: true,
						},
						XK_jieyu: {
							//audio:"ext:侠客风云传/audio:1",
							ai: {
								expose: 0.3,
							},
							trigger: {
								global: ['phaseUseBegin'],
							},
							_priority: -3,
							filter(event, player) {
								return event.player != player && event.player.hasSkill('XK_yihua2') && event.player.storage.XK_yihua2;
							},
							forced: true,
							content() {
								'step 0';
								if (player.name == 'XK_yihuagongzhu') {
									game.playAudio('../extension/侠客风云传/audio/XK_jieyu1.mp3');
								}
								var pla = trigger.player.storage.XK_yihua2,
									tar = trigger.player;
								trigger.player
									.chooseToUse(
										function (card, player, event) {
											if (card.name != 'sha') return false;
											return lib.filter.filterCard.apply(this, arguments);
										},
										'对' + get.translation(pla) + '使用一张杀,否则其摸1张牌.'
									)
									.set('ai2', function (target, card, player, player2, isLink) {
										var eff = get.effect(pla, { name: 'sha' }, tar, tar);
										return eff;
									})
									.set('filterTarget', function (card, player, target) {
										if (target != pla) return false;
										return lib.filter.targetEnabled.apply(this, arguments);
									});
								('step 1');
								if (!result.bool) {
									trigger.player.storage.XK_yihua2.draw();
								}
								('step 2');
								trigger.player.removeSkill('XK_yihua2');
							},
						},
						XK_chunyangwuji: {
							group: ['XK_chunyang', 'XK_chunyang1', 'XK_wuji1', 'XK_dazhoutian', 'XK_dazhoutian1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_chunyang: {
							trigger: {
								player: ['taoBegin', 'jiuBegin', 'shaBegin'],
							},
							_priority: 90,
							forced: true,
							content() {
								if (player.name == 'XK_wudangzushi') {
									game.playAudio('../extension/侠客风云传/audio/XK_chunyang1.mp3');
								}
								trigger.baseDamage++;
							},
						},
						XK_chunyang1: {
							trigger: {
								player: ['useCardAfter', 'respondAfter'],
							},
							forced: true,
							filter(event, player) {
								return _status.currentPhase != player && get.type(event.card) == 'basic';
							},
							content() {
								player.addTempSkill('XK_chunyang2');
							},
						},
						XK_chunyang2: {
							charlotte: true,
							mod: {
								cardEnabled2(card, player, num) {
									if (get.type(card) == 'basic') return false;
								},
							},
						},
						XK_wuji1: {
							trigger: {
								player: 'shaAfter',
							},
							usable: 1,
							filter(event, player) {
								var ran = player.getAttackRange();
								return player.isPhaseUsing() && ran > 1;
							},
							check(event, player) {
								return true;
							},
							prompt2(event, player) {
								return '是否你的攻击距离变为1直至回合结束并重置基本牌使用次数？';
							},
							content() {
								if (player.name == 'XK_wudangzushi') {
									game.playAudio('../extension/侠客风云传/audio/XK_wuji1.mp3');
								}
								player.addTempSkill('XK_wuji2');
								player.stat[player.stat.length - 1].card.sha = 0;
								player.stat[player.stat.length - 1].card.jiu = 0;
							},
						},
						XK_wuji2: {
							mod: {
								attackFrom(from, to, distance) {
									var equips = from.getCards('e', function (card) {
										return !ui.selected.cards || !ui.selected.cards.includes(card);
									});
									var range = 0;
									for (var i = 0; i < equips.length; i++) {
										var info = get.info(equips[i]).distance;
										if (!info) continue;
										if (info.attackFrom) {
											range += info.attackFrom;
										}
									}
									return distance - range;
								},
							},
						},
						XK_tianxuezhifa: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_huajiuse';
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_huajiuse.mp3');
							},
							group: ['XK_wanxiangsenluo'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_wanxiangsenluo: {
							audio: 'ext:侠客风云传/audio:1',
							enable: 'phaseUse',
							usable: 1,
							prompt: '你可令你与任意名其他角色随机分配【刺目】【恐惧】【流血】【散功】2回合;若仅选择了1名其他角色,你获得【卸劲】2回合.',
							selectTarget: [1, Infinity],
							multitarget: true,
							multiline: true,
							filterTarget(card, player, target) {
								return player != target;
							},
							content() {
								'step 0';
								var lt = ['XK_cimu', 'XK_kongju', 'XK_liuxue', 'XK_sangong'];
								var ts = targets.concat(player);
								for (var i = 0; i < lt.length; i++) {
									var tp = ts.randomGet();
									tp.addBuff(lt[i], 2, player);
								}
								('step 1');
								if (targets.length == 1) {
									player.addBuff('XK_xiejin', 2, player);
								}
							},
							ai: {
								order: 1,
								result: {
									target: -1,
								},
							},
						},
						XK_tianxuegong: {
							group: ['XK_bingpo', 'XK_bingpo1', 'XK_bingxin1', 'XK_dazhoutian', 'XK_dazhoutian1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_bingpo: {
							trigger: {
								player: 'addBuffBegin',
							},
							filter(event, player) {
								if (player.checkHp(0.5, 'unequal')) return false;
								var info = lib.skill[event.skill];
								return event.skill == 'XK_neishang' || event.skill == 'XK_yunxuan' || event.skill == 'XK_zhongdu';
							},
							_priority: 90,
							forced: true,
							content() {
								trigger.cancel();
							},
							ai: {
								XK_nozhongdu: true,
								skillTagFilter(player) {
									if (!player.checkHp(0.5, 'unequal')) return false;
								},
							},
						},
						XK_bingpo1: {
							trigger: { player: 'phaseZhunbeiBegin' },
							filter(event, player) {
								return player.checkHp(0.5, 'unequal');
							},
							forced: true,
							content() {
								player.addBuff('XK_guiyuan', 2, player);
							},
						},
						XK_bingxin1: {
							trigger: {
								global: ['useCardAfter'],
							},
							forced: true,
							filter(event, player) {
								if (event.player == player) return false;
								if (event.player.hp == 1 || get.distance(player, event.player) <= 1) {
									if (event.card && event.card.name == 'shan') {
										return get.itemtype(event.cards) == 'cards' && get.position(event.cards[0], true) == 'o';
									}
								}
								return false;
							},
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_bingxinex.mp3');
								player.gain(trigger.cards, 'gain2');
							},
							ai: {
								threaten: 1.1,
							},
						},
						XK_xiuluowuqing: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_fanweili';
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_fanweili.mp3');
							},
							group: ['XK_xiuluoba'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_xiuluoba: {
							audio: 'ext:侠客风云传/audio:1',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								if (player.getCardUsable('sha') <= 0) return false;
								return game.hasPlayer(function (current) {
									return current != player && player.inRange(current);
								});
							},
							prompt: '你可失去任意点体力视为对攻击范围内任意名角色使用1张杀并获得【狂怒】2回合,若因此失去至少2点体力,获得【霸体】2回合.',
							selectTarget(card, player, range) {
								var player = _status.event.player;
								var num = player.hp;
								return [1, num];
							},
							multitarget: true,
							multiline: true,
							filterTarget(card, player, target) {
								return player != target && player.inRange(target);
							},
							content() {
								'step 0';
								event.tp = targets.length;
								player.loseHp(event.tp);
								player.addBuff('XK_kuangnu', 2, player);
								player.useCard({ name: 'sha' }, targets, true);
								('step 1');
								if (event.tp >= 2) {
									player.addBuff('XK_bati', 2, player);
								}
							},
							ai: {
								order() {
									return get.order({ name: 'sha' }) - 0.05;
								},
								result: {
									player(player, target) {
										if (player.hp < 2) return -10;
										return 0;
									},
									target(player, target) {
										var eff = get.effect(target, { name: 'sha' }, player, player);
										return eff;
									},
								},
							},
						},
						XK_xiuluobafeng: {
							group: ['XK_baosha', 'XK_xuezhan', 'XK_xuezhan1', 'XK_dazhoutian', 'XK_dazhoutian1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_baosha: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: ['damageAfter'],
							},
							check(event, player) {
								return event.source.countCards('h') > player.countCards('h');
							},
							logTarget: 'source',
							filter(event, player) {
								return event.source && event.source.countCards('h') != player.countCards('h');
							},
							prompt2(event, player) {
								return '将手牌数调整至与' + get.translation(event.source) + '相同？';
							},
							content() {
								'step 0';
								var num1 = trigger.source.countCards('h') - player.countCards('h');
								if (num1 < 0) player.chooseToDiscard('h', -num1, true);
								else player.draw(num1);
								('step 1');
								if (player.countCards('h', 'sha')) {
									var num2 = player.countCards('h', 'sha');
									player.chooseCard('【暴杀】:是否展示任意张杀,当前回合结束时你依次使用之.', [1, num2], { name: 'sha' }, false).ai = function (card) {
										if (
											game.hasPlayer(function (current) {
												return player.canUse({ name: 'sha' }, current) && get.effect(current, { name: 'sha' }, player, player) > 0;
											})
										)
											return 20;
										return -1;
									};
								} else event.finish();
								('step 2');
								if (result.cards?.length) {
									player.showCards(result.cards);
									player.storage.XK_baosha1 = result.cards;
									player.addTempSkill('XK_baosha1');
									player.markSkill('XK_baosha1');
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
											var num1 = player.countCards('h') - target.countCards('h');
											if (num1 <= 0) return;
											if (target.hp > 1) return [1, num1];
											else return [1, num1 * 0.5];
										}
									},
								},
							},
						},
						XK_baosha1: {
							onremove(player) {
								if (player.storage.XK_baosha1) {
									for (var i = 0; i < player.storage.XK_baosha1.length; i++) {
										player.chooseUseTarget(player.storage.XK_baosha1[i], true, true);
									}
								}
							},
							intro: {
								content: 'cards',
							},
						},
						XK_xuezhan: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								source: 'damageBegin4',
							},
							filter(event, player) {
								if (!event.card || event.card.name != 'sha' || !event.notLink()) return false;
								return event.player != player && event.num > 0;
							},
							_priority: -5,
							check(event, player) {
								if (get.attitude(player, event.player) > 0) return true;
								if (event.num > 1) return false;
								if (event.player.hp <= event.num) return false;
								return true;
							},
							prompt2(event, player) {
								return '是否防止对' + get.translation(event.player) + '造成的' + event.num + '点伤害,令其获得1层【斩】？';
							},
							content() {
								'step 0';
								if (!trigger.player.hasSkill('XK_xuezhan2')) {
									trigger.player.addSkill('XK_xuezhan2');
								}
								trigger.player.storage.XK_xuezhan2++;
								if (player.stat[player.stat.length - 1].card.sha > 0) {
									player.stat[player.stat.length - 1].card.sha--;
								}
								('step 1');
								trigger.cancel();
							},
						},
						XK_xuezhan1: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								source: 'damageBegin4',
							},
							_priority: -99,
							check(event, player) {
								if (get.attitude(player, event.player) > 0) return false;
								return event.num + event.player.storage.XK_xuezhan2 >= event.player.hp;
							},
							prompt2(event, player) {
								return '是否移除' + get.translation(event.player) + '的所有【斩】,令此伤害+' + event.player.storage.XK_xuezhan2 + '？';
							},
							filter(event, player) {
								return event.player.hasSkill('XK_xuezhan2') && event.player.storage.XK_xuezhan2 > 0;
							},
							content() {
								var nm = trigger.player.storage.XK_xuezhan2;
								trigger.num += nm;
								trigger.player.removeSkill('XK_xuezhan2');
								delete trigger.player.storage.XK_xuezhan2;
							},
						},
						XK_xuezhan2: {
							marktext: '斩',
							init(player) {
								player.storage.XK_xuezhan2 = 0;
								player.markSkill('XK_xuezhan2');
							},
							intro: {
								content(storage) {
									return '当前层数:' + storage;
								},
							},
						},
						XK_chanyizizai: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_budong';
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_budong.mp3');
							},
							group: ['XK_budongmingwang', 'XK_budongmingwang1'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_budongmingwang: {
							audio: 'ext:侠客风云传/audio:1',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								if (player.getCardUsable('sha') <= 0) return false;
								if (!player.countCards('h', 'sha')) return false;
								return game.hasPlayer(function (current) {
									return player.canUse({ name: 'sha' }, current, false) && player.inRange(current);
								});
							},
							filterCard(card, player) {
								return card.name == 'sha';
							},
							prompt: '将1张杀对攻击范围内的任意名角色使用,此杀造成伤害时伤害-1并令目标获得【捉影】1回合.',
							selectCard: 1,
							selectTarget: [1, Infinity],
							position: 'h',
							multitarget: true,
							multiline: true,
							discard: false,
							filterTarget(card, player, target) {
								return player.canUse({ name: 'sha' }, target);
							},
							check(card) {
								return true;
							},
							content() {
								player.useCard(card, cards, targets);
							},
							ai: {
								order: 9,
								expose: 0.3,
								result: {
									target(player, target) {
										if (target.hasSkill('XK_zhuoying')) return 0;
										return -1;
									},
								},
							},
						},
						XK_budongmingwang1: {
							trigger: {
								source: 'damageBegin',
							},
							_priority: 99,
							forced: true,
							filter(event, player) {
								if (!event.card || event.card.name != 'sha' || event.getParent(3).name != 'XK_budongmingwang') return false;
								return true;
							},
							content() {
								trigger.player.addBuff('XK_zhuoying', 1, player);
								trigger.num--;
							},
						},
						XK_jingangbuhuai: {
							init(player) {
								player.storage.XK_zuowang = '';
							},
							group: ['XK_buhuai', 'XK_buhuai1', 'XK_jingang', 'XK_xiaozhoutian'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_buhuai: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: ['damageAfter'],
							},
							forced: true,
							_priority: 7,
							content() {
								player.addBuff('XK_qidun', 2, player);
							},
							ai: {
								XK_selfbuff: true,
							},
						},
						XK_buhuai1: {
							trigger: {
								player: ['recoverAfter'],
							},
							forced: true,
							_priority: 8,
							content() {
								player.deleteBuff('XK_qidun');
							},
						},
						XK_jingang: {
							description: '当你获得异常状态时,若来源没有此状态,你可进行一次判定,若为基本牌,将此状态转移至来源.',
							audio: 'ext:侠客风云传/audio:1',
							_priority: -1,
							trigger: {
								player: 'addBuffBegin',
							},
							filter(event, player) {
								var info = lib.skill[event.skill];
								if (!info.ai || !info.ai['XK_debuff']) return false;
								if (event.source == player) return false;
								return event.source && event.source.isAlive() && !event.source.hasSkill(event.skill);
							}, //QQQ
							check(event, player) {
								var att = get.attitude(player, event.source);
								return att <= 0;
							},
							prompt2(event, player) {
								return '是否进行一次判定？若为基本牌,将' + get.translation(event.skill) + '状态转移至' + get.translation(event.source) + '.';
							},
							content() {
								'step 0';
								player.judge('金刚', function (card) {
									if (get.type(card) == 'basic') return 3;
									return -3;
								});
								('step 1');
								if (result.bool == true) {
									trigger.source.addBuff(trigger.skill, trigger.num, trigger.source);
									trigger.cancel();
								}
							},
							ai: {
								expose: 0.3,
							},
						},
						XK_jinzhenjiemai: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_shenyi';
							},
							init(player) {
								player.storage.XK_qianjinfang = false;
								player.markSkill('XK_qianjinfang');
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_shenyi.mp3');
							},
							group: ['XK_sanzhegong', 'XK_qianjinfang'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_sanzhegong: {
							audio: 'ext:侠客风云传/audio:1',
							enable: 'phaseUse',
							filterTarget(card, player, target) {
								return target.isDamaged();
							},
							usable: 1,
							filter(event, player) {
								return game.hasPlayer(function (current) {
									return current.isDamaged();
								});
							},
							prompt: '你可令1名已受伤的角色获得【三折肱】2回合,若不为你,你获得【净化】2回合.',
							selectTarget: 1,
							content() {
								'step 0';
								target.addBuff('XK_sanzhe', 2, player);
								if (target != player) {
									player.addBuff('XK_jinghua', 2, player);
								}
							},
							ai: {
								order: 9,
								XK_selfbuff: true,
								result: {
									player: 1,
									target: 2,
								},
								expose: 0.3,
							},
						},
						XK_qianjinfang: {
							audio: 'ext:侠客风云传/audio:1',
							filter(event, player) {
								return !player.storage.XK_qianjinfang;
							},
							intro: {
								content: 'limited',
							},
							filter(event, player) {
								if (player.storage.XK_qianjinfang) return false;
								return game.hasPlayer(function (current) {
									return current.isDamaged() && current != player;
								});
							},
							limited: true,
							enable: 'phaseUse',
							filterTarget(card, player, target) {
								return target.isDamaged() && target != player;
							},
							prompt: '你可失去至多X点体力,令1名其他角色回复2X点体力,如此你的防御距离、手牌上限+X直到下回合开始,X为你的体力值.',
							selectTarget: 1,
							content() {
								'step 0';
								var lt = [];
								for (var i = 1; i <= player.hp; i++) {
									lt.push(i);
								}
								player
									.chooseControl(lt, true)
									.set('ai', function (event) {
										var nm = Math.floor(target.getDamagedHp() / 2);
										return nm;
									})
									.set('prompt', '【千金方】:选择失去的体力值');
								('step 1');
								player.awakenSkill('XK_qianjinfang');
								player.storage.XK_qianjinfang = true;
								player.loseHp(result.control);
								target.recover(result.control * 2);
								player.addTempSkill('XK_qianjinfang1', { player: 'phaseBefore' });
								player.storage.XK_qianjinfang1 = result.control;
							},
							ai: {
								order: 8,
								result: {
									player: -1,
									target(player, target) {
										var nm = target.getDamagedHp() / 2;
									},
								},
							},
						},
						XK_qianjinfang1: {
							intro: {
								content(storage) {
									return '防御距离、手牌上限+' + storage;
								},
							},
							onremove(player) {
								delete player.storage.XK_qianjinfang1;
								player.unmarkSkill('XK_qianjinfang1');
							},
							mark: true,
							mod: {
								maxHandcard(player, num) {
									var num1 = player.storage.XK_qianjinfang1;
									return num + num1;
								},
								globalTo(from, to, current) {
									var num1 = to.storage.XK_qianjinfang1;
									return current + num1;
								},
							},
						},
						XK_yaowangshenpian: {
							group: ['XK_pidu', 'XK_pidu1', 'XK_xiaozhoutian'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_pidu: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'addBuffBegin',
							},
							filter(event, player) {
								if (!player.countCards('he')) return false;
								var info = lib.skill[event.skill];
								return info.ai && info.ai['XK_debuff'];
							},
							_priority: 90,
							forced: true,
							content() {
								'step 0';
								var str = '【辟毒】:是否弃置1张牌,防止你获得的' + get.translation(trigger.skill) + '状态？';
								var next = player.chooseToDiscard('he', 1, false);
								next.prompt2 = str;
								next.ai = function (card) {
									return 4 - get.value(card);
								};
								next.autodelay = true;
								('step 1');
								if (result.bool) {
									trigger.cancel();
								}
							},
						},
						XK_pidu1: {
							trigger: {
								player: 'addBuffBegin',
							},
							filter(event, player) {
								return event.skill == 'XK_zhongdu' || event.skill == 'XK_judu';
							},
							_priority: 93,
							forced: true,
							content() {
								trigger.cancel();
							},
							ai: {
								XK_nozhongdu: true,
							},
						},
						XK_xiaolifeidaoex: {
							trigger: {
								player: 'phaseBefore',
							},
							_priority: 999,
							filter(event, player) {
								return player.name != 'XK_weiming';
							},
							init(player) {
								player.storage.XK_xundaoex = 0;
							},
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio', player.name);
							},
							group: ['XK_xundaoex', 'XK_xundaoex1', 'XK_liwuxufa', 'XK_liwuxufa1'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_xundaoex: {
							audio: 'ext:侠客风云传/audio:1',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.countCards('he');
							},
							position: 'he',
							selectCard() {
								var player = _status.event.player;
								return [1, player.hp];
							},
							filterCard: true,
							prompt: '出牌阶段限1次,你可弃置至多体力值张牌,并获得【神行】【大感知】X/2回合,如此回合结束时你摸X张牌,X为弃置牌数.',
							check(card) {
								return 6 - get.value(card);
							},
							content() {
								'step 0';
								var nm = Math.ceil(cards.length / 2);
								player.addBuff('XK_shenxing', nm, player);
								player.addBuff('XK_daganzhi', nm, player);
								player.storage.XK_xundaoex = cards.length;
							},
							ai: {
								order: 1,
								result: {
									player: 1,
								},
							},
						},
						XK_xundaoex1: {
							trigger: {
								player: 'phaseAfter',
							},
							forced: true,
							filter(event, player) {
								return player.storage.XK_xundaoex > 0;
							},
							content() {
								'step 0';
								player.draw(player.storage.XK_xundaoex);
								('step 1');
								player.storage.XK_xundaoex = 0;
							},
						},
						XK_xiaolifeidao: {
							description: '<font color=#F0F>【迅刀】</font>出牌阶段限1次,你可弃置至多体力值张牌,获得【神行】【感知】X/2回合,如此回合结束时你摸X张牌,X为弃置牌数.</br><font color=#F0F>【例无虚发】</font>你对目标使用杀时,可弃置至少1张带有伤害标签的牌使此杀的伤害与响应所需的闪增加等量的值,且此杀无视防具.',
							trigger: {
								player: 'phaseBefore',
							},
							_priority: 999,
							filter(event, player) {
								return player.name != 'XK_weiming';
							},
							init(player) {
								player.storage.XK_xundao = 0;
							},
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio', player.name);
							},
							group: ['XK_xundao', 'XK_xundao1', 'XK_liwuxufa', 'XK_liwuxufa1'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_xundao: {
							audio: 'ext:侠客风云传/audio:1',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.countCards('he');
							},
							position: 'he',
							selectCard() {
								var player = _status.event.player;
								return [1, player.hp];
							},
							filterCard: true,
							prompt: '出牌阶段限1次,你可弃置至多体力值张牌,获得【神行】【感知】X/2回合,如此回合结束时你X张牌,X为弃置牌数.',
							check(card) {
								return 6 - get.value(card);
							},
							content() {
								'step 0';
								var nm = Math.ceil(cards.length / 2);
								player.addBuff('XK_shenxing', nm, player);
								player.addBuff('XK_ganzhi', nm, player);
								player.storage.XK_xundao = cards.length;
							},
							ai: {
								order: 1,
								result: {
									player: 1,
								},
							},
						},
						XK_xundao1: {
							trigger: {
								player: 'phaseAfter',
							},
							forced: true,
							filter(event, player) {
								return player.storage.XK_xundao > 0;
							},
							content() {
								'step 0';
								player.draw(player.storage.XK_xundao);
								('step 1');
								player.storage.XK_xundao = 0;
							},
						},
						XK_liwuxufa: {
							audio: 'ext:侠客风云传/audio:1',
							_priority: 9,
							trigger: {
								player: ['shaBefore'],
							},
							filter(event, player) {
								var hs = player.getCards('h');
								for (var i = 0; i < hs.length; i++) {
									if (get.tag(hs[i], 'damage')) return true;
								}
								return false;
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseToDiscard('h', false, [1, Infinity], '【例无虚发】:选择弃置任意张带有伤害标签的牌', function (card) {
										return get.tag(card, 'damage');
									})
									.set('ai', function (card) {
										var tri = _status.event.getTrigger();
										if (get.attitude(player, tri.targets[0]) > 0) return 0;
										if (tri.targets[0].hp < 2) return 0;
										return 5 - get.value(card);
									});
								('step 1');
								if (result.bool) {
									player.addTempSkill('XK_guixi1', { player: 'shaAfter' });
									var num1 = result.cards.length;
									if (typeof trigger.shanRequired == 'number') {
										trigger.shanRequired += num1;
									} else {
										trigger.shanRequired = 1 + num1;
									}
									trigger.ADDdamage = num1;
								}
							},
							ai: {
								expose: 0.2,
							},
						},
						XK_liwuxufa1: {
							trigger: {
								source: 'damageBegin',
							},
							filter(event, player) {
								if (!event.card || event.card.name != 'sha' || !event.notLink()) return false;
								return typeof event.parent.ADDdamage == 'number' && event.parent.ADDdamage > 0;
							},
							forced: true,
							content() {
								var num1 = trigger.parent.ADDdamage;
								trigger.num += num1;
							},
							ai: {
								damageBonus: true,
								XK_shabonus: true,
							},
						},
						XK_mingyugongex: {
							init(player) {
								player.storage.XK_danmengxiaoyao = 0;
							},
							group: ['XK_taishangwangqing', 'XK_danmengxiaoyao', 'XK_danmengxiaoyao1', 'XK_yuanying', 'XK_yuanying1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_mingyugong: {
							init(player) {
								player.storage.XK_danmengxiaoyao = 0;
							},
							description: '<font color=#F0F>【太上忘情】</font>每回合限1次,你受到/造成伤害后,可展示对方手牌并令其弃置其中所有基本牌/非基本牌,如此你摸1张牌/令其获得1层【寒冰】,若未弃置牌你失去1点体力.</br><font color=#F0F>【淡梦逍遥】</font>每轮限3次,你于回合外摸牌时,可令摸牌数+1.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫【内伤】;手牌上限+1;回合开始时随机移除1项异常状态.',
							group: ['XK_taishangwangqing', 'XK_danmengxiaoyao', 'XK_danmengxiaoyao1', 'XK_dazhoutian', 'XK_dazhoutian1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_taishangwangqing: {
							//audio:"ext:侠客风云传/audio:1",
							_priority: 13,
							usable: 1,
							trigger: {
								player: ['damageAfter'],
								source: ['damageAfter'],
							},
							filter(event, player) {
								if (event.player == player) {
									return event.source && event.source.isAlive() && event.source.countCards('h');
								} else {
									return event.player.isAlive() && event.player.countCards('h');
								}
							},
							prompt2(event, player) {
								if (event.player == player) {
									return '是否展示' + get.translation(event.source) + '的手牌,并令其弃置其中所有基本牌？如此你摸1张牌;若未弃置任何牌,你失去1点体力.';
								} else {
									return '是否展示' + get.translation(event.player) + '的手牌,并令其弃置其中所有非基本牌？如此你令其获得1层【寒冰】;若未弃置任何牌,你失去1点体力.';
								}
							},
							check(event, player) {
								if (event.player == player) {
									return get.attitude(player, event.source) <= 0 && event.source.countCards('h') >= 2;
								} else {
									return get.attitude(player, event.player) <= 0 && event.player.countCards('h') >= 2;
								}
							},
							content() {
								'step 0';
								if (player.name == 'XK_yihuagongzhu') {
									game.playAudio('../extension/侠客风云传/audio/XK_taishangwangqing2.mp3');
								} else {
									game.playAudio('../extension/侠客风云传/audio/XK_taishangwangqing1.mp3');
								}
								if (trigger.player == player) {
									event.tar = trigger.source;
									event.cds = event.tar.getCards('h', { type: 'basic' });
								} else {
									event.tar = trigger.player;
									event.cds = event.tar.getCards('h', function (card) {
										return get.type(card) != 'basic';
									});
								}
								event.tar.showHandcards();
								('step 1');
								if (event.cds.length) {
									player.chooseBool('是否令' + get.translation(event.tar) + '弃置' + get.translation(event.cds) + '？').ai = function (event, player) {
										var att = get.attitude(player, event.tar);
										return att <= 0;
									};
								} else event.goto(3);
								('step 2');
								if (result.bool) {
									event.tar.discard(event.cds);
									if (trigger.player == player) {
										player.draw();
									} else {
										if (!event.tar.hasSkill('XK_dongshang')) {
											event.tar.addSkill('XK_dongshang');
										}
										event.tar.storage.XK_dongshang++;
									}
									event.finish();
								} else event.goto(3);
								('step 3');
								if (!player.storage.XK_mingyumiji_mark) {
									player.loseHp();
								}
							},
							ai: {
								expose: 0.3,
								maixie: true,
								maixie_defend: true,
								effect: {
									target(card, player, target) {
										if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
										if (!target.hasFriend()) return;
										if (get.tag(card, 'damage') && player.countCards('h', { type: 'basic' }) > 1) return [1, 1, 1, -1];
									},
								},
							},
						},
						XK_danmengxiaoyao: {
							//audio:"ext:侠客风云传/audio:1",
							trigger: {
								player: 'drawBegin',
							},
							_priority: 99,
							filter(event, player) {
								var num = 3;
								if (_status.currentPhase == player) return false;
								if (player.storage.XK_mingyumiji_mark) {
									num = player.maxHp; //QQQ
								}
								if (player.storage.XK_danmengxiaoyao >= num) return false;
								return true;
							},
							forced: true,
							content() {
								if (player.name == 'XK_yihuagongzhu') {
									game.playAudio('../extension/侠客风云传/audio/XK_danmengxiaoyao2.mp3');
								} else {
									game.playAudio('../extension/侠客风云传/audio/XK_danmengxiaoyao1.mp3');
								}
								trigger.num++;
								player.storage.XK_danmengxiaoyao++;
							},
						},
						XK_danmengxiaoyao1: {
							trigger: {
								global: 'roundStart',
							},
							_priority: 20,
							forced: true,
							content() {
								player.storage.XK_danmengxiaoyao = 0;
							},
						},
						XK_baishoutaixuan: {
							description: '<font color=#F0F>【飒沓如星】</font>1名角色受到伤害时,你可交给其1张牌(自己则为重铸),伤害结算完成后若其未死亡,你摸1张牌并可使用1张杀.</br><font color=#F0F>【侠骨留香】</font>1名角色死亡后,你可弃置1张牌并摸X张牌,X为该角色的体力上限且至多为6.</br><font color=#F0F>【元婴出世】</font>体力40%以上免疫【内伤】;摸牌阶段摸牌数、手牌上限+1;回合开始时随机移除1~2项异常状态.',
							group: ['XK_sataruxing', 'XK_xiaguliuxiang', 'XK_yuanying', 'XK_yuanying1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_sataruxing: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								global: 'damageBegin',
							},
							_priority: -1,
							forced: true,
							filter(event, player) {
								return player.countCards('he');
							},
							ai: {
								expose: 0.1,
							},
							content() {
								'step 0';
								event.mk = false;
								str = '是否交给' + get.translation(trigger.player) + '1张牌？若其未死亡,你摸1张牌并可使用1张杀.';
								if (trigger.player == player) {
									event.mk = true;
									str = '是否重铸1张牌？若其未死亡,你摸1张牌并可使用1张杀.';
								}
								player.chooseCard(get.prompt('XK_sataruxing', trigger.player), str, 1, 'he').ai = function (card) {
									var trigger = _status.event.getTrigger();
									var att = get.attitude(player, trigger.player);
									if (att > 0) return 7 - get.value(card);
									else {
										if (trigger.player.hp > trigger.num) {
											return 2 - get.value(card);
										}
										return -get.value(card);
									}
								};
								('step 1');
								if (result.bool) {
									if (!event.mk) {
										trigger.player.gain(result.cards, player, 'giveAuto');
										trigger.player.addTempSkill('XK_sataruxing1', { player: 'damageAfter' });
										trigger.player.storage.XK_sataruxing1 = player;
										event.finish();
									} else {
										player.lose(result.cards, ui.discardPile);
										player.$throw(cards, 1000);
										game.log(player, '将', result.cards, '置入了弃牌堆');
										event.draw = { bool: true, num: result.cards.length };
									}
								} else event.finish();
								('step 2');
								if (event.draw && event.draw.bool) {
									player.draw(event.draw.num);
									player.addTempSkill('XK_sataruxing1', { player: 'damageAfter' });
									player.storage.XK_sataruxing1 = player;
								}
							},
						},
						XK_sataruxing1: {
							trigger: {
								player: 'damageEnd',
							},
							filter(event, player) {
								return player.isAlive();
							},
							onremove(player) {
								delete player.storage.XK_sataruxing1;
							},
							forced: true,
							content() {
								player.storage.XK_sataruxing1.draw();
								player.storage.XK_sataruxing1.chooseToUse({ name: 'sha' }, '【飒沓如星】:是否使用1张杀？').set('targetRequired', true);
								player.removeSkill('XK_sataruxing1');
							},
						},
						XK_xiaguliuxiang: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								global: 'dieAfter',
							},
							filter(event, player) {
								return player.countCards('he');
							},
							forced: true,
							content() {
								'step 0';
								event.num1 = Math.min(6, trigger.player.maxHp);
								player.chooseToDiscard(get.prompt('XK_xiaguliuxiang'), '是否弃置1张牌并摸' + event.num1 + '张牌？', 'he', 1).set('ai', function (card) {
									return event.num1 * 2 - get.value(card);
								});
								('step 1');
								if (result.bool) {
									player.draw(event.num1);
								}
							},
						},
						XK_fozunianhua: {
							description: '<font color=#F0F>【圣妙吉祥】</font>出牌阶段限1次,你可令1名其他角色移除【中毒】并回复1点体力,如此其下个摸牌阶段改为你摸2张牌并交给其1张牌.</br><font color=#F0F>【普渡众生】</font>出牌阶段开始,你可令1名角色获得【净化】2回合;若你体力全场最少,可改为令任意名角色移除所有异常状态并获得【净化】2回合,失去此技能.',
							trigger: {
								player: 'phaseBefore',
							},
							_priority: 999,
							filter(event, player) {
								return player.name != 'XK_weiming';
							},
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio', player.name);
							},
							group: ['XK_shengmiao', 'XK_puduzhongsheng'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_shengmiao: {
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return game.hasPlayer(function (current) {
									return current != player && (current.hasSkill('XK_zhongdu') || current.isDamaged());
								});
							},
							prompt: '你可令1名其他角色移除【中毒】并回复1点体力,如此其下个摸牌阶段改为你摸2张牌并交给其1张牌.',
							filterTarget(card, player, target) {
								return target != player && (target.hasSkill('XK_zhongdu') || target.isDamaged());
							},
							content() {
								'step 0';
								game.playAudio('../extension/侠客风云传/audio/XK_shengmiao1.mp3');
								if (target.hasSkill('XK_zhongdu')) {
									target.deleteBuff('XK_zhongdu');
								}
								('step 1');
								if (target.isDamaged()) {
									target.recover();
								}
								target.addTempSkill('XK_shengmiao1', { player: 'phaseUseBegin' });
								target.storage.XK_shengmiao1 = player;
							},
							ai: {
								order: 1,
								result: {
									target(player, target) {
										var nm = 0;
										if (target.hasSkill('XK_zhongdu')) nm += 1.5;
										if (target.isDamaged()) nm += 1;
										return nm;
									},
								},
							},
						},
						XK_shengmiao1: {
							trigger: {
								player: 'phaseDrawBefore',
							},
							forced: true,
							firstDo: true,
							_priority: 19,
							filter(event, player) {
								return player.storage.XK_shengmiao1 != undefined;
							},
							content() {
								'step 0';
								event.pla = player.storage.XK_shengmiao1;
								event.pla.draw(2);
								event.pla.chooseCard('he', '交给' + get.translation(player) + '一张牌', 1, true).set('ai', function (card) {
									var val = get.value(card);
									return 8 - val;
								});
								('step 1');
								if (result.cards?.length) {
									player.gain(result.cards, event.pla, 'giveAuto');
									player.removeSkill('XK_shengmiao1');
									trigger.cancel();
								}
							},
						},
						XK_puduzhongsheng: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'phaseUseBegin',
							},
							filter(event, player) {
								return !player.hasSkill('XK_puduzhongsheng1');
							},
							forced: true,
							content() {
								'step 0';
								event.str = '【普渡众生】:令1名角色获得【净化】2回合.';
								event.sp = 1;
								event.mk = false;
								if (player.isMinHp(true)) {
									player.chooseBool('是否使【普渡众生】的效果改为<令任意名角色移除所有异常状态并获得【净化】2回合,失去此技能.>？').set('ai', function () {
										var plas = game.filterPlayer(function (current) {
											return player != current && get.attitude(player, current) > 0;
										});
										var eff = 0;
										for (var i = 0; i < plas.length; i++) {
											eff += plas[i].getXKBuff('XK_debuff');
										}
										eff += player.getXKBuff('XK_debuff');
										return eff > 2;
									});
								} else event.goto(2);
								('step 1');
								if (result.bool) {
									event.str = '【普渡众生】:令任意名角色移除所有异常状态并获得【净化】2回合,失去此技能.';
									event.sp = [1, Infinity];
									event.mk = true;
								}
								('step 2');
								player
									.chooseTarget(event.str, event.sp, false, function (card, player, target) {
										return true;
									})
									.set('ai', function (target) {
										var att = get.attitude(player, target);
										if (target.hasSkillTag('XK_debuff')) att *= 3;
										if (target.hasSkill('XK_jinghua')) return (att /= 4);
										return att;
									});
								('step 3');
								if (result.targets?.length) {
									event.tars = result.targets;
								} else event.finish();
								('step 4');
								if (!event.mk) {
									event.tars[0].addBuff('XK_jinghua', 2, player);
									event.finish();
								} else {
									for (var i = 0; i < event.tars.length; i++) {
										event.tars[i].removeBuff('XK_debuff', 1, 1, true, false);
										event.tars[i].addBuff('XK_jinghua', 2, player);
									}
									player.addSkill('XK_puduzhongsheng1');
									var info = "<center><font color=#38309d>【佛祖拈花】</font></center><font color=#F0F>【圣妙吉祥】</font>出牌阶段限1次,你可令1名其他角色移除<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_zhongdu');\">【中毒】</a>并回复1点体力,如此其下个摸牌阶段改为你摸2张牌并交给其1张牌.";
									lib.translate.XK_fozunianhua_info = info;
								}
							},
						},
						XK_kuangfengdaofa: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_longmo';
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_longmo.mp3');
							},
							group: ['XK_chuanguo', 'XK_chunfeng', 'XK_chunfeng1'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_chuanguo: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							filter(event, player) {
								return player.countCards('h');
							},
							forced: true,
							content() {
								'step 0';
								player.chooseCardTarget({
									filterCard(card) {
										return true;
									},
									position: 'h',
									selectCard: [1, Infinity],
									selectTarget: 1,
									filterTarget(card, player, target) {
										return player != target;
									},
									ai1(card) {
										if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
											return 0;
										}
										return 4.5 - get.value(card);
									},
									ai2(target) {
										var player = _status.event.player;
										var att = get.attitude(_status.event.player, target);
										if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
											return -att;
										}
										return att;
									},
									prompt: '是否发动【船过水无痕】？</br></br>你可交给1名其他角色至少1张手牌,如此你获得【识破】等量回合.',
								});
								('step 1');
								if (result.cards?.length) {
									var nm = result.cards.length;
									result.targets[0].gain(result.cards, player, 'giveAuto');
									player.addBuff('XK_shipo', nm, player);
								}
							},
							ai: { XK_selfbuff: true },
						},
						XK_chunfeng: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: { player: 'loseEnd' },
							forced: true,
							filter(event, player) {
								if (player.countCards('h')) return false;
								return event.hs && event.hs.length;
							},
							content() {
								'step 0';
								player
									.chooseTarget('【春风快意刀】:是否视为对攻击范围内1名其他角色使用1张不计次数的杀？此杀造成伤害后你获得【噬气】2回合.', 1, false, function (card, player, target) {
										return target != player && player.inRange(target);
									})
									.set('ai', function (target) {
										var eff = get.effect(target, { name: 'sha' }, player, player);
										return eff;
									});
								('step 1');
								if (result.targets?.length) {
									player.useCard({ name: 'sha' }, result.targets[0], false);
								}
							},
						},
						XK_chunfeng1: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								source: 'damageEnd',
							},
							_priority: 6,
							filter(event, player) {
								if (!event.card || event.card.name != 'sha' || event.getParent(3).name != 'XK_chunfeng') return false;
								return true;
							},
							forced: true,
							content() {
								player.addBuff('XK_shiqi', 2, player);
							},
						},
						XK_qianrenjue: {
							group: ['XK_bianhuanwanqian', 'XK_xiaozhoutian'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_bianhuanwanqian: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'useCardAfter',
							},
							filter(event, player) {
								if (!player.countCards('h')) return false;
								if (event.getParent(2).skill != undefined) return false;
								var tp = get.type(event.card);
								if (tp != 'basic' && tp != 'trick') return false;
								if (!event.card.suit && !event.card.number) return false;
								return event.targets.length == 1 && event.targets[0].isAlive();
							},
							usable: 1,
							forced: true,
							content() {
								'step 0';
								var tp = get.type(trigger.card),
									st = trigger.card.suit,
									nm = trigger.card.number;
								var att = get.attitude(player, trigger.player);
								var str = '是否弃置一张与' + get.translation(trigger.card) + '同类型/花色/点数的手牌,使此牌额外结算1/2/3次？';
								var next = player.chooseToDiscard('h', get.prompt('XK_bianhuanwanqian'), function (card) {
									return get.type(card) == tp || card.suit == st || card.number == nm;
								});
								next.prompt2 = str;
								next.ai = function (card) {
									var cd = _status - event.getTrigger().card;
									var tp = get.type(cd),
										st = cd.suit,
										nm = cd.number;
									if (card.number == nm) {
										return 10 - get.value(card);
									} else if (card.suit == st) {
										return 8 - get.value(card);
									} else if (get.type(card) == tp) {
										return 6 - get.value(card);
									}
									return -1;
								};
								next.autodelay = true;
								('step 1');
								if (result.bool) {
									var tp = get.type(trigger.card),
										st = trigger.card.suit,
										nm = trigger.card.number,
										temp = 0;
									var tp1 = get.type(result.cards[0]),
										st1 = result.cards[0].suit,
										nm1 = result.cards[0].number;
									if (nm1 == nm) {
										temp = 3;
									} else if (st1 == st) {
										temp = 2;
									} else if (tp1 == tp) {
										temp = 1;
									}
									for (var i = 0; i < temp; i++) {
										player.useCard(trigger.card, trigger.cards, trigger.targets, false);
									}
								}
							},
						},
						XK_duomingsanxian: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_caodai';
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_caodai.mp3');
							},
							group: ['XK_tianwaiyoulong', 'XK_feiyuntengxia'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_tianwaiyoulong: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							_priority: 2,
							filter(event, player) {
								return !player.isMaxEquip(true) && player.canMoveCard(false);
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseControlList(['跳过判定、摸牌阶段并移动场上1张牌', '跳过出牌、弃牌阶段并移动场上1张牌'])
									.set('ai', function (event, player) {
										if (player.countCards('j')) return 0;
										if (player.countCards('h') < 10) return 1;
										return 2;
									})
									.set('prompt', '【天外游龙】:请选择1项');
								('step 1');
								if (result.index == 0) {
									player.moveCard();
									player.addTempSkill('XK_tianwaiyoulong1');
								} else if (result.index == 1) {
									player.moveCard();
									player.addTempSkill('XK_tianwaiyoulong2');
								}
							},
							ai: {
								threaten: 1.1,
							},
						},
						XK_tianwaiyoulong1: {
							forced: true,
							trigger: {
								player: ['phaseJudgeBefore', 'phaseDrawBefore'],
							},
							content() {
								trigger.cancel();
							},
						},
						XK_tianwaiyoulong2: {
							forced: true,
							trigger: {
								player: ['phaseUseBefore', 'phaseDiscardBefore'],
							},
							content() {
								trigger.cancel();
							},
						},
						XK_feiyuntengxia: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							_priority: 9,
							filter(event, player) {
								if (!player.countCards('e')) return false;
								return player.isMaxEquip(true) && !player.hasSkill('XK_feiyuntengxia1');
							},
							forced: true,
							content() {
								'step 0';
								var next = player.chooseToDiscard(get.prompt('XK_feiyuntengxia'), '是否弃置装备区的1张牌？如此当前回合结束后你获得1个额外回合.', 1, 'e');
								next.set('ai', function (card) {
									return 9 - get.value(card);
								});
								('step 1');
								if (result.bool) {
									player.phase('nodelay');
									player.addTempSkill('XK_feiyuntengxia1', 'roundStart');
								}
							},
						},
						XK_feiyuntengxia1: {
							charlotte: true,
						},
						XK_zixiashengong: {
							init(player) {
								player.markSkill('XK_ziqichongxiao');
								player.storage.XK_ziqichongxiao = [1, 1, 1];
								player.storage.XK_ziqichongxiao_a = 0;
							},
							group: ['XK_ziqichongxiao', 'XK_ziqichongxiao1', 'XK_ziqichongxiao2', 'XK_dazhoutian', 'XK_dazhoutian1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_ziqichongxiao: {
							intro: {
								content(content, player) {
									var str = '手牌上限:+' + player.storage.XK_ziqichongxiao[0] + '</br>使用杀次数:+' + player.storage.XK_ziqichongxiao[1] + '</br>摸牌阶段摸牌数:+' + player.storage.XK_ziqichongxiao[2];
									return str;
								},
							},
							mod: {
								maxHandcard(player, num) {
									return num + player.storage.XK_ziqichongxiao[0];
								},
								cardUsable(card, player, num) {
									if (card.name == 'sha') return num + player.storage.XK_ziqichongxiao[1];
								},
							},
							audio: 'ext:侠客风云传/audio:1',
							trigger: { player: 'phaseUseEnd' },
							forced: true,
							content() {
								if (player.countCards('h') == player.getHandcardLimit()) {
									player.storage.XK_ziqichongxiao[0]++;
									game.log('【紫气冲霄】:', player, '的手牌上限+1.');
								}
								var ht = player.getHistory('useCard');
								var nm = 0;
								for (var i = 0; i < ht.length; i++) {
									if (ht[i].card.name == 'sha') nm++;
								}
								if (nm == player.getCardUsable('sha')) {
									player.storage.XK_ziqichongxiao[1]++;
									game.log('【紫气冲霄】:', player, '使用杀的次数+1.');
								}
								if (player.storage.XK_ziqichongxiao_a != 0) {
									if (ht.length == player.storage.XK_ziqichongxiao_a) {
										player.storage.XK_ziqichongxiao[2]++;
										game.log('【紫气冲霄】:', player, '摸牌阶段摸牌数+1.');
									}
								}
							},
							ai: {
								threaten: 1.3,
							},
						},
						XK_ziqichongxiao1: {
							trigger: { player: 'phaseDrawEnd' },
							forced: true,
							content() {
								player.storage.XK_ziqichongxiao_a = trigger.num;
							},
						},
						XK_ziqichongxiao2: {
							trigger: { player: 'phaseDrawBegin2' },
							forced: true,
							filter(event, player) {
								return !event.numFixed;
							},
							content() {
								trigger.num += player.storage.XK_ziqichongxiao[2];
							},
						},
						XK_pojunqiangfa: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_qijiangjun';
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_qijiangjun.mp3');
							},
							group: ['XK_tianxiataiping'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_tianxiataiping: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'phaseUseBefore',
							},
							filter(event, player) {
								if (!player.countCards('e')) return false;
								var list = [];
								var skills = player.awakenedSkills;
								for (var i = 0; i < skills.length; i++) {
									if (lib.skill[skills[i]].limited) {
										list.push(skills[i]);
									}
								}
								return list.length;
							},
							_priority: 11,
							check(event, player) {
								return player.countCards('e') <= 2;
							},
							prompt2(event, player) {
								return '是否弃置装备区的所有牌？如此,你可重置1项已发动的限定技,若你因此弃置了至少2张牌,你回复1点体力.';
							},
							content() {
								'step 0';
								event.nm = player.countCards('e');
								player.discard(player.getCards('e'));
								var list = [];
								var skills = player.awakenedSkills;
								for (var i = 0; i < skills.length; i++) {
									if (lib.skill[skills[i]].limited) {
										list.push(skills[i]);
									}
								}
								if (list.length == 1) {
									event.sk = list[0];
									event.goto(2);
								} else {
									player.chooseControl(list, true).set('prompt', '选择重置一项已发动的限定技');
								}
								('step 1');
								event.sk = result.control;
								('step 2');
								player.restoreSkill(event.sk);
								if (event.nm > 1) player.recover();
							},
						},
						XK_weizhenbafang: {
							init(player) {
								player.storage.XK_poshi = false;
								player.markSkill('XK_poshi');
								player.storage.XK_weizhen = false;
								player.markSkill('XK_weizhen');
							},
							group: ['XK_poshi', 'XK_weizhen', 'XK_xiaozhoutian'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_poshi: {
							audio: 'ext:侠客风云传/audio:1',
							filter(event, player) {
								if (!event.targets.length) return false;
								if (event.targets.includes(event.player)) return false;
								return get.color(event.card) == 'black' && event.card.name != 'guohe';
							},
							intro: {
								content: 'limited',
							},
							limited: true,
							trigger: {
								global: 'useCardBefore',
							},
							_priority: 90,
							check(event, player) {
								var eff1 = 0,
									eff2 = 0;
								for (var i = 0; i < event.targets.length; i++) {
									eff1 += get.effect(event.targets[i], event.card, event.player, player);
									eff2 += get.effect(event.targets[i], { name: 'guohe' }, event.player, player);
								}
								return eff1 < eff2;
							},
							prompt2(event, player) {
								return '是否使' + get.translation(event.player) + '指定' + get.translation(event.targets) + '为目标的' + get.translation(event.card) + '变为过河拆桥？';
							},
							content() {
								'step 0';
								player.awakenSkill('XK_poshi');
								player.storage.XK_poshi = true;
								('step 1');
								trigger.player.useCard({ name: 'guohe' }, trigger.cards, trigger.targets, true);
								('step 2');
								trigger.cancel();
							},
							ai: {
								expose: 0.4,
							},
						},
						XK_weizhen: {
							audio: 'ext:侠客风云传/audio:1',
							filter(event, player) {
								if (!event.targets.length) return false;
								if (event.targets.includes(event.player)) return false;
								if (event.card.name == 'sha' && event.card.nature == 'fire') return false;
								return get.color(event.card) == 'red';
							},
							intro: {
								content: 'limited',
							},
							limited: true,
							trigger: {
								global: 'useCardBefore',
							},
							_priority: 90,
							check(event, player) {
								var eff1 = 0,
									eff2 = 0;
								for (var i = 0; i < event.targets.length; i++) {
									eff1 += get.effect(event.targets[i], event.card, event.player, player);
									eff2 += get.effect(event.targets[i], { name: 'sha', nature: 'fire' }, event.player, player);
								}
								return eff1 < eff2;
							},
							prompt2(event, player) {
								return '是否使' + get.translation(event.player) + '指定' + get.translation(event.targets) + '为目标的' + get.translation(event.card) + '变为火杀？';
							},
							content() {
								'step 0';
								player.awakenSkill('XK_weizhen');
								player.storage.XK_weizhen = true;
								('step 1');
								trigger.player.useCard({ name: 'sha', nature: 'fire' }, trigger.cards, trigger.targets, true);
								('step 2');
								trigger.cancel();
							},
							ai: {
								expose: 0.4,
							},
						},
						XK_huoyandao: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_hetuo';
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_hetuo.mp3');
							},
							group: ['XK_ranmu', 'XK_fentian'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_ranmu: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								source: 'damageEnd',
							},
							_priority: 3,
							filter(event, player) {
								return event.num > 0 && event.nature == 'fire';
							},
							forced: true,
							content() {
								trigger.player.addBuff('XK_duanjin', 1, player);
								trigger.player.addBuff('XK_sangong', 1, player);
							},
							ai: {
								threaten: 1.1,
							},
						},
						XK_fentian: {
							audio: 'ext:侠客风云传/audio:1',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.hp > 0;
							},
							filterTarget(card, player, target) {
								return player != target;
							},
							selectTarget() {
								var player = _status.event.player;
								return [1, Math.min(3, player.maxHp - player.hp + 1)];
							},
							multitarget: true,
							multiline: true,
							line: 'fire',
							content() {
								'step 0';
								player.loseHp();
								('step 1');
								('step 2');
								for (var i = 0; i < targets.length; i++) {
									targets[i].damage('fire', 1, player, 'nosource');
								}
							},
							ai: {
								expose: 0.4,
								damage: true,
								threaten: 1.3,
								order: 7,
								result: {
									target(player, target) {
										if (player.hp < 2) return 0;
										var eff = get.damageEffect(target, player, target, 'fire');
										if (target.isLinked()) {
											return eff * 2;
										} else {
											return eff;
										}
									},
								},
							},
						},
						XK_luohanxiangmo: {
							group: ['XK_dangmo', 'XK_dazhoutian', 'XK_dazhoutian1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_dangmo: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: ['phaseAfter'],
							},
							_priority: 5,
							check(event, player) {
								return true;
							},
							filter(event, player) {
								return !player.hasSkill('XK_dangmo1');
							},
							prompt2(event, player) {
								return '展示牌堆顶3张牌？若其中黑色牌数为0/1/2/3,你:失去1点体力/摸1张牌/重铸1名角色区域所有牌/获得1个额外回合.你可弃置装备区的牌,使之计入次数.';
							},
							content() {
								'step 0';
								player.addTempSkill('XK_dangmo1', 'roundStart');
								event.cars = get.cards(3);
								player.showCards(event.cars);
								event.nm = 0;
								for (var i = 0; i < event.cars.length; i++) {
									if (get.color(event.cars[i]) == 'black') event.nm++;
								}
								game.cardsDiscard(event.cars);
								('step 1');
								if (event.nm < 3 && player.countCards('e')) {
									var tp = 3 - event.nm;
									player.chooseCardButton('是否弃置装备区的牌,使之计入【荡魔】的数量？(已有:' + event.nm + ')', player.getCards('e'), [1, tp], false).ai = function (button) {
										if (event.nm == 0 || event.nm == 2) {
											return 8 - get.value(button.link);
										}
										return 4 - get.value(button.link);
									};
								} else event.goto(3);
								('step 2');
								if (result.links?.length) {
									event.nm += result.links.length;
									player.discard(result.links);
								}
								('step 3');
								if (event.nm == 0) {
									player.loseHp();
									event.finish();
								} else if (event.nm == 1) {
									player.draw();
									event.finish();
								} else if (event.nm == 2) {
									player.chooseTarget('【荡魔】:重铸1名角色区域的所有牌', 1, true, function (card, player, target) {
										return target.countCards('hej');
									}).ai = function (target) {
										var nm1 = target.countCards('j');
										var nm2 = target.countCards('e');
										var att = get.attitude(player, target);
										if (nm1 > 0 && att < 0) return 0;
										return att * (nm1 * 2 - nm2);
									};
								} else if (event.nm == 3) {
									player.phase('nodelay');
									event.finish();
								}
								('step 4');
								if (result.targets?.length) {
									event.tar = result.targets[0];
									var cards = event.tar.getCards('hej');
									event.tar.lose(cards, ui.discardPile);
									event.tar.$throw(cards, 1000);
									game.log(event.tar, '将', cards, '置入了弃牌堆');
									event.draw = { bool: true, num: cards.length };
								}
								('step 5');
								if (event.draw && event.draw.bool) {
									event.tar.draw(event.draw.num);
								}
							},
						},
						XK_dangmo1: {
							charlotte: true,
						},
						XK_taijijian: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_fangyunhua';
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_fangyunhua.mp3');
							},
							group: ['XK_siyouruowu'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_siyouruowu: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: { player: 'phaseJieshuBegin' },
							forced: true,
							content() {
								if (player.getHistory('skipped').includes('phaseDraw')) {
									player.draw(3);
								} else player.draw();
							},
						},
						XK_wudangqiankun: {
							init(player) {
								player.storage.XK_zuowang = '';
							},
							group: ['XK_zuowang', 'XK_zuowang1', 'XK_qihe', 'XK_xiaozhoutian'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_zuowang: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'phaseAfter',
							},
							_priority: -2,
							forced: true,
							content() {
								'step 0';
								player
									.chooseControlList(['判定阶段', '摸牌阶段', '出牌阶段', '弃牌阶段'])
									.set('ai', function (event, player) {
										return 1;
									})
									.set('prompt', '【坐忘】:是否获得一个额外的阶段？如此,你下回合跳过该阶段.');
								('step 1');
								if (result.control == 'cancel2') {
									player.storage.XK_zuowang = '';
									event.finish();
								} else {
									if (result.index == 0) {
										player.storage.XK_zuowang = 'phaseJudge';
										player.phaseJudge();
									} else if (result.index == 1) {
										player.storage.XK_zuowang = 'phaseDraw';
										player.phaseDraw();
									} else if (result.index == 2) {
										player.storage.XK_zuowang = 'phaseUse';
										player.stat.push({ card: {}, skill: {} });
										player.phaseUse();
									} else if (result.index == 3) {
										player.storage.XK_zuowang = 'phaseDiscard';
										player.phaseDiscard();
									}
								}
							},
						},
						XK_zuowang1: {
							trigger: {
								player: 'phaseBefore',
							},
							forced: true,
							content() {
								'step 0';
								if (player.storage.XK_zuowang != '') {
									player.skip(player.storage.XK_zuowang);
								}
								('step 1');
								player.storage.XK_zuowang = '';
							},
						},
						XK_qihe: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'phaseAfter',
							},
							_priority: -3,
							filter(event, player) {
								return player.isDamaged();
							},
							forced: true,
							prompt2(event, player) {
								var nm = Math.max(0, player.getDamagedHp());
								return '是否获得【反手】' + nm + '回合？';
							},
							content() {
								var nm = Math.max(0, player.getDamagedHp());
								player.addBuff('XK_fanshou', nm, player);
							},
						},
						XK_nengqunengshen: {
							charlotte: true,
							group: ['XK_qushen', 'XK_qushen1'],
							init(player) {
								player.storage.XK_qushen = false;
								player.storage.XK_qushen_dam = 0;
							},
						},
						XK_qushen: {
							audio: 'ext:侠客风云传/audio:1',
							forced: true,
							juexingji: true,
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							filter(event, player) {
								if (!player.hasZhuSkill('XK_qushen')) return false;
								if (player.storage.XK_qushen_dam < player.maxHp) return false;
								return !player.storage.XK_qushen;
							},
							content() {
								'step 0';
								player.awakenSkill('XK_qushen');
								player.storage.XK_qushen = true;
								('step 1');
								player.sex = 'female';
								player.gainMaxHp(2);
								var ZS = player.getWugong('XK_zhaoshi');
								var NG = player.getWugong('XK_neigong');
								player.removeSkill(ZS[0]);
								player.removeSkill(NG[0]);
								('step 2');
								player.addSkill('XK_pixie');
								player.addSkill('XK_kuihua');
								player.removeSkill('XK_nengqunengshen');
							},
						},
						XK_qushen1: {
							trigger: {
								player: ['damageEnd'],
							},
							forced: true,
							_priority: 7,
							filter(event, player) {
								return event.num > 0;
							},
							content() {
								player.storage.XK_qushen_dam += trigger.num;
							},
						},
						XK_wuduchiyan: {
							description: '<font color=#F0F>【毒焰】</font>出牌阶段开始,你可弃置1名其他角色1张牌,若此牌为基本牌,你获得【中毒】2回合,否则你本回合使用牌无距离限制.</br><font color=#F0F>【毒体】</font>若你处于【中毒】状态,你受到/造成伤害后,可令来源/目标获得【中毒】2回合.锁定技,你不受【中毒】状态的负面效果.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫【内伤】;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.',
							group: ['XK_duyan', 'XK_duti', 'XK_dazhoutian', 'XK_dazhoutian1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_duyan: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: ['phaseUseBegin'],
							},
							forced: true,
							_priority: 6,
							filter(event, player) {
								return game.hasPlayer(function (current) {
									return current != player && current.countCards('he');
								});
							},
							content() {
								'step 0';
								player
									.chooseTarget('【毒焰】:是否弃置1名其他角色1张牌,若此牌为基本牌,你获得【中毒】2回合,否则你本回合使用牌无距离限制.', false, function (card, player, target) {
										return target != player && player.countCards('he');
									})
									.set('ai', function (target) {
										var att = get.attitude(player, target);
										return -att + 0.01;
									});
								('step 1');
								if (result.targets?.length) {
									player.line(result.targets[0], 'fire');
									player.discardPlayerCard(result.targets[0], 'he', true);
								} else event.finish();
								('step 2');
								if (result.cards?.length) {
									game.log(result.cards);
									var tp = get.type(result.cards[0]);
									if (tp == 'basic') {
										player.addBuff('XK_zhongdu', 2, player);
									} else {
										player.addTempSkill('XK_duyan1');
									}
								}
							},
							ai: {
								expose: 0.3,
							},
						},
						XK_duyan1: {
							mark: true,
							marktext: '焰',
							intro: {
								content: '使用牌无距离限制',
							},
							mod: {
								targetInRange(card) {
									return true;
								},
							},
						},
						XK_duti: {
							trigger: {
								player: ['damageAfter'],
								source: ['damageAfter'],
							},
							_priority: 14,
							filter(event, player) {
								if (!player.hasSkill('XK_zhongdu')) return false;
								if (event.num <= 0) return false;
								if (event.player == player) {
									return event.source && event.source.isAlive();
								} else {
									return event.player.isAlive();
								}
							},
							prompt2(event, player) {
								if (event.player == player) {
									return '是否令' + get.translation(event.source) + '获得【中毒】2回合.？';
								} else {
									return '是否令' + get.translation(event.player) + '获得【中毒】2回合.？';
								}
							},
							check(event, player) {
								if (event.player == player) {
									return get.attitude(player, event.source) <= 0;
								} else {
									return get.attitude(player, event.player) <= 0;
								}
							},
							content() {
								if (trigger.player == player) {
									trigger.source.addBuff('XK_zhongdu', 2, player);
								} else {
									trigger.player.addBuff('XK_zhongdu', 2, player);
								}
							},
							ai: {
								XK_duti: true,
								XK_nozhongdu: true,
							},
						},
						XK_fangxuanlingbei: {
							description: '<font color=#F0F>【德洞天经】</font>其他角色出牌阶段限1次,其可将1张装备牌置于你的装备区(不可替换)并摸1张牌.</br><font color=#F0F>【帝不言政】</font>你的装备区进入武器/防具/坐骑/宝物牌后,你可令攻击范围内的1名其他角色获得【破绽】/【目盲】/【点穴】/【晕眩】1回合.',
							trigger: {
								player: 'phaseBefore',
							},
							_priority: 999,
							filter(event, player) {
								return player.name != 'XK_weiming';
							},
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio', player.name);
							},
							group: ['XK_dedongtianjing', 'XK_dibuyanzheng'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_dedongtianjing: {
							global: 'XK_dedongtianjing1',
						},
						XK_dedongtianjing1: {
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								if (!player.countCards('h', { type: 'equip' })) return false;
								return game.hasPlayer(function (current) {
									return current != player && current.hasSkill('XK_dedongtianjing');
								});
							},
							prompt: '出牌阶段限1次,你可将1张装备牌置于一名其他角色的装备区(不能替换已有装备).',
							filterTarget(card, player, target) {
								if (target.isMin()) return false;
								var type = get.subtype(card);
								return target != player && target.hasSkill('XK_dedongtianjing') && target.isEmpty(type);
							},
							filterCard(card) {
								return get.type(card) == 'equip';
							},
							check(card) {
								var player = _status.currentPhase;
								if (player.countCards('he', { subtype: get.subtype(card) }) > 1) {
									return 9.8 - get.equipValue(card);
								}
								return 6 - get.value(card);
							},
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_dedongtianjing11.mp3');
								target.equip(cards[0]);
								player.draw();
							},
							discard: false,
							prepare(cards, player, targets) {
								player.$give(cards, targets[0], false);
							},
							ai: {
								basic: {
									order: 10,
								},
								result: {
									target(player, target) {
										var card = ui.selected.cards[0];
										if (card) return get.effect(target, card, target, target);
										return 0;
									},
								},
							},
						},
						XK_dibuyanzheng: {
							audio: 'ext:侠客风云传/audio:1',
							transBuff(subtype) {
								var buff = '';
								switch (subtype) {
									case 'equip1':
										buff = 'XK_pozhan';
										break;
									case 'equip2':
										buff = 'XK_mumang';
										break;
									case 'equip3':
									case 'equip4':
									case 'equip6':
										buff = 'XK_dianxue';
										break;
									case 'equip5':
										buff = 'XK_yunxuan';
										break;
								}
								return buff;
							},
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: ['equipAfter'],
							},
							forced: true,
							content() {
								'step 0';
								var stp = get.subtype(trigger.card);
								event.bf = lib.skill.XK_dibuyanzheng.transBuff(stp);
								player
									.chooseTarget('【帝不言政】:是否令攻击距离的1名其他角色获得【' + get.translation(event.bf) + '】1回合？', false, function (card, player, target) {
										return target != player && player.inRange(target);
									})
									.set('ai', function (target) {
										var att = get.attitude(player, target);
										if (target.hasSkill(event.bf)) return 0.01;
										return -att + 0.02;
									});
								('step 1');
								if (result.targets?.length) {
									player.line(result.targets[0], 'fire');
									result.targets[0].addBuff(event.bf, 1, player);
								}
							},
							ai: {
								expose: 0.3,
							},
						},
						XK_tiangangquan: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_bore';
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_bore.mp3');
							},
							group: ['XK_qisuopangbo', 'XK_cangtianyouji'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_qisuopangbo: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'useCardToBefore',
							},
							_priority: 16,
							check(event, player) {
								var eff = get.effect(event.target, { name: 'sha' }, player, player);
								var eff1 = get.effect(event.target, event.card, player, player);
								return eff1 < eff;
							},
							filter(event, player) {
								if (_status.currentPhase != player) return false;
								if (event.card.name == 'wuxie' || event.card.name == 'jinchan' || event.card.name == 'sha' || event.card.name == 'shan') return false;
								if (event.target == player || event.targets.length != 1) return false;
								return true;
							},
							prompt2(event, player) {
								return '是否使你对' + get.translation(event.target) + '使用的' + get.translation(event.card) + '转化为对其使用1张不计次数的杀？';
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
						XK_cangtianyouji: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								source: 'damageBegin4',
							},
							_priority: -1,
							filter(event, player) {
								if (!event.card || event.card.name != 'sha' || !event.notLink() || event.num <= 0) return false;
								var history = player.getHistory('useCard');
								var nm = 0;
								for (var i = 0; i < history.length; i++) {
									if (history[i].card.name == 'sha' && history[i].isPhaseUsing()) nm++;
								}
								return nm >= 2 && nm <= 4;
							},
							forced: true,
							content() {
								'step 0';
								var history = player.getHistory('useCard');
								var nm = 0;
								for (var i = 0; i < history.length; i++) {
									if (history[i].card.name == 'sha' && history[i].isPhaseUsing()) nm++;
								}
								if (nm == 2) {
									trigger.player.addBuff('XK_zhuoying', 1, player);
								} else if (nm == 3) {
									trigger.player.addBuff('XK_neishang', 1, player);
								} else if (nm == 4) {
									trigger.num *= 2;
								}
							},
						},
						XK_tiangangwuji: {
							init(player) {
								player.storage.XK_tiangangzhanqi = 0;
							},
							group: ['XK_tiangangzhanqi', 'XK_tiangangzhanqi1', 'XK_tiangangqiliao', 'XK_dazhoutian', 'XK_dazhoutian1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_tiangangzhanqi: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								global: 'roundStart',
							},
							intro: {
								content(storage) {
									var str = '你受到的下' + storage + '次伤害-1';
									return str;
								},
							},
							_priority: 5,
							forced: true,
							content() {
								'step 0';
								event.nm = player.countCards('h', { type: 'basic' });
								player.chooseBool(get.prompt('XK_tiangangzhanqi'), '是否弃置所有手牌？如此你本轮受到的前' + event.nm + '次伤害-1,并获得【狂怒】1回合.').set('ai', function () {
									if (player.countCards('h') > 4) return false;
									if (player.countCards('h', { type: 'basic' }) < 2) return false;
									return true;
								});
								('step 1');
								if (result.bool) {
									player.discard(player.getCards('h'));
									player.storage.XK_tiangangzhanqi = event.nm;
									player.addBuff('XK_kuangnu', 1, player);
									if (event.nm > 0) {
										player.markSkill('XK_tiangangzhanqi');
									} else {
										player.unmarkSkill('XK_tiangangzhanqi');
									}
								} else {
									player.storage.XK_tiangangzhanqi = 0;
									player.unmarkSkill('XK_tiangangzhanqi');
								}
							},
							ai: { XK_selfbuff: true },
						},
						XK_tiangangzhanqi1: {
							trigger: {
								player: 'damageBegin3',
							},
							filter(event, player) {
								return event.num > 0 && player.storage.XK_tiangangzhanqi > 0;
							},
							_priority: 19,
							forced: true,
							content() {
								'step 0';
								trigger.num--;
								player.storage.XK_tiangangzhanqi--;
								('step 1');
								if (player.storage.XK_tiangangzhanqi <= 0) {
									player.unmarkSkill('XK_tiangangzhanqi');
								}
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'damage')) {
											if (player.hasSkillTag('jueqing', false, target)) return;
											if (target.storage.XK_tiangangzhanqi > 0) {
												if (!target.hasFriend()) return;
												return [1, 1.5];
											}
										}
									},
								},
							},
						},
						XK_tiangangqiliao: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'gainEnd',
							},
							filter(event, player) {
								return player.countCards('h') == event.cards.length;
							},
							forced: true,
							content() {
								'step 0';
								player.draw();
							},
						},
						XK_wanghunzhangfa: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_mengqiansi';
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_mengqiansi.mp3');
							},
							group: ['XK_yinhanzhangfeng', 'XK_donghunshigu'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_yinhanzhangfeng: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								global: ['equipAfter'],
							},
							logTarget: 'player',
							check(event, player) {
								if (event.player.countCards('e') < 2) return false;
								return get.attitude(player, event.player) < 0;
							},
							filter(event, player) {
								if (player.hasSkill('XK_yinhanzhangfeng1')) return false;
								return event.player != player && event.player.countCards('e');
							},
							prompt2(event, player) {
								return '是否令' + get.translation(event.player) + '选择1项:获得1层【寒冰】;弃置装备区所有牌.';
							},
							content() {
								'step 0';
								trigger.player
									.chooseControlList(['获得1层【寒冰】', '弃置装备区所有牌'], true)
									.set('ai', function (event, player) {
										var tar = _status.event.getTrigger().player;
										if (tar.hp < 2) return 1;
										if (tar.countCards('e') < 2) return 1;
										return 0;
									})
									.set('prompt', '【阴寒掌风】:请选择1项');
								('step 1');
								if (result.index == 0) {
									if (!trigger.player.hasSkill('XK_dongshang')) {
										trigger.player.addSkill('XK_dongshang');
									}
									trigger.player.storage.XK_dongshang++;
								} else {
									trigger.player.discard(trigger.player.getCards('e'));
								}
								('step 2');
								if (!player.hasSkill('XK_yinhanzhangfeng1')) {
									player.addTempSkill('XK_yinhanzhangfeng1', 'roundStart');
								}
							},
							ai: {
								expose: 0.3,
							},
						},
						XK_yinhanzhangfeng1: {
							charlotte: true,
						},
						XK_donghunshigu: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								global: 'discardAfter',
							},
							filter(event, player) {
								if (!event.player.countCards('he')) return false;
								if (event.getParent(2).name == 'XK_donghunshigu') return false;
								if (event.player == player) return false;
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										var type = get.type(i);
										if (!player.countCards('h', { type: type })) {
											return true;
										}
									}
								return false;
							},
							logTarget: 'player',
							check(event, player) {
								return get.attitude(player, event.player) <= 0;
							},
							prompt2(event, player) {
								return '其他角色弃置牌后,若你手牌中没有此类型的牌,你可以弃置其至多X张牌或令其获得X/2层【寒冰】,X为其弃置的此类牌数.';
							},
							content() {
								'step 0';
								event.num1 = 0;
								for (var i = 0; i < trigger.cards.length; i++) {
									var type = get.type(trigger.cards[i]);
									if (!player.countCards('h', { type: type })) {
										event.num1++;
									}
								}
								if (event.num1 <= 0) event.finish();
								('step 1');
								player.line(trigger.player, 'green');
								event.num2 = Math.ceil(event.num1 / 2);
								player
									.chooseControlList(['弃置' + get.translation(trigger.player) + '至多' + event.num1 + '张牌', '令' + get.translation(trigger.player) + '获得' + event.num2 + '层【寒冰】'], true)
									.set('ai', function (event, player) {
										var tar = _status.event.getTrigger().player;
										if (tar.hp < 2) return 1;
										if (tar.countCards('he') < event.num1) return 1;
										return 0;
									})
									.set('prompt', '【冻魂蚀骨】:请选择1项');
								('step 2');
								if (result.index == 1) {
									if (!trigger.player.hasSkill('XK_dongshang')) {
										trigger.player.addSkill('XK_dongshang');
									}
									trigger.player.storage.XK_dongshang += event.num2;
								} else {
									player.discardPlayerCard(trigger.player, [1, event.num1], 'he', true);
								}
							},
							ai: {
								expose: 0.3,
							},
						},
						XK_wanghunsanjue: {
							init(player) {
								player.storage.XK_hunwang = false;
							},
							group: ['XK_hunwang', 'XK_xiaozhoutian'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_hunwang: {
							audio: 'ext:侠客风云传/audio:2',
							trigger: {
								global: ['phaseUseBefore'],
							},
							_priority: 7,
							check(event, player) {
								var att = get.attitude(player, event.player);
								if (event.player.needsToDiscard()) {
									return -att;
								} else return att;
							},
							prompt2(event, player) {
								return '是否令' + get.translation(event.player) + '选择是否跳过出牌阶段视为使用1张基本牌？你选择是后,下次此技能由你选择.';
							},
							logTarget: 'player',
							content() {
								'step 0';
								event.pla = trigger.player;
								event.str = '是否跳过出牌阶段,视为使用1张基本牌？';
								if (player.storage.XK_hunwang && trigger.player != player) {
									event.pla = player;
									event.str = '是否令' + get.translation(trigger.player) + '跳过出牌阶段？如此其视为使用1张基本牌.';
									player.storage.XK_hunwang = false;
								}
								event.pla.chooseBool(event.str, true).set('ai', function () {
									var tar = _status.event.getTrigger().player;
									var att = get.attitude(event.pla, tar);
									if (tar.needsToDiscard()) return att <= 0;
									else return att > 0;
								});
								('step 1');
								if (result.bool) {
									var basiclist = [];
									basiclist.push(['基本', '', 'sha']);
									basiclist.push(['基本', '', 'sha', 'fire']);
									basiclist.push(['基本', '', 'sha', 'thunder']);
									basiclist.push(['基本', '', 'jiu']);
									basiclist.push(['基本', '', 'tao']);
									trigger.player.chooseButton(['视为使用1张基本牌', [basiclist, 'vcard']], true).set('ai', function (button) {
										var tar = _status.event.getTrigger().player;
										if (tar.isDamaged()) {
											if (button.link[2] == 'tao') return 9;
										} else if (button.link[2] == 'sha' && button.link[3] == 'fire') return 4;
										return 1;
									});
								} else event.finish();
								('step 2');
								if (result.links?.length) {
									trigger.player.chooseUseTarget({ name: result.links[0][2], nature: result.links[0][3] }, false);
								}
								('step 3');
								if (trigger.player == player) {
									player.storage.XK_hunwang = true;
								}
								trigger.cancel();
							},
							ai: {
								expose: 0.3,
							},
						},
						XK_emeijianfa: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_shuipanpan';
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_shuipanpan.mp3');
							},
							group: ['XK_ningrou', 'XK_bingxin'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_ningrou: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'damageBegin4',
							},
							_priority: -20,
							filter(event, player) {
								if (!player.countCards('h')) return false;
								return event.num > 1;
							},
							forced: true,
							content() {
								'step 0';
								var str = '【凝柔】:是否弃置1张手牌令此伤害变为1？如此你获得【感知】2回合';
								if (trigger.source) {
									str += ',并令' + get.translation(trigger.source) + '获得【目盲】2回合.';
								} else str += '.';
								var next = player.chooseToDiscard('h', 1, false);
								next.prompt2 = str;
								next.ai = function (card) {
									return 4.5 - get.value(card);
								};
								next.autodelay = true;
								('step 1');
								if (result.bool) {
									trigger.num = 1;
									player.addBuff('XK_ganzhi', 2, player);
									if (trigger.source) {
										trigger.source.addBuff('XK_mumang', 2, player);
									}
								}
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'damage')) {
											if (player.hasSkillTag('damageBonus') || player.hasSkillTag('XK_shabonus')) {
												if (target.countCards('h')) return 0.7;
											}
											return;
										}
									},
								},
							},
						},
						XK_bingxin: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'phaseUseBefore',
							},
							_priority: 4,
							check(event, player) {
								return player.countCards('h') <= 3;
							},
							prompt2(event, player) {
								return '是否弃置所有手牌,并将手牌摸至4张？';
							},
							content() {
								'step 0';
								player.discard(player.getCards('h'));
								('step 1');
								player.draw(4);
							},
						},
						XK_emeijiuyang: {
							group: ['XK_sixiang', 'XK_xiaozhoutian'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_sixiang: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								global: ['damageAfter'],
							},
							_priority: 7,
							check(event, player) {
								return get.attitude(player, event.player) >= 0;
							},
							prompt2(event, player) {
								return '是否令' + get.translation(event.player) + '展示手牌？如此其可将之弃置至花色均不同,摸2张牌.';
							},
							logTarget: 'player',
							filter(event, player) {
								if (!event.player.isAlive() || !event.player.countCards('h')) return false;
								if (event.player == player || !player.inRange(event.player)) return false;
								return event.num > 0;
							},
							content() {
								'step 0';
								trigger.player.showHandcards();
								('step 1');
								trigger.player
									.chooseCardButton('【四象】:你可以选择任意张花色不同的手牌,并弃置其余的牌,如此,你摸2张牌.', [1, 4], trigger.player.getCards('h'))
									.set('filterButton', function (button) {
										var suit = button.link.suit;
										for (var i = 0; i < ui.selected.buttons.length; i++) {
											if (ui.selected.buttons[i].suit == suit) return false;
										}
										return true;
									})
									.set('ai', function (button) {
										var pl = _status.event.getTrigger().player;
										if (pl.countCards('h') > 5) return -1;
										return get.value(button.link) - 4.5;
									});
								('step 2');
								if (result.bool) {
									var cds = trigger.player.getCards('h');
									cds.remove(result.links);
									trigger.player.discard(cds);
									trigger.player.draw(2);
								}
							},
							ai: {
								expose: 0.3,
							},
						},
						XK_huxiaozhang: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_fenghuayishi';
							},
							init(player) {
								player.storage.XK_ruhutianyi = [0, 1];
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_fenghuayishi.mp3');
							},
							group: ['XK_ruhutianyi', 'XK_ruhutianyi1'],
							ai: {
								XK_zhaoshi: true,
								combo: 'XK_shouwangjing',
							},
						},
						XK_ruhutianyi: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								source: 'damageBegin4',
							},
							_priority: -9,
							forced: true,
							filter(event, player) {
								if (!event.card || event.card.name != 'sha' || !event.notLink()) return false;
								return player.storage.XK_ruhutianyi.length;
							},
							content() {
								'step 0';
								var lt = [];
								for (var i = 0; i < player.storage.XK_ruhutianyi.length; i++) {
									lt.push(player.storage.XK_ruhutianyi[i].toString());
								}
								player
									.chooseControl(lt, true)
									.set('ai', function (event) {
										var tp = [];
										for (var i = 0; i < lt.length; i++) {
											tp.push(parseInt(lt[i]));
										}
										var att = get.attitude(player, _status.event.getTrigger().player);
										if (att > 0)
											var nm = Math.min(...tp); //拓展运算符
										else var nm = Math.max(...tp);
										return nm.toString();
									})
									.set('prompt', '【如虎添翼】:令你对' + get.translation(trigger.player) + '造成的伤害变为其中一个数值');
								('step 1');
								var nm = parseInt(result.control);
								trigger.num = nm;
								player.storage.XK_ruhutianyi.remove(nm);
							},
						},
						XK_ruhutianyi1: {
							trigger: {
								player: 'changeStorageEnd',
							},
							forced: true,
							filter(event, player) {
								if (event.skill != 'XK_xinyu') return false;
								var num = player.storage.XK_xinyu.length;
								return !player.storage.XK_ruhutianyi.includes(num);
							},
							content() {
								'step 0';
								var num = player.storage.XK_xinyu.length;
								player.storage.XK_ruhutianyi.push(num);
								player.markSkill('XK_ruhutianyi');
							},
						},
						XK_shouwangjing: {
							init(player) {
								player.storage.XK_baixiao = false;
								player.markSkill('XK_baixiao');
								player.storage.XK_xinyu = [1, 2, 3];
								player.markSkill('XK_xinyu');
								player.addSkill('XK_xinyuhu');
								player.addSkill('XK_xinyuxiong');
								player.addSkill('XK_xinyushe');
							},
							group: ['XK_xinyu', 'XK_xinyu1', 'XK_baixiao', 'XK_dazhoutian', 'XK_dazhoutian1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_xinyu: {
							mod: {
								maxHandcard(player, num) {
									var num1 = player.storage.XK_xinyu.length;
									if (player.hasSkill('XK_baixiao1')) return player.maxHp;
									else return num - num1;
								},
							},
							intro: {
								content(storage) {
									if (!storage.length) return '没有任何<兽>';
									else {
										var str = '当前拥有的<兽>:' + lib.skill.XK_xinyu.getName(storage[0]);
										for (var i = 1; i < storage.length; i++) {
											str += '、' + lib.skill.XK_xinyu.getName(storage[i]);
										}
										return str;
									}
								},
							},
							getName(nm) {
								switch (nm) {
									case 1:
										return '虎';
									case 2:
										return '熊';
									case 3:
										return '蛇';
								}
								return nm;
							},
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'phaseUseBegin',
							},
							forced: true,
							filter(event, player) {
								if (player.storage.XK_xinyu.length >= 3) return false;
								return game.hasPlayer(function (current) {
									return current != player && (current.hasSkill('XK_xinyuhu_mark') || current.hasSkill('XK_xinyuxiong_mark') || current.hasSkill('XK_xinyushe_mark'));
								});
							},
							content() {
								'step 0';
								player
									.chooseTarget('【心御】:出牌阶段开始,你可回收1个<兽>.', 1, false, function (card, player, target) {
										return target != player && (target.hasSkill('XK_xinyuhu_mark') || target.hasSkill('XK_xinyuxiong_mark') || target.hasSkill('XK_xinyushe_mark'));
									})
									.set('ai', function (target) {
										return Math.random();
									});
								('step 1');
								if (result.targets?.length) {
									event.tar = result.targets[0];
									var lt = [];
									if (event.tar.hasSkill('XK_xinyuhu_mark')) lt.push('虎');
									if (event.tar.hasSkill('XK_xinyuxiong_mark')) lt.push('熊');
									if (event.tar.hasSkill('XK_xinyushe_mark')) lt.push('蛇');
									player
										.chooseControl(lt, true, function (event, player) {
											return lt[0];
										})
										.set('prompt', '【心御】:选择回收1个<兽>');
								} else event.finish();
								('step 2');
								if (result.control) {
									switch (result.control) {
										case '虎':
											event.tar.removeSkill('XK_xinyuhu_mark');
											player.addSkill('XK_xinyuhu');
											player.changeStorage('XK_xinyu', 1, true);
											break;
										case '熊':
											event.tar.removeSkill('XK_xinyuxiong_mark');
											player.addSkill('XK_xinyuxiong');
											player.changeStorage('XK_xinyu', 2, true);
											break;
										case '蛇':
											event.tar.removeSkill('XK_xinyushe_mark');
											player.addSkill('XK_xinyushe');
											player.changeStorage('XK_xinyu', 3, true);
											break;
									}
								}
							},
						},
						XK_xinyu1: {
							trigger: {
								global: 'dieAfter',
							},
							forced: true,
							filter(event, player) {
								return event.player.hasSkill('XK_xinyuhu_mark') || event.player.hasSkill('XK_xinyuxiong_mark') || event.player.hasSkill('XK_xinyushe_mark');
							},
							content() {
								'step 0';
								if (trigger.player.hasSkill('XK_xinyuhu_mark')) {
									trigger.player.removeSkill('XK_xinyuhu_mark');
									player.addSkill('XK_xinyuhu');
									player.storage.XK_xinyu.push(1);
									game.log('<虎>兽主动返回了', player, '处.');
								}
								if (trigger.player.hasSkill('XK_xinyuxiong_mark')) {
									trigger.player.removeSkill('XK_xinyuxiong_mark');
									player.addSkill('XK_xinyuxiong');
									player.storage.XK_xinyu.push(2);
									game.log('<熊>兽主动返回了', player, '处.');
								}
								if (trigger.player.hasSkill('XK_xinyushe_mark')) {
									trigger.player.removeSkill('XK_xinyushe_mark');
									player.addSkill('XK_xinyushe');
									player.storage.XK_xinyu.push(3);
									game.log('<虎>兽主动返回了', player, '处.');
								}
								player.markSkill('XK_xinyu');
							},
						},
						XK_xinyuhu: {
							audio: 'ext:侠客风云传/audio:1',
							enable: 'phaseUse',
							filterTarget(card, player, target) {
								return player != target && player.inRange(target);
							},
							prompt: '令攻击范围内的1名其他角色获得【流血】2回合.',
							selectTarget: 1,
							content() {
								target.addBuff('XK_liuxue', 2, player);
								target.addSkill('XK_xinyuhu_mark');
								player.removeSkill('XK_xinyuhu');
								player.changeStorage('XK_xinyu', 1, false);
							},
							ai: {
								order: 7,
								result: {
									player: 1,
									target(player, target) {
										if (target.hasSkill('XK_liuxue')) return -1;
										return -2;
									},
								},
								expose: 0.4,
							},
							subSkill: {
								mark: {
									intro: {
										content: '来自【兽王经】——【心御】的<虎>',
									},
									onremove(player) {
										player.unmarkSkill('XK_xinyuhu_mark');
									},
									mark: true,
									marktext: '虎',
								},
							},
						},
						XK_xinyuxiong: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								global: ['damageBegin'],
							},
							_priority: 2,
							prompt2(event, player) {
								return '是否令' + get.translation(event.player) + '受到的伤害-1?';
							},
							check(event, player) {
								return get.attitude(player, event.player) > 0;
							},
							filter(event, player) {
								return event.num > 0 && event.player != player && player.inRange(event.player);
							},
							logTarget: 'player',
							content() {
								game.log(trigger.player, '受到的伤害-1');
								trigger.num--;
								trigger.player.addSkill('XK_xinyuxiong_mark');
								trigger.player.markSkill('XK_xinyuxiong_mark');
								player.removeSkill('XK_xinyuxiong');
								player.changeStorage('XK_xinyu', 2, false);
							},
							subSkill: {
								mark: {
									intro: {
										content: '来自【兽王经】——【心御】的<熊>',
									},
									onremove(player) {
										player.unmarkSkill('XK_xinyuxiong_mark');
									},
									mark: true,
									marktext: '熊',
								},
							},
						},
						XK_xinyushe: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								global: ['recoverBegin'],
							},
							_priority: 2,
							prompt2(event, player) {
								return '是否令' + get.translation(event.player) + '的回复数值-1?';
							},
							check(event, player) {
								return get.attitude(player, event.player) < 0;
							},
							filter(event, player) {
								return event.num > 0 && event.player != player && player.inRange(event.player);
							},
							logTarget: 'player',
							content() {
								game.log(trigger.player, '的回复数值-1');
								trigger.num--;
								trigger.player.addSkill('XK_xinyushe_mark');
								trigger.player.markSkill('XK_xinyushe_mark');
								player.removeSkill('XK_xinyushe');
								player.changeStorage('XK_xinyu', 3, false);
							},
							subSkill: {
								mark: {
									intro: {
										content: '来自【兽王经】——【心御】的<蛇>',
									},
									onremove(player) {
										player.unmarkSkill('XK_xinyushe_mark');
									},
									mark: true,
									marktext: '蛇',
								},
							},
						},
						XK_baixiao: {
							filter(event, player) {
								if (player.storage.XK_xinyu.length >= 3) return false;
								return !player.storage.XK_baixiao;
							},
							marktext: '啸',
							intro: {
								content: 'limited',
							},
							limited: true,
							enable: 'phaseUse',
							content() {
								'step 0';
								player.awakenSkill('XK_baixiao');
								player.storage.XK_baixiao = true;
								('step 1');
								var plas = game.filterPlayer(function (current) {
									return current != player && (current.hasSkill('XK_xinyuhu_mark') || current.hasSkill('XK_xinyuxiong_mark') || current.hasSkill('XK_xinyushe_mark'));
								});
								for (var i = 0; i < plas.length; i++) {
									if (plas[i].hasSkill('XK_xinyuhu_mark')) {
										plas[i].removeSkill('XK_xinyuhu_mark');
										player.addSkill('XK_xinyuhu');
										player.changeStorage('XK_xinyu', 1, true);
									}
									if (plas[i].hasSkill('XK_xinyuxiong_mark')) {
										plas[i].removeSkill('XK_xinyuxiong_mark');
										player.addSkill('XK_xinyuxiong');
										player.changeStorage('XK_xinyu', 2, true);
									}
									if (plas[i].hasSkill('XK_xinyushe_mark')) {
										plas[i].removeSkill('XK_xinyushe_mark');
										player.addSkill('XK_xinyushe');
										player.changeStorage('XK_xinyu', 3, true);
									}
								}
								('step 2');
								player.addTempSkill('XK_baixiao1', { player: 'phaseBefore' });
							},
							ai: {
								order: 1,
								result: {
									player(player, target) {
										if (player.storage.XK_xinyu.length > 1) return 0;
										return 3;
									},
								},
							},
						},
						XK_baixiao1: {
							charlotte: true,
						},
						XK_daomojiushi: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_xuedaoshaozhu';
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_xuedaoshaozhu.mp3');
							},
							group: ['XK_cancunyimolu'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_cancunyimolu: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'phaseUseEnd',
							},
							forced: true,
							filter(event, player) {
								return game.hasPlayer(function (current) {
									return current != player && current.countCards('h');
								});
							},
							content() {
								'step 0';
								player.chooseTarget(get.prompt('XK_cancunyimolu'), '你可观看1名其他角色手牌并选择1项:使用其中1张牌;该角色视为对你使用1张杀.', false, function (card, player, target) {
									return player != target && target.countCards('h');
								}).ai = function (target) {
									var att = get.attitude(player, target);
									var nm = Math.max(0, target.countCards('h') - 1);
									return -att * nm;
								};
								('step 1');
								if (result.targets?.length) {
									event.tar = result.targets[0];
									player.viewHandcards(event.tar);
									event.cds = event.tar.getCards('h', function (card) {
										return lib.filter.cardEnabled(card, player);
									});
									player
										.chooseControl(true)
										.set('choiceList', ['使用' + get.translation(result.targets[0]) + '的1张手牌', get.translation(result.targets[0]) + '视为对你使用1张杀'])
										.set('ai', function (event, player) {
											return 0;
										})
										.set('prompt', '【残存亦末路】:请选择1项');
								} else event.finish();
								('step 2');
								if (result.index == 1 || !event.cds.length) {
									event.tar.useCard({ name: 'sha' }, player, true);
									event.finish();
								} else {
									player.chooseCardButton('选择一张牌使用', event.cds, true).ai = function (button) {
										return get.value(button.link);
									};
								}
								('step 3');
								if (result.links?.length) {
									event.gained = result.links[0];
									player.gain(event.gained, target, 'giveAuto');
									var next = player.chooseToUse(); //QQQ
									next.filterCard = function (card) {
										return card == event.gained;
									};
									next.prompt = '请选择' + get.translation(event.gained) + '的目标';
								}
							},
							ai: {
								threaten: 1.2,
							},
						},
						XK_xuehaimogong: {
							init(player) {
								player.storage.XK_wushe = 0;
								player.storage.XK_shaxing = [];
							},
							group: ['XK_wushe', 'XK_shaxing', 'XK_dazhoutian', 'XK_dazhoutian1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_wushe: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							_priority: 13,
							filter(event, player) {
								return player.countCards('h');
							},
							forced: true,
							content() {
								'step 0';
								player.chooseCardTarget({
									filterCard(card) {
										return true;
									},
									position: 'h',
									selectCard: 1,
									selectTarget: 1,
									filterTarget(card, player, target) {
										return player != target;
									},
									ai1(card) {
										return 4.5 - get.value(card);
									},
									ai2(target) {
										var pla = _status.event.player;
										return -get.attitude(pla, target);
									},
									prompt: '是否发动【无赦】？</br></br>你可交给1名其他角色1张牌,如此你可以移动场上1张牌或令其获得【流血】1回合.',
								});
								('step 1');
								if (result.targets?.length) {
									event.tar = result.targets[0];
									player.storage.XK_shaxing.add(event.tar);
									player.storage.XK_wushe++;
									player.markSkill('XK_shaxing');
									event.tar.gain(result.cards[0], player, 'giveAuto');
									player
										.chooseControl(true)
										.set('choiceList', ['移动场上的1张牌', '令' + get.translation(event.tar) + '获得【流血】1回合'])
										.set('ai', function (event, player) {
											if (player.canMoveCard(true)) return 0;
											return 1;
										})
										.set('prompt', '【无赦】:请选择1项');
								} else event.finish();
								('step 2');
								if (result.index == 1 || !player.canMoveCard(false)) {
									event.tar.addBuff('XK_liuxue', 1, player);
								} else {
									player.moveCard();
								}
							},
							ai: {
								expose: 0.3,
							},
						},
						XK_shaxing: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'phaseJieshuBegin',
							},
							_priority: 5,
							filter(event, player) {
								if (player.storage.XK_wushe <= 0 || player.storage.XK_shaxing.length <= 0) return false;
								var tp = player.storage.XK_shaxing;
								for (var i = 0; i < tp.length; i++) {
									if (tp[i].isAlive()) return true;
								}
								return false;
							},
							intro: {
								content(storage) {
									if (!storage.length) return '未有任何角色因【无赦】获得过牌';
									else {
										var str = '因【无赦】获得过牌的角色有:' + get.translation(storage);
										return str;
									}
								},
							},
							prompt2(event, player) {
								var tp = player.storage.XK_shaxing,
									lt = [];
								for (var i = 0; i < tp.length; i++) {
									if (tp[i].isAlive()) lt.push(tp[i]);
								}
								return '是否视为对' + get.translation(lt) + '使用共计' + player.storage.XK_wushe + '张杀？';
							},
							check(event, player) {
								return true;
							},
							content() {
								'step 0';
								var tp = player.storage.XK_shaxing;
								event.lt = [];
								event.nm = 0;
								for (var i = 0; i < tp.length; i++) {
									if (tp[i].isAlive()) event.lt.push(tp[i]);
								}
								('step 1');
								if (event.nm < player.storage.XK_wushe) {
									player
										.chooseTarget(
											get.prompt('XK_shaxing'),
											'视为对因【无赦】获得过你牌的角色使用1张杀',
											1,
											function (card, player, target) {
												return event.lt.includes(target);
											},
											true
										)
										.set('ai', function (target) {
											var eff = get.effect(target, { name: 'sha' }, player, player);
											return eff;
										});
								} else event.finish();
								('step 2');
								if (result.targets?.length) {
									player.useCard({ name: 'sha' }, result.targets[0], false);
									event.nm++;
								}
								event.goto(1);
							},
							ai: {
								expose: 0.3,
							},
						},
						XK_biyijianfa: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_zhengxuan';
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_zhengxuan.mp3');
							},
							group: ['XK_langqing', 'XK_qieyi'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_langqing: {
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return target != player && target.sex == 'female';
							},
							prompt: '出牌阶段限1次,你可失去1点体力令1名女性角色回复1点体力,如此其获得【情意绵绵】1回合.',
							content() {
								player.loseHp();
								target.recover();
								target.addBuff('XK_qingyi', 1, player);
								target.storage.XK_qingyi = player;
							},
							ai: {
								order: 1,
								result: {
									player(player) {
										if (player.hp < 3) return -5;
										return -1;
									},
									target(player, target, card) {
										if (target.hasSkill('XK_qingyi')) return 0;
										if (target.isHealthy()) return 1;
										return 3;
									},
								},
								expose: 0.4,
							},
						},
						XK_qieyi: {
							global: 'XK_qieyi1',
						},
						XK_qieyi1: {
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								if (player.sex != 'female') return false;
								return game.hasPlayer(function (current) {
									return current != player && current.hasSkill('XK_qieyi');
								});
							},
							prompt: '出牌阶段限1次,你可失去1点体力令1名男性角色回复1点体力,如此其获得【情意绵绵】1回合.',
							filterTarget(card, player, target) {
								return target != player && target.hasSkill('XK_qieyi');
							},
							content() {
								player.loseHp();
								target.recover();
								target.addBuff('XK_qingyi', 1, player);
								target.storage.XK_qingyi = player;
							},
							ai: {
								order: 1,
								result: {
									player(player) {
										if (player.hp < 3) return -5;
										return -1;
									},
									target(player, target, card) {
										if (target.hasSkill('XK_qingyi')) return 0;
										if (target.isHealthy()) return 1;
										return 3;
									},
								},
								expose: 0.4,
							},
						},
						XK_tianshanxinfa: {
							init(player) {
								player.storage.XK_shuijing = [];
							},
							group: ['XK_shuijing', 'XK_shuijing1', 'XK_shuijing2', 'XK_dazhoutian', 'XK_dazhoutian1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_shuijing: {
							intro: {
								content: 'cards',
							},
							trigger: {
								player: 'phaseDiscardBefore',
							},
							forced: true,
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							content() {
								'step 0';
								var num = Math.max(1, player.getDamagedHp());
								player.chooseCard('【天池水镜】:是否将至多' + num + '张手牌置于武将牌上？', [1, num], false).ai = function (card) {
									return 4 - get.value(card);
								};
								('step 1');
								if (result.cards?.length) {
									var cds = result.cards;
									player.lose(cds, ui.special, 'toStorage');
									for (var i = 0; i < cds.length; i++) {
										player.storage.XK_shuijing.push(cds[i]);
									}
									if (player.storage.XK_shuijing.length != 0) {
										player.markSkill('XK_shuijing');
									}
								}
							},
						},
						XK_shuijing1: {
							trigger: {
								player: ['chooseToRespondBegin', 'chooseToUseBegin'],
							},
							filter(event, player) {
								if (_status.currentPhase == player) return false;
								if (player.storage.XK_shuijing.length <= 0) return false;
								if (event.responded) return false;
								if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
								if (event.name == 'chooseToRespond' && !lib.filter.cardRespondable({ name: 'shan' }, player, event)) return false;
								return true;
							},
							prompt: '你可以移除武将牌上的1张牌,视为使用了1张闪',
							check() {
								return 1;
							},
							content() {
								'step 0';
								player.storage.XK_shuijing.splice(0, 1);
								if (!player.storage.XK_shuijing.length) {
									player.unmarkSkill('XK_shuijing');
								}
								('step 1');
								trigger.untrigger();
								trigger.responded = true;
								trigger.result = { bool: true, card: { name: 'shan' } };
							},
							ai: {
								skillTagFilter(player, tag, arg) {
									if (!player.storage.XK_shuijing.length) return false;
								},
								respondShan: true,
							},
						},
						XK_shuijing2: {
							enable: ['chooseToUse', 'chooseToRespond'],
							filterCard() {
								return false;
							},
							selectCard: -1,
							viewAsFilter(player) {
								if (_status.currentPhase == player) return false;
								return player.storage.XK_shuijing.length;
							},
							viewAs: {
								name: 'wuxie',
							},
							prompt: '你可以移除武将牌上的1张牌,视为使用了1张无懈可击',
							onuse(result, player) {
								player.storage.XK_shuijing.splice(0, 1);
								if (!player.storage.XK_shuijing.length) {
									player.unmarkSkill('XK_shuijing');
								}
							},
							check() {
								return 1;
							},
							ai: {
								threaten: 1.3,
							},
						},
						XK_motiannu: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_yuwenxingcheng';
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_yuwenxingcheng.mp3');
							},
							group: ['XK_jitielianhuan', 'XK_qingxingchuantian'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_jitielianhuan: {
							trigger: {
								player: ['equipAfter'],
							},
							forced: true,
							async content(event, trigger, player) {
								//QQQ//选的目标数为0,就会没有ai里面的target报错
								var nm = player.countCards('e');
								if (nm > 0) {
									const result = await player.chooseTarget('【机铁连环】:是否令' + nm + '名角色改变横置状态？', nm).set('ai', function (target) {
										var att = get.attitude(player, target);
										if (target.isLinked()) return att;
										else return -att + 0.1;
									}).forResult();
									if (result.targets?.length) {
										player.line(result.targets, 'fire');
										for (var i of result.targets) {
											i.link();
										}
									}
								}
							},
							ai: {
								expose: 0.3,
							},
						},
						XK_qingxingchuantian: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'phaseUseAfter',
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseControl()
									.set('choiceList', ['所有横置角色弃置1张牌', '所有横置角色摸牌', '所有非横置角色弃置1张牌', '所有非横置角色摸牌', '取消'])
									.set('ai', function (event, player) {
										var gain1 = 0,
											gain2 = 0,
											players = game.filterPlayer();
										for (var i = 0; i < players.length; i++) {
											if (get.attitude(player, players[i]) > 0) {
												if (!players[i].isLinked()) {
													gain1++;
												} else gain2++;
											} else {
												if (!players[i].isLinked()) {
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
									.set('prompt', '【擎星穿天】:请选择1项');
								('step 1');
								if (result.index == 0) {
									for (var i = 0; i < game.players.length; i++) {
										if (game.players[i].isLinked()) {
											game.players[i].chooseToDiscard(1, 'he', true);
										}
									}
								}
								if (result.index == 1) {
									for (var i = 0; i < game.players.length; i++) {
										if (game.players[i].isLinked()) {
											game.players[i].draw();
										}
									}
								}
								if (result.index == 2) {
									for (var i = 0; i < game.players.length; i++) {
										if (!game.players[i].isLinked()) {
											game.players[i].chooseToDiscard(1, 'he', true);
										}
									}
								}
								if (result.index == 3) {
									for (var i = 0; i < game.players.length; i++) {
										if (!game.players[i].isLinked()) {
											game.players[i].draw();
										}
									}
								}
							},
						},
						XK_moshougong: {
							group: ['XK_moxin', 'XK_moxin1', 'XK_moxin2', 'XK_moshou', 'XK_dazhoutian', 'XK_dazhoutian1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_moxin: {
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							forced: true,
							filter(event, player) {
								if (player.hasSkill('XK_moxin4')) return false;
								return !game.hasPlayer(function (current) {
									return current.hasSkill('XK_jianai') || current.hasSkill('XK_feigong');
								});
							},
							content() {
								'step 0';
								player.addTempSkill('XK_moxin3');
								player.addSkill('XK_moxin4');
								player
									.chooseTarget('【墨心】:请将<兼爱>印交给一名角色', true, function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										return 10 + get.attitude(player, target);
									});
								('step 1');
								if (result.targets?.length) {
									var target = result.targets[0];
									player.line(target, 'fire');
									target.addSkill('XK_jianai');
								}
								if (
									game.hasPlayer(function (current) {
										return !current.hasSkill('XK_feigong') && current != player;
									})
								) {
									player
										.chooseTarget('【墨心】:请将<非攻>印交给一名角色', true, function (card, player, target) {
											return target != player && !target.hasSkill('XK_jianai');
										})
										.set('ai', function (target) {
											var player = _status.event.player;
											return 10 + get.attitude(player, target);
										});
								} else event.finish();
								('step 2');
								if (result.targets?.length) {
									var target = result.targets[0];
									player.line(target, 'green');
									target.addSkill('XK_feigong');
								}
							},
							ai: {
								expose: 0.3,
							},
						},
						XK_moxin1: {
							prompt: '你的首个准备阶段,你令两名不同的角色分别获得<兼爱>与<非攻>印;出牌阶段限1次(首回合除外),或当拥有<兼爱>、<非攻>印的角色死亡时,你可转移<兼爱>、<非攻>印.',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								if (
									!game.hasPlayer(function (current) {
										return current.hasSkill('XK_jianai') || current.hasSkill('XK_feigong');
									})
								)
									return false;
								return !player.hasSkill('XK_moxin3');
							},
							filterTarget(card, player, target) {
								if (ui.selected.targets.length == 1) {
									return true;
								} else {
									return target.hasSkill('XK_jianai') || target.hasSkill('XK_feigong');
								}
							},
							targetprompt: ['移走', '得到'],
							selectTarget: 2,
							multitarget: true,
							content() {
								'step 0';
								if (targets[0].hasSkill('XK_jianai') && targets[0].hasSkill('XK_feigong')) {
									player.chooseControl('兼爱', '非攻').prompt = '请选择要移动的印';
								} else {
									if (targets[0].hasSkill('XK_jianai')) event._result = { control: '兼爱' };
									else event._result = { control: '非攻' };
								}
								('step 1');
								if (result.control == '兼爱') {
									targets[0].removeSkill('XK_jianai');
									targets[1].addSkill('XK_jianai');
								} else {
									targets[0].removeSkill('XK_feigong');
									targets[1].addSkill('XK_feigong');
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
								threaten: 1.4,
							},
						},
						XK_moxin2: {
							trigger: {
								global: 'dieAfter',
							},
							forced: true,
							filter(event, player) {
								return event.player.hasSkill('XK_jianai') || event.player.hasSkill('XK_feigong');
							},
							content() {
								'step 0';
								'step 1';
								if (trigger.player.hasSkill('XK_jianai')) {
									player.chooseTarget('请将' + get.translation(trigger.player) + '的<兼爱>印交给一名角色(【兼爱】:出牌阶段限1次,你可令至多4名其他角色横置并摸一张牌)', true).set('ai', function (target) {
										var player = _status.event.player;
										return 10 + get.attitude(player, target);
									});
								} else event.goto(2);
								('step 2');
								if (result.targets?.length) {
									var target = result.targets[0];
									player.line(target, 'fire');
									target.addSkill('XK_jianai');
								}
								('step 3');
								if (trigger.player.hasSkill('XK_feigong')) {
									player.chooseTarget('请将' + get.translation(trigger.player) + '的<非攻>印交给一名角色(【非攻】:出牌阶段限1次,你可令一名其他角色解除横置状态并摸2张牌,如此,其下个回合无法使用杀)', true).set('ai', function (target) {
										var player = _status.event.player;
										return 10 + get.attitude(player, target);
									});
								} else event.finish();
								('step 4');
								if (result.targets?.length) {
									var target = result.targets[0];
									player.line(target, 'green');
									target.addSkill('XK_feigong');
								}
							},
						},
						XK_moxin3: {
							charlotte: true,
						},
						XK_moxin4: {
							charlotte: true,
						},
						XK_jianai: {
							charlotte: true,
							mark: true,
							intro: {
								name: '兼爱',
								content: '出牌阶段限1次,你可令至多4名其他角色横置并摸一张牌.',
							},
							enable: 'phaseUse',
							usable: 1,
							multitarget: true,
							multiline: true,
							selectTarget: [1, 4],
							filterTarget(card, player, target) {
								return target != player;
							},
							prompt: '出牌阶段限1次,你可令至多4名其他角色横置并摸一张牌.',
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
										if (target.isLinked()) return 1;
										return -0.5;
									},
								},
							},
						},
						XK_feigong: {
							charlotte: true,
							mark: true,
							intro: {
								name: '非攻',
								content: '出牌阶段限1次,你可令一名其他角色解除横置状态并摸2张牌,如此,其下个回合无法使用杀.',
							},
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return target != player;
							},
							prompt: '出牌阶段限1次,你可令一名其他角色解除横置状态并摸2张牌,如此,其下个回合无法使用杀.',
							content() {
								targets[0].draw(2);
								targets[0].link(false);
								targets[0].addTempSkill('XK_feigong1', { player: 'phaseJieshuAfter' });
							},
							ai: {
								order: 7,
								expose: 0.2,
								threaten: 1.2,
								result: {
									target(player, target) {
										if (target.isLinked()) return 2;
										return 1;
									},
								},
							},
						},
						XK_feigong1: {
							mod: {
								cardEnabled(card) {
									if (card.name == 'sha') return false;
								},
							},
						},
						XK_moshou: {
							forced: true,
							trigger: {
								player: 'phaseJieshuBegin',
							},
							filter(event, player) {
								return !player.hasSkill('XK_jianai') && !player.hasSkill('XK_feigong');
							},
							content() {
								player.draw(2);
							},
						},
						XK_xiaowuxianggong: {
							description: '<font color=#F0F>【无往】</font>你受到伤害后,若你未记录来源的招式,可记录之,回合开始时,你可获得1项已记录的招式直到下回合开始,并移除此记录.</br><font color=#F0F>【无念】</font>你于回合外使用基本牌后,可获得【净化】1回合.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫【内伤】;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.',
							init(player, skill) {
								player.markSkill('XK_wuwang');
								player.storage.XK_wuwang = [];
							},
							group: ['XK_wuwang', 'XK_wuwang1', 'XK_wunian', 'XK_dazhoutian', 'XK_dazhoutian1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_wuwang: {
							trigger: {
								player: ['damageEnd'],
							},
							_priority: 6,
							filter(event, player) {
								if (event.num <= 0) return false;
								if (event.source) {
									var sks = event.source.getWugong('XK_zhaoshi');
									if (sks.length) {
										if (!player.storage.XK_wuwang.includes(sks[0])) return true;
										return false;
									}
								}
								return true;
							},
							intro: {
								content(storage) {
									if (!storage.length) {
										return '未记录任何招式';
									} else {
										var tp = lib.translate[storage[0] + '_info'].match(/>【(\S*)】</)[1];
										var str = '已记录招式:【' + tp + '】';
										for (var i = 1; i < storage.length; i++) {
											var tp = lib.translate[storage[i] + '_info'].match(/>【(\S*)】</)[1];
											str += '、【' + tp + '】';
										}
										return str;
									}
								},
							},
							forced: true,
							content() {
								'step 0';
								if (!trigger.source || !trigger.source.getWugong('XK_zhaoshi').length) {
									player.draw(2);
									event.finish();
								} else {
									var sks = trigger.source.getWugong('XK_zhaoshi');
									if (!player.storage.XK_wuwang.includes(sks[0])) {
										player.storage.XK_wuwang.push(sks[0]);
									}
								}
							},
						},
						XK_wuwang1: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.storage.XK_wuwang.length;
							},
							forced: true,
							content() {
								'step 0';
								var zhaoshi = player.storage.XK_wuwang,
									list = [];
								for (var i = 0; i < zhaoshi.length; i++) {
									lib.card['skillCard_' + zhaoshi[i]] = {
										fullimage: true,
										image: 'ext:侠客风云传/image/XK_gongti_image.jpg',
									};
									var str = lib.translate[zhaoshi[i] + '_info'];
									lib.translate['skillCard_' + zhaoshi[i]] = str.match(/>【(\S*)】</)[1];
									lib.translate['skillCard_' + zhaoshi[i] + '_info'] = str;
								}
								for (var i = 0; i < zhaoshi.length; i++) {
									list.push(['', '', 'skillCard_' + zhaoshi[i]]);
								}
								player.chooseButton(['【无往】:是否获得1项招式？', [list, 'vcard']], 1).set('ai', function (button) {
									return Math.random();
								});
								('step 1');
								if (result.links?.length) {
									var sk = result.links[0][2];
									player.storage.XK_wuwang.remove(sk.slice(10));
									game.log(player, '获得了招式【' + get.translation(sk) + '】!');
									player.addTempSkill(sk.slice(10), { player: 'phaseBefore' });
								}
							},
						},
						XK_wunian: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'useCardAfter',
							},
							_priority: 14,
							filter(event, player) {
								if (_status.currentPhase == player) return false;
								return get.type(event.card) == 'basic';
							},
							prompt2(event, player) {
								return '是否获得【净化】1回合.？';
							},
							forced: true,
							content() {
								player.addBuff('XK_jinghua', 1, player);
							},
						},
						XK_wujidaofa: {
							description: '<font color=#F0F>【复无极也】</font>若你装备有武器牌,你使用与之花色相同的杀结算完成后,可令之额外结算1次.</br><font color=#F0F>【最无极】</font>回合结束,若你本回合未使用过杀,你可弃置1张手牌,从牌堆中随机获得1张任意花色的杀并获得【最无极】2回合;否则,你获得【聚气】2回合.',
							trigger: {
								player: 'phaseBefore',
							},
							_priority: 999,
							filter(event, player) {
								return player.name != 'XK_weiming';
							},
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio', player.name);
							},
							group: ['XK_fuwujiye', 'XK_zuiwuji'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_fuwujiye: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'shaAfter',
							},
							_priority: 12,
							filter(event, player) {
								if (!event.target.isAlive()) return false;
								if (event.getParent(3).skill == 'XK_fuwujiye') return false;
								if (!player.getEquip(1)) return false;
								var st = event.card.suit;
								return get.suit(player.getEquip(1)) == st;
							},
							check(event, player) {
								return get.attitude(player, event.target) <= 0;
							},
							prompt2(event, player) {
								return '是否令你对' + get.translation(event.target) + '使用的' + get.translation(event.card) + '额外结算一次？';
							},
							content() {
								player.useCard(trigger.card, trigger.cards, trigger.target, false);
							},
						},
						XK_zuiwuji: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'phaseAfter',
							},
							check(event, player) {
								var history = player.getHistory('useCard'),
									mark = false;
								for (var i = 0; i < history.length; i++) {
									if (history[i].card.name == 'sha') mark = true;
								}
								if (!mark) {
									return player.hp > 2;
								}
								return true;
							},
							prompt2(event, player) {
								var history = player.getHistory('useCard'),
									mark = false;
								for (var i = 0; i < history.length; i++) {
									if (history[i].card.name == 'sha') mark = true;
								}
								if (!mark) {
									return '是否弃置1张手牌,从牌堆中随机获得1张任意花色的杀并获得【最无极】2回合？';
								}
								return '是否获得【聚气】2回合？';
							},
							content() {
								'step 0';
								var history = player.getHistory('useCard'),
									mark = false;
								for (var i = 0; i < history.length; i++) {
									if (history[i].card.name == 'sha') mark = true;
								}
								if (mark) {
									player.addBuff('XK_juqi', 2, player);
									event.finish();
								} else {
									player.chooseToDiscard('h', 1, true);
								}
								('step 1');
								player
									.chooseControl('spade', 'heart', 'club', 'diamond', function () {
										if (player.getEquip(1)) return get.suit(player.getEquip(1));
										return 'diamond';
									})
									.set('prompt', '【最无极】:请选择获得一种花色的杀');
								('step 2');
								player.addBuff('XK_zuiwujibuff', 2, player);
								var card = get.cardPile(function (card) {
									return card.suit == result.control && card.name == 'sha';
								});
								if (card) {
									player.gain(card, 'gain2', 'log');
								} else {
									player.draw();
								}
							},
						},
						XK_baguayoushen: {
							trigger: {
								player: 'phaseBefore',
							},
							init(player, skill) {
								player.storage.XK_sanhuajuding = [];
								player.storage.XK_sanhuajuding_card = [];
							},
							_priority: 999,
							filter(event, player) {
								return player.name == 'XK_shiguang';
							},
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_shiguang.mp3');
							},
							group: ['XK_sanhuajuding', 'XK_sanhuajuding1', 'XK_kuangfengzhouyu'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_sanhuajuding: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'useCardBegin',
							},
							prompt2(event, player) {
								return '是否令' + get.translation(event.target) + '随机获得3项异常状态？如此,你使用的' + get.translation(event.cards) + '结算完成后,其移除因此法获得的状态.';
							},
							check(event, player) {
								return get.attitude(player, event.target) <= 0;
							},
							filter(event, player) {
								if (!get.tag(event.card, 'damage')) return false;
								return event.target && event.targets && event.targets.length == 1; //QQQ
							},
							firstDo: true,
							_priority: -1,
							audio: 'ext:侠客风云传/audio:1',
							content() {
								'step 0';
								var debufflist = ['XK_cimu', 'XK_zhongdu', 'XK_zhongshang', 'XK_liuxue', 'XK_yunxuan', 'XK_pozhan', 'XK_dianxue', 'XK_mumang', 'XK_sangong', 'XK_pojia', 'XK_neishang'].randomGets(3);
								for (var i = 0; i < debufflist.length; i++) {
									if (trigger.targets[0].hasSkill(debufflist[i])) {
										debufflist.splice(i--, 1);
									}
								}
								for (var i = 0; i < debufflist.length; i++) {
									trigger.targets[0].addBuff(debufflist[i], 1, player);
								}
								player.storage.XK_sanhuajuding = debufflist;
								player.storage.XK_sanhuajuding_card.push(trigger.cards);
							},
							ai: {
								expose: 0.4,
								XK_wushi: true,
							},
						},
						XK_sanhuajuding1: {
							trigger: {
								player: ['useCardAfter', 'useCardCancelled'],
							},
							forced: true,
							filter(event, player) {
								return player.storage.XK_sanhuajuding_card.indexOf(event.cards) >= 0;
							},
							content() {
								'step 0';
								var lt = player.storage.XK_sanhuajuding,
									tg = trigger.targets[0];
								for (var i = 0; i < lt.length; i++) {
									if (tg.hasSkill(lt[i])) {
										tg.deleteBuff(lt[i]);
									}
								}
								('step 1');
								player.storage.XK_sanhuajuding = [];
								player.storage.XK_sanhuajuding_card = [];
							},
						},
						XK_kuangfengzhouyu: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								global: 'useCardBefore',
							},
							usable: 1,
							_priority: 99,
							filter(event, player) {
								if (event.player == player) return false;
								if (event.card.name != 'sha') return false;
								if (!player.inRange(event.player)) return false;
								return true;
							},
							check(event, player) {
								if (event.targets.length > 1) return true;
								var att = get.attitude(player, event.targets[0]);
								return att <= 0;
							},
							prompt2(event, player) {
								return '是否为成为' + get.translation(event.player) + '指定' + get.translation(event.targets[0]) + '为目标的' + get.translation(event.card) + '的使用者？';
							},
							content() {
								trigger.player = player;
								game.log(player, '成为了', trigger.card, '的使用者.');
							},
							ai: {
								expose: 0.4,
							},
						},
						XK_tianlongbabugong: {
							group: ['XK_babushenwei', 'XK_yuanying', 'XK_yuanying1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_babushenwei: {
							trigger: {
								player: ['phaseBefore', 'phaseAfter', 'damageEnd'],
								source: ['damageEnd'],
							},
							_priority: -2,
							forced: true,
							prompt2(event, player) {
								return '是否随机获得1项增益状态1回合？';
							},
							filter(event, player) {
								if (event.name == 'damage' && event.num <= 0) return false;
								return true;
							},
							content() {
								var bufflist = ['XK_shenxing', 'XK_bati', 'XK_lianzhu', 'XK_feiyantai', 'XK_juqi', 'XK_xiejin', 'XK_shipo', 'XK_zhuihun', 'XK_jinghua', 'XK_ganzhi', 'XK_fanshou', 'XK_guiyuan', 'XK_wuzhao', 'XK_xingfen', 'XK_xinjian'];
								var sk = bufflist.randomGet();
								player.addBuff(sk, 1, player);
							},
						},
						XK_longxiangboreex: {
							group: ['XK_weihe', 'XK_zhanyong', 'XK_zhanyong1', 'XK_yuanying', 'XK_yuanying1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_longxiangbore: {
							description: '<font color=#F0F>【威吓】</font>你受到伤害后,可弃置1张黑色手牌,令来源获得【目盲】2回合.</br><font color=#F0F>【战勇】</font>每回合限1次,你可失去等同于手牌数的体力视为使用1张杀/闪,对目标/当前回合角色造成1点伤害.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫【内伤】;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.',
							group: ['XK_weihe', 'XK_zhanyong', 'XK_zhanyong1', 'XK_dazhoutian', 'XK_dazhoutian1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_weihe: {
							//audio:"ext:侠客风云传/audio:1",
							trigger: {
								player: ['damageAfter'],
							},
							_priority: 5,
							filter(event, player) {
								if (!player.countCards('h', { color: 'black' })) return false;
								return event.num > 0 && event.source && event.source.isAlive();
							},
							forced: true,
							content() {
								'step 0';
								var str = '【威吓】:是否弃置1张黑色手牌,令' + get.translation(trigger.source) + '获得【目盲】2回合？',
									nm = 1;
								if (player.storage.XK_longxiangmiji_mark) {
									str = '【威吓】:是否弃置弃置至少1张手牌,令' + get.translation(trigger.source) + '获得【目盲】(弃置牌数+1)回合？';
									nm = player.countCards('h');
								}
								player
									.chooseToDiscard(str, 'h', [1, nm], function (card) {
										if (player.storage.XK_longxiangmiji_mark) return true;
										return get.color(card) == 'black';
									})
									.set('ai', function (card) {
										var pla = _status.event.player;
										var sc = _status.event.getTrigger().source;
										var att = get.attitude(pla, sc);
										if (att > 0 || sc.hasSkill('XK_mumang')) return -1;
										else {
											return 6 - get.value(card);
										}
									});
								('step 1');
								if (result.bool) {
									if (player.name == 'XK_jinlunguoshi') {
										game.playAudio('../extension/侠客风云传/audio/XK_weihe2.mp3');
									} else {
										game.playAudio('../extension/侠客风云传/audio/XK_weihe1.mp3');
									}
									var nm = result.cards.length + 1;
									trigger.source.addBuff('XK_mumang', nm, player);
								}
							},
						},
						XK_zhanyong: {
							usable: 1,
							enable: 'chooseToUse',
							filter(event, player) {
								if (event.filterCard && event.filterCard({ name: 'sha' }, player, event)) return true;
								if (event.filterCard && event.filterCard({ name: 'shan' }, player, event)) return true;
								return false;
							},
							chooseButton: {
								dialog(event, player) {
									var list = [];
									if (event.filterCard && event.filterCard({ name: 'sha' }, player, event)) {
										list.push(['基本', '', 'sha']);
									}
									if (event.filterCard && event.filterCard({ name: 'shan' }, player, event)) {
										list.push(['基本', '', 'shan']);
									}
									return ui.create.dialog('【战勇】', [list, 'vcard'], 'hidden');
								},
								check(button) {
									var player = _status.event.player;
									if (player.countCards('h') <= 2 && player.hp > player.countCards('h')) return 3;
									return 0;
								},
								backup(links, player) {
									return {
										filterCard(card) {
											return false;
										},
										popname: true,
										selectCard: -1,
										viewAs: {
											name: links[0][2],
										},
										onuse(result, player) {
											if (player.name == 'XK_jinlunguoshi') {
												game.playAudio('../extension/侠客风云传/audio/XK_zhanyong2.mp3');
											} else {
												game.playAudio('../extension/侠客风云传/audio/XK_zhanyong1.mp3');
											}
											player.loseHp(player.countCards('h'));
											if (_status.currentPhase && _status.currentPhase != player) {
												_status.currentPhase.damage(1, player, 'nocard');
											}
										},
									};
								},
								prompt(links, player) {
									return '失去' + player.countCards('h') + '点体力视为使用1张' + get.translation(links[0][2]);
								},
							},
						},
						XK_zhanyong1: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'useCardBefore',
							},
							_priority: 15,
							filter(event, player) {
								return event.card.name == 'sha' && event.skill == 'XK_zhanyong_backup';
							},
							forced: true,
							content() {
								'step 0';
								var tgs = trigger.targets;
								for (var i = 0; i < tgs.length; i++) {
									tgs[i].damage(1, player, 'nocard');
								}
							},
						},
						XK_taijiquanex: {
							trigger: {
								player: 'phaseBefore',
							},
							_priority: 999,
							filter(event, player) {
								return player.name != 'XK_weiming';
							},
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio', player.name);
							},
							group: ['XK_sitongbada', 'XK_kaitaiji'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_taijiquan: {
							description: '<font color=#F0F>【四通八达】</font>出牌阶段限1次,你可重铸任意张同花色的牌,并指定至多等量角色,其可重铸所有该花色牌,否则获得【捉影】2回合,若无人重铸,你摸1张牌.</br><font color=#F0F>【开太极】</font>你1次失去至少2张同花色牌后,若花色为:♥️️︎,回复1点体力;♠️️︎,获得【左右开弓】1回合;♣️️︎,获得【借力打力】2回合;♦️️︎,【四通八达】次数+1.',
							trigger: {
								player: 'phaseBefore',
							},
							_priority: 999,
							filter(event, player) {
								return player.name != 'XK_weiming';
							},
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio', player.name);
							},
							group: ['XK_sitongbada', 'XK_kaitaiji'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_sitongbada: {
							//audio:"ext:侠客风云传/audio:1",
							enable: 'phaseUse',
							complexCard: true,
							multitarget: true,
							multiline: true,
							position: 'he',
							filter(event, player) {
								var num = player.storage.XK_taijimiji_mark ? 2 : 1;
								if (player.getStat().skill.XK_sitongbada >= num) return false;
								return player.countCards('he');
							},
							selectCard: [1, Infinity],
							filterCard(card, player) {
								if (ui.selected.cards.length) {
									return card.suit == ui.selected.cards[0].suit;
								}
								return true;
							},
							selectTarget(card) {
								if (ui.selected.targets.length > ui.selected.cards.length) {
									game.uncheck('target');
								}
								return [1, ui.selected.cards.length];
							},
							filterTarget(card, player, target) {
								return target != player && target.countCards('he');
							},
							check(card) {
								return 6 - get.value(card);
							},
							prepare(cards, player, targets) {
								player.line(targets);
							},
							content() {
								'step 0';
								if (player.name == 'XK_wudangzushi') {
									game.playAudio('../extension/侠客风云传/audio/XK_sitongbada2.mp3');
								} else {
									game.playAudio('../extension/侠客风云传/audio/XK_sitongbada1.mp3');
								}
								event.nm = cards.length;
								event.st = cards[0].suit;
								player.lose(cards, ui.discardPile);
								player.$throw(cards, 1000);
								game.log(player, '将', cards, '置入了弃牌堆');
								player.draw(event.nm);
								('step 1');
								event.mk = false;
								var tars = targets.slice(0);
								event.tars = tars.sort(lib.sort.seat);
								('step 2');
								if (event.tars.length) {
									var target = event.tars.shift();
									event.current = target;
								} else event.goto(5);
								('step 3');
								if (event.current) {
									var cds = event.current.getCards('he', { suit: event.st }),
										str = '(无)';
									if (cds.length) str = '(' + get.translation(cds) + ')';
									event.current.chooseControlList(['重铸你所有花色为' + get.translation(event.st) + '的牌' + str, '获得【捉影】2回合'], true).set('ai', function (event, player) {
										var num1 = event.current.countCards('he', { suit: event.st }) + 0.1;
										var num2 = get.value(event.current.getCards('he', { suit: event.st })) / num1;
										if (num2 > 4.5 || event.current.hasSkill('XK_zhuoying')) return 1;
										return 0;
									});
								} else event.goto(5);
								('step 4');
								if (result.index == 1 || !event.current.countCards('he', { suit: event.st })) {
									event.current.addBuff('XK_zhuoying', 2, player);
								} else {
									event.mk = true;
									var cds = event.current.getCards('he', { suit: event.st });
									event.current.lose(cds, ui.discardPile);
									event.current.$throw(cds, 1000);
									game.log(event.current, '将', cds, '置入了弃牌堆');
									event.current.draw(cds.length);
								}
								event.goto(2);
								('step 5');
								if (!event.mk) player.draw();
							},
							ai: {
								order: 9,
								expose: 0.3,
								result: {
									target: -1,
								},
							},
						},
						XK_kaitaiji: {
							countSuits(cards) {
								var map = {},
									suitslist = [];
								for (var i = 0; i < cards.length; i++) {
									var key = cards[i].suit;
									if (map[key]) {
										map[key] += 1;
									} else {
										map[key] = 1;
									}
								}
								for (let key in map) {
									if (map[key] >= 2) {
										suitslist.push(key);
									}
								}
								return suitslist;
							},
							//audio:"ext:侠客风云传/audio:1",
							trigger: {
								player: ['loseEnd'],
							},
							forced: true,
							filter(event, player) {
								return lib.skill.XK_kaitaiji.countSuits(event.cards).length;
							},
							content() {
								if (player.name == 'XK_wudangzushi') {
									game.playAudio('../extension/侠客风云传/audio/XK_kaitaiji2.mp3');
								} else {
									game.playAudio('../extension/侠客风云传/audio/XK_kaitaiji1.mp3');
								}
								var list = lib.skill.XK_kaitaiji.countSuits(trigger.cards);
								for (var i = 0; i < list.length; i++) {
									switch (list[i]) {
										case 'heart':
											player.recover();
											break;
										case 'spade':
											player.addBuff('XK_zuoyou', 1, player);
											break;
										case 'club':
											player.addBuff('XK_jielidali', 2, player);
											break;
										case 'diamond':
											player.getStat().skill.XK_sitongbada--;
											break;
									}
								}
							},
						},
						XK_bawangjianfa: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_fujianhan';
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_fujianhan.mp3');
							},
							group: ['XK_bawangbieji'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_bawangbieji: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'phaseDrawBefore',
							},
							filter(event, player) {
								return !event.numFixed;
							},
							_priority: 23,
							check(event, player) {
								return player.countCards('h');
							},
							prompt2(event, player) {
								return '摸牌阶段是否少摸1张牌？若如此你视为使用1张决斗,且本回合你使用的决斗无法被无懈可击响应.';
							},
							content() {
								player.chooseUseTarget({ name: 'juedou' }, true);
								player.addTempSkill('XK_bawangbieji1');
								trigger.num--;
							},
						},
						XK_bawangbieji1: {
							marktext: '霸',
							trigger: { player: 'useCard' },
							forced: true,
							filter(event, player) {
								return event.card.name == 'juedou';
							},
							content() {
								trigger.nowuxie = true;
							},
							mark: true,
							intro: {
								content: '你使用的【决斗】无法被【无懈可击】响应',
							},
						},
						XK_xiayinjue: {
							group: ['XK_xiaying', 'XK_qushi', 'XK_xiaozhoutian'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_xiaying: {
							audio: 'ext:侠客风云传/audio:1',
							mod: {
								selectTarget(card, player, range) {
									if (card.name == 'juedou') range[1] += 1;
								},
							},
							trigger: {
								player: 'useCardToPlayered',
							},
							forced: true,
							filter(event, player) {
								return event.card.name == 'juedou' && event.targets.length == 1;
							},
							content() {
								player.draw();
							},
						},
						XK_qushi: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								source: 'damageEnd',
								player: 'damageEnd',
							},
							forced: true,
							filter(event, player) {
								if (!event.card || (event.card.name != 'sha' && event.card.name != 'juedou')) return false;
								if (event.getParent(3).name == 'XK_lianji') return false;
								return event.num > 0;
							},
							prompt2(event, player) {
								var nm = event.num;
								if (_status.currentPhase == player) nm *= 2;
								return '是否获得' + nm + '层【连击】？';
							},
							content() {
								'step 0';
								var nm = trigger.num;
								if (_status.currentPhase == player) nm *= 2;
								if (!player.hasSkill('XK_lianji')) {
									player.addSkill('XK_lianji');
								}
								player.storage.XK_lianji += nm;
								('step 1');
								if (player.storage.XK_lianji > 5) {
									player.storage.XK_lianji = 5;
								}
							},
							ai: {
								XK_exlianji: true,
							},
						},
						XK_taohuashan: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_chuhui';
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_chuhui.mp3');
							},
							group: ['XK_chunfengfumian'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_chunfengfumian: {
							audio: 'ext:侠客风云传/audio:1',
							enable: 'phaseUse',
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							filterCard: true,
							selectCard: 1,
							position: 'h',
							filterTarget(card, player, target) {
								return player != target;
							},
							check(card) {
								return 6 - get.value(card);
							},
							content() {
								'step 0';
								event.tg = targets[0];
								event.cd = cards[0];
								var translate = get.translation(event.cd);
								event.tg
									.chooseControlList(['获得' + get.translation(player) + '弃置的' + translate + '牌', '从牌堆中随机获得1张与' + translate + '同类型的牌'], true)
									.set('ai', function (event, player) {
										if (get.value(event.cd) >= 4.5) return 0;
										return 1;
									})
									.set('prompt', '【春风拂面】:请选择1项');
								('step 1');
								if (result.index == 0) {
									event.tg.gain(event.cd);
									event.tg.$gain2(event.cd);
								} else {
									var type = get.type(event.cd);
									var card = get.cardPile(function (card) {
										return get.type(card) == type;
									});
									if (card) {
										event.tg.gain(card, 'gain2', 'log');
									}
								}
							},
							ai: {
								order: 1,
								result: {
									target(player, target) {
										if (player.needsToDiscard()) return 3;
										if (target.countCards('h') < player.countCards('h')) return 1;
										return 0;
									},
								},
								expose: 0.2,
							},
						},
						XK_lingfeijing: {
							group: ['XK_xingsuo', 'XK_xingsuo1', 'XK_xingsuo2', 'XK_xingsuo3', 'XK_lingbo1', 'XK_xiaozhoutian'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_xingsuo: {
							audio: 'ext:侠客风云传/audio:1',
							enable: ['chooseToUse', 'chooseToRespond'],
							filterCard() {
								return true;
							},
							selectCard: -1,
							viewAsFilter(player) {
								if (player.hasSkill('XK_xingsuo4')) return false;
								return player.countCards('h') > 0;
							},
							viewAs: {
								name: 'shan',
							},
							prompt: '将全部手牌当作闪使用或打出',
							check() {
								var player = _status.event.player;
								return get.value(player.getCards('h')) <= 6;
							},
							onuse(result, player) {
								player.addTempSkill('XK_xingsuo4', 'roundStart');
								player.addBuff('XK_jinghua', 2, player);
								if (_status.currentPhase != player) {
									player.gainPlayerCard('e', _status.currentPhase, false);
								} else game.delay();
							},
							onrespond(result, player) {
								player.addTempSkill('XK_xingsuo4', 'roundStart');
								player.addBuff('XK_jinghua', 2, player);
								if (_status.currentPhase != player) {
									player.gainPlayerCard('e', _status.currentPhase, false);
								} else game.delay();
							},
							ai: {
								respondShan: true,
								skillTagFilter(player) {
									if (!player.countCards('h')) return false;
								},
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'respondShan') && current < 0) return 0.8;
									},
								},
							},
						},
						XK_xingsuo1: {
							audio: 'ext:侠客风云传/audio:1',
							enable: ['chooseToRespond'],
							filter(event, player) {
								if (player.hasSkill('XK_xingsuo4')) return false;
								return player.countCards('h');
							},
							filterCard() {
								return true;
							},
							selectCard: -1,
							audio: 'ext:侠客风云传/audio:1',
							viewAs: {
								name: 'sha',
							},
							prompt: '将全部手牌当杀使用或打出',
							check() {
								var player = _status.event.player;
								return get.value(player.getCards('h')) <= 4.5;
							},
							onuse(result, player) {
								player.addTempSkill('XK_xingsuo4', 'roundStart');
								player.addBuff('XK_jinghua', 2, player);
								if (_status.currentPhase != player) {
									player.gainPlayerCard('e', _status.currentPhase, false);
								} else game.delay();
							},
							onrespond(result, player) {
								player.addTempSkill('XK_xingsuo4', 'roundStart');
								player.addBuff('XK_jinghua', 2, player);
								if (_status.currentPhase != player) {
									player.gainPlayerCard('e', _status.currentPhase, false);
								} else game.delay();
							},
							ai: {
								skillTagFilter(player) {
									if (!player.countCards('h')) return false;
								},
								respondSha: true,
							},
						},
						XK_xingsuo2: {
							audio: 'ext:侠客风云传/audio:1',
							enable: ['chooseToUse'],
							filter(event, player) {
								if (player.hasSkill('XK_xingsuo4')) return false;
								return player.countCards('h');
							},
							filterCard() {
								return true;
							},
							selectCard: -1,
							viewAs: {
								name: 'sha',
							},
							prompt: '将全部手牌当杀使用',
							check() {
								var player = _status.event.player;
								return get.value(player.getCards('h')) <= 4.5;
							},
							onuse(result, player) {
								player.addTempSkill('XK_xingsuo4', 'roundStart');
							},
						},
						XK_xingsuo3: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'useCardBefore',
							},
							_priority: 15,
							filter(event, player) {
								return event.card.name == 'sha' && event.skill == 'XK_xingsuo2';
							},
							forced: true,
							content() {
								'step 0';
								player.addBuff('XK_jinghua', 2, player);
								var tgs = trigger.targets;
								for (var i = 0; i < tgs.length; i++) {
									player.gainPlayerCard('e', tgs[i], false);
								}
							},
						},
						XK_xingsuo4: {},
						XK_lingbo1: {
							filter(event, player) {
								return !player.hasSkill('XK_lingbo2');
							},
							check(event, player) {
								if (player.countCards('h', { name: ['shunshou', 'bingliang', 'XK_shidu'] })) return false;
								if (player.getCardUsable('sha') > 0 && player.hasUsableCard('sha')) return false;
								return true;
							},
							prompt2(event, player) {
								return '是否令你直至下回合开始,进攻距离-X,防御距离+X,X为你的攻击距离-1？';
							},
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: ['shaAfter'],
							},
							content() {
								player.addTempSkill('XK_lingbo2', { player: 'phaseBefore' });
							},
						},
						XK_lingbo2: {
							intro: {
								content(storage, player, skill) {
									return '进攻距离-X,防御距离+X,X为你的攻击距离-1';
								},
							},
							mark: true,
							mod: {
								globalFrom(from, to, current) {
									var num = Math.max(0, from.getAttackRange() - 1);
									return current + num;
								},
								globalTo(from, to, current) {
									var num = Math.max(0, to.getAttackRange() - 1);
									return current + num;
								},
							},
						},
						XK_pianshudaquan: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_zhaoyaer';
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_zhaoyaer.mp3');
							},
							group: ['XK_yigongsheng', 'XK_qinmeimei'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_yigongsheng: {
							audio: 'ext:侠客风云传/audio:1',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								player.draw(Math.min(player.maxHp, 20));
								('step 1');
								var num1 = player.maxHp;
								player.chooseCard('h', num1, '【一公升的眼泪】:将' + num1 + '张手牌按顺序置于牌堆顶(先选择的在上).', true).set('ai', function (card) {
									var val = get.value(card);
									return 4 - val;
								});
								('step 2');
								if (result.cards?.length) {
									event.cardss = result.cards.slice(0);
									player.lose(event.cardss, ui.special);
									player.$throw(event.cardss, 1000, 'nobroadcast');
								} else event.finish();
								('step 3');
								for (var i = event.cardss.length - 1; i >= 0; i--) {
									event.cardss[i].fix();
									ui.cardPile.insertBefore(event.cardss[i], ui.cardPile.firstChild);
								}
								game.log(player, '将', event.cardss.length, '张牌置于牌堆顶');
							},
							ai: {
								order: 1,
								result: {
									player: 1,
								},
							},
						},
						XK_qinmeimei: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								target: 'useCardToBefore',
							},
							usable: 1,
							_priority: 12,
							check(event, player) {
								var eff = get.effect(player, event.card, event.player, player);
								return eff < 0;
							},
							prompt2(event, player) {
								return '是否令' + get.translation(event.player) + '对你使用的' + get.translation(event.card) + '效果改为:展示牌堆顶1张牌,若其可对目标使用该牌则使用之？';
							},
							filter(event, player) {
								if (event.player == player) return false;
								if (!get.tag(event.card, 'damage')) return false;
								return true;
							},
							content() {
								trigger.setContent(function () {
									var evt = _status.event;
									var cd = get.cards()[0];
									var info = get.info(cd);
									evt.player.showCards(cd);
									if (evt.player.canUse(cd, player) && info.selectTarget != 2) {
										evt.player.useCard(cd, player, true);
									} else {
										game.cardsDiscard(cd);
									}
								});
							},
							ai: {
								threaten: 1.1,
								expose: 0.3,
							},
						},
						XK_shengcunfaze: {
							group: ['XK_zouweishangce', 'XK_zouweishangce1', 'XK_xiaozhoutian'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_zouweishangce: {
							trigger: {
								player: ['chooseToRespondBegin', 'chooseToUseBegin'],
							},
							filter(event, player) {
								if (player.hp < 1) return false;
								if (event.responded) return false;
								if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
								if (event.name == 'chooseToRespond' && !lib.filter.cardRespondable({ name: 'shan' }, player, event)) return false;
								return true;
							},
							check(event, player) {
								return !player.countCards('h', 'shan');
							},
							prompt2(event, player) {
								return '是否失去1点体力,视为使用或打出一张闪？';
							},
							content() {
								player.loseHp();
								trigger.untrigger();
								trigger.responded = true;
								trigger.result = { bool: true, card: { name: 'shan' } };
							},
							ai: {
								respondShan: true,
								effect: {
									target(card, player, target, effect) {
										if (get.tag(card, 'respondShan') && target.hp > 1) return 0.5;
									},
								},
							},
						},
						XK_zouweishangce1: {
							audio: 'ext:侠客风云传/audio:1',
							check(event, player) {
								var att = get.attitude(player, _status.currentPhase);
								return att <= 0;
							},
							prompt2(event, player) {
								return '是否令获得' + get.translation(_status.currentPhase) + '【晕眩】1回合？';
							},
							trigger: {
								player: ['useCardEnd', 'respondEnd'],
							},
							_priority: 6,
							filter(event, player) {
								return _status.currentPhase && _status.currentPhase.isAlive() && event.card && event.card.name == 'shan'; //QQQ
							},
							content() {
								_status.currentPhase.addBuff('XK_yunxuan', 1, player);
							},
						},
						XK_xisuijing: {
							description: '<font color=#F0F>【锻体归元】</font>出牌阶段开始,若你已受伤,可选择1项:1.摸X张牌;2.随机移除X项异常状态;3.获得【归元】X回合.X为你已损失体力值且至多为3.</br><font color=#F0F>【凡圣同归】</font>结束阶段,若你未受伤,可展示牌堆顶X张牌,并获得其中每种花色的牌各1张,X为场上未受伤的角色数且至少为3.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫【内伤】;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.',
							group: ['XK_duantiguiyuan', 'XK_fanshengtonggui', 'XK_dazhoutian', 'XK_dazhoutian1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_duantiguiyuan: {
							description: '出牌阶段开始,若你已受伤,可选择1项:1.摸X张牌;2.随机移除X项异常状态;3.获得【归元】X回合.X为你已损失体力值且至多为3.',
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'phaseUseBefore',
							},
							filter(event, player) {
								return player.isDamaged();
							},
							forced: true,
							content() {
								'step 0';
								event.nm = Math.min(3, player.getDamagedHp());
								player
									.chooseControlList(['摸' + event.nm + '张牌', '随机移除' + event.nm + '项异常状态', '获得【归元】' + event.nm + '回合'])
									.set('ai', function (event, player) {
										if (player.getXKBuff('XK_debuff').length >= event.nm) return 1;
										if (!player.hasSkill('XK_guiyuan')) return 2;
										return 0;
									})
									.set('prompt', '【锻体归元】:请选择1项');
								('step 1');
								if (result.control == 'cancel2') {
									event.finish();
								} else {
									switch (result.index) {
										case 0:
											player.draw(event.nm);
											break;
										case 1:
											player.removeBuff('XK_debuff', event.nm, event.nm, false, false);
											break;
										case 2:
											player.addBuff('XK_guiyuan', event.nm, player);
											break;
									}
								}
								('step 2');
							},
							ai: {
								XK_selfbuff: true,
							},
						},
						XK_fanshengtonggui: {
							trigger: { player: 'phaseJieshuAfter' },
							forced: true,
							prompt2(event, player) {
								var num = Math.max(
									3,
									game.countPlayer(function (current) {
										return current.isHealthy();
									})
								);
								return '是否展示牌堆顶' + num + '的张牌,并获得其中每种花色的牌各1张？';
							},
							filter(event, player) {
								return player.isHealthy();
							},
							content() {
								'step 0';
								var num = Math.max(
									3,
									game.countPlayer(function (current) {
										return current.isHealthy();
									})
								);
								event.cards = get.cards(num);
								game.cardsGotoOrdering(event.cards);
								event.videoId = lib.status.videoId++;
								game.broadcastAll(
									function (player, id, cards) {
										var str;
										if (player == game.me && !_status.auto) {
											str = '【凡圣同归】:获取每种花色的牌各1张';
										} else {
											str = '【凡圣同归】';
										}
										var dialog = ui.create.dialog(str, cards);
										dialog.videoId = id;
									},
									player,
									event.videoId,
									event.cards
								);
								event.time = get.utc();
								game.addVideo('showCards', player, ['【凡圣同归】', get.cardsInfo(event.cards)]);
								game.addVideo('delay', null, 2);
								('step 1');
								var next = player.chooseButton([0, 3], true);
								next.set('dialog', event.videoId);
								next.set('filterButton', function (button) {
									for (var i = 0; i < ui.selected.buttons.length; i++) {
										if (ui.selected.buttons[i].link.suit == button.link.suit) return false;
									}
									return true;
								});
								next.set('ai', function (button) {
									return get.value(button.link, _status.event.player);
								});
								('step 2');
								if (result.links?.length) {
									event.cards2 = result.links;
								} else {
									event.finish();
								}
								var time = 1000 - (get.utc() - event.time);
								if (time > 0) {
								}
								('step 3');
								game.broadcastAll('closeDialog', event.videoId);
								var cards2 = event.cards2;
								player.gain(cards2, 'log', 'gain2');
							},
						},
						XK_bawangqiang: {
							description: '<font color=#F0F>【无风起浪】</font>锁定技,每当你造成1点伤害后,令目标获得1层【震击】,至多3层,超出时你摸超出数量的牌;你使用杀无距离限制.</br><font color=#F0F>【回马枪】</font>当你使用杀指定目标时,若你不在其攻击范围内,你可展示其手牌并弃置其中一种花色的牌;否则其获得【刺目】1回合.',
							trigger: {
								player: 'phaseBefore',
							},
							_priority: 999,
							filter(event, player) {
								return player.name != 'XK_weiming';
							},
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio', player.name);
							},
							group: ['XK_wufengqilang', 'XK_huimaqiang'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_wufengqilang: {
							audio: 'ext:侠客风云传/audio:1',
							mod: {
								targetInRange(card) {
									if (card.name == 'sha') return true;
								},
							},
							trigger: {
								source: 'damageEnd',
							},
							forced: true,
							filter(event, player) {
								return event.player != player && event.num > 0;
							},
							content() {
								'step 0';
								if (!trigger.player.hasSkill('XK_zhenji')) {
									trigger.player.addSkill('XK_zhenji');
								}
								var mark = false;
								for (var i = 0; i < trigger.player.storage.XK_zhenji.length; i++) {
									if (trigger.player.storage.XK_zhenji[i].pl == player) {
										mark = true;
										trigger.player.storage.XK_zhenji[i].nm += trigger.num;
										if (trigger.player.storage.XK_zhenji[i].nm > 3) {
											var tp = trigger.player.storage.XK_zhenji[i].nm - 3;
											trigger.player.storage.XK_zhenji[i].nm = 3;
											player.draw(tp);
										}
									}
								}
								if (mark == false) {
									if (trigger.num > 3) {
										var nm = trigger.num - 3;
										player.draw(nm);
									}
									var tp = Math.min(3, trigger.num);
									var lt = {
										pl: player,
										nm: tp,
									};
									trigger.player.storage.XK_zhenji.add(lt);
								}
								('step 1');
							},
						},
						XK_huimaqiang: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: { player: 'useCardToPlayered' },
							filter(event, player) {
								if (event.card.name != 'sha') return false;
								if (event.target.countCards('h') && !event.target.inRange(player)) return true;
								return event.target.inRange(player);
							},
							check(event, player) {
								return get.attitude(player, event.target) < 0;
							},
							prompt2(event, player) {
								if (!event.target.inRange(player)) return '是否展示' + get.translation(event.target) + '的手牌？并弃置其中一种花色的牌.';
								else return '是否令' + get.translation(event.target) + '获得【刺目】1回合？';
							},
							logTarget: 'target',
							content() {
								'step 0';
								if (trigger.target.inRange(player)) {
									trigger.target.addBuff('XK_cimu', 1, player);
									event.finish();
								} else {
									trigger.target.showHandcards();
								}
								('step 1');
								var cards = trigger.target.getCards('h');
								var list = [];
								for (var i = 0; i < cards.length; i++) {
									list.add(cards[i].suit);
								}
								if (list.length == 1) event._result = { control: list[0] };
								else {
									list.sort();
									player
										.chooseControl(list)
										.set('prompt', '【回马枪】:选择弃置其中一种花色的牌')
										.set('ai', function () {
											if (list.includes('heart')) return 'heart';
											if (list.includes('diamond')) return 'diamond';
											if (list.includes('club')) return 'club';
											return 'spade';
										});
								}
								('step 2');
								trigger.target.discard(trigger.target.getCards('h', { suit: result.control }));
							},
						},
						XK_dongfangbaodian: {
							description: '<font color=#F0F>【东方未明】</font>转换技,准备阶段或其他角色濒死时,你可展示牌堆顶3张牌,并依次使用其中的1.基本牌;2.锦囊牌;3.装备牌,弃置其余的牌.</br><font color=#F0F>【东方未曦】</font>【东方未明】完成1轮转换后,你可选择令1名其他角色获得:1.【破绽】【破甲】2回合;2.【追魂】【识破】2回合.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫【内伤】;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.',
							init(player) {
								player.storage.XK_dongfangweiming = [1, 2, 3];
								player.storage.XK_dongfangweiming_a = 0;
								player.markSkill('XK_dongfangweiming');
							},
							onremove(player) {
								player.unmarkSkill('XK_dongfangweiming');
							},
							group: ['XK_dongfangweiming', 'XK_dongfangweixi', 'XK_dazhoutian', 'XK_dazhoutian1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_dongfangweiming: {
							intro: {
								content(storage, player, skill) {
									if (player.storage.XK_dongfangweiming[0] == 1) return '你可以展示牌堆顶3张牌,并依次使用其中的基本牌,弃置其余的牌';
									else if (player.storage.XK_dongfangweiming[0] == 2) return '你可以展示牌堆顶3张牌,并依次使用其中的锦囊牌,弃置其余的牌';
									else if (player.storage.XK_dongfangweiming[0] == 3) return '你可以展示牌堆顶3张牌,并依次使用其中的装备牌,弃置其余的牌';
								},
							},
							trigger: {
								global: 'dying',
								player: 'phaseZhunbei',
							},
							filter(event, player) {
								if (!player.storage.XK_dongfangweiming) return false;
								if (event.name == 'phaseZhunbei') return true;
								return event.player.hp <= 0 && event.player != player;
							},
							prompt2(event, player) {
								if (player.storage.XK_dongfangweiming[0] == 1) {
									return '是否展示牌堆顶3张牌,并依次使用其中的基本牌,弃置其余的牌？';
								} else if (player.storage.XK_dongfangweiming[0] == 2) {
									return '是否展示牌堆顶3张牌,并依次使用其中的锦囊牌,弃置其余的牌？';
								} else if (player.storage.XK_dongfangweiming[0] == 3) {
									return '是否展示牌堆顶3张牌,并依次使用其中的装备牌,弃置其余的牌？';
								}
							},
							check(event, player) {
								return true;
							},
							content() {
								'step 0';
								event.cars = get.cards(3);
								player.showCards(event.cars);
								('step 1');
								var typ = 'basic';
								if (player.storage.XK_dongfangweiming[0] == 2) typ = 'trick';
								else if (player.storage.XK_dongfangweiming[0] == 3) typ = 'equip';
								var temp = [];
								for (var i = 0; i < event.cars.length; i++) {
									if (get.type(event.cars[i]) != typ) {
										temp.push(event.cars[i]);
										event.cars.splice(i--, 1);
									}
								}
								game.cardsDiscard(temp);
								('step 2');
								if (event.cars.length >= 0) {
									for (var i = 0; i < event.cars.length; i++) {
										player.chooseUseTarget(event.cars[i], false);
									}
								}
								('step 3');
								player.storage.XK_dongfangweiming_a++;
								var temp = player.storage.XK_dongfangweiming.shift();
								player.storage.XK_dongfangweiming.push(temp);
								('step 4');
								if (player.storage.XK_dongfangweiming_a >= 3) {
									player.storage.XK_dongfangweiming_a -= 3;
									player
										.chooseControl()
										.set('choiceList', ['令1名其他角色获得【破绽】【破甲】2回合', '令1名其他角色获得【追魂】【识破】2回合'])
										.set('ai', function (event, player) {
											if (player.hasFriend()) return 1;
											return 0;
										});
								} else event.finish();
								('step 5');
								event.ind = result.index;
								if (event.ind == 0) var str = '令1名其他角色获得【破绽】【破甲】2回合';
								else var str = '令1名其他角色获得【追魂】【识破】2回合';
								player.chooseTarget(str, 1, function (card, player, target) {
									return target != player;
								}).ai = function (target) {
									var player = _status.event.player;
									var att = get.attitude(player, target);
									if (event.ind == 0) return -att;
									else {
										if (target.hasSkill('XK_zhuihun')) att /= 3;
										return att;
									}
								};
								('step 6');
								if (result.bool) {
									if (event.ind == 0) {
										result.targets[0].addBuff('XK_pozhan', 2, player);
										result.targets[0].addBuff('XK_pojia', 2, player);
									} else if (event.ind == 1) {
										result.targets[0].addBuff('XK_zhuihun', 2, player);
										result.targets[0].addBuff('XK_shipo', 2, player);
									}
								}
							},
						},
						XK_dongfangweixi: {
							audio: 'ext:侠客风云传/audio:1',
							ai: {
								combo: 'XK_dongfangweiming',
							},
						},
						XK_xuwudaofa: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_yinshiyun';
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_yinshiyun.mp3');
							},
							group: ['XK_poxukong', 'XK_tiandijie'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_poxukong: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: ['damageAfter'],
							},
							_priority: -3,
							filter(event, player) {
								return event.num > 0;
							},
							forced: true,
							content() {
								'step 0';
								event.nm = Math.min(4, player.getDamagedHp());
								event.tp = Math.ceil(event.nm / 2);
								if (trigger.getParent(2).skill && trigger.getParent(2).skill == 'XK_tiandijie') {
									player.draw(event.tp);
									if (!player.hasSkill('XK_lianji')) {
										player.addSkill('XK_lianji');
									}
									player.storage.XK_lianji += event.nm;
									if (player.storage.XK_lianji > 5) {
										player.storage.XK_lianji = 5;
									}
									event.goto(2);
								} else {
									player
										.chooseControlList(['摸' + event.tp + '张牌', '获得' + event.nm + '层【连击】'])
										.set('ai', function (event, player) {
											if (player.countCards('h') <= 2) return 0;
											if (player.storage.XK_lianji != undefined) {
												var num = 5 - player.storage.XK_lianji;
												if (num <= event.nm) return 1;
											}
											return 0;
										})
										.set('prompt', '【破虚空】:请选择1项');
								}
								('step 1');
								if (result.index == 0) {
									player.draw(event.tp);
								} else if (result.index == 1) {
									if (!player.hasSkill('XK_lianji')) {
										player.addSkill('XK_lianji');
									}
									player.storage.XK_lianji += event.nm;
									if (player.storage.XK_lianji > 5) {
										player.storage.XK_lianji = 5;
									}
								} else event.finish();
								('step 2');
							},
							ai: {
								threaten(player, target) {
									var num = player.getDamagedHp() * 0.2 + 0.9;
									return num;
								},
							},
						},
						XK_tiandijie: {
							audio: 'ext:侠客风云传/audio:1',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.hp > 0;
							},
							content() {
								player.damage(1, 'nosource', 'nocard');
								player.addBuff('XK_tiandibuff', 2, player);
							},
							ai: {
								order: 9,
								XK_selfbuff: true,
								result: {
									player(player) {
										if (player.hp <= 1 && !player.hasUsableCard('tao')) return -1;
										return 2;
									},
								},
							},
						},
						XK_sijiexinjue: {
							group: ['XK_sijie1', 'XK_sijie2', 'XK_sijie3', 'XK_sijie4', 'XK_dazhoutian', 'XK_dazhoutian1'],
							ai: {
								XK_neigong: true,
								skillTagFilter(player, tag) {
									switch (tag) {
										case 'respondSha': {
											if (!player.countCards('h', { suit: 'spade' }) || player.hp > 4) return false;
											break;
										}
										case 'respondShan': {
											if (!player.countCards('h', { suit: 'diamond' }) || player.hp > 2) return false;
											break;
										}
										case 'save': {
											if (!player.countCards('h', { suit: 'heart' }) || player.hp > 1) return false;
											break;
										}
										default:
											return true;
											break;
									}
								},
								maixie: true,
								save: true,
								respondSha: true,
								respondShan: true,
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'recover') && target.hp >= 1) return [0, 0];
										if (!target.hasFriend()) return;
										if ((get.tag(card, 'damage') == 1 || get.tag(card, 'loseHp')) && target.hp > 1) return [0, 1];
									},
								},
								threaten(player, target) {
									var num = player.getDamagedHp() * 0.2 + 0.9;
									return num;
								},
							},
						},
						XK_sijie1: {
							enable: ['chooseToUse', 'chooseToRespond'],
							prompt() {
								return '将1张♥️️手牌当作桃使用';
							},
							position: 'h',
							check(card, event) {
								return 8 - get.value(card);
							},
							selectCard: 1,
							viewAs: { name: 'tao' },
							filter(event, player) {
								if (player.hp > 1) return false;
								return player.countCards('h', { suit: 'heart' });
							},
							filterCard(card) {
								return card.suit == 'heart';
							},
						},
						XK_sijie2: {
							enable: ['chooseToUse', 'chooseToRespond'],
							prompt() {
								return '将1张♠️️手牌当作杀使用或打出';
							},
							position: 'h',
							check(card, event) {
								return 6 - get.value(card);
							},
							selectCard: 1,
							viewAs: { name: 'sha' },
							filter(event, player) {
								if (player.hp > 4) return false;
								return player.countCards('h', { suit: 'spade' });
							},
							filterCard(card) {
								return card.suit == 'spade';
							},
						},
						XK_sijie3: {
							enable: ['chooseToUse', 'chooseToRespond'],
							prompt() {
								return '将1张♣️️手牌当作无懈可击使用';
							},
							position: 'h',
							check(card, event) {
								return 6 - get.value(card);
							},
							selectCard: 1,
							viewAs: { name: 'wuxie' },
							viewAsFilter(player) {
								if (player.hp > 3) return false;
								return player.countCards('h', { suit: 'club' });
							},
							filterCard(card) {
								return card.suit == 'club';
							},
						},
						XK_sijie4: {
							enable: ['chooseToUse', 'chooseToRespond'],
							prompt() {
								return '将1张♦️️手牌当作闪使用或打出';
							},
							position: 'h',
							check(card, event) {
								return 8 - get.value(card);
							},
							selectCard: 1,
							viewAs: { name: 'shan' },
							filter(event, player) {
								if (player.hp > 2) return false;
								return player.countCards('h', { suit: 'diamond' });
							},
							filterCard(card) {
								return card.suit == 'diamond';
							},
						},
						XK_fengshentuifaex: {
							trigger: {
								player: 'phaseBefore',
							},
							init(player) {
								player.storage.XK_kuangfengbaoyu = 0;
							},
							_priority: 999,
							filter(event, player) {
								return player.name != 'XK_weiming';
							},
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio', player.name);
							},
							group: ['XK_bufengzhuoying', 'XK_kuangfengbaoyu'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_fengshentuifa: {
							description: '<font color=#F0F>【捕风捉影】</font>出牌阶段开始,你可令你和距离你为1的所有角色各弃置1张牌,每因此弃置1张牌,你获得1层【连击】.</br><font color=#F0F>【暴雨狂风】</font>锁定技,当你触发【连击】时,根据层数:>=1.你摸1张牌;>=2.你获得【飞燕】2回合;>=3.目标获得【重伤】1回合;>=4.目标获得【内伤】2回合.',
							trigger: {
								player: 'phaseBefore',
							},
							init(player) {
								player.storage.XK_kuangfengbaoyu = 0;
							},
							_priority: 999,
							filter(event, player) {
								return player.name != 'XK_weiming';
							},
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio', player.name);
							},
							group: ['XK_bufengzhuoying', 'XK_kuangfengbaoyu'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_bufengzhuoying: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'phaseUseBefore',
							},
							check(event, player) {
								if (player.storage.XK_fengshenmiji_mark) return true;
								var num = 0;
								game.countPlayer(function (current) {
									var ds = get.distance(player, current);
									if (current != player && ds <= 1) {
										var att = get.attitude(player, current);
										if (att > 0) num--;
										else num++;
									}
								});
								return num >= 0;
							},
							filter(event, player) {
								return player.countCards('he');
							},
							prompt2(event, player) {
								if (player.storage.XK_fengshenmiji_mark) return '是否令你和距离你为1的任意名角色各弃置1张牌各弃置1张牌？每因此弃置1张牌,你获得1层【连击】.';
								var ps = game.filterPlayer(function (current) {
									return current != player && get.distance(player, current) <= 1 && current.countCards('he');
								});
								return '是否令你和' + get.translation(ps) + '各弃置1张牌？每因此弃置1张牌,你获得1层【连击】.';
							},
							content() {
								'step 0';
								event.nm = 1;
								player.chooseToDiscard('he', 1, true);
								('step 1');
								if (player.storage.XK_fengshenmiji_mark) {
									player.chooseTarget(get.prompt('XK_bufengzhuoying'), '令距离你为1的任意名角色各弃置1张牌各弃置1张牌,每因此弃置1张牌,你获得1层【连击】.', [1, Infinity], function (card, player, target) {
										return player != target && get.distance(player, target) <= 1 && target.countCards('he');
									}).ai = function (target) {
										return get.attitude(player, target) <= 0;
									};
								} else event.goto(3);
								('step 2');
								if (result.targets?.length) {
									var tars = result.targets;
									for (var i = 0; i < tars.length; i++) {
										tars[i].chooseToDiscard('he', 1, true);
										event.nm++;
									}
								}
								event.goto(4);
								('step 3');
								game.countPlayer(function (current) {
									if (current != player) {
										var ds = get.distance(player, current);
										if (current.countCards('he') && ds <= 1) {
											current.chooseToDiscard('he', 1, true);
											event.nm++;
										}
									}
								});
								('step 4');
								if (!player.hasSkill('XK_lianji')) {
									player.addSkill('XK_lianji');
								}
								player.storage.XK_lianji += event.nm;
								('step 5');
								if (player.storage.XK_lianji > 5) {
									player.storage.XK_lianji = 5;
								}
							},
						},
						XK_kuangfengbaoyu: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: ['shaBegin'],
							},
							filter(event, player) {
								return event.getParent(2).name == 'XK_lianji';
							},
							forced: true,
							content() {
								var num = player.storage.XK_kuangfengbaoyu;
								if (num >= 1) player.draw();
								if (num >= 2) player.addBuff('XK_feiyantai', 2, player);
								if (num >= 3) trigger.target.addBuff('XK_pozhan', 1, player);
								if (num >= 4) trigger.target.addBuff('XK_neishang', 2, player);
							},
							ai: { XK_selfbuff: true },
						},
						XK_dukangjishengong: {
							description: '<font color=#F0F>【庐山升鸡霸】</font>出牌阶段,你可将1张装备牌置于1名其他角色装备区,视为对其使用1张任意属性的杀,如此你获得2层【连击】,其获得【捉影】【流血】1回合.</br><font color=#F0F>【凤爪七连杀】</font>你于回合内使用的杀结算完成后,可选择1项直至回合结束:此杀不计次数且进攻距离-1;进攻距离+1.',
							trigger: {
								player: 'phaseBefore',
							},
							init(player) {
								player.storage.XK_fengzhua = 0;
							},
							_priority: 999,
							filter(event, player) {
								return player.name != 'XK_weiming';
							},
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio', player.name);
							},
							group: ['XK_lushanshengjiba', 'XK_fengzhua', 'XK_fengzhua1'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_lushanshengjiba: {
							audio: 'ext:侠客风云传/audio:1',
							position: 'h',
							filterTarget(card, player, target) {
								return target != player;
							},
							filter(event, player) {
								return player.countCards('h', { type: 'equip' });
							},
							filterCard(card) {
								return get.type(card) == 'equip';
							},
							check(card) {
								if (card.name == 'tengjia') return 10;
								return 5.5 - get.value(card);
							},
							usable: 1,
							discard: false,
							enable: 'phaseUse',
							selectTarget: 1,
							prompt: '将1张装备牌置于一名其他角色的装备区,视为对其使用1张任意属性的杀,如此你获得2层【连击】,其获得【捉影】【流血】1回合.',
							content() {
								'step 0';
								if (!player.hasSkill('XK_lianji')) {
									player.addSkill('XK_lianji');
								}
								player.storage.XK_lianji += 2;
								('step 1');
								if (player.storage.XK_lianji > 5) {
									player.storage.XK_lianji = 5;
								}
								('step 2');
								target.gain(cards[0], player, 'giveAuto');
								target.equip(cards[0]);
								var basiclist = [];
								basiclist.push(['基本', '', 'sha']);
								basiclist.push(['基本', '', 'sha', 'fire']);
								basiclist.push(['基本', '', 'sha', 'thunder']);
								player.chooseButton(['视为对' + get.translation(target) + '使用1张杀', [basiclist, 'vcard']]).set('ai', function (button) {
									var card = { name: button.link[2], nature: button.link[3] };
									var eff = get.effect(target, card, player, player);
									return eff;
								});
								('step 3');
								if (result.links?.length) {
									target.addBuff('XK_zhuoying', 1, player);
									target.addBuff('XK_liuxue', 1, player);
									var card1 = { name: result.links[0][2], nature: result.links[0][3] };
									player.useCard(card1, target, true);
								}
							},
							ai: {
								order() {
									return get.order({ name: 'sha' }) + 0.05;
								},
								result: {
									target(player, target, card) {
										var eff1 = get.effect(target, { name: 'sha' }, player, target);
										var eff2 = get.effect(target, { name: 'sha', nature: 'fire' }, player, target);
										var eff3 = get.effect(target, { name: 'sha', nature: 'thunder' }, player, target);
										var eff = Math.max(eff1, eff2, eff3) + 1;
										return eff;
									},
								},
							},
						},
						XK_fengzhua: {
							mod: {
								globalFrom(from, to, current) {
									var num = from.storage.XK_fengzhua;
									return current - num;
								},
							},
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: ['shaAfter'],
							},
							filter(event, player) {
								return player.isPhaseUsing();
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseControlList(['此杀不计次数且进攻距离-1', '进攻距离+1'])
									.set('ai', function (event, player) {
										if (player.countCards('h', { type: 'equip' }) || player.hasUsableCard('sha')) return 0;
										return 1;
									})
									.set('prompt', '【凤爪七连杀】:请选择1项');
								('step 1');
								if (result.index == 0) {
									if (player.stat[player.stat.length - 1].card.sha > 0) {
										player.stat[player.stat.length - 1].card.sha--;
									}
									player.storage.XK_fengzhua--;
								} else if (result.index == 1) {
									player.storage.XK_fengzhua++;
								}
							},
						},
						XK_fengzhua1: {
							trigger: {
								player: 'phaseAfter',
							},
							forced: true,
							filter(event, player) {
								return player.storage.XK_fengzhua != 0;
							},
							_priority: -3,
							content() {
								player.storage.XK_fengzhua = 0;
							},
						},
						XK_weiwoduzungong: {
							description: '<font color=#F0F>【天元】</font>你受到伤害后,可进行一次判定,若结果为红色,你回复1点体力,否则你摸伤害数值张牌.</br><font color=#F0F>【天威】</font>当你使用杀指定唯一目标时,若其体力值小于你,可令其获得【晕眩】1回合.锁定技,你造成【内伤】状态时,无视目标30%体力.</br><font color=#F0F>【元婴出世】</font>体力40%以上免疫【内伤】;摸牌阶段摸牌数、手牌上限+1;回合开始时随机移除1~2项异常状态.',
							group: ['XK_tianyuan', 'XK_tianwei', 'XK_yuanying', 'XK_yuanying1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_tianyuan: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'damageEnd',
							},
							forced: true,
							filter(event, player) {
								return event.num > 0;
							},
							prompt2(event, player) {
								return '是否进行一次判定？若结果为红色,你回复1点体力,否则你摸伤害数值张牌.';
							},
							content() {
								'step 0';
								if (player.name == 'XK_xuziyi') {
									game.playAudio('../extension/侠客风云传/audio/XK_tianyuan2.mp3');
								} else {
									game.playAudio('../extension/侠客风云传/audio/XK_tianyuan1.mp3');
								}
								player.judge('天元', function (card) {
									if (get.color(card) == 'red') return 3;
									return -3;
								});
								('step 1');
								if (result.bool == true) {
									player.recover();
								} else {
									player.draw(trigger.num);
								}
							},
						},
						XK_tianwei: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'shaBegin',
							},
							prompt2(event, player) {
								return '是否令' + get.translation(event.target) + '获得【晕眩】1回合？';
							},
							check(event, player) {
								return get.attitude(player, event.target) <= 0;
							},
							filter(event, player) {
								return player.hp > event.target.hp && event.targets.length == 1;
							},
							_priority: 8,
							audio: 'ext:侠客风云传/audio:1',
							content() {
								trigger.target.addBuff('XK_yunxuan', 1, player);
							},
							ai: {
								expose: 0.4,
								XK_wushi: true,
							},
						},
						XK_wuyagushenggong: {
							description: '<font color=#F0F>【左右互搏】</font>你指定1名目标的基本/普通锦囊牌结算完成后,可进行一次判定,若结果不为♠️️,此牌额外结算1次.</br><font color=#F0F>【乾坤挪移】</font>每回合限1次,当1名其他角色使用带有伤害标签的牌指定1名目标后,你可为此牌重新指定来源和目标;你的体力减少后,重置此技能.</br><font color=#F0F>【元婴出世】</font>体力40%以上免疫【内伤】;摸牌阶段摸牌数、手牌上限+1;回合开始时随机移除1~2项异常状态.',
							group: ['XK_zuoyouhubo', 'XK_qiankunnuoyi', 'XK_qiankunnuoyi1', 'XK_yuanying', 'XK_yuanying1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_zuoyouhubo: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'useCardAfter',
							},
							usable: 5, //QQQ
							filter(event, player) {
								if (event.getParent(2).skill == 'XK_zuoyouhubo') return false;
								var tp = get.type(event.card);
								if (tp != 'basic' && tp != 'trick') return false;
								return event.targets.length == 1 && event.targets[0].isAlive();
							},
							forced: true,
							prompt2(event, player) {
								return '是否进行一次判定？若结果不为♠️️,你对' + get.translation(event.targets) + '使用的' + get.translation(event.card) + '额外结算一次.';
							},
							content() {
								'step 0';
								player.judge('左右互搏', function (card) {
									if (card.suit != 'spade') return 3;
									return -3;
								});
								('step 1');
								if (result.bool == true) {
									player.useCard(trigger.card, trigger.cards, trigger.targets, false);
								}
							},
						},
						XK_qiankunnuoyi: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								global: 'useCardBefore',
							},
							filter(event, player) {
								if (player.hasSkill('XK_qiankunnuoyi2')) return false;
								if (event.player == player) return false;
								if (!get.tag(event.card, 'damage')) return false;
								if (event.targets.length != 1) return false;
								return true;
							},
							check(event, player) {
								var eff = get.effect(event.targets[0], event.card, event.player, player);
								return eff < 0;
							},
							prompt2(event, player) {
								return '是否为' + get.translation(event.player) + '指定' + get.translation(event.targets[0]) + '为目标的' + get.translation(event.card) + '重新指定使用者和目标？';
							},
							content() {
								'step 0';
								var targetprompt = ['使用', '目标'];
								player
									.chooseTarget(2, '为' + get.translation(trigger.card) + '重新指定使用者和目标.', function (card, player, target) {
										if (!ui.selected.targets.length) return true;
										else {
											var cd = _status.event.getTrigger().card;
											var tp = ui.selected.targets[0];
											return lib.filter.targetEnabled(cd, tp, target);
										}
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										var card = _status.event.getTrigger().card;
										var att = get.attitude(player, target);
										if (ui.selected.targets.length == 1) {
											return -att;
										} else {
											if (target == player) return 15;
											return att;
										}
									})
									.set('targetprompt', targetprompt);
								('step 1');
								if (result.bool) {
									player.addTempSkill('XK_qiankunnuoyi2');
									trigger.player = result.targets[0];
									trigger.targets[0] = result.targets[1];
									game.log(player, '为', trigger.card, '重新指定了使用者和目标.');
								}
							},
							ai: {
								expose: 0.5,
							},
						},
						XK_qiankunnuoyi1: {
							trigger: {
								player: ['changeHp'],
							},
							forced: true,
							filter(event, player) {
								return event.num < 0 && player.hasSkill('XK_qiankunnuoyi2');
							},
							content() {
								player.removeSkill('XK_qiankunnuoyi2');
							},
						},
						XK_qiankunnuoyi2: {},
						XK_wudijixianliu: {
							description: '<font color=#F0F>【升龙拳】</font>每回合限1次,你的杀或指定你为目标的杀结算完成后,你可展示牌堆顶3张牌并使用其中1张基本牌,若无牌可用,你获得随机2项增益状态2回合.</br><font color=#F0F>【气功波】</font>出牌阶段限1次,你可弃置任意张牌视为对目标使用任意1张不计次数的杀,如此你获得【杀意波动】2回合且此杀需等量的闪响应.',
							trigger: {
								player: 'phaseBefore',
							},
							_priority: 999,
							filter(event, player) {
								return player.name != 'XK_weiming';
							},
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio', player.name);
							},
							group: ['XK_shenglongquan', 'XK_qigongbo', 'XK_qigongbo1'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_shenglongquan: {
							audio: 'ext:侠客风云传/audio:1',
							_priority: 9,
							trigger: {
								global: 'useCardAfter',
							},
							firstDo: true,
							_priority: 98,
							filter(event, player) {
								if (!event.card || event.card.name != 'sha') return false;
								if (event.player == player) return !event.targets.includes(player);
								else return event.targets.includes(player);
							},
							usable: 1,
							forced: true,
							prompt2(event, player) {
								return '展示牌堆顶3张牌并使用其中1张基本牌？若无牌可用,你获得随机2项增益状态2回合.';
							},
							content() {
								'step 0';
								event.cars = get.cards(3);
								player.showCards(event.cars);
								('step 1');
								event.cardx = [];
								for (var i = 0; i < event.cars.length; i++) {
									if (get.type(event.cars[i]) == 'basic' && lib.filter.cardEnabled(event.cars[i], player)) {
										event.cardx.push(event.cars[i]);
										event.cars.splice(i--, 1);
									}
								}
								game.cardsDiscard(event.cars);
								if (!event.cardx.length) {
									var bufflist = ['XK_shenxing', 'XK_bati', 'XK_lianzhu', 'XK_feiyantai', 'XK_juqi', 'XK_xiejin', 'XK_shipo', 'XK_zhuihun', 'XK_jinghua', 'XK_ganzhi', 'XK_fanshou', 'XK_guiyuan', 'XK_wuzhao', 'XK_xingfen', 'XK_xinjian'];
									var sk = bufflist.randomGets(2);
									player.addBuff(sk[0], 2, player);
									player.addBuff(sk[1], 2, player);
									event.finish();
								} else {
									player.chooseCardButton(get.prompt('XK_shenglongquan'), '选择使用其中1张基本牌', event.cardx, false).ai = function (button) {
										return get.value(button.link);
									};
								}
								('step 2');
								if (result.links?.length) {
									player.chooseUseTarget(result.links[0], false, false);
								}
							},
							ai: {
								XK_selfbuff: true,
								effect: {
									target(card, player, target) {
										if (card.name == 'sha') {
											if (!target.hasFriend()) return;
											return 0.5;
										}
									},
								},
							},
						},
						XK_qigongbo: {
							audio: 'ext:侠客风云传/audio:1',
							enable: 'phaseUse',
							filterTarget(card, player, target) {
								return target != player;
							},
							filter(event, player) {
								if (player.getCardUsable('sha') == 0) return false;
								return player.countCards('h');
							},
							usable: 1,
							selectTarget: 1,
							position: 'he',
							filterCard: true,
							selectCard: [1, Infinity],
							check(card) {
								if (ui.selected.cards.length == 0) {
									return 5 - get.value(card);
								} else if (ui.selected.cards.length == 1) {
									return 3 - get.value(card);
								}
								return -1;
							},
							content() {
								'step 0';
								var basiclist = [];
								basiclist.push(['基本', '', 'sha']);
								basiclist.push(['基本', '', 'sha', 'fire']);
								basiclist.push(['基本', '', 'sha', 'thunder']);
								player.chooseButton(['视为对' + get.translation(target) + '使用1张杀', [basiclist, 'vcard']]).set('ai', function (button) {
									var card = { name: button.link[2], nature: button.link[3] };
									var eff = get.effect(target, card, player, player);
									return eff;
								});
								('step 1');
								if (result.links?.length) {
									player.addBuff('XK_shayibodong', 2, player);
									event.ShanNum = cards.length;
									var card1 = { name: result.links[0][2], nature: result.links[0][3] };
									player.useCard(card1, target, false);
								}
							},
							ai: {
								XK_selfbuff: true,
								order() {
									return get.order({ name: 'sha' }) + 0.05;
								},
								result: {
									player: 1,
									target(player, target, card) {
										var eff1 = get.effect(target, { name: 'sha' }, player, target);
										var eff2 = get.effect(target, { name: 'sha', nature: 'fire' }, player, target);
										var eff3 = get.effect(target, { name: 'sha', nature: 'thunder' }, player, target);
										var eff = Math.max(eff1, eff2, eff3);
										return eff;
									},
								},
							},
						},
						XK_qigongbo1: {
							trigger: {
								player: 'shaBegin',
							},
							forced: true,
							filter(event, player) {
								return !event.directHit && event.getParent(2).name == 'XK_qigongbo' && event.getParent(2).ShanNum > 0;
							},
							_priority: -1,
							content() {
								var num1 = trigger.getParent(2).ShanNum - 1;
								if (typeof trigger.shanRequired == 'number') {
									trigger.shanRequired += num1;
								} else {
									trigger.shanRequired = 1 + num1;
								}
							},
						},
						XK_fenghuaxueyue: {
							description: '<font color=#F0F>【飞燕凌波】</font>出牌阶段每名其他角色限1次,你可令其选择是否展示2张手牌,若其展示你可交给其1张与这之类别均不同的手牌,其回复1点体力并获得【神行】1回合.</br><font color=#F0F>【空山鸣涧】</font>其他角色回复体力后,若其武将牌状态与你不同,你可令其变更至与你相同,如此你获得【归元】2回合.',
							trigger: {
								player: 'phaseBefore',
							},
							_priority: 999,
							filter(event, player) {
								return player.name != 'XK_weiming';
							},
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio', player.name);
							},
							group: ['XK_feiyanlingbo', 'XK_kongshanmingjian'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_feiyanlingbo: {
							enable: 'phaseUse',
							filter(event, player) {
								if (!player.countCards('h')) return false;
								return game.hasPlayer(function (current) {
									return current != player && !current.hasSkill('XK_feiyanlingbo1') && current.countCards('h') > 1;
								});
							},
							filterTarget(card, player, target) {
								return player != target && !target.hasSkill('XK_feiyanlingbo1') && target.countCards('h') > 1;
							},
							content() {
								'step 0';
								if (!target.hasSkill('XK_feiyanlingbo1')) {
									target.addTempSkill('XK_feiyanlingbo1');
								}
								target.chooseCard('【飞燕凌波】:是否展示2张手牌？若展示,' + get.translation(player) + '可交给你1张与这些牌类别均不同的牌,回复1点体力并获得【神行】1回合.', 'h', 2).ai = function (card) {
									return 5 - get.value(card);
								};
								('step 1');
								if (result.cards?.length) {
									event.cars = result.cards;
									target.showCards('【飞燕凌波】', event.cars);
									player
										.chooseCardButton(get.prompt('XK_feiyanlingbo'), '是否交给' + get.translation(target) + '1张与' + get.translation(event.cars) + '类型均不相同的牌,令其回复1点体力？', 1, player.getCards('h'))
										.set('filterButton', function (button) {
											var type = get.type(button.link);
											for (var i = 0; i < event.cars.length; i++) {
												if (get.type(event.cars[i]) == type) return false;
											}
											return true;
										})
										.set('ai', function (button) {
											if (target.isHealthy()) return -1;
											var att = get.attitude(player, target);
											if (att <= 0) return -1;
											return Math.random();
										});
								} else {
									game.log(target, '拒绝展示手牌');
									event.finish();
								}
								('step 2');
								if (result.links?.length) {
									target.gain(result.links, player, 'giveAuto');
									target.addBuff('XK_shenxing', 1, player);
									target.recover();
								}
							},
							ai: {
								order: 9,
								result: {
									target(player, target) {
										return 2;
									},
								},
								expose: 0.3,
							},
						},
						XK_feiyanlingbo1: {},
						XK_kongshanmingjian: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								global: 'recoverEnd',
							},
							filter(event, player) {
								if (event.player == player || event.num <= 0) return false;
								if ((player.isLinked() && !event.player.isLinked()) || (!player.isLinked() && event.player.isLinked())) return true;
								if ((player.isTurnedOver() && !event.player.isTurnedOver()) || (!player.isTurnedOver() && event.player.isTurnedOver())) return true;
								return false;
							},
							check(event, player) {
								var att = get.attitude(player, event.player);
								if (player.isLinked() || player.isTurnedOver()) return att <= 0;
								if (event.player.isLinked() || event.player.isTurnedOver()) return att > 0;
							},
							prompt2(event, player) {
								return '是否令' + get.translation(event.player) + '其武将牌状态变更至与你相同？此你获得【归元】2回合.';
							},
							content() {
								'step 0';
								if (player.isLinked() || trigger.player.isLinked()) trigger.player.link();
								if (player.isTurnedOver() || trigger.player.isTurnedOver()) trigger.player.turnOver();
								player.addBuff('XK_guiyuan', 2, player);
							},
						},
						XK_mantianliuxing: {
							description: '<font color=#F0F>【披星戴月】</font>出牌阶段,每当你达成以下条件后,可重铸1张牌:使用1张装备牌;回复体力;造成伤害.</br><font color=#F0F>【星火燎原】</font>弃牌阶段开始,你可弃置至多X张牌令等量其他角色获得【流血】【目盲】2回合,X为本回合达成【披星戴月】的项数,若X为3你摸1张牌.',
							trigger: {
								player: 'phaseBefore',
							},
							init(player) {
								player.storage.XK_pixingdaiyue = [];
							},
							_priority: 999,
							filter(event, player) {
								return player.name != 'XK_weiming';
							},
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio', player.name);
							},
							group: ['XK_pixingdaiyue', 'XK_pixingdaiyue1', 'XK_xinghuoliaoyuan'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_pixingdaiyue: {
							trigger: {
								player: ['equipAfter', 'recoverAfter'],
								source: ['damageAfter'],
							},
							filter(event, player) {
								return player.isPhaseUsing();
							},
							forced: true,
							content() {
								'step 0';
								if (trigger.name == 'equip') {
									if (!player.storage.XK_pixingdaiyue.includes('equip')) player.storage.XK_pixingdaiyue.push('equip');
								}
								if (trigger.name == 'recover') {
									if (!player.storage.XK_pixingdaiyue.includes('recover')) player.storage.XK_pixingdaiyue.push('recover');
								}
								if (trigger.name == 'damage') {
									if (!player.storage.XK_pixingdaiyue.includes('damage')) player.storage.XK_pixingdaiyue.push('damage');
								}
								('step 1');
								player.chooseCardButton('【披星戴月】:是否重铸1张牌？', player.getCards('he'), false).ai = function (button) {
									return 5 - get.value(button.link);
								};
								('step 2');
								if (result.links?.length) {
									var cards = result.links;
									player.lose(cards, ui.discardPile);
									player.$throw(cards, 1000);
									game.log(player, '将', cards, '置入了弃牌堆');
									event.draw = { bool: true, num: cards.length };
								} else event.finish();
								('step 3');
								if (event.draw && event.draw.bool) {
									player.draw(event.draw.num);
								}
							},
						},
						XK_pixingdaiyue1: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.storage.XK_pixingdaiyue != [];
							},
							_priority: 23,
							forced: true,
							content() {
								player.storage.XK_pixingdaiyue = [];
							},
						},
						XK_xinghuoliaoyuan: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'phaseDiscardBefore',
							},
							forced: true,
							filter(event, player) {
								if (!player.countCards('h')) return false;
								return player.storage.XK_pixingdaiyue && player.storage.XK_pixingdaiyue.length;
							},
							content() {
								'step 0';
								if (player.storage.XK_pixingdaiyue.length == 3) {
									player.draw();
								}
								player.chooseCardTarget({
									filterCard(card) {
										return true;
									},
									position: 'he',
									selectCard() {
										var player = _status.event.player;
										return [1, player.storage.XK_pixingdaiyue.length];
									},
									selectTarget() {
										var num1 = ui.selected.cards.length;
										return ui.selected.cards.length;
									},
									filterTarget(card, player, target) {
										return player != target;
									},
									ai1(card) {
										return 4.5 - get.value(card);
									},
									ai2(target) {
										return -get.attitude(_status.event.player, target);
									},
									prompt: '是否发动【星火燎原】？</br></br>你可弃置至多' + player.storage.XK_pixingdaiyue.length + '张牌令等量其他角色获得【流血】【目盲】2回合？',
								});
								('step 1');
								if (result.cards?.length) {
									player.discard(result.cards);
									var tars = result.targets;
									for (var i = 0; i < tars.length; i++) {
										tars[i].addBuff('XK_liuxue', 2, player);
										tars[i].addBuff('XK_mumang', 2, player);
									}
								}
							},
							ai: {
								combo: 'XK_pixingdaiyue',
								expose: 0.4,
							},
						},
						XK_dashipomizhou: {
							description: '<font color=#F0F>【妙觉】</font>若你的体力不大于50%,可将1张手牌当作闪使用或打出.锁定技,免疫【内伤】状态.</br><font color=#F0F>【转轮】</font>当你受到伤害后,若体力小于70%,可随机移除1项负面状态并获得【气盾】【噬气】2回合.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫【内伤】;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.',
							group: ['XK_miaojue', 'XK_miaojue1', 'XK_zhuanlun1', 'XK_dazhoutian', 'XK_dazhoutian1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_miaojue: {
							audio: 'ext:侠客风云传/audio:1',
							enable: ['chooseToRespond', 'chooseToUse'],
							filterCard(card) {
								return true;
							},
							viewAs: { name: 'shan' },
							viewAsFilter(player) {
								if (!player.checkHp(0.5, 'equal')) return false;
								if (!player.countCards('h')) return false;
							},
							prompt: '将一张手牌当闪使用或打出',
							check() {
								return 1;
							},
							ai: {
								respondShan: true,
								skillTagFilter(player) {
									if (!player.checkHp(0.5, 'equal')) return false;
									if (!player.countCards('h')) return false;
								},
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'respondShan') && current < 0) return 0.8;
									},
								},
							},
						},
						XK_miaojue1: {
							trigger: {
								player: 'addBuffBegin',
							},
							filter(event, player) {
								return event.skill == 'XK_neishang';
							},
							_priority: 89,
							forced: true,
							content() {
								trigger.cancel();
							},
						},
						XK_zhuanlun1: {
							trigger: {
								player: ['damageAfter'],
							},
							audio: 'ext:侠客风云传/audio:1',
							forced: true,
							prompt2(event, player) {
								return '是否随机移除一项异常状态,并获得【气盾】【噬气】2回合？';
							},
							_priority: 7,
							filter(event, player) {
								return player.checkHp(0.7, 'unequal');
							},
							content() {
								'step 0';
								player.removeBuff('XK_debuff', 1, 1, false, false);
								('step 1');
								player.addBuff('XK_qidun', 2, player);
								player.addBuff('XK_shiqi', 2, player);
							},
							ai: {
								XK_selfbuff: true,
								threaten: 0.8,
							},
						},
						XK_xixingdafaex: {
							group: ['XK_xixingsk', 'XK_xixingsk1', 'XK_shangqing', 'XK_yuanying', 'XK_yuanying1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_xixingdafa: {
							description: '<font color=#F0F>【吸星】</font>锁定技,你即将造成的伤害视为体力流失;其他角色因【吸星】流失体力后,你可获得其1张手牌.</br><font color=#F0F>【上清】</font>当你使用杀指定唯一目标时,若你手牌数大于目标,可获得其随机1项增益状态;若小于目标,其获得你随机1项负面状态.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫【内伤】;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.',
							group: ['XK_xixingsk', 'XK_xixingsk1', 'XK_shangqing', 'XK_dazhoutian', 'XK_dazhoutian1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_xixingsk: {
							trigger: { source: 'damageBefore' },
							forced: true,
							_priority: 15,
							content() {
								'step 0';
								if (player.storage.XK_xixingmiji_mark) {
									player.chooseBool(get.prompt('XK_xixingsk'), '是否使你对' + get.translation(trigger.player) + '造成的伤害视为体力流失？').set('ai', function () {
										var tar = _status.event.getTrigger().player;
										var att = get.attitude(player, tar);
										if (tar.hasSkill('XK_yijinjing')) return att > 0;
										if (tar.hasSkillTag('maixie')) return att <= 0;
										return true;
									});
								} else event.goto(2);
								('step 1');
								if (result.bool) event.goto(2);
								else event.finish();
								('step 2');
								if (player.name == 'XK_riyuejiaozhu') {
									game.playAudio('../extension/侠客风云传/audio/XK_xixingsk1.mp3');
								}
								trigger.cancel();
								trigger.player.loseHp(trigger.num);
							},
							ai: {
								jueqing: true,
							},
						},
						XK_xixingsk1: {
							trigger: { global: 'loseHpEnd' },
							forced: true,
							filter(event, player) {
								return event.getParent(2).skill == 'XK_xixingsk';
							},
							content() {
								'step 0';
								player.gainPlayerCard('【吸星】:你可以获得' + get.translation(trigger.player) + '的1张手牌.', 'h', trigger.player, false);
								('step 1');
								if (result.bool) {
									if (player.name == 'XK_riyuejiaozhu') {
										game.playAudio('../extension/侠客风云传/audio/XK_xixingsk2.mp3');
									}
								}
							},
						},
						//当你使用杀指定唯一目标时,若你手牌数大于目标,可获得其随机1项增益状态;若小于目标,其获得你随机1项负面状态
						XK_shangqing: {
							//audio:"ext:侠客风云传/audio:1",
							trigger: {
								player: 'useCardToPlayer',
							},
							filter(event, player) {
								if (event.parent.targets.length != 1 || event.card.name != 'sha') return false;
								if (player.countCards('h') > event.target.countCards('h')) return event.target.hasSkillTag('XK_buff');
								if (player.countCards('h') < event.target.countCards('h')) return player.hasSkillTag('XK_debuff');
								return false;
							},
							check(event, player) {
								return get.attitude(player, event.target) <= 0;
							},
							prompt2(event, player) {
								var str = '';
								if (player.countCards('h') > event.target.countCards('h')) str = '是否获得' + get.translation(event.target) + '的随机一项增益状态？';
								if (player.countCards('h') < event.target.countCards('h')) str = '是否令' + get.translation(event.target) + '获得你的随机一项负面状态？';
								return str;
							},
							content() {
								'step 0';
								if (player.name == 'XK_riyuejiaozhu') {
									game.playAudio('../extension/侠客风云传/audio/XK_shangqing2.mp3');
								} else {
									game.playAudio('../extension/侠客风云传/audio/XK_shangqing1.mp3');
								}
								if (player.countCards('h') > trigger.target.countCards('h')) {
									var bufflist = trigger.target.getXKBuff('XK_buff');
									bufflist.sort(lib.sort.random);
									if (bufflist[0]) {
										//QQQ
										var skill = bufflist[0][0],
											num = bufflist[0][1];
										trigger.target.deleteBuff(skill);
										player.addBuff(skill, num, player);
									}
								} else if (player.countCards('h') < trigger.target.countCards('h')) {
									var debufflist = player.getXKBuff('XK_debuff');
									debufflist.sort(lib.sort.random);
									if (debufflist[0]) {
										var skill = debufflist[0][0],
											num = debufflist[0][1]; //QQQ
										player.deleteBuff(skill);
										trigger.target.addBuff(skill, num, player);
									}
								}
							},
							ai: { XK_selfbuff: true },
						},
						XK_zilingnichang: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_weiziling';
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_weiziling.mp3');
							},
							group: ['XK_qingyunbiyue', 'XK_liufenghuixue'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_qingyunbiyue: {
							trigger: {
								player: ['chooseToCompareAfter', 'compareMultipleAfter'],
								target: ['chooseToCompareAfter', 'compareMultipleAfter'],
							},
							filter(event, player) {
								if (event.preserve) return false;
								if (player == event.player) {
									if (event.num1 != event.num2) {
										return !get.owner(event.card1);
									}
								} else {
									if (event.num1 != event.num2) {
										return !get.owner(event.card2);
									}
								}
								return false;
							},
							forced: true,
							content() {
								'step 0';
								if (player == trigger.player) {
									if (trigger.num1 > trigger.num2) {
										player.addBuff('XK_shiqi', 2, player);
									} else player.gain(trigger.card2, 'gain2');
									game.playAudio('../extension/侠客风云传/audio/XK_qingyunbiyue1.mp3');
								} else {
									if (trigger.num1 < trigger.num2) {
										player.addBuff('XK_shiqi', 2, player);
									} else player.gain(trigger.card1, 'gain2');
									game.playAudio('../extension/侠客风云传/audio/XK_qingyunbiyue2.mp3');
								}
							},
						},
						XK_liufenghuixue: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'shaBegin',
							},
							_priority: 17,
							check(event, player) {
								if (get.attitude(player, event.target) > 0) return false;
								var hs = player.getCards('h');
								if (hs.length < 3) return 0;
								var bool = false;
								for (var i = 0; i < hs.length; i++) {
									if (hs[i].number >= 9 && get.value(hs[i]) < 7) {
										bool = true;
										break;
									}
								}
								return bool;
							},
							prompt2(event, player) {
								return '是否与' + get.translation(event.target) + '拼点？若你赢,你令其获得【刺目】【恐惧】1回合;否则,你获得【散功】2回合.';
							},
							filter(event, player) {
								return player.canCompare(event.target);
							},
							content() {
								'step 0';
								player.chooseToCompare(trigger.target);
								('step 1');
								if (result.bool) {
									trigger.target.addBuff('XK_cimu', 1, player);
									trigger.target.addBuff('XK_kongju', 1, player);
								} else player.addBuff('XK_sangong', 2, player);
							},
						},
						XK_longtengbaobian: {
							group: ['XK_yiyanglaifu', 'XK_xiaozhoutian'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_yiyanglaifu: {
							audio: 'ext:侠客风云传/audio:1',
							_priority: -1,
							trigger: {
								player: 'addBuffBegin',
							},
							filter(event, player) {
								var info = lib.skill[event.skill];
								if (!info.ai || !info.ai['XK_debuff']) return false;
								if (!player.countCards('h')) return false;
								return game.hasPlayer(function (current) {
									return current != player && player.inRange(current) && current.countCards('h');
								});
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('XK_yiyanglaifu'), '是否选择任意名你攻击范围内的角色？你们同时选择1张手牌,花色与你不同的角色也成获得【' + get.translation(trigger.skill) + '】状态.', [1, Infinity], function (card, player, target) {
										var sk = _status.event.getTrigger().skill;
										return target.countCards('h') && player.inRange(target) && !target.hasSkill(sk);
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 1');
								if (result.targets?.length) {
									var tars = result.targets;
									event.targets = tars.sort(lib.sort.seat);
									player.chooseCard('h', 1, '选择一张手牌', true).set('ai', function (card) {
										return Math.random();
									});
								} else event.finish();
								('step 2');
								if (result.cards?.length) {
									event.st = result.cards[0].suit;
								}
								('step 3');
								if (event.targets.length) {
									event.tg = event.targets.shift();
									event.tg.chooseCard('h', 1, '选择一张手牌', true).set('ai', function (card) {
										return Math.random();
									});
								} else event.finish();
								('step 4');
								if (result.cards[0].suit != event.st) {
									game.log('【一阳来复】', event.tg, '选择的手牌花色与', player, '不同');
									event.tg.addBuff(trigger.skill, trigger.num, trigger.source);
								}
								event.goto(3);
							},
							ai: {
								expose: 0.3,
							},
						},
						XK_zhanguosha: {
							trigger: {
								player: 'phaseBefore',
							},
							_priority: 999,
							filter(event, player) {
								return player.name == 'XK_heizhongluowang';
							},
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_heizhongluowang.mp3');
							},
							group: ['XK_yingfenshen', 'XK_hongxiutianxiang'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_yingfenshen: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'gainAfter',
							},
							forced: true,
							filter(event, player) {
								if (event.getParent(2).name == 'phaseDraw') return false;
								return event.cards && event.cards.length && player.countCards('he');
							},
							content() {
								'step 0';
								player.chooseCardTarget({
									filterCard(card) {
										return true;
									},
									position: 'he',
									selectCard: 1,
									selectTarget: 1,
									filterTarget(card, player, target) {
										return player != target && player.inRange(target);
									},
									ai1(card) {
										return 4 - get.value(card);
									},
									ai2(target) {
										var eff1 = get.effect(player, { name: 'sha' }, trigger.player, player);
										var eff2 = get.effect(target, { name: 'sha', nature: 'fire' }, trigger.player, player);
										var eff3 = get.effect(target, { name: 'sha', nature: 'thunder' }, trigger.player, player);
										return Math.max(eff1, eff2, eff3);
									},
									prompt: '是否发动【影分身幻杀】？</br></br>你可交给攻击范围内的1名其他角色1张牌,如此你视为对其使用任意一张不计次数的杀.',
								});
								('step 1');
								if (result.targets?.length) {
									result.targets[0].gain(result.cards[0], player, 'giveAuto');
									event.tar = result.targets[0];
								} else event.finish();
								('step 2');
								var basiclist = [];
								basiclist.push(['基本', '', 'sha']);
								basiclist.push(['基本', '', 'sha', 'fire']);
								basiclist.push(['基本', '', 'sha', 'thunder']);
								player.chooseButton(true, ['视为对' + get.translation(event.tar) + '使用1张杀', [basiclist, 'vcard']]).set('ai', function (button) {
									var card = { name: button.link[2], nature: button.link[3] };
									var eff = get.effect(event.tar, card, player, player);
									return eff;
								});
								('step 3');
								if (result.links?.length) {
									var card1 = { name: result.links[0][2], nature: result.links[0][3] };
									player.useCard(card1, event.tar, false);
								}
							},
							ai: {
								expose: 0.3,
								effect: {
									target(card, player, target) {
										if (card.name == 'zengbin') return [1, 2];
									},
								},
							},
						},
						XK_hongxiutianxiang: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								source: 'damageEnd',
							},
							_priority: 8,
							filter(event, player) {
								return event.card && event.card.name == 'sha' && event.notLink() && event.num > 0;
							},
							forced: true,
							content() {
								if (!trigger.nature) {
									trigger.player.addBuff('XK_pojia', 1, player);
								} else if (trigger.nature == 'thunder') {
									trigger.player.addBuff('XK_zhongshang', 1, player);
								} else {
									trigger.player.addBuff('XK_neishang', 1, player);
								}
							},
						},
						XK_sanqianruoshui: {
							group: ['XK_huanshen', 'XK_shenyou', 'XK_yuanying', 'XK_yuanying1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_huanshen: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								global: 'judge',
							},
							usable: 3,
							_priority: 3,
							check(event, player) {
								var res = event.judge(event.player.judging[0]);
								var att = get.attitude(player, event.player);
								return att * res >= 0;
							},
							prompt2(event, player) {
								var str = get.translation(event.player) + '的' + (event.judgestr || '') + '判定为' + get.translation(event.player.judging[0]) + '.';
								return str + '是否展示牌堆顶1张牌,用其代替并获得该判定牌？';
							},
							content() {
								'step 0';
								event.cards = get.cards();
								player.showCards(event.cards);
								player.respond(event.cards[0], 'highlight');
								if (trigger.player.judging[0].clone) {
									trigger.player.judging[0].clone.classList.remove('thrownhighlight');
									game.broadcast(function (card) {
										if (card.clone) {
											card.clone.classList.remove('thrownhighlight');
										}
									}, trigger.player.judging[0]);
									game.addVideo('deletenode', player, get.cardsInfo([trigger.player.judging[0].clone]));
								}
								player.$gain2(trigger.player.judging[0]);
								player.gain(trigger.player.judging[0]);
								trigger.player.judging[0] = event.cards[0];
								if (!get.owner(event.cards[0], 'judge')) {
									trigger.position.appendChild(event.cards[0]);
								}
								game.log(trigger.player, '的判定牌改为', event.cards[0]);
								('step 1');
								if (player.hasSkill('XK_huanshen1')) player.chooseToDiscard(1, 'he', true);
								else player.addTempSkill('XK_huanshen1', 'roundStart');
							},
							ai: {
								expose: 0.2,
								threaten: 1.2,
								effect: {
									player(card, player) {
										if (card.name == 'shandian' || card.name == 'fulei') {
											return [1, 3];
										}
									},
								},
								tag: {
									rejudge: 1,
								},
							},
						},
						XK_huanshen1: {},
						XK_shenyou: {
							trigger: {
								player: 'discardAfter',
							},
							filter(event, player) {
								return event.cards && event.cards.length;
							},
							forced: true,
							audio: 'ext:侠客风云传/audio:1',
							content() {
								player.addBuff('XK_shenxing', 2, player);
							},
							ai: {
								effect: {
									target(card, player, target) {
										if (card.name == 'guohe') return 0.5;
									},
								},
							},
						},
						XK_kongmingquan: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_tianjilaodao';
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_tianjilaodao.mp3');
							},
							group: ['XK_shencangruoxu', 'XK_miaoshoukongkong'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_shencangruoxu: {
							audio: 'ext:侠客风云传/audio:1',
							_priority: 11,
							usable: 1,
							trigger: {
								player: ['shaAfter'],
							},
							filter(event, player) {
								if (event.getParent(3).skill == 'XK_shencangruoxu') return false;
								return event.target.isAlive();
							},
							check(event, player) {
								return get.effect(event.target, event.card, player, player) >= 0;
							},
							prompt2(event, player) {
								return '是否进行一次判定？若结果不为黑色,' + get.translation(event.card) + '对' + get.translation(event.target) + '额外结算1次.';
							},
							content() {
								'step 0';
								player.judge('深藏若虚', function (card) {
									if (get.color(card) != 'black') return 3;
									return -3;
								});
								('step 1');
								if (result.bool == true) {
									player.useCard(trigger.card, trigger.cards, trigger.target, false);
								}
							},
							ai: {
								expose: 0.3,
							},
						},
						XK_miaoshoukongkong: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								global: 'judge',
							},
							filter(event, player) {
								return player.countCards('h', { color: 'red' }) > 0;
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('XK_miaoshoukongkong'), 'h', function (card) {
										return get.color(card) != 'black';
									})
									.set('ai', function (card) {
										var trigger = _status.event.getTrigger();
										var player = _status.event.player;
										var judging = _status.event.judging;
										var result = trigger.judge(card) - trigger.judge(judging);
										var attitude = get.attitude(player, trigger.player);
										if (attitude == 0 || result == 0) return 0;
										if (attitude > 0) {
											return result;
										} else {
											return -result;
										}
									})
									.set('judging', trigger.player.judging[0]);
								('step 1');
								if (result.cards?.length) {
									player.respond(result.cards, 'highlight', 'XK_miaoshoukongkong');
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool) {
									player.$gain2(trigger.player.judging[0]);
									player.gain(trigger.player.judging[0]);
									trigger.player.judging[0] = result.cards[0];
									if (!get.owner(result.cards[0], 'judge')) {
										trigger.position.appendChild(result.cards[0]);
									}
									game.log(trigger.player, '的判定牌改为', result.cards[0]);
								}
								('step 3');
							},
							ai: {
								tag: {
									rejudge: 1,
								},
							},
						},
						XK_xiantiangong: {
							group: ['XK_xiantian', 'XK_qiyun', 'XK_dazhoutian', 'XK_dazhoutian1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_xiantian: {
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							filter(event, player) {
								return !player.checkHp(0.5, 'unequal');
							},
							_priority: 7,
							forced: true,
							content() {
								player.addBuff('XK_xiantiangangqi', 2, player);
							},
							ai: { XK_selfbuff: true },
						},
						XK_qiyun: {
							trigger: {
								player: 'phaseAfter',
							},
							_priority: 4,
							filter(event, player) {
								return player.isDamaged();
							},
							check(event, player) {
								if (player.isTurnedOver()) return true;
								if (player.checkHp(0.6, 'unequal') && !player.hasSkill('XK_xiantiangangqi')) return true;
								return player.hp <= 1;
							},
							prompt2(event, player) {
								return '是否将武将牌翻面？如此你回复1点体力并摸2张牌.';
							},
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_qiyun1.mp3');
								player.turnOver();
								player.recover();
								player.draw(2);
							},
						},
						XK_taijijianfa: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_zhuorenqing';
							},
							init(player) {
								player.storage.XK_taijihuaqing = 0;
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_zhuorenqing.mp3');
							},
							group: ['XK_yuanzhuantaixu', 'XK_taijihuaqing', 'XK_taijihuaqing1'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_yuanzhuantaixu: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								target: 'useCardToTarget',
							},
							forced: true,
							filter(event, player, name) {
								if (event.player == player) return false;
								if (event.targets.length > 1) return false;
								return get.tag(event.card, 'damage') && player.countCards('h', { type: 'equip' });
							},
							content() {
								'step 0';
								player.chooseCardTarget({
									filterCard(card) {
										return get.type(card) == 'equip';
									},
									position: 'h',
									selectCard: 1,
									selectTarget: 1,
									filterTarget(card, player, target) {
										var trigger = _status.event.getTrigger();
										return player != target && target != trigger.player;
									},
									ai1(card) {
										return 5 - get.value(card);
									},
									ai2(target) {
										var trigger = _status.event.getTrigger();
										var eff1 = get.effect(player, trigger.card, trigger.player, player);
										var eff2 = get.effect(target, trigger.card, trigger.player, player);
										if (eff1 < 0) {
											return eff2;
										} else return 0;
									},
									prompt: '是否发动【圆转太虚】？</br></br>你可将1张装备牌置于一名其他角色的装备区,如此,其代替你成为目标.',
								});
								('step 1');
								if (result.targets?.length) {
									result.targets[0].gain(result.cards[0], player, 'giveAuto');
									result.targets[0].equip(result.cards[0]);
									var evt = trigger.parent;
									evt.targets.remove(player);
									evt.targets.add(result.targets[0]);
									game.log(result.targets[0], '代替', player, '成为了', trigger.card, '的目标.');
								}
							},
							ai: {
								expose: 0.3,
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'damage') && target.countCards('h') > 2) return 0.5;
									},
								},
							},
						},
						XK_taijihuaqing: {
							trigger: {
								global: ['changeHp'],
							},
							forced: true,
							filter(event, player) {
								if (player.storage.XK_taijihuaqing >= 3) return false;
								return event.player.hp == 1 && event.num != 0;
							},
							content() {
								'step 0';
								player
									.chooseControlList(['弃置' + get.translation(trigger.player) + '1张牌', '摸1张牌'])
									.set('ai', function (event, player) {
										var target = _status.event.getTrigger().player;
										var att = get.attitude(player, target);
										if (att > 0 || player.countCards('h') < 3 || !target.countCards('he')) return 1;
										else return 0;
									})
									.set('prompt', '【太极化清】:请选择一项');
								('step 1');
								if (result.control != 'cancel2') {
									if (result.index == 0 && trigger.player.countCards('he') > 0) {
										player.discardPlayerCard(trigger.player, 'he', true);
									} else if (result.index == 1) {
										player.draw();
									}
									game.playAudio('../extension/侠客风云传/audio/XK_taijihuaqing1.mp3');
									player.storage.XK_taijihuaqing++;
								}
							},
							ai: {
								expose: 0.3,
							},
						},
						XK_taijihuaqing1: {
							trigger: {
								global: 'roundStart',
							},
							_priority: 23,
							forced: true,
							content() {
								player.storage.XK_taijihuaqing = 0;
							},
						},
						XK_taijishengong: {
							init(player) {
								player.storage.XK_zuowangwuwo = 0;
							},
							group: ['XK_zuowangwuwo', 'XK_zuowangwuwo1', 'XK_qiankun', 'XK_dazhoutian', 'XK_dazhoutian1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_zuowangwuwo: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'phaseJieshuBegin',
							},
							filter(event, player) {
								return player.countCards('h');
							},
							forced: true,
							prompt2(event, player) {
								var num1 = Math.min(4, player.countCards('h'));
								return '是否摸' + num1 + '张牌？如此,若你下回合开始时手牌数大于' + num1 + ',你弃置' + num1 + '张手牌并回复1点体力.';
							},
							content() {
								var num1 = Math.min(4, player.countCards('h'));
								player.draw(num1);
								player.storage.XK_zuowangwuwo = num1;
							},
						},
						XK_zuowangwuwo1: {
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							filter(event, player) {
								return player.storage.XK_zuowangwuwo > 0;
							},
							forced: true,
							content() {
								var num1 = player.countCards('h');
								if (num1 > player.storage.XK_zuowangwuwo) {
									player.chooseToDiscard(player.storage.XK_zuowangwuwo, 'h', true);
									player.recover();
								}
								player.storage.XK_zuowangwuwo == 0;
							},
						},
						XK_qiankun: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'damageEnd',
							},
							forced: true,
							filter(event, player) {
								return event.num > 0;
							},
							content() {
								player.addBuff('XK_fanshou', 2, player);
							},
							ai: { XK_selfbuff: true },
						},
						XK_qixianjianyi: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_lingxianger';
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_lingxianger.mp3');
							},
							group: ['XK_hanmeiyingxue', 'XK_shimianmaifu'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_hanmeiyingxue: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								global: 'loseAfter',
							},
							usable: 1,
							check(event, player) {
								return get.attitude(player, event.player) > 0;
							},
							prompt2(event, player) {
								return '是否摸令' + get.translation(event.player) + '摸1张牌？';
							},
							filter(event, player) {
								var dis = get.distance(player, event.player);
								if ((dis <= 1 && event.player.countCards('h') < 3) || (dis == 2 && event.player.countCards('h') < 2)) {
									return event.hs && event.hs.length;
								}
								return false;
							},
							content() {
								trigger.player.draw();
							},
							ai: {
								expose: 0.2,
							},
						},
						XK_shimianmaifu: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								global: 'gainAfter',
							},
							usable: 1,
							check(event, player) {
								return get.attitude(player, event.player) <= 0;
							},
							prompt2(event, player) {
								return '是否摸令' + get.translation(event.player) + '随机移除1项增益状态？';
							},
							filter(event, player) {
								if (event.player == player) return false;
								if (!event.player.hasSkillTag('XK_buff')) return false;
								var dis = get.distance(player, event.player);
								if ((dis <= 1 && event.player.countCards('h') > 2) || (dis == 2 && event.player.countCards('h') > 3)) {
									return true;
								}
								return false;
							},
							content() {
								trigger.player.removeBuff('XK_buff', 1, 1, false, false);
							},
							ai: {
								expose: 0.2,
							},
						},
						XK_qingxinpusan: {
							group: ['XK_jingtu', 'XK_dazhoutian', 'XK_dazhoutian1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_jingtu: {
							mod: {
								globalFrom(from, to, current) {
									var num1 = from.hp;
									return current - num1;
								},
								globalTo(from, to, current) {
									var num1 = to.getDamagedHp();
									return current + num1;
								},
							},
						},
						XK_yuyinraoliang: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_xianyin';
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_xianyin.mp3');
							},
							group: ['XK_wanghun'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_wanghun: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'loseEnd',
							},
							prompt2(event, player) {
								return '是否摸2张牌并令1名其他角色获得【散功】1回合？';
							},
							forced: true,
							filter(event, player) {
								if (_status.currentPhase == player) return false;
								if (player.hasSkill('XK_wanghun1')) return false;
								if (player.countCards('h')) return false;
								return event.hs && event.hs.length;
							},
							content() {
								'step 0';
								player.addTempSkill('XK_wanghun1', 'roundStart');
								player.draw(2);
								player
									.chooseTarget('令1名其他角色获得【散功】1回合', 1, false, function (card, player, target) {
										return player != target;
									})
									.set('ai', function (target) {
										return -get.attitude(_status.event.player, target);
									});
								('step 1');
								if (result.targets?.length) {
									result.targets[0].addBuff('XK_sangong', 1, player);
								}
							},
							ai: {
								threaten: 0.8,
								effect: {
									target(card, player, target) {
										if (!player.hasSkill('XK_wanghun1')) {
											if (card.name == 'guohe' || card.name == 'liuxinghuoyu') return 0.6;
										}
									},
								},
								noh: true,
							},
						},
						XK_wanghun1: {},
						XK_shengwuaiyue: {
							group: ['XK_wuchangzhisheng', 'XK_ziranzhihe', 'XK_dazhoutian', 'XK_dazhoutian1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_wuchangzhisheng: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								global: 'useCardBefore',
							},
							_priority: 15,
							filter(event, player) {
								return event.card.name == 'sha' && event.player != player && player.countCards('h', { color: 'black' }) > 0 && player.inRange(event.player);
							},
							forced: true,
							content() {
								'step 0';
								var att = get.attitude(player, trigger.player);
								var str = '【无常之声】:是否弃置一张黑色手牌令' + get.translation(trigger.player) + '获得【恐惧】2回合？';
								var next = player.chooseToDiscard('h', { color: 'black' }, get.prompt('XK_wuchangzhisheng'));
								next.prompt2 = str;
								next.ai = function (card) {
									if (att < 0) {
										return 6 - get.value(card);
									}
									return -1;
								};
								next.autodelay = true;
								('step 1');
								if (result.bool) {
									trigger.player.addBuff('XK_kongju', 2, player);
								}
							},
							ai: {
								threaten: 1.1,
								expose: 0.3,
							},
						},
						XK_ziranzhihe: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								global: 'recoverAfter',
							},
							_priority: 14,
							filter(event, player) {
								return event.player != player && player.countCards('h', { color: 'red' }) > 0 && player.inRange(event.player);
							},
							forced: true,
							content() {
								'step 0';
								var att = get.attitude(player, trigger.player);
								var str = '【自然之和】:是否弃置一张红色手牌令' + get.translation(trigger.player) + '获得【聚气】2回合？';
								var next = player.chooseToDiscard('h', { color: 'red' }, get.prompt('XK_ziranzhihe'));
								next.prompt2 = str;
								next.ai = function (card) {
									if (att > 0) {
										return 6 - get.value(card);
									}
									return -1;
								};
								next.autodelay = true;
								('step 1');
								if (result.bool) {
									trigger.player.addBuff('XK_juqi', 2, player);
								}
							},
							ai: {
								expose: 0.3,
							},
						},
						XK_zimutiangou: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_renqingxuan';
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_renqingxuan.mp3');
							},
							group: ['XK_qibaotianlan'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_qibaotianlan: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: ['shanAfter', 'wuxieAfter'],
							},
							forced: true,
							content() {
								'step 0';
								var list = [];
								if (player.hasSkillTag('XK_debuff')) {
									list.push('随机移除1项异常状');
								}
								list.push('令1名其他角色获得【捉影】2回合');
								list.push('cancel2');
								player
									.chooseControl(list, true)
									.set('ai', function (event) {
										var player = _status.event.player;
										if (player.hasSkillTag('XK_debuff') && list.includes('随机移除1项异常状')) return '随机移除1项异常状';
										return '令1名其他角色获得【捉影】2回合';
									})
									.set('prompt', '【七宝天轮】:请选择一项');
								('step 1');
								if (result.control == '取消') {
									event.finish();
								} else {
									if (result.control == '令1名其他角色获得【捉影】2回合') {
										player
											.chooseTarget('令1名其他角色获得【捉影】2回合', 1, false, function (card, player, target) {
												return player != target;
											})
											.set('ai', function (target) {
												if (target.hasSkill('XK_zhuoying')) return -1;
												return -get.attitude(_status.event.player, target);
											});
									} else {
										player.removeBuff('XK_debuff', 1, 1, false, false);
										event.finish();
									}
								}
								('step 2');
								if (result.targets?.length) {
									result.targets[0].addBuff('XK_zhuoying', 2, player);
								}
							},
						},
						XK_wanhualijing: {
							group: ['XK_huawuque', 'XK_huawuque1', 'XK_huamanlou', 'XK_xiaozhoutian'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_huawuque: {
							audio: 'ext:侠客风云传/audio:1',
							enable: ['chooseToRespond', 'chooseToUse'],
							filterCard(card) {
								return true;
							},
							viewAs: { name: 'shan' },
							viewAsFilter(player) {
								if (!player.isDamaged()) return false;
								return player.countCards('h') > 0;
							},
							prompt: '将一张手牌当闪使用或打出',
							check() {
								return 1;
							},
							ai: {
								respondShan: true,
								skillTagFilter(player) {
									if (!player.countCards('h')) return false;
								},
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'respondShan') && current < 0) return 0.6;
									},
								},
							},
						},
						XK_huawuque1: {
							audio: 'ext:侠客风云传/audio:1',
							enable: 'chooseToUse',
							filterCard(card) {
								return true;
							},
							viewAsFilter(player) {
								if (player.isDamaged()) return false;
								return player.countCards('h') > 0;
							},
							viewAs: { name: 'wuxie' },
							prompt: '将一张手牌当无懈可击使用',
							check(card) {
								var tri = _status.event.getTrigger();
								if (tri && tri.card && tri.card.name == 'chiling') return -1;
								return 7 - get.value(card);
							},
						},
						XK_huamanlou: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: { global: 'phaseJieshuBegin' },
							filter(event, player) {
								return event.player != player && player.countUsed() > 0;
							},
							prompt2(event, player) {
								return '是否获得摸1张牌并获得一个额外的出牌阶段？';
							},
							forced: true,
							content() {
								'step 0';
								player.draw();
								player.stat.push({ card: {}, skill: {} });
								player.phaseUse();
							},
						},
						XK_yinshebianfa: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_jiwen';
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_jiwen.mp3');
							},
							group: ['XK_yinsheqianzhuan', 'XK_qianshekuangwu'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_yinsheqianzhuan: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								global: 'damageEnd',
							},
							check(event, player) {
								return get.attitude(player, event.player) > 0;
							},
							prompt2(event, player) {
								return '是否将' + get.translation(event.player) + '的一项异常状态转移给你？如此你摸1张牌.';
							},
							filter(event, player) {
								if (event.player == player) return false;
								if (!event.player.hasSkillTag('XK_debuff')) return false;
								return player.inRange(event.player);
							},
							content() {
								'step 0';
								var debufflist = trigger.player.getXKBuff('XK_debuff');
								debufflist.sort(lib.sort.random);
								if (debufflist[0]) {
									//QQQ
									var skill = debufflist[0][0],
										num = debufflist[0][1];
									trigger.player.deleteBuff(skill);
									player.addBuff(skill, num, player);
									player.draw();
								}
							},
						},
						XK_qianshekuangwu: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								source: 'damageEnd',
							},
							_priority: 17,
							check(event, player) {
								return get.attitude(player, event.player) <= 0;
							},
							prompt2(event, player) {
								return '是否令' + get.translation(event.player) + '的获得你所拥有的随机一项异常状态1回合？';
							},
							filter(event, player) {
								if (event.player == player) return false;
								return player.hasSkillTag('XK_debuff');
							},
							content() {
								'step 0';
								var debufflist = player.getXKBuff('XK_debuff');
								debufflist.sort(lib.sort.random);
								if (debufflist[0]) {
									var skill = debufflist[0][0],
										num = debufflist[0][1];
									trigger.player.addBuff(skill, num, player);
								}
							},
						},
						XK_shoushengong: {
							group: ['XK_baoli', 'XK_xiaozhoutian'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_baoli: {
							mod: {
								maxHandcard(player, num) {
									var num1 = player.getXKBuff('XK_debuff').length;
									return num + num1;
								},
								globalFrom(from, to, current) {
									var num1 = from.getXKBuff('XK_debuff').length;
									return current - num1;
								},
								globalTo(from, to, current) {
									var num1 = to.getXKBuff('XK_debuff').length;
									return current + num1;
								},
							},
							trigger: { player: 'phaseDrawBegin2' },
							forced: true,
							_priority: 4,
							filter(event, player) {
								return !event.numFixed;
							},
							content() {
								var num1 = player.getXKBuff('XK_debuff').length;
								trigger.num += num1;
							},
						},
						XK_jiuyinzonggang: {
							description: '<font color=#F0F>【巨门】</font>每项限1次,你可视为使用1张杀、闪、酒、桃.每轮开始,若你已使用全部选项,可以失去1点体力上限重置选项.</br><font color=#F0F>【秋雪】</font>当你使用或打出1张闪后,可以获得【反手】【感知】1回合.</br><font color=#F0F>【元婴出世】</font>体力40%以上免疫【内伤】;摸牌阶段摸牌数、手牌上限+1;回合开始时随机移除1~2项异常状态.',
							init(player) {
								player.storage.XK_jumen = ['sha', 'shan', 'jiu', 'tao'];
								player.markSkill('XK_jumen');
							},
							group: ['XK_jumen', 'XK_jumen1', 'XK_qiuxue', 'XK_yuanying', 'XK_yuanying1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_jumen: {
							intro: {
								content(storage) {
									if (!storage.length) return '没有可以使用的牌';
									else {
										var str = '剩余可使用的牌有:' + get.translation(storage);
										return str;
									}
								},
							},
							onremove(player) {
								delete player.storage.XK_jumen;
								player.unmarkSkill(XK_jumen);
							},
							enable: 'chooseToUse',
							filter(event, player) {
								if (player.storage.XK_jumen.length <= 0) return false;
								if (event.filterCard && event.filterCard({ name: 'sha' }, player, event) && player.storage.XK_jumen.includes('sha')) return true;
								if (event.filterCard && event.filterCard({ name: 'jiu' }, player, event) && player.storage.XK_jumen.includes('jiu')) return true;
								if (event.filterCard && event.filterCard({ name: 'tao' }, player, event) && player.storage.XK_jumen.includes('tao')) return true;
								if (event.filterCard && event.filterCard({ name: 'shan' }, player, event) && player.storage.XK_jumen.includes('shan')) return true;
								return false;
							},
							chooseButton: {
								dialog(event, player) {
									var list = [];
									if (event.filterCard && event.filterCard({ name: 'sha' }, player, event) && player.storage.XK_jumen.includes('sha')) {
										list.push(['基本', '', 'sha']);
									}
									if (event.filterCard && event.filterCard({ name: 'tao' }, player, event) && player.storage.XK_jumen.includes('tao')) {
										list.push(['基本', '', 'tao']);
									}
									if (event.filterCard && event.filterCard({ name: 'jiu' }, player, event) && player.storage.XK_jumen.includes('jiu')) {
										list.push(['基本', '', 'jiu']);
									}
									if (event.filterCard && event.filterCard({ name: 'shan' }, player, event) && player.storage.XK_jumen.includes('shan')) {
										list.push(['基本', '', 'shan']);
									}
									return ui.create.dialog('【巨门】', [list, 'vcard'], 'hidden');
								},
								check(button) {
									var player = get.player();
									var card = { name: button.link[2] };
									if (card.name == 'shan') return 3;
									if (
										game.hasPlayer(function (current) {
											return player.canUse({ name: 'sha' }, current) && get.effect(current, { name: 'sha' }, player, player) > 0;
										})
									) {
										if (card.name == 'sha') {
											return 2.9;
										} else if (card.name == 'jiu') {
											if (player.storage.XK_jumen.includes('sha') || player.hasUsableCard('sha')) return 4;
											if (player.hp <= 0) return 3.5;
											return 0;
										}
									}
									if (
										game.hasPlayer(function (current) {
											return player.canUse({ name: 'tao' }, current) && get.effect(current, { name: 'tao' }, player, player) > 0;
										}) &&
										card.name == 'tao'
									) {
										return 4;
									}
									return 0;
								},
								backup(links, player) {
									return {
										filterCard(card) {
											return false;
										},
										popname: true,
										selectCard: -1,
										viewAs: {
											name: links[0][2],
										},
										onuse(result, player) {
											player.storage.XK_jumen.remove(links[0][2]);
										},
									};
								},
								prompt(links, player) {
									return '视为使用1张' + get.translation(links[0][2]);
								},
							},
							ai: {
								order() {
									var player = get.player();
									var event = _status.event;
									if (event.type == 'dying') {
										if (event.filterCard && event.filterCard({ name: 'tao' }, player, event)) return 0.5;
									} else {
										if ((event.filterCard && event.filterCard({ name: 'tao' }, player, event)) || event.filterCard({ name: 'shan' }, player, event)) return 4;
										if (event.filterCard && event.filterCard({ name: 'sha' }, player, event)) return 2.9;
									}
									return 0;
								},
								save: true,
								respondSha: true,
								respondShan: true,
								skillTagFilter(player, tag, arg) {
									if (tag == 'save' && !player.storage.XK_jumen.includes('tao') && !player.storage.XK_jumen.includes('jiu')) {
										return false;
									}
									if (tag == 'respondSha' && !player.storage.XK_jumen.includes('sha')) {
										return false;
									}
									if (tag == 'respondShan' && !player.storage.XK_jumen.includes('shan')) {
										return false;
									}
								},
								result: {
									player(player) {
										if (_status.event.type == 'dying') return get.attitude(player, _status.event.dying);
										else return 1;
									},
								},
							},
						},
						XK_jumen1: {
							audio: 'ext:侠客风云传/audio:1',
							prompt2(event, player) {
								return '是否失去1点体力上限,重置【巨门】的使用次数？';
							},
							trigger: {
								global: 'roundStart',
							},
							check(event, player) {
								return player.isDamaged() && player.maxHp > 2;
							},
							_priority: 8,
							filter(event, player) {
								return player.storage.XK_jumen.length == 0 && player.maxHp > 1;
							},
							content() {
								player.loseMaxHp();
								player.storage.XK_jumen = ['sha', 'shan', 'jiu', 'tao'];
								player.markSkill('XK_jumen');
							},
							ai: {
								useShan: true,
								skillTagFilter(player, tag, arg) {
									if (player.storage.XK_jumen != ['shan'] || player.maxHp < 2) return false;
								},
							},
						},
						XK_qiuxue: {
							audio: 'ext:侠客风云传/audio:1',
							prompt2(event, player) {
								return '是否获得【反手】【感知】1回合？';
							},
							trigger: {
								player: ['useCardEnd', 'respondEnd'],
							},
							_priority: 29,
							filter(event, player) {
								return event.card && event.card.name == 'shan';
							},
							forced: true,
							content() {
								player.addBuff('XK_fanshou', 1, player);
								player.addBuff('XK_ganzhi', 1, player);
							},
							ai: { XK_selfbuff: true },
						},
						XK_dugujiujianex: {
							trigger: {
								player: 'phaseBefore',
							},
							_priority: 999,
							filter(event, player) {
								return player.name != 'XK_weiming';
							},
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio', player.name);
							},
							group: ['XK_pojintianxia', 'XK_wuzhaoshengyou'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_dugujiujian: {
							description: '<font color=#F0F>【无招胜有招】</font>当你成为带有伤害标签牌的目标时,可展示牌堆顶1张牌,若花色与你手牌均不同,你视为对来源使用一张不计次数的杀,否则获得【无招】2回合.</br><font color=#F0F>【破尽天下】</font>你使用杀指定一个目标后,可弃置至多3张手牌,根据数量:1.此杀无法被闪避;>=2.此杀伤害+1;3.获得【气盾】【识破】2回合.',
							trigger: {
								player: 'phaseBefore',
							},
							_priority: 999,
							filter(event, player) {
								return player.name != 'XK_weiming';
							},
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio', player.name);
							},
							group: ['XK_pojintianxia', 'XK_wuzhaoshengyou'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_pojintianxia: {
							//audio:"ext:侠客风云传/audio:1",
							trigger: {
								target: 'useCardToBefore',
							},
							check(event, player) {
								return get.attitude(player, event.player) <= 0;
							},
							prompt2(event, player) {
								return '是否展示牌堆顶1张牌？若此牌花色与你手牌均不同,你视为对' + get.translation(event.player) + '使用1张不计次数的杀,否则获得【无招】2回合.';
							},
							filter(event, player) {
								if (event.card && event.player != player) {
									return get.tag(event.card, 'damage');
								}
								return false;
							},
							content() {
								'step 0';
								if (player.name == 'XK_linghudaxia') {
									game.playAudio('../extension/侠客风云传/audio/XK_pojintianxia2.mp3');
								} else {
									game.playAudio('../extension/侠客风云传/audio/XK_pojintianxia1.mp3');
								}
								event.cards = get.cards(1);
								player.showCards(get.translation(player) + '对' + get.translation(trigger.player) + '发动了【无招胜有招】', event.cards);
								('step 1');
								var card = event.cards[0];
								var cards1 = player.getCards('h');
								var suits = [];
								for (var i = 0; i < cards1.length; i++) {
									suits.add(cards1[i].suit);
								}
								if (!suits.includes(card.suit)) {
									player.useCard({ name: 'sha' }, trigger.player, false);
								} else {
									player.addBuff('XK_wuzhao', 2, player);
								}
								('step 2');
								game.cardsDiscard(event.cards);
							},
							ai: {
								XK_selfbuff: true,
								expose: 0.4,
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'damage')) {
											if (!target.hasFriend()) return;
											var num = Math.max(0, 2 - target.countCards('h'));
											return [1, 0, 1, -num];
										}
									},
								},
							},
						},
						XK_wuzhaoshengyou: {
							//audio:"ext:侠客风云传/audio:1",
							trigger: { player: 'useCardToTargeted' },
							_priority: -5,
							filter(event, player) {
								if (event.card.name != 'sha') return false;
								return player.countCards('he') > 0;
							},
							shaRelated: true,
							forced: true,
							content() {
								'step 0';
								var sp = [1, 3],
									str = '【破尽天下】:你使用杀指定一个目标后,可弃置至多3张手牌,根据数量:1.此杀无法被闪避;>=2.此杀伤害+1;3.获得【气盾】【识破】2回合.';
								if (player.storage.XK_dugumiji_mark) {
									sp = [1, 4];
									str = '【破尽天下】:你使用杀指定一个目标后,可弃置至多4张手牌,根据数量:1.此杀无法被闪避;>=2.此杀伤害+1;3.获得【气盾】【大识破】2回合;4.摸2张牌.';
								}
								var next = player.chooseToDiscard(sp, 'h', str, false, function (card, player) {
									return true;
								});
								next.ai = function (card) {
									return 4.5 - get.value(card);
								};
								('step 1');
								if (result.bool) {
									if (player.name == 'XK_linghudaxia') {
										game.playAudio('../extension/侠客风云传/audio/XK_wuzhaoshengyou2.mp3');
									} else {
										game.playAudio('../extension/侠客风云传/audio/XK_wuzhaoshengyou1.mp3');
									}
									if (result.cards.length >= 1) {
										trigger.parent.directHit.push(trigger.target);
									}
									if (result.cards.length >= 2) {
										var id = trigger.target.playerid;
										var map = trigger.parent.customArgs;
										if (!map[id]) map[id] = {};
										if (typeof map[id].extraDamage != 'number') {
											map[id].extraDamage = 0;
										}
										map[id].extraDamage++;
									}
									if (result.cards.length >= 3) {
										player.addBuff('XK_qidun', 2, player);
										if (player.storage.XK_dugumiji_mark) {
											player.addBuff('XK_dashipo', 2, player);
										} else {
											player.addBuff('XK_shipo', 2, player);
										}
									}
									if (result.cards.length == 4) {
										player.draw(2);
									}
								} else {
									event.finish();
								}
							},
							ai: {
								XK_shabonus: true,
								XK_selfbuff: true,
							},
						},
						XK_xinheyiqizhao: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_fengchuixue';
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_fengchuixue.mp3');
							},
							group: ['XK_daqianshijie', 'XK_daqianshijie1'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_daqianshijie: {
							mod: {
								targetInRange(card) {
									if (card.suit == 'diamond' && card.name == 'sha') return true;
								},
							},
							audio: 'ext:侠客风云传/audio:1',
							enable: ['chooseToUse'],
							filterCard(card, player) {
								return get.color(card) == 'red';
							},
							position: 'h',
							viewAs: {
								name: 'sha',
							},
							viewAsFilter(player) {
								if (!player.countCards('h', { color: 'red' })) return false;
							},
							prompt: '将一张红色手牌当杀使用',
							check(card) {
								return 5 - get.value(card);
							},
							ai: {
								skillTagFilter(player) {
									if (!player.countCards('h', { color: 'red' })) return false;
								},
							},
						},
						XK_daqianshijie1: {
							forced: true,
							audio: 'ext:侠客风云传/audio:1',
							shaRelated: true,
							trigger: { player: 'useCardToPlayered' },
							filter(event, player) {
								return event.card.name == 'sha' && event.card.suit == 'heart';
							},
							content() {
								trigger.parent.directHit.push(trigger.target);
							},
						},
						XK_xinheyiqigong: {
							group: ['XK_badao', 'XK_xinyan', 'XK_xiaozhoutian'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_badao: {
							trigger: {
								target: 'shaAfter',
							},
							filter(event, player) {
								return player.canUse({ name: 'sha' }, event.player);
							},
							forced: true,
							content() {
								player.chooseToUse({ name: 'sha' }, trigger.player, -1, '【拔刀】:是否对' + get.translation(trigger.player) + '使用一张杀？');
							},
						},
						XK_xinyan: {
							trigger: {
								player: 'shaBegin',
							},
							forced: true,
							filter(event, player) {
								return event.getParent(3).name == 'XK_badao';
							},
							_priority: -1,
							audio: 'ext:侠客风云传/audio:1',
							content() {
								player.addBuff('XK_shipo', 1, player);
								player.addBuff('XK_ganzhi', 1, player);
							},
							ai: { XK_selfbuff: true },
						},
						XK_dulongzhuihun: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_lanting';
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_lanting.mp3');
							},
							group: ['XK_dulongqiwei', 'XK_wanduruhua'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_dulongqiwei: {
							audio: 'ext:侠客风云传/audio:1',
							enable: 'phaseUse',
							usable: 1,
							filterCard: true,
							selectCard: 1,
							position: 'h',
							discard: false,
							filter(event, player) {
								return player.countCards('h');
							},
							filterTarget(card, player, target) {
								return player != target;
							},
							check(card) {
								return 4.5 - get.value(card);
							},
							prompt: '交给1名其他角色1张手牌,视为对其使用1张过河拆桥.',
							content() {
								target.gain(cards, player);
								player.useCard({ name: 'guohe' }, target);
							},
							ai: {
								order: 1,
								expose: 0.2,
								result: {
									target: -1,
								},
							},
						},
						XK_wanduruhua: {
							trigger: {
								player: 'useCard',
							},
							forced: true,
							filter(event, player) {
								var type = get.type(event.card);
								return type == 'trick' && event.targets.length == 1;
							},
							content() {
								'step 0';
								var num = game.countPlayer(function (current) {
									if (!lib.filter.targetEnabled2(trigger.card, player, current)) return false;
									return current != player && current.hasSkill('XK_zhongdu');
								});
								if (num > 0) {
									player
										.chooseTarget('【万毒入化】:是否额外指定任意处于【中毒】状态的其他角色角色也成为' + get.translation(trigger.card) + '的目标？', [1, num], false, function (card, player, target) {
											var trigger = _status.event.getTrigger();
											if (trigger.targets.includes(target) || target == player) return false;
											if (!target.hasSkill('XK_zhongdu')) return false;
											return lib.filter.targetEnabled2(trigger.card, _status.event.player, target);
										})
										.set('ai', function (target) {
											var trigger = _status.event.getTrigger();
											var player = _status.event.player;
											return get.effect(target, trigger.card, player, player);
										});
								} else event.finish();
								('step 1');
								if (result.bool) {
									if (!event.isMine()) game.delayx();
									event.target = result.targets;
								} else {
									event.finish();
								}
								('step 2');
								if (event.target) {
									game.log(event.target, '额外成为了' + get.translation(trigger.card) + '的目标');
									trigger.targets.addArray(event.target);
								}
								event.finish();
							},
						},
						XK_wanduxinjing: {
							group: ['XK_dujing', 'XK_xiaozhoutian'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_dujing: {
							trigger: {
								global: 'gainBegin',
							},
							forced: true,
							popup: false,
							filter(event, player) {
								return event.source == player && event.player != player;
							},
							content() {
								if (!trigger.player.hasSkill('XK_dujing1')) {
									trigger.player.addSkill('XK_dujing1');
								}
								var mark = false;
								for (var i = 0; i < trigger.player.storage.XK_dujing1.length; i++) {
									if (trigger.player.storage.XK_dujing1[i].pl == player) {
										mark = true;
										for (var i = 0; i < trigger.cards.length; i++) {
											trigger.player.storage.XK_dujing1[i].cards.add(trigger.cards[i]);
										}
									}
								}
								if (mark == false) {
									var lt = {
										pl: player,
										cards: [],
									};
									for (var i = 0; i < trigger.cards.length; i++) {
										lt.cards.add(trigger.cards[i]);
									}
									trigger.player.storage.XK_dujing1.add(lt);
								}
							},
						},
						XK_dujing1: {
							audio: 'ext:侠客风云传/audio:1',
							charlotte: true,
							trigger: {
								player: ['loseEnd'],
							},
							init(player) {
								player.storage.XK_dujing1 = [];
							},
							forced: true,
							filter(event, player) {
								if (player.storage.XK_dujing1.length == 0) return false;
								var tp = player.storage.XK_dujing1;
								for (var i = 0; i < tp.length; i++) {
									for (var j = 0; j < event.cards.length; j++) {
										if (tp[i].cards.includes(event.cards[j])) return true;
									}
								}
								return false;
							},
							content() {
								'step 0';
								var drawlist = [];
								var tp = player.storage.XK_dujing1,
									cds = trigger.cards;
								for (var i = 0; i < tp.length; i++) {
									for (var j = 0; j < cds.length; j++) {
										if (tp[i].cards.includes(cds[i])) {
											if (!drawlist.includes(tp[i].pl)) drawlist.push(tp[i].pl);
											tp[i].cards.remove(cds[i]);
										}
									}
								}
								if (drawlist.length) {
									for (var i = 0; i < drawlist.length; i++) {
										drawlist[i].draw();
										player.addBuff('XK_zhongdu', 2, drawlist[i]);
									}
								}
							},
						},
						XK_diwangshengong: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_huangdi';
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_huangdi.mp3');
							},
							group: ['XK_zhenyiyangzhi', 'XK_foguangpuzhao'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_zhenyiyangzhi: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'phaseJieshuBegin',
							},
							filter(event, player) {
								return player.countCards('he', { type: 'equip' });
							},
							forced: true,
							autodelay: true,
							content() {
								'step 0';
								event.togain = player.getCards('he', { type: 'equip' });
								('step 1');
								player.chooseButton(['【真一阳指】:是否将1张装备牌置于牌堆顶,视为使用1张无距离限制的杀？', event.togain]).ai = function (button) {
									var att = get.attitude(player, player.next);
									if (att > 0) return get.value(button.link);
									return 8 - get.value(button.link);
								};
								('step 2');
								if (result.links?.length) {
									event.card = result.links[0];
									player.showCards(event.card);
									event.card.fix();
								} else event.finish();
								('step 3');
								var controls = ['零', '一', '二', '三', '四', '五'];
								var str = '将' + get.translation(event.card) + '置于牌堆顶第X张(X为你选择的数字)牌下方';
								var dialog = ui.create.dialog(str, 'hidden');
								player.chooseControl(controls, dialog).ai = function () {
									return '三';
								};
								('step 4');
								var num;
								switch (result.control) {
									case '零':
										num = 0;
										break;
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
								}
								event.num1 = num - 1;
								event.cards = get.cards(5);
								('step 5');
								if (event.num1 < 0) {
									ui.cardPile.insertBefore(event.card, ui.cardPile.firstChild);
								} else {
									for (var i = event.cards.length - 1; i >= 0; i--) {
										if (i == event.num1) {
											ui.cardPile.insertBefore(event.card, ui.cardPile.firstChild);
											ui.cardPile.insertBefore(event.cards[i], ui.cardPile.firstChild);
										} else {
											ui.cardPile.insertBefore(event.cards[i], ui.cardPile.firstChild);
										}
									}
								}
								('step 6');
								player.addSkill('XK_zhenyiyangzhi1');
								player.chooseUseTarget({ name: 'sha' }, 'nodistance');
								('step 7');
								player.removeSkill('XK_zhenyiyangzhi1');
							},
						},
						XK_zhenyiyangzhi1: {
							ai: {
								unequip: true,
								skillTagFilter(player, tag, arg) {
									if (arg && arg.name == 'sha') return true;
									return false;
								},
							},
							popup: false,
						},
						XK_foguangpuzhao: {
							audio: 'ext:侠客风云传/audio:1',
							_priority: 19,
							trigger: {
								global: 'useCardToBefore',
							},
							filter(event, player) {
								if (event.card.name != 'sha') return false;
								if (!event.target || event.target == player) return false;
								if (!player.inRange(event.target)) return false;
								return player.countCards('h');
							},
							forced: true,
							content() {
								'step 0';
								player.chooseCardButton('【佛光普照】:是否交给' + get.translation(trigger.target) + '1张手牌,如此其获得【刺目】【破绽】1回合？', player.getCards('h')).ai = function (button) {
									var trigger = _status.event.getTrigger();
									var att = get.attitude(player, trigger.target);
									return att < 0 && 5 - get.value(button.link);
								};
								('step 1');
								if (result.links?.length) {
									trigger.target.gain(result.links[0], player, 'giveAuto');
									trigger.target.addBuff('XK_cimu', 1, player);
									trigger.target.addBuff('XK_pozhan', 1, player);
								}
							},
							ai: {
								XK_shabonus: true,
								threaten: 1.2,
								expose: 0.3,
							},
						},
						XK_jiulonghuti: {
							group: ['XK_jinchanbaojia', 'XK_jinchanbaojia1', 'XK_xiaozhoutian'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_jinchanbaojia: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'damageBegin',
							},
							filter(event, player) {
								if (player.hp < player.maxHp / 2) return false;
								if (event.nature) return false;
								return event.num > 0;
							},
							_priority: 99,
							forced: true,
							content() {
								trigger.num--;
							},
							ai: {
								nodamage: true,
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'damage')) {
											if (target.hp < target.maxHp / 2) return;
											if (!get.tag(card, 'thunderDamage') || !get.tag(card, 'fireDamage')) return 0.3;
										}
									},
								},
							},
						},
						XK_jinchanbaojia1: {
							trigger: { player: 'phaseDrawBegin2' },
							forced: true,
							_priority: 5,
							filter(event, player) {
								if (player.hp >= player.maxHp / 2) return false;
								return !event.numFixed;
							},
							content() {
								trigger.num++;
							},
						},
						XK_diyiren: {
							charlotte: true,
							group: ['XK_huangwei'],
						},
						XK_huangwei: {
							trigger: {
								source: 'damageEnd',
							},
							_priority: -1,
							zhuSkill: true,
							forced: true,
							filter(event, player) {
								return player.hasZhuSkill('XK_huangwei') && event.num >= 2;
							},
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_huangwei.mp3');
								player.addBuff('XK_xingfen', 1, player);
							},
							ai: { XK_selfbuff: true },
						},
						XK_jiuyinbaiguzhua: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_jiuyin';
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_jiuyin.mp3');
							},
							group: ['XK_cuihunshixin'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_cuihunshixin: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'shaMiss',
								target: 'shaMiss',
							},
							check(event, player) {
								if (event.target != player) return get.attitude(player, event.target) <= 0;
								else return get.attitude(player, event.player) <= 0;
							},
							prompt2(event, player) {
								if (event.target != player) return '是否令' + get.translation(event.target) + '获得【晕眩】1回合？';
								else return '是否令' + get.translation(event.player) + '获得【剧毒】1回合？';
							},
							content() {
								if (trigger.target != player) trigger.target.addBuff('XK_yunxuan', 1, player);
								else trigger.player.addBuff('XK_judu', 1, player);
							},
						},
						XK_jiuyincanjing: {
							init(player) {
								player.storage.XK_siyu = ['sha', 'shan', 'jiu', 'tao'];
								player.markSkill('XK_siyu');
							},
							group: ['XK_siyu', 'XK_zhishui', 'XK_dazhoutian', 'XK_dazhoutian1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_siyu: {
							intro: {
								content(storage) {
									if (!storage.length) return '没有可以使用的牌';
									else {
										var str = '剩余可使用的牌有:' + get.translation(storage);
										return str;
									}
								},
							},
							onremove(player) {
								delete player.storage.XK_siyu;
								player.unmarkSkill(XK_siyu);
							},
							enable: 'chooseToUse',
							filter(event, player) {
								if (player.storage.XK_siyu.length <= 0) return false;
								if (event.filterCard && event.filterCard({ name: 'sha' }, player, event) && player.storage.XK_siyu.includes('sha')) return true;
								if (event.filterCard && event.filterCard({ name: 'jiu' }, player, event) && player.storage.XK_siyu.includes('jiu')) return true;
								if (event.filterCard && event.filterCard({ name: 'tao' }, player, event) && player.storage.XK_siyu.includes('tao')) return true;
								if (event.filterCard && event.filterCard({ name: 'shan' }, player, event) && player.storage.XK_siyu.includes('shan')) return true;
								return false;
							},
							chooseButton: {
								dialog(event, player) {
									var list = [];
									if (event.filterCard && event.filterCard({ name: 'sha' }, player, event) && player.storage.XK_siyu.includes('sha')) {
										list.push(['基本', '', 'sha']);
									}
									if (event.filterCard && event.filterCard({ name: 'tao' }, player, event) && player.storage.XK_siyu.includes('tao')) {
										list.push(['基本', '', 'tao']);
									}
									if (event.filterCard && event.filterCard({ name: 'jiu' }, player, event) && player.storage.XK_siyu.includes('jiu')) {
										list.push(['基本', '', 'jiu']);
									}
									if (event.filterCard && event.filterCard({ name: 'shan' }, player, event) && player.storage.XK_siyu.includes('shan')) {
										list.push(['基本', '', 'shan']);
									}
									return ui.create.dialog('【四御】', [list, 'vcard'], 'hidden');
								},
								check(button) {
									var player = get.player();
									var card = { name: button.link[2] };
									if (card.name == 'jiu') {
										if (player.hp <= 0) return 2.5;
									}
									if (card.name == 'shan') {
										return 3;
									}
									if (
										game.hasPlayer(function (current) {
											return player.canUse(card, current) && get.effect(current, card, player, player) > 0;
										})
									) {
										if (card.name == 'sha') {
											return 2.9;
										} else if (card.name == 'tao' || card.name == 'shan') {
											return 4;
										}
									}
									return 0;
								},
								backup(links, player) {
									return {
										filterCard(card) {
											return false;
										},
										popname: true,
										selectCard: -1,
										viewAs: {
											name: links[0][2],
										},
										onuse(result, player) {
											player.storage.XK_siyu.remove(links[0][2]);
											if (player.storage.XK_siyu.length == 0) {
												player.unmarkSkill('XK_siyu');
											}
										},
									};
								},
								prompt(links, player) {
									return '视为使用1张' + get.translation(links[0][2]);
								},
							},
							ai: {
								order() {
									var player = get.player();
									var event = _status.event;
									if (event.type == 'dying') {
										if (event.filterCard && event.filterCard({ name: 'tao' }, player, event)) return 0.5;
									} else {
										if ((event.filterCard && event.filterCard({ name: 'tao' }, player, event)) || event.filterCard({ name: 'shan' }, player, event)) return 4;
										if (event.filterCard && event.filterCard({ name: 'sha' }, player, event)) return 2.9;
									}
									return 0;
								},
								save: true,
								respondSha: true,
								respondShan: true,
								skillTagFilter(player, tag, arg) {
									if (tag == 'save' && !player.storage.XK_siyu.includes('tao') && !player.storage.XK_siyu.includes('jiu')) {
										return false;
									}
									if (tag == 'respondSha' && !player.storage.XK_siyu.includes('sha')) {
										return false;
									}
									if (tag == 'respondShan' && !player.storage.XK_siyu.includes('shan')) {
										return false;
									}
								},
								result: {
									player(player) {
										if (_status.event.type == 'dying') return get.attitude(player, _status.event.dying);
										else return 1;
									},
								},
							},
						},
						XK_zhishui: {
							audio: 'ext:侠客风云传/audio:1',
							prompt2(event, player) {
								return '是否摸1张牌？';
							},
							trigger: {
								player: ['useCardEnd', 'respondEnd'],
							},
							_priority: 29,
							filter(event, player) {
								return event.card && event.card.name == 'shan';
							},
							forced: true,
							content() {
								player.draw();
							},
						},
						XK_youlongjianfa: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_youjin';
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_youjin.mp3');
							},
							group: ['XK_longyouqianshui', 'XK_qianlongwuyong'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_longyouqianshui: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: { player: 'phaseDiscardBefore' },
							filter(event, player) {
								return player.isDamaged();
							},
							check(event, player) {
								if (player.needsToDiscard()) return true;
								return false;
							},
							prompt2(event, player) {
								return '是否失去1点体力上限,跳过弃牌阶段并获得【神行】2回合？';
							},
							content() {
								player.loseMaxHp();
								player.addBuff('XK_shenxing', 2, player);
								trigger.cancel();
							},
							ai: {
								XK_selfbuff: true,
								XK_shabonus: true,
							},
						},
						XK_qianlongwuyong: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								source: 'damageBegin',
							},
							_priority: 19,
							forced: true,
							filter(event, player) {
								return event.card && (event.card.name == 'sha' || event.card.name == 'juedou') && event.notLink();
							},
							content() {
								if (trigger.card.number > player.maxHp) {
									trigger.num++;
								} else {
									trigger.player.addBuff('XK_liuxue', 1, player);
								}
							},
							ai: {
								expose: 0.3,
							},
						},
						XK_wuwangshengong: {
							group: ['XK_guwo', 'XK_diqi', 'XK_yuanying', 'XK_yuanying1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_guwo: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'damageEnd',
							},
							check(event, player) {
								return player.isDamaged();
							},
							prompt2(event, player) {
								return '是否失去1点体力上限,获得【霸体】1回合？';
							},
							filter(event, player) {
								return event.card && (event.card.name == 'sha' || event.card.name == 'juedou');
							},
							content() {
								player.loseMaxHp();
								player.addBuff('XK_bati', 1, player);
							},
							ai: { XK_selfbuff: true },
						},
						XK_diqi: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								source: 'damageBegin4',
							},
							_priority: -1,
							filter(event, player) {
								if (player.hp != 1) return false;
								return event.card && (event.card.name == 'sha' || event.card.name == 'juedou') && event.notLink();
							},
							forced: true,
							content() {
								trigger.num *= 2;
							},
							ai: {
								XK_shabonus: true,
								damageBonus: true,
							},
						},
						XK_jiuyangshengongex: {
							group: ['XK_qingfengmingyue', 'XK_qingfengmingyue1', 'XK_jiuyangwuji', 'XK_yuanying', 'XK_yuanying1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_jiuyangshengong: {
							description: '<font color=#F0F>【清风明月】</font>锁定技,准备阶段,你获得【卸劲】2回合;若你的体力不小于40%,免疫一切负面状态.</br><font color=#F0F>【九阳无极】</font>你对其他角色造成伤害后,可令其减少等量的体力上限.</br><font color=#F0F>【元婴出世】</font>体力40%以上免疫【内伤】;摸牌阶段摸牌数、手牌上限+1;回合开始时随机移除1~2项异常状态.',
							group: ['XK_qingfengmingyue', 'XK_qingfengmingyue1', 'XK_jiuyangwuji', 'XK_yuanying', 'XK_yuanying1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_qingfengmingyue: {
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							forced: true,
							content() {
								player.addBuff('XK_xiejin', 2, player);
								if (player.storage.XK_jiuyangmiji_mark) {
									player.addBuff('XK_dafanshou', 2, player);
								}
							},
							ai: { XK_selfbuff: true },
						},
						XK_qingfengmingyue1: {
							trigger: {
								player: 'addBuffBegin',
							},
							filter(event, player) {
								if (player.checkHp(0.4, 'unequal')) return false;
								var info = lib.skill[event.skill];
								return info.ai && info.ai['XK_debuff'];
							},
							_priority: 90,
							forced: true,
							content() {
								if (player.name == 'XK_mingjiaojiaozhu') {
									game.playAudio('../extension/侠客风云传/audio/XK_qingfengmingyue1.mp3');
								}
								trigger.cancel();
							},
						},
						XK_jiuyangwuji: {
							//audio:"ext:侠客风云传/audio:1",
							trigger: {
								source: 'damageEnd',
							},
							_priority: 5,
							filter(event, player) {
								return event.player != player && event.num > 0 && event.player.isAlive();
							},
							check(event, player) {
								return get.attitude(player, event.player) <= 0;
							},
							prompt2(event, player) {
								return '是否令' + get.translation(event.player) + '减少' + event.num + '点体力上限？';
							},
							content() {
								if (player.name == 'XK_mingjiaojiaozhu') {
									game.playAudio('../extension/侠客风云传/audio/XK_jiuyangwuji2.mp3');
								} else {
									game.playAudio('../extension/侠客风云传/audio/XK_jiuyangwuji1.mp3');
								}
								trigger.player.loseMaxHp(trigger.num);
							},
							ai: {
								expose: 0.4,
							},
						},
						XK_youmingshisanshi: {
							description: '<font color=#F0F>【追魂夺魄】</font>摸牌阶段你可以少摸任意张牌,如此你可选择等量角色视为各对其使用1张不计次数的杀.</br><font color=#F0F>【阎王落笔】</font>锁定技,你的杀被闪抵消后,你获得【追魂】【心剑】1回合.',
							trigger: {
								player: 'phaseBefore',
							},
							_priority: 999,
							filter(event, player) {
								return player.name != 'XK_weiming';
							},
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio', player.name);
							},
							group: ['XK_zhuihunduopo', 'XK_yanwangluobi'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_zhuihunduopo: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'phaseDrawBegin',
							},
							forced: true,
							_priority: -10,
							filter(event, player) {
								return event.num > 0;
							},
							content() {
								'step 0';
								player.chooseTarget(
									get.prompt('XK_zhuihunduopo'),
									'视为对至多' + get.translation(trigger.num) + '名角色各使用一张不计次数的杀.',
									[1, trigger.num],
									function (card, player, target) {
										return player != target;
									},
									function (target) {
										var player = _status.event.player;
										return get.effect(target, { name: 'sha' }, player, player);
									}
								);
								('step 1');
								if (result.targets?.length) {
									var len = result.targets.length;
									for (var i = 0; i < len; i++) {
										player.useCard({ name: 'sha' }, result.targets[i], false);
									}
									trigger.num -= len;
								} else {
									event.finish();
								}
								('step 2');
								if (trigger.num <= 0) game.delay();
							},
							ai: {
								threaten: 1.2,
								expose: 0.3,
							},
						},
						XK_yanwangluobi: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: { player: 'shaMiss' },
							forced: true,
							filter(event, player) {
								return event.responded && get.itemtype(event.responded.cards) == 'cards';
							},
							content() {
								player.addBuff('XK_zhuihun', 1, player);
								player.addBuff('XK_xinjian', 1, player);
							},
							ai: { XK_selfbuff: true },
						},
						XK_liumaishenjianex: {
							trigger: {
								player: 'phaseBefore',
							},
							_priority: 999,
							filter(event, player) {
								return player.name != 'XK_weiming';
							},
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio', player.name);
							},
							group: ['XK_jianqizongheng', 'XK_jianqizongheng1', 'XK_liumaishisha'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_liumaishenjian: {
							description: '<font color=#F0F>【剑气纵横】</font>锁定技,结束阶段你获得X层【剑气】,X为距离你为1的角色数;在你攻击范围内的角色的杀结算完成后,你获得1层【剑气】.</br><font color=#F0F>【六脉十杀】</font>出牌阶段,你可以移除所有【剑气】,每移除2层视为使用1张雷杀,此杀无视距离、不计次数.',
							trigger: {
								player: 'phaseBefore',
							},
							_priority: 999,
							filter(event, player) {
								return player.name != 'XK_weiming';
							},
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio', player.name);
							},
							group: ['XK_jianqizongheng', 'XK_jianqizongheng1', 'XK_liumaishisha'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_jianqizongheng: {
							//audio:"ext:侠客风云传/audio:1",
							trigger: {
								player: ['phaseJieshuBegin'],
							},
							forced: true,
							_priority: -2,
							content() {
								'step 0';
								if (player.name == 'XK_dalishizi') {
									game.playAudio('../extension/侠客风云传/audio/XK_jianqizongheng2.mp3');
								} else {
									game.playAudio('../extension/侠客风云传/audio/XK_jianqizongheng1.mp3');
								}
								var num = game.countPlayer(function (current) {
									return get.distance(player, current) <= 1 && current != player;
								});
								if (!player.hasSkill('XK_jianqi')) {
									player.addSkill('XK_jianqi');
								}
								player.storage.XK_jianqi += num;
								('step 2');
								if (player.storage.XK_jianqi > 20) {
									player.storage.XK_jianqi = 20;
								}
							},
						},
						XK_jianqizongheng1: {
							trigger: {
								global: ['shaAfter'],
							},
							filter(event, player) {
								return event.player != player && player.inRange(event.player);
							},
							forced: true,
							_priority: -3,
							content() {
								'step 0';
								if (player.name == 'XK_dalishizi') {
									game.playAudio('../extension/侠客风云传/audio/XK_jianqizongheng3.mp3');
								}
								if (!player.hasSkill('XK_jianqi')) {
									player.addSkill('XK_jianqi');
								}
								if (player.storage.XK_liumaimiji_mark) {
									player.storage.XK_jianqi += 2;
								} else {
									player.storage.XK_jianqi++;
								}
								('step 2');
								if (player.storage.XK_jianqi > 20) {
									player.storage.XK_jianqi = 20;
								}
							},
						},
						XK_liumaishisha: {
							//audio:"ext:侠客风云传/audio:1",
							enable: 'phaseUse',
							filter(event, player) {
								return player.storage.XK_jianqi > 1;
							},
							content() {
								'step 0';
								if (player.name == 'XK_dalishizi') {
									game.playAudio('../extension/侠客风云传/audio/XK_liumaishisha2.mp3');
								} else {
									game.playAudio('../extension/侠客风云传/audio/XK_liumaishisha1.mp3');
								}
								var num = Math.floor(player.storage.XK_jianqi / 2);
								player.storage.XK_jianqi = 0;
								for (var i = 0; i < num; i++) {
									player.chooseUseTarget({ name: 'sha', nature: 'thunder' }, false, 'nodistance');
								}
								('step 1');
								player.removeSkill('XK_jianqi');
								player.unmarkSkill('XK_jianqi');
							},
							ai: {
								order: 0.5,
								result: {
									player(player) {
										return (player.storage.XK_jianqi - 2) / 2;
									},
								},
							},
						},
						XK_lingboweibuex: {
							init(player) {
								player.storage.XK_piaohuruoshen = true;
								player.markSkill('XK_piaohuruoshen');
							},
							onremove(player, skill) {
								player.unmarkSkill('XK_piaohuruoshen');
							},
							group: ['XK_piaohuruoshen', 'XK_piaohuruoshen1', 'XK_qiruoyoulan', 'XK_yuanying', 'XK_yuanying1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_lingboweibu: {
							description: '<font color=#F0F>【飘忽若神】</font>转换技,锁定技,你使用或打出:1.杀后,你的防御距离+2;2.闪后,你的进攻距离+4;结束阶段你可改变此状态.</br><font color=#F0F>【气若幽兰】</font>当你使用或打出闪后,可以随机移除1项负面状态,并获得【识破】2回合、【归元】1回合.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫【内伤】;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.',
							init(player) {
								player.storage.XK_piaohuruoshen = true;
								player.markSkill('XK_piaohuruoshen');
							},
							onremove(player, skill) {
								player.unmarkSkill('XK_piaohuruoshen');
							},
							group: ['XK_piaohuruoshen', 'XK_piaohuruoshen1', 'XK_qiruoyoulan', 'XK_dazhoutian', 'XK_dazhoutian1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_piaohuruoshen: {
							mod: {
								globalFrom(from, to, current) {
									if (from.storage.XK_piaohuruoshen == true) return current - 4;
								},
								globalTo(from, to, current) {
									if (to.storage.XK_piaohuruoshen == false) return current + 2;
								},
							},
							intro: {
								content(storage, player, skill) {
									if (player.storage.XK_piaohuruoshen == true) return '你的进攻距离+4;你使用或打出杀后转为防御距离+2';
									else return '你的防御距离+2;你使用或打出闪后转为进攻距离+4';
								},
							},
							_priority: 3,
							trigger: {
								player: ['useCardAfter', 'respondAfter'],
							},
							forced: true,
							filter(event, player) {
								if (player.storage.XK_piaohuruoshen == true) return event.card.name == 'sha';
								else return event.card.name == 'shan';
							},
							content() {
								'step 0';
								if (player.name == 'XK_dalishizi') {
									game.playAudio('../extension/侠客风云传/audio/XK_piaohuruoshen1.mp3');
								}
								if (player.storage.XK_piaohuruoshen == true) player.storage.XK_piaohuruoshen = false;
								else player.storage.XK_piaohuruoshen = true;
								('step 1');
							},
						},
						XK_piaohuruoshen1: {
							trigger: {
								player: 'phaseJieshuBegin',
							},
							_priority: 9,
							check(event, player) {
								if (player.hasSkill('XK_liumaishenjian')) {
									var num1 = Math.max(
										game.countPlayer(function (current) {
											return get.distance(player, current) <= 1 && current != player;
										}),
										2
									);
									var num2 = game.countPlayer(function (current) {
										return get.distance(player, current) <= 5 && current != player;
									});
									if (player.storage.XK_piaohuruoshen == false) {
										return num2 > num1;
									} else return num2 <= num1;
								} else {
									return player.storage.XK_piaohuruoshen == true;
								}
							},
							prompt2(event, player) {
								var str = '';
								if (player.storage.XK_piaohuruoshen == true) str = '进攻距离+4.';
								else str = '防御距离+2.';
								return '是否改变【飘忽若神】的状态？当前状态:' + str;
							},
							content() {
								if (player.name == 'XK_dalishizi') {
									game.playAudio('../extension/侠客风云传/audio/XK_piaohuruoshen2.mp3');
								}
								if (player.storage.XK_piaohuruoshen == true) player.storage.XK_piaohuruoshen = false;
								else player.storage.XK_piaohuruoshen = true;
							},
						},
						XK_qiruoyoulan: {
							//audio:"ext:侠客风云传/audio:1",
							trigger: {
								player: ['useCardAfter', 'respondAfter'],
							},
							prompt2(event, player) {
								if (player.storage.XK_lingbomiji_mark) return '是否随机移除1项负面状态,并获得【识破】【净化】2回合、【归元】1回合？';
								return '是否随机移除1项负面状态,并获得【识破】2回合、【归元】1回合？';
							},
							forced: true,
							filter(event, player) {
								return event.card.name == 'shan';
							},
							content() {
								if (player.name == 'XK_dalishizi') {
									game.playAudio('../extension/侠客风云传/audio/XK_qiruoyoulan2.mp3');
								} else {
									game.playAudio('../extension/侠客风云传/audio/XK_qiruoyoulan1.mp3');
								}
								player.removeBuff('XK_debuff', 1, 1, false, false);
								player.addBuff('XK_shipo', 2, player);
								if (player.storage.XK_lingbomiji_mark) {
									player.addBuff('XK_jinghua', 2, player);
								}
								player.addBuff('XK_guiyuan', 1, player);
							},
							ai: { XK_selfbuff: true },
						},
						XK_paodingdao: {
							trigger: {
								player: 'phaseBefore',
							},
							_priority: 999,
							filter(event, player) {
								return player.name == 'XK_wangrong';
							},
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_wangrong.mp3');
							},
							group: ['XK_liangpao', 'XK_yourenyouyu'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_liangpao: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								global: ['phaseDrawEnd', 'phaseDiscardEnd'],
							},
							forced: true,
							filter(event, player) {
								if (event.player == player) return false;
								return player.countCards('h', { type: 'basic' });
							},
							_priority: -2,
							content() {
								'step 0';
								var str = '是否弃置1张基本牌,令' + get.translation(trigger.player) + '弃置2张牌？';
								player
									.chooseCard(get.prompt('XK_liangpao'), str, 'h', false, function (card) {
										return get.type(card) == 'basic';
									})
									.set('ai', function (card) {
										var trigger = _status.event.getTrigger();
										var att = get.attitude(player, trigger.player);
										if (att < 0 && trigger.player.countCards('he') > 1) return 4 - get.value(card);
										return -1;
									});
								('step 1');
								if (result.cards?.length) {
									player.discard(result.cards[0]);
									trigger.player.chooseToDiscard('he', 2, true);
								}
							},
							ai: {
								expose: 0.3,
								threaten: 1.2,
							},
						},
						XK_yourenyouyu: {
							audio: 'ext:侠客风云传/audio:1',
							usable: 1,
							trigger: {
								source: 'damageEnd',
							},
							_priority: 2,
							filter(event, player) {
								if (event.card && event.card.name == 'sha' && event.notLink()) {
									return event.player.countCards('h') != player.countCards('h');
								}
								return false;
							},
							check(event, player) {
								if (event.player.countCards('h') < player.countCards('h')) return true;
								else return get.attitude(player, event.player) <= 0;
							},
							prompt2(event, player) {
								if (event.player.countCards('h') < player.countCards('h')) return '是否摸1张牌？';
								else return '是否弃置' + get.translation(event.player) + '1张牌？';
							},
							content() {
								if (trigger.player.countCards('h') < player.countCards('h')) {
									player.draw();
								} else {
									player.discardPlayerCard(trigger.player, true, 'he');
								}
							},
						},
						XK_paodinggong: {
							group: ['XK_shenshi', 'XK_xiaozhoutian'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_shenshi: {
							trigger: {
								player: 'phaseBefore',
							},
							forced: true,
							content() {
								var m = 0,
									e = 0,
									l = 0;
								var players = game.players;
								for (var i = 0; i < players.length; i++) {
									if (player[i] != player) {
										if (players[i].countCards('h') > player.countCards('h')) m++;
										if (players[i].countCards('h') == player.countCards('h')) e++;
										if (players[i].countCards('h') < player.countCards('h')) l++;
									}
								}
								if (l >= e && l >= m) player.addBuff('XK_juqi', 1, player);
								else player.addBuff('XK_xiejin', 2, player);
							},
							ai: { XK_selfbuff: true },
						},
						XK_cuihunbaidu: {
							trigger: {
								player: 'phaseBefore',
							},
							_priority: 999,
							filter(event, player) {
								return player.name == 'XK_luoshejun';
							},
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_luoshejun.mp3');
							},
							group: ['XK_wangliang', 'XK_wangliang1', 'XK_cuixinduanhun'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_wangliang: {
							trigger: {
								player: 'discardBefore',
							},
							filter(event, player) {
								return event.getParent(2).name == 'huogong';
							},
							forced: true,
							content() {
								'step 0';
								player.showCards(trigger.cards);
								('step 1');
								trigger.cancel();
							},
							ai: {
								effect: {
									player(card, player) {
										if (card.name == 'huogong') {
											return [1, 2];
										}
									},
								},
							},
						},
						XK_wangliang1: {
							audio: 'ext:侠客风云传/audio:1',
							enable: 'phaseUse',
							filterCard(card) {
								return card.name == 'sha';
							},
							position: 'h',
							viewAs: { name: 'huogong', nature: 'fire' },
							viewAsFilter(player) {
								if (!player.countCards('h', 'sha')) return false;
							},
							prompt: '将一张杀当火攻使用',
							check(card) {
								return 7 - get.useful(card);
							},
						},
						XK_cuixinduanhun: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								source: 'damageAfter',
							},
							_priority: 2,
							filter(event, player) {
								return event.num >= 0 && event.nature;
							},
							check(event, player) {
								return get.attitude(player, event.player) <= 0;
							},
							prompt2(event, player) {
								return '是否令' + get.translation(event.player) + '获得【中毒】2回合？';
							},
							content() {
								trigger.player.addBuff('XK_zhongdu', 2, player);
							},
							ai: {
								threaten: 1.1,
							},
						},
						XK_wanshedafa: {
							group: ['XK_duyu', 'XK_duyu1', 'XK_dazhoutian', 'XK_dazhoutian1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_duyu: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'addBuffBegin',
							},
							filter(event, player) {
								return event.skill == 'XK_zhongdu' || event.skill == 'XK_judu';
							},
							_priority: 9,
							forced: true,
							content() {
								trigger.cancel();
							},
							ai: {
								XK_nozhongdu: true,
							},
						},
						XK_duyu1: {
							trigger: {
								player: 'damageBefore',
							},
							filter(event, player) {
								return event.nature == 'fire';
							},
							firstDo: true,
							_priority: 99,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_duyu1.mp3');
								trigger.cancel();
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
						XK_xuanmingqisha: {
							trigger: {
								player: 'phaseBefore',
							},
							_priority: 999,
							filter(event, player) {
								return player.name == 'XK_xuanmingzi';
							},
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_xuanmingzi.mp3');
							},
							group: ['XK_duanhunshigu'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_duanhunshigu: {
							audio: 'ext:侠客风云传/audio:1',
							enable: 'phaseUse',
							selectCard: 1,
							position: 'he',
							filterCard(card) {
								return true;
							},
							check(card) {
								if (get.tag(card, 'damage')) return 5 - get.value(card);
								return 3.5 - get.value(card);
							},
							selectTarget: 1,
							filterTarget(card, player, target) {
								if (target == player) return false;
								return target.countCards('hej');
							},
							filter(event, player) {
								var num = Math.max(1, player.getDamagedHp());
								if (player.getStat().skill.XK_duanhunshigu >= num) return false;
								return player.countCards('he');
							},
							multiline: true,
							content() {
								player.discardPlayerCard(targets[0], 'hej', true);
							},
							ai: {
								order: 1,
								result: {
									target(player, target) {
										var att = get.attitude(player, target);
										if (target.countCards('j')) {
											return 1;
										} else return -1;
									},
								},
							},
						},
						XK_huagongdafa: {
							group: ['XK_tianchi', 'XK_huagong', 'XK_dazhoutian', 'XK_dazhoutian1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_tianchi: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: ['loseAfter'],
							},
							usable: 1,
							forced: true,
							filter(event, player) {
								if (!event.cards || event.cards.length < 1) return false;
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.tag(i, 'damage')) return true;
									}
								return false;
							},
							_priority: 3,
							content() {
								'step 0';
								var num1 = 0;
								for (var i = 0; i < trigger.cards.length; i++) {
									if (get.tag(trigger.cards[i], 'damage')) num1++;
								}
								player.draw(num1);
							},
						},
						XK_huagong: {
							audio: 'ext:侠客风云传/audio:1',
							enable: 'chooseToUse',
							filter(event, player) {
								return player.countCards('h', { name: ['sha', 'juedou', 'huogong'] });
							},
							filterCard(card) {
								return card.name == 'sha' || card.name == 'juedou' || card.name == 'huogong';
							},
							position: 'h',
							viewAs: { name: 'XK_shidu' },
							prompt: '将一张杀或决斗或火攻当施毒使用',
							check(card) {
								return 5 - get.value(card);
							},
							ai: {
								skillTagFilter(player) {
									return player.countCards('h', { name: ['sha', 'juedou', 'huogong'] }) > 0;
								},
								threaten: 1.3,
							},
						},
						XK_yanghui: {
							charlotte: true,
							group: ['XK_taoguangyanghui'],
							init(player) {
								player.storage.XK_taoguangyanghui = false;
							},
						},
						XK_taoguangyanghui: {
							audio: 'ext:侠客风云传/audio:1',
							zhuSkill: true,
							juexingji: true,
							enable: 'chooseToUse',
							filter(event, player) {
								if (event.type != 'dying') return false;
								if (player != event.dying) return false;
								if (!player.hasZhuSkill('XK_taoguangyanghui')) return false;
								return !player.storage.XK_taoguangyanghui;
							},
							content() {
								'step 0';
								player.awakenSkill('XK_taoguangyanghui');
								player.storage.XK_taoguangyanghui = true;
								player.discard(player.getCards('e'));
								player.loseMaxHp(2);
								('step 1');
								player.hp = 1;
								player.update();
								('step 2');
								var NG = player.getWugong('XK_neigong');
								player.removeSkill(NG[0]);
								player.addSkill('XK_bulaochangchungong');
								player.node.avatar.setBackgroundImage('extension/侠客风云传/image/XK_xuanmingziex.jpg');
								player.removeSkill('XK_yanghui');
							},
							ai: {
								skillTagFilter(player) {
									if (!player.hasZhuSkill('XK_taoguangyanghui')) return false;
									if (player.storage.XK_taoguangyanghui) return false;
									if (player.hp > 0) return false;
								},
								save: true,
								result: {
									player: 10,
								},
								threaten(player, target) {
									if (!target.storage.XK_taoguangyanghui) return 0.6;
								},
							},
						},
						XK_bulaochangchungong: {
							group: ['XK_bulaochangchun', 'XK_tianchangdijiu', 'XK_yuanying', 'XK_yuanying1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_bulaochangchun: {
							trigger: {
								player: 'phaseAfter',
							},
							_priority: -2,
							forced: true,
							content() {
								if (player.isDamaged()) player.recover();
								else player.gainMaxHp();
							},
						},
						XK_tianchangdijiu: {
							mod: {
								aiOrder(player, card, num) {
									if (typeof card == 'object' && player == _status.currentPhase) {
										var evt = player.getLastUsed();
										if (evt && evt.card && get.color(evt.card) != 'none' && get.color(card) != 'none' && get.color(evt.card) != get.color(card)) {
											return num + 10;
										}
									}
								},
							},
							usable: 4,
							trigger: { player: 'useCard' },
							forced: true,
							filter(event, player) {
								if (_status.currentPhase != player) return false;
								var evt = player.getLastUsed(1);
								if (!evt) return false;
								var color1 = get.color(evt.card);
								var color2 = get.color(event.card);
								return color1 && color2 && color1 != 'none' && color2 != 'none' && color1 != color2;
							},
							content() {
								player.draw();
							},
							ai: {
								threaten: 1.2,
							},
						},
						XK_chansibazhua: {
							trigger: {
								player: 'phaseBefore',
							},
							_priority: 999,
							filter(event, player) {
								return player.name == 'XK_shenlan';
							},
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_shenlan.mp3');
							},
							group: ['XK_qianduwangu'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_qianduwangu: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								source: 'addBuffBegin',
							},
							filter(event, player) {
								return (event.player.hasSkill('XK_judu') || event.player.hasSkill('XK_zhongdu')) && event.skill == 'XK_zhongdu';
							},
							check(event, player) {
								return get.attitude(player, event.player) <= 0;
							},
							prompt2(event, player) {
								return '是否令' + get.translation(event.player) + '随机获得【散功】【流血】【恐惧】【断筋】中的1~2项2回合？';
							},
							content() {
								var num = [1, 2].randomGet();
								var bt = ['XK_sangong', 'XK_liuxue', 'XK_kongju', 'XK_duanjin'];
								bt.sort(lib.sort.random);
								for (var i = 0; i < num; i++) {
									var temp = [1, 2].randomGet();
									trigger.player.addBuff(bt[i], temp, player);
								}
							},
						},
						XK_wudubaodian: {
							group: ['XK_dudian', 'XK_wudu', 'XK_xiaozhoutian'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_dudian: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								source: 'addBuffBegin',
							},
							_priority: 9,
							filter(event, player) {
								return event.skill == 'XK_zhongdu';
							},
							check(event, player) {
								return get.attitude(player, event.player) <= 0 && event.player.hasSkill('XK_zhongdu');
							},
							prompt2(event, player) {
								return '是否改为令' + get.translation(event.player) + '获得【剧毒】状态？';
							},
							content() {
								trigger.skill = 'XK_judu';
							},
						},
						XK_wudu: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								target: 'useCardToBefore',
							},
							filter(event, player) {
								if (!get.tag(event.card, 'damage')) return false;
								return event.player;
							},
							forced: true,
							content() {
								'step 0';
								player.judge('五毒', function (card) {
									if (card.suit != 'heart') return 3;
									return -3;
								});
								('step 1');
								if (result.bool == true) {
									trigger.player.addBuff('XK_zhongdu', 2, player);
								}
							},
							ai: {
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'damage')) {
											if (!target.hasFriend()) return;
											return [1, 0, 1, -1.5];
										}
									},
								},
							},
						},
						XK_miaodizhi: {
							trigger: {
								player: 'phaseBefore',
							},
							_priority: 999,
							filter(event, player) {
								return player.name == 'XK_wuyin';
							},
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_wuyin.mp3');
							},
							group: ['XK_miaodifahua', 'XK_miaodirulai', 'XK_miaodirulai2'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_miaodifahua: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								source: 'damageBegin',
							},
							usable: 1,
							_priority: 199,
							filter(event, player) {
								return event.num > 0;
							},
							check(event, player) {
								if (event.player.hasSkill('XK_dianxue')) return false;
								if (event.num > 1 || event.num >= event.player.hp) return false;
								return get.attitude(player, event.player) <= 0;
							},
							prompt2(event, player) {
								return '是否防止对' + get.translation(event.player) + '造成的伤害,令其获得【点穴】【内伤】1回合？';
							},
							logTarget: 'player',
							content() {
								'step 0';
								trigger.player.addBuff('XK_dianxue', 1, player);
								trigger.player.addBuff('XK_neishang', 1, player);
								('step 1');
								trigger.cancel();
							},
							ai: {
								expose: 0.3,
							},
						},
						XK_miaodirulai: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: ['phaseAfter'],
							},
							_priority: 9,
							filter(event, player) {
								if (player.hasSkill('XK_miaodirulai3')) return false;
								return game.hasPlayer(function (current) {
									return current.countCards('he');
								});
							},
							forced: true,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('XK_miaodirulai'), '你可令1名其他角色弃置至少1张牌,如此其获得一个额外的回合且于该回合至多使用等量的牌', function (card, player, target) {
									return target.countCards('he');
								}).ai = function (target) {
									var player = _status.event.player;
									var att = get.attitude(player, target);
									return att / target.hp;
								};
								('step 1');
								if (result.targets?.length) {
									event.target1 = result.targets[0];
									player.addSkill('XK_miaodirulai3');
									var str = '【妙谛如来】:弃置至少1张牌,如此你获得一个额外的回合且于该回合至多使用等量的牌.';
									var next = event.target1.chooseToDiscard('he', [1, Infinity], true);
									next.prompt2 = str;
									next.ai = function (card) {
										return 3 - get.value(card);
									};
									next.autodelay = true;
								}
								('step 2');
								if (result.bool) {
									game.log(event.target1, '获得了一个额外的回合');
									event.target1.addTempSkill('XK_miaodirulai1');
									event.target1.storage.XK_miaodirulai1 = result.cards.length;
									event.target1.markSkill('XK_miaodirulai1');
									event.target1.phase('nodelay');
								}
							},
							ai: {
								expose: 0.3,
							},
						},
						XK_miaodirulai1: {
							marktext: '妙',
							init(player) {
								player.storage.XK_miaodirulai1 = 1;
							},
							intro: {
								content(storage, player, skill) {
									return '本回合至多可以使用' + player.storage.XK_miaodirulai1 + '张牌';
								},
							},
							mod: {
								cardEnabled(card, player) {
									var num1 = player.countUsed(null, true);
									if (num1 >= player.storage.XK_miaodirulai1) return false;
								},
							},
							ai: { presha: true, pretao: true, nokeep: true },
						},
						XK_miaodirulai2: {
							forced: true,
							_priority: -3,
							charlotte: true,
							trigger: {
								global: 'roundStart',
							},
							filter(event, player) {
								return player.hasSkill('XK_miaodirulai3');
							},
							content() {
								player.removeSkill('XK_miaodirulai3');
							},
						},
						XK_miaodirulai3: {},
						XK_yijinjing: {
							group: ['XK_putilianhua', 'XK_yijinduangu', 'XK_yuanying', 'XK_yuanying1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_putilianhua: {
							//audio:"ext:侠客风云传/audio:1",
							trigger: {
								global: ['loseEnd'],
							},
							logTarget: 'player',
							usable: 1,
							check(event, player) {
								var att = get.attitude(player, event.player);
								if (att > 0 && !event.player.hasSkillTag('maixie_hp')) return true;
								return false;
							},
							filter(event, player) {
								var card1 = event.cards;
								return card1 && card1.length > 1 && event.player.isDamaged() && event.player.isAlive();
							},
							prompt2(event, player) {
								return '是否摸令' + get.translation(event.player) + '回复1点体力？';
							},
							content() {
								if (player.name == 'XK_linghudaxia') {
									game.playAudio('../extension/侠客风云传/audio/XK_putilianhua2.mp3');
								} else {
									game.playAudio('../extension/侠客风云传/audio/XK_putilianhua1.mp3');
								}
								trigger.player.recover();
							},
							ai: {
								threaten: 1.2,
								expose: 0.2,
							},
						},
						XK_yijinduangu: {
							description: '锁定技,你免疫体力流失、翻面.',
							trigger: {
								player: ['loseHpBegin', 'turnOverBefore'],
							},
							_priority: 99,
							forced: true,
							content() {
								if (player.name == 'XK_linghudaxia') {
									game.playAudio('../extension/侠客风云传/audio/XK_yijinduangu1.mp3');
								}
								trigger.cancel();
							},
							ai: {
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'damage')) {
											if (player.hasSkillTag('jueqing', false, target)) return 0;
										}
									},
								},
							},
						},
						XK_niepan: {
							charlotte: true,
							group: ['XK_zhuanlun'],
						},
						XK_zhuanlun: {
							trigger: {
								player: ['phaseAfter'],
							},
							_priority: -1,
							zhuSkill: true,
							forced: true,
							filter(event, player) {
								if (player.checkHp(0.5, 'equal')) return false;
								return player.hasZhuSkill('XK_niepan');
							},
							content() {
								player.addBuff('XK_xiejin', 1, player);
							},
							ai: { XK_selfbuff: true },
						},
						XK_canhuabaojian: {
							trigger: {
								player: 'phaseBefore',
							},
							_priority: 999,
							filter(event, player) {
								return player.name == 'XK_chenchongying';
							},
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_chenchongying.mp3');
							},
							group: ['XK_guixi', 'XK_canshang'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_guixi: {
							audio: 'ext:侠客风云传/audio:1',
							_priority: 9,
							trigger: {
								player: ['shaAfter'],
							},
							usable: 1,
							forced: true,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('XK_guixi'), '当你的杀结算完成后,你可令1名角色和你各摸1张牌,使此杀对该角色继续结算且无视防具', function (card, player, target) {
									return player != target;
								}).ai = function (target) {
									var card = _status.event.getTrigger().card;
									var eff = get.effect(target, card, player, player);
									return eff;
								};
								('step 1');
								if (result.bool) {
									player.draw();
									result.targets[0].draw();
									player.addTempSkill('XK_guixi1', { player: 'shaAfter' });
									player.useCard(trigger.card, trigger.cards, result.targets[0], false);
								} else event.finish();
							},
							ai: {
								expose: 0.2,
							},
						},
						XK_guixi1: {
							ai: {
								unequip: true,
								skillTagFilter(player, tag, arg) {
									if (arg && arg.name == 'sha') return true;
									return false;
								},
							},
							popup: false,
						},
						XK_canshang: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								source: 'damageAfter',
							},
							_priority: 3,
							filter(event, player) {
								if (!event.card || event.card.name != 'sha' || !event.notLink()) return false;
								return game.hasPlayer(function (current) {
									return current != player && player.inRange(current);
								});
							},
							check(event, player) {
								var num1 = 0;
								game.countPlayer(function (current) {
									var hs = current.countCards('he');
									var att = get.attitude(player, current);
									var dis = get.distance(player, current, 'attack');
									if (dis <= 1 && hs > 0) {
										if (hs == 1) {
											if (att > 0) num1 -= 3;
											else num1 += 3;
										} else {
											if (att > 0) num1 -= 0.5;
											else num1 += 1;
										}
									}
								});
								return num1 > 0;
							},
							prompt2(event, player) {
								var targets = game.filterPlayer(function (current) {
									return current != player && player.inRange(current) && current.countCards('he');
								});
								return '是否弃置' + get.translation(targets) + '各1张牌,且对因此失去最后1张手牌的角色获得【破绽】2回合.';
							},
							content() {
								'step 0';
								var tars = game.filterPlayer(function (current) {
									return current != player && player.inRange(current) && current.countCards('he');
								});
								event.targets = tars.sort(lib.sort.seat);
								event.num1 = 0;
								('step 1');
								player.discardPlayerCard(event.targets[event.num1], 'he', true);
								('step 2');
								if (result.cards?.length) {
									if (!event.targets[event.num1].countCards('h') && result.cards[0].original == 'h') {
										event.targets[event.num1].addBuff('XK_pozhan', 2, player);
									}
								}
								('step 3');
								event.num1++;
								if (event.num1 < event.targets.length) event.goto(1);
							},
							ai: {
								XK_shabonus: true,
							},
						},
						XK_canhuabaodian: {
							group: ['XK_feishang', 'XK_meiying', 'XK_yuanying', 'XK_yuanying1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_feishang: {
							trigger: {
								global: 'dieAfter',
							},
							forced: true,
							content() {
								if (trigger.source == player) {
									player.draw(2);
								} else player.draw();
							},
						},
						XK_meiying: {
							mod: {
								ignoredHandcard(card, player) {
									if (card.name == 'shan') {
										return true;
									}
								},
								cardDiscardable(card, player, name) {
									if (name == 'phaseDiscard' && card.name == 'shan') return false;
								},
							},
						},
						XK_pilidaofa: {
							trigger: {
								player: 'phaseBefore',
							},
							_priority: 999,
							filter(event, player) {
								return player.name == 'XK_qinhongshang';
							},
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_qinhongshang.mp3');
							},
							group: ['XK_sanqianleidong'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_sanqianleidong: {
							trigger: {
								player: 'damageEnd',
							},
							filter(event, player) {
								return !event.nature;
							},
							forced: true,
							audio: 'ext:侠客风云传/audio:1',
							content() {
								'step 0';
								player
									.chooseControlList(['摸1张牌并效果下一个弃牌阶段', '获得造成伤害的牌并跳过下一个判定阶段'])
									.set('ai', function (event, player) {
										if (player.hasJudge('lebu') || player.hasJudge('bingliang')) return 1;
										return 0;
									})
									.set('prompt', '【三千雷动】:请选择1项');
								('step 1');
								if (result.index == 0) {
									player.draw();
									player.skip('phaseDiscard');
								} else if (result.index == 1) {
									if (get.itemtype(trigger.cards) == 'cards') {
										player.gain(trigger.cards, 'gain2');
									}
									player.skip('phaseJudge');
								}
							},
						},
						XK_pilixinfa: {
							group: ['XK_leiting', 'XK_leiting1', 'XK_wanjun', 'XK_xiaozhoutian'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_leiting: {
							trigger: {
								source: 'damageBefore',
							},
							filter(event, player) {
								return !event.nature;
							},
							audio: 'ext:侠客风云传/audio:1',
							prompt2(event, player) {
								return '是否令你对' + get.translation(event.player) + '造成的伤害变为雷属性?';
							},
							firstDo: true,
							logTarget: 'player',
							check(event, player) {
								if (!event.player.hasSkillTag('nothunder')) return true;
							},
							content() {
								trigger.nature = 'thunder';
							},
						},
						XK_leiting1: {
							trigger: {
								player: 'damageBefore',
							},
							filter(event, player) {
								return event.nature == 'thunder';
							},
							audio: 'ext:侠客风云传/audio:1',
							prompt2(event, player) {
								return '是否取消' + get.translation(event.source) + '对你造成的雷属性伤害?';
							},
							logTarget: 'source',
							firstDo: true,
							_priority: 99,
							check(event, player) {
								if (!player.hasSkillTag('nothunder')) return true;
							},
							content() {
								trigger.cancel();
							},
							ai: {
								nothunder: true,
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'thunderDamage')) return 0;
									},
								},
							},
						},
						XK_wanjun: {
							trigger: {
								source: 'damageEnd',
							},
							forced: true,
							_priority: 2,
							filter(event, player) {
								if (player.isHealthy()) return false;
								if (event.parent.name == 'XK_wanjun') return false;
								if (!event.nature || event.nature != 'thunder') return false;
								return event.notLink() && event.player.isAlive();
							},
							audio: 'ext:侠客风云传/audio:1',
							ai: {
								expose: 0.3,
								XK_shabonus: true,
							},
							content() {
								'step 0';
								if (player.countCards('h')) {
									var num1 = player.maxHp - player.hp;
									var next = player.chooseToDiscard(get.prompt('XK_wanjun'), '是否弃置至多' + num1 + '张手牌对' + get.translation(trigger.player) + '造成的额外的雷属性伤害?', [1, num1], 'h');
									next.set('ai', function (card) {
										var trigger = _status.event.getTrigger();
										if (get.attitude(player, trigger.player) < 0) {
											return 5 - get.value(card);
										}
										return -1;
									});
								}
								('step 1');
								if (result.cards?.length) {
									var num1 = result.cards.length;
									trigger.player.damage(player, num1, 'thunder', 'nocard');
								}
							},
						},
						XK_tianji: {
							trigger: {
								player: 'phaseBefore',
							},
							_priority: 999,
							filter(event, player) {
								return player.name == 'XK_taya';
							},
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_taya.mp3');
							},
							group: ['XK_shenqu', 'XK_shenqu1', 'XK_qishi'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_shenqu: {
							trigger: {
								global: 'phaseJieshuBegin',
							},
							_priority: 99,
							filter(event, player) {
								if (player.storage.XK_shenqu >= 4) return false;
								return player.countCards('h') > 0 && event.player != player && event.player.isAlive();
							},
							audio: 'ext:侠客风云传/audio:1',
							forced: true,
							content() {
								'step 0';
								player.chooseCard('【神曲但丁】:是否交给' + get.translation(trigger.player) + '1张手牌?', 1).ai = function (card) {
									var trigger = _status.event.getTrigger();
									if (get.attitude(player, trigger.player) > 0) return 6 - get.value(card);
									return card.name == 'du';
								};
								('step 1');
								if (result.cards?.length) {
									trigger.player.gain(result.cards, player, 'giveAuto');
									if (!trigger.player.storage.XK_shenqu2) {
										trigger.player.storage.XK_shenqu2 = 0;
									}
									trigger.player.storage.XK_shenqu2++;
									if (!player.storage.XK_shenqu) {
										player.storage.XK_shenqu = 0;
									}
									player.storage.XK_shenqu++;
								}
							},
							ai: {
								expose: 0.2,
							},
						},
						XK_shenqu1: {
							trigger: {
								player: ['phaseJieshuBegin'],
							},
							filter(event, player) {
								return player.storage.XK_shenqu > 0;
							},
							audio: 'ext:侠客风云传/audio:1',
							forced: true,
							content() {
								if (player.storage.XK_shenqu > 0) {
									var num = player.storage.XK_shenqu;
									player.draw(num);
								}
								player.storage.XK_shenqu = 0;
							},
						},
						XK_shenqu2: {},
						XK_qishi: {
							trigger: {
								global: 'phaseJieshuBegin',
							},
							_priority: -99,
							filter(event, player) {
								if (event.player == player) return false;
								return event.player.storage.XK_shenqu2 >= 2;
							},
							prompt2(event, player) {
								return '是否令' + get.translation(event.player) + '获得1个额外的出牌阶段?';
							},
							audio: 'ext:侠客风云传/audio:1',
							logTarget: 'player',
							check(event, player) {
								return get.attitude(player, event.player) > 0;
							},
							content() {
								trigger.player.storage.XK_shenqu2 = 0;
								trigger.player.stat.push({ card: {}, skill: {} });
								trigger.player.phaseUse();
							},
							ai: {
								threaten: 1.2,
								expose: 0.2,
							},
						},
						XK_taiyixingchen: {
							init(player) {
								player.storage.XK_xingxiang = 0;
							},
							group: ['XK_xingxiang', 'XK_xiaozhoutian'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_xingxiang: {
							trigger: {
								player: ['dyingBegin'],
							},
							filter(event, player) {
								if (player.hp > 0) return false;
								return player.countDisabled() < 5;
							},
							check(event, player) {
								return true;
							},
							prompt2(event, player) {
								return '是否废除一个装备栏并进行判定？若结果大于你废除的装备栏数*2,你回复1点体力.';
							},
							content() {
								'step 0';
								player.chooseToDisable();
								('step 1');
								var num = player.countDisabled() * 2;
								player.judge('星象', function (card) {
									if (card.number > num) return 3;
									return -3;
								});
								('step 2');
								if (result.bool == true) {
									game.playAudio('../extension/侠客风云传/audio/XK_xingxiang1.mp3');
									player.recover();
								}
							},
						},
						XK_daojian: {
							trigger: {
								player: 'phaseBefore',
							},
							_priority: 999,
							filter(event, player) {
								return player.name == 'XK_jingji';
							},
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_jingji.mp3');
							},
							group: ['XK_zoujian', 'XK_daoshan'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_zoujian: {
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return target != player && target.countCards('h') > 0;
							},
							prompt2(event, player) {
								return '获得1名其他角色1张你可以使用的手牌,使用或弃置此牌.';
							},
							audio: 'ext:侠客风云传/audio:1',
							content() {
								'step 0';
								event.cards = target.getCards('h', function (card) {
									return lib.filter.cardEnabled(card, player);
								});
								if (!event.cards.length) {
									event.finish();
								}
								('step 1');
								player.chooseCardButton('选择一张牌使用', event.cards).ai = function (button) {
									return get.value(button.link);
								};
								('step 2');
								if (result.links?.length) {
									event.gained = result.links[0];
									player.gain(event.gained, target, 'giveAuto');
									var next = player.chooseToUse();
									next.filterCard = function (card) {
										return card == event.gained;
									};
									next.prompt = '是否使用' + get.translation(event.gained) + '？';
								} else {
									event.finish();
								}
								('step 3');
								if (get.position(event.gained) == 'h') {
									player.discard(event.gained);
								}
							},
							ai: {
								expose: 0.3,
								order: 9,
								result: {
									target(player, target, card) {
										return -2;
									},
								},
							},
						},
						XK_daoshan: {
							trigger: {
								source: 'damageAfter',
							},
							filter(event, player) {
								if (!event.card || !get.color(event.card) || !event.notLink()) return false;
								return get.color(event.card) == 'black';
							},
							audio: 'ext:侠客风云传/audio:1',
							check(event, player) {
								return get.attitude(player, event.player) <= 0;
							},
							prompt2(event, player) {
								return '是否令' + get.translation(event.player) + '获得【流血】2回合？';
							},
							content() {
								'step 0';
								trigger.player.addBuff('XK_liuxue', 2, player);
							},
						},
						XK_yanxing: {
							group: ['XK_aoxiang', 'XK_aoxiang1', 'XK_dazhoutian', 'XK_dazhoutian1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_aoxiang: {
							enable: ['chooseToRespond', 'chooseToUse'],
							filter(event, player) {
								return _status.currentPhase == player;
							},
							filterCard(card, player) {
								return get.color(card) == 'black';
							},
							audio: 'ext:侠客风云传/audio:1',
							position: 'he',
							viewAs: {
								name: 'sha',
							},
							viewAsFilter(player) {
								if (_status.currentPhase != player) return false;
								if (!player.countCards('he', { color: 'black' })) return false;
							},
							prompt: '将一张黑色牌当杀使用或打出',
							check(card) {
								return 4 - get.value(card);
							},
							ai: {
								skillTagFilter(player) {
									if (_status.currentPhase != player) return false;
									if (!player.countCards('he', { color: 'black' })) return false;
								},
								respondSha: true,
							},
						},
						XK_aoxiang1: {
							trigger: {
								source: 'damageEnd',
							},
							forced: true,
							filter(event, player) {
								return event.card && event.card.name == 'sha' && _status.currentPhase == player;
							},
							content() {
								if (player.stat[player.stat.length - 1].card.sha > 0) {
									player.stat[player.stat.length - 1].card.sha--;
								}
							},
						},
						XK_shuihu: {
							trigger: {
								player: 'phaseBefore',
							},
							_priority: 999,
							filter(event, player) {
								return player.name == 'XK_guyuexuan';
							},
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_guyuexuan.mp3');
							},
							group: ['XK_songjiang', 'XK_songjiang1'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_songjiang: {
							marktext: '荡',
							forced: true,
							_priority: -10,
							trigger: {
								target: 'shaBegin',
							},
							intro: {
								content: 'mark',
							},
							audio: 'ext:侠客风云传/audio:1',
							content() {
								if (!player.storage.XK_songjiang) {
									player.storage.XK_songjiang = 0;
								}
								player.storage.XK_songjiang++;
								player.markSkill('XK_songjiang');
							},
						},
						XK_songjiang1: {
							mod: {
								maxHandcard(player, num) {
									var num1 = player.storage.XK_songjiang;
									if (num1) return num + num1;
								},
							},
							prompt2(event, player) {
								return '是否移除所有<荡>并摸等量的牌？每移除3枚,回复1点体力.';
							},
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.storage.XK_songjiang > 0;
							},
							check(event, player) {
								if (player.hp >= 4) return true;
								if (player.hp < 4) {
									if (player.storage.XK_songjiang >= 3) return true;
								}
								return false;
							},
							content() {
								var num = player.storage.XK_songjiang;
								var num1 = Math.floor(num / 3);
								player.draw(num);
								if (num1 > 0) {
									player.recover(num1);
								}
								player.storage.XK_songjiang = 0;
								player.unmarkSkill('XK_songjiang');
							},
						},
						XK_pengfei: {
							group: ['XK_qianli', 'XK_zhanchi', 'XK_zhanchi1', 'XK_dazhoutian', 'XK_dazhoutian1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_qianli: {
							_priority: 15,
							trigger: {
								global: ['shaBefore'],
							},
							filter(event, player) {
								if (event.player == player) return false;
								if (!player.countCards('h')) return false;
								if (get.distance(player, event.target) > 1) return false;
								return player.isAlive() && !event.targets.includes(player);
							},
							audio: 'ext:侠客风云传/audio:1',
							forced: true,
							content() {
								'step 0';
								var next = player.chooseToDiscard('he', get.prompt('XK_qianli', trigger.player), '是否弃置1张牌,使' + get.translation(trigger.card) + '的目标变为你？');
								next.set('ai', function (card) {
									var att = get.attitude(player, _status.event.getTrigger().target);
									if (att > 0) {
										if ((player.countCards('h', 'shan') > 0 && player.hp < 2) || player.hp > 1) {
											return 6 - get.value(card);
										}
									}
									return -1;
								});
								('step 1');
								if (result.bool) {
									trigger.player.line(player, 'green');
									trigger.target = player;
								} else event.finish();
								('step 2');
								trigger.player.chooseToDiscard('弃置一张杀,否则受到' + get.translation(player) + '1点伤害', function (card) {
									return card.name == 'sha';
								});
								('step 3');
								if (!result.bool) {
									trigger.player.damage(player, 'nocard');
								}
							},
							ai: {
								expose: 0.4,
								threaten: 1.2,
							},
						},
						XK_zhanchi: {
							mod: {
								globalFrom(from, to, current) {
									var num1 = from.storage.XK_zhanchi;
									if (num1) return current - num1;
								},
							},
							marktext: '鹏',
							trigger: {
								player: 'useCardEnd',
							},
							filter(event, player) {
								return player.isPhaseUsing();
							},
							intro: {
								content(storage) {
									var str = '进攻距离+' + storage;
									return str;
								},
							},
							forced: true,
							content() {
								'step 0';
								if (!player.storage.XK_zhanchi) player.storage.XK_zhanchi = 0;
								player.storage.XK_zhanchi++;
								player.markSkill('XK_zhanchi');
							},
						},
						XK_zhanchi1: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.storage.XK_zhanchi > 0;
							},
							forced: true,
							content() {
								player.storage.XK_zhanchi = 0;
								player.unmarkSkill('XK_zhanchi');
							},
						},
						XK_tianshanliuyang: {
							init(player) {
								player.storage.XK_yangguan = 0;
								player.markSkill('XK_yangguan');
							},
							trigger: {
								player: 'phaseBefore',
							},
							_priority: 999,
							filter(event, player) {
								return player.name == 'XK_wuxiazi';
							},
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_wuxiazi.mp3');
							},
							group: ['XK_yangguan', 'XK_yangge'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_yangguan: {
							trigger: {
								player: ['useCardAfter', 'respondAfter'],
							},
							forced: true,
							audio: 'ext:侠客风云传/audio:1',
							_priority: 19,
							intro: {
								content(storage) {
									return '已使用或打出:<span class="bluetext">' + storage + '</span> 张牌';
								},
							},
							content() {
								'step 0';
								player.storage.XK_yangguan++;
								('step 1');
								if (player.storage.XK_yangguan >= 3) {
									player.storage.XK_yangguan -= 3;
									player.draw();
								}
							},
						},
						XK_yangge: {
							trigger: {
								global: ['useCardAfter'],
							},
							usable: 1,
							charlotte: true,
							forced: true,
							_priority: 17,
							filter(event, player) {
								if (typeof player.storage.XK_yangguan != 'number') return false;
								if (_status.currentPhase == player) return false;
								if (event.player == player) return false;
								var tp = get.type(event.card);
								if (player.countCards('h', { type: tp })) return false;
								return true;
							},
							audio: 'ext:侠客风云传/audio:1',
							content() {
								'step 0';
								player.showHandcards();
								player.storage.XK_yangguan++;
								('step 1');
								if (player.storage.XK_yangguan >= 3) {
									player.storage.XK_yangguan -= 3;
									player.draw();
								}
							},
						},
						XK_beimingwuxiang: {
							init(player) {
								player.storage.XK_beiming = [];
								player.storage.XK_beiming_a = 0;
								player.markSkill('XK_beiming');
							},
							group: ['XK_beiming', 'XK_beiming1', 'XK_riyue', 'XK_yuanying', 'XK_yuanying1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_beiming: {
							intro: {
								content(storage) {
									if (!storage.length) {
										return '本轮未有角色使用过基本牌';
									} else {
										var str = '本轮已被使用过的类型的基本牌有:' + get.translation(storage);
										return str;
									}
								},
							},
							onremove(player) {
								delete player.storage.XK_beiming;
								player.unmarkSkill(XK_beiming);
							},
							audio: 'ext:侠客风云传/audio:1',
							enable: 'chooseToUse',
							filter(event, player) {
								if (player.storage.XK_beiming_a >= 1) return false;
								if (event.filterCard && event.filterCard({ name: 'sha' }, player, event) && player.storage.XK_beiming.includes('sha')) return true;
								if (event.filterCard && event.filterCard({ name: 'jiu' }, player, event) && player.storage.XK_beiming.includes('jiu')) return true;
								if (event.filterCard && event.filterCard({ name: 'tao' }, player, event) && player.storage.XK_beiming.includes('tao')) return true;
								if (event.filterCard && event.filterCard({ name: 'shan' }, player, event) && player.storage.XK_beiming.includes('shan')) return true;
								return false;
							},
							chooseButton: {
								dialog(event, player) {
									var list = [];
									if (event.filterCard && event.filterCard({ name: 'sha' }, player, event) && player.storage.XK_beiming.includes('sha')) {
										list.push(['基本', '', 'sha']);
									}
									if (event.filterCard && event.filterCard({ name: 'tao' }, player, event) && player.storage.XK_beiming.includes('tao')) {
										list.push(['基本', '', 'tao']);
									}
									if (event.filterCard && event.filterCard({ name: 'jiu' }, player, event) && player.storage.XK_beiming.includes('jiu')) {
										list.push(['基本', '', 'jiu']);
									}
									if (event.filterCard && event.filterCard({ name: 'shan' }, player, event) && player.storage.XK_beiming.includes('shan')) {
										list.push(['基本', '', 'shan']);
									}
									return ui.create.dialog('【北冥】', [list, 'vcard'], 'hidden');
								},
								check(button) {
									var player = get.player();
									var card = { name: button.link[2] };
									if (card.name == 'shan') return 3;
									if (
										game.hasPlayer(function (current) {
											return player.canUse({ name: 'sha' }, current) && get.effect(current, { name: 'sha' }, player, player) > 0;
										})
									) {
										if (card.name == 'sha') {
											return 2.9;
										} else if (card.name == 'jiu') {
											if (player.storage.XK_jumen.includes('sha') || player.hasUsableCard('sha')) return 4;
											if (player.hp <= 0) return 3.5;
											return 0;//QQQ
										}
									}
									if (
										game.hasPlayer(function (current) {
											return player.canUse({ name: 'tao' }, current) && get.effect(current, { name: 'tao' }, player, player) > 0;
										}) &&
										card.name == 'tao'
									) {
										return 4;
									}
									return 0;
								},
								backup(links, player) {
									return {
										filterCard(card) {
											return false;
										},
										popname: true,
										selectCard: -1,
										viewAs: {
											name: links[0][2],
										},
										onuse(result, player) {
											player.storage.XK_beiming_a++;
										},
									};
								},
								prompt(links, player) {
									return '视为使用1张' + get.translation(links[0][2]);
								},
							},
							ai: {
								order() {
									var player = get.player();
									var event = _status.event;
									if (event.type == 'dying') {
										if (event.filterCard && event.filterCard({ name: 'tao' }, player, event)) return 0.5;
									} else {
										if ((event.filterCard && event.filterCard({ name: 'tao' }, player, event)) || event.filterCard({ name: 'shan' }, player, event)) return 4;
										if (event.filterCard && event.filterCard({ name: 'sha' }, player, event)) return 2.9;
									}
									return 0;
								},
								save: true,
								respondSha: true,
								respondShan: true,
								skillTagFilter(player, tag, arg) {
									if (!player.storage.XK_beiming.length) return false;
								},
								result: {
									player(player) {
										if (_status.event.type == 'dying') return get.attitude(player, _status.event.dying);
										else return 1;
									},
								},
							},
						},
						XK_beiming1: {
							trigger: {
								global: 'roundStart',
							},
							_priority: 20,
							forced: true,
							content() {
								player.storage.XK_beiming = [];
								player.storage.XK_beiming_a = 0;
							},
						},
						XK_riyue: {
							trigger: {
								global: 'useCard',
							},
							audio: 'ext:侠客风云传/audio:1',
							forced: true,
							filter(event, player) {
								if (!player.storage.XK_beiming) return false;
								if (get.type(event.card) != 'basic') return false;
								return !player.storage.XK_beiming.includes(event.card.name);
							},
							_priority: -1,
							content() {
								'step 0';
								player.storage.XK_beiming.push(trigger.card.name);
								('step 1');
								player.chooseBool('【日月】:是否令' + get.translation(trigger.player) + '摸1张牌？').set('ai', function () {
									return get.attitude(player, _status.event.getTrigger().player) > 0;
								});
								('step 2');
								if (result.bool) {
									trigger.player.draw();
								}
								('step 3');
								var str = ['sha', 'shan', 'jiu', 'tao'];
								var bool = true;
								for (var i = 0; i < str.length; i++) {
									if (!player.storage.XK_beiming.includes(str[i])) bool = false;
								}
								if (bool && str.includes(trigger.card.name)) {
									player.chooseBool('是否回复1点体力？').set('ai', function () {
										return true;
									});
								}
								('step 4');
								if (result.bool) {
									player.recover();
								}
							},
							ai: {
								expose: 0.3,
							},
						},
						XK_bocai: {
							init(player) {
								player.storage.XK_duoyi = [];
							},
							charlotte: true,
							group: ['XK_duoyi'],
						},
						XK_duoyi: {
							marktext: '艺',
							zhuSkill: true,
							trigger: {
								player: ['useCardEnd', 'respondEnd'],
							},
							audio: 'ext:侠客风云传/audio:1',
							forced: true,
							filter(event, player) {
								if (!player.hasZhuSkill('XK_duoyi')) return false;
								var suit = event.card.suit;
								if (suit && !player.storage.XK_duoyi.includes(suit)) return true;
								return false;
							},
							intro: {
								content(storage) {
									if (!storage.length) {
										return '未使用过有花色的牌';
									} else {
										var str = '已使用过的花色有:' + get.translation(storage[0]);
										for (var i = 1; i < storage.length; i++) {
											str += '、' + get.translation(storage[i]);
										}
										return str;
									}
								},
							},
							content() {
								'step 0';
								player.storage.XK_duoyi.push(trigger.card.suit);
								player.markSkill('XK_duoyi');
								('step 1');
								if (player.storage.XK_duoyi.length == 4) {
									player.getStat().card = {};
									player.storage.XK_duoyi = [];
									player.unmarkSkill('XK_duoyi');
								}
							},
						},
						XK_zhentianchui: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_leizhentian';
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_leizhentian.mp3');
							},
							group: ['XK_jingtiandongdi'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_jingtiandongdi: {
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return game.hasPlayer(function (current) {
									return current != player && current.hp >= player.hp;
								});
							},
							audio: 'ext:侠客风云传/audio:1',
							filterTarget(card, player, target) {
								return player != target && target.hp >= player.hp;
							},
							selectTarget: 1,
							content() {
								'step 0';
								player.damage(target, 'nocard');
								target.addBuff('XK_yunxuan', 1, player);
							},
							ai: {
								order: 8,
								result: {
									target(player, target) {
										if (player.hp > 2) return -2;
										return 0;
									},
								},
								expose: 0.4,
							},
						},
						XK_kuangleigong: {
							init(player) {
								player.storage.XK_kuanglei1 = 0;
							},
							group: ['XK_kuanglei', 'XK_kuanglei1', 'XK_xiaozhoutian'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_kuanglei: {
							trigger: {
								player: ['damageBegin'],
							},
							forced: true,
							filter(event, player) {
								return event.source && event.source != player && event.num > 0;
							},
							content() {
								'step 0';
								if (trigger.source.hp > player.hp) {
									player.storage.XK_kuanglei1++;
									player.markSkill('XK_kuanglei1');
									event.finish();
								} else if (trigger.source.hp == player.hp) {
									player.draw();
									event.finish();
								} else if (player.countCards('e')) {
									player.chooseCardButton('重铸1张装备牌', player.getCards('e'), true).ai = function (button) {
										return 5 - get.value(button.link);
									};
								} else event.finish();
								('step 1');
								if (result.links?.length) {
									var cards = result.links;
									player.lose(cards, ui.discardPile);
									player.$throw(cards, 1000);
									game.log(player, '将', cards, '置入了弃牌堆');
									event.draw = { bool: true, num: cards.length };
								} else event.finish();
								('step 2');
								if (event.draw && event.draw.bool) {
									player.draw(event.draw.num);
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
											if (player.hp == target.hp) return [1, 1];
											if (player.hp > target.hp) return [1, 2];
										}
									},
								},
							},
						},
						XK_kuanglei1: {
							marktext: '雷',
							intro: {
								content(storage) {
									return '你造成的下' + storage + '次伤害+1';
								},
							},
							trigger: {
								source: 'damageBegin',
							},
							_priority: 3,
							filter(event, player) {
								return event.notLink() && player.storage.XK_kuanglei1 > 0;
							},
							forced: true,
							content() {
								'step 0';
								trigger.num++;
								('step 1');
								player.storage.XK_kuanglei1--;
								if (player.storage.XK_kuanglei1 == 0) {
									player.unmarkSkill('XK_kuanglei1');
								}
							},
							ai: {
								XK_shabonus: true,
								damageBonus: true,
							},
						},
						XK_qinglian: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_shenxiangyun';
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_shenxiangyun.mp3');
							},
							group: ['XK_jinzhen', 'XK_jinglian'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_jinzhen: {
							audio: 'ext:侠客风云传/audio:1',
							enable: 'phaseUse',
							usable: 1,
							prompt: '令1名角色重铸任意张不同花色的牌',
							selectTarget: 1,
							filterTarget(card, player, target) {
								return target.countCards('he');
							},
							content() {
								'step 0';
								target
									.chooseCardButton(get.prompt('XK_jinzhen'), '重铸任意张不同花色的牌', [1, target.countCards('he')], target.getCards('he'), true)
									.set('filterButton', function (button) {
										var suit = button.link.suit;
										for (var i = 0; i < ui.selected.buttons.length; i++) {
											if (ui.selected.buttons[i].suit == suit) return false;
										}
										return true;
									})
									.set('ai', function (button) {
										return 6 - get.value(button.link);
									});
								('step 1');
								if (result.links?.length) {
									var cards = result.links;
									target.lose(cards, ui.discardPile);
									target.$throw(cards, 1000);
									game.log(target, '将', cards, '置入了弃牌堆');
									event.draw = { bool: true, num: cards.length };
								} else event.finish();
								('step 2');
								if (event.draw && event.draw.bool) {
									target.draw(event.draw.num);
								}
							},
							ai: {
								order: 1,
								expose: 0.3,
								result: {
									target: 1,
								},
							},
						},
						XK_jinglian: {
							ai: {
								expose: 0.3,
							},
							trigger: {
								global: ['loseEnd'],
							},
							countSuit(cards) {
								var suits = [];
								for (var i = 0; i < cards.length; i++) {
									var suit = cards[i].suit;
									if (!suits.includes(suit)) {
										suits.push(suit);
									}
								}
								return suits.length;
							},
							usable: 1,
							prompt2(event, player) {
								var num1 = lib.skill.XK_jinglian.countSuit(event.cards);
								var str = '';
								if (num1 == 2) str = '摸1张牌';
								if (num1 == 3) str = '随机移除1项异常状态';
								if (num1 == 4) str = '获得【聚气】2回合';
								return '是否令' + get.translation(event.player) + str + '?';
							},
							check(event, player) {
								return get.attitude(player, event.player) > 0;
							},
							audio: 'ext:侠客风云传/audio:1',
							filter(event, player) {
								if (get.itemtype(event.cards) != 'cards' || event.cards.length <= 1) return false;
								var num1 = lib.skill.XK_jinglian.countSuit(event.cards);
								return num1 >= 2;
							},
							content() {
								'step 0';
								var num1 = lib.skill.XK_jinglian.countSuit(trigger.cards);
								if (num1 == 2) trigger.player.draw();
								if (num1 == 3) trigger.player.removeBuff('XK_debuff', 1, 1, false, false);
								if (num1 == 4) trigger.player.addBuff('XK_juqi', 2, player);
							},
						},
						XK_wangyouxinfa: {
							group: ['XK_qingxin', 'XK_xiaozhoutian'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_qingxin: {
							trigger: { player: 'phaseDrawBegin2' },
							forced: true,
							filter(event, player) {
								return !event.numFixed;
							},
							content() {
								trigger.num++;
							},
							ai: {
								threaten: 1.1,
							},
							mod: {
								maxHandcard(player, num) {
									return num + 1;
								},
							},
						},
						XK_yanzici: {
							init(player) {
								player.markSkill('XK_guichao');
								player.storage.XK_guichao = 'basic';
							},
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_shiyan';
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_shiyan.mp3');
							},
							group: ['XK_chaoshui', 'XK_chaoshui1', 'XK_chaoshui2', 'XK_guichao', 'XK_guichao1'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_chaoshui: {
							ai: {
								combo: 'XK_guichao',
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'respondShan')) {
											if (get.attitude(target, player) <= 0) {
												if (current > 0) return;
												if (target.countCards('h') == 0) return 1.6;
												if (target.countCards('h') == 1) return 1.2;
												if (target.countCards('h') == 2) return [0.8, 0.2, 0, -0.2];
												return [0.4, 0.7, 0, -0.7];
											}
										}
									},
								},
							},
						},
						XK_chaoshui1: {
							trigger: { player: ['useCard'] },
							filter(event, player) {
								if (event.skill != 'XK_guichao') return false;
								var target = lib.skill.XK_chaoshui1.logTarget(event, player);
								return target && target.countGainableCards(player, 'h') > 0;
							},
							logTarget(event, player) {
								if (event.card.name == 'sha') return event.targets[0];
								return event.respondTo[0];
							},
							audio: 'ext:侠客风云传/audio:1',
							prompt2: '每当你发动【乳燕归巢】使用或打出一张【闪】时,你可以立即获得对方的一张手牌.',
							content() {
								var target = lib.skill.XK_chaoshui1.logTarget(trigger, player);
								player.gainPlayerCard(target, 'h', true);
							},
						},
						XK_chaoshui2: {
							trigger: { player: 'respond' },
							filter(event, player) {
								if (event.skill != 'XK_guichao') return false;
								return event.source && event.source.countGainableCards(player, 'h') > 0;
							},
							audio: 'ext:侠客风云传/audio:1',
							logTarget: 'source',
							prompt2: '每当你发动【乳燕归巢】使用或打出一张【闪】时,你可以立即获得对方的一张手牌.',
							content() {
								player.gainPlayerCard(trigger.source, 'h', true);
							},
						},
						XK_guichao: {
							marktext: '燕',
							intro: {
								content(storage) {
									return '你可以将1张' + get.translation(storage) + '牌当作【闪】使用或打出';
								},
							},
							enable: ['chooseToRespond', 'chooseToUse'],
							filterCard(card, player) {
								if (typeof player.storage.XK_guichao != 'string' || !player.storage.XK_guichao) return false;
								return get.type(card) == player.storage.XK_guichao;
							},
							audio: 'ext:侠客风云传/audio:1',
							position: 'he',
							viewAs: { name: 'shan' },
							prompt: '将一张牌当闪使用或打出',
							check(card) {
								return 5 - get.useful(card);
							},
							viewAsFilter(player) {
								if (typeof player.storage.XK_guichao != 'string' || !player.storage.XK_guichao) return false;
								if (!player.countCards('h', { type: player.storage.XK_guichao })) return false;
							},
							ai: {
								respondShan: true,
								skillTagFilter(player) {
									if (typeof player.storage.XK_guichao != 'string' || !player.storage.XK_guichao) return false;
									if (!player.countCards('h', { type: player.storage.XK_guichao })) return false;
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
						XK_guichao1: {
							trigger: { player: 'useCardEnd' },
							forced: true,
							filter(event, player) {
								if (_status.currentPhase != player) return false;
								if (!event.card || !get.type(event.card)) return false;
								var evt = _status.event.getParent('phaseUse');
								if (
									evt &&
									evt.name == 'phaseUse' &&
									player.getHistory('useCard', function (evt2) {
										return evt2.getParent('phaseUse') == evt;
									}).length == 1
								)
									return true;
							},
							content() {
								player.storage.XK_guichao = get.type(trigger.card);
							},
						},
						XK_feiyangong: {
							group: ['XK_chuansuo', 'XK_xiaozhoutian'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_chuansuo: {
							trigger: {
								player: ['useCardEnd', 'respondEnd'],
							},
							_priority: -3,
							filter(event, player) {
								return event.card && event.card.name == 'shan';
							},
							audio: 'ext:侠客风云传/audio:1',
							forced: true,
							content() {
								player.addBuff('XK_feiyantai', 2, player);
							},
							ai: { XK_selfbuff: true },
						},
						XK_yeqiuquan1: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_qili';
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_qili.mp3');
							},
							group: ['XK_tianjing'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_yequan1: {
							group: ['XK_bianquan', 'XK_caixin', 'XK_xiaozhoutian'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_canyangshenzhang: {
							trigger: {
								player: 'phaseBefore',
							},
							_priority: 999,
							filter(event, player) {
								return player.name == 'XK_yangdi';
							},
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_yangdi.mp3');
							},
							group: ['XK_shiri'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_shiri: {
							enable: 'phaseUse',
							usable: 1,
							init(player) {
								player.storage.XK_shiri = [];
								player.storage.XK_shiri2 = [];
							},
							filterTarget(card, player, target) {
								if (player == target) return false;
								return true;
							},
							audio: 'ext:侠客风云传/audio:1',
							content() {
								'step 0';
								player
									.chooseControl('失去体力', '弃牌', function (event, player) {
										if (player.hp > 1 && !player.isDamaged()) return '失去体力';
										if (player.countCards('he') > 3) return '弃牌';
										return '弃牌';
									})
									.set('prompt', '【残天蚀日】:失去1点体力或弃置两张牌');
								('step 1');
								if (result.control == '失去体力' || player.countCards('he') < 2) {
									player.storage.XK_shiri = 'losehp';
									player.loseHp();
								} else {
									player.chooseToDiscard('he', 2, true);
									player.storage.XK_shiri = 'discard';
								}
								('step 2');
								target
									.chooseControl('失去体力', '弃牌', function (event, player) {
										if (target.hp > 2) return '失去体力';
										if (target.countCards('he') > 3) return '弃牌';
										return '弃牌';
									})
									.set('prompt', '【残天蚀日】:失去1点体力或弃置两张牌');
								('step 3');
								if (result.control == '失去体力' || target.countCards('he') < 2) {
									player.storage.XK_shiri2 = 'losehp';
									target.loseHp();
								} else {
									target.chooseToDiscard('he', 2, true);
									player.storage.XK_shiri2 = 'discard';
								}
								('step 4');
								if (player.storage.XK_shiri != player.storage.XK_shiri2) {
									player.useCard({ name: 'sha' }, target, false);
									player.storage.XK_shiri = [];
									player.storage.XK_shiri2 = [];
								} else {
									player.addBuff('XK_canyang', 2, player);
								}
							},
							ai: {
								XK_selfbuff: true,
								expose: 0.2,
								order: 8,
								result: {
									player(player, target) {
										if (player.hp >= target.hp) return -0.9;
										if (player.hp <= 2) return -10;
										return -2;
									},
									target(player, target) {
										if (target.hp < 2) return -10;
										if (player.hp == 2 && target.hp >= 2) return -3;
										return -2;
									},
								},
								threaten: 1.1,
							},
						},
						XK_canyangxinfa: {
							group: ['XK_rurizhongtian', 'XK_yintian', 'XK_dazhoutian', 'XK_dazhoutian1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_rurizhongtian: {
							trigger: {
								global: 'phaseJieshuBegin',
							},
							forced: true,
							filter(event, player) {
								return event.player != player && event.player.countCards('h') > player.hp;
							},
							content() {
								'step 0';
								player.gainPlayerCard('he', trigger.player);
								('step 1');
								if (result.bool) {
									game.playAudio('../extension/侠客风云传/audio/XK_rurizhongtian.mp3');
								}
							},
							ai: {
								threaten(player, target) {
									if (player.hp >= 4) return 0.8;
									if (player.hp == 3) return 1.2;
									if (player.hp == 2) return 1.5;
									return 2;
								},
							},
						},
						XK_yintian: {
							trigger: { player: 'phaseJudgeBefore' },
							prompt2(event, player) {
								var str = '体力';
								if (player.isDamaged()) str = '体力上限';
								return '是否失去1点' + str + ',跳过判定及弃牌阶段？';
							},
							check(event, player) {
								if (player.isDamaged()) {
									return player.countCards('j') || player.countCards('h') > player.hp;
								} else {
									return player.hp > 3 && (player.countCards('j') || player.countCards('h') > player.hp);
								}
							},
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_yintian.mp3');
								if (player.isDamaged()) {
									player.loseMaxHp();
								} else player.loseHp();
								player.addTempSkill('XK_yintian1');
								trigger.cancel();
							},
						},
						XK_yintian1: {
							charlotte: true,
							trigger: { player: 'phaseDiscardBefore' },
							forced: true,
							content() {
								trigger.cancel();
							},
						},
						XK_hundun: {
							trigger: {
								player: 'phaseBefore',
							},
							_priority: 999,
							filter(event, player) {
								return player.name == 'XK_xuanligong' && !player.hasSkill('XK_mieshi2');
							},
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_xuanligong.mp3');
							},
							group: ['XK_wanhun', 'XK_wanhun1', 'XK_zhutian', 'XK_zhutian1'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_wanhun: {
							mod: {
								selectTarget(card, player, range) {
									if (card.name == 'sha') {
										if (player.storage.XK_wanhun > 0) {
											range[1] += player.storage.XK_wanhun;
										}
									}
								},
								attackFrom(from, to, distance) {
									if (from.storage.XK_wanhun > 0) {
										return distance - from.storage.XK_wanhun;
									}
								},
							},
							init(player) {
								player.storage.XK_wanhun = 0;
							},
							trigger: {
								player: 'useCardEnd',
							},
							forced: true,
							filter(event, player) {
								return event.card && event.card.name == 'sha';
							},
							content() {
								'step 0';
								if (!player.storage.XK_wanhun) player.storage.XK_wanhun = 1;
								else player.storage.XK_wanhun++;
							},
						},
						XK_wanhun1: {
							trigger: {
								global: 'roundStart',
							},
							_priority: 20,
							forced: true,
							content() {
								player.storage.XK_wanhun = 0;
							},
						},
						XK_zhutian: {
							enable: ['chooseToUse'],
							filterCard: true,
							selectCard() {
								var player = _status.event.player;
								if (!player.getStat().skill.XK_zhutian) var num1 = 1;
								else var num1 = player.getStat().skill.XK_zhutian + 1;
								return num1;
							},
							audio: 'ext:侠客风云传/audio:1',
							position: 'he',
							viewAs: { name: 'sha' },
							filter(event, player) {
								var num1 = player.getStat().skill.XK_zhutian + 1;
								if (player.countCards('he') < num1) return false;
								return game.hasPlayer(function (current) {
									return player.canUse({ name: 'sha' }, current);
								});
							},
							prompt: '将X张牌当作1张不计入次数的杀使用,X为你本回合发动此技能的次数+1.',
							check(card) {
								return 6 - get.useful(card);
							},
							ai: {
								order() {
									return get.order({ name: 'sha' }) + 0.05;
								},
								respondSha: true,
								skillTagFilter(player) {
									return player.getStat().skill.XK_zhutian + 1 < player.countCards('he');
								},
							},
						},
						XK_zhutian1: {
							trigger: {
								player: 'useCard',
							},
							filter(event, player) {
								if (event.skill != 'XK_zhutian') return false;
								return get.itemtype(event.cards) == 'cards';
							},
							audio: 'ext:侠客风云传/audio:1',
							_priority: 20,
							forced: true,
							content() {
								'step 0';
								if (player.stat[player.stat.length - 1].card.sha > 0) {
									player.stat[player.stat.length - 1].card.sha--;
								}
								('step 1');
								player.chooseTarget(get.prompt('XK_zhutian'), '是否弃置1名目标所有区域各1张牌,并令其获得' + get.translation(trigger.cards) + '?', function (card, player, target) {
									var trigger = _status.event.getTrigger();
									return trigger.targets.includes(target);
								}).ai = function (target) {
									var trigger = _status.event.getTrigger();
									var att = get.attitude(player, target);
									if (att > 0) var num1 = trigger.cards.length;
									else num1 = -trigger.cards.length;
									if (target.countDiscardableCards(player, 'j') && target.countCards('j')) {
										if (att > 0) num1++;
										num1--;
									}
									if (target.countDiscardableCards(player, 'h') && target.countCards('h')) {
										if (att > 0) num1--;
										num1++;
									}
									if (target.countDiscardableCards(player, 'e') && target.countCards('e')) {
										if (att > 0) num1--;
										num1++;
									}
									return num1;
								};
								('step 2');
								if (result.targets?.length) {
									event.tar = result.targets[0];
									var num = 0;
									if (event.tar.countCards('h')) num++;
									if (event.tar.countCards('e')) num++;
									if (event.tar.countCards('j')) num++;
									if (num > 0) {
										player
											.discardPlayerCard(event.tar, num, 'hej')
											.set('filterButton', function (button) {
												for (var i = 0; i < ui.selected.buttons.length; i++) {
													if (get.position(button.link) == get.position(ui.selected.buttons[i].link)) return false;
												}
												return true;
											})
											.set('ai', function (button) {
												var att = get.attitude(player, event.tar);
												if (att > 0) {
													if (get.type(button.link) == 'delay' && button.link.name != 'XSmantian') return 10;
													return -1;
												} else {
													if (get.type(button.link) == 'delay' && button.link.name != 'XSmantian') return -1;
													return 1 + get.value(button.link);
												}
											});
									}
								} else event.finish();
								('step 3');
								if (result.bool) {
									event.tar.gain(trigger.cards, player, 'giveAuto');
								}
							},
							ai: {
								expose: 0.2,
							},
						},
						XK_tiancan: {
							group: ['XK_mieshi', 'XK_wuxiang', 'XK_dazhoutian', 'XK_dazhoutian1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_mieshi: {
							trigger: { global: 'die' },
							filter(event, player) {
								return !player.hasSkill('XK_mieshi2');
							},
							prompt2(event, player) {
								return '是否于当前回合结束后获得1个额外回合？';
							},
							check(event) {
								return true;
							},
							audio: 'ext:侠客风云传/audio:1',
							content() {
								player.addTempSkill('XK_mieshi2', 'roundStart');
								player.phase('nodelay');
								if (trigger.source && trigger.source == player) {
									player.addBuff('XK_lianzhu', 2, player);
								}
							},
							ai: { XK_selfbuff: true },
						},
						XK_mieshi2: {},
						XK_wuxiang: {
							trigger: {
								source: 'damageBefore',
							},
							filter(event, player) {
								return event.num > 0;
							},
							check(event, player) {
								if (event.player.hasSkillTag('maixie') || event.player.hasSkillTag('maixie_defend')) return true;
								return false;
							},
							prompt2(event, player) {
								return '使你对' + get.translation(event.player) + '造成的伤害变为无触发伤害？';
							},
							firstDo: true,
							_priority: 999,
							content() {
								trigger.player.hp -= trigger.num;
								trigger.finished = true;
							},
						},
						XK_huanxiang: {
							charlotte: true,
							group: ['XK_huan'],
							init(player) {
								if (player.hasZhuSkill('XK_huan')) {
									player.markSkill('XK_huan');
								}
								player.storage.XK_huan = false;
							},
						},
						XK_huan: {
							enable: 'phaseUse',
							audio: 'ext:侠客风云传/audio:1',
							zhuSkill: true,
							limited: true,
							filter(event, player) {
								if (!player.hasZhuSkill('XK_huan')) return false;
								if (player.storage.XK_huan) return false;
								return true;
							},
							intro: {
								content: 'limited',
							},
							content() {
								'step 0';
								player.awakenSkill('XK_huan');
								player.storage.XK_huan = true;
								event.cardx = get.cards(6);
								player.chooseCardButton('【幻象】:请选择1张牌作为本体', event.cardx, true).ai = function (button) {
									return Math.random();
								};
								('step 1');
								if (result.links?.length) {
									event.card1 = result.links[0];
									game.log(player, '选择了1张牌作为本体');
									var tars = game.filterPlayer(function (current) {
										return current != player;
									});
									event.tars = tars.sort(lib.sort.seat);
								} else event.finish();
								('step 2');
								if (event.tars.length) {
									var target = event.tars.shift();
									event.current = target;
								} else event.goto(6);
								('step 3');
								if (event.current) {
									event.current.chooseCardButton('【幻象】:猜测哪一张为' + get.translation(player) + '的本体？', event.cardx, true).ai = function (button) {
										return Math.random();
									};
								} else event.goto(2);
								('step 4');
								if (result.links?.length) {
									if (event.card1 == result.links[0]) {
										player.damage(event.current, 'nocard');
										game.log(event.current, '选中了本体!');
									} else {
										event.current.damage(player, 'nocard');
										game.log(event.current, '选中了幻象!');
									}
								}
								('step 5');
								event.goto(2);
								('step 6');
								game.cardsDiscard(event.cardx);
							},
							ai: {
								skillTagFilter(player) {
									if (!player.hasZhuSkill('XK_huan')) return false;
									if (player.storage.XK_huan) return false;
								},
								order: 9,
								result: {
									player(player) {
										var num1 = player.getEnemies().length;
										var num2 = player.getFriends().length;
										if (num1 > num2) return 1;
										else return -1;
									},
								},
							},
						},
						XK_shiba: {
							trigger: {
								player: 'phaseBefore',
							},
							_priority: 999,
							filter(event, player) {
								return player.name == 'XK_kexianglong';
							},
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_kexianglong.mp3');
							},
							group: ['XK_feilong', 'XK_longzhan', 'XK_longzhan1'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_feilong: {
							usable: 3,
							enable: 'chooseToUse',
							filter(event, player) {
								if (!event.filterCard || !event.filterCard({ name: 'sha' }, player, event)) return false;
								return game.hasPlayer(function (current) {
									return current != player && player.canUse({ name: 'sha' }, current);
								});
							},
							content() {
								'step 0';
								var list = ['失去1点体力'];
								if (player.countCards('h') > 1) list.push('弃置2张手牌');
								if (player.countCards('e')) list.push('弃置装备区1张牌');
								list.push('取消');
								player
									.chooseControl(list)
									.set('ai', function (event, player) {
										if (player.hp > 2) return '失去1点体力';
										if (list.includes('弃置装备区1张牌')) return '弃置装备区1张牌';
										if (player.countCards('h') > 3) return '弃置2张手牌';
										return '取消';
									})
									.set('prompt', '【飞龙在天】:请选择1项,视为使用1张杀');
								('step 1');
								if (result.control == '失去1点体力') {
									player.loseHp();
								} else if (result.control == '弃置装备区1张牌') {
									player.chooseToDiscard(1, 'e', true);
								} else if (result.control == '弃置2张手牌') {
									player.chooseToDiscard(2, 'h', true);
								} else event.finish();
								('step 2');
								game.playAudio('../extension/侠客风云传/audio/XK_feilong.mp3');
								player.chooseUseTarget({ name: 'sha' }, true, 'nodistance');
							},
							ai: {
								XK_shabonus: true,
								result: {
									player(player) {
										if (player.hp > 2 || player.countCards('h') > 3 || player.countCards('e')) return 1;
										return 0;
									},
								},
								order() {
									return get.order({ name: 'sha' }) - 0.05;
								},
							},
						},
						XK_longzhan: {
							trigger: {
								player: 'shaBegin',
							},
							forced: true,
							filter(event, player) {
								return !event.directHit;
							},
							_priority: -1,
							audio: 'ext:侠客风云传/audio:1',
							content() {
								'step 0';
								event.mark = false;
								if (player.hp <= trigger.target.hp) {
									trigger.ADDdamage = true;
									event.mark = true;
								}
								if (player.countCards('h') <= trigger.target.countCards('h')) {
									trigger.shanRequired = 2;
									event.mark = true;
								}
								if (player.countCards('e') <= trigger.target.countCards('e')) {
									player.stat[player.stat.length - 1].card.sha--;
									trigger.shanRequired = 2;
									event.mark = true;
								}
								('step 1');
								if (event.mark) {
								}
							},
						},
						XK_longzhan1: {
							trigger: {
								source: 'damageBegin',
							},
							filter(event, player) {
								if (!event.card || event.card.name != 'sha' || !event.notLink()) return false;
								return typeof event.parent.ADDdamage == 'boolean' && event.parent.ADDdamage == true;
							},
							forced: true,
							content() {
								trigger.num++;
							},
							ai: {
								damageBonus: true,
							},
						},
						XK_xianglong: {
							group: ['XK_lishe', 'XK_dazhoutian', 'XK_dazhoutian1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_lishe: {
							trigger: {
								player: 'phaseJieshuBegin',
							},
							forced: true,
							audio: 'ext:侠客风云传/audio:1',
							content() {
								'step 0';
								if (player.getStat('damage') > 0) {
									var list = ['摸2张牌'];
									if (player.isDamaged()) list.push('回复1点体力');
									list.push('取消');
									player
										.chooseControl(list)
										.set('ai', function (event, player) {
											if (player.isDamaged()) return '回复1点体力';
											return '摸2张牌';
										})
										.set('prompt', '【利涉大川】:请选择1项');
								} else {
									player.addBuff('XK_sangxin', 2, player);
									event.goto(2);
								}
								('step 1');
								if (result.control == '回复1点体力') {
									player.recover();
								} else if (result.control == '摸2张牌') {
									player.draw(2);
								} else event.finish();
								('step 2');
							},
							ai: { XK_selfbuff: true },
						},
						XK_lianzhang: {
							trigger: {
								player: 'phaseBefore',
							},
							_priority: 999,
							filter(event, player) {
								return player.name == 'XK_jiwushuang';
							},
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_jiwushuang.mp3');
							},
							group: ['XK_tanhai'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_tanhai: {
							init(player) {
								player.storage.XK_tanhai = true;
								player.unmarkSkill('XK_tanhai2');
								player.markSkill('XK_tanhai1');
							},
							audio: 'ext:侠客风云传/audio:1',
							forced: true,
							trigger: {
								player: ['useCardAfter', 'respondAfter'],
							},
							_priority: -3,
							filter(event, player) {
								return event.card && (event.card.name == 'sha' || event.card.name == 'shan');
							},
							content() {
								if (trigger.card.name == 'sha') player.addBuff('XK_shiqi', 2, player);
								if (trigger.card.name == 'shan') player.addBuff('XK_xixing', 2, player);
							},
							ai: { XK_selfbuff: true },
						},
						XK_xuangong: {
							group: ['XK_lihuo1', 'XK_kanshui', 'XK_dazhoutian', 'XK_dazhoutian1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_lihuo1: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							check(event, player) {
								if (!player.countCards('h', { type: 'basic' })) return true;
								else {
									return !player.countCards('h', 'sha');
								}
							},
							prompt2(event, player) {
								if (player.countCards('h', { type: 'basic' })) return '是否令你所有基本牌均视为杀直到本回合结束？';
								return '是否摸1张牌？';
							},
							content() {
								if (player.countCards('h', { type: 'basic' })) player.addTempSkill('XK_lihuo2');
								else player.draw();
							},
						},
						XK_lihuo2: {
							mark: true,
							marktext: '火',
							intro: {
								content(storage) {
									return '基本牌均视为杀';
								},
							},
							mod: {
								cardname(card, player, name) {
									if (get.type2(card.name) == 'basic' && card.name != 'sha') {
										return 'sha';
									}
								},
								cardnature(card, player, name) {
									if (get.type2(card.name) == 'basic' && card.name != 'sha') {
										return null;
									}
								},
							},
						},
						XK_kanshui: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: {
								player: 'phaseJieshuBegin',
							},
							check(event, player) {
								if (!player.countCards('h', { type: 'trick' })) return true;
								else {
									return !player.countCards('h', 'shan');
								}
							},
							prompt2(event, player) {
								if (player.countCards('h', { type: 'trick' })) return '是否令你所有锦囊牌均视为闪直到下回合开始？';
								return '是否摸1张牌？';
							},
							content() {
								if (player.countCards('h', { type: 'trick' })) player.addTempSkill('XK_kanshui1', { player: 'phaseBefore' });
								else player.draw();
							},
						},
						XK_kanshui1: {
							mark: true,
							marktext: '水',
							intro: {
								content(storage) {
									return '锦囊牌均视为闪';
								},
							},
							mod: {
								cardname(card, player, name) {
									if (get.type2(card.name) == 'trick') {
										return 'shan';
									}
								},
								cardnature(card, player, name) {
									if (get.type2(card.name) == 'trick') {
										return null;
									}
								},
							},
						},
						XK_zhujue: {
							charlotte: true,
							//主角专用
							updateSkill(player, levelup) {
								if (player.name == 'XK_xiaoxiami') {
									var oldMaxhp = player.maxHp;
									player.removeAdditionalSkill('XK_yeqiuquan');
									player.removeAdditionalSkill('XK_yequan');
									var LV = lib.storage.XKsave.XXM_lv;
									var exhp = 0,
										zhaoshi = [],
										neigong = [];
									if (LV >= 2) neigong.push('XK_caixin');
									if (LV >= 5) zhaoshi.push('XK_tiequan');
									if (LV >= 7) neigong.push('XK_jikui');
									if (LV >= 10) zhaoshi.push('XK_tianjing');
									if (LV < 4) {
										neigong.push('XK_xiaozhoutian');
									} else if (LV < 8) {
										neigong.push('XK_dazhoutian');
									} else {
										neigong.push('XK_yuanying');
										neigong.push('XK_yuanying1');
									}
									if (!levelup) {
										if (LV >= 3) exhp++;
										if (LV >= 6) exhp++;
										if (LV >= 9) exhp++;
										player.maxHp += exhp;
										player.hp = player.maxHp;
										player.update();
									} else if ([3, 6, 9].includes(LV)) {
										player.gainMaxHp();
										player.recover();
									}
									player.addAdditionalSkill('XK_yeqiuquan', zhaoshi);
									player.addAdditionalSkill('XK_yequan', neigong);
								} else if (player.name == 'XK_weiming') {
									var LV = lib.storage.XKsave.WM_lv;
									if (!levelup) {
										var exhp = 0;
										if (LV >= 6) exhp++;
										if (LV >= 11) exhp++;
										player.maxHp += exhp;
										player.hp = player.maxHp;
										player.update();
									} else {
										if ([6, 11].includes(LV)) {
											player.gainMaxHp();
											player.recover();
										}
									}
								}
							},
							levelUp(player) {
								'step 0';
								if (player.name != 'XK_xiaoxiami' && player.name != 'XK_weiming') return;
								('step 1');
								player.draw(2);
								player.$fullscreenpop('等级提升!', 'fire');
								('step 2');
								if (player.name == 'XK_xiaoxiami') {
									var demond = lib.storage.XKsave.XXM_lv * 20;
									lib.storage.XKsave.XXM_exp -= demond;
									lib.storage.XKsave.XXM_lv++;
									game.save('XKsave', lib.storage.XKsave);
								} else if (player.name == 'XK_weiming') {
									var demond = lib.storage.XKsave.WM_lv * 10;
									lib.storage.XKsave.WM_exp -= demond;
									lib.storage.XKsave.WM_lv++;
									game.save('XKsave', lib.storage.XKsave);
								}
								lib.skill.XK_zhujue.updateSkill(player, true);
							},
							trigger: {
								global: 'gameStart',
								player: 'enterGame',
							},
							_priority: 999,
							forced: true,
							content() {
								lib.skill.XK_zhujue.updateSkill(player, false);
							},
							group: ['XK_zhujue_exp'],
							subSkill: {
								exp: {
									trigger: {
										global: 'dieBefore',
									},
									charlotte: true,
									firstDo: true,
									_priority: 999,
									filter(event, player) {
										if (event.player == player) return true;
										if (!event.source || event.source != player) return false;
										if (event.source.name == 'XK_xiaoxiami') {
											return lib.storage.XKsave.XXM_lv < 10;
										}
										if (event.source.name == 'XK_weiming') {
											return lib.storage.XKsave.XXM_lv < 15;
										}
										return false;
									},
									forced: true,
									content() {
										'step 0';
										if (trigger.player == player) {
											lib.storage.XKsave.XXM_exp = 0;
											game.save('XKsave', lib.storage.XKsave);
											event.finish();
										}
										('step 1');
										var fl = [2, 3, 4, 5].randomGet();
										var ex = trigger.player.getOriginalSkills().length * 3;
										var hp = Math.floor(trigger.player.maxHp * 1.5);
										var num = hp + ex + fl,
											nm;
										var tpnm = lib.config.XK_expmutil;
										if (tpnm == undefined) {
											tpnm = 1;
										}
										nm = Math.ceil(num * tpnm);
										num = nm;
										trigger.source.popup('获得了' + num + '点经验!');
										if (player.name == 'XK_xiaoxiami') {
											lib.storage.XKsave.XXM_exp += num;
											game.save('XKsave', lib.storage.XKsave);
											if (lib.storage.XKsave.XXM_exp >= lib.storage.XKsave.XXM_lv * 20 && lib.storage.XKsave.XXM_lv < 10) {
												do {
													lib.skill.XK_zhujue.levelUp(player);
												} while (lib.storage.XKsave.XXM_exp >= lib.storage.XKsave.XXM_lv * 20 && lib.storage.XKsave.XXM_lv < 10);
											}
											if (lib.storage.XKsave.XXM_lv == 10 && lib.storage.XKsave.XXM_exp > 200) lib.storage.XKsave.XXM_exp = 200;
											event.finish();
										} else {
											lib.storage.XKsave.WM_exp += num;
											game.save('XKsave', lib.storage.XKsave);
										}
										('step 2');
										if (lib.storage.XKsave.WM_exp >= lib.storage.XKsave.WM_lv * 10 && lib.storage.XKsave.WM_lv < 15) {
											lib.skill.XK_zhujue.levelUp(player);
											var LV = lib.storage.XKsave.WM_lv,
												zhaoshilist = lib.storage.XKsave.Zhaoshi,
												neigonglist = lib.storage.XKsave.Neigong;
											var eq = lib.storage.XKsave.Equip;
											//未明可学
											if ([2, 3, 4, 5].includes(LV)) {
												var zhaoshi = ['XK_pilidaofa', 'XK_tianji', 'XK_zhentianchui', 'XK_qinglian', 'XK_yanzici', 'XK_yeqiuquan1', 'XK_chansibazhua', 'XK_paodingdao', 'XK_dulongzhuihun', 'XK_xinheyiqizhao', 'XK_yinshebianfa', 'XK_zimutiangou', 'XK_zilingnichang', 'XK_pianshudaquan', 'XK_taohuashan', 'XK_bawangjianfa', 'XK_emeijianfa', 'XK_taijijian', 'XK_pojunqiangfa', 'XK_kuangfengdaofa', 'XK_jinzhenjiemai', 'XK_chanyizizai', 'XK_feixingzhi', 'XK_baihuacuoquan', 'XK_hujiadaofa', 'XK_miqingdafa', 'XK_feidao', 'XK_tianshanhuanying', 'XK_wuyuejianyi'];
												var neigong = ['XK_pilixinfa', 'XK_taiyixingchen', 'XK_kuangleigong', 'XK_wangyouxinfa', 'XK_feiyangong', 'XK_yequan1', 'XK_wudubaodian', 'XK_paodinggong', 'XK_wanduxinjing', 'XK_xinheyiqigong', 'XK_wanhualijing', 'XK_shoushengong', 'XK_longtengbaobian', 'XK_shengcunfaze', 'XK_lingfeijing', 'XK_xiayinjue', 'XK_emeijiuyang', 'XK_wudangqiankun', 'XK_weizhenbafang', 'XK_yaowangshenpian', 'XK_jingangbuhuai', 'XK_sankushengong', 'XK_yunvxinjing', 'XK_dingxiwuliang', 'XK_feihugong', 'XK_mingdingjue', 'XK_zhandouyanwu', 'XK_jinyishengong', 'XK_shenjianjue'];
												zhaoshi.remove(zhaoshilist);
												zhaoshi.remove(eq);
												neigong.remove(neigonglist);
												neigong.remove(eq);
											}
											if ([7, 8, 9, 10].includes(LV)) {
												var zhaoshi = ['XK_lianzhang', 'XK_shiba', 'XK_canyangshenzhang', 'XK_tianshanliuyang', 'XK_shuihu', 'XK_daojian', 'XK_xuanmingqisha', 'XK_cuihunbaidu', 'XK_jiuyinbaiguzhua', 'XK_diwangshengong', 'XK_qixianjianyi', 'XK_yuyinraoliang', 'XK_kongmingquan', 'XK_xuwudaofa', 'XK_wanghunzhangfa', 'XK_tiangangquan', 'XK_huoyandao', 'XK_duomingsanxian', 'XK_xiuluowuqing', 'XK_tianxuezhifa', 'XK_dajingangzhang', 'XK_feipuliantian', 'XK_baoxiangrulai', 'XK_qishijianji', 'XK_kongquezhenyan', 'XK_jiuyinshenzhua', 'XK_jinyizhan'];
												var neigong = ['XK_xuangong', 'XK_xianglong', 'XK_tiancan', 'XK_canyangxinfa', 'XK_pengfei', 'XK_yanxing', 'XK_wuji', 'XK_huagongdafa', 'XK_wanshedafa', 'XK_jiuyincanjing', 'XK_jiulonghuti', 'XK_qingxinpusan', 'XK_shengwuaiyue', 'XK_xiantiangong', 'XK_sijiexinjue', 'XK_wanghunsanjue', 'XK_tiangangwuji', 'XK_luohanxiangmo', 'XK_qianrenjue', 'XK_xiuluobafeng', 'XK_tianxuegong', 'XK_shaolinjiuyang', 'XK_xiaoaohongchen', 'XK_yinyuantaohui', 'XK_jinzhongzhao', 'XK_kongquemizhou', 'XK_jiuyinfeixu'];
												zhaoshi.remove(zhaoshilist);
												zhaoshi.remove(eq);
												neigong.remove(neigonglist);
												neigong.remove(eq);
											}
											if ([12, 13, 14, 15].includes(LV)) {
												var zhaoshi = ['XK_wanjianjue', 'XK_jiulongpo', 'XK_datian', 'XK_yanluo', 'XK_pixie', 'XK_disha', 'XK_hundun', 'XK_canhuabaojian', 'XK_miaodizhi', 'XK_youlongjianfa', 'XK_taijijianfa', 'XK_zhanguosha'];
												var neigong = ['XK_wanjianguizong', 'XK_baqin', 'XK_fantian', 'XK_wujian', 'XK_kuihua', 'XK_beimingwuxiang', 'XK_canhuabaodian', 'XK_yijinjing', 'XK_bulaochangchungong', 'XK_wuwangshengong', 'XK_taijishengong', 'XK_sanqianruoshui', 'XK_zixiashengong'];
												zhaoshi.remove(zhaoshilist);
												zhaoshi.remove(eq);
												neigong.remove(neigonglist);
												neigong.remove(eq);
											}
											event.zhaoshilist = zhaoshi;
											event.neigonglist = neigong;
											event.Lv = LV;
										} else {
											if (lib.storage.XKsave.WM_lv == 15 && lib.storage.XKsave.WM_exp > 150) lib.storage.XKsave.WM_exp = 150;
											event.finish();
										}
										('step 3');
										if (event.zhaoshilist) {
											var lt = event.zhaoshilist.randomGets(4);
											for (var i = 0; i < lt.length; i++) {
												lib.card['skillCard_' + lt[i]] = {
													fullimage: true,
													image: 'ext:侠客风云传/image/' + lt[i] + '.jpg',
												};
												var str = lib.translate[lt[i] + '_info'];
												lib.translate['skillCard_' + lt[i]] = str.match(/>【(\S*)】</)[1];
												lib.translate['skillCard_' + lt[i] + '_info'] = str;
											}
											for (var i = 0; i < lt.length; i++) {
												lt[i] = ['', '', 'skillCard_' + lt[i]];
											}
											player.chooseButton(['请选择一项要学习的招式', [lt, 'vcard']], true, 1).set('ai', function (button) {
												return Math.random();
											});
										} else event.goto(5);
										('step 4');
										if (result.links?.length) {
											game.log(player, '习得了【' + get.translation(result.links[0][2]) + '】!');
											var sk = result.links[0][2].slice(10);
											lib.storage.XKsave.Zhaoshi.push(sk);
											game.save('XKsave', lib.storage.XKsave);
											if (sk == 'XK_pixie' && !lib.config.XK_zigong) {
												alert('少侠,你自宫了!');
												game.playAudio('../extension/侠客风云传/audio/XK_zigong.mp3');
												player.node.avatar.setBackgroundImage('extension/侠客风云传/image/XK_weimingex.jpg');
												player.sex = 'female';
												game.saveConfig('XK_zigong', true);
											}
										}
										('step 5');
										if (event.neigonglist) {
											var lt = event.neigonglist.randomGets(4);
											for (var i = 0; i < lt.length; i++) {
												lib.card['skillCard_' + lt[i]] = {
													fullimage: true,
													image: 'ext:侠客风云传/image/XK_gongti_image.jpg',
												};
												var str = lib.translate[lt[i] + '_info'];
												lib.translate['skillCard_' + lt[i]] = str.match(/>【(\S*)】</)[1];
												lib.translate['skillCard_' + lt[i] + '_info'] = str;
											}
											for (var i = 0; i < lt.length; i++) {
												lt[i] = ['', '', 'skillCard_' + lt[i]];
											}
											player.chooseButton(['请选择一项要学习的功体', [lt, 'vcard']], true, 1).set('ai', function (button) {
												return Math.random();
											});
										}
										('step 6');
										if (result.links?.length) {
											game.log(player, '习得了【' + get.translation(result.links[0][2]) + '】!');
											var sk = result.links[0][2].slice(10);
											lib.storage.XKsave.Neigong.push(sk);
											game.save('XKsave', lib.storage.XKsave);
											if (sk == 'XK_kuihua' && !lib.config.XK_zigong) {
												alert('少侠,你自宫了!');
												game.playAudio('../extension/侠客风云传/audio/XK_zigong.mp3');
												player.node.avatar.setBackgroundImage('extension/侠客风云传/image/XK_weimingex.jpg');
												player.sex = 'female';
												game.saveConfig('XK_zigong', true);
											}
										}
										('step 7');
										event.goto(2);
									},
								},
							},
						},
						XK_jietou: {
							group: ['XK_luanda'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_luanda: {
							trigger: {
								player: 'useCardBefore',
							},
							filter(event, player) {
								if (event.card.name != 'sha') return false;
								if (game.players.length < 3) return false;
								return true;
							},
							_priority: 16,
							check(event, player) {
								var num1 = player.getEnemies().length;
								var num2 = player.getFriends().length;
								return num1 > num2;
							},
							audio: 'ext:侠客风云传/audio:1',
							prompt2(event, player) {
								return '是否令你使用的' + get.translation(event.card) + '随机增加1个额外目标？';
							},
							content() {
								'step 0';
								var extar = game.filterPlayer(function (current) {
									if (current == player) return false;
									return !trigger.targets.includes(current) && lib.filter.targetEnabled(trigger.card, player, current);
								});
								var tar = extar.randomGet();
								trigger.targets.add(tar);
							},
						},
						XK_jianghu: {
							group: ['XK_tiaoxi', 'XK_xiaozhoutian'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_tiaoxi: {
							trigger: {
								player: 'phaseJieshuBegin',
							},
							audio: 'ext:侠客风云传/audio:1',
							forced: true,
							filter(event, player) {
								return !player.getStat('damage') || player.getStat('damage') <= 0;
							},
							content() {
								player.recover();
							},
						},
						XK_zhujuezhili: {
							init(player) {
								player.markSkill('XK_zhili');
								player.storage.XK_zhili = false;
							},
							charlotte: true,
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_weiming';
							},
							_priority: 999,
							forced: true,
							content() {
								if (!lib.config.XK_zigong) {
									game.playAudio('../extension/侠客风云传/audio/XK_weiming.mp3');
								} else {
									game.playAudio('../extension/侠客风云传/audio/XK_weimingex.mp3');
								}
							},
							group: ['XK_wuxiankeneng', 'XK_zhili'],
						},
						XK_wuxiankeneng: {
							trigger: {
								global: 'gameStart',
								player: 'enterGame',
							},
							_priority: 999,
							forced: true,
							content() {
								'step 0';
								if (lib.storage.XKsave.Zhaoshi.length > 1 || lib.storage.XKsave.Neigong.length > 1) {
									game.playAudio('../extension/侠客风云传/audio/XK_wuxiankeneng.mp3');
								}
								if (lib.storage.XKsave.Zhaoshi == undefined || lib.storage.XKsave.Zhaoshi.length <= 1) event.goto(2);
								else {
									var zhaoshi = lib.storage.XKsave.Zhaoshi.slice(0);
									zhaoshi.remove(player.getSkills());
									for (var i = 0; i < zhaoshi.length; i++) {
										lib.card['skillCard_' + zhaoshi[i]] = {
											fullimage: true,
											image: 'ext:侠客风云传/image/' + zhaoshi[i] + '.jpg',
										};
										var str = lib.translate[zhaoshi[i] + '_info'];
										lib.translate['skillCard_' + zhaoshi[i]] = str.match(/>【(\S*)】</)[1];
										lib.translate['skillCard_' + zhaoshi[i] + '_info'] = str;
									}
									for (var i = 0; i < zhaoshi.length; i++) {
										zhaoshi[i] = ['', '', 'skillCard_' + zhaoshi[i]];
									}
									player.chooseButton(['是否更换招式？', [zhaoshi, 'vcard']], 1).set('ai', function (button) {
										return Math.random();
									});
								}
								('step 1');
								if (result && result.bool && result.links[0][2]) {
									game.log(player, '装备了【' + get.translation(result.links[0][2]) + '】!');
									lib.character[player.name][3][0] = result.links[0][2].slice(10);
								}
								('step 2');
								if (lib.storage.XKsave.Neigong == undefined || lib.storage.XKsave.Neigong.length <= 1) event.goto(4);
								else {
									var neigong = lib.storage.XKsave.Neigong.slice(0);
									neigong.remove(player.getSkills());
									for (var i = 0; i < neigong.length; i++) {
										lib.card['skillCard_' + neigong[i]] = {
											fullimage: true,
											image: 'ext:侠客风云传/image/XK_gongti_image.jpg',
										};
										var str = lib.translate[neigong[i] + '_info'];
										lib.translate['skillCard_' + neigong[i]] = str.match(/>【(\S*)】</)[1];
										lib.translate['skillCard_' + neigong[i] + '_info'] = str;
									}
									for (var i = 0; i < neigong.length; i++) {
										neigong[i] = ['', '', 'skillCard_' + neigong[i]];
									}
									player.chooseButton(['是否更换功体？', [neigong, 'vcard']], 1).set('ai', function (button) {
										return Math.random();
									});
								}
								('step 3');
								if (result && result.bool && result.links[0][2]) {
									game.log(player, '装备了【' + get.translation(result.links[0][2]) + '】!');
									lib.character[player.name][3][1] = result.links[0][2].slice(10);
								}
								('step 4');
								var mp = player.maxHp;
								lib.storage.XKsave.Equip = lib.character[player.name][3];
								game.save('XKsave', lib.storage.XKsave);
								player.init('XK_weiming');
								player.maxHp = mp;
								player.hp = player.maxHp;
								player.update();
							},
						},
						XK_zhili: {
							enable: 'chooseToUse',
							audio: 'ext:侠客风云传/audio:1',
							limited: true,
							filter(event, player) {
								if (event.type != 'dying') return false;
								if (player != event.dying) return false;
								if (player.storage.XK_zhili) return false;
								if (!player.countCards('hej')) return false;
								return true;
							},
							intro: {
								content: 'limited',
							},
							content() {
								'step 0';
								player.awakenSkill('XK_zhili');
								player.storage.XK_zhili = true;
								('step 1');
								var num1 = player.countCards('hej');
								player.discard(player.getCards('hej'));
								player.recover(num1);
								player.draw(num1);
							},
							ai: {
								order: 1,
								skillTagFilter(player) {
									if (player.storage.XK_zhili) return false;
									if (player.hp > 0) return false;
								},
								save: true,
								result: {
									player: 10,
								},
								threaten(player, target) {
									if (!target.storage.XK_zhili) return 0.5;
								},
							},
						},
						XK_yeqiuquan: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_xiaoxiami';
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_xiaoxiami.mp3');
							},
							group: ['XK_pishi'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_pishi: {
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return player != target;
							},
							content() {
								'step 0';
								player.chooseToPSS(target);
								('step 1');
								if (result.bool == true) {
									player.useCard({ name: 'sha' }, target, false).audio = false;
									game.playAudio('../extension/侠客风云传/audio/XK_pishi1.mp3');
								} else if (result.bool == false) {
									target.useCard({ name: 'sha' }, player, false);
									player.getStat().skill.XK_pishi--;
								}
							},
							ai: {
								order: 8,
								result: {
									target(player, target) {
										return get.effect(target, { name: 'sha' }, player, target);
									},
								},
								expose: 0.3,
							},
						},
						XK_tiequan: {
							intro: {
								content(storage) {
									if (!storage || !storage.length) {
										return '未声明过武器牌';
									} else {
										var str = '已声明过' + get.translation(storage[0]);
										for (var i = 1; i < storage.length; i++) {
											str += '、' + get.translation(storage[i]);
										}
										return str;
									}
								},
							},
							trigger: {
								player: 'useCard',
							},
							prompt2: '是否声明并获得1张武器牌的技能直到此杀结算完成？',
							filter(event, player) {
								if (event.card.name != 'sha') return false;
								if (!player.storage.XK_tiequan) return true;
								var list = get.inpile('equip');
								for (var i = 0; i < list.length; i++) {
									var card = { name: list[i] };
									var info = get.info(card);
									if (info.subtype == 'equip1' && info.skills && !player.storage.XK_tiequan.includes(list[i])) {
										return true;
									}
								}
								return false;
							},
							content() {
								'step 0';
								if (!player.storage.XK_tiequan) {
									player.storage.XK_tiequan = [];
								}
								var list1 = [];
								var list = get.inpile('equip');
								for (var i = 0; i < list.length; i++) {
									var card = { name: list[i] };
									var info = get.info(card);
									if (info.subtype == 'equip1' && info.skills && !player.storage.XK_tiequan.includes(list[i])) {
										list1.push(list[i]);
									}
								}
								for (var i = 0; i < list1.length; i++) {
									list1[i] = ['武器', '', list1[i]];
								}
								if (list1.length) {
									var dialog = ui.create.dialog('获得1张武器牌的特效直到你使用的' + get.translation(trigger.card) + '结算完毕', [list1, 'vcard'], 'hidden');
									player.chooseButton(dialog, true).set('ai', function (button) {
										return Math.random();
									});
								} else {
									event.finish();
								}
								('step 1');
								if (result.bool) {
									game.playAudio('../extension/侠客风云传/audio/XK_tiequan1.mp3');
									var card = { name: result.buttons[0].link[2] };
									var name = result.buttons[0].link[2];
									player.storage.XK_tiequan.push(name);
									game.log(player, '声明了' + get.translation(name));
									player.markSkill('XK_tiequan');
									var info = get.info(card);
									if (info.skills) {
										player.addAdditionalSkill('XK_tiequan', info.skills);
										trigger.gainskill = true;
									} else {
										player.removeAdditionalSkill('XK_tiequan');
									}
								}
							},
							group: ['XK_tiequan_skill'],
							subSkill: {
								skill: {
									trigger: {
										player: 'useCardAfter',
									},
									_priority: 2,
									filter(event, player) {
										if (!event.card || event.card.name != 'sha') return false;
										return event.gainskill == true;
									},
									forced: true,
									popup: false,
									content() {
										player.removeAdditionalSkill('XK_tiequan');
										game.log(player, '失去了武器技能');
									},
								},
							},
						},
						XK_tianjing: {
							marktext: '惊',
							intro: {
								content(storage, player, skill) {
									var str = '';
									if (player.name == 'XK_xiaoxiami') {
										var temp1 = '【内伤】【重伤】2';
										var temp2 = '任意';
									} else {
										var temp1 = '【内伤】【破甲】1';
										var temp2 = '至多2';
									}
									if (player.hasSkill('XK_tianjing1')) {
										str += '<li>你使用杀时令目标获得' + temp1 + '回合';
									}
									if (player.hasSkill('XK_tianjing2')) {
										str += '<li>你使用杀可指定' + temp2 + '名额外目标';
									}
									return str;
								},
							},
							trigger: {
								player: 'phaseZhunbeiEnd',
							},
							forced: true,
							content() {
								'step 0';
								event.str = [];
								var temp = '是否跳过摸牌阶段？若跳过,下回合你使用杀时令目标获得【内伤】【破甲】1回合.';
								if (player.name == 'XK_xiaoxiami') temp = '是否跳过摸牌阶段？若跳过,下回合你使用杀时令目标获得【内伤】【重伤】2回合.';
								player.chooseBool(get.prompt('XK_tianjing'), temp).set('ai', function () {
									if (player.hasSkill('XK_tianjing1') || player.hasSkill('XK_tianjing2')) return false;
									return player.countCards('h', 'sha') && player.countCards('h') > 3;
								});
								('step 1');
								if (result.bool) {
									event.str.push('摸牌阶段');
									player.skip('phaseDraw');
									player.addTempSkill('XK_tianjing3', { player: 'phaseBefore' });
								}
								('step 2');
								var temp = '至多2';
								if (player.name == 'XK_xiaoxiami') temp = '任意';
								player.chooseBool(get.prompt('XK_tianjing'), '是否跳过出牌阶段？若跳过,下回合你使用杀可指定' + temp + '名额外目标.').set('ai', function () {
									if (player.hasSkill('XK_tianjing1') || player.hasSkill('XK_tianjing2')) return false;
									return player.countCards('h', 'sha') && !player.needsToDiscard();
								});
								('step 3');
								if (result.bool) {
									event.str.push('出牌阶段');
									player.skip('phaseUse');
									player.addTempSkill('XK_tianjing4', { player: 'phaseBefore' });
								}
								('step 4');
								if (event.str.length) {
									game.playAudio('../extension/侠客风云传/audio/XK_tianjing1.mp3');
									game.log(player, '跳过了', get.translation(event.str));
								}
							},
						},
						XK_tianjing3: {
							charlotte: true,
							trigger: {
								player: ['phaseAfter'],
							},
							forced: true,
							content() {
								player.addTempSkill('XK_tianjing1', { player: 'phaseJieshuAfter' });
								player.markSkill('XK_tianjing');
							},
						},
						XK_tianjing4: {
							charlotte: true,
							trigger: {
								player: ['phaseAfter'],
							},
							forced: true,
							content() {
								player.addTempSkill('XK_tianjing2', { player: 'phaseJieshuAfter' });
								player.markSkill('XK_tianjing');
							},
						},
						XK_tianjing1: {
							trigger: {
								player: 'useCard',
							},
							onremove(player) {
								player.unmarkSkill('XK_tianjing');
							},
							filter(event, player) {
								if (event.card.name != 'sha') return false;
								return player.isPhaseUsing();
							},
							_priority: 21,
							forced: true,
							content() {
								'step 0';
								if (trigger.targets) {
									if (player.name == 'XK_xiaoxiami') {
										for (var i = 0; i < trigger.targets.length; i++) {
											trigger.targets[i].addBuff('XK_neishang', 2, player);
											trigger.targets[i].addBuff('XK_zhongshang', 2, player);
										}
									} else {
										for (var i = 0; i < trigger.targets.length; i++) {
											trigger.targets[i].addBuff('XK_neishang', 1, player);
											trigger.targets[i].addBuff('XK_pojia', 1, player);
										}
									}
								}
							},
						},
						XK_tianjing2: {
							trigger: {
								player: 'useCardBefore',
							},
							onremove(player) {
								player.unmarkSkill('XK_tianjing');
							},
							filter(event, player) {
								if (!player.isPhaseUsing()) return false;
								if (event.card.name != 'sha') return false;
								return true;
							},
							_priority: 96,
							forced: true,
							content() {
								'step 0';
								var num1 = 2,
									str = '至多2';
								if (player.name == 'XK_xiaoxiami') {
									num1 = Infinity;
									str = '任意';
								}
								player.chooseTarget('选择' + str + '名其他角色成为你的' + get.translation(trigger.card) + '的目标', [1, num1], function (card, player, target) {
									var trigger = _status.event.getTrigger();
									return target != player && !trigger.targets.includes(target);
								}).ai = function (target) {
									var trigger = _status.event.getTrigger();
									var eff = get.effect(target, trigger.card, player, player);
									return eff;
								};
								('step 1');
								if (result.bool) {
									if (player.name == 'XK_xiaoxiami') {
										game.playAudio('../extension/侠客风云传/audio/XK_tianjing2.mp3');
									} else {
										game.playAudio('../extension/侠客风云传/audio/XK_tianjing3.mp3');
									}
									trigger.targets.addArray(result.targets);
								}
							},
						},
						XK_yequan: {
							group: ['XK_bianquan'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_bianquan: {
							trigger: {
								player: 'shaBegin',
							},
							_priority: 99,
							check(event, player) {
								if (lib.storage.XKsave.XXM_lv >= 6 && player.name == 'XK_xiaoxiami') return true;
								if (player.hasSkill('XK_jikui') || player.hasSkill('jiu')) return true;
								return false;
							},
							logTarget: 'target',
							prompt2(event, player) {
								return '是否与' + get.translation(event.target) + '猜拳？若你胜利此杀不可被响应,失败则其摸1张牌.';
							},
							content() {
								'step 0';
								if (player.name == 'XK_xiaoxiami') {
									game.playAudio('../extension/侠客风云传/audio/XK_bianquan1.mp3');
								}
								player.chooseToPSS(trigger.target);
								('step 1');
								if (result.bool == true) {
									trigger.directHit = true;
								} else if (result.bool == false) {
									trigger.target.draw();
								}
							},
						},
						XK_caixin: {
							trigger: {
								player: ['chooseToPSSEnd'],
							},
							filter(event, player) {
								if (event.parent.name == 'XK_caixin') return false;
								if (event.preserve) return false;
								if (event.result.bool == true) return false;
								return true;
							},
							_priority: -100,
							forced: true,
							content() {
								'step 0';
								if (player.name == 'XK_xiaoxiami') {
									game.playAudio('../extension/侠客风云传/audio/XK_caixin1.mp3');
									var temp = lib.storage.XKsave.XXM_lv;
									if (temp < 10) {
										temp *= 0.05;
									} else temp *= 0.1;
									if (Math.random() <= temp) {
										trigger.result.bool = true;
										game.log(player, '猜拳反败为胜了!');
									}
									event.finish();
								}
								('step 1');
								game.playAudio('../extension/侠客风云传/audio/XK_caixin2.mp3');
								player.chooseToPSS(trigger.target);
								('step 2');
								if (result.tie == true) {
									trigger.result.tie = true;
								} else {
									trigger.result.bool = result.bool;
								}
							},
						},
						XK_jikui: {
							trigger: {
								source: 'damageBegin',
							},
							firstDo: true,
							filter(event, player) {
								return event.card && event.card.name == 'sha' && event.notLink();
							},
							forced: true,
							content() {
								var temp = [0, 1, 2];
								if (lib.storage.XKsave.XXM_lv >= 10) {
									temp = [0, 1, 1, 2, 2, 2];
								}
								var num1 = temp.randomGet();
								if (num1 != 0) {
									game.log('男默女泪!', player, '对', trigger.player, '造成的伤害足足增加了', num1, '点!');
									trigger.num += num1;
								}
							},
							ai: {
								XK_shabonus: true,
								damageBonus: true,
							},
						},
						XK_yanluo: {
							trigger: {
								player: 'phaseBefore',
							},
							_priority: 999,
							filter(event, player) {
								return player.name == 'XK_yandansheng';
							},
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_yandansheng.mp3');
							},
							group: ['XK_shidian', 'XK_yinfa'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_shidian: {
							trigger: {
								player: 'useCardBefore',
							},
							usable: 1,
							filter(event, player) {
								if (event.card.name != 'sha') return false;
								var tars = game.filterPlayer(function (current) {
									return current != player && !event.targets.includes(current) && player.inRange(current) && lib.filter.targetEnabled2(event.card, player, current);
								});
								return tars.length;
							},
							_priority: 999,
							forced: true,
							audio: 'ext:侠客风云传/audio:1',
							content() {
								'step 0';
								event.extar = game.filterPlayer(function (current) {
									if (current == player) return false;
									if (trigger.targets.includes(current)) return false;
									return player.inRange(current) && lib.filter.targetEnabled(trigger.card, player, current);
								});
								player.chooseBool(get.prompt('XK_shidian'), '是否令' + get.translation(event.extar) + '也成为你使用的' + get.translation(trigger.card) + '的目标？').set('ai', function () {
									var eff = 0,
										tri = _status.event.getTrigger();
									for (var i = 0; i < event.extar.length; i++) {
										eff += get.effect(event.extar[i], tri.card, player, player);
									}
									if (eff >= 1) {
										return 6 - get.value(card);
									}
									return -1;
								});
								('step 1');
								if (result.bool) {
									trigger.targets.addArray(event.extar);
								}
								('step 2');
								var num1 = trigger.targets.length;
								player.chooseTarget('你可令任意名目标弃置1张牌,以防止其成为你使用的' + get.translation(trigger.card) + '的目标', [1, num1], function (card, player, target) {
									var trigger = _status.event.getTrigger();
									return target.countCards('he') && trigger.targets.includes(target);
								}).ai = function (target) {
									var trigger = _status.event.getTrigger();
									var eff = get.effect(target, trigger.card, player, player);
									return -eff;
								};
								('step 3');
								if (result.targets?.length) {
									var tars = result.targets;
									event.tars = tars.sort(lib.sort.seat);
								} else event.finish();
								('step 4');
								if (event.tars.length) {
									var target = event.tars.shift();
									event.current = target;
								} else event.finish();
								('step 5');
								if (event.current) {
									event.current.chooseToDiscard(true, 1, 'he').set('ai', function (card) {
										if (event.current.hasSkill('XS_yuanmou') && event.current.storage.XS_yuanmou.length) {
											if (event.current.storage.XS_yuanmou.includes(card)) return 20;
										}
										return 20 - get.value(card);
									});
									trigger.targets.remove(event.current);
								}
								event.goto(4);
							},
						},
						XK_yinfa: {
							trigger: {
								player: 'discardAfter',
							},
							filter(event, player) {
								return event.cards && event.cards.length; //QQQ
							},
							forced: true,
							audio: 'ext:侠客风云传/audio:1',
							content() {
								'step 0';
								player.chooseTarget('【阴法渡冥河】:是否令1名其他角色获得【恐惧】2回合？', 1, function (card, player, target) {
									return target != player;
								}).ai = function (target) {
									var att = get.attitude(player, target);
									if (target.hasSkill('XK_kongju')) return -1;
									return -att;
								};
								('step 1');
								if (result.targets?.length) {
									result.targets[0].addBuff('XK_kongju', 2, player);
								}
							},
							ai: {
								effect: {
									target(card, player, target) {
										if (card.name == 'guohe') return 0;
									},
								},
							},
						},
						XK_wujian: {
							group: ['XK_yehuo', 'XK_weiya', 'XK_yuanying', 'XK_yuanying1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_yehuo: {
							trigger: {
								player: ['damageAfter'],
							},
							audio: 'ext:侠客风云传/audio:1',
							forced: true,
							_priority: 9,
							filter(event, player) {
								if (!event.source || !event.source.isAlive() || event.source == player) return false;
								if (!player.countCards('he')) return false;
								return player.inRange(event.source);
							},
							content() {
								'step 0';
								player.chooseToDiscard('【业火】:是否弃置1张牌,视为对' + get.translation(trigger.source) + '使用一张不计次数的杀?', 1, 'he').set('ai', function (card) {
									var source = _status.event.getTrigger().source;
									if (get.effect(source, { name: 'sha' }, player, player) > 0) {
										return 6 - get.value(card);
									}
									return 0;
								});
								('step 1');
								if (result.bool == true) {
									player.useCard({ name: 'sha' }, trigger.source, false);
								}
							},
							ai: {
								maixie_defend: true,
								threaten: 0.7,
							},
						},
						XK_weiya: {
							trigger: {
								global: 'shaBegin',
							},
							filter(event, player) {
								if (event.player == player) return false;
								if (event.target == player) return false;
								return event.player.inRange(player);
							},
							check(event, player) {
								var att = get.attitude(event.player, player);
								if (att > 0) return true;
								else {
									if (!player.countCards('he')) return false;
									if (get.effect(event.target, event.card, event.player, player) < 0) {
										if (player.hp >= event.target.hp) return true;
									}
								}
								return false;
							},
							audio: 'ext:侠客风云传/audio:1',
							prompt2(event, player) {
								return '是否令' + get.translation(event.player) + '选择1项？1.令你摸1张牌;2.令其指定' + get.translation(event.target) + '为目标的' + get.translation(event.card) + '的目标成为你.';
							},
							content() {
								'step 0';
								event.att = get.attitude(trigger.player, player);
								trigger.player.chooseBool('是否令' + get.translation(player) + '摸1张牌？').set('ai', function () {
									if (event.att > 0) return true;
									return false;
								});
								('step 1');
								if (result.bool) {
									player.draw();
								} else {
									trigger.target = player;
								}
							},
							ai: {
								expose: 0.2,
							},
						},
						XK_qijin: {
							charlotte: true,
							group: ['XK_wujianqijin', 'XK_wujianqijin1'],
						},
						XK_wujianqijin: {
							zhuSkill: true,
							forced: true,
							trigger: {
								player: ['damageEnd'],
							},
							_priority: -1,
							filter(event, player) {
								if (!player.hasZhuSkill('XK_wujianqijin')) return false;
								return event.num > 0;
							},
							init(player) {
								player.storage.XK_wujianqijin = 0;
							},
							content() {
								player.storage.XK_wujianqijin += trigger.num;
							},
						},
						XK_wujianqijin1: {
							forced: true,
							trigger: {
								player: ['phaseBefore'],
							},
							_priority: 997,
							filter(event, player) {
								if (!player.storage.XK_wujianqijin || player.storage.XK_wujianqijin == 0) return false;
								return true;
							},
							audio: 'ext:侠客风云传/audio:1',
							content() {
								if (player.storage.XK_wujianqijin >= 2) {
									player.recover();
								}
								player.storage.XK_wujianqijin = 0;
							},
						},
						XK_disha: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_jiangtianxiong';
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_jiangtianxiong.mp3');
							},
							group: ['XK_dikui', 'XK_dikui1', 'XK_dipi'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_dikui: {
							_priority: 13,
							trigger: {
								player: ['shaAfter'],
							},
							init(player) {
								player.storage.XK_dikui = 0;
							},
							audio: 'ext:侠客风云传/audio:1',
							filter(event, player) {
								if (event.parent.targets.length != 1) return false;
								return player.storage.XK_dikui < 99;
							},
							forced: true,
							content() {
								'step 0';
								if (trigger.getParent(2).name != 'XK_dikui') {
									player.storage.XK_dikui = 0;
								}
								if (trigger.responded) event.num1 = 3 + player.storage.XK_dikui;
								else event.num1 = 2 + player.storage.XK_dikui;
								player.judge('地魁通幽', function (card) {
									if (card.number >= event.num1) return 3;
									return -3;
								});
								('step 1');
								if (result.bool == true) {
									player.chooseTarget('【地魁通幽】:是否令' + get.translation(trigger.card) + '对1名其他角色继续结算？', 1, function (card, player, target) {
										var tri = _status.event.getTrigger();
										return target != player && target != tri.target && lib.filter.targetEnabled(trigger.card, player, target);
									}).ai = function (target) {
										var trigger = _status.event.getTrigger();
										var eff = get.effect(target, trigger.card, player, player);
										return eff;
									};
								} else {
									player.storage.XSzhuiji += 100;
									event.finish();
								}
								('step 2');
								if (result.targets?.length) {
									player.useCard(trigger.card, result.targets[0], false).audio = false;
									if (trigger.responded) {
										player.storage.XK_dikui += 3;
									} else {
										player.storage.XK_dikui += 2;
									}
								}
							},
							ai: {
								expose: 0.2,
							},
						},
						XK_dikui1: {
							_priority: 11,
							trigger: {
								player: ['shaAfter'],
							},
							filter(event, player) {
								return player.storage.XK_dikui > 99;
							},
							forced: true,
							content() {
								player.storage.XK_dikui = 0;
							},
						},
						XK_dipi: {
							trigger: {
								source: 'damageEnd',
							},
							audio: 'ext:侠客风云传/audio:1',
							_priority: 89,
							forced: true,
							filter(event, player) {
								return event.num > 0 && event.player;
							},
							content() {
								'step 0';
								var dis = get.distance(player, trigger.player);
								if (dis <= 1) {
									trigger.player.addBuff('XK_neishang', 2, player);
								} else trigger.player.addBuff('XK_zhuoying', 2, player);
							},
						},
						XK_wuji: {
							group: ['XK_xiongxing', 'XK_ehun', 'XK_dazhoutian', 'XK_dazhoutian1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_xiongxing: {
							trigger: {
								source: 'damageBegin',
							},
							_priority: 21,
							filter(event, player) {
								return event.notLink() && player.hp <= player.maxHp * 0.5;
							},
							forced: true,
							content() {
								trigger.num++;
							},
							ai: {
								XK_shabonus: true,
								damageBonus: true,
							},
						},
						XK_ehun: {
							trigger: {
								source: 'damageEnd',
							},
							_priority: 29,
							filter(event, player) {
								return event.notLink();
							},
							check(event, player) {
								if (player.hp < 2) return false;
								return true;
							},
							prompt2(event, player) {
								return '是否进行1次判定？若结果为黑色,回复伤害数值的体力,否则失去1点体力并摸1张牌.';
							},
							audio: 'ext:侠客风云传/audio:1',
							content() {
								'step 0';
								player.judge('恶魂', function (card) {
									if (get.color(card) == 'black') return 3;
									return -3;
								});
								('step 1');
								if (result.bool == true) {
									player.recover(trigger.num);
									event.finish();
								} else {
									player.loseHp();
									player.draw();
								}
							},
						},
						XK_tiangang: {
							charlotte: true,
							group: ['XK_tiandi'],
						},
						XK_tiandi: {
							zhuSkill: true,
							init(player) {
								if (player.hasZhuSkill('XK_tiandi')) {
									player.storage.XK_tiandi = false;
									player.unmarkSkill('XK_tiandi1');
									player.markSkill('XK_tiandi2');
								}
							},
							forced: true,
							trigger: {
								global: 'damageEnd',
							},
							_priority: -3,
							filter(event, player) {
								if (!player.hasZhuSkill('XK_tiandi')) return false;
								if (event.preserve) return false;
								if (player.storage.XK_tiandi == true) {
									return event.source != player && event.player == player;
								} else if (player.storage.XK_tiandi == false) {
									return event.source == player && event.player != player;
								}
								return false;
							},
							content() {
								'step 0';
								player.draw();
								('step 1');
								if (player.storage.XK_tiandi == true) {
									player.unmarkSkill('XK_tiandi1');
									player.markSkill('XK_tiandi2');
									player.storage.XK_tiandi = false;
								} else if (player.storage.XK_tiandi == false) {
									player.unmarkSkill('XK_tiandi2');
									player.markSkill('XK_tiandi1');
									player.storage.XK_tiandi = true;
								}
							},
						},
						XK_tiandi1: {
							marktext: '天',
							intro: {
								content(storage, player, skill) {
									return '天罡:你受到伤害后可以摸1张牌';
								},
							},
						},
						XK_tiandi2: {
							intro: {
								content(storage, player, skill) {
									return '地煞:你造成伤害后可以摸1张牌';
								},
							},
							marktext: '地',
						},
						XK_pixie: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_xiaolinzi' && !player.hasSkill('XK_jiangshang2') && !player.hasSkill('XK_feixian2');
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_xiaolinzi.mp3');
							},
							group: ['XK_feiyan', 'XK_feiyan1', 'XK_jiangshang', 'XK_jiangshang1'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_feiyan: {
							enable: ['chooseToUse'],
							filterCard: true,
							selectCard: 2,
							position: 'h',
							viewAs: { name: 'sha' },
							filter(event, player) {
								return player.countCards('h') > 1;
							},
							audio: 'ext:侠客风云传/audio:1',
							prompt: '将2张手牌当杀使用,以此法使用的杀不计入次数且造成伤害后使目标获得【刺目】1回合.',
							check(card) {
								if (card.name == 'sha') return 0;
								return 6 - get.useful(card);
							},
							ai: {
								respondSha: true,
								skillTagFilter(player) {
									return player.countCards('h') > 1;
								},
								order() {
									return get.order({ name: 'sha' }) + 0.05;
								},
							},
						},
						XK_feiyan1: {
							trigger: {
								player: 'useCard',
							},
							filter(event, player) {
								return event.skill == 'XK_feiyan';
							},
							_priority: 20,
							forced: true,
							content() {
								'step 0';
								if (trigger.targets) {
									for (var i = 0; i < trigger.targets.length; i++) {
										trigger.targets[i].addBuff('XK_cimu', 1, player);
									}
								}
							},
						},
						XK_jiangshang: {
							init(player) {
								player.storage.XK_jiangshang = [];
							},
							trigger: {
								player: 'loseEnd',
							},
							filter(event, player) {
								if (!player.isPhaseUsing()) return false;
								return true;
							},
							intro: {
								content(storage) {
									var str = '本回合失去的牌的类型包括:' + get.translation(storage[0]);
									for (var i = 1; i < storage.length; i++) {
										var temp = get.translation(storage[i]);
										if (storage[i] == 'trick') temp = '锦囊';
										str += '、' + get.translation(storage[i]);
									}
									return str;
								},
							},
							forced: true,
							content() {
								for (var i = 0; i < trigger.cards.length; i++) {
									var type = get.type(trigger.cards[i]);
									if (type == 'delay') type = 'trick';
									if (!player.storage.XK_jiangshang.includes(type)) {
										player.storage.XK_jiangshang.push(type);
									}
								}
								if (player.storage.XK_jiangshang.length) {
									player.markSkill('XK_jiangshang');
								}
							},
						},
						XK_jiangshang1: {
							prompt2(event, player) {
								if (player.storage.XK_jiangshang.length == 3) {
									return '是否于本回合结束后进行一个额外的回合？';
								}
							},
							forced: true,
							trigger: {
								player: ['phaseUseEnd', 'phaseBefore'],
							},
							filter(event, player) {
								if (!player.storage.XK_jiangshang) return false;
								return player.storage.XK_jiangshang.length != 0;
							},
							content() {
								'step 0';
								if (trigger.name == 'phaseUse') {
									if (player.storage.XK_jiangshang.length == 3 && !player.hasSkill('XK_jiangshang2')) {
										player.chooseBool(get.prompt('XK_jiangshang'), '是否于本回合结束后进行一个额外的回合？').set('ai', function () {
											return true;
										});
									} else event.goto(2);
								} else event.goto(2);
								('step 1');
								if (result.bool) {
									game.playAudio('../extension/侠客风云传/audio/XK_jiangshang1.mp3');
									player.phase('nodelay');
									player.addTempSkill('XK_jiangshang2', 'roundStart');
								}
								('step 2');
								player.storage.XK_jiangshang = [];
								player.unmarkSkill('XK_jiangshang');
							},
						},
						XK_jiangshang2: {},
						XK_kuihua: {
							group: ['XK_feimang', 'XK_feixian', 'XK_yuanying', 'XK_yuanying1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_feimang: {
							mod: {
								globalFrom(from, to, current) {
									var num1 = Math.floor(from.hp / 2);
									return current - num1;
								},
								globalTo(from, to, current) {
									var num1 = Math.floor((to.maxHp - to.hp) / 2);
									return current + num1;
								},
								cardUsable(card, player, num) {
									var num1 = Math.floor(player.hp / 2);
									if (card.name == 'sha') return num + num1;
								},
							},
						},
						XK_feixian: {
							trigger: { global: 'phaseAfter' },
							forced: true,
							audio: 'ext:侠客风云传/audio:1',
							filter(event, player) {
								return player.getStat('kill') > 0 && !player.hasSkill('XK_feixian2');
							},
							content() {
								player.addTempSkill('XK_feixian2', 'roundStart');
								player.phase('nodelay');
							},
						},
						XK_feixian2: {},
						XK_saodang: {
							charlotte: true,
							group: ['XK_qunmo'],
							init(player) {
								if (player.hasZhuSkill('XK_qunmo')) {
									player.markSkill('XK_qunmo');
								}
								player.storage.XK_qunmo = false;
							},
						},
						XK_qunmo: {
							intro: {
								content: 'limited',
							},
							zhuSkill: true,
							limited: true,
							audio: 'ext:侠客风云传/audio:1',
							enable: 'phaseUse',
							changeSeat: true,
							filterTarget(card, player, target) {
								return player != target && player.next != target;
							},
							filter(event, player) {
								if (!player.hasZhuSkill('XK_qunmo')) return false;
								return !player.storage.XK_qunmo;
							},
							content() {
								'step 0';
								player.awakenSkill('XK_qunmo');
								player.storage.XK_qunmo = true;
								game.swapSeat(player, target);
								('step 1');
								player.chooseBool('是否视为对' + get.translation(player.previous) + '和' + get.translation(player.next) + '使用1张杀？').ai = function (event, player) {
									var eff1 = get.effect(player.previous, { name: 'sha' }, player, player);
									var eff2 = get.effect(player.next, { name: 'sha' }, player, player);
									return eff1 + eff2 > 0;
								};
								('step 2');
								if (result.bool) {
									var tars = [];
									tars.push(player.previous);
									tars.push(player.next);
									player.useCard({ name: 'sha' }, tars, false);
								}
							},
							ai: {
								order: 5,
								result: {
									player(player, target) {
										var att = get.attitude(player, target);
										if (target == player.previous && att > 0) return att;
										if (target == player.next && att < 0) return -att;
										var att2 = get.attitude(player, player.next);
										if (target == player.next.next && att < 0 && att2 < 0) return -att - att2;
										return 0;
									},
								},
							},
						},
						XK_datian: {
							trigger: {
								player: 'phaseBefore',
							},
							_priority: 999,
							filter(event, player) {
								return player.name != 'XK_weiming';
							},
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio', player.name);
							},
							group: ['XK_tianwangtuota', 'XK_weiwodunzun'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_tianwangtuota: {
							trigger: {
								source: 'damageEnd',
							},
							audio: 'ext:侠客风云传/audio:1',
							_priority: 99,
							forced: true,
							filter(event, player) {
								if (!event.card || event.card.name != 'sha' || !event.notLink()) return false;
								return event.getParent(2).targets.length == 1;
							},
							content() {
								trigger.player.addBuff('XK_neishang', 2, player);
								player.addBuff('XK_guiyuan', 2, player);
							},
						},
						XK_weiwodunzun: {
							enable: 'phaseUse',
							usable: 1,
							audio: 'ext:侠客风云传/audio:1',
							content() {
								'step 0';
								event.num = Math.max(
									3,
									game.countPlayer(function (current) {
										return player.inRange(current) || player == current;
									})
								);
								player.draw(event.num);
								('step 1');
								player.chooseCard('h', event.num, '将' + event.num + '张手牌按顺序置于牌堆顶(先选择的在上).', true).set('ai', function (card) {
									var val = get.value(card);
									return 4 - val;
								});
								('step 2');
								if (result.cards?.length) {
									event.cardss = result.cards.slice(0);
									player.lose(event.cardss, ui.special);
									player.$throw(event.cardss, 1000, 'nobroadcast');
								} else event.finish();
								('step 3');
								for (var i = event.cardss.length - 1; i >= 0; i--) {
									event.cardss[i].fix();
									ui.cardPile.insertBefore(event.cardss[i], ui.cardPile.firstChild);
								}
								game.log(player, '将', event.cardss.length, '张牌置于牌堆顶');
								('step 4');
								if (player.countCards('h') < player.hp) {
									player.draw();
								}
							},
							ai: {
								order: 1,
								result: {
									player(player) {
										return 1;
									},
								},
							},
						},
						XK_fantian: {
							group: ['XK_shijia', 'XK_tipo', 'XK_yuanying', 'XK_yuanying1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_shijia: {
							trigger: {
								player: 'damage',
							},
							check(event, player) {
								return get.attitude(player, event.source) <= 0;
							},
							filter(event, player) {
								return event.source && event.num > 0 && event.source != player;
							},
							audio: 'ext:侠客风云传/audio:1',
							prompt2(event, player) {
								return '是否进行一次判定？若结果为红色,对' + get.translation(event.source) + '造成' + event.num + '点伤害,否则你弃置其等量的牌并获得【反手】2回合.';
							},
							content() {
								'step 0';
								player.judge('释迦', function (card) {
									if (get.color(card) == 'red') return 3;
									return -3;
								});
								('step 1');
								if (result.bool == true) {
									trigger.source.damage(trigger.num, player, 'nocard');
									event.finish();
								} else {
									player.discardPlayerCard(trigger.source, 'he', trigger.num, true);
									player.addBuff('XK_fanshou', 1, player);
								}
							},
							ai: {
								maixie_defend: true,
							},
						},
						XK_tipo: {
							audio: 'ext:侠客风云传/audio:1',
							trigger: { global: 'useCardToBegin' },
							filter(event, player) {
								if (event.player == player) return false;
								if (!get.tag(event.card, 'damage')) return false;
								if (!player.inRange(event.target)) return false;
								if (event.parent.targets.includes(player)) return false;
								return true;
							},
							check(event, player) {
								return get.attitude(player, event.target) > 0 && !event.target.hasSkillTag('maixie_hp') && player.hp >= event.target.hp;
							},
							prompt2(event, player) {
								return '是否代替' + get.translation(event.target) + '成为' + get.translation(event.card) + '的目标？';
							},
							_priority: 999,
							content() {
								trigger.target = player;
							},
						},
						XK_yintuoluo: {
							charlotte: true,
							group: ['XK_zhishi'],
						},
						XK_zhishi: {
							zhuSkill: true,
							trigger: {
								player: 'phaseBefore',
							},
							firstDo: true,
							_priority: 999,
							forced: true,
							filter(event, player) {
								return player.hasZhuSkill('XK_zhishi');
							},
							content() {
								if (player.isLinked()) {
									player.link();
								}
								if (player.isTurnedOver()) {
									player.turnOver();
								}
								if (player.hasSkillTag('XK_debuff')) {
									player.removeBuff('XK_debuff', 1, 1, true, false);
								}
								if (player.countCards('j')) {
									player.discard(player.getCards('j'));
								}
							},
						},
						XK_jiulongpo: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_licanglong';
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_licanglong.mp3');
							},
							group: ['XK_duzun', 'XK_longtu'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_duzun: {
							enable: 'phaseUse',
							usable: 1,
							audio: 'ext:侠客风云传/audio:1',
							filter(event, player) {
								if (player.countCards('he') < 2) return false;
								return game.hasPlayer(function (current) {
									return player.inRange(current);
								});
							},
							filterCard(card, player) {
								return true;
							},
							prompt: '弃置2张牌,视为对攻击范围内的任意名角色使用1张万箭齐发.',
							selectCard: 2,
							selectTarget: [1, Infinity],
							position: 'he',
							multitarget: true,
							multiline: true,
							filterTarget(card, player, target) {
								return player.canUse({ name: 'wanjian' }, target) && player.inRange(target);
							},
							check(card) {
								return 5 - get.value(card);
							},
							content() {
								'step 0';
								player.useCard({ name: 'wanjian' }, targets).audio = false;
							},
							ai: {
								order: 5,
								expose: 0.3,
								result: {
									target: -1,
								},
							},
						},
						XK_longtu: {
							trigger: {
								player: 'phaseUseBefore',
							},
							audio: 'ext:侠客风云传/audio:1',
							_priority: 21,
							check(event, player) {
								if (!player.hasUsableCard('sha')) return false;
								var hasEnemy = game.hasPlayer(function (current) {
									return current != player && get.attitude(player, current) < 0;
								});
								if (!hasEnemy) return false;
								return player.hp > 2;
							},
							prompt: '你可失去1点体力并获得【神行】2回合,如此本回合其他角色无法使用或打出基本牌.',
							content() {
								'step 0';
								player.loseHp();
								player.addBuff('XK_shenxing', 2, player);
								game.countPlayer(function (current) {
									if (current != player) {
										current.addTempSkill('XK_nores');
										player.line(current);
									}
								});
							},
							ai: { XK_selfbuff: true },
						},
						XK_baqin: {
							group: ['XK_xuanqiao', 'XK_yuanying', 'XK_yuanying1'],
							global: 'XK_tianxia',
							ai: {
								XK_neigong: true,
							},
						},
						XK_xuanqiao: {
							trigger: {
								source: 'damageBegin',
							},
							filter(event, player) {
								return event.num > 0 && event.notLink();
							},
							check(event, player) {
								return get.attitude(player, event.player);
							},
							logTarget: 'player',
							prompt2(event, player) {
								return '是否进行一次判定？若结果为:♣️️︎,此伤害+1;♠️️︎,目标获得【内伤】2回合;♦️️︎,目标获得【断筋】2回合;♥️️︎,目标获得【恐惧】2回合.';
							},
							content() {
								'step 0';
								if (player.name == 'XK_licanglong') {
									game.playAudio('../extension/侠客风云传/audio/XK_xuanqiao1.mp3');
								} else {
									game.playAudio('../extension/侠客风云传/audio/XK_xuanqiao2.mp3');
								}
								player.judge('玄窍', function (card) {
									if (card.suit == 'club' || card.suit == 'spade') return 3;
									return -3;
								});
								('step 1');
								if (result.bool == true) {
									if (result.card.suit == 'club') {
										trigger.num++;
									} else trigger.player.addBuff('XK_neishang', 2, player);
								} else {
									if (result.card.suit == 'diamond') {
										trigger.player.addBuff('XK_duanjin', 2, player);
									} else trigger.player.addBuff('XK_kongju', 2, player);
								}
							},
							ai: {
								XK_shabonus: true,
							},
						},
						XK_tianxia: {
							charlotte: true,
							mod: {
								globalFrom(from, to, current) {
									if (from.hasSkill('XK_baqin')) return;
									if (
										game.hasPlayer(function (current) {
											return current.hasSkill('XK_baqin') && current != from && get.distance(current, from) <= 2;
										})
									)
										return current + 1;
								},
							},
						},
						XK_henglan: {
							init(player) {
								if (player.hasZhuSkill('XK_bazhe')) {
									player.markSkill('XK_bazhe');
								}
								player.storage.XK_bazhe = false;
							},
							charlotte: true,
							group: ['XK_bazhe'],
						},
						XK_bazhe: {
							enable: 'chooseToUse',
							audio: 'ext:侠客风云传/audio:1',
							zhuSkill: true,
							limited: true,
							filter(event, player) {
								if (!player.hasZhuSkill('XK_bazhe')) return false;
								if (event.type != 'dying') return false;
								if (player != event.dying) return false;
								if (player.storage.XK_bazhe) return false;
								return true;
							},
							intro: {
								content: 'limited',
							},
							content() {
								'step 0';
								player.hp = Math.min(1, player.maxHp);
								player.update();
								player.awakenSkill('XK_bazhe');
								player.storage.XK_bazhe = true;
								player.addBuff('XK_bati', 1, player);
								player.addBuff('XK_bazhehenglan', 2, player);
							},
							ai: {
								XK_selfbuff: true,
								order: 1,
								skillTagFilter(player) {
									if (!player.hasZhuSkill('XK_bazhe')) return false;
									if (player.storage.XK_bazhe) return false;
									if (player.hp > 0) return false;
								},
								save: true,
								result: {
									player: 10,
								},
								threaten(player, target) {
									if (!target.storage.XK_bazhe) return 0.5;
								},
							},
						},
						XK_wanjianjue: {
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return player.name == 'XK_jiansheng';
							},
							_priority: 999,
							forced: true,
							content() {
								game.playAudio('../extension/侠客风云传/audio/XK_jiansheng.mp3');
							},
							group: ['XK_tianjianjue', 'XK_tianjianjue1', 'XK_qijianzhu'],
							ai: {
								XK_zhaoshi: true,
							},
						},
						XK_tianjianjue: {
							mod: {
								globalFrom(from, to) {
									if (to.hasSkill('XK_tianjianjue2')) return -Infinity;
								},
							},
							audio: 'ext:侠客风云传/audio:1',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								if (player.getCardUsable('sha') <= 0) return false;
								if (!player.countCards('h', { type: 'basic' })) return false;
								return game.hasPlayer(function (current) {
									return player.canUse({ name: 'sha' }, current, false);
								});
							},
							filterCard(card, player) {
								return get.type(card) == 'basic';
							},
							prompt: '将1张基本牌当作无距离限制的【杀】对至多3名角色使用',
							selectCard: 1,
							selectTarget: [1, 3],
							position: 'he',
							multitarget: true,
							multiline: true,
							discard: false,
							filterTarget(card, player, target) {
								return player.canUse({ name: 'sha' }, target, false);
							},
							check(card) {
								return 6 - get.value(card);
							},
							content() {
								'step 0';
								player.useCard({ name: 'sha' }, cards, targets).audio = false;
							},
							ai: {
								order: 9,
								expose: 0.3,
								result: {
									target: -1.5,
								},
							},
						},
						XK_tianjianjue1: {
							trigger: {
								source: 'damageEnd',
							},
							_priority: 99,
							forced: true,
							filter(event, player) {
								if (!event.card || event.card.name != 'sha' || event.getParent(3).name != 'XK_tianjianjue') return false;
								return true;
							},
							content() {
								'step 0';
								trigger.player.addTempSkill('XK_tianjianjue2', { player: 'phaseAfter' });
								trigger.player.markSkillCharacter('XK_tianjianjue2', player, '天剑诀', get.translation(player) + '计算与你的距离为1');
							},
						},
						XK_tianjianjue2: {},
						XK_qijianzhu: {
							trigger: {
								source: 'damageAfter',
							},
							filter(event, player) {
								return event.card && event.notLink();
							},
							audio: 'ext:侠客风云传/audio:1',
							forced: true,
							content() {
								'step 0';
								trigger.player.addBuff('XK_zhongshang', 1, player);
							},
						},
						XK_wanjianguizong: {
							group: ['XK_jiansha', 'XK_yuanying', 'XK_yuanying1'],
							ai: {
								XK_neigong: true,
							},
						},
						XK_jiansha: {
							trigger: {
								player: 'phaseJieshuBegin',
							},
							audio: 'ext:侠客风云传/audio:1',
							prompt2(event, player) {
								var targets = game.filterPlayer(function (current) {
									return current != player && get.distance(player, current) <= 2;
								});
								return '是否发动【剑煞】,对' + get.translation(targets) + '等随机造成无触发伤害？';
							},
							check(event, player) {
								var eff = 0;
								var players = game.players;
								for (var i = 0; i < players.length; i++) {
									if (players[i] != player) {
										var dis = get.distance(player, players[i]);
										var att = get.attitude(player, players[i]);
										if (dis <= 1) {
											if (att > 0) eff -= 1.5;
											else eff += 1.5;
										} else if (dis <= 2) {
											if (att > 0) eff -= 0.5;
											else eff += 0.5;
										}
									}
								}
								return eff > 0;
							},
							filter(event, player) {
								return game.hasPlayer(function (current) {
									return current != player && get.distance(player, current) <= 2;
								});
							},
							content() {
								'step 0';
								var players = game.players;
								for (var i = 0; i < players.length; i++) {
									if (players[i] == player) continue;
									var dis = get.distance(player, players[i]);
									if (dis <= 1) {
										var num = [1, 2, 2].randomGet();
										player.line(players[i]);
										players[i].damage(num, player, 'nocard', 'notrigger');
									} else if (dis <= 2) {
										var num = [0, 1, 1].randomGet();
										player.line(players[i]);
										players[i].damage(num, player, 'nocard', 'notrigger');
									}
								}
							},
						},
						XK_jianbai: {
							charlotte: true,
							group: ['XK_baiershisan'],
						},
						XK_baiershisan: {
							zhuSkill: true,
							trigger: {
								player: 'changeHp',
							},
							forced: true,
							filter(event, player) {
								if (!player.hasZhuSkill('XK_baiershisan')) return false;
								if (event.num >= 0) return false;
								return player.hp <= player.maxHp * 0.5;
							},
							content() {
								'step 0';
								player.addBuff('XK_jianyi', 2, player);
							},
							ai: { XK_selfbuff: true },
						},
						//基础
						_XK_start: {
							trigger: {
								global: 'gameStart',
							},
							forced: true,
							filter(event, player) {
								return !_status.connectMode;
							},
							marktext: '态',
							intro: {
								name: 'BUFF',
								content(content, player) {
									var buff = player.storage.XK_buff;
									if (!buff.length) return '当前无任何状态';
									else {
										var str = '';
										for (var i = 0; i < buff.length; i++) {
											str += get.translation(buff[i][0]) + ':剩余时间<span class="bluetext"> ' + buff[i][1] + '</span>';
											if (i != buff.length - 1) str += '</br>';
										}
										return str;
									}
								},
							},
							content() {
								player.storage.XK_buff = [];
								player.markSkill('_XK_start');
							},
						},
						_XK_buff: {
							trigger: {
								player: 'phaseAfter',
							},
							firstDo: true,
							_priority: 999,
							charlotte: true,
							forced: true,
							filter(event, player) {
								if (!player.storage.XK_buff) player.storage.XK_buff = [];
								return player.storage.XK_buff.length;
							},
							content() {
								player.storage.XK_buff = player.storage.XK_buff.filter((i) => {
									i[1]--;
									if (i[1] <= 0) {
										if (player.hasSkill(i[0])) {
											player.removeSkill(i[0]);
										}
										return false;
									}
									return true;
								});
								player.markSkill('_XK_start');
							},
						}, //QQQ
						//状态
						XK_neishang: {
							init(player, skill) {
								var skills = player.getSkills(true, false);
								if (player.hasSkillTag('XK_neigong')) {
									for (var i = 0; i < skills.length; i++) {
										var info = lib.skill[skills[i]];
										if (get.skills[i] || lib.skill[skills[i]].charlotte || !info.ai || !info.ai['XK_neigong']) {
											skills.splice(i--, 1);
										}
									}
								} else {
									for (var i = 0; i < skills.length; i++) {
										var info = lib.skill[skills[i]];
										if (get.skills[i] || lib.skill[skills[i]].charlotte) {
											skills.splice(i--, 1);
										}
									}
								}
								player.disableSkill(skill, skills);
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
										var str = '身受内伤,功体无法运转;摸牌阶段摸牌数-1;失效技能:';
										for (var i = 0; i < list.length; i++) {
											if (lib.translate[list[i] + '_info']) {
												str += get.translation(list[i]) + '、';
											}
										}
										return str.slice(0, str.length - 1);
									}
								},
							},
							trigger: { player: 'phaseDrawBegin2' },
							forced: true,
							filter(event, player) {
								return !event.numFixed && event.num > 0;
							},
							content() {
								trigger.num--;
							},
							ai: {
								XK_debuff: true,
							},
						},
						XK_zhongshang: {
							intro: {
								content(storage) {
									return '身受重伤,你的体力不因此而减少后,失去1点体力';
								},
							},
							trigger: {
								player: ['changeHp'],
							},
							charlotte: true,
							mark: true,
							forced: true,
							filter(event, player) {
								if (event.getParent(2).name == 'XK_zhongshang') return false;
								return event.num < 0;
							},
							content() {
								player.loseHp();
							},
							ai: {
								XK_debuff: true,
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'damage')) {
											return [1, -2];
										}
									},
								},
							},
						},
						XK_liuxue: {
							intro: {
								content(storage) {
									return '流血状态,结束阶段失去1点体力';
								},
							},
							trigger: {
								player: ['phaseJieshuBegin'],
							},
							charlotte: true,
							mark: true,
							forced: true,
							content() {
								player.loseHp();
							},
							ai: {
								XK_debuff: true,
							},
						},
						XK_jianyi: {
							intro: {
								content(storage) {
									return '吾,即剑之道!受到伤害最大为1,使用杀无视目标防具';
								},
							},
							mark: true,
							trigger: {
								player: ['damageBegin4'],
							},
							charlotte: true,
							forced: true,
							_priority: -1,
							filter(event, player) {
								return event.num > 0;
							},
							content() {
								if (trigger.num > 1) trigger.num = 1;
							},
							ai: {
								XK_buff: true,
								filterDamage: true,
								unequip: true,
								skillTagFilter(player, tag, arg) {
									if (arg && arg.name == 'sha') return true;
									return false;
								},
							},
						},
						XK_nores: {
							charlotte: true,
							mod: {
								cardEnabled2(card, player) {
									if (get.type(card) == 'basic') return false;
								},
							},
							intro: {
								content(storage) {
									return '无法使用或打出基本牌';
								},
							},
							mark: true,
							ai: {
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'damage')) return [0, -9];
									},
								},
							},
						},
						XK_shenxing: {
							charlotte: true,
							intro: {
								content(storage) {
									return '万里神行,所有角色与你的距离视为1';
								},
							},
							mark: true,
							mod: {
								globalFrom(from, to, current) {
									return -Infinity;
								},
							},
							ai: {
								XK_buff: true,
							},
						},
						XK_bati: {
							charlotte: true,
							intro: {
								content(storage) {
									return '周身护体真气运转,免受一切伤害';
								},
							},
							mark: true,
							trigger: {
								player: 'damageBegin',
							},
							forced: true,
							content() {
								trigger.cancel();
							},
							ai: {
								nodamage: true,
								nofire: true,
								nothunder: true,
								XK_buff: true,
								effect: {
									target(card, player, target) {
										if (player.hasSkillTag('XK_podun') && card.name == 'sha') return [1, -3];
										if (get.tag(card, 'damage')) {
											if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
											return 0;
										}
									},
								},
							},
						},
						XK_bazhehenglan: {
							charlotte: true,
							intro: {
								content(storage) {
									return '龙王的怒火爆发,使用杀次数、造成的所有伤害+1';
								},
							},
							mod: {
								cardUsable(card, player, num) {
									if (card.name == 'sha') return num + 1;
								},
							},
							mark: true,
							trigger: {
								source: 'damageBegin',
							},
							_priority: 9,
							filter(event, player) {
								return event.notLink();
							},
							forced: true,
							content() {
								trigger.num++;
							},
							ai: {
								damageBonus: true,
								XK_buff: true,
							},
						},
						XK_duanjin: {
							charlotte: true,
							intro: {
								content(storage) {
									return '筋脉受损,回合内进攻距离-1,回合外防御距离-1';
								},
							},
							mark: true,
							mod: {
								globalFrom(from, to, current) {
									if (_status.currentPhase == from) return current + 1;
								},
								globalTo(from, to, current) {
									if (_status.currentPhase != to) return current - 1;
								},
							},
							ai: {
								XK_debuff: true,
							},
						},
						XK_cimu: {
							charlotte: true,
							intro: {
								content(storage) {
									return '视力受损,使用闪时需弃置1张手牌,否则无效';
								},
							},
							mark: true,
							trigger: {
								player: 'shanBegin',
							},
							_priority: -2,
							forced: true,
							content() {
								'step 0';
								player.chooseToDiscard('弃置1张手牌,否则你使用的' + get.translation(trigger.card) + '无效', 'h').set('ai', function (card) {
									if (player.hasSkillTag('maixie')) return -1;
									return 4 - get.value(card);
								});
								('step 1');
								if (!result.bool) {
									game.log(player, '使用的', trigger.card, '无效');
									trigger.cancel();
								}
							},
							ai: {
								XK_debuff: true,
							},
						},
						XK_kongju: {
							charlotte: true,
							intro: {
								content(storage) {
									return '肝胆俱裂,使用1带有伤害标签的牌时需要弃置1张手牌,否则此牌对目标无效';
								},
							},
							mark: true,
							trigger: {
								player: 'useCardBegin',
							},
							filter(event, player) {
								return get.tag(event.card, 'damage');
							},
							_priority: -2,
							forced: true,
							content() {
								'step 0';
								player
									.chooseToDiscard('h', '弃置1张手牌,否则你使用的' + get.translation(trigger.card) + '无效', function (card) {
										var cds = _status.event.getTrigger().cards;
										return !cds.includes(card);
									})
									.set('ai', function (card) {
										return 5 - get.value(card);
									});
								('step 1');
								if (!result.bool) {
									game.log(player, '使用的', trigger.card, '对目标无效');
									trigger.targets = [];
								}
							},
							ai: {
								XK_debuff: true,
							},
						},
						XK_lianzhu: {
							charlotte: true,
							intro: {
								content(storage) {
									return '人挡杀人,佛挡杀佛!你击杀1名角色后,回复1点体力并摸1张牌';
								},
							},
							mark: true,
							trigger: {
								global: 'dieAfter',
							},
							filter(event, player) {
								return event.source && event.source == player;
							},
							_priority: -1,
							forced: true,
							content() {
								player.recover();
								player.draw();
							},
							ai: {
								XK_buff: true,
							},
						},
						XK_feiyantai: {
							charlotte: true,
							intro: {
								content(storage) {
									return '身轻如燕,回合内进攻距离、回合外防御距离+1';
								},
							},
							mark: true,
							mod: {
								globalFrom(from, to, current) {
									if (_status.currentPhase == from) return current - 1;
								},
								globalTo(from, to, current) {
									if (_status.currentPhase != to) return current + 1;
								},
							},
							ai: {
								XK_buff: true,
							},
						},
						XK_juqi: {
							charlotte: true,
							intro: {
								content(storage) {
									return '调息聚气,结束阶段,若你本回合未使用牌指定其他角色为目标,你回复1点体力或摸2张牌';
								},
							},
							mark: true,
							trigger: { player: 'phaseJieshuBegin' },
							filter(event, player) {
								var history = player.getHistory('useCard');
								for (var i = 0; i < history.length; i++) {
									if (!history[i].targets) continue;
									for (var j = 0; j < history[i].targets.length; j++) {
										if (history[i].targets[j] != player) return false;
									}
								}
								return true;
							},
							forced: true,
							content() {
								'step 0';
								var list = ['摸2张牌'];
								if (player.isDamaged()) list.push('回复1点体力');
								player
									.chooseControl(list)
									.set('ai', function (event, player) {
										if (player.isDamaged()) return '回复1点体力';
										return '摸2张牌';
									})
									.set('prompt', '【聚气】:请选择1项');
								('step 1');
								if (result.control == '回复1点体力') {
									player.recover();
								} else if (result.control == '摸2张牌') {
									player.draw(2);
								}
							},
							ai: {
								XK_buff: true,
								effect: {
									player(card, player) {
										var info = get.info(card);
										if (info.multitarget) return [1, -1];
										if (info.selectTarget != -1) return [1, -1];
									},
								},
							},
						},
						XK_yunxuan: {
							charlotte: true,
							intro: {
								content(storage) {
									return '重击之下头晕目眩,无法使用或打出手牌';
								},
							},
							mark: true,
							mod: {
								cardEnabled2(card, player) {
									if (get.position(card) == 'h') return false;
								},
							},
							ai: {
								XK_debuff: true,
							},
						},
						XK_lihuobuff: {
							charlotte: true,
							intro: {
								content(storage) {
									return '离火焚身,出牌阶段开始受到1点无来源的火属性伤害';
								},
							},
							trigger: {
								player: ['phaseUseBefore'],
							},
							mark: true,
							forced: true,
							content() {
								player.damage(1, 'fire', 'nosource');
							},
							ai: {
								XK_debuff: true,
							},
						},
						XK_xuanbing: {
							charlotte: true,
							intro: {
								content(storage) {
									return '玄冰刺骨,摸牌阶段摸牌数、手牌上限-1';
								},
							},
							mark: true,
							mod: {
								maxHandcard(player, num) {
									return num - 1;
								},
							},
							trigger: { player: 'phaseDrawBegin2' },
							forced: true,
							filter(event, player) {
								return !event.numFixed && event.num > 0;
							},
							content() {
								trigger.num--;
							},
							ai: {
								XK_debuff: true,
							},
						},
						XK_sangxin: {
							charlotte: true,
							intro: {
								content(storage) {
									return '进入癫狂状态,造成的下一次伤害+1';
								},
							},
							mark: true,
							trigger: {
								source: 'damageBegin',
							},
							filter(event, player) {
								return event.notLink();
							},
							forced: true,
							content() {
								'step 0';
								trigger.num++;
								('step 1');
								player.deleteBuff('XK_sangxin');
							},
							ai: {
								damageBonus: true,
								XK_buff: true,
							},
						},
						XK_zhongdu: {
							charlotte: true,
							intro: {
								content(storage) {
									return '身中毒素,无法回复体力,防御距离-1,此状态无法被功体移除';
								},
							},
							mark: true,
							mod: {
								globalTo(from, to, current) {
									if (!to.hasSkillTag('XK_duti')) {
										return current - 1;
									}
								},
							},
							filter(event, player) {
								return !player.hasSkillTag('XK_duti');
							},
							trigger: {
								player: 'recoverBegin',
							},
							forced: true,
							content() {
								trigger.cancel();
							},
							ai: {
								nosave: true,
								XK_debuff: true,
								XK_du: true,
								effect: {
									player(card, player) {
										if (card.name == 'tao') return [0, -1];
									},
									target(card, player, target) {
										if (card.name == 'tao') return 0;
									},
								},
							},
						},
						XK_judu: {
							charlotte: true,
							intro: {
								content(storage) {
									return '身中剧毒,无法回复体力,受到的异常状态时间+1,此状态无法被功体移除';
								},
							},
							mark: true,
							trigger: {
								player: 'recoverBegin',
							},
							forced: true,
							content() {
								trigger.cancel();
							},
							ai: {
								nosave: true,
								XK_debuff: true,
								XK_du: true,
								effect: {
									player(card, player) {
										if (card.name == 'tao') return [0, -1];
									},
									target(card, player, target) {
										if (card.name == 'tao') return 0;
									},
								},
							},
						},
						XK_pozhan: {
							charlotte: true,
							intro: {
								content(storage) {
									return '破绽百出,受到的下一次伤害+1';
								},
							},
							mark: true,
							trigger: {
								player: 'damageBegin',
							},
							filter(event, player) {
								return event.num > 0;
							},
							forced: true,
							content() {
								'step 0';
								trigger.num++;
								('step 1');
								player.deleteBuff('XK_pozhan');
							},
							ai: {
								XK_debuff: true,
							},
						},
						XK_dianxue: {
							charlotte: true,
							intro: {
								content(storage) {
									return '无法行动,跳过出牌阶段';
								},
							},
							mark: true,
							trigger: {
								player: 'phaseUseBefore',
							},
							forced: true,
							content() {
								trigger.cancel();
							},
							ai: {
								XK_debuff: true,
							},
						},
						XK_xiejin: {
							charlotte: true,
							intro: {
								content(storage) {
									return '以气化力,受到伤害时,可以弃置1张基本牌或锦囊牌使伤害-1';
								},
							},
							mark: true,
							trigger: {
								player: 'damageBegin',
							},
							filter(event, player) {
								return player.countCards('h', { type: ['basic', 'trick', 'delay'] });
							},
							forced: true,
							content() {
								'step 0';
								var str = '【卸劲】:是否弃置基本牌或锦囊牌,使你受到的伤害-1？';
								var next = player.chooseToDiscard('h', { type: ['basic', 'trick', 'delay'] });
								next.prompt2 = str;
								next.ai = function (card) {
									return 6 - get.value(card);
								};
								next.autodelay = true;
								('step 1');
								if (result.bool) {
									trigger.num--;
								}
							},
							ai: {
								XK_buff: true,
							},
						},
						XK_sangong: {
							charlotte: true,
							intro: {
								content(storage) {
									return '内力不断地流失,准备阶段随机弃置1~2张手牌';
								},
							},
							mark: true,
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							forced: true,
							content() {
								var num = Math.min(player.countCards('h'), [1, 2].randomGet());
								var card1 = player.getCards('h').randomGets(num);
								player.discard(card1);
							},
							ai: {
								XK_debuff: true,
							},
						},
						XK_qinglong: {
							charlotte: true,
							intro: {
								content(storage) {
									return '青龙散,使用的杀无法被闪响应';
								},
							},
							mark: true,
							forced: true,
							shaRelated: true,
							trigger: { player: 'useCardToPlayered' },
							filter(event, player) {
								return event.card.name == 'sha';
							},
							content() {
								trigger.parent.directHit.push(trigger.target);
							},
							ai: {
								XK_buff: true,
							},
						},
						XK_zuoyou: {
							charlotte: true,
							intro: {
								content(storage) {
									return '左右开弓,你使用的下一张基本牌、普通锦囊牌额外结算一次';
								},
							},
							mark: true,
							forced: true,
							trigger: {
								player: 'useCardAfter',
							},
							filter(event, player) {
								if (event.card.name == 'XK_zuoyoukaigong') return false;
								if (event.getParent(2).skill == 'XK_zuoyou') return false;
								return get.type(event.card) == 'basic' || get.type(event.card) == 'trick';
							},
							content() {
								player.useCard(trigger.card, trigger.cards, trigger.targets, false);
								player.deleteBuff('XK_zuoyou');
							},
							ai: {
								XK_buff: true,
							},
						},
						XK_mumang: {
							charlotte: true,
							intro: {
								content(storage) {
									return '视线受阻,使用杀或锦囊牌指定自身以外的唯一目标时,随机改变目标';
								},
							},
							mark: true,
							trigger: {
								player: 'useCardBefore',
							},
							filter(event, player) {
								if (event.card.name != 'sha' && get.type(event.card) != 'trick' && get.type(event.card) != 'delay') return false;
								if (event.targets.length != 1) return false;
								if (event.targets.includes(player)) return false;
								return true;
							},
							forced: true,
							content() {
								'step 0';
								var tars = game.filterPlayer();
								tars.sort(lib.sort.random);
								trigger.targets[0] = tars[0];
							},
							ai: {
								XK_debuff: true,
							},
						},
						XK_jianqi: {
							intro: {
								content(storage) {
									if (storage === undefined) {
										return '剑气纵横,你使用杀指定目标时,可移除2层【剑气】,令其获得【重伤】1回合且此杀无视防具(上限20层)';
									}
									return '剑气纵横,你使用杀指定目标时,可移除2层【剑气】,令其获得【重伤】1回合且此杀无视防具;</br>当前层数:' + storage + '/20';
								},
							},
							init(player) {
								player.storage.XK_jianqi = 0;
								player.storage.XK_jianqi_unequip = [];
							},
							audio: 'ext:侠客风云传/audio:1',
							mark: true,
							trigger: {
								player: ['useCardToPlayered'],
							},
							charlotte: true,
							check(event, player) {
								if (!event.target.hasSkill('XK_zhongshang')) {
									return player.storage.XK_jianqi > 4;
								}
								return false;
							},
							prompt2(event, player) {
								return '是否移除2层【剑气】,令' + get.translation(event.target) + '获得【重伤】1回合且此杀无视防具？你当前拥有' + player.storage.XK_jianqi + '层【剑气】.';
							},
							_priority: 7,
							filter(event, player) {
								if (player.storage.XK_jianqi < 2) return false;
								return event.card.name == 'sha';
							},
							content() {
								'step 0';
								trigger.target.addBuff('XK_zhongshang', 1, player);
								player.storage.XK_jianqi -= 2;
								player.storage.XK_jianqi_unequip.add(trigger.card);
								('step 1');
								if (player.storage.XK_jianqi <= 0) {
									player.removeSkill('XK_jianqi');
									player.unmarkSkill('XK_jianqi');
								}
							},
							ai: {
								XK_tai: true,
								unequip: true,
								skillTagFilter(player, tag, arg) {
									if (tag == 'unequip') {
										if (arg && player.storage.XK_jianqi_unequip.includes(arg.card)) return true;
										return false;
									}
								},
							},
						},
						XK_shipo: {
							charlotte: true,
							intro: {
								content(storage) {
									return '看破敌方的弱点,你造成伤害后,可以弃置目标1张牌';
								},
							},
							mark: true,
							trigger: {
								source: 'damageEnd',
							},
							forced: true,
							filter(event, player) {
								return event.num > 0;
							},
							content() {
								player.discardPlayerCard(trigger.player, 1, 'he', false);
							},
							ai: {
								XK_buff: true,
							},
						},
						XK_dashipo: {
							charlotte: true,
							intro: {
								content(storage) {
									return '看破敌方的弱点,你造成伤害后,可以弃置目标伤害数值张牌(至多2张)';
								},
							},
							marktext: '识',
							mark: true,
							trigger: {
								source: 'damageEnd',
							},
							forced: true,
							filter(event, player) {
								return event.num > 0;
							},
							content() {
								var nm = Math.min(2, trigger.num);
								player.discardPlayerCard(trigger.player, nm, 'he', false);
							},
							ai: {
								XK_buff: true,
							},
						},
						XK_zhuihun: {
							charlotte: true,
							intro: {
								content(storage) {
									return '追魂索命,你使用的下一张杀无法被闪响应';
								},
							},
							mark: true,
							forced: true,
							shaRelated: true,
							trigger: { player: 'useCardToPlayered' },
							filter(event, player) {
								return event.card.name == 'sha';
							},
							content() {
								'step 0';
								trigger.parent.directHit.push(trigger.target);
								('step 1');
								player.deleteBuff('XK_zhuihun');
							},
							ai: {
								XK_buff: true,
							},
						},
						XK_xinjian: {
							charlotte: true,
							intro: {
								content(storage) {
									return '心剑追魂,结束阶段,你可以对与你距离为1的其他角色造成1点无触发伤害';
								},
							},
							mark: true,
							trigger: {
								player: 'phaseJieshuBegin',
							},
							audio: 'ext:侠客风云传/audio:1',
							prompt2(event, player) {
								var targets = game.filterPlayer(function (current) {
									return current != player && get.distance(player, current) <= 1;
								});
								return '是否发动【心剑】,对' + get.translation(targets) + '等造成1点无触发伤害？';
							},
							check(event, player) {
								var eff = 0;
								var players = game.players;
								for (var i = 0; i < players.length; i++) {
									if (players[i] != player) {
										var dis = get.distance(player, players[i]);
										var att = get.attitude(player, players[i]);
										if (dis <= 1) {
											if (att > 0) eff -= 2;
											else eff += 2;
										}
									}
								}
								return eff > 0;
							},
							filter(event, player) {
								return game.hasPlayer(function (current) {
									return current != player && get.distance(player, current) <= 1;
								});
							},
							content() {
								'step 0';
								var players = game.players;
								for (var i = 0; i < players.length; i++) {
									if (players[i] == player) continue;
									var dis = get.distance(player, players[i]);
									if (dis <= 1) {
										player.line(players[i]);
										players[i].damage(1, player, 'nocard', 'notrigger');
									}
								}
							},
							ai: {
								XK_buff: true,
							},
						},
						XK_xingfen: {
							intro: {
								content(storage) {
									return '好兴奋啊!使用杀无次数限制';
								},
							},
							mark: true,
							mod: {
								cardUsable(card, player, num) {
									if (card.name == 'sha') return Infinity;
								},
							},
							ai: {
								XK_buff: true,
							},
						},
						XK_ganzhi: {
							intro: {
								content(storage) {
									return '感知周围一切变化,你使用杀造成伤害后可以1张牌';
								},
							},
							_priority: -1,
							mark: true,
							trigger: {
								source: 'damageEnd',
							},
							prompt2(event, player) {
								return '是否摸' + event.num + '张牌？';
							},
							forced: true,
							filter(event, player) {
								return event.card && event.card.name == 'sha' && event.notLink() && event.num > 0;
							},
							content() {
								player.draw();
							},
							ai: {
								XK_buff: true,
							},
						},
						XK_daganzhi: {
							intro: {
								content(storage) {
									return '感知周围一切变化,你使用杀造成伤害后可以摸伤害数值的牌(至多3张)';
								},
							},
							marktext: '感',
							_priority: -1,
							mark: true,
							trigger: {
								source: 'damageEnd',
							},
							prompt2(event, player) {
								return '是否摸' + event.num + '张牌？';
							},
							forced: true,
							filter(event, player) {
								return event.card && event.card.name == 'sha' && event.notLink() && event.num > 0;
							},
							content() {
								var nm = Math.min(3, trigger.num);
								player.draw(nm);
							},
							ai: {
								XK_buff: true,
							},
						},
						XK_wuzhao: {
							intro: {
								content(storage) {
									return '无招胜有招,你可以将杀当做闪,或将闪当做杀使用或打出';
								},
							},
							mark: true,
							group: ['XK_wuzhao_sha', 'XK_wuzhao_shan'],
							ai: {
								XK_buff: true,
							},
							subSkill: {
								sha: {
									enable: ['chooseToUse', 'chooseToRespond'],
									filterCard: { name: 'shan' },
									viewAs: { name: 'sha' },
									viewAsFilter(player) {
										if (!player.countCards('h', 'shan')) return false;
									},
									prompt: '将一张闪当杀使用或打出',
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
									enable: ['chooseToRespond', 'chooseToUse'],
									filterCard: { name: 'sha' },
									viewAs: { name: 'shan' },
									prompt: '将一张杀当闪使用或打出',
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
						},
						XK_qidun: {
							charlotte: true,
							intro: {
								content(storage) {
									return '真气护体,免受下一次伤害或体力流失';
								},
							},
							mark: true,
							trigger: {
								player: ['damageBegin', 'loseHpBegin'],
							},
							forced: true,
							content() {
								trigger.cancel();
								player.deleteBuff('XK_qidun');
							},
							ai: {
								nodamage: true,
								nofire: true,
								nothunder: true,
								XK_buff: true,
								effect: {
									target(card, player, target) {
										if (player.hasSkillTag('XK_podun') && card.name == 'sha') return [1, -3];
										if (get.tag(card, 'damage')) {
											if (!target.hasFriend()) return;
											return 0;
										}
									},
								},
							},
						},
						XK_fanshou: {
							intro: {
								content(storage) {
									return '反击状态,以你为目标的杀或决斗结算完成后,若来源在你的攻击范围内你可对其使用1张杀';
								},
							},
							trigger: {
								target: ['shaAfter', 'juedouAfter'],
							},
							filter(event, player) {
								return player.canUse({ name: 'sha' }, event.player);
							},
							forced: true,
							content() {
								player.chooseToUse({ name: 'sha' }, trigger.player, -1, '【反手】:是否对' + get.translation(trigger.player) + '使用一张杀？');
							},
							mark: true,
							ai: {
								XK_buff: true,
							},
						},
						XK_dafanshou: {
							intro: {
								content(storage) {
									return '反击状态,以你为目标的带有伤害标签的牌结算完成后,你可对来源使用1张杀';
								},
							},
							marktext: '反',
							trigger: {
								target: ['useCardToAfter'],
							},
							filter(event, player) {
								return get.tag(event.card, 'damage') && lib.filter.targetEnabled({ name: 'sha' }, player, event.target);
							},
							forced: true,
							content() {
								player.chooseToUse({ name: 'sha' }, trigger.player, -1, '【大反手】:是否对' + get.translation(trigger.player) + '使用一张杀？');
							},
							mark: true,
							ai: {
								XK_buff: true,
							},
						},
						XK_zhuoying: {
							charlotte: true,
							intro: {
								content(storage) {
									return '无所遁形,你与所有角色的距离视为1';
								},
							},
							mark: true,
							mod: {
								globalTo(from, to, current) {
									return -Infinity;
								},
							},
							ai: {
								XK_debuff: true,
							},
						},
						XK_guiyuan: {
							charlotte: true,
							intro: {
								content(storage) {
									return '凝神归元,结束阶段进行判定,若结果为红色,回复1点体力,否则摸1张牌';
								},
							},
							mark: true,
							trigger: { player: 'phaseJieshuBegin' },
							forced: true,
							content() {
								'step 0';
								player.judge('归元', function (card) {
									if (get.color(card) == 'red') return 3;
									return -3;
								});
								('step 1');
								if (result.bool == true) {
									player.recover();
								} else player.draw();
							},
							ai: {
								XK_buff: true,
							},
						},
						XK_shiqi: {
							charlotte: true,
							intro: {
								content(storage) {
									return '噬气状态,使用的下一张闪结算完成后回复1点体力';
								},
							},
							mark: true,
							trigger: {
								player: 'shanAfter',
							},
							_priority: 25,
							forced: true,
							content() {
								player.recover();
								player.deleteBuff('XK_shiqi');
							},
							ai: {
								XK_buff: true,
							},
						},
						XK_xixing: {
							charlotte: true,
							intro: {
								content(storage) {
									return '吸星状态,下一次造成伤害后可以获得目标1张手牌';
								},
							},
							mark: true,
							trigger: {
								source: 'damageEnd',
							},
							_priority: 28,
							filter(event, player) {
								return event.num > 0 && event.player.countCards('h');
							},
							forced: true,
							content() {
								player.gainPlayerCard('h', trigger.player);
								player.deleteBuff('XK_xixing');
							},
							ai: {
								XK_buff: true,
							},
						},
						XK_pojia: {
							charlotte: true,
							intro: {
								content(storage) {
									return '护甲受损,无法装备防具';
								},
							},
							mark: true,
							init(player, skill) {
								if (!player.isDisabled(2)) {
									player.storage.XK_pojia = true;
									player.disableEquip(2);
								}
							},
							onremove(player, skill) {
								if (player.storage.XK_pojia == true) {
									player.enableEquip(2);
									delete player.storage.XK_pojia;
								}
							},
							ai: {
								XK_debuff: true,
							},
						},
						XK_xiantiangangqi: {
							charlotte: true,
							intro: {
								content(storage) {
									return '先天罡气运转,若你未装备武器,视为装备了太极图;若你未装备防具,视为装备了八卦阵';
								},
							},
							mark: true,
							mod: {
								attackFrom(from, to, distance) {
									if (from.isEmpty(1) || from.isDisabled(1)) return distance - 1;
								},
							},
							equipSkill: false,
							noHidden: true,
							inherit: ['XK_taijituskill'],
							filter(event, player) {
								if (!lib.skill.XK_taijituskill.filter(event, player)) return false;
								return player.isEmpty(1) || player.isDisabled(1);
							},
							ai: {
								XK_buff: true,
								effect: {
									target(card, player, target) {
										if (target.getEquip(1)) return;
										if (player == target && get.subtype(card) == 'equip1') {
											var num = 6.5;
											if (get.equipValue(card) <= num) return 0;
										}
									},
								},
							},
							group: ['XK_xiantiangangqi_bagua'],
							subSkill: {
								bagua: {
									equipSkill: false,
									noHidden: true,
									inherit: ['bagua_skill'],
									filter(event, player) {
										if (!lib.skill.bagua_skill.filter(event, player)) return false;
										return player.isEmpty(2) || player.isDisabled(2);
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
							},
						},
						XK_shayibodong: {
							charlotte: true,
							intro: {
								content(storage) {
									return '强大的波动气流引发无穷杀意,造成伤害后,对目标额外造成其体力上限*0~0.6的无触发伤害';
								},
							},
							mark: true,
							trigger: {
								source: 'damageEnd',
							},
							_priority: 8,
							filter(event, player) {
								return event.num > 0 && event.player.isAlive();
							},
							forced: true,
							content() {
								var num = Math.ceil(trigger.player.maxHp * (Math.random() * 0.6));
								trigger.player.damage(num, player, 'nocard', 'notrigger');
							},
							ai: {
								XK_buff: true,
							},
						},
						XK_canyang: {
							charlotte: true,
							intro: {
								content(storage) {
									return '残日如来,若你的体力为全场最少(之一)且不大于2,你受到伤害-1';
								},
							},
							mark: true,
							trigger: {
								player: 'damageBegin',
							},
							filter(event, player) {
								return event.num > 0 && player.isMinHp(false) && player.hp <= 2;
							},
							_priority: 99,
							forced: true,
							content() {
								trigger.num--;
							},
							ai: {
								XK_buff: true,
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'damage')) {
											if (target.isMinHp(false) && target.hp <= 2) return 0.5;
											return;
										}
									},
								},
							},
						},
						XK_lianji: {
							intro: {
								content(storage) {
									if (storage === undefined) {
										return '连续进攻,你的杀结算完成后,每有1层【连击】,有20%概率使此杀额外结算1次(上限5层)';
									}
									return '连续进攻,你的杀结算完成后,每有1层【连击】,有20%概率使此杀额外结算1次;</br>当前层数:' + storage + '/5';
								},
							},
							init(player) {
								player.storage.XK_lianji = 0;
							},
							audio: 'ext:侠客风云传/audio:1',
							mark: true,
							trigger: {
								player: ['useCardAfter'],
							},
							_priority: -5,
							charlotte: true,
							forced: true,
							usable: 5, //QQQ
							filter(event, player) {
								if (player.storage.XK_lianji <= 0) return false;
								if (event.card.name == 'sha' || (event.card.name == 'juedou' && player.hasSkillTag('XK_exlianji'))) {
									for (var i = 0; i < event.targets.length; i++) {
										if (event.targets[i].isAlive()) return true;
									}
								}
								return false;
							},
							content() {
								'step 0';
								if (player.hasSkill('XK_kuangfengbaoyu')) {
									player.storage.XK_kuangfengbaoyu = player.storage.XK_lianji;
								}
								('step 1');
								var num = player.storage.XK_lianji * 0.2,
									num1 = Math.random();
								if (trigger.card.name == 'juedou') {
									num *= 0.5;
								}
								if (num1 <= num) {
									player.storage.XK_lianji = 0;
									player.unmarkSkill('XK_lianji');
								} else event.finish();
								('step 2');
								player.useCard(trigger.card, trigger.cards, trigger.targets, false);
								('step 3');
								player.removeSkill('XK_lianji');
							},
							ai: {
								XK_tai: true,
							},
						},
						XK_tiandibuff: {
							charlotte: true,
							intro: {
								content(storage) {
									return '斩无界,天地劫!你使用杀指定目标时,令其获得【破甲】1回合;免疫【内伤】状态;手牌上限+1';
								},
							},
							mod: {
								maxHandcard(player, num) {
									return num + 1;
								},
							},
							mark: true,
							trigger: {
								player: 'shaBegin',
							},
							filter(event, player) {
								return event.target.isAlive();
							},
							forced: true,
							content() {
								trigger.target.addBuff('XK_pojia', 1, player);
							},
							ai: {
								XK_buff: true,
							},
							group: ['XK_tiandibuff_no'],
							subSkill: {
								no: {
									trigger: {
										player: 'addBuffBegin',
									},
									filter(event, player) {
										return event.skill == 'XK_neishang';
									},
									_priority: 91,
									forced: true,
									content() {
										trigger.cancel();
									},
								},
							},
						},
						XK_zhenji: {
							intro: {
								content(storage) {
									if (storage === undefined || storage.length == 0) {
										return '震击状态,每有1层【震击】,你与来源、来源与你的距离均+1(上限3层)';
									} else {
										var str = '震击状态,你与' + get.translation(storage[0].pl) + ',' + get.translation(storage[0].pl) + '与你的距离均+' + storage[0].nm;
										for (var i = 1; i < storage.length; i++) {
											str += ';你与' + get.translation(storage[i].pl) + ',' + get.translation(storage[i].pl) + '与你的距离均+' + storage[i].nm;
										}
										return str + '.';
									}
								},
							},
							init(player) {
								player.storage.XK_zhenji = [];
							},
							mark: true,
							charlotte: true,
							mod: {
								globalFrom(from, to, current) {
									var lt = from.storage.XK_zhenji;
									if (lt.length) {
										for (var i = 0; i < lt.length; i++) {
											if (to == lt[i].pl) return current + lt[i].nm;
										}
									}
								},
								globalTo(from, to, current) {
									var lt = to.storage.XK_zhenji;
									if (lt.length) {
										for (var i = 0; i < lt.length; i++) {
											if (from == lt[i].pl) return current + lt[i].nm;
										}
									}
								},
							},
							ai: {
								XK_tai: true,
							},
						},
						XK_jinghua: {
							charlotte: true,
							intro: {
								content(storage) {
									return '身心皆净,准备阶段,若有异常状态,随机移除1项,否则你摸1张牌';
								},
							},
							mark: true,
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							forced: true,
							content() {
								if (player.hasSkillTag('XK_debuff')) {
									player.removeBuff('XK_debuff', 1, 1, false, false);
								} else player.draw();
							},
							ai: {
								XK_buff: true,
							},
						},
						XK_jielidali: {
							charlotte: true,
							intro: {
								content(storage) {
									return '四两拨千斤,当你受到大于1的伤害时,令此伤害减至1,并使来源受到多余的伤害';
								},
							},
							_priority: -10,
							filter(event, player) {
								if (event.source && !event.source.isAlive()) return false;
								return event.num > 1;
							},
							mark: true,
							trigger: {
								player: 'damageBegin4',
							},
							forced: true,
							content() {
								'step 0';
								event.nm = trigger.num - 1;
								trigger.num = 1;
								('step 1');
								if (trigger.source) {
									var next = trigger.source.damage(event.nm, trigger.nature, trigger.source);
									if (trigger.card) next.card = trigger.card;
									if (trigger.cards) next.cards = trigger.cards;
								}
							},
							ai: {
								filterDamage: true,
								XK_buff: true,
							},
						},
						XK_zuiwujibuff: {
							intro: {
								content(storage) {
									return '最无极也!你使用杀造成伤害后,令目标获得【流血】2回合;结束阶段,若你本回合未造成伤害,你获得【丧心】2回合.';
								},
							},
							mark: true,
							charlotte: true,
							trigger: {
								source: 'damageAfter',
							},
							filter(event, player) {
								return event.card && event.card.name == 'sha' && event.notLink();
							},
							forced: true,
							content() {
								trigger.player.addBuff('XK_liuxue', 2, player);
							},
							ai: {
								XK_buff: true,
								XK_selfbuff: true,
							},
							group: ['XK_zuiwujibuff_no'],
							subSkill: {
								no: {
									trigger: {
										player: 'phaseJieshuAfter',
									},
									_priority: -9,
									forced: true,
									filter(event, player) {
										return !player.getStat('damage') || player.getStat('damage') <= 0;
									},
									content() {
										player.addBuff('XK_sangxin', 2, player);
										('step 0');
										player.storage.XSyuzhong++;
									},
								},
							},
						},
						XK_qingyi: {
							intro: {
								content(storage) {
									if (storage === undefined || storage.length == 0) {
										return '情意绵绵,你造成下一次伤害时,伤害+1,并令状态来源摸1张牌';
									} else {
										return '情意绵绵,你造成下一次伤害时,伤害+1,并令' + get.translation(storage) + '摸1张牌';
									}
								},
							},
							mark: true,
							charlotte: true,
							trigger: {
								source: 'damageBegin',
							},
							forced: true,
							content() {
								trigger.num++;
								player.storage.XK_qingyi.draw();
								player.deleteBuff('XK_qingyi');
							},
							ai: {
								XK_buff: true,
							},
						},
						XK_dongshang: {
							intro: {
								content(storage) {
									if (storage === undefined || storage.length == 0) {
										return '好冷啊……接下来X次使用基本牌后,失去1点体力,X为【寒冰】层数';
									} else {
										var str = '好冷啊……接下来' + storage + '次使用基本牌后,失去1点体力';
										return str;
									}
								},
							},
							init(player) {
								player.storage.XK_dongshang = 0;
							},
							onremove(player) {
								delete player.storage.XK_dongshang;
								player.unmarkSkill('XK_dongshang');
							},
							mark: true,
							charlotte: true,
							trigger: {
								player: 'useCardEnd',
							},
							filter(event, player) {
								var tp = get.type(event.card);
								return tp == 'basic' && player.storage.XK_dongshang > 0;
							},
							forced: true,
							content() {
								'step 0';
								player.loseHp();
								player.storage.XK_dongshang--;
								('step 1');
								if (player.storage.XK_dongshang <= 0) {
									player.removeSkill('XK_dongshang');
								}
							},
							ai: {
								XK_tai: true,
							},
						},
						XK_kuangnu: {
							charlotte: true,
							intro: {
								content(storage) {
									return '你使用杀或决斗造成伤害时进行判定,若结果为黑色,此伤害+1';
								},
							},
							mark: true,
							trigger: {
								source: 'damageBegin',
							},
							_priority: 5,
							filter(event, player) {
								if (!event.card) return false;
								return (event.card.name == 'sha' || event.card.name == 'juedou') && event.notLink();
							},
							forced: true,
							content() {
								'step 0';
								player.judge('狂怒', function (card) {
									if (get.color(card) == 'black') return 3;
									return -3;
								});
								('step 1');
								if (result.bool == true) {
									trigger.num++;
								}
							},
							ai: {
								damageBonus: true,
								XK_buff: true,
								XK_shabonus: true,
							},
						},
						XK_sanzhe: {
							charlotte: true,
							intro: {
								content(storage) {
									return '三折肱为良医,你可视为使用1张杀/闪/酒,移除此状态.';
								},
							},
							mark: true,
							enable: 'chooseToUse',
							filter(event, player) {
								if (event.filterCard && event.filterCard({ name: 'sha' }, player, event)) return true;
								if (event.filterCard && event.filterCard({ name: 'jiu' }, player, event)) return true;
								if (event.filterCard && event.filterCard({ name: 'shan' }, player, event)) return true;
								return false;
							},
							chooseButton: {
								dialog(event, player) {
									var list = [];
									if (event.filterCard && event.filterCard({ name: 'sha' }, player, event)) {
										list.push(['基本', '', 'sha']);
									}
									if (event.filterCard && event.filterCard({ name: 'jiu' }, player, event)) {
										list.push(['基本', '', 'jiu']);
									}
									if (event.filterCard && event.filterCard({ name: 'shan' }, player, event)) {
										list.push(['基本', '', 'shan']);
									}
									return ui.create.dialog('【三折肱】', [list, 'vcard'], 'hidden');
								},
								check(button) {
									var player = get.player();
									var card = { name: button.link[2] };
									if (card.name == 'shan') return 3;
									if (
										game.hasPlayer(function (current) {
											return player.canUse({ name: 'sha' }, current) && get.effect(current, { name: 'sha' }, player, player) > 0;
										})
									) {
										if (card.name == 'sha') {
											return 2.9;
										} else if (card.name == 'jiu') {
											if (player.hasUsableCard('sha')) return 4;
											if (player.hp <= 0) return 3.5;
											return 0;//QQQ
										}
									}
									return 0;
								},
								backup(links, player) {
									return {
										filterCard(card) {
											return false;
										},
										popname: true,
										selectCard: -1,
										viewAs: {
											name: links[0][2],
										},
										onuse(result, player) {
											player.deleteBuff('XK_sanzhe');
										},
									};
								},
								prompt(links, player) {
									return '视为使用1张' + get.translation(links[0][2]);
								},
							},
							ai: {
								XK_buff: true,
								order: 10,
								save: true,
								respondSha: true,
								respondShan: true,
								result: {
									player: 1,
								},
							},
						},
						XK_dudun: {
							charlotte: true,
							intro: {
								content(storage) {
									return '聚毒为盾,你受到下一次伤害时进行一次判定,若结果为红,防止此伤害,否则令来源获得【中毒】2回合';
								},
							},
							mark: true,
							trigger: {
								player: 'damageBegin',
							},
							forced: true,
							content() {
								'step 0';
								player.judge('毒盾', function (card) {
									if (get.color(card) == 'red') return 3;
									return -3;
								});
								('step 1');
								if (result.bool == true) {
									trigger.cancel();
								} else {
									if (trigger.source) trigger.source.addBuff('XK_zhongdu', 2, player);
								}
								('step 2');
								player.deleteBuff('XK_dudun');
							},
							ai: {
								XK_buff: true,
								effect: {
									target(card, player, target) {
										if (player.hasSkillTag('XK_podun') && card.name == 'sha') return [1, -3];
										if (get.tag(card, 'damage')) {
											if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
											if (player.hasSkillTag('XK_nozhongdu', false, target)) return 0.8;
											return 0.5;
										}
									},
								},
							},
						},
						XK_daoguangzhoujia: {
							charlotte: true,
							intro: {
								content(storage) {
									return '刀光胄甲,你受到伤害后,对来源造成1点伤害';
								},
							},
							mark: true,
							trigger: {
								player: 'damageAfter',
							},
							filter(event, player) {
								if (!player.isAlive() || !event.source.isAlive()) return false;
								return event.source && event.num > 0;
							},
							forced: true,
							content() {
								trigger.source.damage(1, player, 'nocard');
							},
							ai: {
								XK_buff: true,
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'damage')) {
											if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
											if (!target.hasFriend()) return;
											return [1, 0, 1, -1.5];
										}
									},
								},
							},
						},
						XK_zhenhan: {
							intro: {
								content(storage) {
									return '受到震撼,无法使用或打出杀';
								},
							},
							mod: {
								cardEnabled2(card, player) {
									if (card.name == 'sha') return false;
								},
							},
							charlotte: true,
							mark: true,
							ai: {
								XK_debuff: true,
							},
						},
						XK_shouhu: {
							charlotte: true,
							intro: {
								content(storage) {
									return '守护珍视的一切,其他角色受到伤害时,你可代替其承受一次伤害';
								},
							},
							mark: true,
							trigger: {
								global: 'damageBegin4',
							},
							_priority: -96,
							filter(event, player) {
								if (event.player == player) return false;
								return event.num > 0;
							},
							check(event, player) {
								if (player.hp < 2) return false;
								return get.attitude(player, event.player) > 0;
							},
							prompt2(event, player) {
								return '是否代替' + get.translation(event.player) + '承受' + event.num + '点伤害？';
							},
							content() {
								'step 0';
								trigger.player = player;
								('step 1');
								player.deleteBuff('XK_shouhu', 2, player);
							},
							ai: {
								XK_buff: true,
								threaten: 1.5,
							},
						},
						XK_henglian: {
							init(player) {
								player.link(true);
							},
							charlotte: true,
							intro: {
								content(storage) {
									return '横练功夫护体,始终处于横置状态;受到以你为起点的属性伤害时回复X点体力,受到不以你为起点的属性伤害时摸2X张牌,X为伤害值.';
								},
							},
							mark: true,
							trigger: {
								player: ['linkEnd'],
							},
							forced: true,
							filter(event, player) {
								return !player.isLinked();
							},
							content() {
								player.link(true);
							},
							ai: {
								XK_buff: true,
								link: true,
								effect: {
									target(card, player, target) {
										//QQQ
										if (card.name == 'tiesuo') return 'zeroplayertarget';
										if (get.tag(card, 'natureDamage')) {
											if (player.hasSkillTag('jueqing', false, target, true)) return [1, -2];
											if (!target.hasFriend()) return;
											return [1, 2];
										}
									},
								},
							},
							group: ['XK_henglian_1', 'XK_henglian_2'],
							subSkill: {
								1: {
									trigger: {
										player: 'damageEnd',
									},
									_priority: 18,
									forced: true,
									filter(event, player) {
										return player.isLinked() && event.notLink() && event.nature && event.num > 0;
									},
									content() {
										player.recover(trigger.num);
									},
								},
								2: {
									trigger: {
										player: 'damageEnd',
									},
									_priority: 18,
									forced: true,
									filter(event, player) {
										return player.isLinked() && !event.notLink() && event.nature && event.num > 0;
									},
									content() {
										player.draw(2 * trigger.num);
									},
								},
							},
						},
						XK_shihun: {
							charlotte: true,
							intro: {
								content(storage) {
									return '噬魂夺魄,你使用杀造成伤害后,可回复1点体力或获得目标1张手牌';
								},
							},
							mark: true,
							trigger: {
								source: 'damageEnd',
							},
							_priority: 28,
							filter(event, player) {
								if (!event.card || event.card.name != 'sha' || !event.notLink()) return false;
								if (event.num <= 0) return false;
								return event.player.countCards('h') || player.isDamaged();
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseControlList(['回复1点体力', '获得' + get.translation(trigger.player) + '1张手牌'])
									.set('ai', function (event, player) {
										if (player.isDamaged()) return 0;
										else return 1;
									})
									.set('prompt', '【噬魂】:请选择一项');
								('step 1');
								if (result.control != 'cancel2') {
									if (result.index == 0) {
										player.recover();
									} else {
										player.gainPlayerCard('h', trigger.player, 1, true);
									}
								}
							},
							ai: {
								XK_buff: true,
							},
						},
						//功体
						XK_yuanying: {
							trigger: {
								player: 'phaseBefore',
							},
							_priority: 9998,
							forced: true,
							filter(event, player) {
								return player.hasSkillTag('XK_debuff');
							},
							content() {
								player.removeBuff('XK_debuff', 1, 2, false, true);
							},
							ai: {
								XK_neigong1: true,
							},
						},
						XK_yuanying1: {
							mod: {
								maxHandcard(player, num) {
									return num + 1;
								},
							},
							trigger: {
								player: 'phaseDrawBegin',
							},
							forced: true,
							_priority: 999,
							content() {
								trigger.num++;
							},
						},
						XK_dazhoutian: {
							trigger: {
								player: 'phaseBefore',
							},
							_priority: 9998,
							forced: true,
							filter(event, player) {
								return player.hasSkillTag('XK_debuff');
							},
							content() {
								player.removeBuff('XK_debuff', 1, 1, false, true);
							},
							ai: {
								XK_neigong2: true,
							},
						},
						XK_dazhoutian1: {
							trigger: {
								player: 'phaseDrawBegin',
							},
							forced: true,
							_priority: 999,
							content() {
								trigger.num++;
							},
						},
						XK_xiaozhoutian: {
							mod: {
								maxHandcard(player, num) {
									return num + 1;
								},
							},
							trigger: {
								player: 'phaseBefore',
							},
							_priority: 9998,
							forced: true,
							filter(event, player) {
								return player.hasSkillTag('XK_debuff');
							},
							content() {
								player.removeBuff('XK_debuff', 0, 1, false, true);
							},
							ai: {
								XK_neigong3: true,
							},
						},
					}, //技能
					translate: {
						XK_zhujue: '主角团队',
						XK_tianzi: '天子门生',
						XK_qijie: '奇杰怪士',
						XK_hongyan: '知己红颜',
						XK_tianyi: '天意难违',
						XK_chuanzhong: '正道武林',
						XK_tianlong: '天龙霸业',
						XK_youqing: '友情客串',
						XK_qingnian: '青年俊杰',
						XK_zongshi: '一代宗师',
						XK_saiwangye: '赛王爷',
						XK_rentianxiang: '任天翔',
						XK_renhaoran: '任浩然',
						XK_luyuer: '路羽儿',
						XK_ying: '影',
						XK_fomu: '佛母',
						XK_yangyun: '杨云',
						XK_wuse: '无色',
						XK_xianxier: '仙希尔',
						XK_yuepangzi: '岳胖子',
						XK_laohu: '老胡',
						XK_nalanyan: '纳兰衍',
						XK_lang: '浪',
						XK_fengqingxiao: '封青霄',
						XK_huachi: '花痴',
						XK_tangzhonghui: '唐中慧',
						XK_mingjiaojiaozhu: '明教教主',
						XK_dalishizi: '大理世子',
						XK_riyuejiaozhu: '日月教主',
						XK_litanhua: '小李探花',
						XK_fengzhongzhishen: '风中之神',
						XK_jinlunguoshi: '金轮国师',
						XK_yihuagongzhu: '移花宫主',
						XK_wudangzushi: '武当祖师',
						XK_linghudaxia: '令狐大侠',
						XK_huajiuse: '花玖瑟',
						XK_fanweili: '樊未离',
						XK_budong: '不动',
						XK_shenyi: '神医',
						XK_caodai: '曹岱',
						XK_longmo: '龙墨',
						XK_qijiangjun: '戚将军',
						XK_hetuo: '贺陀',
						XK_fangyunhua: '方云华',
						XK_bore: '江天雄',
						XK_mengqiansi: '孟倩思',
						XK_shuipanpan: '水盼盼',
						XK_fenghuayishi: '风华易逝',
						XK_xuedaoshaozhu: '血刀少主',
						XK_zhengxuan: '郑玄',
						XK_yuwenxingcheng: '宇文星城',
						XK_shiguang: '花落',
						XK_fujianhan: '傅剑寒',
						XK_chuhui: '楚绘',
						XK_zhaoyaer: '赵雅儿',
						XK_wali: '瓦力',
						XK_yinshiyun: '尹世允',
						XK_xuziqi: '徐子骐',
						XK_xuziyi: '徐子易',
						XK_weiziling: '卫紫绫',
						XK_heizhongluowang: '黑冢罗王',
						XK_tianjilaodao: '天机老道',
						XK_zhuorenqing: '卓人清',
						XK_lingxianger: '凌香儿',
						XK_xianyin: '仙音',
						XK_jiwen: '纪纹',
						XK_renqingxuan: '任清璇',
						XK_fengchuixue: '风吹雪',
						XK_lanting: '蓝婷',
						XK_huangdi: '皇帝',
						XK_jiuyin: '九阴',
						XK_youjin: '游进',
						XK_wangrong: '王蓉',
						XK_luoshejun: '罗蛇君',
						XK_xuanmingzi: '玄冥子',
						XK_shenlan: '沈澜',
						XK_wuyin: '无因',
						XK_chenchongying: '陈崇英',
						XK_weiming: '东方未明',
						XK_qinhongshang: '秦红殇',
						XK_taya: '塔娅',
						XK_jingji: '荆棘',
						XK_guyuexuan: '谷月轩',
						XK_wuxiazi: '无瑕子',
						XK_leizhentian: '雷震天',
						XK_shenxiangyun: '沈湘芸',
						XK_shiyan: '史燕',
						XK_qili: '齐丽',
						XK_yangdi: '阳第上人',
						XK_xuanligong: '玄漓公',
						XK_kexianglong: '柯降龙',
						XK_jiwushuang: '姬无双',
						XK_xiaoxiami: '小虾米',
						XK_yandansheng: '阎丹生',
						XK_jiangtianxiong: '般若',
						XK_xiaolinzi: '小林子',
						XK_licangtian: '厉苍天',
						XK_licanglong: '厉苍龙',
						XK_jiansheng: '剑圣',
						XK_jiuyinshenzhua: '招式',
						XK_jiuyinshenzhua_info: "<center><font color=#38309d>【九阴神爪】</font></center><font color=#F0F>【噬天白幡】</font>锁定技,回合开始时,你执行一个额外的出牌阶段.你可跳过你的摸牌和出牌阶段.</br><font color=#F0F>【追魂阴煞】</font>锁定技,回合结束时,根据你此回合跳过的阶段数,你依次获得:>=1,<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_kuangnu');\">【狂怒】</a>;>=2,<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_fanshou');\">【反手】</a>;>=3,<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_shihun');\">【噬魂】</a>2回合.",
						XK_shitianbaifan: '噬天白幡',
						XK_shitianbaifan_info: '',
						XK_shitianbaifanex: '噬天白幡',
						XK_shitianbaifanex_info: '',
						XK_zhuihunyinsha: '追魂阴煞',
						XK_zhuihunyinsha_info: '',
						XK_jiuyinfeixu: '功体',
						XK_jiuyinfeixu_info: "<center><font color=#38309d>【九阴飞絮】</font></center><font color=#F0F>【武曲】</font>你可摸1张牌弃置X张牌,视为使用或打出1张杀/闪,X为你本轮已发动此技能的次数.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.",
						XK_wuqu: '武曲',
						XK_wuqu_info: '',
						XK_wuqu1: '武曲',
						XK_wuqu1_info: '',
						XK_wuqu2: '武曲',
						XK_wuqu2_info: '',
						XK_jinyizhan: '招式',
						XK_jinyizhan_info: "<center><font color=#38309d>【金翼斩】</font></center><font color=#F0F>【金雕鹏飞】</font>锁定技,你的回合内,每张进入弃牌堆的♦️️牌与♣️️牌使你获得1层<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_lianji');\">【连击】</a>.</br><font color=#F0F>【金翼展翅】</font>出牌限1次,你可令你与1名其他角色重铸1张手牌,若你/该角色重铸的是闪/杀,你获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_zhuihun');\">【追魂】</a>/<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_shipo');\">【识破】</a>1回合.",
						XK_jindiaopengfei: '金雕鹏飞',
						XK_jindiaopengfei_info: '',
						XK_jinyizhanchi: '金翼展翅',
						XK_jinyizhanchi_info: '',
						XK_jinyishengong: '功体',
						XK_jinyishengong_info: "<center><font color=#38309d>【金翼神功】</font></center><font color=#F0F>【猎爪】</font>每回合限1次,其他角色可以将其被抵消的杀交给你,你可将你造成伤害的杀交给1名其他角色.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.",
						XK_liezhua: '猎爪',
						XK_liezhua_info: '',
						XK_liezhuaex: '猎爪',
						XK_liezhuaex_info: '',
						XK_liezhua2: '猎爪',
						XK_liezhua2_info: '',
						XK_wuyuejianyi: '招式',
						XK_wuyuejianyi_info: "<center><font color=#38309d>【幽冥剑法】</font></center><font color=#F0F>【镇五岳】</font>回合开始时,你可声明1张武器牌,直到下回合开始你拥有此武器效果;期间,若你的装备区进入此牌,你可令1名其他角色获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_yunxuan');\">【晕眩】</a>1回合.",
						XK_zhenwuyue: '镇五岳',
						XK_zhenwuyue_info: '',
						XK_zhenwuyueex: '镇五岳',
						XK_zhenwuyueex_info: '',
						XK_shenjianjue: '功体',
						XK_shenjianjue_info: "<center><font color=#38309d>【神剑诀】</font></center><font color=#F0F>【冶兵】</font>弃牌阶段结束,你可根据根据你本阶段弃牌数,令1名角色装备对应的武器:1/2/3/4+,殇瑶/太皇/疯魔杖/傲天神剑.</br><font color=#F0F>【缮甲】</font>出牌阶段开始,你可失去1点体力并摸X张牌,X为(4-你装备区的牌数).</br><font color=#F0F>【小周天运转】</font>体力70%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;手牌上限+1;回合开始时随机移除0~1项异常状态.",
						XK_yebing: '冶兵',
						XK_yebing_info: '',
						XK_shanjia: '缮甲',
						XK_shanjia_info: '',
						XK_qixingjianfa: '招式',
						XK_qixingjianfa_info: '<center><font color=#38309d>【七星剑法】</font></center><font color=#F0F>【星灭光离】</font>出牌阶段限1次,你可将1张红/黑色手牌当作乐不思蜀/兵粮寸断置于自己判定区,视为使用1张伤害基数+1的杀,目标需将1张其他颜色手牌置于其判定区,否则此杀无法被闪避.',
						XK_xingmieguangli: '星灭光离',
						XK_xingmieguangli_info: '',
						XK_xingmieguangli1: '星灭光离',
						XK_xingmieguangli1_info: '',
						XK_beidounuoyi: '功体',
						XK_beidounuoyi_info: "<center><font color=#38309d>【北斗挪移】</font></center><font color=#F0F>【星屑旋转】</font>你造成伤害时,可为任意名角色分配此伤害值.</br><font color=#F0F>【斗转星移】</font>当你成为杀的目标时,若你判定区有牌,可令1名不为此杀目标的其他角色选择1项:代替你成为此杀目标;将你判定区1张牌移至其判定区.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.",
						XK_xingxuexuanzhuan: '星屑旋转',
						XK_xingxuexuanzhuan_info: '',
						XK_douzhuanxingyi: '斗转星移',
						XK_douzhuanxingyi_info: '',
						XK_zhuifengxunzong: '招式',
						XK_zhuifengxunzong_info: "<center><font color=#38309d>【追风寻踪术】</font></center><font color=#F0F>【鬼影寻踪】</font>出牌阶段限1次,你可与一名其他角色交换位置,如此你获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_feiyantai');\">【飞燕】</a>2回合、其获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_duanjin');\">【断筋】</a>1回合.</br><font color=#F0F>【追风刺影】</font>锁定技,你对攻击范围内的角色造成的伤害+1,受到攻击范围内角色造成的伤害-1.",
						XK_guiyingxunzong: '鬼影寻踪',
						XK_guiyingxunzong_info: '',
						XK_zhuifengciying: '追风刺影',
						XK_zhuifengciying_info: '',
						XK_zhuifengciying1: '追风刺影',
						XK_zhuifengciying1_info: '',
						XK_wangniangong: '功体',
						XK_wangniangong_info: "<center><font color=#38309d>【妄念功】</font></center><font color=#F0F>【无妄】</font>结束阶段,你可声明1种花色(若体力为全场最低则改为2种),直到你下回合开始,其他角色无法使用该花色牌指定你为目标.</br><font color=#F0F>【无念】</font>出牌阶段,你可弃置1张秘籍牌令1名角色获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_guiyuan');\">【归元】</a>3回合.锁定技,你无法使用秘籍牌.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.",
						XK_wangnianwuwang: '无妄',
						XK_wangnianwuwang_info: '',
						XK_wangnianwuwang1: '无妄',
						XK_wangnianwuwang1_info: '',
						XK_wangnianwunian: '无念',
						XK_wangnianwunian_info: '',
						XK_kongquezhenyan: '招式',
						XK_kongquezhenyan_info: "<center><font color=#38309d>【孔雀真言】</font></center><font color=#F0F>【孔雀轮舞】</font>当其他角色受到来源不为你的伤害时,你可选择1项:代替其承受此伤害;交给其伤害数值的牌.</br><font color=#F0F>【六道圆满】</font>你于回合外回复体力时,可令当前回合角色获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_cimu');\">【刺目】</a><a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_kongju');\">【恐惧】</a>2回合.",
						XK_kongquelunwu: '孔雀轮舞',
						XK_kongquelunwu_info: '',
						XK_liudaoyuanman: '六道圆满',
						XK_liudaoyuanman_info: '',
						XK_kongquemizhou: '功体',
						XK_kongquemizhou_info: "<center><font color=#38309d>【孔雀密咒】</font></center><font color=#F0F>【曼荼罗】</font>锁定技,当你进入或脱离濒死状态时、失去最后的手牌时摸1张牌;你的手牌上限为体力值、损失体力值中的较大者.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.",
						XK_mantuluo: '曼荼罗',
						XK_mantuluo_info: '',
						XK_mantuluoex: '曼荼罗',
						XK_mantuluoex_info: '',
						XK_tianshanhuanying: '招式',
						XK_tianshanhuanying_info: "<center><font color=#38309d>【天山幻影剑】</font></center><font color=#F0F>【幻影无形】</font>每轮限1次,其他角色受到不为你的来源造成的伤害时,你可与之交换位置,如此你代替其承受此伤害并令来源获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_zhongshang');\">【重伤】</a>2回合.",
						XK_huanyingwuxing: '幻影无形',
						XK_huanyingwuxing_info: '',
						XK_mingdingjue: '功体',
						XK_mingdingjue_info: "<center><font color=#38309d>【酩酊诀】</font></center><font color=#F0F>【牛饮】</font>锁定技,当你的体力减少时,获得1层【饮】.出牌阶段限1次,你可失去1层【饮】视为使用1张酒.</br><font color=#F0F>【酩酊体】</font>锁定技,你使用酒附加额外效果:你的杀需要2张闪来响应.</br><font color=#F0F>【小周天运转】</font>体力70%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;手牌上限+1;回合开始时随机移除0~1项异常状态.",
						XK_niuyin: '牛饮',
						XK_niuyin_info: '',
						XK_niuyinex: '牛饮',
						XK_niuyinex_info: '',
						XK_mingdingti: '酩酊体',
						XK_mingdingti_info: '',
						XK_qishijianji: '招式',
						XK_qishijianji_info: '<center><font color=#38309d>【骑士剑技】</font></center><font color=#F0F>【阿西娜的惊叹】</font>一轮开始,你可为本轮你使用的杀、酒、桃分配共计3点效果基数.</br><font color=#F0F>【女神的宽恕】</font>你回复体力时,可为任意名角色分配此回复数值;若你因此未回复体力,你可重新分配【阿西娜的惊叹】的效果基数.',
						XK_axinajingtan: '阿西娜的惊叹',
						XK_axinajingtan_info: '',
						XK_axinajingtan1: '阿西娜的惊叹',
						XK_axinajingtan1_info: '',
						XK_axinajingtan2: '阿西娜的惊叹',
						XK_axinajingtan2_info: '',
						XK_nvshenkuanshu: '女神的宽恕',
						XK_nvshenkuanshu_info: '',
						XK_zhandouyanwu: '功体',
						XK_zhandouyanwu_info: "<center><font color=#38309d>【战斗演武曲】</font></center><font color=#F0F>【演武曲】</font>转换技,锁定技,你每使用1张牌:1.摸1张牌;2.重铸1张牌;3.弃置1张牌.你的回合开始、体力变化时,可使之转为下一个状态.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.",
						XK_yanwuqu: '演武曲',
						XK_yanwuqu_info: '',
						XK_yanwuqu1: '演武曲',
						XK_yanwuqu_info: '',
						XK_baoxiangrulai: '招式',
						XK_baoxiangrulai_info: "<center><font color=#38309d>【宝相如来棍】</font></center><font color=#F0F>【四方结缘】</font>每回合限1次,1名角色使用的非转化普通锦囊牌进入弃牌堆时,你可弃置1至2张手牌令其获得之,若你弃置了2张牌,该角色使用此牌时可使你也成为目标.</br><font color=#F0F>【诸法皆空】</font>锁定技,你每轮造成的第一次伤害无效并获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_shouhu');\">【守护】</a>2回合,受到的第一次伤害无效并获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_henglian');\">【横练】</a>2回合.",
						XK_sifangjieyuan: '四方结缘',
						XK_sifangjieyuan_info: '',
						XK_sifangjieyuanex: '四方结缘',
						XK_sifangjieyuanex_info: '',
						XK_sifangjieyuan2: '四方结缘',
						XK_sifangjieyuan2_info: '',
						XK_zhufajiekong: '诸法皆空',
						XK_zhufajiekong_info: '',
						XK_zhufajiekongex: '诸法皆空',
						XK_zhufajiekongex_info: '',
						XK_dagongzhifa: '招式',
						XK_dagongzhifa_info: '<center><font color=#38309d>【打工指法】</font></center><font color=#F0F>【996】</font>每轮限1次,回合结束时,你可获得1个额外的回合;如此额外回合结束后,你失去1点体力并翻面.</br><font color=#F0F>【快速码字】</font>出牌阶段开始,你可失去1点体力使你本回合使用杀的次数+X,X为你的体力值;本回合结束时,若你于本回合击杀过其他角色,你回复1点体力并将武将牌翻至正面,否则你弃置2张牌.',
						XK_996: '996',
						XK_996_info: '',
						XK_9961: '996',
						XK_9961_info: '',
						XK_9962: '996',
						XK_9962_info: '',
						XK_kuaisimazi: '快速码字',
						XK_kuaisimazi_info: '',
						XK_kuaisimazi1: '快速码字',
						XK_kuaisimazi1_info: '',
						XK_jinzhongzhao: '功体',
						XK_jinzhongzhao_info: "<center><font color=#38309d>【金钟罩】</font></center><font color=#F0F>【锻意炼神】</font>指定你为目标的带有伤害标签的牌进入弃牌堆时,你可获得之.锁定技,结束阶段,你重铸手牌中带有伤害标签的牌.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.",
						XK_duanyilianshen: '锻意炼神',
						XK_duanyilianshen_info: '',
						XK_duanyilianshen1: '锻意炼神',
						XK_duanyilianshen1_info: '',
						XK_feixingzhi: '招式',
						XK_feixingzhi_info: '<center><font color=#38309d>【飞星掷】</font></center><font color=#F0F>【摘星九影】</font>摸牌阶段,你可令之改为获得体力值小于你的其他角色各1张手牌.',
						XK_zhaixingjiuying: '摘星九影',
						XK_zhaixingjiuying_info: '',
						XK_yinyuantaohui: '功体',
						XK_yinyuantaohui_info: "<center><font color=#38309d>【隐元韬晦诀】</font></center><font color=#F0F>【连山】</font>出牌阶段限1次,你可重铸2/3/4种花色的牌各1张,且首次触发各项时增加【正气】选项:弃置手牌最多的角色1张牌/摸1张牌/令1名角色回复1点体力.</br><font color=#F0F>【正气】</font>准备、结束阶段,你可发动1项本回合未发动过的效果:交给1名其他角色1张牌.</br><font color=#F0F>【小周天运转】</font>体力70%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;手牌上限+1;回合开始时随机移除0~1项异常状态.",
						XK_lianshan: '连山',
						XK_lianshan_info: '',
						XK_zhengqi: '正气',
						XK_zhengqi_info: '',
						XK_zhenshishenfen: '绝技',
						XK_zhenshishenfen_info: '<font color=#F0F>【真实身份】</font>主公技,觉醒技,准备阶段,若场上没有忠臣存活且存活反贼大于2,你回复1点体力并将招式、功体替换为【无敌极限流】、【日月无相功】.',
						XK_bianshen: '真实身份',
						XK_bianshen_info: '',
						XK_hujiadaofa: '招式',
						XK_hujiadaofa_info: "<center><font color=#38309d>【胡家刀法】</font></center><font color=#F0F>【八方藏刀式】</font>当你失去武器时,你可获得此武器的特效;其他角色装备区的牌进入弃牌堆时,你可弃置1张手牌获得之.</br><font color=#F0F>【闭门铁扇刀】</font>锁定技,回合结束若你装备区的牌为全场最多,你获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_daoguangzhoujia');\">【刀光胄甲】</a>1回合.",
						XK_bafangcangdao: '八方藏刀式',
						XK_bafangcangdao_info: '',
						XK_bafangcangdao1: '八方藏刀式',
						XK_bafangcangdao1_info: '',
						XK_bafangcangdaoex: '八方藏刀式',
						XK_bafangcangdaoex_info: '',
						XK_bimentieshan: '闭门铁扇刀',
						XK_bimentieshan_info: '',
						XK_feihugong: '功体',
						XK_feihugong_info: "<center><font color=#38309d>【飞狐功】</font></center><font color=#F0F>【银狐迷踪】</font>当你没有手牌时,可以摸1张牌视为使用或打出1张闪,如此你令当前回合角色获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_zhenhan');\">【震撼】</a>2回合.</br><font color=#F0F>【小周天运转】</font>体力70%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;手牌上限+1;回合开始时随机移除0~1项异常状态.",
						XK_yinhumizong: '银狐迷踪',
						XK_yinhumizong_info: '',
						XK_feipuliantian: '飞瀑连天诀',
						XK_feipuliantian_info: "<center><font color=#38309d>【飞瀑连天诀】</font></center><font color=#F0F>【珠花扬舞】</font>你于出牌阶段使用牌连续指定同一名其他角色为目标(或之一)时,可令其依次获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_mumang');\">【目盲】</a><a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_sangong');\">【散功】</a><a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_duanjin');\">【断筋】</a>2回合.",
						XK_zhuhuayangwu: '珠花扬舞',
						XK_zhuhuayangwu_info: '',
						XK_xiaoaohongchen: '功体',
						XK_xiaoaohongchen_info: "<center><font color=#38309d>【笑傲红尘诀】</font></center><font color=#F0F>【笑傲】</font>准备阶段,你可声明并记录1张未以此法记录的普通锦囊牌,直到你下回合开始,1名角色使用此牌时,你可令之额外结算1次.</br><font color=#F0F>【红尘】</font>其他角色使用的牌进入弃牌堆时,若你因【笑傲】记录了此牌名,你可移除此记录并获得该牌,每种牌名限1次.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.",
						XK_xiaoao: '笑傲',
						XK_xiaoao_info: '',
						XK_xiaoaoex: '笑傲',
						XK_xiaoaoex_info: '',
						XK_hongchen: '红尘',
						XK_hongchen_info: '',
						XK_miqingdafa: '招式',
						XK_miqingdafa_info: '<center><font color=#38309d>【迷情大法】</font></center><font color=#F0F>【意乱情迷】</font>每轮开始时你可指定1名角色,本轮当你成为普通锦囊牌或基本牌的目标时,若该角色不为此牌目标,你可令其成为此牌目标.',
						XK_yiluanqingmi: '意乱情迷',
						XK_yiluanqingmi_info: '',
						XK_yiluanqingmi1: '意乱情迷',
						XK_yiluanqingmi1_info: '',
						XK_yiluanqingmi3: '意乱情迷',
						XK_yiluanqingmi3_info: '',
						XK_dingxiwuliang: '功体',
						XK_dingxiwuliang_info: "<center><font color=#38309d>【鼎心无量功】</font></center><font color=#F0F>【临凤荧】</font>其他角色准备阶段,若其判定区有牌,你可令其弃置其中所有牌并令其失去等量体力.</br><font color=#F0F>【帝稚游】</font>每轮限1次,其他角色回复体力时,你可令回复值-1,并获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_dudun');\">【毒盾】</a>2回合.</br><font color=#F0F>【小周天运转】</font>体力70%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;手牌上限+1;回合开始时随机移除0~1项异常状态.",
						XK_linfengying: '临凤荧',
						XK_linfengying_info: '',
						XK_dizhiyou: '帝稚游',
						XK_dizhiyou_info: '',
						XK_jingang_re: '金刚',
						XK_jingang_re_info: '当你获得异常状态时,若来源没有此状态,你可进行一次判定,若为基本牌,将此状态转移至来源.',
						XK_duantiguiyuan_re: '锻体归元',
						XK_duantiguiyuan_re_info: "出牌阶段开始,若你已受伤,可选择1项:1.摸X张牌;2.随机移除X项异常状态;3.获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_guiyuan');\">【归元】</a>X回合.X为你已损失体力值且至多为3.",
						XK_yijinduangu_re: '易筋锻骨',
						XK_yijinduangu_re_info: '锁定技,你免疫体力流失、翻面.',
						XK_dajingangzhang: '大金刚掌',
						XK_dajingangzhang_info: "<center><font color=#38309d>【大金刚掌】</font></center><font color=#F0F>【金刚如来】</font>当你成为杀的目标时,可以选择1项:1.视为对来源使用1张杀;2.获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_sangxin');\">【丧心】</a>2回合.</br><font color=#F0F>【金刚般若】</font>锁定技,你造成不少于2点的伤害后,令目标获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_kongju');\">【恐惧】</a><a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_pojia');\">【破甲】</a>1回合.",
						XK_weituozhang: '金刚如来',
						XK_weituozhang_info: '',
						XK_jingangborezhang: '金刚般若',
						XK_jingangborezhang_info: '',
						XK_shaolinjiuyang: '功体',
						XK_shaolinjiuyang_info: "<center><font color=#38309d>【少林九阳功】</font></center><font color=#F0F>【嗔障】</font>锁定技,若你的体力值:<=5,你拥有【金刚】;<=3,你拥有【锻体归元】;=1,你拥有【易筋锻骨】.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.",
						XK_chenzhang: '嗔障',
						XK_chenzhang_info: '',
						XK_baihuacuoquan: '招式',
						XK_baihuacuoquan_info: "<center><font color=#38309d>【百花错拳】</font></center><font color=#F0F>【漫天花雨】</font>你使用普通锦囊牌时,可令此牌效果变为:令目标获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_juqi');\">【聚气】</a>2回合</br><font color=#F0F>【百花齐绽】</font>你可跳过摸牌阶段并展示牌堆顶3张牌,获得其中的非基本牌,根据获得的牌数你:0,视为使用1张万箭齐发;1,视为使用1张无中生有;2,令1名其他角色获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_pozhan');\">【破绽】</a>2回合.",
						XK_mantianhuayu: '漫天花雨',
						XK_mantianhuayu_info: '',
						XK_baihuaqizhan: '百花齐绽',
						XK_baihuaqizhan_info: '',
						XK_yunvxinjing: '功体',
						XK_yunvxinjing_info: "<center><font color=#38309d>【玉女心经】</font></center><font color=#F0F>【花法】</font>转换技,其他角色使用或打出的杀/闪/桃进入弃牌堆时,可令你获得之.</br><font color=#F0F>【小周天运转】</font>体力70%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;手牌上限+1;回合开始时随机移除0~1项异常状态.",
						XK_huafa: '花法',
						XK_huafa_info: '',
						XK_feidao: '招式',
						XK_feidao_info: "<center><font color=#38309d>【小李飞刀】</font></center><font color=#F0F>【出刀】</font>出牌阶段限1次,你可弃置任意张手牌并摸等量的牌,如此你获得(弃置牌数/2)层<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_lianji');\">【连击】</a>.",
						XK_chudao: '出刀',
						XK_chudao_info: '',
						XK_sankushengong: '功体',
						XK_sankushengong_info: "<center><font color=#38309d>【三苦神功】</font></center><font color=#F0F>【例不虚发】</font>你对目标使用杀时,可弃置1张带有伤害标签的牌使此杀的伤害与响应所需的闪+1,且此杀无视防具.</br><font color=#F0F>【毒魄】</font>你使用杀造成伤害时,可选择任意项:使目标获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_zhongdu');\">【中毒】</a>2回合;摸2张牌.每选择一项,此伤害-1.</br><font color=#F0F>【小周天运转】</font>体力70%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;手牌上限+1;回合开始时随机移除0~1项异常状态.",
						XK_libuxufa: '例不虚发',
						XK_libuxufa_info: '',
						XK_libuxufa1: '例不虚发',
						XK_libuxufa1_info: '',
						XK_dupo: '毒魄',
						XK_dupo_info: '',
						XK_qiankundanuoyi: '招式',
						XK_qiankundanuoyi_info: '<center><font color=#38309d>【乾坤大挪移】</font></center><font color=#F0F>【吸星纳气】</font>每回合限1次,你使用杀指定唯一目标时,可令目标在其攻击范围内的其他角色选择1项:对目标使用1张杀;令你摸1张牌.</br><font color=#F0F>【阴阳轮转】</font>出牌阶段,你可交给本回合未以此法获得过牌的其他角色任意张手牌;此阶段结束,你可视为依次使用X张不同的基本牌,X为获得你至少2张牌的角色数.',
						XK_xixingnaqi: '吸星纳气',
						XK_xixingnaqi_info: '',
						XK_yinyanglunzhuan: '阴阳轮转',
						XK_yinyanglunzhuan_info: '',
						XK_yinyanglunzhuan1: '阴阳轮转',
						XK_yinyanglunzhuan1_info: '',
						XK_riyuezhangfa: '招式',
						XK_riyuezhangfa_info: '<center><font color=#38309d>【日月掌法】</font></center><font color=#F0F>【凶焰冲宵】</font>准备阶段,你可对攻击范围内的1名其他角色造成1点伤害,如此,你可将本回合的判定/摸牌/出牌阶段移至弃牌阶段之后.',
						XK_xiongyan: '凶焰冲宵',
						XK_xiongyan_info: '',
						XK_xiongyan1: '凶焰冲宵',
						XK_xiongyan1_info: '',
						XK_xiuluozhenjing: '功体',
						XK_xiuluozhenjing_info: "<center><font color=#38309d>【修罗真经】</font></center><font color=#F0F>【血色蔷薇】</font>若你武将牌上牌的数量小于4,你每使用1张牌后,可摸1张牌并将1张与你武将牌上的牌花色均不同的手牌置于武将牌上.</br><font color=#F0F>【杀意】</font>锁定技,准备阶段,若你武将牌上牌数不小于4,你弃置其上以及判定区所有牌且本回合你所有基本牌视为火杀.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.",
						XK_xueseqiangwei: '血色蔷薇',
						XK_xueseqiangwei_info: '',
						XK_shayi: '杀意',
						XK_shayi_info: '',
						XK_shayi1: '杀意',
						XK_shayi1_info: '',
						XK_bingxinjue: '功体',
						XK_bingxinjue_info: "<center><font color=#38309d>【冰心诀】</font></center><font color=#F0F>【心如冰清】</font>出牌阶段限1次,你可将1张基本牌置于武将牌上视为使用之,且其不计入使用次数.</br><font color=#F0F>【万变犹定】</font>你受到伤害后,可使用1张武将牌上的牌,且此牌无距离限制.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.",
						XK_xinrubingqing: '心如冰清',
						XK_xinrubingqing_info: '',
						XK_tiantabujing: '万变犹定',
						XK_tiantabujing_info: '',
						XK_longxiangborezhang: '招式',
						XK_longxiangborezhang_info: '<center><font color=#38309d>【龙象般若掌】</font></center><font color=#F0F>【无上般若歼】</font>你使用杀或决斗造成伤害时,可令此伤害+X,如此此技能失效直到你的体力变化,X为你已损失体力值/2.',
						XK_wushangbore: '无上般若歼',
						XK_wushangbore_info: '',
						XK_wushangbore1: '无上般若歼',
						XK_wushangbore1_info: '',
						XK_yihuajieyu: '招式',
						XK_yihuajieyu_info: '<center><font color=#38309d>【移花接玉】</font></center><font color=#F0F>【移花】</font>摸牌阶段你可少摸任意张牌并获得等量其他角色各1张手牌,如此出牌阶段结束你需交给这些角色各1张牌并令其获得【移】标记.</br><font color=#F0F>【接玉】</font>拥有【移】的角色出牌阶段开始,需对你使用1张杀,否则令你摸1张牌,移除此标记.',
						XK_yihua: '移花',
						XK_yihua_info: '',
						XK_yihua1: '移花',
						XK_yihua1_info: '',
						XK_yihua2: '移花',
						XK_yihua2_info: '',
						XK_jieyu: '接玉',
						XK_jieyu_info: '',
						XK_chunyangwuji: '功体',
						XK_chunyangwuji_info: "<center><font color=#38309d>【纯阳无极功】</font></center><font color=#F0F>【纯阳】</font>锁定技,你于回合外每回合只能使用或打出1张基本牌;你使用的基本牌效果基数+1.</br><font color=#F0F>【无极】</font>出牌阶段限1次,你使用杀结算完成后,若你攻击距离大于1,可使之变为1直至回合结束并重置基本牌使用次数.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.",
						XK_chunyang: '纯阳',
						XK_chunyang_info: '',
						XK_chunyang1: '纯阳',
						XK_chunyang11_info: '',
						XK_wuji1: '无极',
						XK_wuji1_info: '',
						XK_wuji2: '无极',
						XK_wuji2_info: '',
						XK_tianxuezhifa: '招式',
						XK_tianxuezhifa_info: "<center><font color=#38309d>【天雪指法】</font></center><font color=#F0F>【万象森罗】</font>出牌阶段限1次,你可令你与任意名其他角色随机分配<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_cimu');\">【刺目】</a><a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_kongju');\">【恐惧】</a><a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_liuxue');\">【流血】</a><a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_sangong');\">【散功】</a>2回合;若仅选择了1名其他角色,你获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_xiejin');\">【卸劲】</a>2回合.",
						XK_wanxiangsenluo: '万象森罗',
						XK_wanxiangsenluo_info: '',
						XK_tianxuegong: '功体',
						XK_tianxuegong_info: "<center><font color=#38309d>【天雪功】</font></center><font color=#F0F>【冰魄】</font>锁定技,体力不小于50%时,免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a><a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_yunxuan');\">【晕眩】</a><a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_zhongdu');\">【中毒】</a>;准备阶段,若你体力小于50%,获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_guiyuan');\">【归元】</a>1回合.</br><font color=#F0F>【冰心】</font>与你距离为1或体力为1的其他角色使用的闪进入弃牌堆时,你可获得此牌.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.",
						XK_bingpo: '冰魄',
						XK_bingpo_info: '',
						XK_bingpo1: '冰魄',
						XK_bingpo1_info: '',
						XK_bingxin1: '冰心',
						XK_bingxin1_info: '',
						XK_xiuluowuqing: '招式',
						XK_xiuluowuqing_info: "<center><font color=#38309d>【修罗无情刀】</font></center><font color=#F0F>【修罗霸】</font>出牌阶段限1次,你可失去任意点体力视为对攻击范围内任意名角色使用1张杀并获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_kuangnu');\">【狂怒】</a>2回合,若因此失去至少2点体力,获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_bati');\">【霸体】</a>2回合.",
						XK_xiuluoba: '修罗霸',
						XK_xiuluoba_info: '',
						XK_xiuluobafeng: '功体',
						XK_xiuluobafeng_info: "<center><font color=#38309d>【修罗霸凤功】</font></center><font color=#F0F>【暴杀】</font>你受到伤害后,可将手牌数调整至与来源相同,如此你可展示手牌中任意张杀,并于此回合结束时使用之.</br><font color=#F0F>【血斩】</font>你使用杀造成伤害时,可防止此伤害使此杀不计入次数,并令目标获得1层【斩】;你造成伤害时,可移除目标所有【斩】,使此伤害增加相同数值.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.",
						XK_baosha: '暴杀',
						XK_baosha_info: '',
						XK_xuezhan: '血斩',
						XK_xuezhan_info: '',
						XK_xuezhan1: '血斩',
						XK_xuezhan1_info: '',
						XK_xuezhan2: '血斩',
						XK_xuezhan2_info: '',
						XK_chanyizizai: '招式',
						XK_chanyizizai_info: "<center><font color=#38309d>【禅意自在棍】</font></center><font color=#F0F>【不动明王棍】</font>出牌阶段限1次,你可将1张杀对攻击范围内的任意名角色使用,此杀造成伤害时伤害-1并令目标获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_zhuoying');\">【捉影】</a>1回合.",
						XK_budongmingwang: '不动明王棍',
						XK_budongmingwang_info: '',
						XK_budongmingwang1: '不动明王棍',
						XK_budongmingwang1_info: '',
						XK_jingangbuhuai: '功体',
						XK_jingangbuhuai_info: "<center><font color=#38309d>【金刚不坏体】</font></center><font color=#F0F>【不坏】</font>锁定技,你受到伤害后,获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_qidun');\">【气盾】</a>2回合;你回复体力后,移除<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_qidun');\">【气盾】</a>状态.</br><font color=#F0F>【金刚】</font>当你获得异常状态时,若来源没有此状态,你可进行一次判定,若为基本牌,将此状态转移至来源.</br><font color=#F0F>【小周天运转】</font>体力70%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;手牌上限+1;回合开始时随机移除0~1项异常状态.",
						XK_buhuai: '不坏',
						XK_buhuai_info: '',
						XK_buhuai1: '不坏',
						XK_buhuai1_info: '',
						XK_jingang: '金刚',
						XK_jingang_info: '',
						XK_jinzhenjiemai: '招式',
						XK_jinzhenjiemai_info: "<center><font color=#38309d>【金针截脉】</font></center><font color=#F0F>【三折肱】</font>出牌阶段限1次,你可令1名已受伤的角色获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_sanzhe');\">【三折肱】</a>2回合,若不为你,你获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_jinghua');\">【净化】</a>2回合.</br><font color=#F0F>【千金方】</font>限定技,出牌阶段,你可失去X点体力,令1名其他角色回复2X点体力,且你的防御距离、手牌上限+X直到下回合开始,X为不大于你体力的任意值.",
						XK_sanzhegong: '三折肱',
						XK_sanzhegong_info: '',
						XK_qianjinfang: '千金方',
						XK_qianjinfang_info: '',
						XK_qianjinfang1: '千金方',
						XK_qianjinfang1_info: '',
						XK_yaowangshenpian: '功体',
						XK_yaowangshenpian_info: "<center><font color=#38309d>【药王神篇】</font></center><font color=#F0F>【辟毒】</font>锁定技,免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_zhongdu');\">【中毒】</a><a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_judu');\">【剧毒】</a>状态.你获得异常状态时,可弃置1张牌防止之.</br><font color=#F0F>【小周天运转】</font>体力70%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;手牌上限+1;回合开始时随机移除0~1项异常状态.",
						XK_pidu: '辟毒',
						XK_pidu_info: '',
						XK_pidu1: '辟毒',
						XK_pidu1_info: '',
						XK_mingyugongex: '功体',
						XK_mingyugongex_info: "<center><font color=#38309d>【明玉功•极】</font></center><font color=#F0F>【太上忘情】</font>每回合限1次,你受到/造成伤害后,可展示对方手牌并令其弃置其中所有基本牌/非基本牌,如此你摸1张牌/令其获得1层<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_dongshang');\">【寒冰】</a>.</br><font color=#F0F>【淡梦逍遥】</font>每轮限X次,你于回合外摸牌时,可令摸牌数+1,X为你体力上限.</br><font color=#F0F>【元婴出世】</font>体力40%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数、手牌上限+1;回合开始时随机移除1~2项异常状态.",
						XK_mingyugong: '功体',
						XK_mingyugong_info: "<center><font color=#38309d>【明玉功】</font></center><font color=#F0F>【太上忘情】</font>每回合限1次,你受到/造成伤害后,可展示对方手牌并令其弃置其中所有基本牌/非基本牌,如此你摸1张牌/令其获得1层<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_dongshang');\">【寒冰】</a>,若未弃置牌你失去1点体力.</br><font color=#F0F>【淡梦逍遥】</font>每轮限3次,你于回合外摸牌时,可令摸牌数+1.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.",
						XK_taishangwangqing: '太上忘情',
						XK_taishangwangqing_info: '',
						XK_danmengxiaoyao: '淡梦逍遥',
						XK_danmengxiaoyao_info: '',
						XK_xiaolifeidaoex: '招式',
						XK_xiaolifeidaoex_info: "<center><font color=#38309d>【小李飞刀•极】</font></center><font color=#F0F>【迅刀】</font>出牌阶段限1次,你可弃置至多体力值张牌,并获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_shenxing');\">【神行】</a><a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_daganzhi');\">【大感知】</a>X/2回合,如此回合结束时你摸X张牌,X为弃置牌数.</br><font color=#F0F>【例无虚发】</font>你对目标使用杀时,可弃置至少1张带有伤害标签的牌使此杀的伤害与响应所需的闪增加等量的值,且此杀无视防具.",
						XK_xundaoex: '迅刀',
						XK_xundaoex_info: '',
						XK_xundaoex1: '迅刀',
						XK_xundaoex1_info: '',
						XK_xiaolifeidao: '招式',
						XK_xiaolifeidao_info: "<center><font color=#38309d>【小李飞刀】</font></center><font color=#F0F>【迅刀】</font>出牌阶段限1次,你可弃置至多体力值张牌,获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_shenxing');\">【神行】</a><a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_ganzhi');\">【感知】</a>X/2回合,如此回合结束时你摸X张牌,X为弃置牌数.</br><font color=#F0F>【例无虚发】</font>你对目标使用杀时,可弃置至少1张带有伤害标签的牌使此杀的伤害与响应所需的闪增加等量的值,且此杀无视防具.",
						XK_xundao: '迅刀',
						XK_xundao_info: '',
						XK_xundao1: '迅刀',
						XK_xundao1_info: '',
						XK_liwuxufa: '例无虚发',
						XK_liwuxufa_info: '',
						XK_liwuxufa1: '例无虚发',
						XK_liwuxufa1_info: '',
						XK_baishoutaixuan: '功体',
						XK_baishoutaixuan_info: "<center><font color=#38309d>【白首太玄经】</font></center><font color=#F0F>【飒沓如星】</font>1名角色受到伤害时,你可交给其1张牌(自己则为重铸),伤害结算完成后若其未死亡,你摸1张牌并可使用1张杀.</br><font color=#F0F>【侠骨留香】</font>1名角色死亡后,你可弃置1张牌并摸X张牌,X为该角色的体力上限且至多为6.</br><font color=#F0F>【元婴出世】</font>体力40%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数、手牌上限+1;回合开始时随机移除1~2项异常状态.",
						XK_sataruxing: '飒沓如星',
						XK_sataruxing_info: '',
						XK_sataruxing1: '飒沓如星',
						XK_sataruxing1_info: '',
						XK_xiaguliuxiang: '侠骨留香',
						XK_xiaguliuxiang_info: '',
						XK_fozunianhua: '招式',
						XK_fozunianhua_info: "<center><font color=#38309d>【佛祖拈花】</font></center><font color=#F0F>【圣妙吉祥】</font>出牌阶段限1次,你可令1名其他角色移除<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_zhongdu');\">【中毒】</a>并回复1点体力,如此其下个摸牌阶段改为你摸2张牌并交给其1张牌.</br><font color=#F0F>【普渡众生】</font>出牌阶段开始,你可令1名角色获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_jinghua');\">【净化】</a>2回合;若你体力全场最少,可改为令任意名角色移除所有异常状态并获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_jinghua');\">【净化】</a>2回合,失去此技能.",
						XK_shengmiao: '圣妙吉祥',
						XK_shengmiao_info: '',
						XK_shengmiao1: '圣妙吉祥',
						XK_shengmiao1_info: '',
						XK_puduzhongsheng: '普渡众生',
						XK_puduzhongsheng_info: '',
						XK_duomingsanxian: '招式',
						XK_duomingsanxian_info: '<center><font color=#38309d>【夺命三仙剑】</font></center><font color=#F0F>【天外游龙】</font>准备阶段若你装备区牌数不为全场最多,你可选择1项:跳过判定、摸牌阶段并移动场上1张牌;跳过出牌、弃牌阶段并移动场上1张牌.</br><font color=#F0F>【飞云腾霞】</font>每轮限1次,回合开始时,若你装备区牌数为全场最多/之一,你可弃置其中1张,于当前回合结束后获得1个额外回合.',
						XK_tianwaiyoulong: '天外游龙',
						XK_tianwaiyoulong_info: '',
						XK_feiyuntengxia: '飞云腾霞',
						XK_feiyuntengxia_info: '',
						XK_zixiashengong: '功体',
						XK_zixiashengong_info: "<center><font color=#38309d>【紫霞神功】</font></center><font color=#F0F>【紫气冲霄】</font>锁定技,你的手牌上限/使用杀的次数/摸牌阶段摸牌数+1;出牌阶段结束,你每满足1项,对应项目数值+1:手牌数等于上限/使用杀数等于上限/使用牌数等于摸牌阶段摸牌数.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.",
						XK_ziqichongxiao: '紫气冲霄',
						XK_ziqichongxiao_info: '',
						XK_ziqichongxiao2: '紫气冲霄',
						XK_ziqichongxiao2_info: '',
						XK_kuangfengdaofa: '招式',
						XK_kuangfengdaofa_info: "<center><font color=#38309d>【狂风刀法】</font></center><font color=#F0F>【船过水无痕】</font>准备阶段你可交给1名其他角色至少1张手牌,如此你获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_shipo');\">【识破】</a>等量回合.</br><font color=#F0F>【春风快意刀】</font>当你失去最后1张手牌时,可视为对攻击范围内1名其他角色使用1张不计次数的杀,且此杀造成伤害后你获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_shiqi');\">【噬气】</a>2回合.</br>",
						XK_chuanguo: '船过水无痕',
						XK_chuanguo_info: '',
						XK_chunfeng: '春风快意刀',
						XK_chunfeng_info: '',
						XK_chunfeng1: '春风快意刀',
						XK_chunfeng1_info: '',
						XK_qianrenjue: '功体',
						XK_qianrenjue_info: "<center><font color=#38309d>【千仞诀】</font></center><font color=#F0F>【变幻万千】</font>每回合你首次使用指定1名目标的基本牌或普通锦囊牌结算完成后,可弃置1张同类型/花色/点数的手牌,使此牌额外结算1/2/3次.</br><font color=#F0F>【小周天运转】</font>体力70%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;手牌上限+1;回合开始时随机移除0~1项异常状态.",
						XK_bianhuanwanqian: '变幻万千',
						XK_bianhuanwanqian_info: '',
						XK_pojunqiangfa: '招式',
						XK_pojunqiangfa_info: '<center><font color=#38309d>【破军枪法】</font></center><font color=#F0F>【天下太平】</font>出牌阶段开始,你可弃置装备区的所有牌并重置1项已发动的限定技,若你因此弃置了至少2张牌,你回复1点体力.',
						XK_tianxiataiping: '天下太平',
						XK_tianxiataiping_info: '',
						XK_weizhenbafang: '功体',
						XK_weizhenbafang_info: "<center><font color=#38309d>【威震八方】</font></center><font color=#F0F>【破势】</font>限定技,当1名角色使用黑色牌指定其他角色为目标时,你可使该牌效果变为过河拆桥.</br><font color=#F0F>【威震】</font>限定技,当1名角色使用红色牌指定其他角色为目标时,你可使该牌效果变为火杀.</br><font color=#F0F>【小周天运转】</font>体力70%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;手牌上限+1;回合开始时随机移除0~1项异常状态.",
						XK_poshi: '破势',
						XK_poshi_info: '',
						XK_weizhen: '威震',
						XK_weizhen_info: '',
						XK_huoyandao: '招式',
						XK_huoyandao_info: "<center><font color=#38309d>【火焰刀】</font></center><font color=#F0F>【燃木】</font>锁定技,你造成火属性伤害后,令目标获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_duanjin');\">【断筋】</a><a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_sangong');\">【散功】</a>1回合.</br><font color=#F0F>【焚天】</font>出牌阶段限1次,你可失去1点体力,对其他至多X名角色各造成1点火伤害(X为你已损失体力值且至多为3).",
						XK_ranmu: '燃木',
						XK_ranmu_info: '',
						XK_fentian: '焚天',
						XK_fentian_info: '',
						XK_luohanxiangmo: '功体',
						XK_luohanxiangmo_info: "<center><font color=#38309d>【罗汉降魔功】</font></center><font color=#F0F>【荡魔】</font>每轮限1次,回合结束时你可展示牌堆顶3张牌,若其中黑色牌数为0/1/2/3,你:失去1点体力/摸1张牌/重铸1名角色区域所有牌/获得1个额外回合.你可弃置装备区的牌,使之计入次数.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.",
						XK_dangmo: '荡魔',
						XK_dangmo_info: '',
						XK_taijijian: '招式',
						XK_taijijian_info: '<center><font color=#38309d>【太极剑】</font></center><font color=#F0F>【似有若无】</font>结束阶段,若你本回合跳过了摸牌阶段,你可以摸3张牌,否则你摸1张牌.',
						XK_siyouruowu: '似有若无',
						XK_siyouruowu_info: '',
						XK_wudangqiankun: '功体',
						XK_wudangqiankun_info: "<center><font color=#38309d>【武当乾坤功】</font></center><font color=#F0F>【坐忘】</font>回合结束时,你可进行一个额外的阶段,如此,下回合你跳过该阶段.</br><font color=#F0F>【气合】</font>回合结束时,你可以获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_fanshou');\">【反手】</a>X回合,X为你已损失的体力值.</br><font color=#F0F>【小周天运转】</font>体力70%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;手牌上限+1;回合开始时随机移除0~1项异常状态.",
						XK_zuowang: '坐忘',
						XK_zuowang_info: '',
						XK_zuowang1: '坐忘',
						XK_zuowang1_info: '',
						XK_qihe: '气合',
						XK_qihe_info: '',
						XK_nengqunengshen: '绝技',
						XK_nengqunengshen_info: '<font color=#F0F>【能屈能伸】</font>主公技,觉醒技,准备阶段若你已累计受到体力上限数值的伤害,你增加2点体力上限,并将招式、功体更换为【辟邪剑法】、【葵花宝典】.',
						XK_qushen: '能屈能伸',
						XK_qushen_info: '',
						XK_qushen1: '能屈能伸',
						XK_qushen1_info: '',
						XK_wuduchiyan: '功体',
						XK_wuduchiyan_info: "<center><font color=#38309d>【五毒赤焰功】</font></center><font color=#F0F>【毒焰】</font>出牌阶段开始,你可弃置1名其他角色1张牌,若此牌为基本牌,你获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_zhongdu');\">【中毒】</a>2回合,否则你本回合使用牌无距离限制.</br><font color=#F0F>【毒体】</font>若你处于<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_zhongdu');\">【中毒】</a>状态,你受到/造成伤害后,可令来源/目标获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_zhongdu');\">【中毒】</a>2回合.锁定技,你不受<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_zhongdu');\">【中毒】</a>状态的负面效果.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.",
						XK_duyan: '毒焰',
						XK_duyan_info: '',
						XK_duyan1: '毒焰',
						XK_duyan1_info: '',
						XK_duti: '毒体',
						XK_duti_info: '',
						XK_fangxuanlingbei: '招式',
						XK_fangxuanlingbei_info: "<center><font color=#38309d>【房玄龄碑】</font></center><font color=#F0F>【德洞天经】</font>其他角色出牌阶段限1次,其可将1张装备牌置于你的装备区(不可替换)并摸1张牌.</br><font color=#F0F>【帝不言政】</font>你的装备区进入武器/防具/坐骑/宝物牌后,你可令攻击范围内的1名其他角色获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_pozhan');\">【破绽】</a>/<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_mumang');\">【目盲】</a>/<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_dianxue');\">【点穴】</a>/<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_yunxuan');\">【晕眩】</a>1回合.",
						XK_dedongtianjing: '德洞天经',
						XK_dedongtianjing_info: '',
						XK_dedongtianjing1: '德洞天经',
						XK_dedongtianjing1_info: '',
						XK_dibuyanzheng: '帝不言政',
						XK_dibuyanzheng_info: '',
						XK_tiangangquan: '招式',
						XK_tiangangquan_info: "<center><font color=#38309d>【天罡拳】</font></center><font color=#F0F>【气所磅礴】</font>当你于回合内使用不为杀的牌指定其他角色为唯一目标时,可使之转化为对其使用1张不计次数的杀.</br><font color=#F0F>【苍天有极】</font>锁定技,你于出牌阶段使用的第2/3/4张杀造成伤害时,令目标:获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_zhuoying');\">【捉影】</a>1回合/获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>1回合/伤害翻倍.",
						XK_qisuopangbo: '气所磅礴',
						XK_qisuopangbo_info: '',
						XK_cangtianyouji: '苍天有极',
						XK_cangtianyouji_info: '',
						XK_tiangangwuji: '功体',
						XK_tiangangwuji_info: "<center><font color=#38309d>【天罡功】</font></center><font color=#F0F>【天罡战气】</font>每轮开始时,你可弃置所有手牌,如此你本轮受到的前X次伤害-1,并获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_kuangnu');\">【狂怒】</a>1回合,X为其中基本牌的数量.</br><font color=#F0F>【天罡气疗】</font>锁定技,若你没有手牌,当你获得牌时,额外摸1张牌.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.",
						XK_tiangangzhanqi: '天罡战气',
						XK_tiangangzhanqi_info: '',
						XK_tiangangzhanqi1: '天罡战气',
						XK_tiangangzhanqi1_info: '',
						XK_tiangangqiliao: '天罡气疗',
						XK_tiangangqiliao_info: '',
						XK_wanghunzhangfa: '招式',
						XK_wanghunzhangfa_info: "<center><font color=#38309d>【忘魂掌法】</font></center><font color=#F0F>【阴寒掌风】</font>每轮限1次,当1名其他角色使用装备牌后,你可令其选择1项:获得1层<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_dongshang');\">【寒冰】</a>;弃置装备区所有牌.</br><font color=#F0F>【冻魂蚀骨】</font>其他角色弃置牌后,若你手牌中没有此类型的牌,你可以弃置其至多X张牌或令其获得X/2层<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_dongshang');\">【寒冰】</a>,X为其弃置的此类牌数.",
						XK_yinhanzhangfeng: '阴寒掌风',
						XK_yinhanzhangfeng_info: '',
						XK_donghunshigu: '冻魂蚀骨',
						XK_donghunshigu_info: '',
						XK_wanghunsanjue: '功体',
						XK_wanghunsanjue_info: "<center><font color=#38309d>【妄魂三绝】</font></center><font color=#F0F>【妄魂】</font>1名角色出牌阶段开始,你可令其选择是否跳过此阶段视为使用1张基本牌.你选择是后,下次此技能由你选择.</br><font color=#F0F>【小周天运转】</font>体力70%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;手牌上限+1;回合开始时随机移除0~1项异常状态.",
						XK_hunwang: '妄魂',
						XK_hunwang_info: '',
						XK_emeijianfa: '招式',
						XK_emeijianfa_info: "<center><font color=#38309d>【峨嵋剑法】</font></center><font color=#F0F>【凝柔】</font>当你受到大于1的伤害时,可弃置1张手牌令此伤害变为1,如此你获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_ganzhi');\">【感知】</a>2回合,若有来源,其获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_mumang');\">【目盲】</a>2回合.</br><font color=#F0F>【冰心】</font>出牌阶段开始,你可以弃置所有手牌,将手牌补至4张.",
						XK_ningrou: '凝柔',
						XK_ningrou_info: '',
						XK_bingxin: '冰心',
						XK_bingxin_info: '',
						XK_emeijiuyang: '功体',
						XK_emeijiuyang_info: "<center><font color=#38309d>【峨眉九阳功】</font></center><font color=#F0F>【四象】</font>你攻击范围内的其他角色受到伤害后,你可令其展示手牌,如此其可将之弃置至花色均不同,摸2张牌.</br><font color=#F0F>【小周天运转】</font>体力70%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;手牌上限+1;回合开始时随机移除0~1项异常状态.",
						XK_sixiang: '四象',
						XK_sixiang_info: '',
						XK_huxiaozhang: '招式',
						XK_huxiaozhang_info: '<center><font color=#38309d>【虎啸掌】</font></center><font color=#F0F>【如虎添翼】</font>锁定技,你使用杀造成伤害时,若(0,1)中有数值,令伤害变为其中一项,并删除此选项;你<兽>的数量变化后,若()没有该数值,加入之.',
						XK_ruhutianyi: '如虎添翼',
						XK_ruhutianyi_info: '',
						XK_ruhutianyi1: '如虎添翼',
						XK_ruhutianyi1_info: '',
						XK_shouwangjing: '功体',
						XK_shouwangjing_info: "<center><font color=#38309d>【兽王经】</font></center><font color=#F0F>【心御】</font>游戏开始时你获得<虎、熊、蛇>兽;特定的时机你可将<兽>置于目标处以发动效果;出牌阶段开始,你可回收1个<兽>.锁定技,你的手牌上限-<兽>的数量.</br><font color=#F0F>【百啸】</font>限定技,出牌阶段你可回收所有<兽>,且直至你下个回合手牌上限等于体力上限.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.",
						XK_xinyu: '心御',
						XK_xinyu_info: '',
						XK_xinyu1: '心御',
						XK_xinyu1_info: '',
						XK_xinyuhu: '心御•虎',
						XK_xinyuhu_info: '',
						XK_xinyuxiong: '心御•熊',
						XK_xinyuxiong_info: '',
						XK_xinyushe: '心御•蛇',
						XK_xinyushe_info: '',
						XK_baixiao: '百啸',
						XK_baixiao_info: '',
						XK_daomojiushi: '招式',
						XK_daomojiushi_info: '<center><font color=#38309d>【刀魔九式】</font></center><font color=#F0F>【残存亦末路】</font>出牌阶段结束时,你可观看1名其他角色手牌并选择1项:使用其中1张牌;该角色视为对你使用1张杀.',
						XK_cancunyimolu: '残存亦末路',
						XK_cancunyimolu_info: '',
						XK_xuehaimogong: '功体',
						XK_xuehaimogong_info: "<center><font color=#38309d>【血海魔功】</font></center><font color=#F0F>【无赦】</font>准备阶段,你可交给1名其他角色1张牌,如此你可以移动场上1张牌或令其获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_liuxue');\">【流血】</a>1回合.</br><font color=#F0F>【杀星】</font>结束阶段,你可视为对因【无赦】获得过你的牌的角色使用共计X张杀,X为你发动过【无赦】的次数.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.",
						XK_wushe: '无赦',
						XK_wushe_info: '',
						XK_shaxing: '杀星',
						XK_shaxing_info: '',
						XK_biyijianfa: '招式',
						XK_biyijianfa_info: '<center><font color=#38309d>【比翼剑法】</font></center><font color=#F0F>【郎情】</font>出牌阶段限1次,你可失去1点体力令1名女性角色回复1点体力,如此其获得【情意绵绵】1回合.</br><font color=#F0F>【妾意】</font>其他女性角色出牌阶段限1次,其可失去1点体力令你回复1点体力,如此你获得【情意绵绵】1回合.',
						XK_langqing: '郎情',
						XK_langqing_info: '',
						XK_qieyi: '妾意',
						XK_qieyi_info: '',
						XK_qieyi1: '妾意',
						XK_qieyi1_info: '',
						XK_tianshanxinfa: '功体',
						XK_tianshanxinfa_info: "<center><font color=#38309d>【天山心法】</font></center><font color=#F0F>【天池水镜】</font>弃牌阶段开始,你可将至多X张手牌置于武将牌上,在你的回合外,你可移除1张武将牌上的牌视为使用1张闪或无懈可击,X为你已损失的体力值且至少为1.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.",
						XK_shuijing: '天池水镜',
						XK_shuijing_info: '',
						XK_shuijing1: '天池水镜',
						XK_shuijing1_info: '',
						XK_shuijing2: '天池水镜',
						XK_shuijing2_info: '',
						XK_motiannu: '招式',
						XK_motiannu_info: '<center><font color=#38309d>【墨天弩】</font></center><font color=#F0F>【机铁连环】</font>你使用装备牌后,可令X名角色改变横置状态,X为你装备区的牌数.</br><font color=#F0F>【擎星穿天】</font>出牌阶段结束,你可令所有横置/未横置的角色摸或弃置一张牌.',
						XK_jitielianhuan: '机铁连环',
						XK_jitielianhuan_info: '',
						XK_qingxingchuantian: '擎星穿天',
						XK_qingxingchuantian_info: '',
						XK_moshougong: '功体',
						XK_moshougong_info: "<center><font color=#38309d>【墨守功】</font></center><font color=#F0F>【墨心】</font>你的首个准备阶段,可令两名其他角色分别获得<兼爱><非攻>印.出牌阶段限1次(首回合除外),或有<兼爱><非攻>的角色死亡后,你可移动印.</br><font color=#F0F>【墨守】</font>若你没有<兼爱><非攻>,结束阶段你可以摸2张牌.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.",
						XK_moxin: '墨心',
						XK_moxin_info: '',
						XK_moxin1: '墨心',
						XK_moxin1_info: '',
						XK_moxin2: '墨心',
						XK_moxin2_info: '',
						XK_jianai: '兼爱',
						XK_jianai_info: '',
						XK_feigong: '非攻',
						XK_feigong_info: '',
						XK_moshou: '墨守',
						XK_moshou_info: '',
						XK_xiaowuxianggong: '功体',
						XK_xiaowuxianggong_info: "<center><font color=#38309d>【小无相功】</font></center><font color=#F0F>【无往】</font>你受到伤害后,若你未记录来源的招式,可记录之,回合开始时,你可获得1项已记录的招式直到下回合开始,并移除此记录.</br><font color=#F0F>【无念】</font>你于回合外使用基本牌后,可获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_jinghua');\">【净化】</a>1回合.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.",
						XK_wuwang: '无往',
						XK_wuwang_info: '',
						XK_wuwang1: '无往',
						XK_wuwang1_info: '',
						XK_wunian: '无念',
						XK_wunian_info: '',
						XK_wujidaofa: '招式',
						XK_wujidaofa_info: "<center><font color=#38309d>【无极刀法】</font></center><font color=#F0F>【复无极也】</font>若你装备有武器牌,你使用与之花色相同的杀结算完成后,可令之额外结算1次.</br><font color=#F0F>【最无极】</font>回合结束,若你本回合未使用过杀,你可弃置1张手牌,从牌堆中随机获得1张任意花色的杀并获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_zuiwujibuff');\">【最无极】</a>2回合;否则,你获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_juqi');\">【聚气】</a>2回合.",
						XK_fuwujiye: '复无极也',
						XK_fuwujiye_info: '',
						XK_zuiwuji: '最无极',
						XK_zuiwuji_info: '',
						XK_baguayoushen: '招式',
						XK_baguayoushen_info: '<center><font color=#38309d>【八卦游身掌】</font></center><font color=#F0F>【三花聚顶】</font>你使用带有伤害标签的牌指定唯一目标时,可令其随机获得3项异常状态,此牌结算完成后,其移除因此法获得的状态.</br><font color=#F0F>【狂风骤雨】</font>每回合限1次,你攻击范围内的其他角色使用杀时,你可成为此牌的使用者.',
						XK_sanhuajuding: '三花聚顶',
						XK_sanhuajuding_info: '',
						XK_sanhuajuding1: '三花聚顶',
						XK_sanhuajuding1_info: '',
						XK_kuangfengzhouyu: '狂风骤雨',
						XK_kuangfengzhouyu_info: '',
						XK_tianlongbabugong: '功体',
						XK_tianlongbabugong_info: "<center><font color=#38309d>【天龙八部功】</font></center><font color=#F0F>【八部神威】</font>回合开始、结束时,你造成、受到伤害后,可以随机获得1项增益状态1回合.</br><font color=#F0F>【元婴出世】</font>体力40%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数、手牌上限+1;回合开始时随机移除1~2项异常状态.",
						XK_babushenwei: '八部神威',
						XK_babushenwei_info: '',
						XK_longxiangboreex: '功体',
						XK_longxiangboreex_info: "<center><font color=#38309d>【龙象般若功•极】</font></center><font color=#F0F>【威吓】</font>你受到伤害后,可弃置至少1张手牌,令来源获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_mumang');\">【目盲】</a>(弃置牌数+1)回合.</br><font color=#F0F>【战勇】</font>每回合限1次,你可失去等同于手牌数的体力视为使用1张杀/闪,对目标/当前回合角色造成1点伤害.</br><font color=#F0F>【元婴出世】</font>体力40%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数、手牌上限+1;回合开始时随机移除1~2项异常状态.",
						XK_longxiangbore: '功体',
						XK_longxiangbore_info: "<center><font color=#38309d>【龙象般若功】</font></center><font color=#F0F>【威吓】</font>你受到伤害后,可弃置1张黑色手牌,令来源获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_mumang');\">【目盲】</a>2回合.</br><font color=#F0F>【战勇】</font>每回合限1次,你可失去等同于手牌数的体力视为使用1张杀/闪,对目标/当前回合角色造成1点伤害.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.",
						XK_weihe: '威吓',
						XK_weihe_info: '',
						XK_zhanyong: '战勇',
						XK_zhanyong_info: '',
						XK_zhanyong1: '战勇',
						XK_zhanyong1_info: '',
						XK_taijiquanex: '招式',
						XK_taijiquanex_info: "<center><font color=#38309d>【太极拳•极】</font></center><font color=#F0F>【四通八达】</font>出牌阶段限2次,你可重铸任意张同花色的牌,并指定至多等量的角色,其可重铸所有该花色的牌,否则获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_zhuoying');\">【捉影】</a>2回合,若无人重铸,你摸1张牌.</br><font color=#F0F>【开太极】</font>锁定技,你1次失去至少2张同花色牌后,若花色为:♥️️︎,回复1点体力;♠️️︎,获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_zuoyou');\">【左右开弓】</a>1回合;♣️️︎,获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_jielidali');\">【借力打力】</a>2回合;♦️️︎,【四通八达】次数+1..",
						XK_taijiquan: '招式',
						XK_taijiquan_info: "<center><font color=#38309d>【太极拳】</font></center><font color=#F0F>【四通八达】</font>出牌阶段限1次,你可重铸任意张同花色的牌,并指定至多等量的角色,其可重铸所有该花色的牌,否则获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_zhuoying');\">【捉影】</a>2回合,若无人重铸,你摸1张牌.</br><font color=#F0F>【开太极】</font>锁定技,你1次失去至少2张同花色牌后,若花色为:♥️️︎,回复1点体力;♠️️︎,获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_zuoyou');\">【左右开弓】</a>1回合;♣️️︎,获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_jielidali');\">【借力打力】</a>2回合;♦️️︎,【四通八达】次数+1..",
						XK_sitongbada: '四通八达',
						XK_sitongbada_info: '',
						XK_kaitaiji: '开太极',
						XK_kaitaiji_info: '',
						XK_bawangjianfa: '招式',
						XK_bawangjianfa_info: '<center><font color=#38309d>【霸王剑法】</font></center><font color=#F0F>【霸王别姬】</font>摸牌阶段你可以少摸1张牌,视为使用1张决斗,若如此,本回合你使用的决斗无法被无懈可击响应.',
						XK_bawangbieji: '霸王别姬',
						XK_bawangbieji_info: '',
						XK_bawangbieji1: '霸王别姬',
						XK_bawangbieji1_info: '',
						XK_xiayinjue: '功体',
						XK_xiayinjue_info: "<center><font color=#38309d>【侠隐诀】</font></center><font color=#F0F>【侠影】</font>锁定技,你使用的决斗可以指定额外1个目标;若你的决斗仅指定了1个目标,你1摸张牌.</br><font color=#F0F>【趋势】</font>你于回合内/外每因杀或决斗造成或受到1点伤害,可以获得2/1层<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_lianji');\">【连击】</a>.锁定技,你的决斗可触发【连击】(概率减半).</br><font color=#F0F>【小周天运转】</font>体力70%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;手牌上限+1;回合开始时随机移除0~1项异常状态.",
						XK_xiaying: '侠影',
						XK_xiaying_info: '',
						XK_qushi: '趋势',
						XK_qushi_info: '',
						XK_taohuashan: '招式',
						XK_taohuashan_info: '<center><font color=#38309d>【桃花扇】</font></center><font color=#F0F>【春风拂面】</font>出牌阶段,你可弃置1张手牌并选择1名其他角色,令其选择1项:获得此牌;从牌堆中随机获得1张与此牌同类型的牌.',
						XK_chunfengfumian: '春风拂面',
						XK_chunfengfumian_info: '',
						XK_lingfeijing: '功体',
						XK_lingfeijing_info: "<center><font color=#38309d>【灵飞经】</font></center><font color=#F0F>【星梭】</font>每轮限1次,你可将全部手牌当作杀/闪使用或打出,如此你获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_jinghua');\">【净化】</a>2回合,并可获得目标/当前回合角色装备区的1张牌.</br><font color=#F0F>【凌波】</font>你使用杀结算完成后,可令你直至下回合开始,进攻距离-X,防御距离+X,X为你的攻击距离-1.</br><font color=#F0F>【小周天运转】</font>体力70%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;手牌上限+1;回合开始时随机移除0~1项异常状态.",
						XK_xingsuo: '星梭',
						XK_xingsuo_info: '',
						XK_xingsuo1: '星梭',
						XK_xingsuo1_info: '',
						XK_xingsuo2: '星梭',
						XK_xingsuo2_info: '',
						XK_xingsuo3: '星梭',
						XK_xingsuo3_info: '',
						XK_lingbo1: '凌波',
						XK_lingbo1_info: '',
						XK_lingbo2: '凌波',
						XK_lingbo2_info: '',
						XK_pianshudaquan: '招式',
						XK_pianshudaquan_info: '<center><font color=#38309d>【骗术大全】</font></center><font color=#F0F>【一公升的眼泪】</font>出牌阶段限1次,你可以摸X张牌并将等量的手牌依次置于牌堆顶,X为你的体力上限.</br><font color=#F0F>【我是你亲妹妹】</font>每回合限1次,当你成为带有伤害标签牌的目标后,你可使其效果改为:展示牌堆顶1张牌,若其可对你使用该牌则使用之.',
						XK_yigongsheng: '一公升的眼泪',
						XK_yigongsheng_info: '',
						XK_qinmeimei: '我是你亲妹妹',
						XK_qinmeimei_info: '',
						XK_shengcunfaze: '功体',
						XK_shengcunfaze_info: "<center><font color=#38309d>【市井生存法则】</font></center><font color=#F0F>【走为上策】</font>你可失去1点体力视为使用或打出1张闪;你使用或打出闪后,可令当前回合角色获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_yunxuan');\">【晕眩】</a>1回合.</br><font color=#F0F>【小周天运转】</font>体力70%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;手牌上限+1;回合开始时随机移除0~1项异常状态.",
						XK_zouweishangce: '走为上策',
						XK_zouweishangce_info: '',
						XK_zouweishangce1: '走为上策',
						XK_zouweishangce1_info: '',
						XK_xisuijing: '功体',
						XK_xisuijing_info: "<center><font color=#38309d>【洗髓经】</font></center><font color=#F0F>【锻体归元】</font>出牌阶段开始,若你已受伤,可选择1项:1.摸X张牌;2.随机移除X项异常状态;3.获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_guiyuan');\">【归元】</a>X回合.X为你已损失体力值且至多为3.</br><font color=#F0F>【凡圣同归】</font>结束阶段,若你未受伤,可展示牌堆顶X张牌,并获得其中每种花色的牌各1张,X为场上未受伤的角色数且至少为3.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.",
						XK_duantiguiyuan: '锻体归元',
						XK_duantiguiyuan_info: '',
						XK_fanshengtonggui: '凡圣同归',
						XK_fanshengtonggui_info: '',
						XK_bawangqiang: '招式',
						XK_bawangqiang_info: "<center><font color=#38309d>【唐家霸王枪】</font></center><font color=#F0F>【无风起浪】</font>锁定技,每当你造成1点伤害后,令目标获得1层<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_zhenji');\">【震击】</a>,至多3层,超出时你摸超出数量的牌;你使用杀无距离限制.</br><font color=#F0F>【回马枪】</font>当你使用杀指定目标时,若你不在其攻击范围内,你可展示其手牌并弃置其中一种花色的牌;否则其获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_cimu');\">【刺目】</a>1回合.",
						XK_wufengqilang: '无风起浪',
						XK_wufengqilang_info: '',
						XK_huimaqiang: '回马枪',
						XK_huimaqiang_info: '',
						XK_dongfangbaodian: '功体',
						XK_dongfangbaodian_info: "<center><font color=#38309d>【东方宝典】</font></center><font color=#F0F>【东方未明】</font>转换技,准备阶段或其他角色濒死时,你可展示牌堆顶3张牌,并依次使用其中的1.基本牌;2.锦囊牌;3.装备牌,弃置其余的牌.</br><font color=#F0F>【东方未曦】</font>【东方未明】完成1轮转换后,你可选择令1名其他角色获得:1.<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_pozhan');\">【破绽】</a><a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_pojia');\">【破甲】</a>2回合;2.<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_zhuihun');\">【追魂】</a><a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_shipo');\">【识破】</a>2回合.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.",
						XK_dongfangweiming: '东方未明',
						XK_dongfangweiming_info: '',
						XK_dongfangweixi: '东方未曦',
						XK_dongfangweixi_info: '',
						XK_xuwudaofa: '招式',
						XK_xuwudaofa_info: "<center><font color=#38309d>【虚无刀法】</font></center><font color=#F0F>【破虚空】</font>当你受到伤害后,可选择1项:1.摸X/2张牌(向上取整);2.获得X层<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_lianji');\">【连击】</a>,X为你已损失体力值且至多为4.</br><font color=#F0F>【天地劫】</font>出牌阶段限1次,你可以受到1点无来源伤害并获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_tiandibuff');\">【天地劫】</a>2回合,若因此发动了【破虚空】,同时获得其2种效果.",
						XK_poxukong: '破虚空',
						XK_poxukong_info: '',
						XK_tiandijie: '天地劫',
						XK_tiandijie_info: '',
						XK_sijiexinjue: '功体',
						XK_sijiexinjue_info: "<center><font color=#38309d>【四劫心诀】</font></center><font color=#F0F>【四劫轮回】</font>锁定技,当你的体力<=4/3/2/1时,你依次获得效果:可以将1张♠️️︎/♣️️︎/♦️️︎/♥️️︎花色的手牌当作杀/无懈可击/闪/桃使用或打出.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.",
						XK_sijie1: '四劫♥️️︎',
						XK_sijie1_info: '',
						XK_sijie2: '四劫♠️️︎',
						XK_sijie2_info: '',
						XK_sijie3: '四劫♣️️︎',
						XK_sijie3_info: '',
						XK_sijie4: '四劫♦️️︎',
						XK_sijie4_info: '',
						XK_fengshentuifaex: '招式',
						XK_fengshentuifaex_info: "<center><font color=#38309d>【风神腿法•极】</font></center><font color=#F0F>【捕风捉影】</font>出牌阶段开始,你可令你和距离你为1的任意名角色各弃置1张牌,每因此弃置1张牌,你获得1层<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_lianji');\">【连击】</a>.</br><font color=#F0F>【暴雨狂风】</font>锁定技,当你触发<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_lianji');\">【连击】</a>时,根据层数:>=.你摸1张牌;>=2.你获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_feiyantai');\">【飞燕】</a>2回合;>=3.目标获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_pozhan');\">【破绽】</a>1回合;>=4.目标获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>2回合.",
						XK_fengshentuifa: '招式',
						XK_fengshentuifa_info: "<center><font color=#38309d>【风神腿法】</font></center><font color=#F0F>【捕风捉影】</font>出牌阶段开始,你可令你和距离你为1的所有角色各弃置1张牌,每因此弃置1张牌,你获得1层<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_lianji');\">【连击】</a>.</br><font color=#F0F>【暴雨狂风】</font>锁定技,当你触发<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_lianji');\">【连击】</a>时,根据层数:>=.你摸1张牌;>=2.你获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_feiyantai');\">【飞燕】</a>2回合;>=3.目标获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_pozhan');\">【破绽】</a>1回合;>=4.目标获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>2回合.",
						XK_bufengzhuoying: '捕风捉影',
						XK_bufengzhuoying_info: '',
						XK_kuangfengbaoyu: '暴雨狂风',
						XK_kuangfengbaoyu_info: '',
						XK_dukangjishengong: '招式',
						XK_dukangjishengong_info: "<center><font color=#38309d>【杜康鸡神功】</font></center><font color=#F0F>【庐山升鸡霸】</font>出牌阶段,你可将1张装备牌置于1名其他角色装备区,视为对其使用1张任意属性的杀,如此你获得2层<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_lianji');\">【连击】</a>,其获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_zhuoying');\">【捉影】</a><a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_liuxue');\">【流血】</a>1回合.</br><font color=#F0F>【凤爪七连杀】</font>你于回合内使用的杀结算完成后,可选择1项直至回合结束:此杀不计次数且进攻距离-1;进攻距离+1.",
						XK_lushanshengjiba: '庐山升鸡霸',
						XK_lushanshengjiba_info: '',
						XK_fengzhua: '凤爪七连杀',
						XK_fengzhua_info: '',
						XK_fengzhua1: '凤爪七连杀',
						XK_fengzhua1_info: '',
						XK_weiwoduzungong: '功体',
						XK_weiwoduzungong_info: "<center><font color=#38309d>【唯我独尊功】</font></center><font color=#F0F>【天元】</font>你受到伤害后,可进行一次判定,若结果为红色,你回复1点体力,否则你摸伤害数值张牌.</br><font color=#F0F>【天威】</font>当你使用杀指定唯一目标时,若其体力值小于你,可令其获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_yunxuan');\">【晕眩】</a>1回合.锁定技,你造成<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>状态时,无视目标30%体力.</br><font color=#F0F>【元婴出世】</font>体力40%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数、手牌上限+1;回合开始时随机移除1~2项异常状态.",
						XK_tianyuan: '天元',
						XK_tianyuan_info: '',
						XK_tianwei: '天威',
						XK_tianwei_info: '',
						XK_wuyagushenggong: '功体',
						XK_wuyagushenggong_info: "<center><font color=#38309d>【日月无相功】</font></center><font color=#F0F>【左右互搏】</font>你指定1名目标的基本/普通锦囊牌结算完成后,可进行一次判定,若结果不为♠️️,此牌额外结算1次.</br><font color=#F0F>【乾坤挪移】</font>每回合限1次,当1名其他角色使用带有伤害标签的牌指定1名目标后,你可为此牌重新指定来源和目标;你的体力减少后,重置此技能.</br><font color=#F0F>【元婴出世】</font>体力40%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数、手牌上限+1;回合开始时随机移除1~2项异常状态.",
						XK_zuoyouhubo: '左右互搏',
						XK_zuoyouhubo_info: '',
						XK_qiankunnuoyi: '乾坤挪移',
						XK_qiankunnuoyi_info: '',
						XK_qiankunnuoyi1: '乾坤挪移',
						XK_qiankunnuoyi1_info: '',
						XK_wudijixianliu: '招式',
						XK_wudijixianliu_info: "<center><font color=#38309d>【无敌极限流】</font></center><font color=#F0F>【升龙拳】</font>每回合限1次,你的杀或指定你为目标的杀结算完成后,你可展示牌堆顶3张牌并使用其中1张基本牌,若无牌可用,你获得随机2项增益状态2回合.</br><font color=#F0F>【气功波】</font>出牌阶段限1次,你可弃置任意张牌视为对目标使用任意1张不计次数的杀,如此你获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_shayibodong');\">【杀意波动】</a>2回合且此杀需等量的闪响应.",
						XK_shenglongquan: '升龙拳',
						XK_shenglongquan_info: '',
						XK_qigongbo: '气功波',
						XK_qigongbo_info: '',
						XK_qigongbo1: '气功波',
						XK_qigongbo1_info: '',
						XK_fenghuaxueyue: '招式',
						XK_fenghuaxueyue_info: "<center><font color=#38309d>【风花雪月曲】</font></center><font color=#F0F>【飞燕凌波】</font>出牌阶段每名其他角色限1次,你可令其选择是否展示2张手牌,若其展示你可交给其1张与这之类别均不同的手牌,其回复1点体力并获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_shenxing');\">【神行】</a>1回合.</br><font color=#F0F>【空山鸣涧】</font>其他角色回复体力后,若其武将牌状态与你不同,你可令其变更至与你相同,如此你获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_guiyuan');\">【归元】</a>2回合.",
						XK_feiyanlingbo: '飞燕凌波',
						XK_feiyanlingbo_info: '',
						XK_kongshanmingjian: '空山鸣涧',
						XK_kongshanmingjian_info: '',
						XK_mantianliuxing: '招式',
						XK_mantianliuxing_info: "<center><font color=#38309d>【满天流星】</font></center><font color=#F0F>【披星戴月】</font>出牌阶段,每当你达成以下条件后,可重铸1张牌:使用1张装备牌;回复体力;造成伤害.</br><font color=#F0F>【星火燎原】</font>弃牌阶段开始,你可弃置至多X张牌令等量其他角色获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_liuxue');\">【流血】</a><a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_mumang');\">【目盲】</a>1~2回合,X为你本回合达成【披星戴月】的项数.",
						XK_pixingdaiyue: '披星戴月',
						XK_pixingdaiyue_info: '',
						XK_pixingdaiyue1: '披星戴月',
						XK_pixingdaiyue1_info: '',
						XK_xinghuoliaoyuan: '星火燎原',
						XK_xinghuoliaoyuan_info: '',
						XK_dashipomizhou: '功体',
						XK_dashipomizhou_info: "<center><font color=#38309d>【大湿婆密咒】</font></center><font color=#F0F>【妙觉】</font>若你的体力不大于50%,可将1张手牌当作闪使用或打出.锁定技,免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>状态.</br><font color=#F0F>【转轮】</font>当你受到伤害后,若体力小于70%,可随机移除1项负面状态并获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_qidun');\">【气盾】</a><a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_shiqi');\">【噬气】</a>2回合.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.",
						XK_miaojue: '妙觉',
						XK_miaojue_info: '',
						XK_miaojue1: '妙觉',
						XK_miaojue1_info: '',
						XK_zhuanlun1: '转轮',
						XK_zhuanlun1_info: '',
						XK_xixingdafaex: '功体',
						XK_xixingdafaex_info: "<center><font color=#38309d>【吸星大法•极】</font></center><font color=#F0F>【吸星】</font>你可使你即将造成的伤害视为体力流失;其他角色因【吸星】流失体力后,你可获得其1张手牌.</br><font color=#F0F>【上清】</font>当你使用杀指定唯一目标时,若你手牌数大于目标,可获得其随机1项增益状态;若小于目标,其获得你随机1项负面状态.</br><font color=#F0F>【元婴出世】</font>体力40%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数、手牌上限+1;回合开始时随机移除1~2项异常状态.",
						XK_xixingdafa: '功体',
						XK_xixingdafa_info: "<center><font color=#38309d>【吸星大法】</font></center><font color=#F0F>【吸星】</font>锁定技,你即将造成的伤害视为体力流失;其他角色因【吸星】流失体力后,你可获得其1张手牌.</br><font color=#F0F>【上清】</font>当你使用杀指定唯一目标时,若你手牌数大于目标,可获得其随机1项增益状态;若小于目标,其获得你随机1项负面状态.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.",
						XK_xixingsk: '吸星',
						XK_xixingsk_info: '',
						XK_xixingsk1: '吸星',
						XK_xixingsk1_info: '',
						XK_shangqing: '上清',
						XK_shangqing_info: '',
						XK_zilingnichang: '招式',
						XK_zilingnichang_info: "<center><font color=#38309d>【紫翎霓裳舞】</font></center><font color=#F0F>【轻云蔽月】</font>锁定技,若你拼点胜利,你获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_shiqi');\">【噬气】</a>2回合;若失败,你获得对方的拼点牌.</br><font color=#F0F>【流风回雪】</font>当你使用杀指定目标时可与之拼点,若你赢,你令其获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_cimu');\">【刺目】</a><a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_kongju');\">【恐惧】</a>1回合;否则,你获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_sangong');\">【散功】</a>2回合.",
						XK_qingyunbiyue: '轻云蔽月',
						XK_qingyunbiyue_info: '',
						XK_liufenghuixue: '流风回雪',
						XK_liufenghuixue_info: '',
						XK_longtengbaobian: '功体',
						XK_longtengbaobian_info: "<center><font color=#38309d>【龙腾豹变】</font></center><font color=#F0F>【一阳来复】</font>当你获得异常状态时,可指定攻击范围内任意名没有此状态的其他角色,你们同时选择1张手牌,花色与你不同的角色也成获得此状态.</br><font color=#F0F>【小周天运转】</font>体力70%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;手牌上限+1;回合开始时随机移除0~1项异常状态.",
						XK_yiyanglaifu: '一阳来复',
						XK_yiyanglaifu_info: '',
						XK_zhanguosha: '招式',
						XK_zhanguosha_info: "<center><font color=#38309d>【战国杀】</font></center><font color=#F0F>【影分身幻杀】</font>你于摸牌阶段以外获得牌后,可交给攻击范围内的1名其他角色1张牌,如此你视为对其使用任意一张不计次数的杀.</br><font color=#F0F>【红袖添香】</font>锁定技,你使用杀/雷杀/火杀造成伤后,令目标获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_pojia');\">【破甲】</a>/<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_zhongshang');\">【重伤】</a>/<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>1回合.",
						XK_yingfenshen: '影分身幻杀',
						XK_yingfenshen_info: '',
						XK_hongxiutianxiang: '红袖添香',
						XK_hongxiutianxiang_info: '',
						XK_sanqianruoshui: '功体',
						XK_sanqianruoshui_info: "<center><font color=#38309d>【三千若水】</font></center><font color=#F0F>【幻身】</font>每回合限3次,1名角色的判定牌生效前,你可以展示牌堆顶1张牌,用其代替并获得该判定牌,若非每轮首次发动此技能,你需弃置1张牌.</br><font color=#F0F>【神游】</font>锁定技,你因弃置而失去牌后,获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_shenxing');\">【神行】</a>2回合.</br><font color=#F0F>【元婴出世】</font>体力40%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数、手牌上限+1;回合开始时随机移除1~2项异常状态.",
						XK_huanshen: '幻身',
						XK_huanshen_info: '',
						XK_shenyou: '神游',
						XK_shenyou_info: '',
						XK_kongmingquan: '招式',
						XK_kongmingquan_info: '<center><font color=#38309d>【空明拳】</font></center><font color=#F0F>【深藏若虚】</font>每回合限1次,你的杀结算完成后,可进行一次判定,若结果不为黑色,此牌额外结算1次.</br><font color=#F0F>【妙手空空】</font>1名角色的判定牌生效前,你可以打出1张不为黑色的手牌替换之.',
						XK_shencangruoxu: '深藏若虚',
						XK_shencangruoxu_info: '',
						XK_miaoshoukongkong: '妙手空空',
						XK_miaoshoukongkong_info: '',
						XK_xiantiangong: '功体',
						XK_xiantiangong_info: "<center><font color=#38309d>【先天功】</font></center><font color=#F0F>【先天】</font>准备阶段,若你的体力值不小于60%,你获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_xiantiangangqi');\">【先天罡气】</a>2回合.</br><font color=#F0F>【气蕴】</font>回合结束时,若你已受伤,可将武将牌翻面,如此你回复1点体力并摸2张牌.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.",
						XK_xiantian: '先天',
						XK_xiantian_info: '',
						XK_qiyun: '气蕴',
						XK_qiyun_info: '',
						XK_taijijianfa: '招式',
						XK_taijijianfa_info: '<center><font color=#38309d>【太极剑法】</font></center><font color=#F0F>【圆转太虚】</font>当你成为其他角色带有伤害标签牌的唯一目标时,可将1张装备牌置于1名其他角色装备区,如此其代替你成为目标.</br><font color=#F0F>【太极化清】</font>每轮限3次,当1名角色体力变为1时,你可选择1项:1.弃置其1张牌;2.摸1张牌.',
						XK_yuanzhuantaixu: '圆转太虚',
						XK_yuanzhuantaixu_info: '',
						XK_taijihuaqing: '太极化清',
						XK_taijihuaqing_info: '',
						XK_taijihuaqing1: '太极化清',
						XK_taijihuaqing1_info: '',
						XK_taijishengong: '功体',
						XK_taijishengong_info: "<center><font color=#38309d>【太极神功】</font></center><font color=#F0F>【坐忘无我】</font>结束阶段,你可摸X张牌,若你下个准备阶段手牌数大于X,你弃置X张手牌并回复1点体力,X为你结束阶段手牌数且至多为4.</br><font color=#F0F>【乾坤】</font>锁定技,你受到伤害后,获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_fanshou');\">【反手】</a>2回合.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.",
						XK_zuowangwuwo: '坐忘无我',
						XK_zuowangwuwo_info: '',
						XK_zuowangwuwo1: '坐忘无我',
						XK_zuowangwuwo1_info: '',
						XK_qiankun: '乾坤',
						XK_qiankun_info: '',
						XK_qixianjianyi: '招式',
						XK_qixianjianyi_info: '<center><font color=#38309d>【七弦剑意】</font></center><font color=#F0F>【寒梅映雪】</font>每回合限1次,与你距离为<=1/2的角色手牌数小于3/2时,你可令其摸1张牌.</br><font color=#F0F>【十面埋伏】</font>每回合限1次,与你距离为<=1/2的其他角色手牌数大于2/3时,你可令其随机移除1项增益状态.',
						XK_hanmeiyingxue: '寒梅映雪',
						XK_hanmeiyingxue_info: '',
						XK_shimianmaifu: '十面埋伏',
						XK_shimianmaifu_info: '',
						XK_qingxinpusan: '功体',
						XK_qingxinpusan_info: "<center><font color=#38309d>【清心普散咒】</font></center><font color=#F0F>【净土】</font>锁定技,你的进攻距离增加你当前体力数值;你的防御距离增加你已损失体力数值.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.",
						XK_jingtu: '净土',
						XK_jingtu_info: '',
						XK_yuyinraoliang: '招式',
						XK_yuyinraoliang_info: "<center><font color=#38309d>【余音绕梁】</font></center><font color=#F0F>【忘魂】</font>每轮限1次,当你于回合外失去所有手牌时,可摸2张牌并令1名其他角色获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_sangong');\">【散功】</a>1回合.",
						XK_wanghun: '忘魂',
						XK_wanghun_info: '',
						XK_shengwuaiyue: '功体',
						XK_shengwuaiyue_info: "<center><font color=#38309d>【声无哀乐】</font></center><font color=#F0F>【无常之声】</font>在你攻击范围内的其他角色使用杀时,你可弃置1张黑色手牌使其获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_kongju');\">【恐惧】</a>2回合.</br><font color=#F0F>【自然之和】</font>在你攻击范围内的其他角色回复体力后,你可弃置1张红色手牌令其获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_juqi');\">【聚气】</a>2回合.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.",
						XK_wuchangzhisheng: '无常之声',
						XK_wuchangzhisheng_info: '',
						XK_ziranzhihe: '自然之和',
						XK_ziranzhihe_info: '',
						XK_zimutiangou: '招式',
						XK_zimutiangou_info: "<center><font color=#38309d>【子母天钩】</font></center><font color=#F0F>【七宝天岚】</font>你的闪或无懈可击结算完成后,可选择一项:1.随机移除1项异常状;2.令1名其他角色获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_zhuoying');\">【捉影】</a>2回合.",
						XK_qibaotianlan: '七宝天岚',
						XK_qibaotianlan_info: '',
						XK_wanhualijing: '功体',
						XK_wanhualijing_info: "<center><font color=#38309d>【万花离经】</font></center><font color=#F0F>【花无缺】</font>若你已受伤,可将1张手牌当作闪使用或打出;若你未受伤,你可将1张手牌当作无懈可击使用.</br><font color=#F0F>【花满楼】</font>其他角色结束阶段开始时,若你于本回合使用过牌,你可以摸1张牌并获得一个额外的出牌阶段.</br><font color=#F0F>【小周天运转】</font>体力70%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;手牌上限+1;回合开始时随机移除0~1项异常状态.",
						XK_huawuque: '花无缺',
						XK_huawuque_info: '',
						XK_huawuque1: '花无缺',
						XK_huawuque1_info: '',
						XK_huamanlou: '花满楼',
						XK_huamanlou_info: '',
						XK_yinshebianfa: '招式',
						XK_yinshebianfa_info: '<center><font color=#38309d>【银蛇鞭法】</font></center><font color=#F0F>【银蛇千转】</font>处于你攻击范围内的其他角色受到伤害后,你可将其1项异常状态转移至你,如此你摸1张牌.</br><font color=#F0F>【千蛇狂舞】</font>你造成伤害后,若你处于异常状态,可令目标随机获得你拥有的一项异常状态.',
						XK_yinsheqianzhuan: '银蛇千转',
						XK_yinsheqianzhuan_info: '',
						XK_qianshekuangwu: '千蛇狂舞',
						XK_qianshekuangwu_info: '',
						XK_shoushengong: '功体',
						XK_shoushengong_info: "<center><font color=#38309d>【兽神功】</font></center><font color=#F0F>【暴戾】</font>锁定技,你摸牌阶段摸牌数、手牌上限、进攻距离、防御距离+X,X为你存在的异常状态数.</br><font color=#F0F>【小周天运转】</font>体力70%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;手牌上限+1;回合开始时随机移除0~1项异常状态.",
						XK_baoli: '暴戾',
						XK_baoli_info: '',
						XK_jiuyinzonggang: '功体',
						XK_jiuyinzonggang_info: "<center><font color=#38309d>【九阴总纲】</font></center><font color=#F0F>【巨门】</font>每项限1次,你可视为使用1张杀、闪、酒、桃.每轮开始,若你已使用全部选项,可以失去1点体力上限重置选项.</br><font color=#F0F>【秋雪】</font>当你使用或打出1张闪后,可以获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_fanshou');\">【反手】</a><a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_ganzhi');\">【感知】</a>1回合.</br><font color=#F0F>【元婴出世】</font>体力40%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数、手牌上限+1;回合开始时随机移除1~2项异常状态.",
						XK_jumen: '巨门',
						XK_jumen_info: '',
						XK_jumen1: '巨门',
						XK_jumen1_info: '',
						XK_qiuxue: '秋雪',
						XK_qiuxue_info: '',
						XK_dugujiujianex: '招式',
						XK_dugujiujianex_info: "<center><font color=#38309d>【独孤九剑•极】</font></center><font color=#F0F>【无招胜有招】</font>你成为带有伤害标签牌的目标时,可展示牌堆顶1张牌,若其花色与你手牌均不同,你视为对来源使用一张不计次数的杀,否则获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_wuzhao');\">【无招】</a>2回合.</br><font color=#F0F>【破尽天下】</font>你使用杀指定一个目标后,可弃置至多4张手牌,根据数量:1.此杀无法被闪避;>=2.此杀伤害+1;3.获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_qidun');\">【气盾】</a><a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_dashipo');\">【大识破】</a>2回合;4.摸2张牌.",
						XK_dugujiujian: '招式',
						XK_dugujiujian_info: "<center><font color=#38309d>【独孤九剑】</font></center><font color=#F0F>【无招胜有招】</font>你成为带有伤害标签牌的目标时,可展示牌堆顶1张牌,若其花色与你手牌均不同,你视为对来源使用一张不计次数的杀,否则获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_wuzhao');\">【无招】</a>2回合.</br><font color=#F0F>【破尽天下】</font>你使用杀指定一个目标后,可弃置至多3张手牌,根据数量:1.此杀无法被闪避;>=2.此杀伤害+1;3.获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_qidun');\">【气盾】</a><a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_shipo');\">【识破】</a>2回合.",
						XK_pojintianxia: '无招胜有招',
						XK_pojintianxia_info: '',
						XK_wuzhaoshengyou: '破尽天下',
						XK_wuzhaoshengyou_info: '',
						XK_xinheyiqizhao: '招式',
						XK_xinheyiqizhao_info: '<center><font color=#38309d>【心合意气流】</font></center><font color=#F0F>【大千世界】</font>你可以将红色手牌当杀使用.锁定技,你使用的♦️️杀没有距离限制,♥️️杀无法被闪响应.',
						XK_daqianshijie: '大千世界',
						XK_daqianshijie_info: '',
						XK_daqianshijie1: '大千世界',
						XK_daqianshijie1_info: '',
						XK_xinheyiqigong: '功体',
						XK_xinheyiqigong_info: "<center><font color=#38309d>【心合意气流】</font></center><font color=#F0F>【拔刀】</font>以你为目标的杀结算完成后,若来源在你的攻击范围内你可对其使用1张杀.</br><font color=#F0F>【心眼】</font>锁定技,当你因【拔刀】使用杀时,获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_shipo');\">【识破】</a><a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_ganzhi');\">【感知】</a>1回合.</br><font color=#F0F>【小周天运转】</font>体力70%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;手牌上限+1;回合开始时随机移除0~1项异常状态.",
						XK_badao: '拔刀',
						XK_badao_info: '',
						XK_xinyan: '心眼',
						XK_xinyan_info: '',
						XK_dulongzhuihun: '招式',
						XK_dulongzhuihun_info: "<center><font color=#38309d>【毒龙追魂鞭】</font></center><font color=#F0F>【毒龙七尾】</font>出牌阶段限1次,你可以交给1名其他角色1张手牌,视为对其使用1张过河拆桥.</br><font color=#F0F>【万毒入化】</font>当你使用普通锦囊牌指定了唯一目标时,可令任意名处于<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_zhongdu');\">【中毒】</a>状态的其他角色也成为此牌目标.",
						XK_dulongqiwei: '毒龙七尾',
						XK_dulongqiwei_info: '',
						XK_wanduruhua: '万毒入化',
						XK_wanduruhua_info: '',
						XK_wanduxinjing: '功体',
						XK_wanduxinjing_info: "<center><font color=#38309d>【万毒心经】</font></center><font color=#F0F>【毒经】</font>锁定技,当其他角色使用、打出或失去从你这里获得的牌后,获得【中毒】2回合,并令你摸1张牌.</br><font color=#F0F>【小周天运转】</font>体力70%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;手牌上限+1;回合开始时随机移除0~1项异常状态.",
						XK_dujing: '毒经',
						XK_dujing_info: '',
						XK_dujing1: '毒经',
						XK_dujing1_info: '',
						XK_diwangshengong: '招式',
						XK_diwangshengong_info: "<center><font color=#38309d>【帝王神功】</font></center><font color=#F0F>【真一阳指】</font>结束阶段,你可将1张装备牌置于牌堆顶任意张牌下方(0~5),视为使用了1张无距离限制、无视防具的杀.</br><font color=#F0F>【佛光普照】</font>当你攻击范围内的其他角色成为杀的目标时,你可以交给其1张手牌,如此其获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_cimu');\">【刺目】</a><a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_pozhan');\">【破绽】</a>1回合.",
						XK_zhenyiyangzhi: '真一阳指',
						XK_zhenyiyangzhi_info: '',
						XK_foguangpuzhao: '佛光普照',
						XK_foguangpuzhao_info: '',
						XK_jiulonghuti: '功体',
						XK_jiulonghuti_info: "<center><font color=#38309d>【九龙护体】</font></center><font color=#F0F>【金蝉宝甲】</font>锁定技,若你的体力值不小于50%,你受到的非属性伤害-1;否则,你摸牌阶段摸牌数+1.</br><font color=#F0F>【小周天运转】</font>体力70%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;手牌上限+1;回合开始时随机移除0~1项异常状态.",
						XK_jinchanbaojia: '金蝉宝甲',
						XK_jinchanbaojia_info: '',
						XK_jinchanbaojia1: '金蝉宝甲',
						XK_jinchanbaojia1_info: '',
						XK_diyiren: '绝技',
						XK_diyiren_info: '<font color=#F0F>【皇威】</font>主公技,锁定技,当你造成伤害后,若此伤害不小于2,你获得【兴奋】1回合.',
						XK_huangwei: '皇威',
						XK_huangwei_info: '',
						XK_jiuyinbaiguzhua: '招式',
						XK_jiuyinbaiguzhua_info: "<center><font color=#38309d>【九阴白骨爪】</font></center><font color=#F0F>【催魂蚀心】</font>当你使用的杀被闪抵消后,可令目标获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_yunxuan');\">【晕眩】</a>1回合;当你使用闪抵消杀后,可令来源获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_judu');\">【剧毒】</a>1回合.",
						XK_cuihunshixin: '催魂蚀心',
						XK_cuihunshixin_info: '',
						XK_jiuyincanjing: '功体',
						XK_jiuyincanjing_info: "<center><font color=#38309d>【九阴残经】</font></center><font color=#F0F>【四御】</font>每项限1次,你可以视为使用1张杀、闪、酒、桃.</br><font color=#F0F>【止水】</font>当你使用或打出1张闪后,可以摸1张牌.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.",
						XK_siyu: '四御',
						XK_siyu_info: '',
						XK_zhishui: '止水',
						XK_zhishui_info: '',
						XK_youlongjianfa: '招式',
						XK_youlongjianfa_info: "<center><font color=#38309d>【游龙剑法】</font></center><font color=#F0F>【龙游浅水】</font>若你已受伤,可以减少1点体力上限,如此你跳过弃牌阶段并获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_shenxing');\">【神行】</a>2回合.</br><font color=#F0F>【潜龙勿用】</font>锁定技,你使用杀或决斗造成伤害时,若此牌点数大于你的体力上限,伤害+1,否则目标获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_liuxue');\">【流血】</a>1回合.",
						XK_longyouqianshui: '龙游浅水',
						XK_longyouqianshui_info: '',
						XK_qianlongwuyong: '潜龙勿用',
						XK_qianlongwuyong_info: '',
						XK_wuwangshengong: '功体',
						XK_wuwangshengong_info: "<center><font color=#38309d>【无妄神功】</font></center><font color=#F0F>【固握】</font>你受到杀或决斗造成的伤害后,你可失去1点体力上限,获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_bati');\">【霸体】</a>1回合.</br><font color=#F0F>【底气】</font>锁定技,当你的体力为1时,使用杀或决造成的伤害翻倍.</br><font color=#F0F>【元婴出世】</font>体力40%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数、手牌上限+1;回合开始时随机移除1~2项异常状态.",
						XK_guwo: '固握',
						XK_guwo_info: '',
						XK_diqi: '底气',
						XK_diqi_info: '',
						XK_jiuyangshengongex: '功体',
						XK_jiuyangshengongex_info: "<center><font color=#38309d>【九阳神功•极】</font></center><font color=#F0F>【清风明月】</font>锁定技,准备阶段,你获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_xiejin');\">【卸劲】</a><a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_dafanshou');\">【大反手】</a>2回合;若你的体力不小于40%,免疫一切负面状态.</br><font color=#F0F>【九阳无极】</font>你对其他角色造成伤害后,可令其减少等量的体力上限.</br><font color=#F0F>【元婴出世】</font>体力40%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数、手牌上限+1;回合开始时随机移除1~2项异常状态.",
						XK_jiuyangshengong: '功体',
						XK_jiuyangshengong_info: "<center><font color=#38309d>【九阳神功】</font></center><font color=#F0F>【清风明月】</font>锁定技,准备阶段,你获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_xiejin');\">【卸劲】</a>2回合;若你的体力不小于40%,免疫一切负面状态.</br><font color=#F0F>【九阳无极】</font>你对其他角色造成伤害后,可令其减少等量的体力上限.</br><font color=#F0F>【元婴出世】</font>体力40%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数、手牌上限+1;回合开始时随机移除1~2项异常状态.",
						XK_qingfengmingyue: '清风明月',
						XK_qingfengmingyue_info: '',
						XK_jiuyangwuji: '九阳无极',
						XK_jiuyangwuji_info: '',
						XK_youmingshisanshi: '招式',
						XK_youmingshisanshi_info: "<center><font color=#38309d>【幽冥十三式】</font></center><font color=#F0F>【追魂夺魄】</font>摸牌阶段你可以少摸任意张牌,如此你可选择等量角色视为各对其使用1张不计次数的杀.</br><font color=#F0F>【阎王落笔】</font>锁定技,你的杀被闪抵消后,你获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_zhuihun');\">【追魂】</a><a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_xinjian');\">【心剑】</a>1回合.",
						XK_zhuihunduopo: '追魂夺魄',
						XK_zhuihunduopo_info: '',
						XK_yanwangluobi: '阎王落笔',
						XK_yanwangluobi_info: '',
						XK_liumaishenjianex: '招式',
						XK_liumaishenjianex_info: "<center><font color=#38309d>【六脉神剑•极】</font></center><font color=#F0F>【剑气纵横】</font>锁定技,结束阶段你获得X层<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_jianqi');\">【剑气】</a>,X为距离你为1的角色数;在你攻击范围内的角色的杀结算完成后,你获得2层<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_jianqi');\">【剑气】</a>.</br><font color=#F0F>【六脉十杀】</font>出牌阶段,你可以移除所有<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_jianqi');\">【剑气】</a>,每移除2层视为使用1张雷杀,此杀无视距离、不计次数.",
						XK_liumaishenjian: '招式',
						XK_liumaishenjian_info: "<center><font color=#38309d>【六脉神剑】</font></center><font color=#F0F>【剑气纵横】</font>锁定技,结束阶段你获得X层<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_jianqi');\">【剑气】</a>,X为距离你为1的角色数;在你攻击范围内的角色的杀结算完成后,你获得1层<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_jianqi');\">【剑气】</a>.</br><font color=#F0F>【六脉十杀】</font>出牌阶段,你可以移除所有<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_jianqi');\">【剑气】</a>,每移除2层视为使用1张雷杀,此杀无视距离、不计次数.",
						XK_jianqizongheng: '剑气纵横',
						XK_jianqizongheng_info: '',
						XK_jianqizongheng1: '剑气纵横',
						XK_jianqizongheng1_info: '',
						XK_liumaishisha: '六脉十杀',
						XK_liumaishisha_info: '',
						XK_lingboweibuex: '功体',
						XK_lingboweibuex_info: "<center><font color=#38309d>【凌波微步•极】</font></center><font color=#F0F>【飘忽若神】</font>转换技,锁定技,你使用或打出:1.杀后,你的防御距离+2;2.闪后,你的进攻距离+4;结束阶段你可改变此状态.</br><font color=#F0F>【气若幽兰】</font>当你使用或打出闪后,可以随机移除1项负面状态,并获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_shipo');\">【识破】</a><a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_jinghua');\">【净化】</a>2回合、<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_guiyuan');\">【归元】</a>1回合.</br><font color=#F0F>【元婴出世】</font>体力40%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数、手牌上限+1;回合开始时随机移除1~2项异常状态.",
						XK_lingboweibu: '功体',
						XK_lingboweibu_info: "<center><font color=#38309d>【凌波微步】</font></center><font color=#F0F>【飘忽若神】</font>转换技,锁定技,你使用或打出:1.杀后,你的防御距离+2;2.闪后,你的进攻距离+4;结束阶段你可改变此状态.</br><font color=#F0F>【气若幽兰】</font>当你使用或打出闪后,可以随机移除1项负面状态,并获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_shipo');\">【识破】</a>2回合、<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_guiyuan');\">【归元】</a>1回合.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.",
						XK_piaohuruoshen: '飘忽若神',
						XK_piaohuruoshen_info: '',
						XK_piaohuruoshen1: '飘忽若神',
						XK_piaohuruoshen1_info: '',
						XK_qiruoyoulan: '气若幽兰',
						XK_qiruoyoulan_info: '',
						XK_paodingdao: '招式',
						XK_paodingdao_info: '<center><font color=#38309d>【庖丁解牛刀】</font></center><font color=#F0F>【良庖岁更刀】</font>其他角色摸牌、弃牌阶段结束,你可弃置1张基本牌,令其弃置2张牌.</br><font color=#F0F>【游刃必有余】</font>每回合限1次,你使用杀造成伤害后,若目标手牌数少于/多于你,你可以摸1张牌/弃置其1张牌.',
						XK_liangpao: '良庖岁更刀',
						XK_liangpao_info: '',
						XK_yourenyouyu: '游刃必有余',
						XK_yourenyouyu_info: '',
						XK_paodinggong: '功体',
						XK_paodinggong_info: "<center><font color=#38309d>【庖丁解牛功】</font></center><font color=#F0F>【神识】</font>锁定技,回合开始时若场上手牌数少于你的角色较多,你获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_juqi');\">【聚气】</a>1回合,否则你获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_xiejin');\">【卸劲】</a>2回合.</br><font color=#F0F>【小周天运转】</font>体力70%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;手牌上限+1;回合开始时随机移除0~1项异常状态.",
						XK_shenshi: '神识',
						XK_shenshi_info: '',
						XK_cuihunbaidu: '招式',
						XK_cuihunbaidu_info: "<center><font color=#38309d>【摧魂百毒掌】</font></center><font color=#F0F>【魍魉摧心】</font>出牌阶段,你可以将1张杀当作火攻使用.锁定技,你使用火攻时,将描述更改为:展示一张同花色的手牌.</br><font color=#F0F>【催心断魂】</font>当你对其他角色造成属性伤害后,可令其获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_zhongdu');\">【中毒】</a>2回合.",
						XK_wangliang: '魍魉摧心',
						XK_wangliang_info: '',
						XK_wangliang1: '魍魉摧心',
						XK_wangliang1_info: '',
						XK_cuixinduanhun: '催心断魂',
						XK_cuixinduanhun_info: '',
						XK_wanshedafa: '功体',
						XK_wanshedafa_info: "<center><font color=#38309d>【万蛇大法】</font></center><font color=#F0F>【毒御】</font>锁定技,你免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_zhongdu');\">【中毒】</a><a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_judu');\">【剧毒】</a>状态,不会受到火属性伤害.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.",
						XK_duyu: '毒御',
						XK_duyu_info: '',
						XK_duyu1: '毒御',
						XK_duyu1_info: '',
						XK_xuanmingqisha: '招式',
						XK_xuanmingqisha_info: '<center><font color=#38309d>【玄冥七杀】</font></center><font color=#F0F>【断魂蚀骨】</font>出牌阶段限X次,你可弃置1张牌,弃置1名其他角色1张牌,X为你已损失体力值且至少为1.',
						XK_duanhunshigu: '断魂蚀骨',
						XK_duanhunshigu_info: '',
						XK_huagongdafa: '功体',
						XK_huagongdafa_info: "<center><font color=#38309d>【化功大法】</font></center><font color=#F0F>【天池】</font>锁定技,每回合当你首次失去带有伤害标签的牌后,摸等量的牌.</br><font color=#F0F>【化功】</font>你可以将杀、火攻、决斗当做施毒使用.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.",
						XK_tianchi: '天池',
						XK_tianchi_info: '',
						XK_huagong: '化功',
						XK_huagong_info: '',
						XK_yanghui: '绝技',
						XK_yanghui_info: '<font color=#F0F>【韬光养晦】</font>主公技,觉醒技,当你你濒死时,弃置装备区所有牌并减少2点体力上限,如此你回复至2点体力并替换功体为【不老长春功】.',
						XK_taoguangyanghui: '韬光养晦',
						XK_taoguangyanghui_info: '',
						XK_bulaochangchungong: '功体',
						XK_bulaochangchungong_info: "<center><font color=#38309d>【不老长春功】</font></center><font color=#F0F>【不老长春】</font>锁定技,回合结束时,若你已受伤,你回复1点体力,否则增加1点体力上限.</br><font color=#F0F>【天长地久】</font>锁定技,你的回合内限4次,若你使用的牌与你于此回合内使用的上一张牌颜色不同,你摸1张牌.</br><font color=#F0F>【元婴出世】</font>体力40%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数、手牌上限+1;回合开始时随机移除1~2项异常状态.",
						XK_bulaochangchun: '不老长春',
						XK_bulaochangchun_info: '',
						XK_tianchangdijiu: '天长地久',
						XK_tianchangdijiu_info: '',
						XK_chansibazhua: '招式',
						XK_chansibazhua_info: "<center><font color=#38309d>【缠丝八爪】</font></center><font color=#F0F>【千毒万蛊】</font>当你对处于<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_zhongdu');\">【中毒】</a><a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_judu');\">【剧毒】</a>状态的角色施加<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_zhongdu');\">【中毒】</a>状态时,可令其随机获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_sangong');\">【散功】</a><a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_liuxue');\">【流血】</a><a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_kongju');\">【恐惧】</a><a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_duanjin');\">【断筋】</a>中的1~2项2回合.",
						XK_qianduwangu: '千毒万蛊',
						XK_qianduwangu_info: '',
						XK_wudubaodian: '功体',
						XK_wudubaodian_info: "<center><font color=#38309d>【五毒宝典】</font></center><font color=#F0F>【毒典】</font>当你造成<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_zhongdu');\">【中毒】</a>状态时,可令之变为<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_judu');\">【剧毒】</a>.</br><font color=#F0F>【五毒】</font>锁定技,当你成为带有伤害标签的牌的目标时进行判定,若结果为不为♥️️,你令来源获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_zhongdu');\">【中毒】</a>2回合.</br><font color=#F0F>【小周天运转】</font>体力70%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;手牌上限+1;回合开始时随机移除0~1项异常状态.",
						XK_dudian: '毒典',
						XK_dudian_info: '',
						XK_wudu: '五毒',
						XK_wudu_info: '',
						XK_miaodizhi: '招式',
						XK_miaodizhi_info: "<center><font color=#38309d>【妙谛指】</font></center><font color=#F0F>【妙谛法华】</font>每回合限1次,当你造成伤害时,可防止此伤害并令目标获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_dianxue');\">【点穴】</a><a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>1回合.</br><font color=#F0F>【妙谛如来】</font>每轮限1次,回合结束时,你可令1名角色弃置至少1张牌,如此其获得一个额外的回合且于该回合至多使用等量的牌.",
						XK_miaodifahua: '妙谛法华',
						XK_miaodifahua_info: '',
						XK_miaodirulai: '妙谛如来',
						XK_miaodirulai_info: '',
						XK_miaodirulai1: '妙谛如来',
						XK_miaodirulai1_info: '',
						XK_yijinjing: '功体',
						XK_yijinjing_info: "<center><font color=#38309d>【易筋经】</font></center><font color=#F0F>【菩提莲华】</font>每回合限1次,一名角色一次性失去至少2张牌后,你可令其回复1点体力.</br><font color=#F0F>【易筋锻骨】</font>锁定技,你免疫体力流失、翻面.</br><font color=#F0F>【元婴出世】</font>体力40%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数、手牌上限+1;回合开始时随机移除1~2项异常状态.",
						XK_putilianhua: '菩提莲华',
						XK_putilianhua_info: '',
						XK_yijinduangu: '易筋锻骨',
						XK_yijinduangu_info: '',
						XK_niepan: '绝技',
						XK_niepan_info: "<font color=#F0F>【涅槃】</font>主公技,锁定技,回合结束时若你的体力值高于50%,你获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_xiejin');\">【卸劲】</a>1回合.",
						XK_zhuanlun: '涅槃',
						XK_zhuanlun_info: '',
						XK_canhuabaojian: '招式',
						XK_canhuabaojian_info: "<center><font color=#38309d>【残花宝鉴】</font></center><font color=#F0F>【鬼袭】</font>每回合限1次,当你的杀结算完成后,你可令1名角色和你各摸1张牌,使此杀对该角色继续结算且无视防具.</br><font color=#F0F>【残殇】</font>当你的杀造成伤害后,可弃置攻击范围内所有角色各1张牌,因此失去最后1张手牌的角色获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_pozhan');\">【破绽】</a>2回合.",
						XK_guixi: '鬼袭',
						XK_guixi_info: '',
						XK_guixi1: '鬼袭',
						XK_guixi1_info: '',
						XK_canshang: '残殇',
						XK_canshang_info: '',
						XK_canhuabaodian: '功体',
						XK_canhuabaodian_info: "<center><font color=#38309d>【残花宝典】</font></center><font color=#F0F>【飞殇】</font>1名角色死亡后,你可以摸1张牌;若为你击杀,则摸牌数+1.</br><font color=#F0F>【魅影】</font>锁定技,弃牌阶段你的闪不计入手牌数.</br><font color=#F0F>【元婴出世】</font>体力40%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数、手牌上限+1;回合开始时随机移除1~2项异常状态.",
						XK_feishang: '飞殇',
						XK_feishang_info: '',
						XK_meiying: '魅影',
						XK_meiying_info: '',
						XK_pilidaofa: '招式',
						XK_pilidaofa_info: '<center><font color=#38309d>【霹雳刀法】</font></center><font color=#F0F>【三千雷动】</font>你受到非属性伤害后,可选择1项:摸1张牌并跳过下一个弃牌阶段;获得造成伤害的牌并跳过下一个判定阶段.',
						XK_sanqianleidong: '三千雷动',
						XK_sanqianleidong_info: '',
						XK_pilixinfa: '功体',
						XK_pilixinfa_info: "<center><font color=#38309d>【霹雳心法】</font></center><font color=#F0F>【雷霆】</font>当你造成非属性伤害时,可令其变为雷伤害;当你受到雷伤害时,可以防止之.</br><font color=#F0F>【万钧】</font>当你造成雷伤害后,可弃置至多X张手牌,对目标造成额外X点雷伤害,X为你已损失的体力值.</br><font color=#F0F>【小周天运转】</font>体力70%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;手牌上限+1;回合开始时随机移除0~1项异常状态.",
						XK_leiting: '雷霆',
						XK_leiting_info: '',
						XK_leiting1: '雷霆',
						XK_leiting1_info: '',
						XK_wanjun: '万钧',
						XK_wanjun_info: '',
						XK_tianji: '招式',
						XK_tianji_info: '<center><font color=#38309d>【天机千变】</font></center><font color=#F0F>【神曲但丁】</font>每轮限4次,其他角色结束阶段,你可交给其1张手牌,如此你的结束阶段,你摸1张牌.</br><font color=#F0F>【骑士精神】</font>当你通过【神曲但丁】累计交给1名角色2张牌后,可令该角色立即获得1个额外出牌阶段.',
						XK_shenqu: '神曲但丁',
						XK_shenqu_info: '',
						XK_shenqu1: '神曲但丁',
						XK_shenqu1_info: '',
						XK_shenqu2: '神曲但丁',
						XK_shenqu2_info: '',
						XK_qishi: '骑士精神',
						XK_qishi_info: '',
						XK_taiyixingchen: '功体',
						XK_taiyixingchen_info: "<center><font color=#38309d>【太易星辰诀】</font></center><font color=#F0F>【星象】</font>当你濒死时,可废除一个装备栏并进行判定,若结果大于你废除的装备栏数*2,你回复1点体力.</br><font color=#F0F>【小周天运转】</font>体力70%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;手牌上限+1;回合开始时随机移除0~1项异常状态.",
						XK_xingxiang: '星象',
						XK_xingxiang_info: '',
						XK_daojian: '招式',
						XK_daojian_info: "<center><font color=#38309d>【刀剑十杀】</font></center><font color=#F0F>【走剑行刀】</font>出牌阶段限1次,你可获得1名其他角色1张你可使用的手牌,使用或弃置此牌.</br><font color=#F0F>【刀山剑岳】</font>你使用黑色牌造成伤害后,可令目标获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_liuxue');\">【流血】</a>2回合.",
						XK_zoujian: '走剑行刀',
						XK_zoujian_info: '',
						XK_daoshan: '刀山剑岳',
						XK_daoshan_info: '',
						XK_yanxing: '功体',
						XK_yanxing_info: "<center><font color=#38309d>【逍遥燕行式】</font></center><font color=#F0F>【翱翔】</font>你的回合内,可以将1张黑色牌当杀使用或打出.锁定技,当你的杀造成伤害后,本回合使用杀的次数+1.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.",
						XK_aoxiang: '翱翔',
						XK_aoxiang_info: '',
						XK_aoxiang1: '翱翔',
						XK_aoxiang1_info: '',
						XK_shuihu: '招式',
						XK_shuihu_info: '<center><font color=#38309d>【水浒英雄掌】</font></center><font color=#F0F>【宋江怒荡寇】</font>锁定技,你被指定为杀的目标时,你获得1枚<荡>,每有1枚你的手牌上限+1.准备阶段,可移除所有标记并摸等量的牌,每移除3枚回复1点体力.',
						XK_songjiang: '宋江怒荡寇',
						XK_songjiang_info: '',
						XK_songjiang1: '宋江怒荡寇',
						XK_songjiang1_info: '',
						XK_pengfei: '功体',
						XK_pengfei_info: "<center><font color=#38309d>【逍遥鹏飞式】</font></center><font color=#F0F>【鹏飞千里】</font>其他角色使用杀指定距离你为1的其他角色时,你可弃置1张牌使目标变为你,如此,杀的来源需弃置1张杀,否则你对其造成1点伤害.</br><font color=#F0F>【大鹏展翅】</font>锁定技,出牌阶段你每使用1张牌,进攻距离+1直到下回合开始.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.",
						XK_qianli: '鹏飞千里',
						XK_qianli_info: '',
						XK_zhanchi: '大鹏展翅',
						XK_zhanchi_info: '',
						XK_zhanchi1: '大鹏展翅',
						XK_zhanchi1_info: '',
						XK_tianshanliuyang: '招式',
						XK_tianshanliuyang_info: '<center><font color=#38309d>【天山六阳掌】</font></center><font color=#F0F>【阳关三叠】</font>你每使用或打出3张牌后,可以摸1张牌.</br><font color=#F0F>【阳歌天钧】</font>每回合限1次,其他角色于你的回合外使用1张牌后,若你手牌中没有此类型的牌,你可以展示手牌并令当前【阳关三叠】记录的牌数+1.',
						XK_yangguan: '阳关三叠',
						XK_yangguan_info: '',
						XK_yangge: '阳歌天钧',
						XK_yangge_info: '',
						XK_beimingwuxiang: '功体',
						XK_beimingwuxiang_info: "<center><font color=#38309d>【北冥无相功】</font></center><font color=#F0F>【北冥】</font>每轮限1次,你可以视为使用1张本轮有角色使用过的类型的基本牌.</br><font color=#F0F>【日月】</font>1轮内,当1种基本牌被首次使用时,你可令使用者摸1张牌;当本轮杀、闪、酒、桃都被使用后,你可以回复1点体力.</br><font color=#F0F>【元婴出世】</font>体力40%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数、手牌上限+1;回合开始时随机移除1~2项异常状态.",
						XK_beiming: '北冥',
						XK_beiming_info: '',
						XK_beiming1: '北冥',
						XK_beiming1_info: '',
						XK_riyue: '日月',
						XK_riyue_info: '',
						XK_bocai: '绝技',
						XK_bocai_info: '<font color=#F0F>【博才多艺】</font>主公技,锁定技,每当你使用或打出每种花色的牌各至少1张后,重置所有牌的使用次数.',
						XK_duoyi: '博才多艺',
						XK_duoyi_info: '',
						XK_zhentianchui: '招式',
						XK_zhentianchui_info: "<center><font color=#38309d>【震天槌】</font></center><font color=#F0F>【惊天动地】</font>出牌阶段限1次,你可以指定1名体力不小于你的角色,你受到其1点伤害并令其获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_yunxuan');\">【晕眩】</a>1回合.",
						XK_jingtiandongdi: '惊天动地',
						XK_jingtiandongdi_info: '',
						XK_kuangleigong: '功体',
						XK_kuangleigong_info: "<center><font color=#38309d>【狂雷功】</font></center><font color=#F0F>【狂雷】</font>锁定技,当你受到伤害时,若伤害来源体力:大于/等于/小于你,你造成的下1次伤害+1/摸1张牌/重铸装备区的1张牌.</br><font color=#F0F>【小周天运转】</font>体力70%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;手牌上限+1;回合开始时随机移除0~1项异常状态.",
						XK_kuanglei: '狂雷',
						XK_kuanglei_info: '',
						XK_kuanglei1: '狂雷',
						XK_kuanglei1_info: '',
						XK_qinglian: '招式',
						XK_qinglian_info: "<center><font color=#38309d>【清莲印法】</font></center><font color=#F0F>【金针渡劫】</font>出牌阶段限1次,你可令1名角色重铸任意张不同花色的牌.</br><font color=#F0F>【静莲蝶雨】</font>每回合限1次,当1名角色一次失去了2/3/4种花色的牌至少各1张后,你可令其:摸1张牌/随机移除1负面状态/获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_juqi');\">【聚气】</a>2回合.",
						XK_jinzhen: '金针渡劫',
						XK_jinzhen_info: '',
						XK_jinglian: '静莲蝶雨',
						XK_jinglian_info: '',
						XK_wangyouxinfa: '功体',
						XK_wangyouxinfa_info: "<center><font color=#38309d>【忘忧心法】</font></center><font color=#F0F>【清心】</font>锁定技,你的手牌上限、于摸牌阶段的摸牌数+1.</br><font color=#F0F>【小周天运转】</font>体力70%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;手牌上限+1;回合开始时随机移除0~1项异常状态.",
						XK_qingxin: '清心',
						XK_qingxin_info: '',
						XK_yanzici: '招式',
						XK_yanzici_info: '<center><font color=#38309d>【燕子刺】</font></center><font color=#F0F>【燕子抄水】</font>每当你发动【乳燕归巢】使用或打出1张闪时,你可立即获得对方的1张手牌.</br><font color=#F0F>【乳燕归巢】</font>直至你下回合开始,你可以将你与你于本回合内使用的第1张牌同类别的牌当作闪使用或打出(初始默认为基本牌).',
						XK_chaoshui: '燕子抄水',
						XK_chaoshui_info: '',
						XK_chaoshui1: '燕子抄水',
						XK_chaoshui1_info: '',
						XK_chaoshui2: '燕子抄水',
						XK_chaoshui2_info: '',
						XK_guichao: '乳燕归巢',
						XK_guichao_info: '',
						XK_guichao1: '乳燕归巢',
						XK_guichao1_info: '',
						XK_feiyangong: '功体',
						XK_feiyangong_info: "<center><font color=#38309d>【飞燕功】</font></center><font color=#F0F>【燕子穿梭】</font>锁定技,当你使用或打出1张闪后,获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_feiyantai');\">【飞燕】</a>2回合.</br><font color=#F0F>【小周天运转】</font>体力70%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;手牌上限+1;回合开始时随机移除0~1项异常状态.",
						XK_chuansuo: '燕子穿梭',
						XK_chuansuo_info: '',
						XK_yeqiuquan1: '招式',
						XK_yeqiuquan1_info: "<center><font color=#38309d>【野球拳】</font></center><font color=#F0F>【石破天惊】</font>你可跳过摸牌/出牌阶段,如此你于下回合使用杀时:令目标获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_zhongshang');\">【重伤】</a><a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_pojia');\">【破甲】</a>1回合/可指定至多2名额外目标.",
						XK_yequan1: '功体',
						XK_yequan1_info: "<center><font color=#38309d>【野拳神功】</font></center><font color=#F0F>【猜心】</font>当你使用杀指定目标时可与其猜拳,若胜利此杀不可被响应,失败则其摸1张牌.</br><font color=#F0F>【变拳】</font>锁定技,若你不因此技能猜拳未胜利,你重新猜拳一次.</br><font color=#F0F>【小周天运转】</font>体力70%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;手牌上限+1;回合开始时随机移除0~1项异常状态.",
						XK_canyangshenzhang: '招式',
						XK_canyangshenzhang_info: "<center><font color=#38309d>【残阳神掌】</font></center><font color=#F0F>【残天蚀日】</font>出牌阶段限1次,你可与1名其他角色分别选择弃置2张牌或失去1点体力,若其选择与你不同,视为对其使用1张不计入次数的杀,否则你获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_canyang');\">【残阳】</a>2回合.",
						XK_shiri: '残天蚀日',
						XK_shiri_info: '',
						XK_canyangxinfa: '功体',
						XK_canyangxinfa_info: "<center><font color=#38309d>【残阳心法】</font></center><font color=#F0F>【如日中天】</font>其他角色结束阶段,若其手牌数大于你的体力值,你可以获得其1张牌.</br><font color=#F0F>【殷天蔽日】</font>若你未/已受伤,可以失去1点体力/体力上限,跳过判定及弃牌阶段.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.",
						XK_rurizhongtian: '如日中天',
						XK_rurizhongtian_info: '',
						XK_yintian1: '殷天蔽日',
						XK_yintian1_info: '',
						XK_yintian: '殷天蔽日',
						XK_yintian_info: '',
						XK_hundun: '招式',
						XK_hundun_info: '<center><font color=#38309d>【混沌阎罗爪】</font></center><font color=#F0F>【万魂归幽】</font>锁定技,你使用杀可指定的目标数、攻击距离+X,X为本轮你已使用过杀的次数.</br><font color=#F0F>【混沌诛天】</font>出牌阶段,你可以将X张牌当作1张不计入次数的杀使用,如此,你可弃置其中1名目标所有区域各1张牌,并令其获得你转化为杀的牌.X为你本回合发动此技能的次数+1.',
						XK_wanhun: '万魂归幽',
						XK_wanhun_info: '',
						XK_wanhun1: '万魂归幽',
						XK_wanhun1_info: '',
						XK_zhutian: '混沌诛天',
						XK_zhutian_info: '',
						XK_zhutian1: '混沌诛天',
						XK_zhutian1_info: '',
						XK_tiancan: '功体',
						XK_tiancan_info: "<center><font color=#38309d>【天残神功】</font></center><font color=#F0F>【灭世】</font>每轮限1次,1名其他角色死亡后你可于当前回合结束后获得1个额外回合,若来源为你,你获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_lianzhu');\">【连诛】</a>2回合.</br><font color=#F0F>【无相】</font>当你造成伤害时,可使之变为无触发伤害.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.",
						XK_mieshi: '灭世',
						XK_mieshi_info: '',
						XK_wuxiang: '无相',
						XK_wuxiang_info: '',
						XK_huanxiang: '绝技',
						XK_huanxiang_info: '<font color=#F0F>【幻象】</font>主公技,限定技,出牌阶段你可展示牌堆顶6张牌并令所有角色指定其中1张,你对/受到与你选择不同/相同的角色造成1点伤害.',
						XK_huan: '幻象',
						XK_huan_info: '',
						XK_shiba: '招式',
						XK_shiba_info: '<center><font color=#38309d>【降龙十八掌】</font></center><font color=#F0F>【飞龙在天】</font>出牌阶段限3次,你可以弃置2张手牌/失去1点体力/弃置装备区的1张牌视为使用1张无距离限制的杀.</br><font color=#F0F>【亢龙有悔】</font>锁定技,你使用杀指定目标时,若:你的体力不大于目标,此杀伤害+1;手牌数不大于目标,此杀需2张闪响应;装备区的牌数不大于目标,此杀不计入次数.',
						XK_feilong: '飞龙在天',
						XK_feilong_info: '',
						XK_longzhan: '亢龙有悔',
						XK_longzhan_info: '',
						XK_longzhan1: '亢龙有悔',
						XK_longzhan1_info: '',
						XK_xianglong: '功体',
						XK_xianglong_info: "<center><font color=#38309d>【降龙神功】</font></center><font color=#F0F>【利涉大川】</font>结束阶段,若你于本回合造成了伤害,你可摸2张牌或回复1点体力,否则你获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_sangxin');\">【丧心】</a>2回合.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.",
						XK_lishe: '利涉大川',
						XK_lishe_info: '',
						XK_lianzhang: '招式',
						XK_lianzhang_info: "<center><font color=#38309d>【冰火莲掌】</font></center><font color=#F0F>【夜叉探海】</font>锁定技,当你使用或打出1张杀/闪后,获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_shiqi');\">【噬气】</a>/<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_xixing');\">【吸星】</a>2回合.",
						XK_tanhai: '夜叉探海',
						XK_tanhai_info: '',
						XK_xuangong: '功体',
						XK_xuangong_info: "<center><font color=#38309d>【冰火玄功】</font></center><font color=#F0F>【离火】</font>准备阶段,若你手牌中有基本牌,你可令你所有基本牌均视为杀直到本回合结束;否则你摸1张牌.</br><font color=#F0F>【坎水】</font>结束阶段,若你手牌中有锦囊牌,你可令你所有锦囊牌均视为闪直到下回合开始;否则你摸1张牌.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.",
						XK_lihuo1: '离火',
						XK_lihuo1_info: '',
						XK_lihuo2: '离火',
						XK_lihuo2_info: '',
						XK_kanshui: '坎水',
						XK_kanshui_info: '',
						XK_kanshui1: '坎水',
						XK_kanshui1_info: '',
						XK_jietou: '招式',
						XK_jietou_info: '<center><font color=#38309d>【街头格斗术】</font></center><font color=#F0F>【乱打】</font>当你使用杀指定目标后,可使此杀随机增加一个额外目标.',
						XK_luanda: '乱打',
						XK_luanda_info: '',
						XK_jianghu: '功体',
						XK_jianghu_info: "<center><font color=#38309d>【江湖内功】</font></center><font color=#F0F>【调息】</font>锁定技,回合结束时,若你本回合未造成任何伤害,回复1点体力.</br><font color=#F0F>【小周天运转】</font>体力70%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;手牌上限+1;回合开始时随机移除0~1项异常状态.",
						XK_tiaoxi: '调息',
						XK_tiaoxi_info: '',
						XK_zhujuezhili: '绝技',
						XK_zhujuezhili_info: '<font color=#F0F>【无限可能】</font>锁定技,游戏开始时,你可以更换你习得的招式和功体;升级所需经验减少.</br><font color=#F0F>【主角之力】</font>限定技,当你濒死时,可以弃置所有区域的牌,回复等量体力并摸等量的牌.',
						XK_wuxiankeneng: '无限可能',
						XK_wuxiankeneng_info: '',
						XK_zhili: '主角之力',
						XK_zhili_info: '',
						XK_yeqiuquan: '招式',
						XK_yeqiuquan_info: '<center><font color=#38309d>【野球拳】</font></center><font color=#F0F>【劈石破玉】</font>出牌阶段限1次,你可与1名其他角色猜拳,胜利方视为对对方使用1张不计次数的杀,若你失败重置此技能.',
						XK_pishi: '劈石破玉',
						XK_pishi_info: '',
						XK_tiequan: '铁拳无敌',
						XK_tiequan_info: '',
						XK_tianjing: '石破天惊',
						XK_tianjing_info: '',
						XK_yequan: '功体',
						XK_yequan_info: '<center><font color=#38309d>【野拳神功】</font></center><font color=#F0F>【猜心】</font>当你使用杀指定目标时可与其猜拳,若胜利此杀不可被响应,失败则其摸1张牌.',
						XK_bianquan: '猜心',
						XK_bianquan_info: '',
						XK_caixin: '变拳',
						XK_caixin_info: '',
						XK_jikui: '击溃',
						XK_jikui_info: '',
						XK_yanluo: '招式',
						XK_yanluo_info: "<center><font color=#38309d>【阎罗刀】</font></center><font color=#F0F>【十殿阎罗刀】</font>每回合限1次,当你使用杀时可指定攻击范围内的所有角色为目标,且可令其中任意名目标各弃置1张牌取消其成为此杀目标.</br><font color=#F0F>【阴法渡冥河】</font>当你因弃置而失去牌后,可令1名其他角色获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_kongju');\">【恐惧】</a>2回合.",
						XK_shidian: '十殿阎罗刀',
						XK_shidian_info: '',
						XK_yinfa: '阴法渡冥河',
						XK_yinfa_info: '',
						XK_wujian: '功体',
						XK_wujian_info: "<center><font color=#38309d>【无间大法】</font></center><font color=#F0F>【业火】</font>你受到伤害后,若来源在你的攻击范围内,你可弃置1张牌视为对其使用1张不计次数的杀.</br><font color=#F0F>【威压】</font>攻击范围内含有你的角色使用杀指定其他目标后,你可令其选择1项:1.你摸1张牌;2.使你成为目标.</br><font color=#F0F>【元婴出世】</font>体力40%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数、手牌上限+1;回合开始时随机移除1~2项异常状态.",
						XK_yehuo: '业火',
						XK_yehuo_info: '',
						XK_weiya: '威压',
						XK_weiya_info: '',
						XK_qijin: '绝技',
						XK_qijin_info: '<font color=#F0F>【无间气劲】</font>主公技,锁定技,若你于回合外受到了至少2点伤害,回合开始时回复1点体力.',
						XK_wujianqijin: '无间气劲',
						XK_wujianqijin_info: '',
						XK_disha: '招式',
						XK_disha_info: "<center><font color=#38309d>【地煞腿法】</font></center><font color=#F0F>【地魁通幽】</font>你指定1名目标的杀结算完成后,可进行1次判定,若结果不小于2X(被闪响应则为3X),可令此杀对1名其他角色结算,直至判定失败为止,X为此杀结算次数.</br><font color=#F0F>【地辟吞刀】</font>锁定技,你造成伤害后,若目标与你距离不为1,其获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_zhuoying');\">【捉影】</a>2回合;若为1,其获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>2回合.",
						XK_dikui: '地魁通幽',
						XK_dikui_info: '',
						XK_dipi: '地辟吞刀',
						XK_dipi_info: '',
						XK_wuji: '功体',
						XK_wuji_info: "<center><font color=#38309d>【地煞无极功】</font></center><font color=#F0F>【凶星】</font>锁定技,若你的体力值不大于50%,造成的伤害+1.</br><font color=#F0F>【恶魂】</font>你造成伤害后可进行1次判定,若结果为黑色,回复伤害数值的体力,否则失去1点体力并摸1张牌.</br><font color=#F0F>【大周天运转】</font>体力60%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数+1;回合开始时随机移除1项异常状态.",
						XK_xiongxing: '凶星',
						XK_xiongxing_info: '',
						XK_ehun: '恶魂',
						XK_ehun_info: '',
						XK_tiangang: '绝技',
						XK_tiangang_info: '<font color=#F0F>【天罡地煞】</font>主公技,转换技,1.天罡:你受到伤害后可以摸1张牌;2.地煞:你造成伤害后可以摸1张牌.',
						XK_tiandi: '天罡地煞',
						XK_tiandi_info: '',
						XK_tiandi1: '天罡地煞',
						XK_tiandi1_info: '',
						XK_tiandi2: '天罡地煞',
						XK_tiandi2_info: '',
						XK_pixie: '招式',
						XK_pixie_info: "<center><font color=#38309d>【辟邪剑法】</font></center><font color=#F0F>【飞燕穿柳】</font>出牌阶段,你可将2张牌当作杀使用,并使目标获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_cimu');\">【刺目】</a>1回合.</br><font color=#F0F>【江上弄笛】</font>每轮限1次,若你于出牌阶段失去了基本、装备、锦囊牌各至少1张,你可在此回合结束后进行1个额外的回合.",
						XK_feiyan: '飞燕穿柳',
						XK_feiyan_info: '',
						XK_jiangshang: '江上弄笛',
						XK_jiangshang_info: '',
						XK_kuihua: '功体',
						XK_kuihua_info: "<center><font color=#38309d>【葵花宝典】</font></center><font color=#F0F>【飞芒】</font>锁定技,你每有2点体力,进攻距离、使用杀的次数+1;每损失2点体力,防御距离+1.</br><font color=#F0F>【飞仙】</font>每轮限1次,当你击杀1名角色后,你可以于当前回合结束后获得1个额外回合.</br><font color=#F0F>【元婴出世】</font>体力40%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数、手牌上限+1;回合开始时随机移除1~2项异常状态.",
						XK_feimang: '飞芒',
						XK_feimang_info: '',
						XK_feixian: '飞仙',
						XK_feixian_info: '',
						XK_saodang: '绝技',
						XK_saodang_info: '<font color=#F0F>【扫荡群魔】</font>主公技,限定技,出牌阶段你可以与1名其他角色交换位置,如此你可视为对上下家使用1张不计次数的杀.',
						XK_qunmo: '扫荡群魔',
						XK_qunmo_info: '',
						XK_datian: '招式',
						XK_datian_info: "<center><font color=#38309d>【大天自在掌】</font></center><font color=#F0F>【天王托塔】</font>锁定技,你指定了1名目标的杀造成伤害后,你获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_guiyuan');\">【归元】</a>2回合、目标获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>2回合.</br><font color=#F0F>【天上天下】</font>出牌阶段限1次,你可摸X张牌并将等量手牌依次置于牌堆顶,X为你攻击范围内角色数且至少为3,若此时手牌数小于体力值,你摸1张牌.",
						XK_tianwangtuota: '天王托塔',
						XK_tianwangtuota_info: '',
						XK_weiwodunzun: '天上天下',
						XK_weiwodunzun_info: '',
						XK_fantian: '功体',
						XK_fantian_info: "<center><font color=#38309d>【梵天造化功】</font></center><font color=#F0F>【释迦】</font>当你受到伤害时,可进行一次判定,若结果为红色,你对来源造成等量伤害,否则你弃置其等量的牌并获得【反手】1回合.</br><font color=#F0F>【提婆】</font>处于你攻击范围内的其他角色成为带有伤害标签的牌的目标时,若你不为此牌目标,你可代替其成为目标.</br><font color=#F0F>【元婴出世】</font>体力40%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数、手牌上限+1;回合开始时随机移除1~2项异常状态.",
						XK_shijia: '释迦',
						XK_shijia_info: '',
						XK_tipo: '提婆',
						XK_tipo_info: '',
						XK_yintuoluo: '绝技',
						XK_yintuoluo_info: '<font color=#F0F>【因陀罗之誓】</font>主公技,锁定技,回合开始时,你移除所有异常状态、复原武将牌并移除判定区所有牌.',
						XK_zhishi: '因陀罗之誓',
						XK_zhishi_info: '',
						XK_jiulongpo: '招式',
						XK_jiulongpo_info: "<center><font color=#38309d>【霸秦九龙破】</font></center><font color=#F0F>【独尊龙王诀】</font>出牌阶段限1次,你可弃置2张牌,视为对攻击范围内的任意名角色使用1张万箭齐发.</br><font color=#F0F>【龙图山河啸】</font>出牌阶段开始,你可以失去1点体力并获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_shenxing');\">【神行】</a>2回合,如此本回合其他角色无法使用或打出基本牌.",
						XK_duzun: '独尊龙王诀',
						XK_duzun_info: '',
						XK_longtu: '龙图山河啸',
						XK_longtu_info: '',
						XK_baqin: '功体',
						XK_baqin_info: "<center><font color=#38309d>【霸秦神功】</font></center><font color=#F0F>【玄窍】</font>当你造成伤害时可进行1次判定,若结果为:♣️️︎,此伤害+1;♠️️︎,目标获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>2回合;♦️️︎,目标获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_duanjin');\">【断筋】</a>2回合;♥️️︎,目标获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_kongju');\">【恐惧】</a>2回合.</br><font color=#F0F>【唯我独尊】</font>锁定技,距离你不大于2的其他角色进攻距离-1.</br><font color=#F0F>【元婴出世】</font>体力40%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数、手牌上限+1;回合开始时随机移除1~2项异常状态.",
						XK_xuanqiao: '玄窍',
						XK_xuanqiao_info: '',
						XK_tianxia: '唯我独尊',
						XK_tianxia_info: '',
						XK_henglan: '绝技',
						XK_henglan_info: "<font color=#F0F>【霸者横栏】</font>主公技,限定技,当你濒死时,可以回复1点体力,如此你获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_bati');\">【霸体】</a>1回合、<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_bazhehenglan');\">【最后的霸业】</a>2回合.",
						XK_bazhe: '霸者横栏',
						XK_bazhe_info: '',
						XK_wanjianjue: '招式',
						XK_wanjianjue_info: "<center><font color=#38309d>【万剑诀】</font></center><font color=#F0F>【天剑诀】</font>出牌阶段限1次,你可以将1张基本牌当作1张无距离限制的杀对至多3名角色使用,且受到此杀伤害的角色距离你为1直到其下回合结束.</br><font color=#F0F>【七剑诛】</font>锁定技,当你使用卡牌造成伤害后,令目标获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_zhongshang');\">【重伤】</a>1回合.",
						XK_tianjianjue: '天剑诀',
						XK_tianjianjue_info: '',
						XK_tianjianjue1: '天剑诀',
						XK_tianjianjue1_info: '',
						XK_qijianzhu: '七剑诛',
						XK_qijianzhu_info: '',
						XK_wanjianguizong: '功体',
						XK_wanjianguizong_info: "<center><font color=#38309d>【万剑归宗】</font></center><font color=#F0F>【剑煞】</font>结束阶段,你可以对与你距离为1/2的其他角色随机造成1~2/0~1点无触发伤害.</br><font color=#F0F>【元婴出世】</font>体力40%以上免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>;摸牌阶段摸牌数、手牌上限+1;回合开始时随机移除1~2项异常状态.",
						XK_jiansha: '剑煞',
						XK_jiansha_info: '',
						XK_jianbai: '绝技',
						XK_jianbai_info: "<font color=#F0F>【剑百贰拾参】</font>主公技,锁定技,你的体力减少后,若体力不大于50%,你获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_jianyi');\">【剑意】</a>2回合.",
						XK_baiershisan: '剑百贰拾参',
						XK_baiershisan_info: '',
						//状态
						XK_buff: '状态栏',
						XK_buff_info: '',
						XK_neishang: '内伤',
						XK_neishang_info: '',
						XK_zhongshang: '重伤',
						XK_zhongshang_info: '',
						XK_liuxue: '流血',
						XK_liuxue_info: '',
						XK_jianyi: '剑意',
						XK_jianyi_info: '',
						XK_shenxing: '神行',
						XK_shenxing_info: '',
						XK_nores: '龙啸',
						XK_nores_info: '',
						XK_bati: '霸体',
						XK_bati_info: '',
						XK_bazhehenglan: '最后的霸业',
						XK_bazhehenglan_info: '',
						XK_duanjin: '断筋',
						XK_duanjin_info: '',
						XK_cimu: '刺目',
						XK_cimu_info: '',
						XK_kongju: '恐惧',
						XK_kongju_info: '',
						XK_lianzhu: '连诛',
						XK_lianzhu_info: '',
						XK_feiyantai: '飞燕',
						XK_feiyantai_info: '',
						XK_juqi: '聚气',
						XK_juqi_info: '',
						XK_yunxuan: '晕眩',
						XK_yunxuan_info: '',
						XK_liuxue: '流血',
						XK_liuxue_info: '',
						XK_lihuobuff: '离火',
						XK_lihuobuff_info: '',
						XK_xuanbing: '玄冰',
						XK_xuanbing_info: '',
						XK_sangxin: '丧心',
						XK_sangxin_info: '',
						XK_zhongdu: '中毒',
						XK_zhongdu_info: '',
						XK_judu: '剧毒',
						XK_judu_info: '',
						XK_pozhan: '破绽',
						XK_pozhan_info: '',
						XK_dianxue: '点穴',
						XK_dianxue_info: '',
						XK_xiejin: '卸劲',
						XK_xiejin_info: '',
						XK_sangong: '散功',
						XK_sangong_info: '',
						XK_qinglong: '青龙散',
						XK_qinglong_info: '',
						XK_zuoyou: '左右开弓',
						XK_zuoyou_info: '',
						XK_mumang: '目盲',
						XK_mumang_info: '',
						XK_jianqi: '剑气',
						XK_jianqi_info: '',
						XK_shipo: '识破',
						XK_shipo_info: '',
						XK_zhuihun: '追魂',
						XK_zhuihun_info: '',
						XK_xinjian: '心剑',
						XK_xinjian_info: '',
						XK_xingfen: '兴奋',
						XK_xingfen_info: '',
						XK_ganzhi: '感知',
						XK_ganzhi_info: '',
						XK_wuzhao: '无招',
						XK_wuzhao_info: '',
						XK_qidun: '气盾',
						XK_qidun_info: '',
						XK_fanshou: '反手',
						XK_fanshou_info: '',
						XK_zhuoying: '捉影',
						XK_zhuoying_info: '',
						XK_guiyuan: '归元',
						XK_guiyuan_info: '',
						XK_shiqi: '噬气',
						XK_shiqi_info: '',
						XK_xixing: '吸星',
						XK_xixing_info: '',
						XK_pojia: '破甲',
						XK_pojia_info: '',
						XK_xiantiangangqi: '先天罡气',
						XK_xiantiangangqi_info: '',
						XK_shayibodong: '杀意波动',
						XK_shayibodong_info: '',
						XK_canyang: '残阳',
						XK_canyang_info: '',
						XK_lianji: '连击',
						XK_lianji_info: '',
						XK_tiandibuff: '天地劫',
						XK_tiandibuff_info: '',
						XK_zhenji: '震击',
						XK_zhenji_info: '',
						XK_jinghua: '净化',
						XK_jinghua_info: '',
						XK_jielidali: '借力打力',
						XK_jielidali_info: '',
						XK_zuiwujibuff: '最无极',
						XK_zuiwujibuff_info: '',
						XK_qingyi: '情意绵绵',
						XK_qingyi_info: '',
						XK_dongshang: '寒冰',
						XK_dongshang_info: '',
						XK_kuangnu: '狂怒',
						XK_kuangnu_info: '',
						XK_sanzhe: '三折肱',
						XK_sanzhe_info: '',
						XK_dashipo: '大识破',
						XK_dashipo_info: '',
						XK_dafanshou: '大反手',
						XK_dafanshou_info: '',
						XK_daganzhi: '大感知',
						XK_daganzhi_info: '',
						XK_dudun: '毒盾',
						XK_dudun_info: '',
						XK_daoguangzhoujia: '刀光胄甲',
						XK_daoguangzhoujia_info: '',
						XK_zhenhan: '震撼',
						XK_zhenhan_info: '',
						XK_henglian: '横练',
						XK_henglian_info: '',
						XK_shouhu: '守护',
						XK_shouhu_info: '',
						XK_shihun: '噬魂',
						XK_shihun_info: '',
						//功体
						XK_yuanying: '元婴出世',
						XK_yuanying_info: '',
						XK_yuanying1: '元婴出世',
						XK_yuanying1_info: '',
						XK_dazhoutian: '大周天运转',
						XK_dazhoutian_info: '',
						XK_dazhoutian1: '大周天运转',
						XK_dazhoutian1_info: '',
						XK_xiaozhoutian: '小周天运转',
						XK_xiaozhoutian_info: '',
						XK_xia: '侠',
					}, //翻译
				};
				for (var i in XKFYZ.character) {
					XKFYZ.character[i][4].push('ext:侠客风云传/image/' + i + '.jpg');
					if (lib.config.XK_zigong && i == 'XK_weiming') {
						XKFYZ.character[i][4].push('ext:侠客风云传/image/XK_weimingex.jpg');
					}
				}
				lib.config.all.characters.add('XKFYZ');
				lib.config.characters.add('XKFYZ');
				lib.translate['XKFYZ_character_config'] = '侠客风云传';
				return XKFYZ;
			});
			// ---------------------------------------卡牌------------------------------------------//
			game.import('card', function () {
				var XK_card = {
					name: 'XK_card',
					connect: true,
					card: {
						//卡牌
						XK_taijitu: {
							image: 'ext:侠客风云传/image/XK_taijitu.png',
							fullskin: true,
							type: 'equip',
							subtype: 'equip1',
							distance: {
								attackFrom: -1,
							},
							ai: {
								basic: {
									equipValue(card, player) {
										return 6;
									},
								},
							},
							skills: ['XK_taijituskill'],
						},
						XK_jiuxiaohuanpei: {
							image: 'ext:侠客风云传/image/XK_jiuxiaohuanpei.png',
							fullskin: true,
							type: 'equip',
							subtype: 'equip1',
							distance: {
								attackFrom: -1,
							},
							ai: {
								basic: {
									equipValue(card, player) {
										if (player.hasSkillTag('XK_selfbuff')) return 9;
										return 3.5;
									},
								},
							},
							skills: ['XK_jiuxiaoskill'],
						},
						XK_mijibaoxia: {
							fullskin: true,
							image: 'ext:侠客风云传/image/XK_mijibaoxia.png',
							type: 'XK_miji',
							toself: true,
							enable(event, player) {
								return true;
							},
							selectTarget: -1,
							modTarget: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								if (typeof ZhaoshiRecord == 'undefined') {
									//全局变量是否存在
									ZhaoshiRecord = ['XK_dugumiji', 'XK_youmingmiji', 'XK_liumaimiji', 'XK_mantianmiji', 'XK_fenghuamiji', 'XK_dukangjimiji', 'XK_fengshenmiji', 'XK_bawangmiji', 'XK_taijimiji', 'XK_wujimiji', 'XK_fangxuanlingmiji', 'XK_fozumiji', 'XK_feidaomiji', 'XK_dagongmiji'];
								}
								if (typeof NeigongRecord == 'undefined') {
									NeigongRecord = ['XK_jiuyinmiji', 'XK_jiuyangmiji', 'XK_lingbomiji', 'XK_xixingmiji', 'XK_dashipomiji', 'XK_weiwomiji', 'XK_dongfangmiji', 'XK_xisuimiji', 'XK_longxiangmiji', 'XK_xiaowuxiangmiji', 'XK_wudumiji', 'XK_taixuajingmiji', 'XK_mingyumiji'];
								}
								('step 1');
								if (player.hasSkill('XK_dukangjishengong') && typeof XK_wudiRecord == 'undefined') {
									XK_wudiRecord = true;
									event.miji = 'XK_wudimiji';
								} else if (player.hasSkill('XK_dongfangbaodian') && typeof XK_wuyaguRecord == 'undefined') {
									XK_wuyaguRecord = true;
									event.miji = 'XK_wuyagumiji';
								} else if (player.hasSkill('XK_dugujiujian') && player.name == 'XK_linghudaxia' && typeof XK_dugurecord == 'undefined') {
									XK_dugurecord = true;
									event.miji = 'XK_dugumiji';
								} else if (player.hasSkill('XK_taijiquan') && player.name == 'XK_wudangzushi' && typeof XK_taijirecord == 'undefined') {
									XK_taijirecord = true;
									event.miji = 'XK_taijimiji';
								} else if (player.hasSkill('XK_xixingdafa') && player.name == 'XK_riyuejiaozhu' && typeof XK_xixingrecord == 'undefined') {
									XK_xixingrecord = true;
									event.miji = 'XK_xixingmiji';
								} else if (player.hasSkill('XK_mingyugong') && player.name == 'XK_yihuagongzhu' && typeof XK_mingyurecord == 'undefined') {
									XK_mingyurecord = true;
									event.miji = 'XK_mingyumiji';
								} else if (player.hasSkill('XK_longxiangbore') && player.name == 'XK_jinlunguoshi' && typeof XK_longxiangrecord == 'undefined') {
									XK_longxiangrecord = true;
									event.miji = 'XK_longxiangmiji';
								} else if (player.hasSkill('XK_fengshentuifa') && player.name == 'XK_fengzhongzhishen' && typeof XK_fengshenrecord == 'undefined') {
									XK_fengshenrecord = true;
									event.miji = 'XK_fengshenmiji';
								} else if (player.hasSkill('XK_liumaishenjian') && player.name == 'XK_dalishizi' && typeof XK_liumairecord == 'undefined') {
									XK_liumairecord = true;
									event.miji = 'XK_liumaimiji';
								} else if (player.hasSkill('XK_lingboweibu') && player.name == 'XK_dalishizi' && typeof XK_lingborecord == 'undefined') {
									XK_lingborecord = true;
									event.miji = 'XK_lingbomiji';
								} else if (player.hasSkill('XK_xiaolifeidao') && player.name == 'XK_litanhua' && typeof XK_feidaorecord == 'undefined') {
									XK_feidaorecord = true;
									event.miji = 'XK_feidaomiji';
								} else if (player.hasSkill('XK_jiuyangshengong') && player.name == 'XK_mingjiaojiaozhu' && typeof XK_jiuyangrecord == 'undefined') {
									XK_jiuyangrecord = true;
									event.miji = 'XK_jiuyangmiji';
								}
								('step 2');
								if (event.miji) event.goto(4);
								else {
									var list = [];
									if (ZhaoshiRecord.length) list.push('招式');
									if (NeigongRecord.length) list.push('功体');
									if (list.length) {
										player
											.chooseControl(list, true)
											.set('ai', function (event) {
												var player = _status.event.player;
												if (list.includes('功体')) {
													if (!player.hasSkillTag('XK_neigong') || player.hasSkill('XK_xiaozhoutian')) return '功体';
												} else if (list.includes('招式')) return '招式';
											})
											.set('prompt', '【秘籍宝匣】:请选择获得的武功类型');
									} else {
										game.log('世间再无遗落的武功秘籍了!');
										player.draw();
										event.finish();
									}
								}
								('step 3');
								if (result.control == '功体') {
									event.miji = NeigongRecord.randomGet();
								} else {
									event.miji = ZhaoshiRecord.randomGet();
								}
								('step 4');
								if (event.miji) {
									if (NeigongRecord.includes(event.miji)) NeigongRecord.remove(event.miji);
									if (ZhaoshiRecord.includes(event.miji)) ZhaoshiRecord.remove(event.miji);
									var suit = ['club', 'heart', 'diamond', 'spade'].randomGet();
									var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].randomGet();
									var str = get.translation(event.miji) + '现世!';
									player.$fullscreenpop(str, 'fire');
									player.gain(game.createCard(event.miji, suit, num), 'gain2');
								}
							},
							contentAfter() {
								if (event.cards && event.cards.length >= 0) {
									if (Array.isArray(event.cards))
										for (var i of event.cards) {
											if (get.position(i, true) == 'o') {
												game.cardsGotoSpecial([i]);
												game.log(i, '从此局游戏中移除.');
											}
										}
								}
							},
							ai: {
								order: 1,
								basic: {
									useful: 9,
									value: 9,
								},
								result: {
									target: 10,
								},
							},
						},
						XK_mijibaoxiadi: {
							fullskin: true,
							image: 'ext:侠客风云传/image/XK_mijibaoxiadi.png',
							type: 'XK_miji',
							toself: true,
							enable(event, player) {
								return true;
							},
							selectTarget: -1,
							modTarget: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								if (typeof ZhaoshiRecord == 'undefined') {
									//全局变量是否存在
									ZhaoshiRecord = ['XK_dugumiji', 'XK_youmingmiji', 'XK_liumaimiji', 'XK_mantianmiji', 'XK_fenghuamiji', 'XK_dukangjimiji', 'XK_fengshenmiji', 'XK_bawangmiji', 'XK_taijimiji', 'XK_wujimiji', 'XK_fangxuanlingmiji', 'XK_fozumiji', 'XK_feidaomiji', 'XK_dagongmiji'];
								}
								if (typeof NeigongRecord == 'undefined') {
									NeigongRecord = ['XK_jiuyinmiji', 'XK_jiuyangmiji', 'XK_lingbomiji', 'XK_xixingmiji', 'XK_dashipomiji', 'XK_weiwomiji', 'XK_dongfangmiji', 'XK_xisuimiji', 'XK_longxiangmiji', 'XK_xiaowuxiangmiji', 'XK_wudumiji', 'XK_taixuajingmiji', 'XK_fozumiji', 'XK_mingyumiji'];
								}
								('step 1');
								if (player.hasSkill('XK_dukangjishengong') && typeof XK_wudiRecord == 'undefined') {
									XK_wudiRecord = true;
									event.miji = 'XK_wudimiji';
								} else if (player.hasSkill('XK_dongfangbaodian') && typeof XK_wuyaguRecord == 'undefined') {
									XK_wuyaguRecord = true;
									event.miji = 'XK_wuyagumiji';
								} else if (player.hasSkill('XK_dugujiujian') && player.name == 'XK_linghudaxia' && typeof XK_dugurecord == 'undefined') {
									XK_dugurecord = true;
									event.miji = 'XK_dugumiji';
								} else if (player.hasSkill('XK_taijiquan') && player.name == 'XK_wudangzushi' && typeof XK_taijirecord == 'undefined') {
									XK_taijirecord = true;
									event.miji = 'XK_taijimiji';
								} else if (player.hasSkill('XK_xixingdafa') && player.name == 'XK_riyuejiaozhu' && typeof XK_xixingrecord == 'undefined') {
									XK_xixingrecord = true;
									event.miji = 'XK_xixingmiji';
								} else if (player.hasSkill('XK_mingyugong') && player.name == 'XK_yihuagongzhu' && typeof XK_mingyurecord == 'undefined') {
									XK_mingyurecord = true;
									event.miji = 'XK_mingyumiji';
								} else if (player.hasSkill('XK_longxiangbore') && player.name == 'XK_jinlunguoshi' && typeof XK_longxiangrecord == 'undefined') {
									XK_longxiangrecord = true;
									event.miji = 'XK_longxiangmiji';
								} else if (player.hasSkill('XK_fengshentuifa') && player.name == 'XK_fengzhongzhishen' && typeof XK_fengshenrecord == 'undefined') {
									XK_fengshenrecord = true;
									event.miji = 'XK_fengshenmiji';
								} else if (player.hasSkill('XK_liumaishenjian') && player.name == 'XK_dalishizi' && typeof XK_liumairecord == 'undefined') {
									XK_liumairecord = true;
									event.miji = 'XK_liumaimiji';
								} else if (player.hasSkill('XK_lingboweibu') && player.name == 'XK_dalishizi' && typeof XK_lingborecord == 'undefined') {
									XK_lingborecord = true;
									event.miji = 'XK_lingbomiji';
								} else if (player.hasSkill('XK_xiaolifeidao') && player.name == 'XK_litanhua' && typeof XK_feidaorecord == 'undefined') {
									XK_feidaorecord = true;
									event.miji = 'XK_feidaomiji';
								} else if (player.hasSkill('XK_jiuyangshengong') && player.name == 'XK_mingjiaojiaozhu' && typeof XK_jiuyangrecord == 'undefined') {
									XK_jiuyangrecord = true;
									event.miji = 'XK_jiuyangmiji';
								}
								('step 2');
								if (event.miji) event.goto(3);
								else {
									var nm = [1, 2].randomGet();
									if (nm == 1) {
										event.miji = NeigongRecord.randomGet();
									} else {
										event.miji = ZhaoshiRecord.randomGet();
									}
								}
								('step 3');
								if (event.miji) {
									if (NeigongRecord.includes(event.miji)) NeigongRecord.remove(event.miji);
									if (ZhaoshiRecord.includes(event.miji)) ZhaoshiRecord.remove(event.miji);
									var suit = ['club', 'heart', 'diamond', 'spade'].randomGet();
									var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].randomGet();
									var str = get.translation(event.miji) + '现世!';
									player.$fullscreenpop(str, 'fire');
									player.gain(game.createCard(event.miji, suit, num), 'gain2');
								} else {
									game.log('世间再无遗落的武功秘籍了!');
									player.draw();
									event.finish();
								}
							},
							ai: {
								order: 1,
								basic: {
									useful: 8,
									value: 7.5,
								},
								result: {
									target: 10,
								},
							},
						},
						XK_dagongmiji: {
							chongzhu(event, player) {
								return lib.config.XK_mijigailv ? true : false;
							},
							fullskin: true,
							image: 'ext:侠客风云传/image/XK_dagongmiji.png',
							type: 'XK_miji',
							toself: true,
							enable(event, player) {
								return true;
							},
							selectTarget: -1,
							modTarget: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								player.removeBuff('XK_debuff', 1, 1, true, false);
								player.recover();
								('step 1');
								player.$fullscreenpop('打工指法习得!', 'fire');
								player.learnSkill('XK_dagongzhifa', 'XK_zhaoshi');
							},
							contentAfter() {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.position(i, true) == 'o') {
											game.cardsGotoSpecial([i]);
											game.log(i, '秘籍从此局游戏中移除.');
										}
									}
							},
							ai: {
								order: 1,
								basic: {
									useful: 6,
									value: 7,
								},
								result: {
									target(player, target) {
										if (target.hasSkill('XK_jietou')) return 2;
										else {
											if (target.hasSkill('XK_yuanying') || (target.hasSkill('XK_dazhoutian') && target.hp > 3)) return 0;
										}
										if (lib.config.XK_mijigailv) {
											if (target.getXKBuff('XK_debuff').length > 1 || target.checkHp(0.5, 'unequal')) return 2;
										} else {
											if (target.hasSkillTag('XK_debuff') || target.isDamaged()) return 2;
										}
										return 0;
									},
								},
							},
						},
						XK_fozumiji: {
							chongzhu(event, player) {
								return lib.config.XK_mijigailv ? true : false;
							},
							fullskin: true,
							image: 'ext:侠客风云传/image/XK_fozumiji.png',
							type: 'XK_miji',
							toself: true,
							enable(event, player) {
								return true;
							},
							selectTarget: -1,
							modTarget: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								player.removeBuff('XK_debuff', 1, 1, true, false);
								player.recover();
								('step 1');
								player.$fullscreenpop('佛祖拈花习得!', 'fire');
								player.learnSkill('XK_fozunianhua', 'XK_zhaoshi');
							},
							contentAfter() {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.position(i, true) == 'o') {
											game.cardsGotoSpecial([i]);
											game.log(i, '秘籍从此局游戏中移除.');
										}
									}
							},
							ai: {
								order: 1,
								basic: {
									useful: 6,
									value: 7,
								},
								result: {
									target(player, target) {
										if (target.hasSkill('XK_jietou')) return 2;
										else {
											if (target.hasSkill('XK_yuanying') || (target.hasSkill('XK_dazhoutian') && target.hp > 3)) return 0;
										}
										if (lib.config.XK_mijigailv) {
											if (target.getXKBuff('XK_debuff').length > 1 || target.checkHp(0.5, 'unequal')) return 2;
										} else {
											if (target.hasSkillTag('XK_debuff') || target.isDamaged()) return 2;
										}
										return 0;
									},
								},
							},
						},
						XK_feidaomiji: {
							chongzhu(event, player) {
								return lib.config.XK_mijigailv ? true : false;
							},
							fullskin: true,
							image: 'ext:侠客风云传/image/XK_feidaomiji.png',
							type: 'XK_miji',
							toself: true,
							enable(event, player) {
								return true;
							},
							selectTarget: -1,
							modTarget: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								player.removeBuff('XK_debuff', 1, 1, true, false);
								player.recover();
								('step 1');
								if (player.hasSkill('XK_xiaolifeidao') && player.name == 'XK_litanhua') {
									player.$fullscreenpop('小李飞刀精通!', 'fire');
									player.removeSkill('XK_xiaolifeidao');
									player.addSkill('XK_xiaolifeidaoex');
								} else {
									player.$fullscreenpop('小李飞刀习得!', 'fire');
									player.learnSkill('XK_xiaolifeidao', 'XK_zhaoshi');
								}
							},
							contentAfter() {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.position(i, true) == 'o') {
											game.cardsGotoSpecial([i]);
											game.log(i, '秘籍从此局游戏中移除.');
										}
									}
							},
							ai: {
								order: 1,
								basic: {
									useful: 6,
									value: 7,
								},
								result: {
									target(player, target) {
										if (target.hasSkill('XK_jietou') || (target.name == 'XK_litanhua' && target.hasSkill('XK_xiaolifeidao'))) return 10;
										else {
											if (target.hasSkill('XK_yuanying') || (target.hasSkill('XK_dazhoutian') && target.hp > 3)) return 0;
										}
										if (lib.config.XK_mijigailv) {
											if (target.getXKBuff('XK_debuff').length > 1 || target.checkHp(0.5, 'unequal')) return 2;
										} else {
											if (target.hasSkillTag('XK_debuff') || target.isDamaged()) return 2;
										}
										return 0;
									},
								},
							},
						},
						XK_fangxuanlingmiji: {
							chongzhu(event, player) {
								return lib.config.XK_mijigailv ? true : false;
							},
							fullskin: true,
							image: 'ext:侠客风云传/image/XK_fangxuanlingmiji.png',
							type: 'XK_miji',
							toself: true,
							enable(event, player) {
								return true;
							},
							selectTarget: -1,
							modTarget: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								player.removeBuff('XK_debuff', 1, 1, true, false);
								player.recover();
								('step 1');
								player.$fullscreenpop('房玄龄碑习得!', 'fire');
								player.learnSkill('XK_fangxuanlingbei', 'XK_zhaoshi');
							},
							contentAfter() {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.position(i, true) == 'o') {
											game.cardsGotoSpecial([i]);
											game.log(i, '秘籍从此局游戏中移除.');
										}
									}
							},
							ai: {
								order: 1,
								basic: {
									useful: 6,
									value: 7,
								},
								result: {
									target(player, target) {
										if (target.hasSkill('XK_jietou')) return 2;
										else {
											if (target.hasSkill('XK_yuanying') || (target.hasSkill('XK_dazhoutian') && target.hp > 3)) return 0;
										}
										if (lib.config.XK_mijigailv) {
											if (target.getXKBuff('XK_debuff').length > 1 || target.checkHp(0.5, 'unequal')) return 2;
										} else {
											if (target.hasSkillTag('XK_debuff') || target.isDamaged()) return 2;
										}
										return 0;
									},
								},
							},
						},
						XK_wujimiji: {
							chongzhu(event, player) {
								return lib.config.XK_mijigailv ? true : false;
							},
							fullskin: true,
							image: 'ext:侠客风云传/image/XK_wujimiji.png',
							type: 'XK_miji',
							toself: true,
							enable(event, player) {
								return true;
							},
							selectTarget: -1,
							modTarget: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								player.removeBuff('XK_debuff', 1, 1, true, false);
								player.recover();
								('step 1');
								player.$fullscreenpop('无极刀法习得!', 'fire');
								player.learnSkill('XK_wujidaofa', 'XK_zhaoshi');
							},
							contentAfter() {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.position(i, true) == 'o') {
											game.cardsGotoSpecial([i]);
											game.log(i, '秘籍从此局游戏中移除.');
										}
									}
							},
							ai: {
								order: 1,
								basic: {
									useful: 6,
									value: 7,
								},
								result: {
									target(player, target) {
										if (target.hasSkill('XK_jietou')) return 2;
										else {
											if (target.hasSkill('XK_yuanying') || (target.hasSkill('XK_dazhoutian') && target.hp > 3)) return 0;
										}
										if (lib.config.XK_mijigailv) {
											if (target.getXKBuff('XK_debuff').length > 1 || target.checkHp(0.5, 'unequal')) return 2;
										} else {
											if (target.hasSkillTag('XK_debuff') || target.isDamaged()) return 2;
										}
										return 0;
									},
								},
							},
						},
						XK_taijimiji: {
							chongzhu(event, player) {
								return lib.config.XK_mijigailv ? true : false;
							},
							fullskin: true,
							image: 'ext:侠客风云传/image/XK_taijimiji.png',
							type: 'XK_miji',
							toself: true,
							enable(event, player) {
								return true;
							},
							selectTarget: -1,
							modTarget: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								player.removeBuff('XK_debuff', 1, 1, true, false);
								player.recover();
								('step 1');
								if (player.hasSkill('XK_taijiquan') && player.name == 'XK_wudangzushi') {
									player.$fullscreenpop('太极拳精通!', 'fire');
									player.storage.XK_taijimiji_mark = true;
									player.removeSkill('XK_taijiquan');
									player.addSkill('XK_taijiquanex');
								} else {
									player.$fullscreenpop('太极拳习得!', 'fire');
									player.learnSkill('XK_taijiquan', 'XK_zhaoshi');
								}
							},
							contentAfter() {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.position(i, true) == 'o') {
											game.cardsGotoSpecial([i]);
											game.log(i, '秘籍从此局游戏中移除.');
										}
									}
							},
							ai: {
								order: 1,
								basic: {
									useful: 6,
									value: 7.5,
								},
								result: {
									target(player, target) {
										if (target.hasSkill('XK_jietou') || (target.name == 'XK_wudangzushi' && target.hasSkill('XK_taijiquan'))) return 10;
										else {
											if (target.hasSkill('XK_yuanying') || (target.hasSkill('XK_dazhoutian') && target.hp > 3)) return 0;
										}
										if (lib.config.XK_mijigailv) {
											if (target.getXKBuff('XK_debuff').length > 1 || target.checkHp(0.5, 'unequal')) return 2;
										} else {
											if (target.hasSkillTag('XK_debuff') || target.isDamaged()) return 2;
										}
										return 0;
									},
								},
							},
						},
						XK_bawangmiji: {
							chongzhu(event, player) {
								return lib.config.XK_mijigailv ? true : false;
							},
							fullskin: true,
							image: 'ext:侠客风云传/image/XK_bawangmiji.png',
							type: 'XK_miji',
							toself: true,
							enable(event, player) {
								return true;
							},
							selectTarget: -1,
							modTarget: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								player.removeBuff('XK_debuff', 1, 1, true, false);
								player.recover();
								('step 1');
								player.$fullscreenpop('唐家霸王枪习得!', 'fire');
								player.learnSkill('XK_bawangqiang', 'XK_zhaoshi');
							},
							contentAfter() {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.position(i, true) == 'o') {
											game.cardsGotoSpecial([i]);
											game.log(i, '秘籍从此局游戏中移除.');
										}
									}
							},
							ai: {
								order: 1,
								basic: {
									useful: 6,
									value: 7,
								},
								result: {
									target(player, target) {
										if (target.hasSkill('XK_jietou')) return 2;
										else {
											if (target.hasSkill('XK_yuanying') || (target.hasSkill('XK_dazhoutian') && target.hp > 3)) return 0;
										}
										if (lib.config.XK_mijigailv) {
											if (target.getXKBuff('XK_debuff').length > 1 || target.checkHp(0.5, 'unequal')) return 2;
										} else {
											if (target.hasSkillTag('XK_debuff') || target.isDamaged()) return 2;
										}
										return 0;
									},
								},
							},
						},
						XK_wudumiji: {
							chongzhu(event, player) {
								return lib.config.XK_mijigailv ? true : false;
							},
							fullskin: true,
							image: 'ext:侠客风云传/image/XK_wudumiji.png',
							type: 'XK_miji',
							toself: true,
							enable(event, player) {
								return true;
							},
							selectTarget: -1,
							modTarget: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								player.removeBuff('XK_debuff', 1, 1, true, false);
								player.recover();
								('step 1');
								player.$fullscreenpop('五毒赤焰功习得!', 'fire');
								player.learnSkill('XK_wuduchiyan', 'XK_neigong');
							},
							contentAfter() {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.position(i, true) == 'o') {
											game.cardsGotoSpecial([i]);
											game.log(i, '秘籍从此局游戏中移除.');
										}
									}
							},
							ai: {
								order: 1,
								basic: {
									useful: 6,
									value: 7,
								},
								result: {
									target(player, target) {
										if (target.hasSkill('XK_yuanying') || (target.hasSkill('XK_dazhoutian') && target.hp > 2)) return 0;
										if (lib.config.XK_mijigailv) {
											if (target.getXKBuff('XK_debuff').length > 1 || target.checkHp(0.5, 'unequal')) return 2;
										} else {
											if (target.hasSkillTag('XK_debuff') || target.isDamaged()) return 2;
										}
										return 0;
									},
								},
							},
						},
						XK_mingyumiji: {
							chongzhu(event, player) {
								return lib.config.XK_mijigailv ? true : false;
							},
							fullskin: true,
							image: 'ext:侠客风云传/image/XK_mingyumiji.png',
							type: 'XK_miji',
							toself: true,
							enable(event, player) {
								return true;
							},
							selectTarget: -1,
							modTarget: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								player.removeBuff('XK_debuff', 1, 1, true, false);
								player.recover();
								('step 1');
								if (player.hasSkill('XK_mingyugong') && player.name == 'XK_yihuagongzhu') {
									player.$fullscreenpop('明玉功精通!', 'fire');
									player.storage.XK_mingyumiji_mark = true;
									player.removeSkill('XK_mingyugong');
									player.addSkill('XK_mingyugongex');
								} else {
									player.$fullscreenpop('明玉功习得!', 'fire');
									player.learnSkill('XK_mingyugong', 'XK_neigong');
								}
							},
							contentAfter() {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.position(i, true) == 'o') {
											game.cardsGotoSpecial([i]);
											game.log(i, '秘籍从此局游戏中移除.');
										}
									}
							},
							ai: {
								order: 1,
								basic: {
									useful: 6,
									value: 7.5,
								},
								result: {
									target(player, target) {
										if (target.name == 'XK_yihuagongzhu' && target.hasSkill('XK_mingyugong')) return 10;
										if (target.hasSkill('XK_yuanying') || (target.hasSkill('XK_dazhoutian') && target.hp > 2)) return 0;
										if (lib.config.XK_mijigailv) {
											if (target.getXKBuff('XK_debuff').length > 1 || target.checkHp(0.5, 'unequal')) return 2;
										} else {
											if (target.hasSkillTag('XK_debuff') || target.isDamaged()) return 2;
										}
										return 0;
									},
								},
							},
						},
						XK_taixuajingmiji: {
							chongzhu(event, player) {
								return lib.config.XK_mijigailv ? true : false;
							},
							fullskin: true,
							image: 'ext:侠客风云传/image/XK_taixuajingmiji.png',
							type: 'XK_miji',
							toself: true,
							enable(event, player) {
								return true;
							},
							selectTarget: -1,
							modTarget: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								player.removeBuff('XK_debuff', 1, 1, true, false);
								player.recover();
								('step 1');
								player.$fullscreenpop('白首太玄经习得!', 'fire');
								player.learnSkill('XK_baishoutaixuan', 'XK_neigong');
							},
							contentAfter() {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.position(i, true) == 'o') {
											game.cardsGotoSpecial([i]);
											game.log(i, '秘籍从此局游戏中移除.');
										}
									}
							},
							ai: {
								order: 1,
								basic: {
									useful: 7,
									value: 8,
								},
								result: {
									target(player, target) {
										if (target.hasSkill('XK_yuanying') || (target.hasSkill('XK_dazhoutian') && target.hp > 2)) return 0;
										if (lib.config.XK_mijigailv) {
											if (target.getXKBuff('XK_debuff').length > 1 || target.checkHp(0.5, 'unequal')) return 2;
										} else {
											if (target.hasSkillTag('XK_debuff') || target.isDamaged()) return 2;
										}
										return 0;
									},
								},
							},
						},
						XK_longxiangmiji: {
							chongzhu(event, player) {
								return lib.config.XK_mijigailv ? true : false;
							},
							fullskin: true,
							image: 'ext:侠客风云传/image/XK_longxiangmiji.png',
							type: 'XK_miji',
							toself: true,
							enable(event, player) {
								return true;
							},
							selectTarget: -1,
							modTarget: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								player.removeBuff('XK_debuff', 1, 1, true, false);
								player.recover();
								('step 1');
								if (player.hasSkill('XK_longxiangbore') && player.name == 'XK_jinlunguoshi') {
									player.$fullscreenpop('龙象般若功精通!', 'fire');
									player.storage.XK_longxiangmiji_mark = true;
									player.removeSkill('XK_longxiangbore');
									player.addSkill('XK_longxiangboreex');
								} else {
									player.$fullscreenpop('龙象般若功习得!', 'fire');
									player.learnSkill('XK_longxiangbore', 'XK_neigong');
								}
							},
							contentAfter() {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.position(i, true) == 'o') {
											game.cardsGotoSpecial([i]);
											game.log(i, '秘籍从此局游戏中移除.');
										}
									}
							},
							ai: {
								order: 1,
								basic: {
									useful: 6,
									value: 7,
								},
								result: {
									target(player, target) {
										if (target.name == 'XK_jinlunguoshi' && target.hasSkill('XK_longxiangbore')) return 10;
										if (target.hasSkill('XK_yuanying') || (target.hasSkill('XK_dazhoutian') && target.hp > 2)) return 0;
										if (lib.config.XK_mijigailv) {
											if (target.getXKBuff('XK_debuff').length > 1 || target.checkHp(0.5, 'unequal')) return 2;
										} else {
											if (target.hasSkillTag('XK_debuff') || target.isDamaged()) return 2;
										}
										return 0;
									},
								},
							},
						},
						XK_xiaowuxiangmiji: {
							chongzhu(event, player) {
								return lib.config.XK_mijigailv ? true : false;
							},
							fullskin: true,
							image: 'ext:侠客风云传/image/XK_xiaowuxiangmiji.png',
							type: 'XK_miji',
							toself: true,
							enable(event, player) {
								return true;
							},
							selectTarget: -1,
							modTarget: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								player.removeBuff('XK_debuff', 1, 1, true, false);
								player.recover();
								('step 1');
								player.$fullscreenpop('小无相功习得!', 'fire');
								player.learnSkill('XK_xiaowuxianggong', 'XK_neigong');
							},
							contentAfter() {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.position(i, true) == 'o') {
											game.cardsGotoSpecial([i]);
											game.log(i, '秘籍从此局游戏中移除.');
										}
									}
							},
							ai: {
								order: 1,
								basic: {
									useful: 6,
									value: 7,
								},
								result: {
									target(player, target) {
										if (target.hasSkill('XK_yuanying') || (target.hasSkill('XK_dazhoutian') && target.hp > 2)) return 0;
										if (lib.config.XK_mijigailv) {
											if (target.getXKBuff('XK_debuff').length > 1 || target.checkHp(0.5, 'unequal')) return 2;
										} else {
											if (target.hasSkillTag('XK_debuff') || target.isDamaged()) return 2;
										}
										return 0;
									},
								},
							},
						},
						XK_xisuimiji: {
							chongzhu(event, player) {
								return lib.config.XK_mijigailv ? true : false;
							},
							fullskin: true,
							image: 'ext:侠客风云传/image/XK_xisuimiji.png',
							type: 'XK_miji',
							toself: true,
							enable(event, player) {
								return true;
							},
							selectTarget: -1,
							modTarget: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								player.removeBuff('XK_debuff', 1, 1, true, false);
								player.recover();
								('step 1');
								player.$fullscreenpop('洗髓经习得!', 'fire');
								player.learnSkill('XK_xisuijing', 'XK_neigong');
							},
							contentAfter() {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.position(i, true) == 'o') {
											game.cardsGotoSpecial([i]);
											game.log(i, '秘籍从此局游戏中移除.');
										}
									}
							},
							ai: {
								order: 1,
								basic: {
									useful: 6,
									value: 7,
								},
								result: {
									target(player, target) {
										if (target.hasSkill('XK_yuanying') || (target.hasSkill('XK_dazhoutian') && target.hp > 2)) return 0;
										if (lib.config.XK_mijigailv) {
											if (target.getXKBuff('XK_debuff').length > 1 || target.checkHp(0.5, 'unequal')) return 2;
										} else {
											if (target.hasSkillTag('XK_debuff') || target.isDamaged()) return 2;
										}
										return 0;
									},
								},
							},
						},
						XK_dongfangmiji: {
							chongzhu(event, player) {
								return lib.config.XK_mijigailv ? true : false;
							},
							fullskin: true,
							image: 'ext:侠客风云传/image/XK_dongfangmiji.png',
							type: 'XK_miji',
							toself: true,
							enable(event, player) {
								return true;
							},
							selectTarget: -1,
							modTarget: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								player.removeBuff('XK_debuff', 1, 1, true, false);
								player.recover();
								('step 1');
								player.$fullscreenpop('东方宝典习得!', 'fire');
								player.learnSkill('XK_dongfangbaodian', 'XK_neigong');
							},
							contentAfter() {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.position(i, true) == 'o') {
											game.cardsGotoSpecial([i]);
											game.log(i, '秘籍从此局游戏中移除.');
										}
									}
							},
							ai: {
								order: 1,
								basic: {
									useful: 6,
									value: 6.5,
								},
								result: {
									target(player, target) {
										if (player.countCards('h', 'XK_mijibaoxia') || player.countCards('h', 'XK_mijibaoxiadi')) return 10;
										else {
											if (target.hasSkill('XK_yuanying') || (target.hasSkill('XK_dazhoutian') && target.hp > 2)) return 0;
										}
										if (lib.config.XK_mijigailv) {
											if (target.getXKBuff('XK_debuff').length > 1 || target.checkHp(0.5, 'unequal')) return 2;
										} else {
											if (target.hasSkillTag('XK_debuff') || target.isDamaged()) return 2;
										}
										return 0;
									},
								},
							},
						},
						XK_fengshenmiji: {
							chongzhu(event, player) {
								return lib.config.XK_mijigailv ? true : false;
							},
							fullskin: true,
							image: 'ext:侠客风云传/image/XK_fengshenmiji.png',
							type: 'XK_miji',
							toself: true,
							enable(event, player) {
								return true;
							},
							selectTarget: -1,
							modTarget: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								player.removeBuff('XK_debuff', 1, 1, true, false);
								player.recover();
								('step 1');
								if (player.hasSkill('XK_fengshentuifa') && player.name == 'XK_fengzhongzhishen') {
									player.$fullscreenpop('风神腿法精通!', 'fire');
									player.storage.XK_fengshenmiji_mark = true;
									player.removeSkill('XK_fengshentuifa');
									player.addSkill('XK_fengshentuifaex');
								} else {
									player.$fullscreenpop('风神腿法习得!', 'fire');
									player.learnSkill('XK_fengshentuifa', 'XK_zhaoshi');
								}
							},
							contentAfter() {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.position(i, true) == 'o') {
											game.cardsGotoSpecial([i]);
											game.log(i, '秘籍从此局游戏中移除.');
										}
									}
							},
							ai: {
								order: 1,
								basic: {
									useful: 6,
									value: 7,
								},
								result: {
									target(player, target) {
										if (target.hasSkill('XK_jietou') || (target.name == 'XK_fengzhongzhishen' && target.hasSkill('XK_fengshentuifa'))) return 2;
										else {
											if (target.hasSkill('XK_yuanying') || (target.hasSkill('XK_dazhoutian') && target.hp > 3)) return 0;
										}
										if (lib.config.XK_mijigailv) {
											if (target.getXKBuff('XK_debuff').length > 1 || target.checkHp(0.5, 'unequal')) return 2;
										} else {
											if (target.hasSkillTag('XK_debuff') || target.isDamaged()) return 2;
										}
										return 0;
									},
								},
							},
						},
						XK_wuyagumiji: {
							chongzhu(event, player) {
								return lib.config.XK_mijigailv ? true : false;
							},
							fullskin: true,
							image: 'ext:侠客风云传/image/XK_wuyagumiji.png',
							type: 'XK_miji',
							toself: true,
							enable(event, player) {
								return true;
							},
							selectTarget: -1,
							modTarget: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								player.removeBuff('XK_debuff', 1, 1, true, false);
								player.recover();
								('step 1');
								player.$fullscreenpop('日月无相功习得!', 'fire');
								player.learnSkill('XK_wuyagushenggong', 'XK_neigong');
							},
							contentAfter() {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.position(i, true) == 'o') {
											game.cardsGotoSpecial([i]);
											game.log(i, '秘籍从此局游戏中移除.');
										}
									}
							},
							ai: {
								order: 1,
								basic: {
									useful: 9,
									value: 9.5,
								},
								result: {
									target(player, target) {
										return 10;
									},
								},
							},
						},
						XK_wudimiji: {
							chongzhu(event, player) {
								return lib.config.XK_mijigailv ? true : false;
							},
							fullskin: true,
							image: 'ext:侠客风云传/image/XK_wudimiji.png',
							type: 'XK_miji',
							toself: true,
							enable(event, player) {
								return true;
							},
							selectTarget: -1,
							modTarget: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								player.removeBuff('XK_debuff', 1, 1, true, false);
								player.recover();
								('step 1');
								player.$fullscreenpop('无敌极限流习得!', 'fire');
								player.learnSkill('XK_wudijixianliu', 'XK_zhaoshi');
							},
							contentAfter() {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.position(i, true) == 'o') {
											game.cardsGotoSpecial([i]);
											game.log(i, '秘籍从此局游戏中移除.');
										}
									}
							},
							ai: {
								order: 1,
								basic: {
									useful: 9,
									value: 9.5,
								},
								result: {
									target(player, target) {
										return 10;
									},
								},
							},
						},
						XK_dukangjimiji: {
							chongzhu(event, player) {
								return lib.config.XK_mijigailv ? true : false;
							},
							fullskin: true,
							image: 'ext:侠客风云传/image/XK_dukangjimiji.png',
							type: 'XK_miji',
							toself: true,
							enable(event, player) {
								return true;
							},
							selectTarget: -1,
							modTarget: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								player.removeBuff('XK_debuff', 1, 1, true, false);
								player.recover();
								('step 1');
								player.$fullscreenpop('杜康鸡神功习得!', 'fire');
								player.learnSkill('XK_dukangjishengong', 'XK_zhaoshi');
							},
							contentAfter() {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.position(i, true) == 'o') {
											game.cardsGotoSpecial([i]);
											game.log(i, '秘籍从此局游戏中移除.');
										}
									}
							},
							ai: {
								order: 1,
								basic: {
									useful: 6,
									value: 6.5,
								},
								result: {
									target(player, target) {
										if (player.countCards('h', 'XK_mijibaoxia') || player.countCards('h', 'XK_mijibaoxiadi')) return 10;
										if (target.hasSkill('XK_jietou')) return 2;
										else {
											if (target.hasSkill('XK_yuanying') || (target.hasSkill('XK_dazhoutian') && target.hp > 2)) return 0;
										}
										if (lib.config.XK_mijigailv) {
											if (target.getXKBuff('XK_debuff').length > 1 || target.checkHp(0.5, 'unequal')) return 2;
										} else {
											if (target.hasSkillTag('XK_debuff') || target.isDamaged()) return 2;
										}
										return 0;
									},
								},
							},
						},
						XK_weiwomiji: {
							chongzhu(event, player) {
								return lib.config.XK_mijigailv ? true : false;
							},
							fullskin: true,
							image: 'ext:侠客风云传/image/XK_weiwomiji.png',
							type: 'XK_miji',
							toself: true,
							enable(event, player) {
								return true;
							},
							selectTarget: -1,
							modTarget: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								player.removeBuff('XK_debuff', 1, 1, true, false);
								player.recover();
								('step 1');
								player.$fullscreenpop('唯我独尊功习得!', 'fire');
								player.learnSkill('XK_weiwoduzungong', 'XK_neigong');
							},
							contentAfter() {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.position(i, true) == 'o') {
											game.cardsGotoSpecial([i]);
											game.log(i, '秘籍从此局游戏中移除.');
										}
									}
							},
							ai: {
								order: 1,
								basic: {
									useful: 6,
									value: 8,
								},
								result: {
									target(player, target) {
										if (target.hasSkill('XK_xiaozhoutian') || target.hasSkill('XK_dazhoutian')) return 2;
										if (lib.config.XK_mijigailv) {
											if (target.getXKBuff('XK_debuff').length > 1 || target.checkHp(0.5, 'unequal')) return 2;
										} else {
											if (target.hasSkillTag('XK_debuff') || target.isDamaged()) return 2;
										}
										return 0;
									},
								},
							},
						},
						XK_fenghuamiji: {
							chongzhu(event, player) {
								return lib.config.XK_mijigailv ? true : false;
							},
							fullskin: true,
							image: 'ext:侠客风云传/image/XK_fenghuamiji.png',
							type: 'XK_miji',
							toself: true,
							enable(event, player) {
								return true;
							},
							selectTarget: -1,
							modTarget: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								player.removeBuff('XK_debuff', 1, 1, true, false);
								player.recover();
								('step 1');
								player.$fullscreenpop('风花雪月曲习得!', 'fire');
								player.learnSkill('XK_fenghuaxueyue', 'XK_zhaoshi');
							},
							contentAfter() {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.position(i, true) == 'o') {
											game.cardsGotoSpecial([i]);
											game.log(i, '秘籍从此局游戏中移除.');
										}
									}
							},
							ai: {
								order: 1,
								basic: {
									useful: 6,
									value: 6,
								},
								result: {
									target(player, target) {
										if (target.hasSkill('XK_jietou')) return 2;
										else {
											if (target.hasSkill('XK_yuanying') || (target.hasSkill('XK_dazhoutian') && target.hp > 2)) return 0;
										}
										if (lib.config.XK_mijigailv) {
											if (target.getXKBuff('XK_debuff').length > 1 || target.checkHp(0.5, 'unequal')) return 2;
										} else {
											if (target.hasSkillTag('XK_debuff') || target.isDamaged()) return 2;
										}
										return 0;
									},
								},
							},
						},
						XK_mantianmiji: {
							chongzhu(event, player) {
								return lib.config.XK_mijigailv ? true : false;
							},
							fullskin: true,
							image: 'ext:侠客风云传/image/XK_mantianmiji.png',
							type: 'XK_miji',
							toself: true,
							enable(event, player) {
								return true;
							},
							selectTarget: -1,
							modTarget: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								player.removeBuff('XK_debuff', 1, 1, true, false);
								player.recover();
								('step 1');
								player.$fullscreenpop('满天流星习得!', 'fire');
								player.learnSkill('XK_mantianliuxing', 'XK_zhaoshi');
							},
							contentAfter() {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.position(i, true) == 'o') {
											game.cardsGotoSpecial([i]);
											game.log(i, '秘籍从此局游戏中移除.');
										}
									}
							},
							ai: {
								order: 1,
								basic: {
									useful: 6,
									value: 6,
								},
								result: {
									target(player, target) {
										if (target.hasSkill('XK_jietou')) return 2;
										else {
											if (target.hasSkill('XK_yuanying') || (target.hasSkill('XK_dazhoutian') && target.hp > 2)) return 0;
										}
										if (lib.config.XK_mijigailv) {
											if (target.getXKBuff('XK_debuff').length > 1 || target.checkHp(0.5, 'unequal')) return 2;
										} else {
											if (target.hasSkillTag('XK_debuff') || target.isDamaged()) return 2;
										}
										return 0;
									},
								},
							},
						},
						XK_dashipomiji: {
							chongzhu(event, player) {
								return lib.config.XK_mijigailv ? true : false;
							},
							fullskin: true,
							image: 'ext:侠客风云传/image/XK_dashipomiji.png',
							type: 'XK_miji',
							toself: true,
							enable(event, player) {
								return true;
							},
							selectTarget: -1,
							modTarget: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								player.removeBuff('XK_debuff', 1, 1, true, false);
								player.recover();
								('step 1');
								player.$fullscreenpop('大湿婆密咒习得!', 'fire');
								player.learnSkill('XK_dashipomizhou', 'XK_neigong');
							},
							contentAfter() {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.position(i, true) == 'o') {
											game.cardsGotoSpecial([i]);
											game.log(i, '秘籍从此局游戏中移除.');
										}
									}
							},
							ai: {
								order: 1,
								basic: {
									useful: 6,
									value: 7,
								},
								result: {
									target(player, target) {
										if (target.hasSkill('XK_xiaozhoutian')) return 2;
										if (lib.config.XK_mijigailv) {
											if (target.getXKBuff('XK_debuff').length > 1) return 2;
											return player.getDamagedHp() - 2;
										} else {
											if (target.hasSkillTag('XK_debuff')) return 2;
											return player.getDamagedHp() - 1;
										}
									},
								},
							},
						},
						XK_xixingmiji: {
							chongzhu(event, player) {
								return lib.config.XK_mijigailv ? true : false;
							},
							fullskin: true,
							image: 'ext:侠客风云传/image/XK_xixingmiji.png',
							type: 'XK_miji',
							toself: true,
							enable(event, player) {
								return true;
							},
							selectTarget: -1,
							modTarget: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								player.removeBuff('XK_debuff', 1, 1, true, false);
								player.recover();
								('step 1');
								if (player.hasSkill('XK_xixingdafa') && player.name == 'XK_riyuejiaozhu') {
									player.$fullscreenpop('吸星大法精通!', 'fire');
									player.storage.XK_xixingmiji_mark = true;
									player.removeSkill('XK_xixingdafa');
									player.addSkill('XK_xixingdafaex');
								} else {
									player.$fullscreenpop('吸星大法习得!', 'fire');
									player.learnSkill('XK_xixingdafa', 'XK_neigong');
								}
							},
							contentAfter() {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.position(i, true) == 'o') {
											game.cardsGotoSpecial([i]);
											game.log(i, '秘籍从此局游戏中移除.');
										}
									}
							},
							ai: {
								order: 1,
								basic: {
									useful: 6,
									value: 7.5,
								},
								result: {
									target(player, target) {
										if (target.name == 'XK_riyuejiaozhu' && target.hasSkill('XK_xixingdafa')) return 10;
										if (target.hasSkill('XK_xiaozhoutian') || target.hasSkill('XK_dazhoutian')) return 2;
										if (lib.config.XK_mijigailv) {
											if (target.getXKBuff('XK_debuff').length > 1 || target.checkHp(0.5, 'unequal')) return 2;
										} else {
											if (target.hasSkillTag('XK_debuff') || target.isDamaged()) return 2;
										}
										return 0;
									},
								},
							},
						},
						XK_jiuyinmiji: {
							chongzhu(event, player) {
								return lib.config.XK_mijigailv ? true : false;
							},
							fullskin: true,
							image: 'ext:侠客风云传/image/XK_jiuyinmiji.png',
							type: 'XK_miji',
							toself: true,
							enable(event, player) {
								return true;
							},
							selectTarget: -1,
							modTarget: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								player.removeBuff('XK_debuff', 1, 1, true, false);
								player.recover();
								('step 1');
								player.$fullscreenpop('九阴总纲习得!', 'fire');
								player.learnSkill('XK_jiuyinzonggang', 'XK_neigong');
							},
							contentAfter() {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.position(i, true) == 'o') {
											game.cardsGotoSpecial([i]);
											game.log(i, '秘籍从此局游戏中移除.');
										}
									}
							},
							ai: {
								order: 1,
								basic: {
									useful: 6,
									value: 7.5,
								},
								result: {
									target(player, target) {
										if (target.hasSkill('XK_xiaozhoutian') || target.hasSkill('XK_dazhoutian')) return 2;
										if (lib.config.XK_mijigailv) {
											if (target.getXKBuff('XK_debuff').length > 1 || target.checkHp(0.5, 'unequal')) return 2;
											return target.maxHp - 4;
										} else {
											if (target.hasSkillTag('XK_debuff') || target.isDamaged()) return 2;
											return target.maxHp - 3;
										}
									},
								},
							},
						},
						XK_dugumiji: {
							chongzhu(event, player) {
								return lib.config.XK_mijigailv ? true : false;
							},
							fullskin: true,
							image: 'ext:侠客风云传/image/XK_dugumiji.png',
							type: 'XK_miji',
							toself: true,
							enable(event, player) {
								return true;
							},
							selectTarget: -1,
							modTarget: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								player.removeBuff('XK_debuff', 1, 1, true, false);
								player.recover();
								('step 1');
								if (player.hasSkill('XK_dugujiujian') && player.name == 'XK_linghudaxia') {
									player.$fullscreenpop('独孤九剑精通!', 'fire');
									player.storage.XK_dugumiji_mark = true;
									player.removeSkill('XK_dugujiujian');
									player.addSkill('XK_dugujiujianex');
								} else {
									player.$fullscreenpop('独孤九剑习得!', 'fire');
									player.learnSkill('XK_dugujiujian', 'XK_zhaoshi');
								}
							},
							contentAfter() {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.position(i, true) == 'o') {
											game.cardsGotoSpecial([i]);
											game.log(i, '秘籍从此局游戏中移除.');
										}
									}
							},
							ai: {
								order: 1,
								basic: {
									useful: 6,
									value: 7.5,
								},
								result: {
									target(player, target) {
										if (target.hasSkill('XK_jietou') || (target.name == 'XK_linghudaxia' && target.hasSkill('XK_dugujiujian'))) return 10;
										else if (target.hasSkill('XK_yuanying')) return 0;
										if (lib.config.XK_mijigailv) {
											if (target.getXKBuff('XK_debuff').length > 1 || target.checkHp(0.5, 'unequal')) return 2;
										} else {
											if (target.hasSkillTag('XK_debuff') || target.isDamaged()) return 2;
										}
										return 0;
									},
								},
							},
						},
						XK_jiuyangmiji: {
							chongzhu(event, player) {
								return lib.config.XK_mijigailv ? true : false;
							},
							fullskin: true,
							image: 'ext:侠客风云传/image/XK_jiuyangmiji.png',
							type: 'XK_miji',
							toself: true,
							enable(event, player) {
								return true;
							},
							selectTarget: -1,
							modTarget: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								player.removeBuff('XK_debuff', 1, 1, true, false);
								player.recover();
								('step 1');
								if (player.hasSkill('XK_jiuyangshengong') && player.name == 'XK_mingjiaojiaozhu') {
									player.$fullscreenpop('九阳神功精通!', 'fire');
									player.storage.XK_jiuyangmiji_mark = true;
									player.removeSkill('XK_jiuyangshengong');
									player.addSkill('XK_jiuyangshengongex');
								} else {
									player.$fullscreenpop('九阳神功习得!', 'fire');
									player.learnSkill('XK_jiuyangshengong', 'XK_neigong');
								}
							},
							contentAfter() {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.position(i, true) == 'o') {
											game.cardsGotoSpecial([i]);
											game.log(i, '秘籍从此局游戏中移除.');
										}
									}
							},
							ai: {
								order: 1,
								basic: {
									useful: 6,
									value: 8.5,
								},
								result: {
									target(player, target) {
										if (target.name == 'XK_mingjiaojiaozhu' && target.hasSkill('XK_jiuyangshengong')) return 10;
										if (target.hasSkill('XK_xiaozhoutian') || target.hasSkill('XK_dazhoutian')) return 2;
										if (lib.config.XK_mijigailv) {
											if (target.getXKBuff('XK_debuff').length > 1 || target.checkHp(0.5, 'unequal')) return 2;
										} else {
											if (target.hasSkillTag('XK_debuff') || target.isDamaged()) return 2;
										}
										return 0;
									},
								},
							},
						},
						XK_youmingmiji: {
							chongzhu(event, player) {
								return lib.config.XK_mijigailv ? true : false;
							},
							fullskin: true,
							image: 'ext:侠客风云传/image/XK_youmingmiji.png',
							type: 'XK_miji',
							toself: true,
							enable(event, player) {
								return true;
							},
							selectTarget: -1,
							modTarget: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								player.removeBuff('XK_debuff', 1, 1, true, false);
								player.recover();
								('step 1');
								player.$fullscreenpop('幽冥十三式习得!', 'fire');
								player.learnSkill('XK_youmingshisanshi', 'XK_zhaoshi');
							},
							contentAfter() {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.position(i, true) == 'o') {
											game.cardsGotoSpecial([i]);
											game.log(i, '秘籍从此局游戏中移除.');
										}
									}
							},
							ai: {
								order: 1,
								basic: {
									useful: 6,
									value: 7,
								},
								result: {
									target(player, target) {
										if (target.hasSkill('XK_jietou')) return 2;
										else if (target.hasSkill('XK_yuanying')) return 0;
										if (lib.config.XK_mijigailv) {
											if (target.getXKBuff('XK_debuff').length > 1 || target.checkHp(0.5, 'unequal')) return 2;
										} else {
											if (target.hasSkillTag('XK_debuff') || target.isDamaged()) return 2;
										}
										return 0;
									},
								},
							},
						},
						XK_lingbomiji: {
							chongzhu(event, player) {
								return lib.config.XK_mijigailv ? true : false;
							},
							fullskin: true,
							image: 'ext:侠客风云传/image/XK_lingbomiji.png',
							type: 'XK_miji',
							toself: true,
							enable(event, player) {
								return true;
							},
							selectTarget: -1,
							modTarget: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								player.removeBuff('XK_debuff', 1, 1, true, false);
								player.recover();
								('step 1');
								if (player.hasSkill('XK_lingboweibu') && player.name == 'XK_dalishizi') {
									player.$fullscreenpop('凌波微步精通!', 'fire');
									player.storage.XK_lingbomiji_mark = true;
									player.removeSkill('XK_lingboweibu');
									player.addSkill('XK_lingboweibuex');
								} else {
									player.$fullscreenpop('凌波微步习得!', 'fire');
									player.learnSkill('XK_lingboweibu', 'XK_neigong');
								}
							},
							contentAfter() {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.position(i, true) == 'o') {
											game.cardsGotoSpecial([i]);
											game.log(i, '秘籍从此局游戏中移除.');
										}
									}
							},
							ai: {
								order: 1,
								basic: {
									useful: 6,
									value: 6.5,
								},
								result: {
									target(player, target) {
										if (target.hasSkill('XK_xiaozhoutian') || (target.name == 'XK_lingboweibu' && target.hasSkill('XK_dalishizi'))) return 10;
										if (target.countCards('h', 'XK_liumaimiji')) return 10;
										if (lib.config.XK_mijigailv) {
											if (target.getXKBuff('XK_debuff').length > 1) return 2;
										} else {
											if (target.hasSkillTag('XK_debuff')) return 2;
										}
										return 0;
									},
								},
							},
						},
						XK_liumaimiji: {
							chongzhu(event, player) {
								return lib.config.XK_mijigailv ? true : false;
							},
							fullskin: true,
							image: 'ext:侠客风云传/image/XK_liumaimiji.png',
							type: 'XK_miji',
							toself: true,
							enable(event, player) {
								return true;
							},
							selectTarget: -1,
							modTarget: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								player.removeBuff('XK_debuff', 1, 1, true, false);
								player.recover();
								('step 1');
								if (player.hasSkill('XK_liumaishenjian') && player.name == 'XK_dalishizi') {
									player.$fullscreenpop('六脉神剑精通!', 'fire');
									player.storage.XK_liumaimiji_mark = true;
									player.removeSkill('XK_liumaishenjian');
									player.addSkill('XK_liumaishenjianex');
								} else {
									player.$fullscreenpop('六脉神剑习得!', 'fire');
									player.learnSkill('XK_liumaishenjian', 'XK_zhaoshi');
								}
							},
							contentAfter() {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.position(i, true) == 'o') {
											game.cardsGotoSpecial([i]);
											game.log(i, '秘籍从此局游戏中移除.');
										}
									}
							},
							ai: {
								order: 1,
								basic: {
									useful: 6,
									value: 7.5,
								},
								result: {
									target(player, target) {
										if (target.hasSkill('XK_jietou') || target.hasSkill('XK_lingboweibu') || (target.name == 'XK_dalishizi' && target.hasSkill('XK_liumaishenjian'))) return 10;
										if (lib.config.XK_mijigailv) {
											if (target.getXKBuff('XK_debuff').length > 1 || target.checkHp(0.5, 'unequal')) return 2;
											return Math.max(0, game.players.length - 4);
										} else {
											if (target.hasSkillTag('XK_debuff') || target.isDamaged()) return 2;
											return Math.max(0, game.players.length - 3);
										}
									},
								},
							},
						},
						XK_sashihui: {
							fullskin: true,
							image: 'ext:侠客风云传/image/XK_sashihui.png',
							fullskin: true,
							type: 'trick',
							enable: true,
							range: { global: 1 },
							selectTarget: 1,
							filterTarget(card, player, target) {
								return target != player;
							},
							content() {
								target.addBuff('XK_mumang', 2, player);
							},
							ai: {
								order: 1,
								basic: {
									useful: 4.5,
									value: 5,
								},
								result: {
									target(player, target) {
										return -2;
									},
								},
							},
						},
						XK_zuoyoukaigong: {
							fullskin: true,
							image: 'ext:侠客风云传/image/XK_zuoyoukaigong.png',
							fullskin: true,
							type: 'trick',
							enable: true,
							selectTarget: -1,
							toself: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							modTarget: true,
							content() {
								player.addBuff('XK_zuoyou', 1, player);
							},
							ai: {
								basic: {
									order: 10,
									useful: 4.5,
									value: 9.2,
								},
								result: {
									target(player, target) {
										var num = 0;
										if (target.countCards('h', { name: ['wuzhong', 'guohe', 'shunshou'] })) num += 2;
										if (target.hasUsableCard('sha')) num++;
										return num;
									},
								},
							},
						},
						XK_qinglongsan: {
							fullskin: true,
							image: 'ext:侠客风云传/image/XK_qinglongsan.png',
							type: 'XK_yaopin',
							toself: true,
							enable(event, player) {
								return true;
							},
							selectTarget: -1,
							modTarget: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								player.addBuff('XK_qinglong', 1, player);
							},
							ai: {
								basic: {
									useful: 8,
									value: 7,
									order: 9.5,
								},
								result: {
									target(player, target) {
										if (target.hasUsableCard('sha')) return 1;
										return 0;
									},
								},
							},
						},
						XK_jiuhuayulu: {
							fullskin: true,
							image: 'ext:侠客风云传/image/XK_jiuhuayulu.png',
							type: 'XK_yaopin',
							toself: true,
							enable(event, player) {
								return true;
							},
							selectTarget: -1,
							modTarget: true,
							filterTarget(card, player, target) {
								return target == player && (target.hasSkillTag('XK_debuff') || target.isDamaged());
							},
							content() {
								if (player.isDamaged()) player.recover();
								if (player.hasSkillTag('XK_debuff')) player.removeBuff('XK_debuff', 1, 2, false, false);
							},
							ai: {
								basic: {
									useful: 6,
									value: 9,
									order: 7,
								},
								result: {
									target(player, target) {
										var num = 0;
										if (target.hasSkillTag('XK_debuff')) num++;
										if (target.isDamaged()) num++;
										return num;
									},
								},
							},
						},
						XK_fulingwushou: {
							fullskin: true,
							image: 'ext:侠客风云传/image/XK_fulingwushou.png',
							type: 'XK_yaopin',
							toself: true,
							enable(event, player) {
								return true;
							},
							selectTarget: -1,
							modTarget: true,
							filterTarget(card, player, target) {
								return target == player && target.hasSkillTag('XK_debuff');
							},
							chongzhu: true,
							content() {
								player.removeBuff('XK_debuff', 1, 1, false, false);
							},
							ai: {
								basic: {
									useful: 4,
									value: 6,
									order: 7,
								},
								result: {
									target(player, target) {
										if (target.hasSkillTag('XK_debuff')) return 2;
										return 0;
									},
								},
							},
						},
						XK_lihuoxuanbing: {
							image: 'ext:侠客风云传/image/XK_lihuoxuanbing.png',
							fullskin: true,
							type: 'equip',
							subtype: 'equip1',
							distance: {
								attackFrom: -4,
							},
							onLose() {
								delete player.storage.XK_lihuoxuanbingskill;
								player.unmarkSkill('XK_lihuoxuanbingskill');
							},
							ai: {
								basic: {
									equipValue: 6.5,
								},
							},
							skills: ['XK_lihuoxuanbingskill'],
						},
						XK_fengmozhang: {
							image: 'ext:侠客风云传/image/XK_fengmozhang.png',
							fullskin: true,
							type: 'equip',
							subtype: 'equip1',
							distance: {
								attackFrom: -3,
							},
							ai: {
								basic: {
									equipValue: 6,
								},
							},
							skills: ['XK_fengmozhangskill'],
						},
						XK_hubulongxing: {
							image: 'ext:侠客风云传/image/XK_hubulongxing.png',
							fullskin: true,
							type: 'equip',
							subtype: 'equip1',
							ai: {
								basic: {
									equipValue: 6,
								},
							},
							skills: ['XK_hubulongxingskill'],
						},
						XK_xuantieshoutao: {
							image: 'ext:侠客风云传/image/XK_xuantieshoutao.png',
							fullskin: true,
							type: 'equip',
							subtype: 'equip1',
							distance: {
								attackFrom: -1,
							},
							ai: {
								basic: {
									equipValue(card, player) {
										if (player.hasSkillTag('XK_shabonus')) return 9.5;
										if (player.hasSkillTag('damageBonus')) return 4.5;
										return 1.5;
									},
								},
							},
							skills: ['XK_xuantieskill'],
						},
						XK_aotianshenjian: {
							image: 'ext:侠客风云传/image/XK_aotianshenjian.png',
							fullskin: true,
							type: 'equip',
							subtype: 'equip1',
							distance: {
								attackFrom: -1,
							},
							ai: {
								basic: {
									equipValue: 8.5,
								},
							},
							skills: ['XK_aotianshenjianskill'],
						},
						XK_shidu: {
							fullskin: true,
							image: 'ext:侠客风云传/image/XK_shidu.png',
							type: 'trick',
							enable: true,
							range: { attack: 1 },
							selectTarget: 1,
							filterTarget(card, player, target) {
								return player != target;
							},
							content() {
								'step 0';
								target
									.chooseToDiscard('h', '请弃置1张【桃】,否则获得【中毒】2回合', function (card) {
										return card.name == 'tao';
									})
									.set('ai', function (card) {
										return true;
									});
								('step 1');
								if (!result.bool) {
									target.addBuff('XK_zhongdu', 2, player);
								}
							},
							ai: {
								basic: {
									useful: 6,
									value: 7,
								},
								order: 8,
								result: {
									target(player, target) {
										if (target.hasSkill('XK_zhongdu') || target.hasSkillTag('XK_nozhongdu')) return 0;
										return -2;
									},
								},
							},
						},
						XK_shangyao: {
							image: 'ext:侠客风云传/image/XK_shangyao.png',
							fullskin: true,
							type: 'equip',
							subtype: 'equip1',
							distance: {
								attackFrom: -2,
							},
							ai: {
								basic: {
									equipValue: 4.5,
								},
							},
							skills: ['XK_shangyaoskill'],
						},
						XK_taihuang: {
							image: 'ext:侠客风云传/image/XK_taihuang.png',
							fullskin: true,
							type: 'equip',
							subtype: 'equip1',
							distance: {
								attackFrom: -2,
							},
							ai: {
								basic: {
									equipValue: 7.5,
								},
							},
							skills: ['XK_taihuangskill'],
						},
						XK_ruanweijia: {
							image: 'ext:侠客风云传/image/XK_ruanweijia.png',
							fullskin: true,
							type: 'equip',
							subtype: 'equip2',
							ai: {
								basic: {
									equipValue: 6,
								},
							},
							skills: ['XK_ruanweijiaskill'],
						},
						XK_pilibaojia: {
							image: 'ext:侠客风云传/image/XK_pilibaojia.png',
							fullskin: true,
							type: 'equip',
							subtype: 'equip2',
							onEquip() {
								player.gainMaxHp(2);
								player.recover(2);
							},
							onLose() {
								player.loseMaxHp(2);
								player.update();
							},
							filterLose(card, player) {
								if (player.hasSkillTag('unequip2')) return false;
								return true;
							},
							tag: {
								recover: 1,
							},
							ai: {
								order: 9.5,
								basic: {
									equipValue: 9,
								},
							},
						},
						XK_jincanbaojia: {
							image: 'ext:侠客风云传/image/XK_jincanbaojia.png',
							fullskin: true,
							type: 'equip',
							subtype: 'equip2',
							ai: {
								equipValue(card, player) {
									if (player.hasSkillTag('maixie') && player.hp > 1) return 0;
									if (player.hasSkillTag('noDirectDamage')) return 10;
									if (get.damageEffect(player, player, player, 'fire') >= 0) return 10;
									if (get.damageEffect(player, player, player, 'thunder') >= 0) return 10;
									var num =
										3 -
										game.countPlayer(function (current) {
											return get.attitude(current, player) < 0;
										});
									if (player.hp == 1) num += 4;
									if (player.hp == 2) num += 2;
									if (player.hp == 3) num--;
									if (player.hp > 3) num -= 2;
									return num;
								},
								basic: {
									equipValue: 6,
								},
							},
							skills: ['XK_jincanbaojiaskill'],
						},
						XK_wulintongjian: {
							image: 'ext:侠客风云传/image/XK_wulintongjian.png',
							fullskin: true,
							type: 'equip',
							subtype: 'equip5',
							skills: ['XK_tongjianskill'],
							ai: {
								basic: {
									equipValue: 9.5,
								},
							},
						},
						XK_yemingzhu: {
							image: 'ext:侠客风云传/image/XK_yemingzhu.png',
							fullskin: true,
							type: 'equip',
							subtype: 'equip5',
							skills: ['XK_yemingzhuskill'],
							ai: {
								basic: {
									equipValue: 7,
								},
							},
						},
						XK_shennongbidu: {
							image: 'ext:侠客风云传/image/XK_shennongbidu.png',
							fullskin: true,
							type: 'equip',
							subtype: 'equip5',
							skills: ['XK_shennongbiduskill'],
							ai: {
								basic: {
									equipValue: 6.5,
								},
							},
						},
						XK_wusejia: {
							image: 'ext:侠客风云传/image/XK_wusejia.png',
							fullskin: true,
							type: 'equip',
							subtype: 'equip2',
							onLose() {
								player.draw(2);
							},
							ai: {
								order: 9.5,
								equipValue(card, player) {
									if (player.countCards('h', 'baiyin')) return 7;
									return 1;
								},
								basic: {
									equipValue: 6,
								},
							},
							skills: ['XK_wusejiaskill'],
						},
						XK_jinghongxue: {
							image: 'ext:侠客风云传/image/XK_jinghongxue.png',
							fullskin: true,
							type: 'equip',
							subtype: 'equip4',
							distance: {
								globalFrom: -1,
							},
							skills: ['XK_jinghongskill'],
							ai: {
								basic: {
									equipValue: 5,
								},
							},
						},
						XK_yinhufeixu: {
							image: 'ext:侠客风云传/image/XK_yinhufeixu.png',
							fullskin: true,
							type: 'equip',
							subtype: 'equip3',
							distance: {
								globalTo: 1,
							},
							skills: ['XK_yinhuskill'],
							ai: {
								basic: {
									equipValue: 7.5,
								},
							},
						},
					}, //卡牌
					skill: {
						//卡牌的技能
						XK_jinghongskill: {
							equipSkill: true,
							trigger: {
								player: ['shaBefore'],
							},
							firstDo: true,
							_priority: 99,
							filter(event, player) {
								return event.target.hasSkill('XK_bati') || event.target.hasSkill('XK_qidun') || event.target.hasSkill('XK_dudun');
							},
							forced: true,
							content() {
								if (trigger.target.hasSkill('XK_bati')) {
									trigger.target.deleteBuff('XK_bati');
								}
								if (trigger.target.hasSkill('XK_qidun')) {
									trigger.target.deleteBuff('XK_qidun');
								}
								if (trigger.target.hasSkill('XK_dudun')) {
									trigger.target.deleteBuff('XK_dudun');
								}
							},
							ai: {
								XK_podun: true,
							},
						},
						XK_yinhuskill: {
							equipSkill: true,
							trigger: {
								player: 'addBuffBegin',
							},
							filter(event, player) {
								return event.skill == 'XK_yunxuan' || event.skill == 'XK_dianxue';
							},
							_priority: 98,
							forced: true,
							content() {
								trigger.cancel();
							},
						},
						XK_taijituskill: {
							equipSkill: true,
							trigger: { player: 'shaMiss' },
							check(event, player) {
								return get.attitude(player, event.player) <= 0;
							},
							prompt2(event, player) {
								return '是否进行1次判定？若结果为红,若结果为红,此杀依然造成伤害;否则,此杀不计次数.';
							},
							filter(event, player) {
								return event.target.isAlive();
							},
							content() {
								'step 0';
								player.judge('太极图', function (card) {
									if (get.color(card) == 'red') return 3;
									return -3;
								});
								('step 1');
								if (result.bool == true) {
									trigger.untrigger();
									trigger.trigger('shaHit');
									trigger._result.bool = false;
									trigger._result.result = null;
								} else {
									if (player.stat[player.stat.length - 1].card.sha > 0) {
										player.stat[player.stat.length - 1].card.sha--;
									}
								}
							},
						},
						XK_jiuxiaoskill: {
							equipSkill: true,
							trigger: {
								player: 'addBuffBegin',
							},
							filter(event, player) {
								var info = lib.skill[event.skill];
								return info.ai && info.ai['XK_buff'];
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget('【九霄环佩】:令攻击范围内的一名其他角色也获得【' + get.translation(trigger.skill) + '】' + trigger.num + '回合.', 1, false, function (card, player, target) {
										return target != player && player.inRange(target);
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										return get.attitude(player, target);
									});
								('step 1');
								if (result.targets?.length) {
									result.targets[0].addBuff(trigger.skill, trigger.num, player);
								}
							},
						},
						XK_lihuoxuanbingskill: {
							equipSkill: true,
							init(player) {
								player.storage.XK_lihuoxuanbingskill = true;
								player.unmarkSkill('XK_lihuoxuanbingskill2');
								player.markSkill('XK_lihuoxuanbingskill1');
							},
							forced: true,
							trigger: {
								source: ['damageEnd'],
							},
							_priority: -1,
							filter(event, player) {
								if (!event.notLink()) return false;
								if (player.storage.XK_lihuoxuanbingskill == true) {
									return event.card && event.card.name == 'sha';
								} else if (player.storage.XK_lihuoxuanbingskill == false) {
									return event.card && get.type(event.card) == 'trick';
								}
								return false;
							},
							content() {
								if (player.storage.XK_lihuoxuanbingskill == true) {
									player.unmarkSkill('XK_lihuoxuanbingskill1');
									player.markSkill('XK_lihuoxuanbingskill2');
									player.storage.XK_lihuoxuanbingskill = false;
									trigger.player.addBuff('XK_lihuobuff', 1, player);
								} else if (player.storage.XK_lihuoxuanbingskill == false) {
									player.unmarkSkill('XK_lihuoxuanbingskill2');
									player.markSkill('XK_lihuoxuanbingskill1');
									player.storage.XK_lihuoxuanbingskill = true;
									trigger.player.addBuff('XK_xuanbing', 2, player);
								}
							},
						},
						XK_lihuoxuanbingskill1: {
							marktext: '火',
							intro: {
								content(storage, player, skill) {
									return '离火:你的杀造成伤害后,令目标获得【离火】1回合';
								},
							},
						},
						XK_lihuoxuanbingskill2: {
							intro: {
								content(storage, player, skill) {
									return '玄冰:你的锦囊牌造成伤害后,令目标获得【玄冰】2回合';
								},
							},
							marktext: '冰',
						},
						XK_fengmozhangskill: {
							equipSkill: true,
							trigger: {
								source: 'damageBegin',
							},
							_priority: 12,
							filter(event, player) {
								if (!event.player || !event.player.isAlive()) return false;
								return event.card && event.card.name == 'sha' && event.notLink();
							},
							forced: true,
							content() {
								trigger.num++;
								trigger.player.addBuff('XK_sangxin', 1, player);
							},
							ai: {
								damageBonus: true,
							},
						},
						XK_hubulongxingskill: {
							equipSkill: true,
							mod: {
								globalFrom(from, to) {
									return -Infinity;
								},
							},
						},
						XK_xuantieskill: {
							equipSkill: true,
							trigger: {
								source: 'damageEnd',
							},
							filter(event, player) {
								return event.card && event.card.name == 'sha' && event.notLink() && event.num >= 2;
							},
							_priority: 99,
							forced: true,
							content() {
								trigger.player.addBuff('XK_neishang', 2, player);
							},
							ai: {
								XK_wushi: true,
							},
						},
						XK_aotianshenjianskill: {
							equipSkill: true,
							trigger: {
								source: 'damageEnd',
							},
							filter(event, player) {
								return event.card && event.card.name == 'sha' && event.notLink();
							},
							forced: true,
							content() {
								var num = [1, 2].randomGet();
								var bt = ['XK_zhongshang', 'XK_kongju', 'XK_yunxuan', 'XK_duanjin', 'XK_zhongdu', 'XK_neishang'];
								bt.sort(lib.sort.random);
								for (var i = 0; i < num; i++) {
									var temp = [1, 2].randomGet();
									trigger.player.addBuff(bt[i], temp, player);
								}
							},
						},
						XK_shangyaoskill: {
							equipSkill: true,
							trigger: {
								source: 'damageBegin',
							},
							filter(event, player) {
								return event.card && event.card.name == 'sha' && event.notLink() && event.player.hp > player.hp;
							},
							forced: true,
							content() {
								trigger.num++;
							},
							ai: {
								damageBonus: true,
							},
						},
						XK_taihuangskill: {
							equipSkill: true,
							trigger: { player: 'damageEnd' },
							filter(event, player) {
								if (event.card && (event.card.name == 'sha' || event.card.name == 'juedou')) {
									return get.itemtype(event.cards) == 'cards' && get.position(event.cards[0], true) == 'o';
								}
							},
							content() {
								player.gain(trigger.cards, 'gain2');
							},
							ai: {
								maixie: true,
								maixie_hp: true,
								effect: {
									target(card, player, target) {
										if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
										if (get.tag(card, 'damage')) return [1, 0.55];
									},
								},
							},
						},
						XK_ruanweijiaskill: {
							equipSkill: true,
							trigger: {
								player: 'damageEnd',
							},
							forced: true,
							filter(event, player) {
								if (player.hasSkillTag('unequip2')) return false;
								if (
									event.source &&
									event.source.hasSkillTag('unequip', false, {
										name: event.card ? event.card.name : null,
										target: player,
										card: event.card,
									})
								)
									return false;
								if (!player.isAlive()) return false;
								if (!event.source) return false;
								return event.card && event.num > 0;
							},
							content() {
								'step 0';
								if (trigger.num == 1) {
									if (Math.random() > 0.5) trigger.source.addBuff('XK_zhongdu', 2, player);
								} else trigger.source.addBuff('XK_zhongdu', 2, player);
							},
							ai: {
								maixie_defend: true,
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'damage')) return 0.7;
									},
								},
							},
						},
						XK_jincanbaojiaskill: {
							equipSkill: true,
							trigger: {
								player: 'damageBegin',
							},
							filter(event, player) {
								if (player.hasSkillTag('unequip2')) return false;
								if (
									event.source &&
									event.source.hasSkillTag('unequip', false, {
										name: event.card ? event.card.name : null,
										target: player,
										card: event.card,
									})
								)
									return false;
								return event.num > 0;
							},
							_priority: 99,
							forced: true,
							content() {
								if (!trigger.nature) {
									trigger.num--;
								} else if (trigger.nature == 'thunder') {
									trigger.num++;
								}
							},
							ai: {
								nodamage: true,
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'damage')) {
											if (!get.tag(card, 'thunderDamage') || !get.tag(card, 'fireDamage')) return 0.3;
											return 1.5;
										}
									},
								},
							},
						},
						XK_tongjianskill: {
							equipSkill: true,
							mod: {
								maxHandcard(player, num) {
									return num + 1;
								},
							},
							trigger: { player: 'phaseDrawBegin2' },
							forced: true,
							_priority: 2,
							filter(event, player) {
								return !event.numFixed;
							},
							content() {
								trigger.num++;
							},
						},
						XK_yemingzhuskill: {
							equipSkill: true,
							trigger: {
								source: 'addBuffBegin',
							},
							filter(event, player) {
								var info = lib.skill[event.skill];
								return info.ai['XK_debuff'];
							},
							_priority: 98,
							forced: true,
							content() {
								trigger.num++;
							},
						},
						XK_shennongbiduskill: {
							equipSkill: true,
							trigger: {
								player: 'addBuffBegin',
							},
							filter(event, player) {
								return event.skill == 'XK_zhongdu' || event.skill == 'XK_judu';
							},
							_priority: 96,
							forced: true,
							content() {
								trigger.cancel();
							},
							ai: {
								XK_nozhongdu: true,
							},
						},
						XK_wusejiaskill: {
							equipSkill: true,
							trigger: {
								player: 'addBuffBegin',
							},
							filter(event, player) {
								if (player.hasSkillTag('unequip2')) return false;
								if (event.source && event.source.hasSkillTag('unequip')) return false;
								return event.skill == 'XK_neishang';
							},
							_priority: 97,
							forced: true,
							content() {
								trigger.cancel();
							},
						},
					}, //卡牌的技能
					cardType: {
						XK_yaopin: 0.3,
						XK_miji: 0.3,
					},
					translate: {
						XK_jinghongxue: '惊鸿靴',
						XK_jinghongxue_info: "锁定技,你使用杀指定目标时,移除其<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_bati');\">【霸体】</a><a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_qidun');\">【气盾】</a><a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_dudun');\">【毒盾】</a>状态.",
						XK_jinghongskill: '惊鸿靴',
						XK_jinghongskill_info: '锁定技,你使用杀指定目标时,移除其【霸体】【气盾】【毒盾】状态.',
						XK_yinhufeixu: '银狐飞絮',
						XK_yinhufeixu_info: "锁定技,免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_yunxuan');\">【晕眩】</a><a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_dianxue');\">【点穴】</a>状态.",
						XK_yinhuskill: '银狐飞絮',
						XK_yinhuskill_info: '锁定技,免疫【晕眩】【点穴】状态.',
						XK_mingyumiji: '明玉功',
						XK_mingyumiji_info: "出牌阶段对自身使用,移除所有异常状态并回复1点体力,替换功体为<a style='color: #F0F' href=\"javascript:window.BuffIntro('XK_mingyugong');\">【明玉功】</a>,并从此局游戏移除此牌.",
						XK_feidaomiji: '小李飞刀',
						XK_feidaomiji_info: "出牌阶段对自身使用,移除所有异常状态并回复1点体力,替换招式为<a style='color: #F0F' href=\"javascript:window.BuffIntro('XK_xiaolifeidao');\">【小李飞刀】</a>,并从此局游戏移除此牌.",
						XK_taixuajingmiji: '白首太玄经',
						XK_taixuajingmiji_info: "出牌阶段对自身使用,移除所有异常状态并回复1点体力,替换功体为<a style='color: #F0F' href=\"javascript:window.BuffIntro('XK_baishoutaixuan');\">【白首太玄经】</a>,并从此局游戏移除此牌.",
						XK_dagongmiji: '打工指法',
						XK_dagongmiji_info: "出牌阶段对自身使用,移除所有异常状态并回复1点体力,替换招式为<a style='color: #F0F' href=\"javascript:window.BuffIntro('XK_dagongzhifa');\">【打工指法】</a>,并从此局游戏移除此牌.",
						XK_fozumiji: '佛祖拈花',
						XK_fozumiji_info: "出牌阶段对自身使用,移除所有异常状态并回复1点体力,替换招式为<a style='color: #F0F' href=\"javascript:window.BuffIntro('XK_fozunianhua');\">【佛祖拈花】</a>,并从此局游戏移除此牌.",
						XK_wudumiji: '五毒赤焰功',
						XK_wudumiji_info: "出牌阶段对自身使用,移除所有异常状态并回复1点体力,替换功体为<a style='color: #F0F' href=\"javascript:window.BuffIntro('XK_wuduchiyan');\">【五毒赤焰功】</a>,并从此局游戏移除此牌.",
						XK_fangxuanlingmiji: '房玄龄碑',
						XK_fangxuanlingmiji_info: "出牌阶段对自身使用,移除所有异常状态并回复1点体力,替换招式为<a style='color: #F0F' href=\"javascript:window.BuffIntro('XK_fangxuanlingbei');\">【房玄龄碑】</a>,并从此局游戏移除此牌.",
						XK_xiaowuxiangmiji: '小无相功',
						XK_xiaowuxiangmiji_info: "出牌阶段对自身使用,移除所有异常状态并回复1点体力,替换功体为<a style='color: #F0F' href=\"javascript:window.BuffIntro('XK_xiaowuxianggong');\">【小无相功】</a>,并从此局游戏移除此牌.",
						XK_wujimiji: '无极刀法',
						XK_wujimiji_info: "出牌阶段对自身使用,移除所有异常状态并回复1点体力,替换招式为<a style='color: #F0F' href=\"javascript:window.BuffIntro('XK_wujidaofa');\">【无极刀法】</a>,并从此局游戏移除此牌.",
						XK_longxiangmiji: '龙象般若功',
						XK_longxiangmiji_info: "出牌阶段对自身使用,移除所有异常状态并回复1点体力,替换功体为<a style='color: #F0F' href=\"javascript:window.BuffIntro('XK_longxiangbore');\">【龙象般若功】</a>,并从此局游戏移除此牌.",
						XK_taijimiji: '太极拳',
						XK_taijimiji_info: "出牌阶段对自身使用,移除所有异常状态并回复1点体力,替换招式为<a style='color: #F0F' href=\"javascript:window.BuffIntro('XK_taijiquan');\">【太极拳】</a>,并从此局游戏移除此牌.",
						XK_xisuimiji: '洗髓经',
						XK_xisuimiji_info: "出牌阶段对自身使用,移除所有异常状态并回复1点体力,替换功体为<a style='color: #F0F' href=\"javascript:window.BuffIntro('XK_xisuijing');\">【洗髓经】</a>,并从此局游戏移除此牌.",
						XK_bawangmiji: '唐家霸王枪',
						XK_bawangmiji_info: "出牌阶段对自身使用,移除所有异常状态并回复1点体力,替换招式为<a style='color: #F0F' href=\"javascript:window.BuffIntro('XK_bawangqiang');\">【唐家霸王枪】</a>,并从此局游戏移除此牌.",
						XK_dongfangmiji: '东方宝典',
						XK_dongfangmiji_info: "出牌阶段对自身使用,移除所有异常状态并回复1点体力,替换功体为<a style='color: #F0F' href=\"javascript:window.BuffIntro('XK_dongfangbaodian');\">【东方宝典】</a>,并从此局游戏移除此牌.",
						XK_fengshenmiji: '风神腿法',
						XK_fengshenmiji_info: "出牌阶段对自身使用,移除所有异常状态并回复1点体力,替换招式为<a style='color: #F0F' href=\"javascript:window.BuffIntro('XK_fengshentuifa');\">【风神腿法】</a>,并从此局游戏移除此牌.",
						XK_wudimiji: '无敌极限流',
						XK_wudimiji_info: "出牌阶段对自身使用,移除所有异常状态并回复1点体力,替换招式为<a style='color: #F0F' href=\"javascript:window.BuffIntro('XK_wudijixianliu');\">【无敌极限流】</a>,并从此局游戏移除此牌.",
						XK_wuyagumiji: '日月无相功',
						XK_wuyagumiji_info: "出牌阶段对自身使用,移除所有异常状态并回复1点体力,替换功体为<a style='color: #F0F' href=\"javascript:window.BuffIntro('XK_wuyagushenggong');\">【日月无相功】</a>,并从此局游戏移除此牌.",
						XK_dukangjimiji: '杜康鸡神功',
						XK_dukangjimiji_info: "出牌阶段对自身使用,移除所有异常状态并回复1点体力,替换招式为<a style='color: #F0F' href=\"javascript:window.BuffIntro('XK_dukangjishengong');\">【杜康鸡神功】</a>,并从此局游戏移除此牌.",
						XK_weiwomiji: '唯我独尊功',
						XK_weiwomiji_info: "出牌阶段对自身使用,移除所有异常状态并回复1点体力,替换功体为<a style='color: #F0F' href=\"javascript:window.BuffIntro('XK_weiwoduzungong');\">【唯我独尊功】</a>,并从此局游戏移除此牌.",
						XK_fenghuamiji: '风花雪月曲',
						XK_fenghuamiji_info: "出牌阶段对自身使用,移除所有异常状态并回复1点体力,替换招式为<a style='color: #F0F' href=\"javascript:window.BuffIntro('XK_fenghuaxueyue');\">【风花雪月曲】</a>,并从此局游戏移除此牌.",
						XK_mantianmiji: '满天流星',
						XK_mantianmiji_info: "出牌阶段对自身使用,移除所有异常状态并回复1点体力,替换招式为<a style='color: #F0F' href=\"javascript:window.BuffIntro('XK_mantianliuxing');\">【满天流星】</a>,并从此局游戏移除此牌.",
						XK_dashipomiji: '大湿婆密咒',
						XK_dashipomiji_info: "出牌阶段对自身使用,移除所有异常状态并回复1点体力,替换功体为<a style='color: #F0F' href=\"javascript:window.BuffIntro('XK_dashipomizhou');\">【大湿婆密咒】</a>,并从此局游戏移除此牌.",
						XK_xixingmiji: '吸星大法',
						XK_xixingmiji_info: "出牌阶段对自身使用,移除所有异常状态并回复1点体力,替换功体为<a style='color: #F0F' href=\"javascript:window.BuffIntro('XK_xixingdafa');\">【吸星大法】</a>,并从此局游戏移除此牌.",
						XK_taijitu: '太极图',
						XK_taijitu_info: '当你的杀被抵消时,可进行1次判定,若结果为红,此杀依然造成伤害;否则,此杀不计次数.',
						XK_taijituskill: '太极',
						XK_taijituskill_info: '当你的杀被抵消时,可进行1次判定,若结果为红,此杀依然造成伤害;否则,此杀不计次数.',
						XK_jiuxiaohuanpei: '九霄环佩',
						XK_jiuxiaohuanpei_info: '当你获得增益状态时,可令攻击范围内的一名其他角色同样获得此状态.',
						XK_jiuxiaoskill: '九霄',
						XK_jiuxiaoskill_info: '当你获得增益状态时,可令攻击范围内的一名其他角色同样获得此状态.',
						XK_mijibaoxia: '宝匣•天',
						XK_mijibaoxia_info: '出牌阶段对自身使用,随机获得一本选择类别的秘籍(此局游戏中未出现过),并从此局游戏移除此牌.',
						XK_mijibaoxiadi: '宝匣•地',
						XK_mijibaoxiadi_info: '出牌阶段对自身使用,随机获得一本此局游戏中未出现过的秘籍.',
						XK_jiuyinmiji: '九阴总纲',
						XK_jiuyinmiji_info: "出牌阶段对自身使用,移除所有异常状态并回复1点体力,替换功体为<a style='color: #F0F' href=\"javascript:window.BuffIntro('XK_jiuyinzonggang');\">【九阴总纲】</a>,并从此局游戏移除此牌.",
						XK_dugumiji: '独孤九剑',
						XK_dugumiji_info: "出牌阶段对自身使用,移除所有异常状态并回复1点体力,替换招式为<a style='color: #F0F' href=\"javascript:window.BuffIntro('XK_dugujiujian');\">【独孤九剑】</a>,并从此局游戏移除此牌.",
						XK_jiuyangmiji: '九阳神功',
						XK_jiuyangmiji_info: "出牌阶段对自身使用,移除所有异常状态并回复1点体力,替换功体为<a style='color: #F0F' href=\"javascript:window.BuffIntro('XK_jiuyangshengong');\">【九阳神功】</a>,并从此局游戏移除此牌.",
						XK_youmingmiji: '幽冥十三式',
						XK_youmingmiji_info: "出牌阶段对自身使用,移除所有异常状态并回复1点体力,替换招式为<a style='color: #F0F' href=\"javascript:window.BuffIntro('XK_youmingshisanshi');\">【幽冥十三式】</a>,并从此局游戏移除此牌.",
						XK_lingbomiji: '凌波微步',
						XK_lingbomiji_info: "出牌阶段对自身使用,移除所有异常状态并回复1点体力,替换功体为<a style='color: #F0F' href=\"javascript:window.BuffIntro('XK_lingboweibu');\">【凌波微步】</a>,并从此局游戏移除此牌.",
						XK_liumaimiji: '六脉神剑',
						XK_liumaimiji_info: "出牌阶段对自身使用,移除所有异常状态并回复1点体力,替换招式为<a style='color: #F0F' href=\"javascript:window.BuffIntro('XK_liumaishenjian');\">【六脉神剑】</a>,并从此局游戏移除此牌.",
						XK_sashihui: '撒石灰',
						XK_sashihui_info: "出牌阶段,与你距离为1的一名角色使用,令其获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_mumang');\">【目盲】</a>2回合.",
						XK_zuoyoukaigong: '左右开弓',
						XK_zuoyoukaigong_info: '本回合你使用的下一张基本牌、普通锦囊牌额外结算一次.',
						XK_qinglongsan: '青龙散',
						XK_qinglongsan_info: '出牌阶段对自身使用,本回合你使用的杀无法被闪响应.',
						XK_jiuhuayulu: '九花玉露丸',
						XK_jiuhuayulu_info: '出牌阶段对自身使用,回复1点体力并移除随机1~2项异常状态.',
						XK_fulingwushou: '茯苓首乌丸',
						XK_fulingwushou_info: '出牌阶段对自身使用,移除随机一项异常状态,可重铸.',
						XK_lihuoxuanbing: '离火玄冰镖',
						XK_lihuoxuanbing_info: "转换技,锁定技,1.你的杀造成伤害后,令目标获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_lihuobuff');\">【离火】</a>1回合;2.你的锦囊牌造成伤害后,令目标获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_xuanbing');\">【玄冰】</a>2回合.",
						XK_lihuoxuanbingskill: '冰火',
						XK_lihuoxuanbingskill_info: '转换技,锁定技,1.你的杀造成伤害后,令目标获得【离火】1回合;2.你的锦囊牌造成伤害后,令目标获得【玄冰】2回合.',
						XK_lihuoxuanbingskill1: '离火',
						XK_lihuoxuanbingskill1_info: '',
						XK_lihuoxuanbingskill2: '玄冰',
						XK_lihuoxuanbingskill2_info: '',
						XK_fengmozhang: '疯魔杖',
						XK_fengmozhang_info: "锁定技,你的杀造成的伤害+1,并令目标获得<a style='color: #0000FF' href=\"javascript:window.BuffIntro('XK_sangxin');\">【丧心】</a>1回合.",
						XK_fengmozhangskill: '疯魔',
						XK_fengmozhangskill_info: '锁定技,你的杀造成的伤害+1,并令目标获得【丧心】1回合.',
						XK_hubulongxing: '虎步龙行',
						XK_hubulongxing_info: '锁定技,所有其他角色与你的距离视为1.',
						XK_hubulongxingskill: '虎步',
						XK_hubulongxingskill_info: '锁定技,所有其他角色与你的距离视为1.',
						XK_xuantieshoutao: '玄铁手套',
						XK_xuantieshoutao_info: "锁定技,你使用杀造成不少于2点的伤害后,令目标获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>2回合;你造成【内伤】状态时,无视目标30%体力.",
						XK_xuantieskill: '玄铁',
						XK_xuantieskill_info: '锁定技,你使用杀造成不少于2点的伤害后,令目标获得【内伤】2回合;你造成【内伤】状态时,无视目标30%体力.',
						XK_aotianshenjian: '傲天神剑',
						XK_aotianshenjian_info: "锁定技,你使用杀造成伤害后,令目标随机获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_zhongshang');\">【重伤】</a><a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_kongju');\">【恐惧】</a><a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_yunxuan');\">【晕眩】</a><a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_duanjin');\">【断筋】</a><a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_zhongdu');\">【中毒】</a><a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>中至多2种1~2回合.",
						XK_aotianshenjianskill: '傲天',
						XK_aotianshenjianskill_info: '锁定技,你使用杀造成伤害后,令目标随机获得【重伤】【恐惧】【晕眩】【断筋】【中毒】【内伤】中至多2种1~2回合.',
						XK_shidu: '施毒',
						XK_shidu_info: "出牌阶段,对攻击范围内的一名角色使用,令其弃置1张桃,否则其获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_zhongdu');\">【中毒】</a>2回合.",
						XK_taihuang: '太皇',
						XK_taihuang_info: '你可以获得对你造成伤害的杀和决斗.',
						XK_taihuangskill: '太皇',
						XK_taihuangskill_info: '你可以获得对你造成伤害的杀和决斗.',
						XK_shangyao: '殇瑶',
						XK_shangyao_info: '锁定技,你的杀造成伤害时,若你的体力小于目标,此伤害+1.',
						XK_shangyaoskill: '殇瑶',
						XK_shangyaoskill_info: '锁定技,你的杀造成伤害时,若你的体力小于目标,此伤害+1.',
						XK_ruanweijia: '软猬甲',
						XK_ruanweijia_info: "锁定技,当你受到卡牌造成的伤害后,(50*伤害值)%概率令来源获得<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_zhongdu');\">【中毒】</a>2回合.",
						XK_ruanweijiaskill: '软猬',
						XK_ruanweijiaskill_info: '锁定技,当你受到杀造成的伤害后,(50*伤害值)%概率令来源获得【中毒】2回合.',
						XK_pilibaojia: '霹雳宝甲',
						XK_pilibaojia_info: '锁定技,你装备此防具时,体力上限+2并回复2点体力;你失去此防具时,失去2点体力上限.',
						XK_jincanbaojia: '金蚕宝甲',
						XK_jincanbaojia_info: '锁定技,你受到的的非属性伤害-1,雷属性伤害+1.',
						XK_jincanbaojiaskill: '金蚕',
						XK_jincanbaojiaskill_info: '锁定技,你受到的的非属性伤害-1,雷属性伤害+1.',
						XK_wulintongjian: '武林通鉴',
						XK_wulintongjian_info: '锁定技,摸牌时,你额外摸1张牌,手牌上限+1.',
						XK_tongjianskill: '通鉴',
						XK_tongjianskill_info: '锁定技,摸牌时,你额外摸1张牌,手牌上限+1.',
						XK_yemingzhu: '夜明珠',
						XK_yemingzhu_info: '锁定技,你造成的异常状态持续时间+1.',
						XK_yemingzhuskill: '明珠',
						XK_yemingzhuskill_info: '锁定技,你造成的异常状态持续时间+1.',
						XK_shennongbidu: '神农避毒珠',
						XK_shennongbidu_info: "锁定技,免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_zhongdu');\">【中毒】</a><a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_judu');\">【剧毒】</a>状态.",
						XK_shennongbiduskill: '避毒',
						XK_shennongbiduskill_info: '锁定技,免疫【中毒】【剧毒】状态.',
						XK_wusejia: '五色甲',
						XK_wusejia_info: "锁定技,免疫<a style='color: #FF0000' href=\"javascript:window.BuffIntro('XK_neishang');\">【内伤】</a>状态,当你失去装备区的此牌后,摸2张牌.",
						XK_wusejiaskill: '五色',
						XK_wusejiaskill_info: '锁定技,免疫【内伤】状态,当你失去装备区的此牌后,摸2张牌.',
						XK_yaopin: '药品',
						XK_miji: '秘籍',
					}, //翻译
					list: [
						//牌堆
						['club', 12, 'XK_jiuxiaohuanpei'],
						['heart', 8, 'XK_wusejia'],
						['club', 13, 'XK_shennongbidu'],
						['diamond', 10, 'XK_yemingzhu'],
						['heart', 4, 'XK_wulintongjian'],
						['heart', 7, 'XK_jincanbaojia'],
						['club', 8, 'XK_pilibaojia'],
						['spade', 10, 'XK_taihuang'],
						['diamond', 11, 'XK_shangyao'],
						['diamond', 5, 'XK_shidu'],
						['diamond', 13, 'XK_shidu'],
						['spade', 12, 'XK_shidu'],
						['club', 13, 'XK_ruanweijia'],
						['heart', 4, 'XK_aotianshenjian'],
						['spade', 6, 'XK_xuantieshoutao'],
						['diamond', 5, 'XK_hubulongxing'],
						['diamond', 8, 'XK_fengmozhang'],
						['heart', 1, 'XK_lihuoxuanbing'],
						['heart', 11, 'XK_fulingwushou'],
						['club', 4, 'XK_fulingwushou'],
						['heart', 9, 'XK_fulingwushou'],
						['spade', 3, 'XK_qinglongsan'],
						['diamond', 2, 'XK_zuoyoukaigong'],
						['spade', 1, 'XK_sashihui'],
						['spade', 1, 'XK_mijibaoxia'],
						['club', 13, 'XK_mijibaoxia'],
						['heart', 1, 'XK_mijibaoxia'],
						['diamond', 13, 'XK_mijibaoxiadi'],
						['heart', 7, 'XK_mijibaoxiadi'],
						['club', 7, 'XK_mijibaoxiadi'],
						['spade', 11, 'XK_jinghongxue'],
						['diamond', 2, 'XK_yinhufeixu'],
						['diamond', 2, 'XK_zuoyoukaigong'],
						['diamond', 2, 'XK_zuoyoukaigong'],
						['diamond', 2, 'XK_zuoyoukaigong'],
						['diamond', 2, 'XK_zuoyoukaigong'],
					], //卡牌的花色点数及数量
				};
				lib.translate['XK_card_card_config'] = '侠客风云传';
				lib.config.all.cards.add('XK_card');
				lib.config.cards.add('XK_card');
				return XK_card;
			});
		},
		help: { 侠客风云传: '本扩展角色技能分为【招式】和【功体】两部分,两者极大地决定了角色的强度.【功体】作为一类特殊技能,可以被【内伤】负面状态封印,【内伤】状态的角色无法发动【功体】效果.本扩展中有多种正面、负面buff,不同buff会根据技能的效果持续不同时间,角色回合结束时所有buff的持续时间-1,当持续时间减至0时,buff消失.' },
		config: {
			XK_levelill: {
				name: '小虾米升级',
				init: '1',
				item: { 1: '升级说明', 2: '<li>小虾米共10级,升级解锁招式、功体效果、体力上限.通过击杀敌方获得经验,升级时额外摸2张牌,死亡则当前等级经验清零.', 3: '<li>2级:解锁功体效果【猜心】', 4: '<li>3级:体力上限+1', 5: '<li>4级:功体效果升级:【小周天循环】→【大周天循环】', 6: '<li>5级:解锁招式效果【铁拳无敌】', 7: '<li>6级:体力上限+1', 8: '<li>7级:解锁功体效果【击溃】', 9: '<li>8级:功体效果升级:【大周天循环】→【元婴出世】', 10: '<li>9级:体力上限+1', 10: '<li>10级:解锁招式效果【石破天惊】' },
			},
			XK_levelill1: {
				name: '未明升级',
				init: '1',
				item: { 1: '升级说明', 2: '<li>东方未明共15级,升级可以学习新的招式、功体,获得体力上限,东方未明在开始新的游戏后可以选择装备已经学习的招式、功法.', 3: '<li>2~5级:每级可学习一项一级招式和一级功法', 4: '<li>7~10级:每级可学习一项二级招式和二级功法', 5: '<li>12~15级:每级可学习一项三级招式和三级功法', 6: '<li>6、11级:增加1点体力上限' },
			},
			XK_miji: {
				name: '武功秘籍',
				init: '1',
				item: { 1: '秘籍说明', 2: '<li>秘籍牌为角色提供了招式和功体的学习功能.', 3: '<li>原本拥有招式或功体的角色使用秘籍牌会将招式或功体替换为秘籍所载的武功.', 4: '<li>原本未拥有招式或功体的角色,使用秘籍牌失去原有的技能,并获得【街头格斗术】/【江湖内功】以及秘籍所载的武功.', 5: '<li>使用秘籍会移除当前所有异常状态,秘籍牌使用后会移出当前游戏.' },
			},
			XK_lessmiji: {
				name: '降低秘籍使用概率',
				intro: '开启此开关将使AI使用秘籍的概率降低,此模式下,武功秘籍可以重铸.',
				init: lib.config.XK_mijigailv === undefined ? false : lib.config.XK_mijigailv,
				onclick(item) {
					game.saveConfig('extension_侠客风云传_XK_lessmiji', item);
					game.saveConfig('XK_mijigailv', item);
				},
			},
			XK_reset: {
				name: '升级重置',
				clear: true,
				onclick() {
					if (confirm('是否重置小虾米和东方未明的等级和经验？东方未明学习的招式和功法也会重置.(自宫头像需重置后刷新游戏回复.)')) {
						game.save('XKsave', {
							XXM_lv: 1,
							XXM_exp: 0,
							WM_lv: 1,
							WM_exp: 0,
							Zhaoshi: ['XK_jietou'],
							Neigong: ['XK_jianghu'],
							Equip: ['XK_jietou', 'XK_jianghu', 'XK_zhujuezhili', 'XK_zhujue'],
						});
						game.saveConfig('XK_zigong', false);
						alert('重置成功');
					}
				},
			},
			XK_expmul: {
				name: '经验获取倍率',
				intro: '调整小虾米、东方未明获得经验的速度',
				init: lib.config.XK_expmutil !== undefined ? lib.config.XK_expmutil : 1,
				item: {
					1: '原始倍率',
					1.2: '*1.2',
					1.5: '*1.5',
					1.8: '*1.8',
				},
				onclick(item) {
					game.saveConfig('extension_侠客风云传_XK_expmul', item);
					game.saveConfig('XK_expmutil', item);
				},
			},
		},
		package: {
			intro: "本扩展基于著名国产游戏<侠客风云传>和<侠客风云传:前传>中的角色而制作,特色在于角色的【招式】和【功体】两部分技能,大量的buff和debuff效果,百变多样的秘籍学习,以及独特的主角升级系统.为了体现原游戏中不同角色之间的强度,角色强度呈金字塔分布,部分角色强度较高.(游玩此扩展务必开启对应卡牌包!)<br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
			author: '<li>作者:Wall•E    (QQ:1687113490)(反馈bug、有意成为友情客串角色请联系此QQ)<li>测试:花落、折断的咖喱棒<li>技术支持:寰宇星城<li>特别感谢:大熊小猫<金庸群侠传>扩展提供的配音',
			version: '1.60(完结)',
		},
	};
});

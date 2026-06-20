import { lib, game, ui, get, ai, _status } from '../../noname.js';
lib.element.player.xwRestore = function () {
	var skills = this.getOriginalSkills();
	for (var skill of skills) {
		var info = get.info(skill);
		if (info && info.limited && !info.xwjh_zhudongjuexingji) {
			this.restoreSkill(skill);
		}
	}
};
if (lib.config.xwjuqing_quickpass) {
	lib.skill._xwDramaPass = {
		enable: 'phaseUse',
		selectTarget: -1,
		filterTarget(card, player, target) {
			return player.side != target.side;
		},
		content() {
			target.die();
		},
	};
}
lib.translate['_xwDramaPass'] = '速通';
lib.skill._xwDramaChangeCard = {
	prompt(event, player) {
		return '请选择需要更换的牌,至多五张.消耗换牌卡x1(目前共有' + game.xwbag.countThing('changecard') + '张).';
	},
	position: 'h',
	filterCard() {
		return true;
	},
	popup: false,
	nopop: true,
	lose: true,
	discard: false,
	forced: true,
	selectCard: [1, 5],
	enable: 'phaseUse',
	filter(event, player) {
		return player.countCards('h') && game.xwbag.hasThing('changecard') && player.isUnderControl(true);
	},
	content() {
		'step 0';
		game.log(player, '消耗了换牌卡x1,更换了', cards);
		game.xwbag.removeThing('changecard', 1, true);
		event.lcards = cards;
		//player.lose(event.lcards,ui.special);
		('step 1');
		player.gain(get.cards(event.lcards.length));
		('step 2');
		game.cardsDiscard(event.lcards);
	},
};
lib.translate['_xwDramaChangeCard'] = "<b style='color:orange;'>换牌</b>";
lib.animate.skill['_xwDramaChangeCard'] = game.kongfunc;
var checkFiles = function (updates, proceed) {
	if (game.xwjh_originCheckFileList) {
		return game.xwjh_originCheckFileList(updates, proceed);
	} else {
		return game.checkFileList(updates, proceed);
	}
};
lib.group.add('xwjh_qiu');
lib.translate.xwjh_qiu = '囚';
lib.translate.xwjh_qiu2 = '囚';
lib.groupnature.xwjh_qiu = 'xwjh_qiu';
var style = document.createElement('style');
style.innerHTML = ".player .identity[data-color='xwjh_qiu'],";
style.innerHTML += "div[data-nature='xwjh_qiu'],";
style.innerHTML += "span[data-nature='xwjh_qiu'] {text-shadow: black 0 0 1px,rgba(40, 40, 40,1) 0 0 2px,rgba(40, 40, 40,1) 0 0 5px,rgba(40, 40, 40,1) 0 0 10px,rgba(40, 40, 40,1) 0 0 10px}";
style.innerHTML += "div[data-nature='xwjh_qium'],";
style.innerHTML += "span[data-nature='xwjh_qium'] {text-shadow: black 0 0 1px,rgba(40, 40, 40,1) 0 0 2px,rgba(40, 40, 40,1) 0 0 5px,rgba(40, 40, 40,1) 0 0 5px,rgba(40, 40, 40,1) 0 0 5px,black 0 0 1px;}";
style.innerHTML += "div[data-nature='xwjh_qiumm'],";
style.innerHTML += "span[data-nature='xwjh_qiumm'] {text-shadow: black 0 0 1px,rgba(40, 40, 40,1) 0 0 2px,rgba(40, 40, 40,1) 0 0 2px,rgba(40, 40, 40,1) 0 0 2px,rgba(40, 40, 40,1) 0 0 2px,black 0 0 1px;}";
document.head.appendChild(style);
lib.element.player.xwSayLong = function (str) {
	var dialog = ui.create.div('.xwjh-duihua', this);
	dialog.innerHTML = str;
	return dialog;
};
lib.element.content['xwPlayDramaChats'] = function () {
	'step 0';
	event.page = 'begin';
	('step 1');
	if (event.page == 'end') {
		event.trigger('xwPlayDramaChatsEnd');
		event.finish();
		return;
	}
	('step 2');
	event.pageContent = event.drama[event.page];
	if (event.skipPlayChat && event.pageContent.skip !== false) {
		if (event.pageContent.execNotSkip && event.pageContent.exec) {
			event.pageContent.exec();
		}
		event.goto(7);
		return;
	}
	if (event.pageContent.content) {
		event.chatSents = event.pageContent.content.slice(0);
	} else {
		event.goto(6);
	}
	('step 3');
	var dialogPlayer = event.pageContent.character;
	if (typeof dialogPlayer == 'string') {
		dialogPlayer = game.findPlayer(function (current) {
			if (!current.name) return false;
			return current.name == dialogPlayer || current.name.replace('xwjh_sp', 'xwjh_') == dialogPlayer || current.name.replace('xwjh_xsp', 'xwjh_') == dialogPlayer;
		});
	} else {
		var charlist = _status.xwJuqingStatus.juqing.characters[_status.xwJuqingStatus.groupId];
		if (charlist) {
			dialogPlayer = charlist.group[dialogPlayer - 1];
		}
		if (typeof dialogPlayer == 'string') {
			dialogPlayer = game.findPlayer(function (current) {
				if (!current.name) return false;
				return current.name == dialogPlayer || current.name.replace('xwjh_sp', 'xwjh_') == dialogPlayer || current.name.replace('xwjh_xsp', 'xwjh_') == dialogPlayer;
			});
		}
	}
	if (!dialogPlayer) {
		event.goto(6);
		return;
	}
	var sent = event.chatSents.shift();
	if (event.curDialog) {
		event.curDialog.delete();
	}
	if (sent) {
		game.xwPlayJuqingAudio('xwjh_voc_chatpress');
		event.curDialog = dialogPlayer.xwSayLong(sent);
		game.log(dialogPlayer, ':', sent);
	} else {
		event.goto(6);
	}
	('step 4');
	if (!event.autoPlayChat) {
		game.me.chooseControl(['继续', '跳过', '自动播放']);
	} else {
		event.goto(3);
	}
	('step 5');
	if (result.control == '自动播放') {
		event.autoPlayChat = true;
		event.goto(3);
	} else if (result.control == '跳过') {
		event.skipPlayChat = true;
		event.goto(7);
	} else {
		event.goto(3);
	}
	('step 6');
	if (event.curDialog) {
		event.curDialog.delete();
		delete event.curDialog;
	}
	if (event.pageContent.exec) {
		event.pageContent.exec();
	}
	('step 7');
	if (event.curDialog) {
		event.curDialog.delete();
		delete event.curDialog;
	}
	var nextPage = event.pageContent.next;
	if (nextPage === undefined) {
		if (typeof event.page == 'number') {
			nextPage = event.page + 1;
		} else {
			nextPage = 'end';
		}
	} else if (typeof nextPage == 'function') {
		nextPage = nextPage(_status.xwJuqingStatus);
	} else if (typeof nextPage != 'string' && typeof nextPage != 'number') {
		nextPage = nextPage[_status.xwJuqingStatus.groupId];
	}
	if (nextPage === undefined) {
		nextPage = 'end';
	}
	event.page = nextPage;
	event.goto(1);
};
game.xwPlayDramaChats = function (drama) {
	var next = game.createEvent('xwjuqing_drame_chats');
	next.player = game.me;
	var chats = _status.xwJuqingStatus.juqing.chats;
	next.drama = chats[drama];
	next.setContent('xwPlayDramaChats');
};
lib.element.player.xwChooseControlBig = function (prompt, maps, ai) {
	var dialog = ui.create.dialog(prompt, 'hidden', 'forcebutton');
	for (var c in maps) {
		var str = '<div class="popup text" style="width:80%;display:inline-block">';
		str += maps[c];
		str += '</div>';
		var item = dialog.add(str);
		item.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
		item.firstChild.link = c;
		Object.setPrototypeOf(item, lib.element.Button.prototype);
		dialog.buttons.add(item.firstChild);
	}
	return this.chooseButton(dialog, function (button) {
		return true;
	})
		.set('forced', true)
		.set('ai', ai);
};
game.import('character', function (lib, game, ui, get, ai, _status) {
	const QQQ = {
		name: 'xwjuqing',
		connect: true,
		characterSort: {
			xwjuqing: {
				xwjuqing_normal: ['xwjh_juqing_gongzhuzhuaya', 'xwjh_juqing_gongzhuxinfu', 'xwjh_juqing_gongzhuermu'],
				xwjuqing_boss: ['xwjh_juqing_zishu', 'xwjh_juqing_yanjianqing', 'xwjh_juqing_sishe', 'xwjh_juqing_chenlong', 'xwjh_juqing_chouniu', 'xwjh_juqing_youji', 'xwjh_juqing_xugou', 'xwjh_juqing_haizhu', 'xwjh_juqing_yinhu', 'xwjh_juqing_maotu', 'xwjh_juqing_weiyang', 'xwjh_juqing_shenhou', 'xwjh_juqing_wuma'],
			},
		},
		character: {
			xwjh_juqing_yanjianqing: {
				hp: 8,
				maxHp: 8,
				skills: ['xwjh_gongzun', 'xwjh_poxiu'],
				trashBin: ['xwjhMp:5'],
			},
			xwjh_juqing_sishe: {
				skills: ['xwjh_quehoujq', 'xwjh_hanxijq', 'xwjh_midujq'],
				trashBin: ['xwjhMp:4'],
			},
			xwjh_juqing_chenlong: {
				skills: ['xwjh_longjianjq', 'xwjh_yanxijq', 'xwjh_longyunjq'],
				trashBin: ['xwjhMp:4'],
			},
			xwjh_juqing_chouniu: {
				skills: ['xwjh_canlve', 'xwjh_jinjia', 'xwjh_chiqing'],
				trashBin: ['xwjhMp:4'],
			},
			xwjh_juqing_zishu: {
				skills: ['xwjh_qiegou', 'xwjh_suogu', 'xwjh_funian'],
				trashBin: ['xwjhMp:3'],
			},
			xwjh_juqing_haizhu: {
				skills: ['xwjh_kuiran', 'xwjh_juxin'],
				trashBin: ['xwjhMp:4'],
			},
			xwjh_juqing_xugou: {
				skills: ['xwjh_zhongwei', 'xwjh_ruicha'],
				trashBin: ['xwjhMp:3'],
			},
			xwjh_juqing_yinhu: {
				skills: ['xwjh_suilu', 'xwjh_zongchang'],
				trashBin: ['xwjhMp:4'],
			},
			xwjh_juqing_maotu: {
				skills: ['xwjh_xiechi', 'xwjh_shunsui'],
				trashBin: ['xwjhMp:3'],
			},
			xwjh_juqing_youji: {
				skills: ['xwjh_beiti'],
				trashBin: ['xwjhMp:3'],
			},
			xwjh_juqing_shenhou: {
				skills: ['xwjh_xingyuesh'],
				trashBin: ['xwjhMp:4'],
			},
			xwjh_juqing_weiyang: {
				skills: ['xwjh_meigu'],
				trashBin: ['xwjhMp:3'],
			},
			xwjh_juqing_gongzhuzhuaya: {
				hp: 2,
				maxHp: 2,
				skills: ['xwjh_weichang'],
				trashBin: ['xwjhMp:2'],
			},
			xwjh_juqing_gongzhuxinfu: {
				hp: 2,
				maxHp: 2,
				skills: ['xwjh_xianmou'],
				trashBin: ['xwjhMp:2'],
			},
			xwjh_juqing_gongzhuermu: {
				hp: 2,
				maxHp: 2,
				skills: ['xwjh_ancha'],
				trashBin: ['xwjhMp:2'],
			},
			xwjh_juqing_wuma: {
				skills: ['xwjh_tiebei'],
				trashBin: ['xwjhMp:4'],
			},
		},
		characterIntro: {
			xwjh_juqing_yanjianqing: '【人物故事】<br><br><br>&nbsp;&nbsp;<br>【配音】繁陌浅<br>&nbsp;&nbsp;<br>【故事作者】血刀少主<br>&nbsp;&nbsp;<br>【技能设计】寰宇星城<br>&nbsp;&nbsp;',
			xwjh_juqing_sishe: '【人物故事】<br><br>地支宫隐蛇堂堂主,时逢大灾之年,离州之地,多有洪涝,灾众深以为龙宫动怒,降雨惩世,常祭童男女以息其灾,未果,灾更甚;有传言寻常童男女不能以安龙宫之心,于是卜阴时阴刻阴命幼童合九人设台祭灾,翌日,为首女童怒言西门豹及巫蛊事,有观者惊,奇有如此见识者,仍祭,入水,得北域广寒执法堂寒烟子济,乃生;执师礼,授五载,广寒事变,寒烟子亡,徒亦不知所终,浩然山庄破地支于辽,由礼君子孔端仪所擒,其杀孽过深,故拘浩然静室六层,以思己过.<br>&nbsp;&nbsp;<br>【配音】箜篌<br>&nbsp;&nbsp;<br>【故事作者】血刀少主<br>&nbsp;&nbsp;<br>【技能设计】寰宇星城<br>&nbsp;&nbsp;',
			xwjh_juqing_chenlong: '【人物故事】<br><br>地支宫罪龙堂堂主,名瑾,江南富商女,父受陈承恩一案株连,举族流湘,临行投女于十香楼以为瘦马,故而晓诗文通乐理;年十二,许宦临之,追昔日对食之乐,是以十香楼欲贡许宦为婢,不从,挞数日,沉龙阁沉龙上人晓知,自愧以其父有故而未济之,焚十香楼,取瑾授业,半载突疾,药石不治,及终托故友南宫以授;浩然山庄破地支于辽,由礼君子孔端仪所擒,其杀孽过深,故拘浩然静室六层,以思己过.<br>&nbsp;&nbsp;<br>【配音】亚酸<br>&nbsp;&nbsp;<br>【故事作者】血刀少主<br>&nbsp;&nbsp;<br>【技能设计】寰宇星城<br>&nbsp;&nbsp;',
			xwjh_juqing_chouniu: '【人物故事】<br><br>地支宫罡牛堂堂主,本帝卫粘杆处副统领雨维谷之次女,少聪慧,得太后喜,常召以入宫为伴;维谷欲结之,授其百家之艺,年稍成,以武长而侍后,仗其父传,粘杆处十数人不得近,一时无两,随愈傲;过十载,承父职,其对武愈痴,逢辽有铁牯教兴乱,奉旨密戮之,途虽得心经,然不得其法;其身有如浑金蛮牛之体,心智每况愈下,终走火入魔,斩宫侍十七人,妃一人,持刃杀奔出宫,当夜京中遇害者百人,帝责令天下郡府缉之,然终不复得见;即新帝登基,俱以为悬案.奈何修习入魔本为大忌,此后只知杀戮,不得安宁矣;浩然山庄破地支宫于辽,由书君子庄永贤所擒,其杀孽过深,故拘浩然静室五层,以思己过.<br>&nbsp;&nbsp;<br>【台词】<br>残掠<br>杀……杀……统统杀光!<br>不杀人？这世道还有什么乐趣!<br><br>金甲<br>重铠缚身,一往无前!<br>砍了这么久,现在,是不是该轮到我了!<br><br>赤睛<br>尽情绞杀吧!哈哈哈哈哈哈!喜欢……这种感觉!<br>这里根本就没有什么江湖!有的……只是血肉横飞的战场!<br><br>阵亡<br>啊……还不可以歇息啊……还没有杀够……<br><br>【配音】繁陌浅<br>&nbsp;&nbsp;<br>【故事作者】血刀少主<br>&nbsp;&nbsp;<br>【技能设计】寰宇星城<br>&nbsp;&nbsp;',
			xwjh_juqing_zishu: '【人物故事】<br><br>地支宫锦鼠堂堂主,饥年逢大旱,蜀知府奉旨赈粮,<兴律>有言,官凡赈粮以劣充好中饱私囊者,处以车裂之刑;然赈粮于蜀数月,以至潮湿糜烂,百姓未能得之分亳,十室九空之相常有,或有盗者皆斩,是以易子而食者比比皆是;时逢秋分夜,府库无故而燃,守卒尽亡,饥民蜂涌入库争粮继而踏死者不下百人,蜀知府派兵镇之,追缴库粮并斩获粮者七百余口;二年秋,京中传言一黑衣女子,血书御状.京兆尹奇之,奏查,粘杆处回奏果然,是以裂蜀知府;然及此事毕已毙近七万余饥众,黑衣女子亦不知所踪,浩然山庄破地支宫于辽,由书君子庄永贤所擒,其杀孽过深,故拘浩然静室五层,以思己过.<br>&nbsp;&nbsp;<br>【台词】<br>窃钩:<br>喂!连自己的剑都看不住么？真没用!<br>嘿嘿!是在找这个吗？现在～是我的啦!<br><br>缩骨:<br>周身开合,云山雾罩.<br>一隙之隔,方寸之间,皆为转机.<br><br>腐念:<br>世道尚且如此!你们就那么干净吗!<br>这暗无天日的苦难与孤寂……正要你们十倍感受!<br><br>阵亡:<br>窟中之鼠……终究是……见不得光啊……<br>&nbsp;&nbsp;<br>【配音】弥新<br>&nbsp;&nbsp;<br>【故事作者】血刀少主<br>&nbsp;&nbsp;<br>【技能设计】寰宇星城<br>&nbsp;&nbsp;',
			xwjh_juqing_haizhu: '【人物故事】<br>地支宫珲猪堂堂主,幼时本为京中街乞,幸而得当朝三品大学士之女救济,后卖身于<草堂会>,此后随戏班闯荡江湖,走南闯北,花拳绣腿略通八九,善使一对花锤,更添姿色甚佳,每至一处,亮相必博满堂喝彩;然其本不善言辞,本性纯良,是以常受欺辱;及班主病故,班众嫉其继位暗议款通府衙并玉香楼老鸨将其欲贩之,事发,是夜草堂会四百五十口焚之一炬,均成焦尸,聚九州仵作,尚验半载;江湖传言,事发之日有更夫见一蓝衣女子携一紫衣女子向北而往;浩然山庄破地支宫于辽,由御君子马道成所擒,其杀孽过深,故拘浩然静室四层,以思己过.<br><br>【台词】<br>岿然:<br>汝能死在这对大锤之下,亦不失为一种痛快!<br>肉功护体,以柔敌刚!<br>聚心:<br>我等姐妹,共患难,同生死,杀啊!<br>就依尔等之策,来人,备好兵刀;伺机御敌!<br>&nbsp;&nbsp;<br><br>阵亡:<br>就此止步吧……尽头处……是你无法想象的恐惧……<br><br><br>【配音】叶怀浅<br>&nbsp;&nbsp;<br><br>【故事作者】血刀少主<br><br>【技能设计】寰宇星城<br><br>&nbsp;&nbsp;',
			xwjh_juqing_xugou: '【人物故事】<br>地支宫煞狗堂堂主,翰林院三品大学士陈承恩之长女,幼时博览四书五经,落笔成章不逊其父;其不好女红工书琴艺,常悬剑任侠事,京中多有不平必申欲达天听,佞远子王乌醉酒杀妓,闻之,杀乌枭首,远长叩殿阶流涕两日,时腊月,流血成冰,帝夷承恩三族,及斩,女不知所踪;新帝即位,诛远,月余,京中奇现王远全族尸首曝于市,其半数碎为齑粉;此后地支之役,皆有其身影,所杀正邪不计其数,浩然山庄破地支宫于辽,由御君子马道成所擒,其杀孽过深,故拘浩然静室四层,以思己过.<br><br>【台词】<br>忠卫:<br>以吾八尺之躯,誓死血卫吾主尊严!<br>锋下蟪蛄满枯骸,银汉惊涛入梦来!<br>锐察:<br>再探,再报!<br>姐妹们,休要走了贼人,速速拿下!<br>&nbsp;&nbsp;<br><br>阵亡:<br>汝且……禀告宫主……玉哮……以身殉教矣……呃啊……<br><br><br>【配音】姜白叶<br>&nbsp;&nbsp;<br><br>【故事作者】血刀少主<br><br>【技能设计】寰宇星城<br><br>&nbsp;&nbsp;',
			xwjh_juqing_yinhu: '【人物故事】<br>地支宫魁虎堂堂主,幼时逢饥年,父母宁死不易之,饿亡;后遭牙行掳标,紫极观价十五锭得之,佐紫河车等七十五味药饵喂灌而曰<试仙>,八载后,虽年十六,其面仍若八九稚子,终年不变;及紫阴寿,地支宫宫主颜剑卿拜,见之,心喜,乱其宴而夺;衣食智武皆亲授之,视如己出;然心性已变,但闻江湖有着紫衣,配紫剑,号紫名者;必追以斩其首级,不死不休.浩然山庄破地支宫于辽,由射君子杜翎所擒,其杀孽过深,故拘浩然静室三层,以思己过.<br>【台词】<br>碎颅:<br>斩下你的脑袋,嘘……不会很痛苦的!<br>被本姑娘的双手把玩过～也算是死得其所!<br>纵伥:<br>姑娘们,证明你们忠心的时候到了!<br>能为地支宫赴死,还不跪下感恩戴德!<br>&nbsp;&nbsp;<br><br>阵亡:<br>臭男人……有种便杀了我……<br><br><br>【配音】棠梨<br>&nbsp;&nbsp;<br>【故事作者】血刀少主<br><br>【技能设计】寰宇星城<br><br>&nbsp;&nbsp;',
			xwjh_juqing_maotu: '【人物故事】<br>地支宫孽兔堂堂主,原血刀门七代女弟子,江湖美人榜位列十一;然其不善刀武,反工于心计,夜闯修罗经阁私阅壁间合欢心诀;事败仓皇出逃,引六代掌门少主怒发血杀令悬赏江湖,所私阅心诀只得其半数,悟五载,方改诀中<采阴补阳>为<采阳补阴>;此后数年,入地支而隐,所杀多为滥情男女,常割喉碎骨,后饮其髓而化之;浩然山庄破地支宫于辽,由射君子杜翎所擒,其杀孽过深,故拘浩然静室三层,以思己过.<br><br>【台词】<br>邪齿:<br>小心点,我可不是吃素的!<br>果然还是先咬断你的喉咙,更妥当一些呢!<br><br>吮髓:<br>吊起来!且待我～好好品尝他的味道.<br>嗯哼哼～是死还是活,要看你怎么取悦于我喽.<br>&nbsp;&nbsp;<br><br>阵亡:<br>男人没有一个好东西……死何足惜……<br><br><br>【配音】洛小叉sicver<br>&nbsp;&nbsp;<br>【故事作者】血刀少主<br><br>【技能设计】寰宇星城<br><br>&nbsp;&nbsp;',
			xwjh_juqing_youji: '【人物故事】<br>地支宫冥鸡堂堂主,本是天音阁阁主之养女,更得凤音剑楼楼主青睐,亲授<五音齐剑>;后不知为何性情大变堕入魔道,斩义父音无弦,义兄音商侯,同门十七人;悬首天音山门.江湖传言似其父兄因贪图<五音齐剑>及姿色而玷之.凤音剑楼楼主晓此事心生愧悔,出手欲擒之而保齐周全,奈何竟不敌,双耳惧废;浩然山庄破地支宫于辽,由乐君子微生云所擒,其杀孽过深,故拘浩然静室二层,以思己过.<br><br>【台词】<br>悲啼:<br>我什么都肯给你!救救我!求你们救救我!<br>放我出去!我不要待在这种鬼地方!啊!<br>&nbsp;&nbsp;<br><br>阵亡:<br>若非琵琶骨被这玄铁锁链所穿……尔等焉能……闯过去……<br><br><br>【配音】咕咕少女<br>&nbsp;&nbsp;<br>【故事作者】血刀少主<br><br>【技能设计】寰宇星城<br><br>&nbsp;&nbsp;',
			xwjh_juqing_shenhou: '【人物故事】<br>地支宫炽猴堂堂主,其母为蛮中六山黑鹿山山主之女,父仅蜀地白丁;游蛮中遭猛虎为所救,意合,诞一女.少时与兽为伍,身法之矫健,蛮中无出其右;及兴攻六山乱,互有死伤,父母山寨为兴军焚之,十四年后昔攻六山武威将军厉济一于元安城惨死,全家上下九十一口并厉府俱焚,府墙血书蛮文<报应>两字千余条,震惊一时;浩然山庄破地支宫于辽,由乐君子微生云所擒,其杀孽过深,故拘浩然静室二层,以思己过.<br><br>【台词】<br>星跃:<br>碍事的男人,闪开!<br>没闻到气味吗!这里是老娘的地盘儿!<br>&nbsp;&nbsp;<br><br>阵亡:<br>好强壮的男人……竟有如此身法……<br><br><br>【配音】洛小叉sicver<br>&nbsp;&nbsp;<br>【故事作者】血刀少主<br><br>【技能设计】寰宇星城<br><br>&nbsp;&nbsp;',
			xwjh_juqing_weiyang: '【人物故事】<br>地支宫恶羊堂堂主,昔日恒山派首席弟子,因门派纷争,嫌恶师尊功过不分,一怒之下叛出恒山,剑破护山大阵,斩同门弟子二十九人;携重伤逃离,此后一心修习柔骨媚术,其功轻可废男子心志,终生痴傻,重者不消三刻而自绝;浩然山庄破地支宫于辽,由数君子金九章所擒,其杀孽过深,故拘浩然静室一层,以思己过.<br><br>【台词】<br>魅骨:<br>请……请不要伤害我!<br>好……好疼……请温柔一些……呜呜呜!<br>&nbsp;&nbsp;<br><br>阵亡:<br>混账畜生!竟敢伤我的脸!<br><br><br>【配音】姜白叶<br>&nbsp;&nbsp;<br>【故事作者】血刀少主<br><br>【技能设计】寰宇星城<br><br>&nbsp;&nbsp;',
			xwjh_juqing_gongzhuzhuaya: '【人物故事】<br>地支宫的爪牙,多是贫苦人家的弃婴.自还是女婴之时就被地支宫收养,灌输武艺,对宫主极其忠诚.这些爪牙并无善与恶、正与邪的观念,只知道听从宫主和上级的命令,即便地支宫已然覆灭.<br><br>【台词】<br>为伥:<br>属下一切听凭宫主吩咐!<br>竟敢伤害宫主大人,受死吧!<br>&nbsp;&nbsp;<br><br>阵亡:<br>何时才有出头之日啊……可恶……<br><br><br>【配音】冬晓晓<br>&nbsp;&nbsp;<br>【故事作者】血刀少主<br><br>【技能设计】寰宇星城<br><br>&nbsp;&nbsp;',
			xwjh_juqing_gongzhuxinfu: '【人物故事】<br>地支宫中略通文化的侍女.大兴哀皇帝在位期间,不仅喜怒无常,动辄将朝中大员抄家灭族,更兼大肆搜刮民财,很多大户为之破灭,不少侍女为地支宫所收留.<br><br>【台词】<br>献谋:<br>还请您听我一言.<br>属下有一策,定能退敌!<br>&nbsp;&nbsp;<br><br>阵亡:<br>计策……失误了……<br><br><br>【配音】冬晓晓<br>&nbsp;&nbsp;<br>【故事作者】血刀少主<br><br>【技能设计】寰宇星城<br><br>&nbsp;&nbsp;',
			xwjh_juqing_gongzhuermu: '【人物故事】<br>地支宫中的刺探者,身法灵便,常活跃与地支宫周边青楼、客栈等,收集消息.<br><br>【台词】<br>暗察:<br>哼,原来如此!<br>这就是你的秘密么？呵;真没价值!<br>&nbsp;&nbsp;<br><br>阵亡:<br>速速焚毁此信……切不可落入他人之手……<br><br><br>【配音】冬晓晓<br>&nbsp;&nbsp;<br>【故事作者】血刀少主<br><br>【技能设计】寰宇星城<br><br>&nbsp;&nbsp;',
			xwjh_juqing_wuma: '【人物故事】<br>地支宫万马堂堂主,辽州武林世家,性豪烈,曾乔装香客潜伏少林寺罗汉堂,偷学横练护体神功,后于辽州前后杀害无辜百姓四十六口,县官三人;浩然山庄破地支宫于辽,由数君子金九章所擒,其杀孽过深,故拘浩然静室一层,以思己过.<br><br>【台词】<br>铁背:<br>上一个想驯服老娘的,已经被砸碎了!<br>老娘正愁没有架打呢,你倒是送上门来了!<br>&nbsp;&nbsp;<br><br>阵亡:<br>老娘的横练护体功,怎么会……<br><br><br>【配音】南苑<br>&nbsp;&nbsp;<br>【故事作者】血刀少主<br><br>【技能设计】寰宇星城<br><br>&nbsp;&nbsp;',
		},
		characterTitle: {
			xwjh_juqing_sishe: '巳蛇',
			xwjh_juqing_chenlong: '辰龙',
			xwjh_juqing_chouniu: '丑牛',
			xwjh_juqing_zishu: '子鼠',
			xwjh_juqing_wuma: '午马',
			xwjh_juqing_weiyang: '未羊',
			xwjh_juqing_gongzhuxinfu: '诡计多端',
			xwjh_juqing_gongzhuzhuaya: '为虎作伥',
			xwjh_juqing_gongzhuermu: '隔墙有耳',
			xwjh_juqing_youji: '酉鸡',
			xwjh_juqing_shenhou: '申猴',
			xwjh_juqing_yinhu: '寅虎',
			xwjh_juqing_maotu: '卯兔',
			xwjh_juqing_haizhu: '亥猪',
			xwjh_juqing_xugou: '戌狗',
			xwjh_juqing_yanjianqing: '地支宫主',
		},
		skill: {
			xwjh_dianchen: {
				audio: 'ext:玄武江湖/audio:2',
				trigger: {
					global: 'dieEnd',
				},
				forced: true,
				filter(event, player) {
					return event.source == player;
				},
				content() {
					'step 0';
					var x = player.getStat('kill');
					if (!x) x = 0;
					player.draw(2 + x);
					('step 1');
					player.gainMaxHp();
				},
				ai: {
					effect: {
						player(card, player, target) {
							if (get.tag(card, 'damage') && target.hp <= 1) {
								return [1, 10];
							}
						},
					},
				},
			},
			xwjh_jianyao: {
				audio: 'ext:玄武江湖/audio:2',
				forced: true,
				priority: 213123000,
				trigger: {
					player: 'useCardBegin',
				},
				mod: {
					cardUsable(card, player, num) {
						if (card.name == 'sha') {
							return num + player.maxHp - player.hp + player.countMark('xwjh_jianyao_yao');
						}
					},
				},
				filter(event, player) {
					if (!player.isPhaseUsing()) return false;
					if (player.hp >= player.maxHp && !player.countMark('xwjh_jianyao_yao')) return false;
					var his = player.getHistory('useCard', function (evt) {
						return evt.addCount && evt.card.name == 'sha' && evt != event;
					});
					return his.length;
				},
				content() {
					'step 0';
				},
				group: ['xwjh_jianyao_end'],
				subSkill: {
					yao: {
						intro: {
							name: '剑摇',
							content: '累计的出杀次数.',
						},
						markimage: 'extension/玄武江湖/image/xwjh_icon_gongzhujianyao.jpg',
					},
					end: {
						forced: true,
						popup: false,
						firstDo: true,
						trigger: {
							player: 'phaseAfter',
						},
						filter(event, player) {
							return true;
						},
						content() {
							'step 0';
							event.marknum = player.getCardUsable('sha');
							('step 1');
							player.removeMark('xwjh_jianyao_yao', player.countMark('xwjh_jianyao_yao'));
							('step 2');
							player.addMark('xwjh_jianyao_yao', event.marknum);
						},
					},
				},
			},
			xwjh_poxiu: {
				audio: 'ext:玄武江湖/audio:2',
				juexingji: true,
				derivation: ['xwjh_dianchen', 'xwjh_jianyao'],
				forced: true,
				trigger: {
					global: ['phaseJieshuEnd'],
				},
				filter(event, player) {
					if (_status.xwRoundCount - _status.xwPoxiuRound >= 3) return true;
					return game.hasPlayer(function (current) {
						return current.hp >= current.maxHp && !current.isTurnedOver() && current != player && current.side != player.side;
					});
				},
				content() {
					'step 0';
					player.awakenSkill('xwjh_poxiu');
					('step 1');
					player.removeSkill('xwjh_gongzun');
					('step 2');
					player.addSkill('xwjh_jianyao');
					player.addSkill('xwjh_dianchen');
					('step 3');
					event.tars = game.filterPlayer(function (current) {
						return current != player && !current.isTurnedOver();
					});
					event.tars.sortBySeat();
					('step 4');
					var tar = event.tars.shift();
					if (tar) {
						if (tar.isAlive()) {
							tar.damage(1, player);
						}
						event.redo();
					}
				},
			},
			xwjh_gongzun: {
				audio: 'ext:玄武江湖/audio:2',
				trigger: {
					player: 'phaseZhunbeiBegin',
					global: 'xwPlayDramaChatsEnd',
				},
				forced: true,
				filter(event, player) {
					if (event.name == 'phaseZhunbei') return true;
					return event.player == game.me;
				},
				content() {
					'step 0';
					event.tars = game.filterPlayer(function (current) {
						return current != player && (!current.isTurnedOver() || current.hp < current.maxHp);
					});
					event.tars.sortBySeat();
					('step 1');
					event.tar = event.tars.shift();
					if (event.tar) {
						event.tar
							.chooseControl('失去体力', '翻面')
							.set('prompt', '请选择一项执行')
							.set('ai', function () {
								return '翻面';
							});
					} else {
						event.finish();
					}
					('step 2');
					if (result.control == '翻面') {
						event.tar.turnOver(true);
					} else {
						event.tar.loseHp();
					}
					event.goto(1);
				},
			},
			xwjh_midujq: {
				audio: 'ext:玄武江湖/audio:2',
				trigger: {
					player: 'shaHit',
				},
				forced: true,
				filter(event, player) {
					return event.target != player && event.target.countMark('xwjh_publicmark_zhongdu');
				},
				logTarget: 'target',
				content() {
					'step 0';
					event.zdnum = trigger.target.countMark('xwjh_publicmark_zhongdu');
					trigger.target.removeXwBuff('xwjh_publicmark_zhongdu', Infinity);
					('step 1');
					trigger.extraDamage++;
				},
			},
			xwjh_hanxijq: {
				audio: 'ext:玄武江湖/audio:2',
				trigger: {
					source: 'damageSource',
				},
				forced: true,
				logTarget: 'player',
				filter(event, player) {
					return event.player.countMark('xwjh_publicmark_zhuoshao');
				},
				content() {
					'step 0';
					trigger.player.removeXwBuff('xwjh_publicmark_zhuoshao', 1);
					('step 1');
					if (trigger.player.countDiscardableCards(player, 'h')) {
						player.discardPlayerCard(trigger.player, 'h', true);
					}
				},
				ai: {
					effect: {
						player(card, player, target) {
							if (get.tag(card, 'damage') && target && target.countMark('xwjh_publicmark_zhuoshao')) {
								if (target.countDiscardableCards(player, 'h')) {
									return [1, -1];
								} else {
									return [1, 0.3];
								}
							}
						},
					},
				},
			},
			xwjh_quehoujq: {
				audio: 'ext:玄武江湖/audio:2',
				global: ['xwjh_quehoujq_que'],
				subSkill: {
					que: {
						forced: true,
						charlotte: true,
						popup: false,
						trigger: {
							player: 'phaseEnd',
						},
						filter(event, player) {
							return game.hasPlayer(function (current) {
								return current.xwIs('xwjh_juqing_sishe');
							})
								? player.side == 'zhu'
								: true;
						},
						content() {
							'step 0';
							var rate = 12 * player.getHistory('useCard').length;
							var judge = Math.random() * 100;
							if (judge <= rate) {
								player.popup(get.translation('xwjh_quehoujq'));
								game.log(player, '【', 'xwjh_quehoujq', '】概率判定生效.');
								player.addXwBuff('xwjh_publicmark_zhongdu');
							}
						},
					},
				},
			},
			xwjh_longyunjq: {
				audio: 'ext:玄武江湖/audio:2',
				trigger: {
					player: 'damageEnd',
				},
				forced: true,
				filter(event, player) {
					return true;
				},
				content() {
					'step 0';
					var rand = Math.random() * 100;
					if (rand <= 40) {
						event.goto(1);
					} else if (rand <= 80) {
						event.goto(2);
					} else {
						event.goto(3);
					}
					('step 1');
					player.addXwBuff('xwjh_public_effect_kangfen');
					event.finish();
					('step 2');
					player.addXwBuff('xwjh_publicmark_xunjie', 2);
					event.finish();
					('step 3');
					player.draw(2);
					('step 4');
					player.loseHp();
				},
			},
			xwjh_yanxijq: {
				audio: 'ext:玄武江湖/audio:2',
				trigger: {
					source: 'damageSource',
				},
				filter(event, player) {
					return event.nature == 'fire';
				},
				content() {
					trigger.player.addXwBuff('xwjh_publicmark_zhuoshao', 2);
				},
				group: ['xwjh_yanxijq_fire'],
				subSkill: {
					fire: {
						forced: true,
						trigger: {
							source: 'damageBegin2',
						},
						filter(event, player) {
							if (event.nature == 'fire') return false;
							if (event.xwjh_yanxijq_success === 1) return true;
							else if (event.xwjh_yanxijq_success === 2) return false;
							var rate = 15 * player.hp;
							if (Math.random() * 100 <= rate) {
								event.xwjh_yanxijq_success = 1;
								return true;
							} else {
								event.xwjh_yanxijq_success = 2;
								return false;
							}
						},
						content() {
							'step 0';
							trigger.nature = 'fire';
							game.log(player, '对', trigger.player, '造成的伤害被视为火焰伤害.');
						},
					},
				},
			},
			xwjh_longjianjq: {
				audio: 'ext:玄武江湖/audio:2',
				trigger: {
					player: 'useCardEnd',
				},
				logTarget(event, player) {
					return event.targets.filter(function (current) {
						return current.isAlive();
					});
				},
				forced: true,
				usable: 3,
				filter(event, player) {
					if (event.card.name != 'sha') return false;
					if (
						!event.targets.filter(function (current) {
							return current.isAlive();
						}).length
					)
						return false;
					if (event.xwjh_longjianjq_success === 1) {
						return true;
					} else if (event.xwjh_longjianjq_success === 2) {
						return false;
					}
					var rate = (player.maxHp - player.hp) * 15;
					event.xwjh_longjianjq_success = Math.random() * 100 <= rate ? 1 : 2;
					return event.xwjh_longjianjq_success === 1;
				},
				content() {
					'step 0';
					player
						.useCard(
							{ name: 'sha' },
							trigger.targets.filter(function (current) {
								return current.isAlive();
							})
						)
						.set('addCount', false);
				},
			},
			xwjh_chiqing: {
				audio: 'ext:玄武江湖/audio:2',
				trigger: {
					player: 'phaseZhunbeiBegin',
				},
				forced: true,
				filter(event, player) {
					return player.hp < player.maxHp;
				},
				content() {
					'step 0';
					player
						.xwZhaochu(player.maxHp - player.hp, function (card) {
							return card.name == 'sha';
						})
						.set('gaintag', ['xwjh_chiqing']);
				},
				group: ['xwjh_chiqing_sha'],
				subSkill: {
					sha: {
						forced: true,
						firstDo: true,
						filter(event, player) {
							return (
								event.cards &&
								event.cards.length &&
								event.cards.filter(function (card) {
									return !card.hasGaintag('xwjh_chiqing');
								}).length == 0
							);
						},
						trigger: {
							player: 'useCardBefore',
						},
						content() {
							trigger.addCount = false;
						},
					},
				},
			},
			xwjh_jinjia: {
				audio: 'ext:玄武江湖/audio:2',
				forced: true,
				trigger: {
					player: ['useCard', 'respond'],
				},
				filter(event, player) {
					return event.card.name == 'sha' && event.cards && event.cards.length == 1 && event.cards[0].suit == 'diamond';
				},
				firstDo: true,
				content() {
					'step 0';
				},
				mod: {
					cardname(card, player) {
						if (player && player.hasSkillTag('xwCardNameChanged', false, card)) {
							return;
						}
						if (card.suit == 'diamond') {
							return 'xwjh_card_gang';
						}
					},
				},
			},
			xwjh_canlve: {
				audio: 'ext:玄武江湖/audio:2',
				trigger: {
					source: 'damageSource',
				},
				filter(event, player) {
					return event.player && event.player.isIn();
				},
				logTarget: 'player',
				forced: true,
				content() {
					'step 0';
					trigger.player
						.judge(function (card) {
							return card.suit == 'heart' ? -3 : 0;
						})
						.set('judge2', function (card) {
							return card.suit != 'heart';
						});
					('step 1');
					if (result.suit != 'heart') {
						trigger.player.addXwBuff('xwjh_publicmark_silie', 2);
					}
				},
			},
			xwjh_funian: {
				audio: 'ext:玄武江湖/audio:2',
				enable: 'phaseUse',
				limited: true,
				mark: true,
				markimage: 'extension/玄武江湖/image/xwjh_icon_funian.jpg',
				filter(event, player) {
					return player.countCards('e');
				},
				init(player) {
					player.storage.xwjh_funian = false;
				},
				content() {
					'step 0';
					player.awakenSkill('xwjh_funian');
					event.countE = player.countCards('e');
					player.discard(player.getCards('e'));
					('step 1');
					player.recover(event.countE);
					('step 2');
					event.tars = game.filterPlayer(function (current) {
						return current.side != player.side;
					});
					event.tars.sortBySeat();
					('step 3');
					var tar = event.tars.shift();
					if (tar) {
						tar.addXwBuff('xwjh_publicmark_zhongdu', Math.ceil(event.countE / 2));
						event.redo();
					}
				},
				ai: {
					order: 1,
					result: {
						player(player, target) {
							if (player.maxHp - player.hp >= 3) return 2;
							if (player.countCards('e') >= 3) return 1;
							return -2;
						},
					},
				},
			},
			xwjh_suogu: {
				audio: 'ext:玄武江湖/audio:2',
				enable: ['chooseToRespond', 'chooseToUse'],
				filterCard(card) {
					return get.type(card) == 'basic';
				},
				position: 'hes',
				viewAs: {
					name: 'shan',
				},
				viewAsFilter(player) {
					if (
						!player.countCards('hes', function (card) {
							return get.type(card) == 'basic';
						})
					)
						return false;
					return true;
				},
				prompt: '将一张基本牌当闪使用或打出',
				check(card) {
					return 8 - get.value(card);
				},
				ai: {
					order() {
						return get.order({ name: 'shan' }) - 1;
					},
					respondShan: true,
					skillTagFilter(player) {
						if (!player.countCards('he')) return false;
					},
					effect: {
						target(card, player, target, current) {
							if (get.tag(card, 'respondShan')) return 0.8;
						},
					},
				},
			},
			xwjh_qiegou: {
				audio: 'ext:玄武江湖/audio:2',
				group: ['xwjh_qiegou_qie'],
				subSkill: {
					qie: {
						trigger: {
							global: 'equipEnd',
						},
						filter(event, player) {
							return event.player.side != player.side && event.player.getCards('e').includes(event.card) && player.canEquip(event.card);
						},
						forced: true,
						content() {
							'step 0';
							player
								.judge(function (card) {
									return get.color(card) == 'black' ? 2 : 0;
								})
								.set('judge2', function (card) {
									return get.color(card) == 'black';
								});
							('step 1');
							if (result.color == 'black') {
								game.playXwAudio('xwjh_qiegou', 2);
								player.line(trigger.player, 'green');
								if (trigger.player.getCards('e').includes(trigger.card)) {
									player.equip(trigger.card);
								}
							}
						},
					},
				},
			},
			xwjh_kuiran: {
				audio: 'ext:玄武江湖/audio:2',
				enable: ['chooseToUse'],
				selectCard: 1,
				position: 'hes',
				mod: {
					aiUseful(player, card, num) {
						if (card.suit == 'spade' && get.type(card) != 'basic') {
							return num + 1;
						}
					},
				},
				filterCard(card) {
					return card.suit == 'spade' && get.type(card) != 'basic';
				},
				viewAs: {
					name: 'xwjh_card_gang',
				},
				viewAsFilter(player) {
					return player.countCards('hes', function (card) {
						return card.suit == 'spade' && get.type(card) != 'basic';
					});
				},
				prompt: '将一张♠️️非基本牌当罡使用',
				check(card) {
					return 9 - get.value(card);
				},
				group: ['xwjh_kuiran_kui'],
				subSkill: {
					kui: {
						trigger: {
							player: 'xwGangCancelDamage',
						},
						filter(event, player) {
							return event.damageInfo.source && event.damageInfo.source.isIn();
						},
						logTarget(event, player) {
							return event.damageInfo.source;
						},
						check(event, player) {
							return get.damageEffect(event.damageInfo.source, player, player) > 0;
						},
						content() {
							'step 0';
							if (trigger.skill != 'xwjh_kuiran') {
								game.playXwAudio('xwjh_kuiran', 2);
							}
							player
								.judge(function (card) {
									return card.suit == 'diamond' ? 0 : 2;
								})
								.set('judge2', function (card) {
									return card.suit != 'diamond';
								});
							('step 1');
							if (result.suit != 'diamond') {
								trigger.damageInfo.source.damage(1, player);
							}
						},
					},
				},
			},
			xwjh_juxin: {
				audio: 'ext:玄武江湖/audio:2',
				trigger: {
					player: 'equipEnd',
				},
				forced: true,
				filter(event, player) {
					return game.hasPlayer(function (current) {
						return current != player && current.side == player.side && current.canEquip(event.card);
					});
				},
				content() {
					'step 0';
					event.tars = game.filterPlayer(function (current) {
						return current.side == player.side && current != player && current.canEquip(trigger.card);
					});
					('step 1');
					event.tar = event.tars.shift();
					if (event.tar) {
						var card = game.xwCopyCard(trigger.card);
						if (event.tar.canEquip(card)) {
							event.tar.equip(card);
						}
						event.redo();
					}
				},
			},
			xwjh_ruicha: {
				audio: 'ext:玄武江湖/audio:2',
				trigger: {
					global: 'xwjh_ancha_chacard',
				},
				filter(event, player) {
					return event.player.side == player.side && event.card;
				},
				forced: true,
				content() {
					'step 0';
					player.gain(game.xwCopyCards([trigger.card]), 'draw2');
				},
			},
			xwjh_zhongwei: {
				audio: 'ext:玄武江湖/audio:2',
				trigger: {
					global: 'useCardToTargeted',
				},
				filter(event, player) {
					return event.target != player && player.countCards('h') && event.card.name == 'sha';
				},
				check(event, player) {
					return get.attitude(player, event.target) > 0;
				},
				logTarget: 'target',
				content() {
					'step 0';
					player.give(player.getCards('h'), trigger.target);
					('step 1');
					player.addTempSkill('xwjh_zhongwei_draw');
				},
				subSkill: {
					draw: {
						charlotte: true,
						trigger: {
							player: 'phaseEnd',
						},
						filter(event, player) {
							return player.maxHp > player.hp;
						},
						forced: true,
						priority: 1390,
						content() {
							'step 0';
							player.draw(player.maxHp - player.hp);
							game.playXwAudio('xwjh_zhongwei_draw');
						},
					},
				},
			},
			xwjh_xiechi: {
				audio: 'ext:玄武江湖/audio:2',
				trigger: {
					source: 'damageBegin4',
				},
				filter(event, player) {
					return event.num;
				},
				forced: true,
				logTarget: 'player',
				content() {
					'step 0';
					event.num = Math.min(trigger.num, 9);
					trigger.cancel();
					('step 1');
					trigger.player.addXwBuff('xwjh_publicmark_liuxie', event.num * 2);
				},
				ai: {
					jueqing: 1,
				},
			},
			xwjh_shunsui: {
				audio: 'ext:玄武江湖/audio:2',
				trigger: {
					global: 'loseHpEnd',
				},
				filter(event, player) {
					if (player.countCards('h') >= player.getHandcardLimit() && player.hp >= player.maxHp) {
						return false;
					}
					var evt = event.parent;
					return evt.name == '_xwjh_liuxie';
				},
				forced: true,
				content() {
					'step 0';
					if (player.countCards('h') < player.getHandcardLimit()) {
						player.draw();
					} else {
						player.recover();
					}
				},
			},
			xwjh_zongchang: {
				audio: 'ext:玄武江湖/audio:2',
				trigger: {
					source: 'damageSource',
				},
				filter(event, player) {
					return event.player == player;
				},
				forced: true,
				mod: {
					targetInRange(card, player, target, now) {
						if (
							card.name == 'sha' &&
							game.hasPlayer(function (current) {
								return current != target && current.xwIs('xwjh_juqing_gongzhuzhuaya') && get.distance(current, target) <= 1;
							})
						) {
							return true;
						}
					},
				},
				content() {
					'step 0';
					player
						.chooseTarget(get.prompt2('xwjh_zongchang'), [1, 2], function (card, player, target) {
							return player != target;
						})
						.set('ai', function (target) {
							return get.attitude(player, target);
						});
					('step 1');
					if (result && result.targets && result.targets.length) {
						game.asyncDraw(result.targets);
					}
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (get.tag(card, 'damage') && player == target) {
								if (target.hp > 1) return [1, 2];
							}
						},
					},
				},
			},
			xwjh_suilu: {
				audio: 'ext:玄武江湖/audio:2',
				trigger: {
					source: 'damageBegin3',
				},
				check(event, player) {
					return get.attitude(player, event.player) < 0;
				},
				filter(event, player) {
					return event.notLink() && event.card && event.card.name == 'sha' && !event.card.nature;
				},
				content() {
					'step 0';
					player.addXwBuff('xwjh_publicmark_silie', 2);
					('step 1');
					trigger.num++;
					game.log(player, '对', trigger.player, '造成的伤害加一.');
				},
			},
			xwjh_beiti: {
				audio: 'ext:玄武江湖/audio:2',
				trigger: {
					player: 'damageEnd',
				},
				filter(event, player) {
					return true;
				},
				forced: true,
				content() {
					'step 0';
					player.loseMaxHp(1);
					('step 1');
					player
						.chooseTarget(get.prompt2('xwjh_beiti'), function (card, player, target) {
							return player != target && player.side == target.side;
						})
						.set('forced', true)
						.set('ai', function (target) {
							if (get.attitude(player, target) <= 0) return 0;
							if (target.hasSkill('xwjh_xingyuesh')) return 10;
							return 10 - target.hp > 0 ? 10 - target.hp : 1;
						});
					('step 2');
					if (result && result.targets && result.targets.length) {
						event.target = result.targets[0];
						player.line(event.target, 'green');
						game.log(player, '选择了', event.target);
						if (event.target.hp == event.target.maxHp) {
							event.target.gainMaxHp(1);
							event.goto(4);
						} else {
							event.target.chooseBool('是否增加一点体力上限？否则你回复一点体力.').set('ai', function () {
								if (event.target.hasSkill('xwjh_xingyuesh')) return true;
								return false;
							});
						}
					} else {
						event.goto(4);
					}
					('step 3');
					if (result && result.bool) {
						event.target.gainMaxHp(1);
					} else {
						event.target.recover();
					}
					('step 4');
					if (trigger.source) {
						trigger.source.addXwBuff('xwjh_public_effect_neishang');
					}
				},
			},
			xwjh_xingyuesh: {
				audio: 'ext:玄武江湖/audio:2',
				enable: 'chooseToUse',
				usable: 1,
				viewAs: {
					name: 'xwjh_card_yi',
				},
				viewAsFilter(player) {
					return player.hp > 0 && _status.event.isPhaseUsing(player);
				},
				onuse(result, player) {
					player.loseHp(1);
				},
				selectCard: -1,
				filterCard() {
					return false;
				},
				group: ['xwjh_xingyuesh_yue'],
				subSkill: {
					yue: {
						trigger: {
							player: 'phaseJieshuEnd',
						},
						filter(event, player) {
							return player.hp < player.maxHp;
						},
						check(event, player) {
							return true;
						},
						content() {
							'step 0';
							game.playXwAudio('xwjh_xingyuesh', 2);
							event.cards = get.cards(player.maxHp - player.hp);
							('step 1');
							game.cardsGotoOrdering(event.cards);
							player.showCards(event.cards, '星跃');
							('step 2');
							player
								.chooseCardButton('请选择其中的【杀】使用.', event.cards, 1)
								.set('filterButton', function (button) {
									var card = button.link;
									return card.name == 'sha' && player.hasUseTarget(card);
								})
								.set('ai', function (button) {
									return player.getUseValue(button.link);
								});
							('step 3');
							if (result && result.links && result.links.length) {
								event.cards.remove(result.links[0]);
								player.chooseUseTarget(result.links[0]).set('prompt', '请选择' + get.translation(result.links[0]) + '的目标.');
							} else {
								event.finish();
							}
							('step 4');
							if (result.bool && event.cards.length) {
								event.goto(1);
							} else {
								event.finish();
							}
						},
					},
				},
				ai: {
					order() {
						var player = _status.event.player;
						if (player.hp <= 1) return 0;
						return 5;
					},
					effect: {
						player(card, player, target) {
							if (card && card.name == 'xwjh_card_yi' && _status.event.skill == 'xwjh_xingyuesh') {
								if (player.hp > 2) {
									if (get.attitude(player, target.next) < 0 || get.attitude(player, target.previous) < 0) {
										return [1, 1];
									}
								}
							}
						},
					},
				},
			},
			xwjh_ancha: {
				audio: 'ext:玄武江湖/audio:2',
				trigger: {
					global: 'phaseZhunbeiBegin',
				},
				filter(event, player) {
					return event.player.countCards('h') && event.player != player;
				},
				check(event, player) {
					return get.attitude(player, event.player) < 0;
				},
				logTarget: 'player',
				content() {
					'step 0';
					player.choosePlayerCard(trigger.player, 'h', true);
					('step 1');
					if (result && result.links && result.links.length) {
						player.showCards(result.links);
						event.card = result.links[0];
					} else {
						event.finish();
					}
					('step 2');
					trigger.player.addTempSkill('xwjh_ancha_cha');
					('step 3');
					trigger.player.storage.xwjh_ancha_cha.push(event.card);
					('step 4');
					event.trigger('xwjh_ancha_chacard');
				},
				subSkill: {
					cha: {
						charlotte: true,
						init(player) {
							player.storage.xwjh_ancha_cha = [];
						},
						onremove(player) {
							delete player.storage.xwjh_ancha_cha;
						},
						forced: true,
						firstDo: true,
						trigger: {
							player: 'useCardToPlayered',
						},
						forced: true,
						filter(event, player) {
							if (event.cards && event.cards.length == 1 && player.storage.xwjh_ancha_cha.includes(event.cards[0])) return event.target.name == 'xwjh_juqing_gongzhuermu' || get.xwJuqingBosses().includes(event.target.name);
							return false;
						},
						content() {
							game.log(player, '使用的', trigger.card, '对', trigger.target, '无效.');
							trigger.parent.excluded.add(trigger.target);
						},
					},
				},
			},
			xwjh_meigu: {
				audio: 'ext:玄武江湖/audio:2',
				trigger: {
					player: 'damageEnd',
				},
				filter(event, player) {
					return event.source && event.source.isIn() && event.source != player;
				},
				check(event, player) {
					return get.attitude(player, event.source) < 0;
				},
				logTarget: 'source',
				content() {
					'step 0';
					event.card = get.cards(1)[0];
					('step 1');
					player.showCards([event.card]);
					('step 2');
					player
						.chooseTarget('是否将此牌交给' + get.translation(trigger.source) + ',并指定一名角色？', function (card, player, target) {
							return target == trigger.source;
						})
						.set('ai', function (target) {
							if (trigger.source.hp <= 2) {
								return !trigger.source.canUse(event.card, target, false) || get.effect(target, event.card, trigger.source, trigger.source) < 0 ? 2 : -1;
							}
							return trigger.source.getUseValue(event.card) < 1 ? 2 : -1;
						});
					('step 3');
					if (result && result.targets && result.targets.length) {
						event.tar2 = result.targets[0];
						player.line(trigger.source, 'green');
						player.give(event.card, trigger.source);
					} else {
						event.finish();
					}
					('step 4');
					game.log(player, '令', trigger.source, '使用', event.card, '指定', event.tar2);
					if (!trigger.source.canUse(event.card, event.tar2, false)) {
						game.log('目标不合法,直接失去体力.');
						trigger.source.loseHp();
						event.finish();
					} else {
						trigger.source.chooseBool('是否使用' + get.translation(event.card) + '指定' + get.translation(event.tar2) + '？').set('ai', function () {
							return event.tar2.hp >= trigger.source.hp;
						});
					}
					('step 5');
					if (result.bool) {
						trigger.source.useCard(event.card, event.tar2, false);
					} else {
						game.log(trigger.source, '拒绝使用.');
						trigger.source.loseHp();
					}
				},
			},
			xwjh_weichang: {
				audio: 'ext:玄武江湖/audio:2',
				trigger: {
					global: 'damageEnd',
				},
				filter(event, player) {
					return get.xwJuqingBosses().includes(event.player.name);
				},
				forced: true,
				content() {
					'step 0';
					player
						.chooseToUse(get.xwEnableFilter({ name: 'sha' }), '是否视为使用一张【杀】？')
						.set('prompt', 'xwjh_weichang')
						.set('addCount', false);
				},
			},
			xwjh_xianmou: {
				audio: 'ext:玄武江湖/audio:2',
				enable: 'phaseUse',
				usable: 1,
				selectCard: 1,
				position: 'he',
				filterCard(card) {
					return true;
				},
				filter(event, player) {
					return player.countCards('he');
				},
				check(card) {
					if (card.name == 'sha') return 10;
					return get.value(card);
				},
				selectTarget: 1,
				filterTarget(card, player, target) {
					return player != target;
				},
				lose: false,
				discard: false,
				content() {
					'step 0';
					player.give(cards, target);
					('step 1');
					if (target.getCards('h').includes(cards[0]) && target.hasUseTarget(cards[0])) {
						target.chooseUseTarget(cards[0]);
					}
				},
				ai: {
					order: 5,
					result: {
						target: 1,
					},
				},
			},
			xwjh_tiebei: {
				audio: 'ext:玄武江湖/audio:2',
				trigger: {
					player: ['damageEnd'],
				},
				filter(event, player) {
					return true;
				},
				check(event, player) {
					if (player.isTurnedOver()) {
						return true;
					}
					return player.getUseValue({ name: 'sha' }, false) > 0;
				},
				content() {
					'step 0';
					player.turnOver().set('xwjh_tiebei', true);
				},
				group: ['xwjh_tiebei_bei'],
				subSkill: {
					bei: {
						trigger: {
							player: 'turnOverEnd',
						},
						forced: true,
						filter(event, player) {
							return true;
						},
						content() {
							'step 0';
							if (trigger.xwTurnBack) {
								player.chooseUseTarget({ name: 'sha' }, 'nodistance')
								event.finish();
							} else {
								player.chooseBool('是否摸两张牌？');
							}
							('step 1');
							if (result.bool) {
								player.draw(2);
							}
						},
					},
				},
			},
		},
		translate: {
			xwjuqing_boss: '首领',
			xwjuqing_normal: '普通角色',
			xwjuqing: '玄武剧情',
			xwjh_juqing_sishe: '柳雾',
			xwjh_juqing_chenlong: '业屠',
			xwjh_juqing_wuma: '绝戮',
			xwjh_juqing_weiyang: '青莲',
			xwjh_juqing_youji: '冥落',
			xwjh_juqing_shenhou: '云腾',
			xwjh_juqing_gongzhuzhuaya: '宫主爪牙',
			xwjh_juqing_gongzhuxinfu: '宫主心腹',
			xwjh_juqing_gongzhuermu: '宫主耳目',
			xwjh_juqing_yinhu: '楚伥',
			xwjh_juqing_maotu: '夜纤',
			xwjh_juqing_haizhu: '皎山',
			xwjh_juqing_xugou: '玉哮',
			xwjh_juqing_chouniu: '铜吼',
			xwjh_juqing_zishu: '肖诛',
			xwjh_juqing_yanjianqing: '颜剑卿',
			xwjh_gongzun: '宫尊',
			xwjh_gongzun_info: '<b>锁定效果:</b>准备阶段,或本层开始时,你令所有其他未受伤且未翻面的角色翻到背面或失去一点体力.',
			xwjh_poxiu: '破修',
			xwjh_poxiu_info: '<b>觉醒技:</b>一名角色的结束阶段,若场上有未翻面并且未受伤的敌方角色,或者游戏已经进行了三轮(从本层开始时计算),你失去技能【宫尊】,获得技能【癫嗔】、【剑摇】.你对所有未翻面的角色造成一点伤害.',
			xwjh_dianchen: '癫嗔',
			xwjh_dianchen_info: '<b>锁定效果:</b>你击杀一名角色后,摸2+X张牌并增加一点体力上限.X为你本回合击杀的角色数.',
			xwjh_jianyao: '剑摇',
			xwjh_jianyao_info: '<b>锁定效果:</b>你每回合可以额外使用X张【杀】,若你回合结束时使用【杀】的次数未用完,累计到下个回合(X为你已损失的体力值).',
			xwjh_midujq: '泌毒',
			xwjh_midujq_info: "<b>锁定效果:</b>你使用【杀】命中其他角色时,移除其所有的【<a style='color: #FF0000' href=\"javascript:window.xwIntroduceBuff('xwjh_publicmark_zhongdu');\">中毒</a>】状态,令此【杀】伤害+X,X为移除的中毒状态数.",
			xwjh_hanxijq: '寒息',
			xwjh_hanxijq_info: "<b>锁定效果:</b>你对有【<a style='color: #FF0000' href=\"javascript:window.xwIntroduceBuff('xwjh_publicmark_zhuoshao');\">灼烧</a>】状态的角色造成伤害后,移除其一层【灼烧】状态并弃置其一张手牌.",
			xwjh_quehoujq: '却喉',
			xwjh_quehoujq_info: "<b>锁定效果:</b>场上所有敌方角色回合结束时,有12%X的概率获得【<a style='color: #FF0000' href=\"javascript:window.xwIntroduceBuff('xwjh_publicmark_zhongdu');\">中毒</a>】状态(X为其本回合使用的牌数).你阵亡后,此技能依旧生效,且<场上所有敌方角色>改为<场上的角色>.",
			xwjh_longjianjq: '龙剑',
			xwjh_longjianjq_info: '<b>锁定效果:</b>你使用的【杀】结算完成后,有15%X的概率对其所有目标视为使用一张【杀】(无视合法性).此技能每回合最多触发三次.(X为你损失的体力值,且最大为5)',
			xwjh_longyunjq: '龙殒',
			xwjh_longyunjq_info: "<b>锁定效果:</b>你受到伤害后,有40%的概率获得【<a style='color: #FF0000' href=\"javascript:window.xwIntroduceBuff('xwjh_public_effect_kangfen');\">亢奋</a>】状态,40%的概率获得两层【<a style='color: #FF0000' href=\"javascript:window.xwIntroduceBuff('xwjh_publicmark_xunjie');\">迅捷</a>】状态,20%的概率摸两张牌并失去一点体力.",
			xwjh_yanxijq: '炎息',
			xwjh_yanxijq_info: "<b>锁定效果:</b>你造成伤害时,若此伤害非火焰伤害,有15%X的概率转化为火焰伤害.(X为你的体力值).你对一名角色造成火焰伤害后,其获得两层【<a style='color: #FF0000' href=\"javascript:window.xwIntroduceBuff('xwjh_publicmark_zhuoshao');\">灼烧</a>】状态.",
			xwjh_canlve: '残掠',
			xwjh_canlve_info: '<b>锁定效果:</b>你对一名角色造成伤害后,其进行一次判定,若结果不为♥️️,其获得两层撕裂状态.',
			xwjh_jinjia: '金甲',
			xwjh_jinjia_info: '<b>锁定效果:</b>你的♦️️牌视为【罡】.',
			xwjh_chiqing: '赤晴',
			xwjh_chiqing_info: '<b>锁定效果:</b>准备阶段,你召出X张【杀】.X为你已损失的体力值.你使用因此召出的牌,不计入出牌阶段使用次数限制.',
			xwjh_qiegou: '窃钩',
			xwjh_qiegou_info: '敌方装备牌后,若你对应的装备区空缺,你可以进行一次判定,若结果为黑色,此牌进入你的装备区.',
			xwjh_suogu: '缩骨',
			xwjh_suogu_info: '你可以将基本牌当作【闪】使用或打出.',
			xwjh_funian: '腐念',
			xwjh_funian_info: '限定技:出牌阶段,你可以弃置所有的装备牌并回复等量体力值,敌方角色均分(向上取整)X层【中毒】状态,X为你弃置的装备牌数.',
			xwjh_kuiran: '岿然',
			xwjh_kuiran_info: '你可以将♠️️非基本牌当作【罡】使用.你使用【罡】抵消伤害时,进行一次判定,若结果不为♦️️,对伤害来源造成一点伤害.',
			xwjh_juxin: '聚心',
			xwjh_juxin_info: '<b>锁定效果:</b>你装备一张牌后,其他己方角色若对应的装备区没有牌,复制此牌并装备之.',
			xwjh_zhongwei: '忠卫',
			xwjh_zhongwei_info: '你攻击范围内的其他角色成为【杀】的目标后,你可以将你的手牌(至少一张)全部交给其,若如此做,此回合结束阶段,你摸已损失体力的牌.',
			xwjh_ruicha: '锐察',
			xwjh_ruicha_info: '己方角色发动技能【暗察】后,你可以获得展示的牌的复制.',
			xwjh_tiebei: '铁背',
			xwjh_tiebei_info: '你受到伤害后,你可以将武将牌翻面.你的武将牌从正面翻到背面时,视为使用一张<杀>,从背面翻到正面时,摸两张牌.',
			xwjh_xianmou: '献谋',
			xwjh_xianmou_info: '出牌阶段限一次,你可以将一张牌交给其他角色,其可以立即使用之.',
			xwjh_weichang: '为伥',
			xwjh_weichang_info: '当前场景主BOSS受到伤害后,你可以立即使用一张<杀>.',
			xwjh_ancha: '暗察',
			xwjh_ancha_info: '一名其他角色的准备阶段,你可以展示其一张手牌.本回合内其使用这张牌对场上的【宫主耳目】以及当前场景主BOSS无效.',
			xwjh_meigu: '魅骨',
			xwjh_meigu_info: '你受到一名其他角色造成的伤害后,可以展示牌堆顶的一张牌,可以将其交给伤害来源并指定一名角色.其需要对你指定的角色使用此牌(没有距离限制,需合法),否则失去一点体力.',
			xwjh_beiti: '悲啼',
			xwjh_beiti_info: "锁定技:你受到伤害后,扣减一点体力上限,令一名己方其他角色增加一点体力上限或回复一点体力,且伤害来源获得【<a style='color: #FF0000' href=\"javascript:window.xwIntroduceBuff('xwjh_public_effect_neishang');\">内伤</a>】状态.",
			xwjh_xingyuesh: '星跃',
			xwjh_xingyuesh_info: '出牌阶段限一次,你可以失去一点体力,并视为使用一张【移】.结束阶段,你可以查看牌堆顶的X张牌,并依次使用其中的【杀】(X为你损失的体力值).',
			xwjh_xiechi: '邪齿',
			xwjh_xiechi_info: '锁定技:你对一名角色造成伤害时,防止伤害并令其获得两倍数量的【流血】效果.',
			xwjh_shunsui: '吮髓',
			xwjh_shunsui_info: '一名角色因流血而失去体力后,若你手牌数小于上限,你摸一张牌,否则你回复一点体力.',
			xwjh_suilu: '碎颅',
			xwjh_suilu_info: '你使用【杀】对一名角色造成非属性伤害时,可以令自己获得两层【撕裂】效果,令此伤害增加一点.',
			xwjh_zongchang: '纵伥',
			xwjh_zongchang_info: '你对自己造成伤害后,可以令任意两名其他角色摸一张牌.<b>锁定效果:</b>你使用【杀】对【宫主爪牙】计算距离为一的角色没有距离限制.',
		},
	};
	for (const i in QQQ.character) {
		const info = QQQ.character[i];
		if (!info.hp) {
			info.hp = 5;
		}
		if (!info.maxHp) {
			info.maxHp = 5;
		}
		info.sex = 'female';
		info.group = 'xwjh_qiu';
		info.trashBin.push(`ext:玄武江湖/image/${i}.jpg`);
		info.dieAudios = [`ext:玄武江湖/audio/${i}.mp3`];
	}
	lib.xwjh_doInContent.push(function () {
		if (lib.rank) {
			lib.rank.rarity.rare.addArray(Object.keys(QQQ.character));
		}
	});
	lib.config.all.characters.add('xwjuqing');
	lib.config.characters.add('xwjuqing');
	lib.translate['xwjuqing_character_config'] = `玄武剧情`;
	return QQQ;
});
const modejuqing = {
	name: 'xwjuqing',
	startBefore() {
		for (var m in lib.xwjh_modejuqing.element.content) {
			lib.element.content[m] = lib.xwjh_modejuqing.element.content[m];
		}
	},
	start() {
		'step 0';
		game.prepareArena(2);
		('step 1');
		_status.xwJuqingStatus = {};
		('step 2');
		game.me.xwChooseControlBig('请选择剧情', { haoran: '何巍浩然' }, function (button) {
			return 2;
		});
		('step 3');
		if (result && result.links && result.links.length) {
			game.log('正在加载剧本');
			_status.xwImportingDrama = {
				onload() {
					var juqing = _status.xwImportingDrama.juqing;
					delete _status.xwImportingDrama;
					_status.xwJuqingStatus.juqing = juqing;
					game.log('剧本加载完成.');
					game.resume();
				},
			};
			window.xwImportJuqing = function (func) {
				func(lib, game, ui, get, ai, _status, _status.xwImportingDrama);
			};
			game.pause();
			lib.init.js('extension/玄武江湖/drama/' + result.links[0] + '.js');
		} else {
			game.reload();
		}
		('step 4');
		var chars = _status.xwJuqingStatus.juqing.characters;
		var map = {};
		for (var i = 0; i < chars.length; i++) {
			map[i] = chars[i].name;
		}
		game.me.xwChooseControlBig('请选择人物', map, function () {
			return 2;
		});
		('step 5');
		if (result && result.links && result.links.length) {
			var charlist = _status.xwJuqingStatus.juqing.characters[result.links[0]];
			_status.xwJuqingStatus.groupId = result.links[0];
			game.me.getId();
			game.me.next.getId();
			game.me.init(charlist.group[0]);
			game.me.next.init(charlist.group[1]);
			game.me.side = 'zhu';
			game.me.next.side = 'zhu';
			if (lib.config.xwjq_control_friend) {
				game.me.next._trueMe = game.me;
				game.addGlobalSkill('autoswap');
			}
		} else {
			game.reload();
		}
		('step 6');
		_status.xwJuqingStatus.sceneId = 0;
		_status.xwJuqingStatus.scene = _status.xwJuqingStatus.juqing.scenes[0];
		('step 7');
		if (_status.xwJuqingStatus.scene.enter) {
			_status.xwJuqingStatus.scene.enter();
		}
		('step 8');
		event.trigger('gameStart');
		('step 0');
		game.gameDraw(game.me, function (cur) {
			return 4;
		});
		('step 10');
		game.phaseLoop(game.me);
	},
	game: {
		syncMenu: true,
		chooseCharacter() { },
		showIdentity() { },
		checkResult() { },
	},
	get: {
		xwJuqingBosses() {
			if (_status.xwJuqingStatus) {
				return _status.xwJuqingStatus.scene.boss;
			}
			return [];
		},
		attitude(a, b) {
			if (!a) {
				a = _status.event.player || game.me;
			}
			if (!b) {
				b = _status.event.player || game.me;
			} //QQQ
			if (a == b) return 10;
			if (a.side == b.side) return 10;
			return -10;
		},
	},
	element: {
		content: {
			phaseLoop() {
				'step 0';
				for (var i = 0; i < lib.onphase.length; i++) {
					lib.onphase[i]();
				}
				player.phase();
				('step 1');
				if (event.tempNext) {
					event.player = event.tempNext;
					delete event.tempNext;
				} else if (!game.players.includes(event.player.next)) {
					event.player = game.findNext(event.player.next);
				} else {
					event.player = event.player.next;
				}
				event.goto(0);
			},
		},
		player: {
			dieAfter(source) {
				if (
					game.countPlayer(function (current) {
						return current.side == game.me.side;
					}) == 0
				) {
					game.over(false);
				}
				if (
					game.countPlayer(function (current) {
						return current.side != game.me.side;
					}) == 0
				) {
					var pls = game.dead.slice(0);
					for (var pl of pls) {
						if (pl.side == 'zhu') {
							pl.revive(Math.min(2, game.me.maxHp));
						} else {
							game.removePlayer(pl);
						}
					}
					var next = game.createEvent('dramaEnd');
					next.setContent(function () {
						'step 0';
						if (_status.xwJuqingStatus.scene.end) {
							_status.xwJuqingStatus.scene.end();
						} else {
							_status.xwJuqingStatus.sceneId = _status.xwJuqingStatus.scene.next;
							_status.xwJuqingStatus.scene = _status.xwJuqingStatus.juqing.scenes[_status.xwJuqingStatus.sceneId];
							if (_status.xwJuqingStatus.scene.enter) {
								_status.xwJuqingStatus.scene.enter();
							}
						}
						('step 1');
						var cards = Array.from(ui.ordering.childNodes);
						while (cards.length) {
							cards.shift().discard();
						}
						('step 2');
						var evt = _status.event.getParent('phase');
						if (evt && evt.name == 'phase') {
							//QQQ
							evt.finish();
						}
					});
				}
			},
			dieAfter2(source) { },
		},
	},
};
lib.xwjh_modejuqing = modejuqing;
game.addMode('xwjuqing', modejuqing, {
	translate: '玄武剧情',
	config: {
		control_friend: {
			name: '控制队友',
			intro: '开启后可以控制队友操作',
			init: lib.config.xwjq_control_friend === undefined ? false : lib.config.xwjq_control_friend,
			onclick(item) {
				game.saveConfig('control_friend', item, true);
				game.saveConfig('xwjq_control_friend', item);
			},
		},
	},
	onremove() {
		game.clearModeConfig('xwjuqing');
	},
});
lib.mode.xwjuqing.splash = 'ext:玄武江湖/image/xwjuqing.jpg';

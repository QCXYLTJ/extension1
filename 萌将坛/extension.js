import { lib, game, ui, get, ai, _status } from '../../noname.js'
game.import('extension', function (lib, game, ui, get, ai, _status) {
	if (lib) lib.scqhExtension = '萌将坛';
	if (lib) {
		if (!lib.scqh) lib.scqh = {};
		if (!lib.scqh.name) lib.scqh.name = '萌将坛';
	}
	return {
		name: '萌将坛',
		content(config, pack) {
			'use strict';
			lib.init.js('extension/' + lib.scqhExtension + '/atlas.js', null);
			if (config.koi_enhance_zhu && config.koi_enhance_zhu != '0') {
				game.koi_enhance_zhu = config.koi_enhance_zhu;
			}
			let gengxin_scqh = ['2.63更新说明', '<br/>●本期新武将「凯隐」、「希维尔」、「德莱文」、「魏延」', '<br/>●本期重做武将「吕布」、「忍者杀手(藤木户健二)」', '<br/>●重做专属卡牌【闪现】', '<br/>●优化部分武将技能的ai逻辑', '<br/>●给部分技能增加语音、给部分武将增加皮肤', '<br/>●(发现bug可以找作者反馈)', '<br/>●(作者🐧2932351256)'];
			game.showExtensionChangeLog(gengxin_scqh, '萌将坛');
		},
		precontent() {
			lib.scqhExtension = '萌将坛';
			if (lib.namePrefix) {
				lib.namePrefix.set('织', {
					color: '#ee9ac7',
					nature: 'firemm',
				});
				lib.namePrefix.set('🐱', {
					color: '#fdd559',
					nature: 'soilmm',
				});
			}
			let path = 'extension/' + lib.scqhExtension + '/';
			let abc = function () {
				window.scqh(lib, game, ui, get, ai, _status);
			};
			let scqh = {};
			if (!scqh.character) scqh.character = [];
			scqh.character.add('lol');
			scqh.character.add('pcr');
			scqh.character.add('fgo');
			scqh.character.add('diy');
			scqh.character.add('acg');
			scqh.character.add('miao');
			scqh.character.add('zhinv');
			scqh.character.add('jojo');
			scqh.character.add('magia');
			scqh.character.add('rezero');
			scqh.character.add('fivesec');
			scqh.character.add('koihime');
			scqh.character.add('gamelife');
			scqh.character.add('guzhenren');
			scqh.character.add('scqhBasic');
			scqh.character.add('add');
			if (!scqh.card) scqh.card = [];
			scqh.card.add('basic');
			scqh.card.add('equip');
			scqh.card.add('trick');
			scqh.card.add('land');
			if (!scqh.func) scqh.func = [];
			scqh.func.add('function');
			scqh.func.add('jojo');
			scqh.func.add('pcr');
			scqh.func.add('trigger');
			if (!scqh.ruleSkill) scqh.ruleSkill = [];
			scqh.ruleSkill.add('basic');
			scqh.ruleSkill.add('xitong');
			scqh.ruleSkill.add('dualside');
			for (let id in scqh) {
				let list = scqh[id];
				if (list && Array.isArray(list)) {
					for (let idx of list) {
						if (typeof idx === 'string') lib.init.js(path + id, idx, abc);
					}
				}
			}
			let wuxing = lib.config['extension_' + lib.scqhExtension + '_wuxing'];
			if (wuxing && typeof wuxing === 'string' && wuxing !== '0') {
				if (!lib.help.五行生克) {
					lib.init.js(path + 'ruleSkill', 'wuxing', abc);
				}
			}
			let time = lib.config['extension_' + lib.scqhExtension + '_time'];
			if (time && typeof time === 'string' && time !== 'Infinity') {
				lib.init.js(path + 'ruleSkill', 'time', abc);
			}
			if (lib.config['extension_' + lib.scqhExtension + '_ygo']) {
				lib.init.js(path + 'ruleSkill', 'ygo', abc);
			}
			lib.init.js(path, 'card');
			lib.init.js(path, 'character');
			window.scqh_import = function (fun) {
				fun(lib, game, ui, get, ai, _status);
			};
			lib.init.js(path + 'skin', 'skin', null);
			lib.init.css(path, 'ui');
		},
		package: {
			intro: '<br><br><span style="color: gold">潜水的火修复版<br>『无名杀扩展大全群』:771901025</span><br><br><li>如有BUG或修改意见可以找作者进行反馈(🐧2932351256)',
			author: '神椿千鹤 <img style=width:19px src=extension/' + lib.scqhExtension + '/ui/owner.png>',
			version: '2.63',
		},
		config: {
			line: {
				name: '<img style=width:238px src=extension/' + lib.scqhExtension + '/ui/line.png>',
				clear: true,
			},
			xitong: {
				name: '<b><font color=#00FFFF>战局辅助工具</font>',
				intro: '在游戏对局内,可以使用名为『系统』的特殊技能.',
				init: false,
			},
			xitong_trueye: {
				name: '全体明牌',
				intro: '在游戏对局内,玩家可以看见所有角色的手牌.',
				init: false,
			},
			line1: {
				name: '<img style=width:238px src=extension/' + lib.scqhExtension + '/ui/line.png>',
				clear: true,
			},
			secondName: {
				name: '<font color=#98fb98>显示称号/真名</font>',
				clear: true,
				intro: false,
			},
			secondName_scqhKoihime: {
				name: '恋姬演武',
				intro: '例如:刘备／桃香',
				init: false,
			},
			secondName_scqhLOL: {
				name: '英雄联盟',
				init: false,
			},
			secondName_scqhPcr: {
				name: '公主连结',
				init: false,
			},
			line3: {
				name: '<img style=width:238px src=extension/' + lib.scqhExtension + '/ui/line.png>',
				clear: true,
			},
			wuxing: {
				name: '<b><font color=#FFFF00>五行生克</font>',
				forced: true,
				intro: '<ul><li>每名角色和牌堆内的部分卡牌在游戏开始时随机获得一个属性<li>当一名角色成为相克属性卡牌的目标时,须弃置一张牌<li>当一名角色成为相生属性卡牌的目标时,须摸一张牌<li>金克木,金生水<br>木克土,木生火<br>水克火,水生木<br>火克金,火生土<br>土克水,土生金',
				init: '0',
				item: {
					0: '关闭',
					0.1: '10%',
					0.2: '20%',
					0.3: '30%',
					0.4: '40%',
					0.5: '50%',
					0.6: '60%',
					0.7: '70%',
					0.8: '80%',
					0.9: '90%',
					1: '100%',
				},
			},
			line5: {
				name: '<img style=width:238px src=extension/' + lib.scqhExtension + '/ui/line.png>',
				clear: true,
			},
			time: {
				name: '主动出牌时间限制',
				intro: '开启后,限制主动出牌阶段的持续时间,每使用一张牌,则主动出牌时间-1秒.',
				init: 'Infinity',
				item: {
					Infinity: '默认',
					60: '60秒',
					50: '50秒',
					40: '40秒',
					30: '30秒',
				},
			},
			line6: {
				name: '<img style=width:238px src=extension/' + lib.scqhExtension + '/ui/line.png>',
				clear: true,
			},
			sew_character_list: {
				name: '<b><font color="#00FFFF">ACG',
				intro: false,
				init: '0',
				item: {
					0: '查看',
					恋姬梦想: '<img style=width:138px src=extension/' + lib.scqhExtension + '/ui/sewLog_koi.jpg>',
					公主连结: '<img style=width:238px src=extension/' + lib.scqhExtension + '/ui/sewLog_pcr.jpg>',
					决斗链接: '<img style=width:150px src=extension/' + lib.scqhExtension + '/ui/sewLog_ygo.jpg>',
					英雄联盟: '<img style=width:150px src=extension/' + lib.scqhExtension + '/ui/sewLog_lol.jpg>',
					冠位指定: '<img style=width:150px src=extension/' + lib.scqhExtension + '/ui/sewLog_fgo.jpg>',
				},
			},
			line100: {
				name: '<img style=width:238px src=extension/' + lib.scqhExtension + '/ui/line.png>',
				clear: true,
			},
			sew_link: {
				name: '<img style=width:220px src=extension/' + lib.scqhExtension + '/ui/wall/' + Math.floor(Math.random() * 10) + '.png>',
				clear: true,
			},
		},
	};
});

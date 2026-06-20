import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
	return {
		name: '忽悠宇宙',
		content(config, pack) {
			window.hyyzImport = (func) => func(lib, game, ui, get, ai, _status);
			//强度分包
			lib.init.js(
				`extension/忽悠宇宙/js/asset/rarity.js`,
				null,
				function () { },
				function () { }
			);
		},
		precontent(config, pack) {
			window.hyyzImport = (func) => func(lib, game, ui, get, ai, _status);
			//衍生文件,绑定在windows下的全局
			lib.init.js(`extension/忽悠宇宙/js/derive/buff.js`); //[效果]系统buff
			lib.init.js(`extension/忽悠宇宙/js/derive/mingtu.js`); //命途系统mingtu
			lib.init.js(`extension/忽悠宇宙/js/derive/weather.js`); //那维莱特天气系统weather
			lib.init.js(`extension/忽悠宇宙/js/derive/hyyzCore.js`); //其他代码
			//lib.init.js(`extension/地址`, "文件名");//能导window文件
			//忽悠宇宙
			lib.init.js(`extension/忽悠宇宙/js/asset/hyyz.js`, null);
			//hyyzCard
			lib.init.js(`extension/忽悠宇宙/js/asset/hyyzCard.js`, null);
			//圆梦计划
			lib.init.js(`extension/忽悠宇宙/js/asset/hyyzYm.js`, null);
			//hyyzYm
			lib.init.js(`extension/忽悠宇宙/js/asset/hyyzYmCard.js`, null);
			lib.init.js(`extension/忽悠宇宙/js/asset/hyyzYslt.js`, null);
		},
		config: {
			hyyz_group: {
				//投稿武将入口
				name: '<span style="font-size:17px; color: #ea059e">投稿武将入口▶</span>',
				clear: true,
				onclick() {
					if (this.group == undefined) {
						var more = ui.create.div('.group', '<b style=\"color: #ea059e\">米哈游の小宇宙:</b>519463281</br><div style="border:2px solid gray"><span><img style=width:220px src=extension/忽悠宇宙/image/hyyz2.png></span>');
						this.parentNode.insertBefore(more, this.nextSibling);
						this.group = more;
						this.innerHTML = '<span style="font-size:17px; color: #ea059e">投稿武将入口▼</span>';
					} else {
						this.parentNode.removeChild(this.group);
						delete this.group;
						this.innerHTML = '<span style="font-size:17px; color: #ea059e">投稿武将入口▶</span>';
					}
				},
			},
			hyyz_sort: {
				//分包
				name: '<span style="color: #55de10;">切换分包规则</span>',
				intro: '重启生效,重新划分<圆梦计划>武将界面的分包',
				item: {
					devise: '设计鉴赏',
					storage: '强度划分',
					author: '设计师',
				},
				init: 'devise',
				clear: false,
			},
			hyyz_sha: {
				//杀
				name: '<span style="color: #55de10;">加入特殊杀</span>',
				intro: '往牌堆加入多种属性杀,详情见选项-其他-帮助-忽悠机制</br>若想关掉全部装备,可在圆梦计划或忽悠宇宙卡牌界面翻到最低下,编辑牌堆中进行关闭.',
				init: true,
				clear: false,
			},
		},
		help: {
			//效果介绍
			'忽悠<span style="color: #f40cf0">机制</span>':
				'<div style=\"margin:10px\">关于<b style=\"color: #008cff\">[效果]</b></div>\
                <ul style=\"margin-top:0\">\
                    <li>本扩展包特有的[效果]机制,分为增益[效果]和负面[效果],其中负面[效果]包含dot[效果](未声明的情况下,[效果]通常指普通负面[效果]).</li>\
                    <li><b style=\"color: #008cff">[效果]</b>仅能被本扩展包的部分武将赋予,[净化]能解除负面[效果].</li>\
                    <li><b style=\"color: #0aba0a">[净化]</b></br>移除对象判定区的牌、复原武将牌、移除所有负面[效果].</li>\
                </ul>' +
				'<li><b style=\"color: #f40cf0">以下是各类[效果]的详细介绍</b></li>\
                <ul>\
                    <li><b style=\"color: #008cff\">[涂鸦]</b>:不能响应与装备区内牌花色相同的牌.</li>\
                    <li><b style=\"color: #008cff\">[重伤]</b>:下次受到的伤害+1.</li>\
                    <li><b style=\"color: #008cff\">[虚弱]</b>:下次造成的伤害-1.</li>\
                    <li><b style=\"color: #008cff\">[加速]</b>增益:回合开始时,为弃牌阶段前插入一个出牌阶段.</li>\
                    <li><b style=\"color: #008cff\">[减速]</b>:回合开始时,若此回合有出牌阶段和结束阶段,交换首次出现的出牌阶段和结束阶段.</li>\
                </ul>' +
				'<li><b style=\"color: #f40cf0\">以下为负面[效果]</b></li>\
                <ul>\
                    <li><b style=\"color: #008cff\">冰[冻结]</b>获得此效果的回合不能使用、打出或弃置手牌.</li>\
                    <li><b style=\"color: #008cff\">虚数[禁锢]</b>使用的下一张牌无效.</li>\
                    <li><b style=\"color: #008cff\">量子[纠缠]</b>下次成为即时牌的目标后,重铸一张与之同类型的牌,否则此牌结算两次.</li>\
                </ul>' +
				'<li><b style=\"color: #f40cf0\">以下均为dot[效果].<引爆>时,额外结算一次高亮效果.</b></li>\
                <ul>\
                    <li><b style=\"color: #008cff\">无[裂伤]</b>dot(0/5)使用牌指定目标后,若与其的距离大于当前体力值,<b style=\"color: #ff6666\">失去1点体力</b>,[裂伤]-1.</li>\
                    <li><b style=\"color: #008cff\">火[灼烧]</b>dot(0/5)<b style=\"color: #ff6666\">随机[点燃]每个区域各一张牌</b>,[灼烧]-1并重复此操作.</br>使用[点燃]的牌无距离和次数限制,但回合结束后须全部弃置.</li>\
                    <li><b style=\"color: #008cff\">风[风化]</b>dot(0/5)准备阶段,受到<b style=\"color: #ff6666\">与[风化]层数等量的无来源风蚀伤害</b>,移除[风化].</li>\
                    <li><b style=\"color: #008cff\">雷[触电]</b>dot(0/5)始终横置;使用或打出无目标的牌后受到<b style=\"color: #ff6666\">1点雷电伤害</b>,[触电]-1.</li>\
                </ul>' +
				'<div style=\"margin:10px\">关于<b style=\"color: #008cff\">持明族</b></div>\
                <ul style=\"margin-top:0\">\
                    <li>牌堆刷新后,场上阵亡的持明族复活,减少1点体力上限并摸四张牌.</li>\
                    <li><b style=\"color: #008cff\">持明族</b>武将:饮月丹恒+白露+我丹恒+丹恒白露</li>\
                </ul>' +
				'<div style=\"margin:10px\">关于<b style=\"color: #008cff\">追加攻击</b></div>\
                <ul style=\"margin-top:0\">\
                    <li>伤害来源存活的情况下,以下<b style=\"color: #ff6666\">技能直伤和回合外的伤害</b>称为追加攻击伤害.</li>\
                </ul>' +
				'<div style=\"margin:10px\">关于<b style=\"color: #008cff\">新属性</b></div>\
                <ul style=\"margin-top:0\">\
                    <li><风蚀>hyyz_wind.</li>\
                    <li>一名角色受到<span style="text-shadow: 1px 1px 2px #0aba0a,0 0 8px #018801;color: white">风蚀</span>伤害时,弃置至少一张牌;每额外弃置一张牌,此伤害减少1点.</li>\
                    <li><量子>hyyz_quantum.</li>\
                    <li>一名角色使用<span style="text-shadow: 1px 1px 2px #07a6f0,0 0 8px #0a1bb9;color: white">量子</span>【杀】指定目标后,可以重铸一张牌,目标角色随机重铸一张同类型的牌.</li>\
                    <li><虚数>hyyz_imaginary.</li>\
                    <li>一名角色受到<span style="text-shadow: 1px 1px 2px #ffee00,0 0 8px #ccaa11;color: white">虚数</span>伤害时,本回合护甲和防具失效.</li>\
                </ul>',
		},
		package: {
			intro: (function () {
				//参考十周年UI,感谢 萌新
				var version = ['<忽悠宇宙>', '萌新up的业余制作.', '<忽悠宇宙>包含up自我设计米哈游旗下的各种武将,而包里大多数是以<<span style="color: #f40cf0; text-shadow: 1px 1px 1px #ea059e">梦</span>>开头的武将,均为粉丝投稿的作品.', '萌新up,萌新扩展,未来就有赖各位粉丝的支持啦', ' ο(=•ω＜=)ρ⌒☆'];
				var log = ['1.仅适配无名杀<span style="color:red">1.10.6</span>及更高版本', '2.若未显示武将,请在无名杀的武将列表查找', '3.游戏内导入耗时较长,推荐使用MT管理器+万能导入法', '4.对所有文件进行分包,对hyyz武将及新版武将使用了异步重写', '5.将扩展面板的扩展机制的介绍移动至无名杀选项-其他-帮助-忽悠机制', '6.增加了十周年UI可读取的卡牌和势力美化', '7.新增up的新武将<砂金>,5月测试包武将.忽悠动态包已同步更新多位武将动态皮肤.', '8.修复触电buff的始终横置效果'];
				return `<br><br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br><br></span><p style=" font-size:15px; line-height:normal; color: #07a6f0; text-shadow: 1px 1px 1px #008cff;">${version.join('<br>')}</p>\
                <p style=" font-size:13px; line-height:normal; color: #f40cf0; text-shadow: 1px 1px 1px #ea059e;">${log.join('<br>')}</p>`;
			})(),
			author: "b站　<span style='animation:hyyz_meng 0.5s infinite; -webkit-animation:hyyz_meng 0.5s infinite; '>紫灵谷的骊歌</span>",
			diskURL: '前往粉丝群米忽悠の小宇宙519463281下载',
			forumURL: 'https://space.bilibili.com/66759971?spm_id_from=333.1007.0.0',
			version: 'v1.12.19', //v1.[2023.6发布起至今]//2024.5.1==v1.12.1
		},
	};
});

import { lib, game, ui, get, ai, _status } from '../../../noname.js';
export let CONFIG = {
	//分界线
	introtip: {
		name: '<a style="cursor: pointer;font-weight: bold;"><font color=#ffa10a><—欢迎游玩驶舰之向扩展—></font></a>',
		clear: true,
	},
	//扩展介绍
	intromrfz: {
		name: '<div class="hth_menu">▶扩展信息(点击后展开)</div>',
		clear: true,
		onclick() {
			if (this.hth_more === undefined) {
				var more = ui.create.div('.hth_more', '<br>' + '<img style="width:225px" src="extension/驶舰之向/image/orther/SJZX.jpg">' + '<br><a style="cursor: pointer;font-weight: bold;"><font color="#ed7e78"><————扩展介绍————></font></a><br>本扩展主要由林登万制作,武将技能设计主要由林登万和圣晴天空提供,技能均为原创' + '<br>干员介绍和势力均参考PRTS,大部分干员语言也来自PRTS(<a onclick="if (mrfzfuc) mrfzfuc.copyText(1)" style="cursor: pointer;font-weight: bold;">https://prts.wiki/</a>),少部分干员(主要是剧情角色)配音使用B站up的配音或AI合成:' + '<br>保存者、克丽斯腾:<a onclick="if (mrfzfuc) mrfzfuc.copyText(3)" style="cursor: pointer;font-weight: bold;">BV1Yh411L72H</a>' + '<br>AI配音(GPT-SoVITS):特雷西斯(音源:赫德雷、赫拉格)、特蕾西娅(音源:黍、九色鹿)' + '<br>ACE:<a onclick="if (mrfzfuc) mrfzfuc.copyText(4)" style="cursor: pointer;font-weight: bold;">明日方舟:黎明前奏</a>' + '<br><a style="cursor: pointer;font-weight: bold;"><font color="#ed7e78"><——鸣谢列表——></font></a>' + '<br>果敢心(提供意见)<br>灭蚁强小风儿(测试)<br>今天整点什么/光阴(武将设计)<br>落尘星河(武将设计)');
				this.parentNode.insertBefore(more, this.nextSibling);
				this.hth_more = more;
				this.innerHTML = '<div class="hth_menu">▼扩展信息(点击后折叠)</div>';
			} else {
				this.parentNode.removeChild(this.hth_more);
				delete this.hth_more;
				this.innerHTML = '<div class="hth_menu">▶扩展信息(点击后展开)</div>';
			}
		},
	},
	//武将、成就信息
	charAndAch: {
		name: '999',
		clear: true,
	},
	//查看更新内容
	readUpdate: {
		name: '<span style="text-decoration: underline;">点击查看本扩展更新内容<span>',
		clear: true,
		onclick() {
			//来源于全能搜索
			if (_status.sjzxUpdateContent) return false;
			_status.sjzxUpdateContent = true;
			let oReq = new XMLHttpRequest();
			oReq.addEventListener('load', function () {
				let layer = ui.create.div(ui.window, '.updateContent');
				let close = ui.create.div(layer, '.updateContentClose', () => {
					delete _status.sjzxUpdateContent;
					layer.remove();
				});
				let content = ui.create.div(layer, {
					width: '100%',
					height: '100%',
					innerHTML: this.responseText,
				});
			});
			oReq.addEventListener('error', (err) => {
				delete _status.sjzxUpdateContent;
				console.warn('获取历史更新内容失败', err);
				alert('获取历史更新内容失败');
			});
			oReq.open('GET', 'extension/驶舰之向/updateContent.txt');
			oReq.send();
		},
	},
	//获得的成就
	achievement_mrfz: {
		name: '<span style="text-decoration: underline;">点击查看已获得的刻蚀章<span>',
		clear: true,
		onclick() {
			mrfzfuc.setRandomBGI('extension/驶舰之向/image/background', function (randomImage, error) {
				if (error) {
					console.warn('错误:', error);
					return;
				}
				mrfzfuc.ShowAchievement(randomImage, function () {
					var list = {};
					for (var key in lib.config.AchList_mrfz) {
						if (lib.config.AchList_mrfz[key] == false) continue;
						list[key] = mrfzfuc.AchList[key];
					}
					return list;
				});
			});
		},
	},
	del_achievement_mrfz: {
		name: '<button type="button">删除获得的所有成就</button>',
		clear: true,
		onclick(bool) {
			var y = confirm('选择确认删除获得的所有成就,这个操作不可逆!');
			if (y == true) {
				mrfzfuc.DeleteOrGetAllAch(false);
				confirm('已全部删除,重启后生效!');
			}
		},
	},
	setcharaudio: {
		name: '<button type="button">详细设置角色配音</button>',
		clear: true,
		onclick(bool) {
			var char = mrfzfuc.getSJZXchar();
			mrfzfuc.setRandomBGI('extension/驶舰之向/image/background', function (randomImage, error) {
				if (error) {
					console.warn('错误:', error);
					return;
				}
				mrfzfuc.audioSetDiv('配音设置', randomImage, char);
			});
		},
	},
	//————分界线————//
	settip: {
		name: '<font color=#ed7e78><————设置————></font></a>',
		clear: true,
	},
	ChangeBgI_mrfz: {
		name: '切换背景图片',
		intro: '可以切换背景图片,立刻生效,所有图片均放置在‘驶舰之向/image/background’处,想要的可以自取',
		clear: true,
		onclick(item) {
			mrfzfuc.ShowsetBackgroud();
		},
	},
	isAchMode: {
		name: '开启成就模式(重启生效)',
		intro: '开启后可获得成就,开启本模式会修改game.over的代码,如果出现兼容性问题请关闭此模式!',
		init: true,
	},
	isBanSp: {
		name: '禁止同名角色同时上场',
		intro: '开启后异格、升变角色无法同时上场</br>例:场上不会同时出现陈和TheP',
		init: false,
	},
	isOneGroup: {
		name: '所有本扩展角色同势力',
		intro: '开启后所有本扩展的角色势力均会改为相同势力',
		init: true,
	},
	isNoLimted: {
		name: '红蒂选择武将无限制',
		intro: '开启后红蒂选择武将将没有限制,这可能会影响到正常的游戏进程',
		init: false,
	},
	minSkillsNumbers_PRTS: {
		name: '普瑞赛斯保底技能数',
		intro: '①请不要填写过大的数值(最好不大于20),否则会造成严重的卡顿甚至游戏卡死.<br>②请填写正整数',
		input: true,
		init: lib.config.minSkillsNumbers_PRTS === undefined ? '15' : lib.config.minSkillsNumbers_PRTS,
		onblur(event) {
			var num = parseInt(event.target.innerText);
			if (num <= 0 || isNaN(num)) {
				alert(`请输入正整数!`);
				return;
			}
			game.saveConfig('minSkillsNumbers_PRTS', num);
		},
	},
	filterSkillsPercentage_PRTS: {
		name: '普瑞赛斯百分比过滤不可选的汉字',
		intro: '请填写不大于100的整数或0,100即过滤100%的不可选汉字,0即过滤0%不可选的汉字',
		input: true,
		init: lib.config.filterSkillsPercentage_PRTS === undefined ? '75' : lib.config.filterSkillsPercentage_PRTS,
		onblur(event) {
			var num = parseInt(event.target.innerText);
			if (num < 0 || num > 100 || isNaN(num)) {
				alert(`请输入一个不大于100整数或0!`);
				return;
			}
			game.saveConfig('filterSkillsPercentage_PRTS', num);
		},
	},
	audiochoose: {
		name: '一键设置配音',
		intro: '将所有的角色配音设置成一种语言的配音',
		init: 'CN',
		item: {
			boundary0: '<b>———————<font color=#eed653><==介绍==></font>———————</b>',
			intro0: '自动将所有角色的配音改为<font color=#53e6ee>您所选择的选项</font>',
			intro1: '<font color=#53e6ee>不会</font>覆盖您自定义配音的设置',
			intro2: '<font color=#53e6ee>没有对应配音</font>的角色将自动改为<font color=#53e6ee>中配</font>',
			intro3: '选择完成后<font color=#53e6ee>立刻生效</font>',
			boundary1: '<b>———————<font color=#eed653><==选项==></font>———————</b>',
			CN: '<button type="button">中配</button>',
			JP: '<button type="button">日配</button>',
			EN: '<button type="button">英配</button>',
			OT: '<button type="button">其他</button>',
			boundary2: '<b>———————————————————</b>',
		},
		async onclick(item) {
			if (item.length > 2) {
				alert('此选项不可选,请重新选择!');
				return;
			} else if (['EN', 'OT'].includes(item) && lib.config.extension_驶舰之向_audiochoose_ignore != true) {
				var confirmText = `警告:本扩展仅内置了中配和部分日配,没有内置${mrfzfuc.tranAudioSet(item)}的配音,需要您自行添加!是否仍然选择${mrfzfuc.tranAudioSet(item)}？`;
				if (confirm(confirmText) == false) return;
				game.saveConfig('extension_驶舰之向_audiochoose_ignore', true);
			}
			game.saveConfig('extension_驶舰之向_audiochoose', item);
			game.saveConfig('audiochoose', item);
			await mrfzfuc.setAudio(lib.config.extension_驶舰之向_audiochoose, 'reload');
		},
	},
};

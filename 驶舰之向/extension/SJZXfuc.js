import { lib, game, ui, get, ai, _status } from '../../../noname.js';
export let mrfzfuc = {
	GroupSJZX: [
		{ name: 'luomrfz', translation: '罗' },
		{ name: 'xiemrfz', translation: '谢' },
		{ name: 'bamrfz', translation: '巴' },
		{ name: 'yimrfz', translation: '伊' },
		{ name: 'laimrfz', translation: '莱' },
		{ name: 'xumrfz', translation: '叙' },
		{ name: 'haimrfz', translation: '海' },
		{ name: 'liemrfz', translation: '深' },
		{ name: 'qimrfz', translation: '企' },
		{ name: 'kamrfz', translation: '卡' },
		{ name: 'gemrfz', translation: '哥' },
		{ name: 'longmrfz', translation: '龙' },
		{ name: 'weimrfz', translation: '维' },
		{ name: 'lamrfz', translation: '拉' },
		{ name: 'shimrfz', translation: '使' },
		{ name: 'wumrfz', translation: '乌' },
		{ name: 'samrfz', translation: '萨' },
		{ name: 'orthermrfz', translation: '联' },
		{ name: 'yanmrfz', translation: '炎' },
		{ name: 'limrfz', translation: '鲤' },
		{ name: 'ximrfz', translation: '汐' },
		{ name: 'hongmrfz', translation: '红' },
		{ name: 'dongmrfz', translation: '东' },
		{ name: 'lymrfz', translation: '茵' },
		{ name: 'shenmrfz', translation: '深' },
		{ name: 'qianmrfz', translation: '前' },
		{ name: 'mimrfz', translation: '诺' },
		{ name: 'samimrfz', translation: '米' },
		{ name: 'zhmrfz', translation: '整' },
		{ name: 'leimrfz', translation: '雷' },
		{ name: 'bomrfz', translation: '玻' },
		{ name: 'daimrfz', translation: '戴' },
		{ name: 'a_groupmrfz', translation: '阿' },
	],
	AchData_tmp: {},
	//————成就列表————//
	AchList: {
		//隐藏成就
		FTLmrfz: {
			image: 'extension/驶舰之向/image/gloryroad/FTL_mrfz.png',
			name: 'FasterThanLight',
			name2: 'FTLmrfz',
			intro: '<b><i>‘无需先祖预示,吾辈自会探索深空’</i></b>',
			hidden: true,
		},
		naishuaiwangmrfz: {
			image: 'extension/驶舰之向/image/gloryroad/naishuaiwang_mrfz.png',
			name: '耐摔王',
			name2: 'naishuaiwangmrfz',
			intro: "<b><i>It's been a long day without you frend~</i></b>",
			hidden: true,
		},
		//胜利成就
		lose120mrfz: {
			image: 'extension/驶舰之向/image/gloryroad/lose120_mrfz.png',
			name: '千锤百炼的棋手',
			name2: 'lose120mrfz',
			intro: '在身份局以任意身份累计失败120场',
			char: false,
		},
		win100mrfz: {
			image: 'extension/驶舰之向/image/gloryroad/win100_mrfz.png',
			name: '百日的思索与决策',
			name2: 'win100mrfz',
			intro: '在身份局以任意身份累计获得100场胜利',
			char: false,
		},
		//干员专属成就
		wugenzhiyumrfz: {
			image: 'extension/驶舰之向/image/gloryroad/wugenzhiyu_mrfz.png',
			name: '无根之雨',
			name2: 'wugenzhiyumrfz',
			//color:'#65aa64',
			intro: '使用缪尔赛思作为内奸获得一局游戏的胜利',
		},
		huizhangmrfz: {
			image: 'extension/驶舰之向/image/gloryroad/huizhang_mrfz.png',
			name: '徽章',
			name2: 'huizhangmrfz',
			//color:'#594b72',
			intro: '使用涤火杰西卡胜利一局(内奸除外)且你和队友均未阵亡',
		},
		shengshengbuximrfz: {
			image: 'extension/驶舰之向/image/gloryroad/shengshengbuxi_mrfz.png',
			name: '生生不息',
			name2: 'shengshengbuximrfz',
			intro: '在身份模式使用麦哲伦在一局游戏中发动3次【勘查】且于一回合内造成至少5点伤害',
		},
		nancaiderenmrfz: {
			image: 'extension/驶舰之向/image/gloryroad/nancaideren_mrfz.png',
			name: '难猜的人',
			name2: 'nancaiderenmrfz',
			intro: '在身份模式使用银灰在一局游戏中因【雪变】造成两次伤害',
		},
		denghuoweimingmrfz: {
			image: 'extension/驶舰之向/image/gloryroad/denghuoweiming_mrfz.png',
			name: '灯火微明',
			name2: 'denghuoweimingmrfz',
			intro: '在身份模式使用艾丽妮在一局游戏中发动过3次【执灯】且每次至少有两名其他角色因此摸牌',
		},
		zongxiazhiyuanmrfz: {
			image: 'extension/驶舰之向/image/gloryroad/zongxiazhiyuan_mrfz.png',
			name: '总辖之愿',
			name2: 'zongxiazhiyuanmrfz',
			intro: '使用克丽斯腾作为主公开局,在自己死亡的情况下获得胜利',
		},
		huoshanmrfz: {
			image: 'extension/驶舰之向/image/gloryroad/huoshan_mrfz.png',
			name: '火山',
			name2: 'huoshanmrfz',
			intro: '使用艾雅法拉于身份模式在一回合内造成至少5点伤害',
		},
		duzouqumrfz: {
			image: 'extension/驶舰之向/image/gloryroad/duzouqu_mrfz.png',
			name: '独奏曲',
			name2: 'duzouqumrfz',
			intro: '使用号角于身份模式胜利(内奸除外)且胜利时队友均死亡',
		},
	},
	/**
	 * 用正则表达式修改函数
	 * @param {Function} func - 需要修改的函数
	 * @param {RegExp | Array<RegExp>} reg - 定位位置的正则表达式或正则表达式数组
	 * @param {string | Array<string>} newcode - 要插入的新代码或新代码数组
	 * @param {boolean} [add=false] - 是否为添加模式
	 * @returns {Function} - 修改后的函数
	 */
	ChangeFucByRegExp(func, reg, newcode, add = false) {
		if (typeof func !== 'function') {
			throw new Error('The first argument must be a function');
		}
		if (Array.isArray(reg) && !Array.isArray(newcode)) {
			throw new Error('When the second parameter is an array, the third parameter must also be an array');
		}
		if (!Array.isArray(reg) && !(reg instanceof RegExp)) {
			throw new Error('The second argument must be a RegExp or an array of RegExp');
		}
		if (!Array.isArray(newcode) && typeof newcode !== 'string') {
			throw new Error('The third parameter must be a string or an array of strings');
		}
		let funcStr = func.toString();
		const applyReplacement = (pattern, replacement) => {
			if (add) {
				replacement = `$&\n${replacement}`;
			}
			funcStr = funcStr.replace(pattern, replacement);
		};
		if (Array.isArray(reg)) {
			reg.forEach((pattern, i) => {
				applyReplacement(pattern, newcode[i]);
			});
		} else {
			applyReplacement(reg, newcode);
		}
		const args = funcStr.match(/\(([^)]*)\)/)[1];
		const body = funcStr.match(/{([\s\S]*)}/)[1];
		return new Function(args, body);
	},
	/**
	 * @param {string|Array} cssClass
	 * @param {boolean|Document} to
	 * @param {string} type
	 *
	 * @returns {HTMLElement} 当to为false时,返回创建好的dom对象
	 */
	createDomSJZX(cssClass, to, type) {
		if (Array.isArray(cssClass) === false) cssClass = [cssClass];
		else if (typeof cssClass !== 'string' && !Array.isArray(cssClass)) throw new TypeError(`The first argument must be a string or array!`);
		if (typeof type !== 'string') type = 'div';
		var addDom = document.createElement(type);
		for (var i of cssClass) addDom.classList.add(i);
		if (to === false) return addDom;
		if (to === undefined) document.body.appendChild(addDom);
		else to.appendChild(addDom);
	},
	/**
	 * @param {Document} background
	 * @param {number} flakesNum
	 */
	snowSJZX(background, flakesNum) {
		// 创建并插入雪花容器
		const snowContainer = document.createElement('div');
		snowContainer.classList.add('snow-container');
		background.appendChild(snowContainer);
		// 生成雪花
		const numFlakes = flakesNum; // 雪花数量
		for (let i = 0; i < numFlakes; i++) {
			const snowflake = document.createElement('div');
			snowflake.classList.add('snowflake');
			// 随机位置
			snowflake.style.left = Math.random() * 100 + 25 + 'vw';
			// 随机大小,减小雪花的大小
			snowflake.style.width = snowflake.style.height = Math.random() * 3 + 2 + 'px';
			// 随机透明度
			snowflake.style.opacity = Math.random();
			// 随机动画持续时间
			let fallDuration = Math.random() * 1.5 + 1.5 + 's';
			let swayDuration = Math.random() * 2 + 1 + 's';
			snowflake.style.animationDuration = `${fallDuration}, ${swayDuration}`;
			// 随机延迟
			let delay = Math.random() * 2 + 's';
			snowflake.style.animationDelay = `${delay}, ${delay}`;
			snowContainer.appendChild(snowflake);
		}
	},
	/**
	 * @param {[pack]} 扩展包
	 * 对武将扩展包进行初始化设置
	 */
	importSJZXCharacterSet(packname) {
		//————统计扩展武将————//
		if (!_status.SJZXSave.allCharacters) _status.SJZXSave.allCharacters = [];
		var names = Object.keys(packname.character).filter((key) => key.endsWith('mrfz') && !_status.SJZXSave.allCharacters.includes(key));
		_status.SJZXSave.allCharacters.addArray(names);
		//————配音设置————//
		if (typeof lib.config.extension_驶舰之向_audiochoose !== undefined) {
			if (typeof lib.config.extension_驶舰之向_audiochoose === 'string') {
				lib.config.dieAudio = lib.config.extension_驶舰之向_audiochoose;
				mrfzfuc.setAudio(lib.config.extension_驶舰之向_audiochoose, null, packname);
			} else mrfzfuc.setAudio('CN', null, packname);
		} else mrfzfuc.setAudio('CN', null, packname);
		//————设置武将、成就信息————//
		let count_Ach = 0;
		Object.values(lib.config.AchList_mrfz).forEach(function (value) {
			if (value === true) {
				count_Ach++;
			}
		});
		let str = '版本号:' + lib.extensionPack['驶舰之向'].version + '</br>已实装干员数:' + _status.SJZXSave.allCharacters.length + '</br>已完成的成就数/总成就数:' + count_Ach + '/' + Object.keys(lib.config.AchList_mrfz).length;
		lib.extensionPack['驶舰之向'].code.config.charAndAch.name = str;
		//————势力设置————//
		if (!lib.config.extension_驶舰之向_isOneGroup) {
			var data = mrfzfuc.GroupSJZX;
			for (var i = 0; i < data.length; i++) {
				lib.group.push(data[i].name);
				lib.translate[data[i].name] = data[i].translation;
				lib.translate[data[i].key + '2'] = data[i].name;
				lib.groupnature[data[i].name] = data[i].name;
			}
		} else {
			var keys = Object.keys(packname.character);
			var result = keys.filter((key) => key.endsWith('mrfz'));
			result.forEach((key) => {
				packname.character[key][1] = 'sjzx_group';
			});
			if (!lib.translate['sjzx_group']) lib.translate['sjzx_group'] = '泰拉';
		}
	},
	getCardNumUniqueLengths(arr, length) {
		const uniqueLengthsCount = {};
		arr.forEach((card) => {
			const actualCardName = lib.actualCardName;
			const name = get.translation(typeof card == 'string' ? card : card.name);
			const length = (actualCardName.has(name) ? actualCardName.get(name) : name).length;
			if (length > 0) {
				uniqueLengthsCount[length] = (uniqueLengthsCount[length] || 0) + 1;
			}
		});
		if (length == true) return Object.keys(uniqueLengthsCount);
		return uniqueLengthsCount;
	},
	getArrName(targetName, list) {
		if (typeof list === 'string') {
			if (list == 'character') list = lib.character;
			else if (list == 'card') list = lib.card;
			else if (list == 'skill') list = lib.skill;
		}
		if (list === undefined) list = lib.character;
		const keys = Object.keys(list);
		for (let i = 0; i < keys.length; i++) {
			if (keys[i] === targetName) {
				return keys[i];
			}
		}
		return null;
	},
	/**
	 * 获取驶舰之向扩展的所有武将信息
	 * @return {[array]} [武将名,[技能],图片路径]
	 */
	getSJZXchar() {
		const char = lib.character;
		const selectedArrays = [];
		for (const charName in char) {
			let array = [char[charName].skills, char[charName].trashBin];
			// 添加觉醒后获得的技能
			for (var name of array[0]) {
				if (!lib.skill[name].derivation) continue;
				var skills = [],
					derivation = lib.skill[name].derivation;
				if (Array.isArray(lib.skill[name].derivation)) skills = lib.skill[name].derivation;
				else if (typeof derivation === 'string') skills.push(derivation);
				else continue;
				array[0] = array[0].concat(skills.filter((i) => i.endsWith('mrfz')));
			}
			if (Array.isArray(array) && charName.endsWith('mrfz')) {
				const fourthElement = array[0];
				const fifthElement = array[1];
				const fourthElementAllItems = Array.isArray(fourthElement) ? fourthElement : null;
				const fifthElementLastItem = Array.isArray(fifthElement) && fifthElement.length > 0 ? fifthElement[fifthElement.length - 1] : null;
				const charNameResult = mrfzfuc.getArrName(charName);
				// 对路径进行处理
				let path = '';
				if (fifthElementLastItem && typeof fifthElementLastItem === 'string') {
					const startIndex = fifthElementLastItem.indexOf('ext:');
					if (startIndex !== -1) {
						path = 'extension/' + fifthElementLastItem.substring(startIndex + 4);
					}
				}
				// 更新对象结构
				selectedArrays.push([charNameResult, fourthElementAllItems, path]);
			}
		}
		return selectedArrays;
	},
	/**
	 * 切换背景
	 */
	setBgI() {
		if (lib.config.ChangeBgI_mrfz) var bgI = lib.config.ChangeBgI_mrfz;
		if (bgI && typeof bgI === 'string' && bgI != 'default') {
			ui.background.setBackgroundImage('extension/驶舰之向/image/background/' + bgI + '.jpg');
		} else {
			ui.background.setBackgroundImage('image/background/' + lib.config.image_background + '.jpg');
		}
	},
	/**
	 * 获取对局数据
	 * @param {[type]} result win:仅胜利;lose:仅失败
	 * @param {[type]} mode   模式
	 * @retruns {[number]} 总数据
	 */
	GameDataTotal(result, mode) {
		let obj = lib.config.gameRecord;
		let total = 0;
		for (let m in obj) {
			if (mode && m !== mode) continue;
			if (Object.hasOwn(obj[m], 'data')) {
				for (let role in obj[m].data) {
					if (Array.isArray(obj[m].data[role])) {
						if (!result || result === 'win') total += obj[m].data[role][0];
						if (!result || result === 'lose') total += obj[m].data[role][1];
					} else if (typeof obj[m].data[role] === 'object') {
						for (let subRole in obj[m].data[role]) {
							if (!result || result === 'win') total += obj[m].data[role][subRole][0];
							if (!result || result === 'lose') total += obj[m].data[role][subRole][1];
						}
					}
				}
			}
		}
		return total;
	},
	/**
	 * 删除或获取所有成就
	 * @param {[type]} bool true为获取,false为删除
	 */
	DeleteOrGetAllAch(bool) {
		if (bool == undefined) bool = false;
		for (var key in mrfzfuc.AchList) {
			game.saveConfig(mrfzfuc.AchList[key].name2, bool);
		}
	},
	/**
	 * 展示获得的成就
	 * @param {[string]} image 图片路径
	 * @param {[string]} str   描述
	 */
	ShowGetAch(image, str) {
		if (str == undefined) str = image;
		image = mrfzfuc.AchList[image].image;
		str = mrfzfuc.AchList[str];
		var audio = new Audio('extension/驶舰之向/image/gloryroad/getSKZ_mrfz.mp3');
		audio.play();
		lib.config.AchList_mrfz[str.name2] = true;
		game.saveConfig(str.name2, true);
		var div = document.createElement('div');
		//背景图片设置
		div.style.backgroundImage = 'url(extension/驶舰之向/image/gloryroad/getSKZ2_mrfz.png)';
		div.style.backgroundSize = 'cover';
		// 创建图片
		var img = document.createElement('img');
		img.src = image;
		img.style.width = '60px';
		img.style.height = '60px';
		img.style.left = '0px';
		div.appendChild(img);
		//创建文本
		var text = document.createElement('div');
		text.innerHTML = str.name;
		text.style.textAlign = 'center';
		text.style.lineHeight = '50px';
		text.style.bottom = '0px';
		div.appendChild(text);
		// 设置div的样式
		div.id = 'ShowGetAch';
		div.className = 'ShowGetAch';
		div.style.zIndex = '25';
		div.style.position = 'fixed';
		div.style.right = '0px';
		//div.style.top = '100px';
		div.style.width = '200px';
		div.style.height = '50px';
		div.style.padding = '10px';
		div.title = str.intro;
		var ShowGetAchElements = document.getElementsByClassName('ShowGetAch');
		if (ShowGetAchElements.length > 0) {
			var lastElement = ShowGetAchElements[ShowGetAchElements.length - 1];
			var rect = lastElement.getBoundingClientRect();
			div.style.top = rect.bottom + 10 + 'px';
		} else {
			div.style.top = '100px';
		}
		document.body.appendChild(div);
		var timer = setTimeout(function () {
			document.body.removeChild(div);
		}, 5000);
		div.addEventListener('mouseover', function () {
			clearTimeout(timer);
		});
		div.addEventListener('mouseout', function () {
			timer = setTimeout(function () {
				document.body.removeChild(div);
			}, 5000);
		});
	},
	/**
	 * 修改成就列表的字符串
	 */
	ChangeAchList() {
		let achlist = mrfzfuc.AchList;
		for (let key in achlist) {
			if (!achlist[key].name) continue;
			if (achlist[key].name.indexOf('『') !== 0) {
				achlist[key].name = '『' + achlist[key].name + '』';
			}
		}
	},
	/**
	 * 展示成就页面
	 * @param {[type]} imagePath 背景图片路径
	 * @param {[type]} content   dom对象
	 */
	ShowAchievement(imagePath, content) {
		if (typeof content === 'function') {
			content = content();
		}
		if (document.getElementById('ShowAchievement')) {
			return;
		}
		let dialog = mrfzfuc.createDialog(imagePath);
		let title = document.createElement('h1');
		title.textContent = '光荣之路';
		title.style.textAlign = 'center';
		dialog.appendChild(title);
		let contentContainer = document.createElement('div');
		contentContainer.style.display = 'flex';
		contentContainer.style.flexWrap = 'wrap';
		mrfzfuc.ChangeAchList();
		for (var key in content) {
			let contentItem = mrfzfuc.createContentItem(content[key]);
			contentItem.style.marginLeft = '40px';
			contentItem.style.marginTop = '40px';
			contentItem.style.cssText += ':not(:first-child)';
			contentContainer.appendChild(contentItem);
		}
		dialog.appendChild(contentContainer);
		let closeButton = mrfzfuc.createCloseButton(dialog);
		dialog.appendChild(closeButton);
		let showButton = document.createElement('button');
		showButton.textContent = '查看成就列表';
		showButton.style.cssText = 'position: absolute; left: 10px; top: 10px;';
		showButton.onclick = function () {
			if (document.getElementById('showlist')) {
				return;
			}
			var achListDialog = document.createElement('div');
			achListDialog.id = 'showlist';
			achListDialog.style.cssText = 'width: 50%; height: 50%; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); border: 1px solid black; padding: 10px; boxSizing: border-box; overflow:auto;';
			achListDialog.style.zIndex = '30';
			achListDialog.style.background = 'rgba(0, 0, 0, 0.8)';
			let title2 = document.createElement('h3');
			title2.textContent = '未解锁成就';
			title2.style.textAlign = 'center';
			achListDialog.appendChild(title2);
			for (var key in mrfzfuc.AchList) {
				if (mrfzfuc.AchList[key].hidden == true) continue;
				if (lib.config.AchList_mrfz[key] == false) {
					var achListItem_no = document.createElement('p');
					achListItem_no.innerHTML = mrfzfuc.AchList[key].name + ':' + mrfzfuc.AchList[key].intro;
					achListDialog.appendChild(achListItem_no);
				}
			}
			let title3 = document.createElement('h3');
			title3.textContent = '已解锁成就';
			title3.style.textAlign = 'center';
			achListDialog.appendChild(title3);
			for (var key in mrfzfuc.AchList) {
				if (lib.config.AchList_mrfz[key] == true) {
					var achListItem_yes = document.createElement('p');
					achListItem_yes.innerHTML = mrfzfuc.AchList[key].name + ':' + mrfzfuc.AchList[key].intro;
					achListDialog.appendChild(achListItem_yes);
				}
			}
			document.body.appendChild(achListDialog);
			var closeAchListButton = document.createElement('button');
			closeAchListButton.textContent = '关闭';
			closeAchListButton.style.cssText = 'position: absolute; right: 10px; top: 10px;';
			closeAchListButton.onclick = function () {
				document.body.removeChild(achListDialog);
			};
			achListDialog.appendChild(closeAchListButton);
		};
		dialog.appendChild(showButton);
		document.body.appendChild(dialog);
		//console.log(dialog);
	},
	/**
	 * 创建成就图标
	 * @param  {[string]} imagePath 图片路径
	 */
	createDialog(imagePath) {
		let dialog = document.createElement('div');
		dialog.id = 'ShowAchievement';
		dialog.style.cssText = 'width: 75%; height: 75%; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); border: 1px solid black; padding: 10px; boxSizing: border-box; overflow:auto;';
		dialog.style.zIndex = '20';
		dialog.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' + imagePath + ')';
		dialog.style.backgroundSize = 'cover';
		return dialog;
	},
	/**
	 * 创建单个成就dom
	 * @param  {[type]} contentObj [description]
	 * @return {[type]}            [description]
	 */
	createContentItem(contentObj) {
		let contentItem = document.createElement('div');
		contentItem.style.cssText = 'width:300px;height:150px;display:flex;flex-direction:row;align-items:center;justify-content:flex-start;position:relative';
		if (contentObj.hidden == true) contentItem.style.background = 'rgba(255,215,0,0.3)';
		else contentItem.style.background = 'rgba(249,249,249,0.3)';
		let imageElement = document.createElement('img');
		imageElement.src = contentObj.image;
		imageElement.style.cssText = 'width:100px;height:100px;display:flex;align-items:center;justify-content:center;position:absolute;left:10px;top:25px';
		let textContainer = document.createElement('div');
		textContainer.style.cssText = 'display:flex;flex-direction:column;align-items:center;justify-content:center;position:absolute;left:120px';
		let nameElement = document.createElement('p');
		nameElement.innerHTML = contentObj.name;
		nameElement.style.cssText = 'display:flex;align-items:center;justify-content:center';
		let introElement = document.createElement('p');
		introElement.innerHTML = contentObj.intro;
		introElement.style.cssText = 'display:flex;align-items:center;justify-content:center;margin-top:2px';
		textContainer.appendChild(nameElement);
		textContainer.appendChild(introElement);
		contentItem.appendChild(imageElement);
		contentItem.appendChild(textContainer);
		return contentItem;
	},
	/**
	 * 创建关闭按钮
	 * @param  {[type]} dialog [description]
	 */
	createCloseButton(dialog) {
		let closeButton = document.createElement('button');
		closeButton.textContent = 'X';
		closeButton.style.cssText = 'position: absolute; right: 10px; top: 10px;';
		closeButton.onclick = function () {
			document.body.removeChild(dialog);
		};
		return closeButton;
	},
	/**
	 * 获取随机颜色
	 * @return {[string]} rgb(r,g,b)
	 */
	getRandomColor() {
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		var color = 'rgb(' + r + ',' + g + ',' + b + ')';
		return color;
	},
	/**
	 * 设置语音文件
	 * @param  {[string]} str   ['CN','JP',...] 语言类别
	 * @param  {[string]} modal  ['default','reload'] 添加模式
	 * @param  {[array]} list  技能列表
	 */
	setAudio: async function (str, modal, list) {
		let total = 0,
			count = 0,
			noaudio = [];
		if (typeof str !== 'string') str = 'CN';
		let deLa = str;
		if (typeof modal !== 'string') modal = 'default';
		if (modal !== 'default' && modal !== 'reload') console.warn('error modal!');
		if (typeof list !== 'object') list = undefined;
		let startTime = Date.now();
		let files = await new Promise((resolve, reject) => {
			game.getFileList(
				'extension/驶舰之向/audio/' + str,
				function (folders, files) {
					resolve(files);
				},
				function () {
					reject();
				}
			);
		});
		let skillsList = list.skill === undefined ? lib.skill : list.skill;
		for (let key of Object.keys(skillsList)) {
			if (key.endsWith('mrfz')) {
				total++;
				if (!skillsList[key].audio) {
					noaudio.push(key);
					continue;
				}
				let audioValue, refer;
				if (typeof skillsList[key].audio === 'string' && Object.hasOwn(skillsList, skillsList[key].audio)) {
					refer = skillsList[key].audio;
				}
				let skillName = typeof refer === 'string' ? refer : key;
				if (modal == 'default') {
					audioValue = skillsList[skillName].audio;
				} else if (modal == 'reload') {
					let match = skillsList[skillName].audio.match(/\d+$/);
					if (match) {
						audioValue = Number(match[0]);
					}
				}
				if (typeof audioValue === 'number') {
					//自定义配音
					for (let key2 in lib.config.audioSetSJZX) {
						if (Object.hasOwn(lib.config.audioSetSJZX, key2)) {
							var skills = lib.config.audioSetSJZX[key2].skills;
							for (var i = 0; i < skills.length; i++) {
								if (skills[i].includes(skillName)) {
									str = lib.config.audioSetSJZX[key2].language;
									break;
								}
							}
						}
					}
					let newAudioValue = 'ext:驶舰之向/audio/' + str + ':' + audioValue;
					let audioFile = skillName + audioValue + '.mp3';
					if (files.includes(audioFile)) {
						skillsList[skillName].audio = newAudioValue;
						count++;
					} else {
						skillsList[skillName].audio = 'ext:驶舰之向/audio/CN:2';
					}
				}
			}
		}
		let endTime = Date.now();
		let loadTime = endTime - startTime;
		if (modal == 'default') {
			if (!_status.SJZXAudioloadInfo) _status.SJZXAudioloadInfo = {};
			_status.SJZXAudioloadInfo[get.randomNumberSJZX()] = [deLa, loadTime, count, total, noaudio];
		}
	},
	showAlertWithTimeout(str, time) {
		var modal = document.createElement('div');
		modal.style.position = 'fixed';
		modal.style.top = '50%';
		modal.style.left = '50%';
		modal.style.transform = 'translate(-50%, -50%)';
		modal.style.backgroundColor = 'green';
		modal.style.padding = '20px';
		modal.style.textAlign = 'center';
		modal.style.zIndex = '1000';
		modal.textContent = str;
		document.body.appendChild(modal);
		setTimeout(function () {
			modal.style.display = 'none';
		}, time);
	},
	showCopyDialog(str) {
		var dialog = document.createElement('div');
		dialog.setAttribute('id', 'copyDialogmrfz');
		if (typeof str == undefined) dialog.textContent = '正在复制,请稍后...';
		else dialog.textContent = str;
		dialog.style.position = 'fixed';
		dialog.style.left = '50%';
		dialog.style.top = '50%';
		dialog.style.transform = 'translate(-50%, -50%)';
		dialog.style.padding = '20px';
		dialog.style.backgroundColor = '#fff';
		dialog.style.borderRadius = '5px';
		document.body.appendChild(dialog);
	},
	hideCopyDialog() {
		var dialog = document.getElementById('copyDialogmrfz');
		if (dialog) {
			document.body.removeChild(dialog);
		}
	},
	copyText(str) {
		var textArea = document.createElement('textarea');
		if (str == 1) textArea.value = 'https://prts.wiki/';
		else if (str == 2) textArea.value = '104537053';
		else if (str == 3) textArea.value = 'BV1Yh411L72H';
		else if (str == 4) textArea.value = 'https://www.bilibili.com/bangumi/play/ss43057';
		else if (str == 5) textArea.value = '链接:https://pan.baidu.com/s/1Dw4pXRujfIaSfTBC_qDAiw?pwd=mess';
		else if (str == 6) textArea.value = 'https://www.123pan.com/s/6suOjv-pAybh.html';
		else textArea.value = str;
		document.body.appendChild(textArea);
		textArea.select();
		document.execCommand('copy');
		document.body.removeChild(textArea);
		alert('复制成功!');
	},
	progress() {
		if (document.getElementById('progressCopy')) {
			return;
		}
		var dialog = document.createElement('div');
		dialog.id = 'progressCopy';
		dialog.style.position = 'fixed';
		dialog.style.top = '50%';
		dialog.style.left = '50%';
		dialog.style.transform = 'translate(-50%, -50%)';
		dialog.style.background = '#f8f9fa';
		dialog.style.padding = '10px';
		dialog.style.zIndex = '10000';
		dialog.innerHTML = '复制程序初始化...';
		document.body.appendChild(dialog);
		var isMouseDown = false;
		var offset = { x: 0, y: 0 };
		dialog.addEventListener('mousedown', function (e) {
			isMouseDown = true;
			offset.x = e.clientX - dialog.getBoundingClientRect().left;
			offset.y = e.clientY - dialog.getBoundingClientRect().top;
		});
		window.addEventListener('mousemove', function (e) {
			if (isMouseDown) {
				dialog.style.left = e.clientX - offset.x + 'px';
				dialog.style.top = e.clientY - offset.y + 'px';
			}
		});
		window.addEventListener('mouseup', function () {
			isMouseDown = false;
		});
	},
	/**
	 * 复制文件夹内的文件到另一个文件夹.
	 * @param {string|string[]} srcDirs - 源文件夹路径或路径数组.
	 * @param {string|string[]} destDirs - 目标文件夹路径或路径数组.
	 */
	copyFiles(srcDirs, destDirs) {
		// Ensure srcDirs and destDirs are arrays
		srcDirs = Array.isArray(srcDirs) ? srcDirs : [srcDirs];
		destDirs = Array.isArray(destDirs) ? destDirs : [destDirs];
		var totalFiles = 0;
		var copiedFiles = 0;
		mrfzfuc.progress();
		function copyFile(srcPath, destPath, filename) {
			game.readFile(
				srcPath + '/' + filename,
				function (data) {
					game.writeFile(data, destPath, filename, function () {
						copiedFiles++;
						var dialog = document.getElementById('progressCopy');
						if (copiedFiles < totalFiles && dialog) dialog.innerHTML = '复制进度:' + copiedFiles + '/' + totalFiles;
						else if (dialog) dialog.innerHTML = '复制完成!';
						if (copiedFiles === totalFiles) {
							setTimeout(() => {
								if (dialog && dialog.parentNode === document.body) {
									document.body.removeChild(dialog);
									if (confirm('复制完成,是否重启游戏？')) game.reload();
								}
							}, 1000);
						}
					});
				},
				function (error) {
					throw new Error('读取文件失败:' + error);
				}
			);
		}
		function copyDirectory(srcDir, destDir) {
			game.getFileList(
				srcDir,
				function (folders, files) {
					totalFiles += files.length;
					game.ensureDirectory(destDir, function () {
						for (var i = 0; i < files.length; i++) {
							copyFile(srcDir, destDir, files[i]);
						}
						for (var i = 0; i < folders.length; i++) {
							copyDirectory(srcDir + '/' + folders[i], destDir + '/' + folders[i]);
						}
					});
				},
				function (error) {
					throw new Error('获取文件列表失败:' + error);
				}
			);
		}
		try {
			if (srcDirs.length === 1 && destDirs.length > 1) {
				// Case: srcDirs has one element, destDirs has multiple elements
				for (var i = 0; i < destDirs.length; i++) {
					copyDirectory(srcDirs[0], destDirs[i]);
				}
			} else if (srcDirs.length > 1 && destDirs.length === 1) {
				// Case: srcDirs has multiple elements, destDirs has one element
				for (var i = 0; i < srcDirs.length; i++) {
					copyDirectory(srcDirs[i], destDirs[0]);
				}
			} else if (srcDirs.length === destDirs.length) {
				// Case: srcDirs and destDirs have equal number of elements
				for (var i = 0; i < srcDirs.length; i++) {
					copyDirectory(srcDirs[i], destDirs[i]);
				}
			} else {
				// Case: Length mismatch, throw error
				throw new Error('源文件夹数量与目标文件夹数量不一致');
			}
		} catch (error) {
			console.warn(error);
		}
	},
	/**
	 * 获取上10个父事件
	 * @param  {[player]} player
	 * @param  {[event]} event
	 */
	getEvtParent(player, event) {
		var str = '';
		str += get.translation(event) + '</br>';
		for (var i = 1; i <= 10; i++) str += get.translation(event.getParent(i)) + '</br>';
		game.log(str);
		player.popup(str);
	},
	/**
	 * 判断card1能否被card2响应
	 * @param  {[card]} card1
	 * @param  {[card]} card2
	 * @return {[bool]}
	 */
	canRespond(card1, card2) {
		if (typeof card1 === undefined || typeof card2 === undefined) return false;
		var info1 = card1.name;
		var info2 = card2.name;
		var tmp_bool = false;
		if ((info1 == 'sha' || info1 == 'wanjian') && info2 == 'shan') tmp_bool = true;
		if ((info1 == 'juedou' || info1 == 'nanman') && info2 == 'sha') tmp_bool = true;
		if (get.type(card1) == 'trick' && info2 == 'wuxie') tmp_bool = true;
		var str = (tmp_bool == true ? '' : '不') + '能响应';
		info1 = '<font color=rgb(255,255,122)>【' + get.translation(info1) + '】</font>';
		info2 = '<font color=rgb(255,255,122)>【' + get.translation(info2) + '】</font>';
		game.log(info2, str, info1);
		return tmp_bool;
	},
	isBanEquips(str, player) {
		if (typeof str === undefined) return false;
		if (isNaN(str) && !Array.isArray(str)) {
			let num = str.match(/\d+/);
			if (num !== null) {
				str = num[0];
			}
		}
		var disabledCardSkill = function (player) {
			var card = player.getCards('e', function (card) {
				return get.subtype(card) != 'equip5';
			});
			if (!card) return;
			for (var i = 0; i < card.length; i++) {
				var name = get.translation(card[i]);
				if (Object.hasOwn(get.info(card[i]), 'skills')) {
					var info = get.info(card[i]).skills;
					for (var j = 0; j < info.length; j++) {
						var info2 = get.skillInfoTranslation(info[j]);
						if (info2.includes('冰') && name.includes('冰')) return false;
					}
				} else {
					var info = get.translation(card[i]) + '_info';
					var trans_info = get.translation(info);
					if (trans_info.includes('冰') && name.includes('冰')) return false;
				}
			}
			return true;
		};
		var hasSkillTagArr = function (tag, hidden, arg, globalskill, player) {
			var skills = player.getSkills(hidden);
			if (globalskill) {
				skills.addArray(lib.skill.global);
			}
			game.expandSkills(skills);
			for (var i = 0; i < skills.length; i++) {
				var info = lib.skill[skills[i]];
				if (info && info.ai) {
					if (info.ai.skillTagFilter && info.ai[tag] && info.ai.skillTagFilter(player, tag, arg) === false) continue;
					if (Array.isArray(info.ai[tag])) {
						for (var j = 0; j < info.ai[tag].length; j++) {
							var arr = info.ai[tag];
							if (arr[j] == arg) return true;
						}
					}
					if (typeof info.ai[tag] == 'string') {
						if (info.ai[tag] == arg) return true;
					}
				}
			}
			return false;
		};
		return hasSkillTagArr('igequips', null, str, null, player) && disabledCardSkill(player);
	},
	showDiv(str) {
		if (str == 1) str = '概念解释:</br>『回合轮』:指一名角色上一轮其回合开始(若本轮为第一轮则改为本轮开始时)到其本轮回合开始这一时间段.';
		var modal = document.createElement('div');
		var content = document.createElement('div');
		var closeBtn = document.createElement('span');
		var text = document.createElement('p');
		modal.style.display = 'block';
		modal.style.position = 'fixed';
		modal.style.zIndex = '99';
		modal.style.left = '50%';
		modal.style.top = '50%';
		modal.style.transform = 'translate(-50%, -50%)';
		modal.style.width = '100%';
		modal.style.height = '100%';
		modal.style.overflow = 'auto';
		modal.style.backgroundColor = 'rgba(0,0,0,0.2)';
		content.style.backgroundColor = 'rgba(255,255,255,0.8)';
		content.style.left = '50%';
		content.style.top = '50%';
		content.style.width = str.length * 10 + 'px';
		content.style.height = '100px';
		content.style.transform = 'translate(-50%, -50%)';
		content.style.margin = 'auto';
		content.style.padding = '20px';
		content.style.border = '1px solid #888';
		closeBtn.innerHTML = '&times;';
		closeBtn.style.color = '#FFFFFF';
		closeBtn.style.float = 'right';
		closeBtn.style.fontSize = '28px';
		closeBtn.style.fontWeight = 'bold';
		closeBtn.style.cursor = 'pointer';
		text.innerHTML = str;
		text.style.color = 'black';
		content.appendChild(closeBtn);
		content.appendChild(text);
		modal.appendChild(content);
		document.body.appendChild(modal);
		closeBtn.onclick = function () {
			modal.style.display = 'none';
		};
		window.onclick = function (event) {
			if (event.target == modal) {
				modal.style.display = 'none';
			}
		};
	},
	autoAdjustFontSize(textElement, containerElement, maxWidth, maxHeight) {
		var containerWidth = maxWidth || containerElement.offsetWidth;
		var containerHeight = maxHeight || containerElement.offsetHeight;
		let fontSize = parseFloat(window.getComputedStyle(textElement).fontSize);
		textElement.style.fontSize = fontSize + 'px';
		while (textElement.offsetHeight > containerHeight || textElement.offsetWidth > containerWidth) {
			fontSize -= 1;
			textElement.style.fontSize = fontSize + 'px';
		}
		return fontSize + 'px';
	},
	getAudioURL(skillName, choose, noname, filename) {
		var skillAudio, match;
		if (noname === undefined) noname = false;
		if (filename === undefined) filename = true;
		if (/^[a-zA-Z]+$/.test(lib.skill[skillName].audio)) {
			skillAudio = lib.skill[lib.skill[skillName].audio].audio;
			skillName = lib.skill[skillName].audio;
		} else {
			skillAudio = lib.skill[skillName].audio;
		}
		match = skillAudio.match(/\/([A-Z]+):(\d+)/);
		var countryCode = choose || (match && match[1]) || 'CN';
		var randomNumber = match && match[2] ? parseInt(match[2]) : null;
		if (randomNumber !== null) {
			var randomValue = Math.floor(Math.random() * randomNumber) + 1;
			if (noname == false) {
				if (filename == true) return 'extension/驶舰之向/audio/' + countryCode + '/' + skillName + randomValue + '.mp3';
				else return 'extension/驶舰之向/audio/' + countryCode;
			} else {
				if (filename == true)
					return {
						url: 'extension/驶舰之向/audio/' + countryCode + '/' + skillName + randomValue + '.mp3',
						name: skillName + randomValue + '.mp3',
					};
				else
					return {
						url: 'extension/驶舰之向/audio/' + countryCode,
						name: skillName + randomValue + '.mp3',
					};
			}
		} else {
			return null;
		}
	},
	tranAudioSet(str) {
		var en = ['CN', 'JP', 'EN', 'OT'];
		var cn = ['中配', '日配', '英配', '其他'];
		for (var i = 0; i < en.length; i++) {
			if (str == en[i]) return cn[i];
		}
		return null;
	},
	audioSetDiv(message, path, boxContents) {
		var overlay = document.createElement('div');
		overlay.id = 'overlay';
		overlay.style.position = 'fixed';
		overlay.style.top = '0';
		overlay.style.left = '0';
		overlay.style.width = '100%';
		overlay.style.height = '100%';
		overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
		overlay.style.display = 'flex';
		overlay.style.justifyContent = 'center';
		overlay.style.alignItems = 'center';
		overlay.style.zIndex = '1000';
		overlay.addEventListener('click', function (event) {
			if (event.target === overlay) {
				mrfzfuc.setAudio(null, 'reload');
				document.body.removeChild(overlay);
			}
		});
		var audioBox = document.createElement('div');
		audioBox.id = 'audioBox';
		audioBox.style.width = '80%';
		audioBox.style.height = '80%';
		audioBox.style.backgroundColor = '#fff';
		audioBox.style.padding = '20px';
		audioBox.style.border = '2px solid #000';
		audioBox.style.position = 'relative';
		audioBox.style.overflow = 'auto';
		audioBox.style.backgroundImage = `url(${path})`;
		audioBox.style.backgroundSize = 'cover';
		var textDiv = document.createElement('div');
		textDiv.textContent = message;
		textDiv.style.position = 'absolute';
		textDiv.style.top = '5px';
		textDiv.style.left = '5px';
		textDiv.style.right = '5px';
		textDiv.style.padding = '20px';
		textDiv.style.fontWeight = 'bold';
		textDiv.style.fontSize = '24px';
		textDiv.style.textAlign = 'center';
		textDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
		textDiv.style.color = '#fff';
		audioBox.appendChild(textDiv);
		// 创建搜索框
		var searchInput = document.createElement('input');
		searchInput.placeholder = '输入拼音或汉字进行搜索';
		searchInput.style.marginTop = '20px';
		searchInput.style.position = 'relative';
		searchInput.style.display = 'block';
		searchInput.style.margin = '0 auto';
		searchInput.style.width = '80%';
		searchInput.style.padding = '5px';
		searchInput.style.border = '1px solid #ccc';
		searchInput.style.borderRadius = '5px';
		searchInput.style.boxSizing = 'border-box';
		searchInput.style.zIndex = '999';
		textDiv.appendChild(searchInput);
		searchInput.addEventListener('input', function (event) {
			var pinyin = window.pinyinUtilx;
			var searchText = event.target.value.trim().toLowerCase();
			var chineseSearchText = pinyin.getPinyin(searchText, null, false).join('') + 'mrfz';
			boxContents.forEach(function (content) {
				var newBox = document.getElementById(content[0]);
				if (newBox) {
					var matchesSearch = content.some(function (item) {
						if (typeof item === 'string') {
							var itemText = item.toLowerCase();
							var chineseItemPinyin = pinyin.getPinyin(itemText, null, false).join('') + 'mrfz';
							if (chineseItemPinyin.includes(chineseSearchText)) {
								return true;
							}
							return itemText.includes(searchText);
						}
						return false;
					});
					if (matchesSearch || searchText === '') {
						newBox.classList.remove('hiddenSJZX');
						newBox.classList.add('visibleSJZX');
					} else {
						newBox.classList.remove('visibleSJZX');
						newBox.classList.add('hiddenSJZX');
					}
				}
			});
			var container = document.getElementById('audioBox');
			var visibleElements = Array.from(container.getElementsByClassName('visibleSJZX'));
			var hiddenElements = Array.from(container.getElementsByClassName('hiddenSJZX'));
			visibleElements.forEach(function (element) {
				element.style.display = 'flex';
			});
			hiddenElements.forEach(function (element) {
				element.style.display = 'none';
			});
			var boxContainer = document.querySelector('#audioBox > div');
			var sortedVisibleElements = Array.from(boxContainer.getElementsByClassName('visibleSJZX'));
			sortedVisibleElements.forEach(function (element) {
				boxContainer.appendChild(element);
			});
		});
		var resetSettingsBox = document.createElement('div');
		resetSettingsBox.textContent = '回复默认设置';
		resetSettingsBox.style.cssText = 'width: 150px; height: 30px; background-color: #ccc; position: absolute; top: 10px; left: 10px; cursor: pointer; text-align: center; line-height: 30px;';
		resetSettingsBox.style.zIndex = '999';
		resetSettingsBox.addEventListener('click', function () {
			var y = confirm('警告:此操作无法撤销!你确定要这么做吗？');
			if (y == true) {
				game.saveConfig('audioSetSJZX', {});
				mrfzfuc.setAudio(lib.config.extension_驶舰之向_audiochoose, 'reload');
				document.body.removeChild(overlay);
			}
		});
		audioBox.appendChild(resetSettingsBox);
		var closeButton = document.createElement('button');
		closeButton.style.cssText = 'position: absolute; top: 10px; right: 10px; z-index: 1000;';
		closeButton.textContent = 'X';
		closeButton.style.zIndex = '1000';
		closeButton.onclick = function () {
			mrfzfuc.setAudio(null, 'reload');
			document.body.removeChild(overlay);
		};
		audioBox.appendChild(closeButton);
		if (boxContents && Array.isArray(boxContents)) {
			var boxContainer = document.createElement('div');
			boxContainer.style.display = 'flex';
			boxContainer.style.flexWrap = 'wrap';
			boxContainer.style.gap = '10px';
			boxContainer.style.marginTop = '20px';
			boxContainer.style.position = 'relative';
			boxContainer.style.top = 'calc(5px + 20px + 24px + 30px)';
			boxContents.forEach(function (content) {
				var newBox = document.createElement('div');
				var img = document.createElement('img');
				img.src = content[content.length - 1];
				img.style.width = '100px';
				img.style.height = '140px';
				img.style.marginTop = '5px';
				newBox.appendChild(img);
				var nameBackgroundDiv = document.createElement('div');
				nameBackgroundDiv.style.backgroundImage = 'url(' + ('extension/驶舰之向/image/orther/charname.png') + ')';
				nameBackgroundDiv.style.backgroundSize = 'cover';
				nameBackgroundDiv.style.backgroundRepeat = 'no-repeat';
				nameBackgroundDiv.style.width = '120px';
				nameBackgroundDiv.style.height = '30px';
				nameBackgroundDiv.style.position = 'relative';
				nameBackgroundDiv.style.marginTop = '5px';
				var nameDiv = document.createElement('div');
				nameDiv.textContent = lib.translate[content[0]];
				nameDiv.style.position = 'absolute';
				nameDiv.style.top = '8px';
				nameDiv.style.left = '40px';
				nameDiv.style.color = '#fff';
				nameDiv.style.zIndex = '1';
				nameDiv.style.wordWrap = 'break-word';
				nameDiv.style.fontSize = '12px';
				nameBackgroundDiv.appendChild(nameDiv);
				newBox.appendChild(nameBackgroundDiv);
				if (Array.isArray(content[1])) {
					var textCounter = 0;
					var rowBox;
					content[1].forEach(function (skill) {
						if (textCounter % 2 === 0) {
							rowBox = document.createElement('div');
							rowBox.style.display = 'flex';
							rowBox.style.marginTop = '5px';
							rowBox.style.position = 'relative';
							newBox.appendChild(rowBox);
						}
						var skillDiv = document.createElement('div');
						skillDiv.textContent = lib.translate[skill];
						var textBackgroundDiv = document.createElement('div');
						textBackgroundDiv.style.backgroundImage = 'url(' + ('extension/驶舰之向/image/orther/playaudio1.png') + ')';
						textBackgroundDiv.style.backgroundSize = 'cover';
						textBackgroundDiv.style.width = 'fit-content';
						textBackgroundDiv.style.display = 'inline-block';
						textBackgroundDiv.style.padding = '5px';
						textBackgroundDiv.style.width = '60px';
						textBackgroundDiv.style.height = '15px';
						textBackgroundDiv.style.position = 'relative';
						textBackgroundDiv.style.marginLeft = '5px';
						textBackgroundDiv.style.marginTop = '5px';
						skillDiv.style.color = 'white';
						skillDiv.style.margin = '0';
						skillDiv.style.fontSize = '12px';
						skillDiv.style.left = '20px';
						skillDiv.style.position = 'relative';
						textBackgroundDiv.appendChild(skillDiv);
						textBackgroundDiv.addEventListener('click', function () {
							game.trySkillAudio(skill, { name: content[0] }, true);
						});
						rowBox.appendChild(textBackgroundDiv);
						textCounter++;
					});
				}
				newBox.style.cssText = 'width:200px;height:300px;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;position:relative';
				newBox.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
				newBox.style.marginBottom = '10px';
				newBox.style.marginRight = '10px';
				newBox.id = content[0];
				var setBox = document.createElement('div');
				setBox.style.width = '120px';
				setBox.style.height = '30px';
				setBox.style.backgroundImage = 'url(' + ('extension/驶舰之向/image/orther/setaudio.png') + ')';
				setBox.style.backgroundSize = 'contain';
				setBox.style.position = 'relative';
				setBox.style.marginTop = '10px';
				//获取配音设置
				var textSet;
				if (lib.config.audioSetSJZX) {
					for (var key in lib.config.audioSetSJZX) {
						if (content[0] == key) {
							textSet = mrfzfuc.tranAudioSet(lib.config.audioSetSJZX[key].language);
							break;
						}
					}
				}
				var setText = document.createElement('div');
				setText.textContent = textSet || mrfzfuc.tranAudioSet(lib.config.audiochoose) || '中配';
				setText.style.color = 'white';
				setText.style.textAlign = 'center';
				setText.style.marginTop = '5px';
				setText.style.marginLeft = '45px';
				setBox.appendChild(setText);
				newBox.appendChild(setBox);
				setBox.addEventListener('click', function (event) {
					var options = ['CN', 'JP', 'EN', 'OT'];
					var optionsBox = document.createElement('div');
					optionsBox.classList.add('options-box');
					optionsBox.style.width = '100px';
					optionsBox.style.height = 'auto';
					optionsBox.style.display = 'flex';
					optionsBox.style.flexDirection = 'column';
					optionsBox.style.alignItems = 'center';
					optionsBox.style.justifyContent = 'flex-start';
					optionsBox.style.position = 'absolute';
					optionsBox.style.backgroundColor = '#fff';
					optionsBox.style.zIndex = '999';
					optionsBox.style.border = '1px solid #ccc';
					options.forEach(function (option) {
						var optionDiv = document.createElement('div');
						optionDiv.textContent = mrfzfuc.tranAudioSet(option);
						optionDiv.style.cursor = 'pointer';
						optionDiv.style.marginTop = '1px';
						optionDiv.style.position = 'relative';
						optionDiv.style.fontSize = '10px';
						optionDiv.style.padding = '5px';
						optionDiv.addEventListener('click', function () {
							setText.textContent = mrfzfuc.tranAudioSet(option);
							if (!lib.config.audioSetSJZX) {
								lib.config.audioSetSJZX = {};
							}
							lib.config.audioSetSJZX[content[0]] = {
								language: option,
								skills: content.slice(1, -1),
							};
							game.saveConfig('audioSetSJZX', lib.config.audioSetSJZX);
							mrfzfuc.setAudio(null, 'reload');
							optionsBox.parentNode.removeChild(optionsBox);
						});
						optionsBox.appendChild(optionDiv);
					});
					var rect = setBox.getBoundingClientRect();
					optionsBox.style.top = rect.bottom + 'px';
					optionsBox.style.left = rect.left + 'px';
					document.body.appendChild(optionsBox);
					event.stopPropagation();
				});
				document.addEventListener('click', function (event) {
					var optionsBoxes = document.querySelectorAll('.options-box');
					var isOptionsBox = false;
					optionsBoxes.forEach(function (box) {
						if (box === event.target || box.includes(event.target)) {
							isOptionsBox = true;
						}
					});
					if (!isOptionsBox) {
						optionsBoxes.forEach(function (box) {
							box.parentNode.removeChild(box);
						});
					}
				});
				document.addEventListener('wheel', function (event) {
					var optionsBoxes = document.querySelectorAll('.options-box');
					optionsBoxes.forEach(function (box) {
						box.parentNode.removeChild(box);
					});
				});
				boxContainer.appendChild(newBox);
			});
			audioBox.appendChild(boxContainer);
		} else {
			console.warn('boxContents 应该是一个数组!');
		}
		overlay.appendChild(audioBox);
		document.body.appendChild(overlay);
	},
	setRandomBGI(dir, callback) {
		game.getFileList(
			dir,
			(folders, files) => {
				var imageFiles = files.filter((file) => {
					var ext = file.split('.').pop().toLowerCase();
					return ['jpg', 'jpeg', 'png'].includes(ext);
				});
				if (imageFiles.length > 0) {
					var randomIndex = Math.floor(Math.random() * imageFiles.length);
					var randomImage = dir + '/' + imageFiles[randomIndex];
					callback(randomImage);
				} else {
					callback(null, '文件夹中没有图片文件!');
				}
			},
			(error) => {
				callback(null, error);
			}
		);
	},
	getSJZXbackgroud(data, enumerable = false, all) {
		if (!get.is.object(data)) data = lib.sjzx_ConfigData.backgroud;
		let result = {
			name: [],
			translate: [],
			obj: {},
		};
		Object.keys(data).forEach((key) => {
			const value = data[key];
			if (value && typeof value === 'object' && 'enumerable' in value) {
				if (value.enumerable || enumerable) {
					result['name'].push(key);
					result['translate'].push(value);
					result.obj[key] = value.content;
				}
			} else {
				result['name'].push(key);
				result['translate'].push(value);
				result.obj[key] = value;
			}
		});
		return all === true ? result : result.obj;
	},
	ShowsetBackgroud() {
		let backgroudBox = document.createElement('div');
		let backgroudImageData = mrfzfuc.getSJZXbackgroud(null, null, true);
		const url = mrfzfuc.getSJZXbackgroud(null, true).url;
		backgroudBox.classList.add('backgroundBoxSJZX');
		backgroudBox.style.backgroundImage = 'url(' + url + backgroudImageData['name'].randomGet() + '.jpg)';
		document.body.appendChild(backgroudBox);
		function closebackgroudBox(event) {
			if (!backgroudBox.includes(event.target)) {
				backgroudBox.remove();
				document.removeEventListener('click', closebackgroudBox);
			}
		}
		document.addEventListener('click', closebackgroudBox);
		// 菜单设置
		let meunBox = document.createElement('div');
		meunBox.classList.add('meunBox');
		backgroudBox.appendChild(meunBox);
		var closeButton = document.createElement('button');
		closeButton.textContent = '关闭';
		closeButton.style.cssText = 'position: absolute; right: 10px; top: 10px;';
		closeButton.style.zIndex = 20;
		closeButton.onclick = function () {
			document.body.removeChild(backgroudBox);
		};
		meunBox.appendChild(closeButton);
		var closeButton = document.createElement('button');
		closeButton.textContent = '回复默认背景';
		closeButton.style.cssText = 'position: absolute; left: 10px; top: 10px;';
		closeButton.style.zIndex = 20;
		closeButton.onclick = function () {
			game.saveConfig('extension_驶舰之向_ChangeBgI_mrfz', undefined);
			game.saveConfig('ChangeBgI_mrfz', undefined);
			mrfzfuc.setBgI();
			document.body.removeChild(backgroudBox);
		};
		meunBox.appendChild(closeButton);
		let menuContent = document.createElement('div');
		menuContent.classList.add('menuContent');
		menuContent.textContent = '自定义背景图片';
		meunBox.appendChild(menuContent);
		// 图片选择
		let chooseBox = document.createElement('div');
		chooseBox.classList.add('chooseBox');
		backgroudBox.appendChild(chooseBox);
		var nameList = backgroudImageData.name,
			translate = backgroudImageData.translate;
		if (nameList.length != translate.length) {
			throw new Error('图片名和图片名翻译不相等!');
		}
		for (let i = 0; i < nameList.length; i++) {
			let Box = document.createElement('div');
			Box.classList.add('Box');
			let tmp = nameList[i];
			Box.addEventListener('click', (event) => {
				game.saveConfig('extension_驶舰之向_ChangeBgI_mrfz', tmp);
				game.saveConfig('ChangeBgI_mrfz', tmp);
				mrfzfuc.setBgI();
				document.body.removeChild(backgroudBox);
			});
			let image = document.createElement('div');
			image.classList.add('image');
			image.style.backgroundImage = 'url(' + url + nameList[i] + '.jpg)';
			Box.appendChild(image);
			let name = document.createElement('div');
			name.classList.add('name');
			let nameContent = document.createElement('span');
			nameContent.classList.add('nameContent');
			nameContent.innerHTML = translate[i];
			name.appendChild(nameContent);
			Box.appendChild(name);
			chooseBox.appendChild(Box);
		}
	},
};
export let SJZXplayer = {
	reUnseen() {
		const player = this;
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
		return player;
	},
	adjustHandCardTo(num) {
		if (typeof num !== 'number') return console.warn('ERROR:num must be number!');
		let differ = this.countCards('h') - num;
		if (differ > 0) this.chooseToDiscard(true, `请弃置${get.cnNumber(this.countCards('h') - num)}张牌`, differ);
		else if (differ < 0) this.draw(Math.abs(differ));
	},
	canUseCardAtt(card, isfriend, distance) {
		if (distance === undefined) distance = true;
		if (isfriend === undefined) isfriend = true;
		return game.hasPlayer((current) => {
			var att = get.attitude(current, this);
			return this.canUse(card, current, distance) && (isfriend == true ? att > 0 : att < 0);
		});
	},
	getNumberInRange() {
		var num = 0,
			players = game.filterPlayer();
		for (var i = 0; i < players.length; i++) {
			if (this.inRange(players[i])) {
				num++;
			}
		}
		return num;
	},
	changeMarkImage(mark, path, bool = false) {
		if (bool) path = 'url("' + path + '")';
		else path = 'url("extension/驶舰之向/image/orther/' + path + '.png")';
		if (this.marks[mark]) {
			this.marks[mark].style.backgroundImage = path;
		} //QQQ
	},
	recastCount() {
		if (!this.storage._recastGain || typeof this.storage._recastGain != 'number') return 0;
		return this.storage._recastGain;
	},
	isAction() {
		var history = this.actionHistory;
		for (var i = history.length - 1; i >= 0; i--) {
			if (history[i].isMe) return true;
			if (history[i].isRound) break;
		}
		return false;
	},
	removeAllmark(str, bool = true) {
		if (bool == false) {
			return this.removeMark(str, this.countMark(str), false);
		} else return this.removeMark(str, this.countMark(str));
	},
	isTypeExpansions(str, type) {
		if (
			this.getExpansions(str).filter(function (magic) {
				return get.type2(magic) == type;
			}).length
		)
			return true;
		return false;
	},
	isPhase(phase, notmeisok) {
		if (!notmeisok && _status.currentPhase != this) return false;
		return _status.event.name == phase || _status.event.getParent(phase).name == phase;
	},
	// recoverTo (num) {
	//     if (typeof num !== 'number') num = this.maxHp;
	//     return this.recover(num - this.hp);
	// },
	canUseToAnyone(card, distance = true, includeme = true) {
		if (typeof card == 'string') card = { name: card };
		for (var i = 0; i < game.players.length; i++) {
			if (includeme == false && game.players[i] == this) continue;
			if (distance != false) {
				if (this.canUse(card, game.players[i], false)) {
					return true;
				}
			} else {
				if (this.canUse(card, game.players[i])) {
					return true;
				}
			}
		}
		return false;
	},
	isMaxHandCardLimit(equal) {
		var nh = this.getHandcardLimit();
		for (var i = 0; i < game.players.length; i++) {
			if (game.players[i].isOut() || game.players[i] == this) continue;
			if (equal) {
				if (game.players[i].getHandcardLimit() >= nh) return false;
			} else {
				if (game.players[i].getHandcardLimit() > nh) return false;
			}
		}
		return true;
	},
	isMinHandCardLimit(equal) {
		var nh = this.getHandcardLimit();
		for (var i = 0; i < game.players.length; i++) {
			if (game.players[i].isOut() || game.players[i] == this) continue;
			if (equal) {
				if (game.players[i].getHandcardLimit() <= nh) return false;
			} else {
				if (game.players[i].getHandcardLimit() < nh) return false;
			}
		}
		return true;
	},
	getSkillsList(disable, tag) {
		if (disable !== true) disable = false;
		if (typeof tag === 'string') tag = [tag];
		let player = this;
		var list = [];
		var listm = [];
		var listv = [];
		if (player.name1 != undefined) listm = lib.character[player.name1][3];
		else listm = lib.character[player.name][3];
		if (player.name2 != undefined) listv = lib.character[player.name2][3];
		listm = listm.concat(listv);
		var func = function (skill) {
			var info = get.info(skill);
			if (!info || info.charlotte) return false;
			if (Array.isArray(tag)) {
				for (var i of tag) {
					if (info[i]) return false;
				}
			}
			return true;
		};
		for (var i = 0; i < listm.length; i++) {
			if (func(listm[i])) list.add(listm[i]);
		}
		if (player.disabledSkills && disable) {
			for (var key in player.disabledSkills) {
				list.remove(key);
			}
		}
		return list;
	},
};
export let SJZXget = {
	isView(card) {
		if (Array.isArray(card)) {
			for (var i of card) {
				this.isView(i);
			}
		} else if (card && get.is.object(card)) {
			if (!card.cards || !card.cards[0]) return true;
			if (card.cards.length > 1) return true;
			if (card.name != card.cards[0].name) return true;
			return false;
		} else {
			throw new Error(`The first parameter of type must be Array or VCard!`);
		}
	}, //QQQ
	tranPhase(input) {
		let phase = ['phaseZhunbei', 'phaseJudge', 'phaseDraw', 'phaseUse', 'phaseDiscard', 'phaseJieshu'];
		let cn = ['准备阶段', '判定阶段', '摸牌阶段', '出牌阶段', '弃牌阶段', '结束阶段'];
		if (typeof input === 'string') {
			for (let i = 0; i < phase.length; i++) {
				if (input === phase[i]) {
					return cn[i];
				}
			}
		} else if (Array.isArray(input)) {
			let result = [];
			input.forEach((item) => {
				for (let i = 0; i < phase.length; i++) {
					if (item === phase[i]) {
						result.push(cn[i]);
						break;
					}
				}
			});
			return result;
		}
	},
	randomNumberSJZX() {
		const randomNumber = Math.floor(Math.random() * 1000000);
		const paddedNumber = randomNumber.toString().padStart(6, '0');
		return paddedNumber + 'SJZX';
	},
};
export let SJZXgame = {
	/**
	 * @param { string } name
	 * @param {*} info
	 * @param { { translate: string, config: { [key: string]: object } } } info2
	 */
	addModeSJZX(name, info, info2) {
		lib.config.all.mode.push(name);
		lib.translate[name] = info2.translate;
		let imgsrc;
		let extname = _status.extension || info2.extension;
		if (info.splash) {
			imgsrc = info.splash;
		} else {
			if (_status.evaluatingExtension) {
				imgsrc = 'extension-' + extname + ':image/mode/backgroud/' + name + '.jpg';
			} else {
				imgsrc = 'ext:' + extname + '/image/mode/backgroud/' + name + '.jpg';
			}
		}
		lib.mode[name] = {
			name: info2.translate,
			config: info2.config,
			splash: imgsrc,
			fromextension: true,
		};
		lib.init['setMode_' + name] = async () => {
			await game.import('mode', (lib, game, ui, get, ai, _status) => {
				info.name = name;
				return info;
			});
		};
		if (!lib.config.extensionInfo[extname]) {
			lib.config.extensionInfo[extname] = {};
		}
		if (!lib.config.extensionInfo[extname].mode) {
			lib.config.extensionInfo[extname].mode = [];
		}
		if (lib.config.extensionInfo[extname].mode.indexOf(name) == -1) {
			lib.config.extensionInfo[extname].mode.push(name);
		}
		game.saveConfig('extensionMode', lib.config.extensionInfo);
	},
	totalmark(str) {
		let num = 0;
		for (let i = 0; i < game.players.length; i++) {
			if (game.players[i].hasMark(str)) num += game.players[i].countMark(str);
		}
		return num;
	},
	shushuRDbet(min, max) {
		let mid = (min + max) / 2;
		let prob = Math.random();
		if (prob < 0.8) {
			return Math.floor(Math.random() * (max - mid + 1)) + mid;
		} else {
			return Math.floor(Math.random() * (mid - min + 1)) + min;
		}
	},
	RDNbet(min, max) {
		let rand = 0;
		for (let i = 0; i < 6; i += 1) {
			rand += Math.random();
		}
		rand = rand / 6;
		return Math.floor(rand * (max - min + 1) + min);
	},
	RDbet(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	},
	mostStr(arr) {
		let sortedArr = arr.slice().sort();
		let maxCount = 0;
		let maxStrings = [];
		let currentCount = 1;
		let currentString = sortedArr[0];
		for (let i = 1; i <= sortedArr.length; i++) {
			if (i < sortedArr.length && sortedArr[i] === currentString) {
				currentCount++;
			} else {
				if (currentCount >= maxCount) {
					if (currentCount > maxCount) {
						maxStrings = [];
					}
					maxCount = currentCount;
					maxStrings.push(currentString);
				}
				if (i < sortedArr.length) {
					currentString = sortedArr[i];
					currentCount = 1;
				}
			}
		}
		return maxStrings;
	},
	getGlobalmark(str) {
		var num = 0;
		for (var i = 0; i < game.players.length; i++) {
			var players = game.players[i];
			if (players.hasMark(str)) num += players.countMark(str);
		}
		return num;
	},
};

import { lib, game, ui, get, ai, _status } from '../../../../../noname.js'
import {
	SaamisSJZX_maps,
	SaamisSJZX_collection as samCol,
	SaamisSJZX_cannotSay,
	SaamisSJZX_cultureBuff,
	SaamisSJZX_team,
	SaamissSJZX_Collapse,
	SaamisSave,
	SaamisStore,
} from "../Saamis/saamis.js";
import { mrfzfuc } from "../../SJZXfuc.js";
import { SaamisU } from "./util.js";
import { RougeLikeSJZX } from "../rougelike.js";
import { ticket } from "./ticket.js";
export class saamisGame {
	/**
	 * 收藏品相关的函数
	 */
	static collect = class {
		/**
		 * 设置收藏品类型列表
		 * @returns { Array }
		 */
		static setCollectionTypes() {
			return Object.keys(samCol).filter((key) =>
				get.is.object(samCol[key])
			);
		}
		/**
		 * 该藏品是否可以在商店出售
		 * @param {string} col 
		 */
		static canSell(col) {
			let info = this.getInfoCollection(col);
			return typeof info.shop === "number";
		}
		/**
		 * 获取该藏品的价格
		 * @param {string} col 
		 */
		static getPrice(col) {
			if (!this.canSell(col)) return undefined;
			return this.getInfoCollection(col).shop;
		}
		/**
		 * 获得所有收藏品
		 * @param {boolean} [classify=false] 是否分类
		 * @returns { object | Array }
		 */
		static getCollectionList(classify = false) {
			let list = classify === false ? [] : {};
			let collections = window.SaamisStore.collections;
			if (classify === false) {
				for (let type in collections) {
					for (let name in collections[type]) {
						list.push(name);
					}
				}
			} else {
				for (let type in collections) {
					if (!list[type]) list[type] = [];
					for (let name in collections[type]) {
						list[type].push(name);
					}
				}
			}
			return list;
		}
		/**
		 * 随机获得X件收藏品
		 * @param {number} [num=1]
		 * @param { Function } filter
		 * @param {boolean} [GetInfo=false] 是否直接获得详细信息
		 *
		 * @returns { string[] }
		 */
		static CollectionRandomGets(num = 1, filter, GetInfo = false) {
			if (
				typeof filter !== "function" &&
				filter !== undefined &&
				filter !== null
			) {
				throw new TypeError(`The second argument must be a function`);
			}
			let collections = window.SaamisStore.collections;
			let items = [];
			for (let type in collections) {
				for (let name in collections[type]) {
					if (
						(filter === undefined ||
							filter === null ||
							filter(name, type))
						&& !SaamisU.getSave().MatchSave.collection.owner.includes(name)
					) {
						items.push({ name, type });
					}
				}
			}
			function shuffle(array) {
				for (let i = array.length - 1; i > 0; i--) {
					const j = Math.floor(Math.random() * (i + 1));
					[array[i], array[j]] = [array[j], array[i]];
				}
			}
			shuffle(items);
			let selectedItems = items.slice(0, num).map((item) => item.name);
			return GetInfo === false
				? selectedItems
				: window.SaamisStore.collections[selectedItems];
		}
		/**
		 * 获得一件藏品具体的信息
		 * @param {string} name
		 *
		 * @returns {object}
		 */
		static getInfoCollection(name) {
			return window.SaamisStore.collections[name];
		}
		/**
		 * 获得本局游戏的藏品
		 * @param {Function | boolean} filter
		 *
		 * @returns {Array}
		 */
		static getGamesCols(filter) {
			let cols = lib.config.SaamisSave.MatchSave.collection;
			let result = [];
			if (typeof filter === "boolean") {
				filter = function (_, type) {
					return filter === true ? type == "owner" : type == "lose";
				};
			}
			for (let type in cols) {
				for (let name in cols[type]) {
					if (filter === undefined || filter(name, type)) {
						result.push(name);
					}
				}
			}
			return result;
		}
	};
	/**
	 * 更新游戏内信息
	 */
	static updata = class {
		/**
		 * 更新底部栏
		 */
		static bottom() {
			const bottom = document.body.querySelector(".FatherBottomBox");
			if (bottom) bottom.replaceChildren();
			//更新队伍角标
			saamisGame.showChooseTeam(window.SaamisStore.currentTeam);
			//更新藏品信息
			saamisGame.showCollections();
			//更新编队信息
			saamisGame.showTeams();
			//更新干员信息
			saamisGame.showOperators();
			//更新密文板信息
			saamisGame.showPrayer();
		}
	};
	/**
	 * 加载游戏
	 */
	static loadSave() {
		//TODO 待补充
	}
	/**
	 * 获得藏品
	 * @param {string | Array} cols
	 *
	 * @returns {obj}
	 */
	static gainCollections(cols) {
		// 获得藏品
		if (typeof cols === "string") cols = [cols];
		let collection = lib.config.SaamisSave.MatchSave.collection;
		collection["owner"].push(...cols);
		SaamisU.SaamisSave(collection, "MS:collection");
		// 添加藏品效果
		let save = SaamisU.getSave();
		for (let col of cols) {
			let info = this.collect.getInfoCollection(col);
			if (info.effect) {
				let effect = info.effect;
				if (typeof effect === 'string') effect = [effect];
				if (typeof effect === 'function') effect();
				else if (Array.isArray(effect)) save.MatchSave.battleSkills.push(...info.skills);
				else if (get.is.object(effect)) {
					for (let key in effect) {
						if (typeof effect[key] === 'function' && key === 'gain') effect[key]();
						else if (Array.isArray(effect[key])) save.MatchSave.battleSkills.push(...effect[key]);
					}
				}
			}
		}
		SaamisU.SaamisSave(save);
	}
	/**
	 * 更改背景音乐
	 * @param { string | Number } name
	 * @param { Boolean } theme
	 */
	static changeSaamisMusic(name, theme) {
		if (theme === true) {
			name = "Sammis_theme" + name;
		}
		let url = `ext:驶舰之向/audio/BGM/Sammis/${name}.mp3`;
		_status.tempMusic = url;
		game.playBackgroundMusic();
	}
	/**
	 * 关闭当前的界面
	 * @param { string | Array } current 需要被关闭的界面的类名
	 * @param { CallbackFunction } callback 关闭后执行的函数
	 * 
	 * @callback CallbackFunction
	 * @param {boolean} clear
	 */
	static closeCurrentDomSamiss(current, callback) {
		SaamisU.save();
		if (typeof current != "string" && !Array.isArray(current)) {
			game.reload();
			return;
		} else if (typeof current == "string") {
			// 存在则移除对应类名的界面
			document.body.removeChild(
				document.getElementsByClassName(current)[0]
			);
			_status.saamisSJZX.current.closeDom = undefined;
			window.SaamisStore.isEventListenerAdded = {};
			// 判断是否有函数,有则执行
			if (typeof callback === "function") {
				let clear = callback();
				if (clear !== false) _status.saamisSJZX.current.callback = undefined;
			}
		} else if (Array.isArray(current)) {
			for (var i = 0; i < current.length; i++) {
				this.closeCurrentDomSamiss(
					current[i],
					i == current.length - 1 ? callback : null
				);
			}
		} else throw new Error(`current must be string or Array!`);
	}
	/**
	 * 设置需要被关闭的页面
	 * @param { string | Array } dom 需要被关闭的界面的类名
	 * @param { Function } callback 关闭后执行的函数,当返回为false时不删除被记录的callback
	 */
	static setCloseDomSamiss(dom, callback) {
		if (typeof dom !== "string" && !Array.isArray(dom)) {
			throw new Error(`dom must be string or Array!`);
		} else {
			_status.saamisSJZX.current.closeDom = dom;
			if (typeof callback !== "function")
				console.warn(`callback is not function!`);
			if (callback.toString().includes('this.') && SaamisU.isdebugger())
				console.warn(`回调函数中存在关键字this,这可能导致该函数无法正常运行!`);
			_status.saamisSJZX.current.callback = callback;
		}
		return _status.saamisSJZX.current;
	}
	/**
	 * 初始化萨米肉鸽
	 */
	static initSaamis() {
		if (!lib.config.SaamisSave) {
			SaamisU.initSaamissSave();
		}
		var SaamisSave = lib.config.SaamisSave;
		//设置背景
		var bgsjzx = document.createElement("div");
		bgsjzx.classList.add("backgroundSJZX");
		bgsjzx.style.backgroundImage = `url(extension/驶舰之向/image/mode/rougelike/Saamis/orther/sasmisBackgroud0.png)`;
		document.body.appendChild(bgsjzx);
		// 设置特效
		mrfzfuc.snowSJZX(bgsjzx, 500);
		//图标设置
		var fatherSJZX = document.createElement("div");
		fatherSJZX.classList.add("fatherSJZX");
		document.body.appendChild(fatherSJZX);
		var logoSammisSJZX = document.createElement("div");
		logoSammisSJZX.classList.add("logoSammisSJZX");
		logoSammisSJZX.style.backgroundImage = `url(extension/驶舰之向/image/mode/rougelike/Saamis/orther/logo.png)`;
		fatherSJZX.appendChild(logoSammisSJZX);
		//菜单设置
		var fatherMenuSJZX = document.createElement("div");
		fatherMenuSJZX.classList.add("fatherMenuSJZX");
		document.body.appendChild(fatherMenuSJZX);
		var backbutton = document.createElement("div");
		backbutton.classList.add("back-buttonSJZX");
		backbutton.addEventListener("click", (event) => {
			var current = _status.saamisSJZX.current;
			this.closeCurrentDomSamiss(current.closeDom, current.callback);
		});
		backbutton.style.backgroundImage = `url(extension/驶舰之向/image/mode/rougelike/Saamis/orther/back.png)`;
		fatherMenuSJZX.appendChild(backbutton);
		var mainMenu = document.createElement("div");
		mainMenu.classList.add("main-menuSJZX");
		mainMenu.addEventListener("click", () => {
			// 对菜单进行设置,使其置于图层之上
			document.getElementsByClassName(
				"menu-container"
			)[0].style.zIndex = 30;
			document.getElementsByClassName(
				"main menu dialog popped static"
			)[0].style.marginTop = "20px";
			ui.click.configMenu();
		});
		mainMenu.style.backgroundImage = `url(extension/驶舰之向/image/mode/rougelike/Saamis/orther/home.png)`;
		fatherMenuSJZX.appendChild(mainMenu);
		// 声音菜单
		var soundbuttonSJZX = document.createElement("div");
		soundbuttonSJZX.classList.add("sound-buttonSJZX");
		soundbuttonSJZX.addEventListener("click", () => {
			// 对菜单进行设置,使其置于图层之上
			var tmpDomSJZX = document.createElement("div");
			tmpDomSJZX.classList.add("noneSJZX");
			tmpDomSJZX.addEventListener("click", () => {
				document.body.removeChild(
					document.getElementsByClassName("noneSJZX")[0]
				);
			});
			var soundDom = ui.click.volumn();
			soundDom.style.backgroundImage = `url(extension/驶舰之向/image/mode/rougelike/Saamis/orther/soundBG.png)`;
			soundDom.style.position = "absolute";
			soundDom.style.backgroundSize = "100% 100%";
			soundDom.style.width = "20%";
			soundDom.style.height = "20%";
			soundDom.style.top = "6%";
			soundDom.style.left = "8%";
			tmpDomSJZX.appendChild(soundDom);
			document.body.appendChild(tmpDomSJZX);
		});
		soundbuttonSJZX.style.backgroundImage = `url(extension/驶舰之向/image/mode/rougelike/Saamis/orther/sound.png)`;
		fatherMenuSJZX.appendChild(soundbuttonSJZX);
		//科考等级
		var levelScientificSJZX = document.createElement("div");
		levelScientificSJZX.classList.add("level-ScientificSJZX");
		levelScientificSJZX.style.backgroundImage = `url(extension/驶舰之向/image/mode/rougelike/Saamis/orther/levelbg.png)`;
		document.body.appendChild(levelScientificSJZX);
		var levelexpeditionsRecordsLogo2 = document.createElement("div");
		levelexpeditionsRecordsLogo2.classList.add(
			"level-expeditionsRecordsLogo2"
		);
		levelexpeditionsRecordsLogo2.style.backgroundImage = `url(extension/驶舰之向/image/mode/rougelike/Saamis/orther/expeditionsRecords.png)`;
		levelexpeditionsRecordsLogo2.addEventListener("click", () => {
			alert(`累计获取的经验为:${SaamisSave.level[1]}`);
		});
		levelScientificSJZX.appendChild(levelexpeditionsRecordsLogo2);
		var levelLVBG = document.createElement("div");
		levelLVBG.classList.add("level-LV-BG");
		levelScientificSJZX.appendChild(levelLVBG);
		var levelLVlogo = document.createElement("div");
		levelLVlogo.classList.add("level-LVlogo");
		levelLVlogo.style.backgroundImage = `url(extension/驶舰之向/image/mode/rougelike/Saamis/orther/LV.png)`;
		levelLVBG.appendChild(levelLVlogo);
		var levelLVtext = document.createElement("div");
		levelLVtext.classList.add("level-LVtext");
		levelLVtext.innerText = `${SaamisSave.level[0]}`;
		levelLVBG.appendChild(levelLVtext);
		var levelexpeditionsRecordsLogo = document.createElement("div");
		levelexpeditionsRecordsLogo.classList.add(
			"level-expeditionsRecordsLogo"
		);
		levelexpeditionsRecordsLogo.style.backgroundImage = `url(extension/驶舰之向/image/mode/rougelike/Saamis/orther/levellogo.png)`;
		levelScientificSJZX.appendChild(levelexpeditionsRecordsLogo);
		// 游戏开始按钮
		let gameSam = mrfzfuc.createDomSJZX('startSam', false);
		let gameStartLogoSJZX = mrfzfuc.createDomSJZX('gameStartLogoSJZX', false);
		let delSave = mrfzfuc.createDomSJZX('delSave', false);
		if (this.isStart()) {
			gameStartLogoSJZX.classList.add('loadSaveLogoSJZX');
		} else {
			delSave.classList.add('display-none');
		}
		gameSam.appendChild(gameStartLogoSJZX);
		gameSam.appendChild(delSave);
		fatherSJZX.appendChild(gameSam);
		gameSam.addEventListener('click', e => {
			/**
			 * @type {HTMLElement}
			 */
			let target = e.target;
			if (target.classList.contains('delSave')) {
				let y = confirm(`是否放弃探索？此操作无法取消!`);
				if (y === true) {
					let gameStartLogoSJZX = document.body.querySelector('.gameStartLogoSJZX');
					this.initMatchSave();
					target.classList.add('display-none');
					gameStartLogoSJZX.classList.remove('loadSaveLogoSJZX');
				}
			} else if (target.classList.contains('loadSaveLogoSJZX')) {
				this.loadSave();
			} else if (target.classList.contains('gameStartLogoSJZX')) {
				this.samissStart();
			}
		})
		//文化比较
		var buffSammisSJZX = document.createElement("div");
		buffSammisSJZX.classList.add("buffSammisSJZX");
		buffSammisSJZX.style.backgroundImage = `url(extension/驶舰之向/image/mode/rougelike/Saamis/orther/buff.png)`;
		buffSammisSJZX.addEventListener("click", () => {
			this.CultureSaamisConfig();
		});
		fatherSJZX.appendChild(buffSammisSJZX);
		var buffSammiscompelet = document.createElement("div");
		buffSammiscompelet.classList.add("buffSammis-compelet");
		buffSammiscompelet.style.backgroundImage = `url(extension/驶舰之向/image/mode/rougelike/Saamis/orther/finish.png)`;
		buffSammisSJZX.appendChild(buffSammiscompelet);
		var buffSammislevelText = document.createElement("span");
		buffSammislevelText.classList.add("outSystemSamiss-levelText");
		buffSammislevelText.id = "buffSammislevelText";
		buffSammislevelText.innerHTML = `${SaamisSave.buff.point}`;
		buffSammisSJZX.appendChild(buffSammislevelText);
		var buffSammistextSJZX = document.createElement("span");
		buffSammistextSJZX.classList.add("outSystemSamiss-textSJZX");
		buffSammistextSJZX.innerHTML = `文化比较`;
		buffSammisSJZX.appendChild(buffSammistextSJZX);
		if (SaamisSave.buff.usedPoint >= 100) {
			buffSammislevelText.classList.add("display-none");
		} else {
			buffSammiscompelet.classList.add("display-none");
		}
		//前瞻性投资 cannotSammis
		var cannotSammisSJZX = document.createElement("div");
		cannotSammisSJZX.classList.add("cannotSammisSJZX");
		cannotSammisSJZX.style.backgroundImage = `url(extension/驶舰之向/image/mode/rougelike/Saamis/orther/cannot.png)`;
		cannotSammisSJZX.addEventListener("click", () => {
			this.CannotSammisConfig();
		});
		fatherSJZX.appendChild(cannotSammisSJZX);
		var cannotSammislevelText = document.createElement("span");
		cannotSammislevelText.classList.add("outSystemSamiss-levelText");
		cannotSammislevelText.id = "cannotSammislevelText";
		cannotSammislevelText.innerHTML = `${SaamisSave.cannot.point}`;
		cannotSammisSJZX.appendChild(cannotSammislevelText);
		var cannotSammistextSJZX = document.createElement("span");
		cannotSammistextSJZX.classList.add("outSystemSamiss-textSJZX");
		cannotSammistextSJZX.innerHTML = `前瞻性投资`;
		cannotSammisSJZX.appendChild(cannotSammistextSJZX);
		//挑战自然(难度设置) battleNatureSJZX battleNature-textSJZX
		var battleNatureSJZX = document.createElement("div");
		battleNatureSJZX.classList.add("battleNatureSJZX");
		battleNatureSJZX.style.backgroundImage = `url(extension/驶舰之向/image/mode/rougelike/Saamis/orther/battleNature.png)`;
		battleNatureSJZX.addEventListener("click", () => {
			this.BattleNatueConfig();
		});
		fatherSJZX.appendChild(battleNatureSJZX);
		var battleNaturelevelText = document.createElement("span");
		battleNaturelevelText.classList.add("outSystemSamiss-levelText");
		battleNaturelevelText.id = "battleNaturelevelText";
		battleNaturelevelText.innerHTML = `${SaamisSave.difficulty}`;
		battleNatureSJZX.appendChild(battleNaturelevelText);
		var battleNaturetextSJZX = document.createElement("span");
		battleNaturetextSJZX.classList.add("outSystemSamiss-textSJZX");
		battleNaturetextSJZX.innerHTML = `挑战自然`;
		battleNatureSJZX.appendChild(battleNaturetextSJZX);
	}
	/**
	 * 是否开启了游戏
	 */
	static isStart() {
		return SaamisU.getSave().MatchSave.layers.num !== null;
	}
	/**
	 * 打开挑战自然界面
	 */
	static BattleNatueConfig() {
		// 获取数据
		if (!lib.config.SaamisSave) {
			console.warn("存档数据不存在!");
		}
		var SammisSave = lib.config.SaamisSave;
		// 界面设置
		// 容器
		var battleNatrueContainSJZX = document.createElement("div");
		battleNatrueContainSJZX.classList.add("battleNatrueContainSJZX");
		var battleNatueContainLeftSJZX = document.createElement("div");
		battleNatueContainLeftSJZX.classList.add("battleNatueContainLeftSJZX");
		battleNatrueContainSJZX.appendChild(battleNatueContainLeftSJZX);
		var battleNatueContainRightSJZX = document.createElement("div");
		battleNatueContainRightSJZX.classList.add(
			"battleNatueContainRightSJZX"
		);
		battleNatrueContainSJZX.appendChild(battleNatueContainRightSJZX);
		document.body.appendChild(battleNatrueContainSJZX);
		// 更新退出按钮设置
		this.setCloseDomSamiss(
			"battleNatrueContainSJZX",
			this.SaamissUpdataAtleftButton
		);
		// 左边信息设置
		// 添加容器
		var battleNatueContainLeftUpSJZX = document.createElement("div");
		battleNatueContainLeftUpSJZX.classList.add(
			"battleNatueContainLeftUpSJZX"
		);
		battleNatueContainLeftSJZX.appendChild(battleNatueContainLeftUpSJZX);
		// 添加图标
		function addTips(text, path, onlyImage, className) {
			let flag = 0;
			if (typeof className !== "string") {
				className = "battleNatrueTipsLogo";
			} else flag++;
			//设置二级容器
			var battleNatrueTipsContain = document.createElement("div");
			battleNatrueTipsContain.classList.add(
				flag == 1 ? className : "battleNatrueTipsContain"
			);
			if (flag == 1) {
				battleNatrueTipsContain.style.backgroundImage = `url(extension/驶舰之向/image/mode/rougelike/Saamis/leftBottomButton/battleNature/${path}.png)`;
			}
			battleNatrueTipsContain.id = path;
			battleNatueContainLeftUpSJZX.appendChild(battleNatrueTipsContain);
			//往二级容器里添加图片
			if (flag == 1) return;
			var battleNatrueTipsLogo = document.createElement("div");
			battleNatrueTipsLogo.classList.add(className);
			battleNatrueTipsLogo.style.backgroundImage = `url(extension/驶舰之向/image/mode/rougelike/Saamis/leftBottomButton/battleNature/${path}.png)`;
			battleNatrueTipsContain.appendChild(battleNatrueTipsLogo);
			if (onlyImage == true) return;
			//往二级容器里添加文字
			var battleNatrueTipsText = document.createElement("span");
			battleNatrueTipsText.classList.add("battleNatrueTipsText");
			battleNatrueTipsText.innerHTML = text;
			battleNatrueTipsContain.appendChild(battleNatrueTipsText);
		}
		var list = [
			[
				`${RougeLikeSJZX.storage.pointChange[SammisSave.difficulty]}%`,
				"pointEffective",
				null,
				null,
			],
			[
				`+${RougeLikeSJZX.storage.enemyEnhance[SammisSave.difficulty]}`,
				"enemyBuff",
				null,
				null,
			],
			[null, "boundary", true, "battleNatrueBoundary"],
			[
				`${RougeLikeSJZX.storage.prayerEnhance[SammisSave.difficulty]
				}%`,
				"prayer",
				null,
				null,
			],
			[
				`${RougeLikeSJZX.storage.gainBuff[SammisSave.difficulty]}`,
				"gainBuff",
				null,
				null,
			],
		];
		for (var i of list) {
			addTips(i[0], i[1], i[2], i[3]);
		}
		// 右侧信息设置
		// 难度描述
		var additional = [
			[
				"挑战自然",
				"麦哲伦将与我们同行<br>干员体力上限增加,获得的坍缩范式大大降低",
			],
			[1, "一段文本"],
			[2, "一段文本"],
			[3, "一段文本"],
			[4, "一段文本"],
			[5, "一段文本"],
			[6, "一段文本"],
			[7, "一段文本"],
			[8, "一段文本"],
			[9, "一段文本"],
			[10, "一段文本"],
			[11, "招募干员时所消耗的希望+1"],
			[12, "所有敌方跳过判定阶段"],
			[13, "所有敌方获得技能【英姿】(标)<br>所有敌方跳过弃牌阶段"],
			[14, "所有敌方获得技能【铁骑】(标)"],
			[15, "所有己方受到的伤害+1"],
		];
		// 修改additional
		for (var i = 0; i < additional.length; i++) {
			if (SammisSave.maxpass >= i) {
				additional[i][2] = true;
			} else additional[i][2] = false;
		}
		// 添加信息
		var setAdditional = function (number, str, unlocked) {
			var SamllBoxSJZX = document.createElement("div");
			SamllBoxSJZX.classList.add("battleNatueContainRightSamllBoxSJZX");
			SamllBoxSJZX.style.backgroundImage = `url(extension/驶舰之向/image/mode/rougelike/Saamis/leftBottomButton/battleNature/bg1.png)`;
			SamllBoxSJZX.addEventListener("mouseenter", function () {
				if (unlocked == true)
					SamllBoxSJZX.classList.add("highlighted_green");
				else SamllBoxSJZX.classList.add("highlighted_red");
			});
			SamllBoxSJZX.addEventListener("mouseleave", function () {
				SamllBoxSJZX.classList.remove("highlighted_green");
				SamllBoxSJZX.classList.remove("highlighted_red");
			});
			battleNatueContainRightSJZX.appendChild(SamllBoxSJZX);
			var SamllBoxTextSJZX = document.createElement("span");
			SamllBoxTextSJZX.classList.add("battleNatueBoxText");
			SamllBoxTextSJZX.innerHTML = number;
			SamllBoxSJZX.appendChild(SamllBoxTextSJZX);
			var boundarySJZX = document.createElement("div");
			boundarySJZX.classList.add("battleNatrueBoxBoundarySJZX");
			boundarySJZX.style.backgroundImage = `url(extension/驶舰之向/image/mode/rougelike/Saamis/leftBottomButton/battleNature/boundary2.png)`;
			SamllBoxSJZX.appendChild(boundarySJZX);
			var boundary2SJZX = document.createElement("div");
			boundary2SJZX.classList.add("battleNatrueBoxBoundarySJZX");
			boundary2SJZX.style.backgroundImage = `url(extension/驶舰之向/image/mode/rougelike/Saamis/leftBottomButton/battleNature/boundary2.png)`;
			boundary2SJZX.style.float = "right";
			boundary2SJZX.style.marginTop = "0px";
			boundary2SJZX.style.height = "100%";
			SamllBoxSJZX.appendChild(boundary2SJZX);
			var battleNatueBox2SJZX = document.createElement("div");
			battleNatueBox2SJZX.classList.add("battleNatueBox2SJZX");
			SamllBoxSJZX.appendChild(battleNatueBox2SJZX);
			var battleNatueAdditionSJZX = document.createElement("div");
			battleNatueAdditionSJZX.classList.add("battleNatueAdditionSJZX");
			battleNatueAdditionSJZX.style.backgroundImage = `url(extension/驶舰之向/image/mode/rougelike/Saamis/leftBottomButton/battleNature/additional.png)`;
			battleNatueBox2SJZX.appendChild(battleNatueAdditionSJZX);
			var battleNatueBox2Text = document.createElement("span");
			battleNatueBox2Text.classList.add("battleNatueBox2Text");
			battleNatueBox2Text.innerHTML = str;
			battleNatueBox2SJZX.appendChild(battleNatueBox2Text);
			if (unlocked == true) {
				var SamllBoxChooseTextSJZX = document.createElement("span");
				SamllBoxChooseTextSJZX.classList.add("battleNatueBoxText");
				SamllBoxChooseTextSJZX.innerHTML = "√ 可选择";
				SamllBoxChooseTextSJZX.style.float = "right";
				SamllBoxChooseTextSJZX.style.width = "20%";
				SamllBoxChooseTextSJZX.style.color = "green";
				SamllBoxSJZX.addEventListener("click", () => {
					SammisSave.difficulty =
						typeof number === "number" ? number : 0;
					game.saveConfig("SaamisSave", SammisSave);
					var current = _status.saamisSJZX.current.closeDom;
					saamisGame.closeCurrentDomSamiss(
						current,
						saamisGame.SaamissUpdataAtleftButton
					);
				});
				SamllBoxSJZX.appendChild(SamllBoxChooseTextSJZX);
			} else {
				var SamllBoxChooseTextSJZX = document.createElement("span");
				SamllBoxChooseTextSJZX.classList.add("battleNatueBoxText");
				SamllBoxChooseTextSJZX.innerHTML = "✖ 未解锁";
				SamllBoxChooseTextSJZX.style.float = "right";
				SamllBoxChooseTextSJZX.style.width = "20%";
				SamllBoxChooseTextSJZX.style.color = "red";
				SamllBoxSJZX.appendChild(SamllBoxChooseTextSJZX);
			}
		};
		for (var i = 0; i < additional.length; i++) {
			setAdditional(additional[i][0], additional[i][1], additional[i][2]);
		}
	}
	/**
	 * 打开前瞻性投资界面
	 */
	static CannotSammisConfig() {
		// 获取数据
		if (!lib.config.SaamisSave) {
			throw new Error("存档数据损坏!");
		}
		var SaamisSave = lib.config.SaamisSave;
		// 界面设置
		// 容器
		var battleNatrueContainSJZX = document.createElement("div");
		battleNatrueContainSJZX.classList.add("battleNatrueContainSJZX");
		var battleNatueContainLeftSJZX = document.createElement("div");
		battleNatueContainLeftSJZX.classList.add("battleNatueContainLeftSJZX");
		battleNatrueContainSJZX.appendChild(battleNatueContainLeftSJZX);
		var battleNatueContainRightSJZX = document.createElement("div");
		battleNatueContainRightSJZX.classList.add(
			"battleNatueContainRightSJZX"
		);
		battleNatueContainRightSJZX.style.display = "flex";
		battleNatueContainRightSJZX.style.flexWrap = "wrap";
		battleNatrueContainSJZX.appendChild(battleNatueContainRightSJZX);
		document.body.appendChild(battleNatrueContainSJZX);
		// 更新退出按钮设置
		this.setCloseDomSamiss(
			"battleNatrueContainSJZX",
			this.SaamissUpdataAtleftButton
		);
		// 设置左边容器信息
		var cannotImageSJZX = document.createElement("div");
		cannotImageSJZX.classList.add("cannotImageSJZX");
		cannotImageSJZX.style.backgroundImage = `url(extension/驶舰之向/image/mode/rougelike/Saamis/leftBottomButton/cannot/cannot.png)`;
		// 坎诺特对话框
		// 文本
		var cannotSay = RougeLikeSJZX.cannotSay.investment.default.randomGet();
		var cannotDialog = this.createDialogBoxSaamis(
			"古怪商人 坎诺特",
			cannotSay,
			"50% 20%"
		);
		cannotDialog.style.marginTop = "80%";
		cannotDialog.style.marginLeft = "20%";
		cannotImageSJZX.appendChild(cannotDialog);
		battleNatueContainLeftSJZX.appendChild(cannotImageSJZX);
		// 设置右边容器信息
		// 设置大标题
		var cannotIntro = document.createElement("div");
		cannotIntro.classList.add("cannotIntro");
		var title = document.createElement("div");
		title.classList.add("title");
		var logo = document.createElement("div");
		logo.classList.add("logo");
		title.appendChild(logo);
		var text = document.createElement("span");
		text.classList.add("text");
		text.innerHTML = `前瞻性投资`;
		title.appendChild(text);
		cannotIntro.appendChild(title);
		var intro = document.createElement("div");
		intro.classList.add("introBox");
		var text = document.createElement("span");
		text.classList.add("text");
		text.innerHTML =
			"投资系统会概率性的在商店出现,其余额会在每一次探索中继承.养成良好的投资习惯,解锁投资奖励,为后续的探索积攒优势.投资奖赏的解锁状态会在探索后更新.";
		intro.appendChild(text);
		cannotIntro.appendChild(intro);
		battleNatueContainRightSJZX.appendChild(cannotIntro);
		// 投资显示
		var cannotMoney = document.createElement("div");
		cannotMoney.classList.add("cannotMoney");
		var image = document.createElement("div");
		image.classList.add("image");
		cannotMoney.appendChild(image);
		var textBox = document.createElement("div");
		textBox.classList.add("textBox");
		var createDivTemp = (str, value) => {
			var Box = document.createElement("div");
			Box.classList.add("Box");
			var title = document.createElement("span");
			title.classList.add("title");
			title.innerHTML = str;
			Box.appendChild(title);
			var text = document.createElement("span");
			text.classList.add("text");
			text.innerHTML = value;
			Box.appendChild(text);
			return Box;
		};
		var addList = [
			["历史最高", SaamisSave.cannot.max],
			["当前余额", SaamisSave.cannot.point],
		];
		for (var i of addList) {
			var box = createDivTemp(i[0], i[1]);
			textBox.appendChild(box);
		}
		cannotMoney.appendChild(textBox);
		battleNatueContainRightSJZX.appendChild(cannotMoney);
		// 设置进度条
		var cannotPhase = document.createElement("div");
		cannotPhase.classList.add("cannotPhase");
		battleNatueContainRightSJZX.appendChild(cannotPhase);
		// 进度条文本
		var cannotPhaseText = document.createElement("div");
		cannotPhaseText.classList.add("cannotPhaseText");
		var numberList = ["025", "100", "200", "325", "500"];
		for (var i = 0; i < numberList.length; i++) {
			var text = document.createElement("span");
			text.classList.add("text");
			text.id = "phaseNumber" + i;
			text.innerHTML = numberList[i];
			if (SaamisSave.cannot.max < Number(numberList[i])) {
				text.classList.add("unlocked");
			}
			cannotPhaseText.appendChild(text);
		}
		cannotPhase.appendChild(cannotPhaseText);
		var cannotPhaseImage = document.createElement("div");
		cannotPhaseImage.classList.add("cannotPhaseImage");
		// 循环添加组合图形
		for (var i = 0; i < 4; i++) {
			var diamond = document.createElement("div");
			diamond.classList.add("diamond");
			diamond.id = "diamond" + i;
			var line = document.createElement("div");
			line.classList.add("line");
			line.id = "line" + i;
			cannotPhaseImage.appendChild(diamond);
			cannotPhaseImage.appendChild(line);
			if (i == 3) {
				var diamond = document.createElement("div");
				diamond.classList.add("diamond");
				diamond.id = "diamond4";
				cannotPhaseImage.appendChild(diamond);
			}
		}
		cannotPhase.appendChild(cannotPhaseImage);
		for (var i = numberList.length; i >= 0; i--) {
			if (SaamisSave.cannot.max < Number(numberList[i])) {
				var diamond = document.getElementById("diamond" + i),
					line = document.getElementById("line" + (i - 1));
				diamond.classList.add("unlocked");
				if (i > 0) line.classList.add("unlocked");
			}
		}
		// 设置进度文本之间的距离
		var line0 = document.getElementById("line0"),
			rect = line0.getBoundingClientRect(),
			distance = rect.height;
		var diamond0 = document.getElementById("diamond0"),
			rect2 = diamond0.getBoundingClientRect(),
			distance2 = rect2.height;
		for (var i = 0; i < 5; i++) {
			var target = document.getElementById("phaseNumber" + i);
			if (i == 0) {
				target.style.marginTop = Math.abs(distance2 / 4) + "px";
				continue;
			}
			target.style.marginTop = Math.abs(distance) + "px";
		}
		// 奖励展示
		var cannotGainBuff = document.createElement("div");
		cannotGainBuff.classList.add("cannotGainBuff");
		var showList = [
			["<前瞻性投资系统>开放<余额提取>功能"],
			[
				"坎诺特向你展示了货柜？",
				["Tips", "我们似乎可以<说服>坎诺特让它赠予我们商品？"],
			],
			["诡异行商中会额外出售一个商品"],
			["解锁收藏品【坎诺特的印记】"],
			["诡异行商中会额外出售一个商品"],
		];
		for (var i = 0; i < showList.length; i++) {
			var max = SaamisSave.cannot.max,
				need = Number(numberList[i]);
			var showBox = document.createElement("div");
			showBox.classList.add("showBox", "leftSJZX");
			showBox.style.paddingLeft = "1%";
			if (max >= need) {
				showBox.innerHTML = "◇" + showList[i][0];
				if (showList[i][1]) {
					showBox.innerHTML =
						'◇<span style="text-decoration:underline">' +
						showList[i][0] +
						"</span>";
					_status.saamissTmp1 = showList[i][1];
					showBox.addEventListener("click", (event) => {
						var rect = cannotGainBuff.getBoundingClientRect();
						var x = rect.left;
						var y = rect.top;
						var dialogElement = this.createDialogBoxSaamis(
							_status.saamissTmp1[0],
							_status.saamissTmp1[1],
							"20% auto"
						);
						dialogElement.style.left = x + "px";
						dialogElement.style.top = y + "px";
						var none = document.createElement("div");
						none.classList.add("noneSJZX");
						none.addEventListener("click", () => {
							document.body.removeChild(none);
						});
						none.appendChild(dialogElement);
						document.body.appendChild(none);
					});
				}
			} else {
				showBox.innerHTML = "◇" + showList[i][0];
				showBox.style.backgroundImage = `url(extension/驶舰之向/image/mode/rougelike/Saamis/leftBottomButton/cannot/cannotShowPhase2.png)`;
			}
			if (i != 0) showBox.style.marginTop = "1%";
			cannotGainBuff.appendChild(showBox);
		}
		battleNatueContainRightSJZX.appendChild(cannotGainBuff);
	}
	/**
	 * 打开文化比较界面
	 */
	static CultureSaamisConfig() {
		// 获取数据
		if (!lib.config.SaamisSave) {
			console.warn("存档数据不存在!");
		}
		var SaamisSave = lib.config.SaamisSave;
		// 界面设置
		// 容器
		var cultureContainSJZX = document.createElement("div");
		cultureContainSJZX.classList.add("cultureContainSJZX");
		var cultureLeftSJZX = document.createElement("div");
		cultureLeftSJZX.classList.add("cultureLeftSJZX");
		cultureContainSJZX.appendChild(cultureLeftSJZX);
		var cultureRightSJZX = document.createElement("div");
		cultureRightSJZX.classList.add("cultureRightSJZX");
		cultureContainSJZX.appendChild(cultureRightSJZX);
		document.body.appendChild(cultureContainSJZX);
		// 更新退出按钮设置
		this.setCloseDomSamiss(
			"cultureContainSJZX",
			this.SaamissUpdataAtleftButton
		);
		// 左边界面设置
		var titleBox = document.createElement("div");
		titleBox.classList.add("titleBox");
		cultureLeftSJZX.appendChild(titleBox);
		var image = document.createElement("div");
		image.classList.add("image");
		titleBox.appendChild(image);
		var text = document.createElement("span");
		text.classList.add("text", "centerSJZX");
		text.innerHTML = "生效效果";
		titleBox.appendChild(text);
		var BuffListBox = this.createCultureGetBuffListBox();
		cultureLeftSJZX.appendChild(BuffListBox);
		// 设置右边界面
		var Container = document.createElement("div");
		Container.classList.add("Container");
		cultureRightSJZX.appendChild(Container);
		//	生成分界线的函数
		var createPhaseBox = function (str, cost) {
			var PhaseBox = document.createElement("div");
			PhaseBox.classList.add("PhaseBox");
			var text = document.createElement("span");
			text.classList.add("text", "leftSJZX");
			text.innerHTML = str;
			PhaseBox.appendChild(text);
			var costBox = document.createElement("div");
			costBox.classList.add("costBox");
			var text2 = document.createElement("span");
			text2.classList.add("text", "leftSJZX");
			text2.innerHTML = cost;
			costBox.appendChild(text2);
			var image = document.createElement("div");
			image.classList.add("image");
			costBox.appendChild(image);
			PhaseBox.appendChild(costBox);
			return PhaseBox;
		};
		// 生成buff选择的函数
		var createbuffBox = function (buff, special) {
			var buffBox = document.createElement("div");
			if (special === true) buffBox.classList.add("buffBoxSpecial");
			else buffBox.classList.add("buffBox");
			var image = document.createElement("div");
			image.classList.add("image");
			image.style.backgroundImage = `url(extension/驶舰之向/image/mode/rougelike/Saamis/leftBottomButton/culture/pic/${buff[0]}.png)`;
			buffBox.appendChild(image);
			var title = document.createElement("div");
			title.classList.add("title", "centerSJZX");
			title.innerHTML = buff[3][0];
			buffBox.appendChild(title);
			if (special === true) {
				var free = document.createElement("div");
				free.classList.add("free");
				buffBox.appendChild(free);
			}
			var intro = document.createElement("div");
			intro.classList.add("text", "leftSJZX");
			intro.innerHTML = buff[3][1];
			buffBox.appendChild(intro);
			if (buff[2] == false) buffBox.classList.add("highlighted_black");
			else title.classList.add("unlocked");
			return buffBox;
		};
		var info = this.getCultureInfo("all").nameList,
			keyword = ["phase1", "phase2", "phase3"];
		let cost = 0;
		for (let i = 0; i < info.length; i++) {
			if (i == 0 || keyword.includes(info[i][0])) {
				cost++;
				var phase = createPhaseBox(
					`第${get.cnNumber(cost, true)}阶段`,
					`各节点消耗${cost}`
				);
				Container.appendChild(phase);
			}
			let dialog = createbuffBox(
				info[i],
				keyword.includes(info[i][0]) == true ? true : false
			);
			if (info[i][2] === false) {
				let lockedBoxSJZX = this.createLockSaamis(i),
					unlocked = info[i][2];
				(function (cost) {
					let lockedFun = function () {
						var saveCost = SaamisSave.buff.point,
							usedPoint = SaamisSave.buff.usedPoint;
						if (dialog.className.includes("buffBoxSpecial")) {
							if (unlocked === false)
								alert(`解锁上一阶段所有节点自动解锁此节点!`);
							return;
						}
						if (saveCost >= cost) {
							switch (cost) {
								case 1:
									// 第一阶段 没有解锁条件
									dialog.removeChild(lockedBoxSJZX);
									lockedBoxSJZX.removeEventListener(
										"click",
										lockedFun
									);
									dialog
										.querySelector(".title")
										.classList.add("unlocked");
									lib.config.SaamisSave.buff.point -= 1;
									lib.config.SaamisSave.buff.usedPoint += 1;
									this.SaamissUpadteCulture(i);
									break;
								case 2:
									// 第二阶段 累计消耗7
									if (cost == 2 && usedPoint > 6) {
										dialog.removeChild(lockedBoxSJZX);
										lockedBoxSJZX.removeEventListener(
											"click",
											lockedFun
										);
										dialog
											.querySelector(".title")
											.classList.add("unlocked");
										lib.config.SaamisSave.buff.point -= 2;
										lib.config.SaamisSave.buff.usedPoint += 2;
										this.SaamissUpadteCulture(i);
									} else alert(`请先解锁第一阶段!`);
									break;
								case 3:
									// 第三阶段 累计消耗33
									if (usedPoint > 32) {
										dialog.removeChild(lockedBoxSJZX);
										lockedBoxSJZX.removeEventListener(
											"click",
											lockedFun
										);
										dialog
											.querySelector(".title")
											.classList.add("unlocked");
										lib.config.SaamisSave.buff.point -= 3;
										lib.config.SaamisSave.buff.usedPoint += 3;
										this.SaamissUpadteCulture(i);
									} else alert(`请先解锁第二阶段!`);
									break;
								case 4:
									// 第四阶段 累计消耗72
									if (usedPoint > 71) {
										dialog.removeChild(lockedBoxSJZX);
										lockedBoxSJZX.removeEventListener(
											"click",
											lockedFun
										);
										dialog
											.querySelector(".title")
											.classList.add("unlocked");
										lib.config.SaamisSave.buff.point -= 4;
										lib.config.SaamisSave.buff.usedPoint += 4;
										this.SaamissUpadteCulture(i);
									} else alert(`请先解锁第三阶段!`);
									break;
								default:
									// 默认
									dialog.removeChild(lockedBoxSJZX);
									lockedBoxSJZX.removeEventListener(
										"click",
										lockedFun
									);
									dialog
										.querySelector(".title")
										.classList.add("unlocked");
									lib.config.SaamisSave.buff.point -= cost;
									lib.config.SaamisSave.buff.usedPoint +=
										cost;
									this.SaamissUpadteCulture(i);
							}
						} else alert(`需要${cost}个理性视域才可解锁!`);
					};
					lockedBoxSJZX.addEventListener("click", lockedFun);
				})(cost);
				dialog.appendChild(lockedBoxSJZX);
			}
			Container.appendChild(dialog);
		}
		var pointShow = document.createElement("div");
		pointShow.classList.add("pointShow");
		var showBox = document.createElement("div");
		showBox.classList.add("showBox");
		var image = document.createElement("div");
		image.classList.add("image");
		showBox.appendChild(image);
		var text = document.createElement("span");
		text.classList.add("text", "centerSJZX");
		text.innerHTML = SaamisSave.buff.point;
		showBox.appendChild(text);
		pointShow.appendChild(showBox);
		cultureRightSJZX.appendChild(pointShow);
		// this.SaamissUpadteCulture();
	}
	/**
	 * 创建文化比较Buff统计表
	 */
	static createCultureGetBuffListBox() {
		var BuffListBox = document.createElement("div");
		BuffListBox.classList.add("BuffListBox");
		var textBox = document.createElement("div");
		textBox.classList.add("textBox");
		var info = this.getCultureInfo(false).totalInfo;
		for (var key in info) {
			var text = document.createElement("span");
			text.classList.add("text", "leftSJZX");
			text.id = key;
			text.innerHTML = info[key];
			textBox.appendChild(text);
		}
		BuffListBox.appendChild(textBox);
		return BuffListBox;
	}
	/**
	 * 更新文化比较的buff
	 * @param { Number } index 解锁第X个buff
	 */
	static SaamissUpadteCulture(index) {
		if (!lib.config.SaamisSave) {
			throw new error("存档数据不存在!");
		}
		let SammisSave = lib.config.SaamisSave;
		// 更新理性视域数
		var text = Array.from(
			document.getElementsByClassName("text centerSJZX")
		).filter((dom) => dom.parentNode.className == "showBox")[0];
		if (text) text.innerHTML = SammisSave.buff.point;
		// 更新免费解锁的节点
		var unlockedBoundary = [6, 32, 71],
			buffBoxSpecial = Array.from(
				document.getElementsByClassName("buffBoxSpecial")
			);
		for (var i = 0; i < buffBoxSpecial.length; i++) {
			if (SammisSave.buff.usedPoint > unlockedBoundary[i]) {
				var lockedBoxSJZX =
					buffBoxSpecial[i].querySelector(".lockedBoxSJZX");
				if (!lockedBoxSJZX) continue;
				this.modifySaamissDataCulture("phase" + (i + 1), 2, true);
				buffBoxSpecial[i]
					.querySelector(".title")
					.classList.add("unlocked");
				buffBoxSpecial[i].removeChild(lockedBoxSJZX);
			}
		}
		// 更新生效效果
		if (typeof index === "number") {
			this.modifySaamissDataCulture(index, 2, true);
			var BuffListBox = this.createCultureGetBuffListBox(),
				old = document.getElementsByClassName("BuffListBox")[0],
				parent = old.parentNode;
			parent.replaceChild(BuffListBox, old);
		}
	}
	/**
	 * 修改文化比较buff的数据
	 * @param { string | Number } buff 获取第X个列表或寻找某个键值对应的列表
	 * @param { Number } changeIndex 修改列表中的第X个元素
	 * @param { any } changeTo 将第X个元素修改成什么
	 * @param { any } data 需要修改的对象,默认为文化比较的列表
	 */
	static modifySaamissDataCulture(
		buff,
		changeIndex,
		changeTo,
		data = lib.config.SaamisSave.buff.enable
	) {
		let dataGroups = [];
		// 收集所有数据组
		for (const phaseKey in data) {
			const content = data[phaseKey].content;
			for (const contentKey in content) {
				for (const groupKey in content[contentKey]) {
					const group = content[contentKey][groupKey];
					if (!Array.isArray(group)) continue;
					dataGroups.push(group);
				}
			}
		}
		if (typeof buff === "number") {
			// 如果 buff 是数字,直接获取对应的数据组
			if (buff >= 0 && buff < dataGroups.length) {
				dataGroups[buff][changeIndex] = changeTo;
			}
		} else if (typeof buff === "string") {
			// 如果 buff 是字符串,获取所有键名与字符串一致的数据组
			for (const phaseKey in data) {
				const content = data[phaseKey].content;
				for (const contentKey in content) {
					if (content[contentKey][buff]) {
						const group = content[contentKey][buff];
						if (changeIndex >= 0 && changeIndex < group.length) {
							group[changeIndex] = changeTo;
						}
					}
				}
			}
		} else {
		}
		lib.config.SaamisSave.buff.enable = data;
		SaamisU.SaamisSave(lib.config.SaamisSave);
	}
	/**
	 * 更新文化比较、前瞻性投资和挑战自然进入界面的数据
	 */
	static SaamissUpdataAtleftButton() {
		// 获取数据
		if (!lib.config.SaamisSave) {
			throw new error("存档数据不存在!");
		}
		var SammisSave = lib.config.SaamisSave;
		var battleNature = document.getElementById("battleNaturelevelText");
		battleNature.innerHTML = `${SammisSave.difficulty}`;
		var cannotSammis = document.getElementById("cannotSammislevelText");
		cannotSammis.innerHTML = `${SammisSave.cannot.point}`;
		var buffSammiscompelet = document.getElementsByClassName(
			"buffSammis-compelet"
		)[0],
			buffSammislevelText = document.getElementById(
				"buffSammislevelText"
			);
		if (SammisSave.buff.usedPoint >= 100) {
			buffSammislevelText.classList.add("display-none");
			buffSammiscompelet.classList.remove("display-none");
		} else {
			buffSammislevelText.innerHTML = `${SammisSave.buff.point}`;
			buffSammislevelText.classList.remove("display-none");
			buffSammiscompelet.classList.add("display-none");
		}
	}
	/**
	 * 创建一个上锁的Dom对象
	 * @param { any } id 该Dom对象的id
	 * @returns { Document }
	 */
	static createLockSaamis(id) {
		var lockedBoxSJZX = document.createElement("div");
		lockedBoxSJZX.classList.add("lockedBoxSJZX");
		lockedBoxSJZX.id = id;
		var image = document.createElement("div");
		image.classList.add("lockedBoxImage");
		lockedBoxSJZX.appendChild(image);
		return lockedBoxSJZX;
	}
	/**
	 * 创建一个对话框
	 * @param { string } name 对话框的名字
	 * @param { string } text 对话框的内容
	 * @param { string } size 对话框的大小
	 * @param { string } fontsize 对话框的字体大小
	 *
	 * @returns { Document }
	 */
	static createDialogBoxSaamis(name, text, size, fontsize) {
		var dialogBox = document.createElement("div");
		dialogBox.classList.add("dialogBox");
		if (typeof size === "string") {
			var width = size.split(" ")[0],
				height = size.split(" ")[1];
			dialogBox.style.width = width;
			dialogBox.style.height = height;
		}
		var dialogBoxName = document.createElement("div");
		dialogBoxName.classList.add("dialogBox-name");
		dialogBoxName.innerHTML = name;
		if (Array.isArray(fontsize) && typeof fontsize[0] === "number")
			dialogBoxName.style.fontSize = fontsize[0] + "px";
		dialogBox.appendChild(dialogBoxName);
		var dialogBoxText = document.createElement("div");
		dialogBoxText.classList.add("dialogBox-text");
		dialogBoxText.innerHTML = text;
		if (Array.isArray(fontsize) && typeof fontsize[1] === "number")
			dialogBoxName.style.fontSize = fontsize[1] + "px";
		dialogBox.appendChild(dialogBoxText);
		return dialogBox;
	}
	/**
	 * 获得文化比较的buff列表
	 * @param { boolean | 'all' } locked 显示的内容:'all'为全部显示,false返回没有解锁的内容,true返回解锁的内容
	 *
	 * @returns { Object }
	 */
	static getCultureInfo(locked) {
		if (!lib.config.SaamisSave) {
			throw new Error("存档损坏!");
		}
		if (typeof locked !== "boolean" && locked !== "all") {
			console.warn(
				`locked 应该是 boolean 或 'all' 而不是${typeof locked}`
			);
			return;
		}
		let NameList = [],
			TotalList = {};
		// 获取名字
		var cultureBuff = lib.config.SaamisSave.buff.enable;
		for (var phase in cultureBuff) {
			if (cultureBuff.hasOwn(phase)) {
				var content = cultureBuff[phase].content;
				var cost = cultureBuff[phase].cost;
				for (var key in content) {
					if (content.hasOwn(key)) {
						var obj = content[key];
						Object.values(obj).forEach((item) => {
							if (Array.isArray(item)) {
								if (locked == true && item[2] == false) {
									NameList.push([
										item[0],
										item[1],
										item[2],
										null,
										cost,
									]);
								}
								if (locked == false && item[2] == true) {
									NameList.push([
										item[0],
										item[1],
										item[2],
										null,
										cost,
									]);
								}
								if (locked == "all")
									NameList.push([
										item[0],
										item[1],
										item[2],
										null,
										cost,
									]);
							}
						});
					}
				}
			}
		}
		// 获取介绍
		var info = SaamisSJZX_cultureBuff.buff;
		for (var i = 0; i < NameList.length; i++) {
			var list = NameList[i];
			var name = info[list[0]].name,
				base = info[list[0]].base || 1,
				intro = info[list[0]].intro,
				level = list[1] || 1;
			name = name.replace(/#/g, get.toRoman(level));
			intro = intro.replace(/#/g, level * base);
			NameList[i][3] = [name, intro];
		}
		// 统计
		for (var i of NameList) {
			var key = i[0],
				num = i[1];
			TotalList[key] =
				(typeof TotalList[key] === "number" ? TotalList[key] : 0) + num;
		}
		var cultureBuffInfo = SaamisSJZX_cultureBuff.buff;
		for (var key in TotalList) {
			if (cultureBuffInfo.hasOwn(key)) {
				TotalList[key] = cultureBuffInfo[key].intro.replace(
					/#/g,
					cultureBuffInfo[key].base * TotalList[key]
				);
			}
		}
		// 重新排序
		let buffOrder = [
			"yuhan",
			"zhudong",
			"wuzi",
			"wenhua",
			"qihou",
			"tongxun",
			"biandui",
			"yingji",
			"kancha",
			"yanjiu",
			"pinghe",
			"lingxing",
			"zhengxiang",
			"biaoda",
			"ganxing",
			"shiying",
			"jiaowang",
			"yuxian",
			"gongju",
			"phase1",
			"phase2",
			"phase3",
		];
		let sortedBuff = {};
		buffOrder.forEach((key) => {
			if (TotalList.hasOwn(key)) {
				sortedBuff[key] = "◇" + TotalList[key];
			}
		});
		return {
			nameList: NameList,
			totalInfo: sortedBuff,
		};
	}
	/**
	 * 初始化存档数据
	 */
	static initMatchSave() {
		let save = SaamisU.getSave();
		save.MatchSave = new SaamisSave().MatchSave;
		return SaamisU.SaamisSave(save);
	}
	/**
	 * 林可死大头
	 */
	static async samissStart() {
		if (!lib.config.SaamisSave) {
			alert("存档损坏!");
			return;
		}
		// 备份存档
		SaamisU.backupSave();
		let SaamisSave = lib.config.SaamisSave;
		// 更新退出按钮
		this.setCloseDomSamiss(["FatherBottomBox", "chooseTeamBoxSJZX"], () => {
			this.SaamisResource(true);
			this.SamissHomePage(false);
			this.setbackgroundSJZXSamiss("sasmisBackgroud0");
		});
		// 初始化存档数据
		this.initMatchSave();
		// 隐藏初始页
		this.SamissHomePage();
		// 切换背景
		this.setbackgroundSJZXSamiss("startBGI");
		// 添加希望 源石锭 等级 目标生命显示
		this.SaamisResource();
		// 设置初始希望、源石锭、等级、目标生命
		let match = SaamisSave.MatchSave,
			getBuff = this.getCultureInfo(false).totalInfo;
		wishSJZX.num = 6;
		wishSJZX.maxNum = 6;
		monenySJZX.num = 8 + get.numberInString(getBuff["yanjiu"], true);
		targetLife.hp = 4 + get.numberInString(getBuff["qihou"], true);
		targetLife.maxhp = targetLife.hp;
		SaamisSave.MatchSave = match;
		SaamisU.SaamisSave(SaamisSave);
		this.SaamisResourceUpdata();
		// 选择分队
		var FatherchooseBox = document.createElement("div");
		FatherchooseBox.classList.add("chooseTeamBoxSJZX");
		FatherchooseBox.addEventListener("wheel", function (event) {
			if (event.deltaY !== 0) {
				event.preventDefault();
				FatherchooseBox.scrollLeft += event.deltaY;
			}
		});
		document.body.appendChild(FatherchooseBox);
		// 创建分队列表
		this.SaamissTeamUpdate();
		let TeamList = lib.config.SaamisTeamSaves;
		for (var key in TeamList) {
			var teamInformation = TeamList[key].content;
			var img = `extension/驶舰之向/image/mode/rougelike/Saamis/orther/teamIMG/icon/${key}.png`;
			FatherchooseBox.appendChild(
				SaamisU.createSamGeneralChoose(
					{
						image: img,
						name: teamInformation[0],
						intro: teamInformation[1],
						canUse: TeamList[key].canUse,
						unlockIntro: teamInformation[2],
						id: key,
						classList: "emptyTeamBox_Saamis", //空的类,仅用于识别
					},
					{
						EventName: "gameStart",
						type: "click",
						body: '.chooseTeamBoxSJZX',
						listener(event) {
							SaamisU.handleSelectBoxClick(
								"emptyTeamBox_Saamis",
								(e) => {
									let idElement = e.target.closestWithId(
										"emptyTeamBox_Saamis"
									);
									if (SaamisU.isdebugger() === false) {
										alert(`开发中,敬请期待!`);
										return;
									}
									SaamisStore.currentTeam = idElement.id;
									saamisGame.SaamissGainTeamBuff(
										idElement.id
									);
									saamisGame.additionalSupport();
									return;
								},
								event
							);
						}
					}
				)
			);
		}
		var FatherBottomBox = document.createElement("div");
		FatherBottomBox.classList.add("FatherBottomBox");
		document.body.appendChild(FatherBottomBox);
	}
	/**
	 * 回到初始页面
	 * @param {boolean} [hidden=true] 是否为隐藏初始页面
	 */
	static SamissHomePage(hidden = true) {
		let domList = [
			"fatherSJZX",
			"level-ScientificSJZX",
			"snow-container",
			"main-menuSJZX",
			"sound-buttonSJZX",
		];
		for (var dom of domList) {
			if (hidden === true)
				document
					.getElementsByClassName(dom)[0]
					.classList.add("display-none");
			else
				document
					.getElementsByClassName(dom)[0]
					.classList.remove("display-none");
		}
		//更新游戏开始的状态
		let gameStartLogoSJZX = document.body.querySelector('.gameStartLogoSJZX'),
			delSave = document.body.querySelector('.delSave');
		if (this.isStart()) {
			gameStartLogoSJZX.classList.add('loadSaveLogoSJZX');
			delSave.classList.remove('display-none');
		} else {
			gameStartLogoSJZX.classList.remove('loadSaveLogoSJZX');
			delSave.classList.add('display-none');
		}
	}
	/**
	 * 设置背景图片
	 * @param { string } image 图片名
	 * @param { string } url 完整图片路径
	 */
	static setbackgroundSJZXSamiss(image, url) {
		image = `url(extension/驶舰之向/image/mode/rougelike/Saamis/orther/${image}.png)`;
		let bg = document.getElementsByClassName("backgroundSJZX")[0];
		bg.style.backgroundImage = typeof url === "string" ? url : image;
	}
	/**
	 * 获得对应分队的buff
	 * @param { string } teamId 队伍名
	 */
	static SaamissGainTeamBuff(teamId) {
		if (!lib.config.SaamisSave || !lib.config.SaamisTeamSaves) {
			alert("存档损坏!");
			return;
		}
		let SaamissSave = lib.config.SaamisSave,
			TeamSave = lib.config.SaamisTeamSaves;
		for (var name in TeamSave) {
			if (name !== teamId) continue;
			SaamissSave.MatchSave.team.chooseTeam = name;
			switch (name) {
				case "zhihui":
					targetLife.add(2, true);
					if (!SaamissSave.MatchSave.endBattle["recoverTL"])
						SaamissSave.MatchSave.endBattle["recoverTL"] = 0;
					SaamissSave.MatchSave.endBattle["recoverTL"] += 1;
					break;
				case "jiqun":
					SaamissSave.MatchSave.team.Carryable += 2;
					SaamissSave.MatchSave.team.Deployable += 2;
					break;
			}
		}
		this.updata.bottom();
		SaamisU.SaamisSave(SaamissSave);
	}
	/**
	 * 更新分队数据
	 */
	static async SaamissTeamUpdate() {
		if (!lib.config.SaamisSave) {
			throw new Error("存档损坏!");
		}
		let SaamisSave = lib.config.SaamisSave;
		// 判断是否有过存档,没有则新建
		if (!lib.config.SaamisTeamSaves) {
			var TeamList = SaamisSJZX_team;
			let result = {};
			for (var key in TeamList) {
				if (TeamList[key][3] == true) {
					result[key] = {
						content: TeamList[key],
						canUse: true,
					};
				} else {
					result[key] = {
						content: TeamList[key],
						canUse: false,
					};
				}
			}
			game.saveConfig("SaamisTeamSaves", result);
			lib.config.SaamisTeamSaves = result;
		}
		// 判断各个分队是否满足解锁条件
		var TeamList = lib.config.SaamisTeamSaves,
			cultureInfo = this.getCultureInfo(false).totalInfo;
		for (var key in TeamList) {
			var content = TeamList[key]["content"];
			if (TeamList[key].canUse === true) continue;
			switch (content[0]) {
				case "集群分队":
					if (SaamisSave.maxpass >= 3) TeamList[key].canUse = true;
					break;
				case "后勤分队":
					if (SaamisSave.unlockTeam.houqing >= 200)
						TeamList[key].canUse = true;
					break;
				case "矛头分队":
					if (SaamisSave.unlockTeam.maotou === true)
						TeamList[key].canUse = true;
					break;
				case "高规格分队":
					if (SaamisSave.unlockTeam.gaoguige === true)
						TeamList[key].canUse = true;
					break;
				case "特训分队":
					if (SaamisSave.unlockTeam.texun === true)
						TeamList[key].canUse = true;
					break;
				case "永恒狩猎分队":
					if ("yuxian" in cultureInfo) TeamList[key].canUse = true;
					break;
				case "生活至上分队":
					if ("jiaowang" in cultureInfo) TeamList[key].canUse = true;
					break;
				case "科学主义分队":
					if ("gongju" in cultureInfo) TeamList[key].canUse = true;
					break;
			}
		}
		game.saveConfig("SaamisTeamSaves", TeamList);
		lib.config.SaamisTeamSaves = TeamList;
		return TeamList;
	}
	/**
	 * 是否显示萨米的资源
	 * @param {boolean} [hidden=false] 是否显示
	 */
	static SaamisResource(hidden = false) {
		if (!lib.config.SaamisSave) {
			throw new Error("存档损坏!");
		}
		if (!document.getElementsByClassName("wishSJZXBox").length) {
			// 创建希望的全局实例
			window.wishSJZX = document.createElement("div", {
				is: "wish-sjzx",
			});
			document.body.appendChild(wishSJZX);
			wishSJZX.maxNum = 0;
			wishSJZX.num = 0;
			// 创建源石锭的全局实例
			window.monenySJZX = document.createElement("div", {
				is: "moneny-cannot",
			});
			document.body.appendChild(monenySJZX);
			monenySJZX.num = 0;
			// 创建目标生命的全局实例
			window.targetLife = document.createElement("div", {
				is: "target-life",
			});
			document.body.appendChild(targetLife);
			// 创建指挥等级的全局实例
			window.commandLevel = document.createElement("div", {
				is: "command-level",
			});
			document.body.appendChild(commandLevel);
			var antiInterference = mrfzfuc.createDomSJZX(
				"anti-interference",
				false
			);
			var textBox = mrfzfuc.createDomSJZX("textBox", false);
			textBox.innerHTML = `小镇炉火`;
			antiInterference.appendChild(textBox);
			document.body.appendChild(antiInterference);
		}
		if (typeof hidden !== "boolean") return;
		let list = [
			".wishSJZXBox",
			".CommandLevel",
			".monenySJZXBox",
			".targetLifes",
			".anti-interference",
		];
		for (var i of list) {
			if (hidden === true)
				document.querySelector(i).classList.add("display-none");
			else document.querySelector(i).classList.remove("display-none");
		}
	}
	/**
	 * 更新萨米资源的显示(希望、源石锭、指挥等级、目标生命)
	 */
	static SaamisResourceUpdata() {
		if (!lib.config.SaamisSave) {
			throw new Error("存档损坏!");
		}
		wishSJZX.updataValue();
		commandLevel.updataValue();
		targetLife.updataValue();
		monenySJZX.updataValue();
	}
	/**
	 * 改变某种资源
	 * @param {number} [num=1]
	 * @param { 'wish' | 'com' | 'life' | 'moneny' | 'deploy' | 'carry' | Array } type wish com life moneny deploy
	 * @param {boolean} [addMax=false] 仅目标生命有效
	 */
	static changeResource(num = 1, type, addMax = false) {
		if (Array.isArray(type)) {
			for (var i of type) {
				this.changeResource(num, i, addMax);
			}
			return;
		}
		if (typeof type !== "string")
			throw new TypeError(`参数类型错误,type:${type},${typeof type}`);
		let save = SaamisU.getSave();
		switch (type) {
			case "wish":
				wishSJZX.num += num;
				break;
			case "com":
				commandLevel.experience += num;
				break;
			case "life":
				if (num > 0) targetLife.add(num, addMax);
				else targetLife.hp -= num;
				break;
			case "moneny":
				moneny.num += num;
				break;
			case "deploy":
				save.MatchSave.team.Deployable += 1;
				SaamisU.SaamisSave(save);
				break;
			case "carry":
				save.MatchSave.team.Carryable += 1;
				SaamisU.SaamisSave(save);
				break;
			default:
				console.warn(`${type} 参数无意义!`);
		}
		this.SaamisResourceUpdata();
	}
	/**
	 * 显示选择的队伍
	 * @param {string} team
	 */
	static showChooseTeam(team) {
		const imageUrl = `url(extension/驶舰之向/image/mode/rougelike/Saamis/orther/teamIMG/icon/${team}.png)`;
		/**
		 * @type {HTMLElement}
		 */
		const bottom = document.body.querySelector(".FatherBottomBox");
		if (bottom.querySelector(".teamIconShow")) {
			bottom.removeChild(bottom.querySelector(".teamIconShow"));
		}
		let teamIconShow = mrfzfuc.createDomSJZX("teamIconShow", false);
		let icon = mrfzfuc.createDomSJZX("icon", false);
		icon.style.backgroundImage = imageUrl;
		let difShow = mrfzfuc.createDomSJZX("difShow", false);
		let num = mrfzfuc.createDomSJZX("num", false);
		num.innerHTML = lib.config.SaamisSave["difficulty"];
		teamIconShow.appendChild(icon);
		teamIconShow.appendChild(difShow);
		difShow.appendChild(num);
		bottom.appendChild(teamIconShow);
		teamIconShow.addEventListener("click", function () {
			let teamID = window.SaamisStore.currentTeam;
			if (document.body.querySelector(".SamTeamInfo")) {
				return;
			}
			const infoDiv = saamisGame.showChooseTeamInfo(teamID);
			document.body.appendChild(infoDiv);
			let handle = function (event) {
				const infoElement = document.body.querySelector(".SamTeamInfo");
				const target = event.target.closest(".SamTeamInfo");
				if (!target && infoElement) {
					document.body.removeChild(infoElement);
					document.body.removeEventListener("click", handle);
				}
			};
			setTimeout(() => {
				document.body.addEventListener("click", handle);
			}, 1);
		});
	}
	/**
	 * 创建一个div,用于显示选择的队伍的信息
	 * @param {string} teamID
	 *
	 * @returns { HTMLElement }
	 */
	static showChooseTeamInfo(teamID) {
		const teamSaves = lib.config.SaamisTeamSaves,
			teamName = teamSaves[teamID]["content"][0],
			teamInfo = teamSaves[teamID]["content"][1],
			dif = lib.config.SaamisSave["difficulty"];
		let SamTeamInfo = mrfzfuc.createDomSJZX("SamTeamInfo", false),
			teamNameDiv = mrfzfuc.createDomSJZX("teamName", false),
			name = mrfzfuc.createDomSJZX("name", false),
			content = mrfzfuc.createDomSJZX("content", false),
			info = mrfzfuc.createDomSJZX("info", false),
			battleNatrue = mrfzfuc.createDomSJZX("battleNatrue", false),
			difNum = mrfzfuc.createDomSJZX("difNum", false),
			difDiv = mrfzfuc.createDomSJZX("dif", false, "span");
		name.innerHTML = teamName;
		info.innerHTML = teamInfo;
		difDiv.innerHTML = dif;
		content.appendChild(info);
		difNum.appendChild(difDiv);
		teamNameDiv.appendChild(name);
		SamTeamInfo.appendChild(teamNameDiv);
		SamTeamInfo.appendChild(content);
		SamTeamInfo.appendChild(battleNatrue);
		SamTeamInfo.appendChild(difNum);
		return SamTeamInfo;
	}
	/**
	 * 创建藏品列表
	 */
	static showCollections() {
		/**
		 * @type {HTMLElement}
		 */
		const bottom = document.body.querySelector(".FatherBottomBox");
		let colIcon = document.body.querySelector(".collectionsIcon"),
			colList = document.body.querySelector(".collectionsList");
		if (colIcon) {
			bottom.removeChild(colIcon);
		}
		if (colList) {
			bottom.removeChild(colList);
		}
		let collectionsIcon = mrfzfuc.createDomSJZX("collectionsIcon", false);
		let collectionsList = mrfzfuc.createDomSJZX("collectionsList", false);
		const collections = SaamisU.getSave().MatchSave.collection.owner;
		for (let name of collections) {
			/**
			 * @type {HTMLElement}
			 */
			let colDiv = mrfzfuc.createDomSJZX("collect", false);
			let info = saamisGame.collect.getInfoCollection(name);
			colDiv.style.backgroundImage = info.image;
			collectionsList.appendChild(colDiv);
		}
		bottom.appendChild(collectionsIcon);
		bottom.appendChild(collectionsList);
		let handle = function (e) {
			const collectionsIcon =
				document.body.querySelector(".collectionsIcon");
			if (!collectionsIcon)
				return console.warn(`页面上不存在类名为collectionsIcon的对象`);
			else if (
				Array.from(collectionsIcon.classList).includes("closeIcon")
			) {
				const SamBGtransparent =
					document.body.querySelector(".SamBGtransparent"),
					collectionsList =
						document.body.querySelector(".collectionsList");
				SamBGtransparent && document.body.removeChild(SamBGtransparent);
				collectionsIcon.classList.remove("closeIcon");
				collectionsList.classList.remove("display-none");
			} else {
				const collections =
					SaamisU.getSave().MatchSave.collection.owner;
				saamisGame.showCollectionsListInfo(collections);
			}
		};
		collectionsIcon.addEventListener("click", handle);
	}
	/**
	 * 显示详细的藏品列表
	 * @param { Array } colList
	 */
	static showCollectionsListInfo(colList) {
		const collections = document.body.querySelector(".collectionsIcon"),
			collectionsList = document.body.querySelector(".collectionsList");
		if (collectionsList) collectionsList.classList.add("display-none");
		if (collections) {
			collections.classList.add("closeIcon");
			/**
			 * @type {HTMLElement}
			 */
			let SamBGtransparent = mrfzfuc.createDomSJZX(
				"SamBGtransparent",
				false
			);
			let createColContainer = function (name) {
				let collectContainer = mrfzfuc.createDomSJZX(
					"collectContainer",
					false
				);
				let collect = mrfzfuc.createDomSJZX(
					["collect", "colStyle"],
					false
				);
				let collectName = mrfzfuc.createDomSJZX(
					["collectName", "colStyle2"],
					false
				);
				let collectInfo = mrfzfuc.createDomSJZX(
					["collectInfo", "colStyle2"],
					false
				);
				let info = saamisGame.collect.getInfoCollection(name);
				collect.style.backgroundImage = info.image;
				collectName.innerHTML = info.name;
				collectInfo.innerHTML = info.prompt;
				collectContainer.appendChild(collect);
				collectContainer.appendChild(collectName);
				collectContainer.appendChild(collectInfo);
				return collectContainer;
			};
			for (let name of colList) {
				SamBGtransparent.appendChild(createColContainer(name));
			}
			SamBGtransparent.style.display = "flex";
			SamBGtransparent.style.overflowY = "auto";
			document.body.appendChild(SamBGtransparent);
		}
	}
	/**
	 * 创建密文列表
	 */
	static showPrayer() {
		/**
		 * @type {HTMLElement}
		 */
		const bottom = document.body.querySelector(".FatherBottomBox");
		let prIcon = document.body.querySelector(".prayersIcon");
		if (prIcon) {
			bottom.removeChild(colIcon);
		}
		let prayersIcon = mrfzfuc.createDomSJZX("prayersIcon", false);
		bottom.appendChild(prayersIcon);
		prayersIcon.addEventListener("click", (e) => {
			// TODO 收藏品展示页面
			//这位更是一坨大的
			/**
			 * @type {Array}
			 */
		});
	}
	/**
	 * 创建干员列表
	 */
	static showOperators() {
		/**
		 * @type {HTMLElement}
		 */
		const bottom = document.body.querySelector(".FatherBottomBox");
		let opsIcon = document.body.querySelector(".operatorsIcon");
		if (opsIcon) {
			bottom.removeChild(opsIcon);
		}
		let operatorsIcon = mrfzfuc.createDomSJZX("operatorsIcon", false);
		let operatorsNums = mrfzfuc.createDomSJZX("operatorsNums", false);
		operatorsNums.innerHTML = Object.keys(
			SaamisU.getSave().MatchSave.team.Operators
		).length;
		bottom.appendChild(operatorsNums);
		bottom.appendChild(operatorsIcon);
		operatorsIcon.addEventListener("click", (e) => {
			// TODO 干员展示页面
			//这位更是一坨大的
			/**
			 * @type {Array}
			 */
		});
	}
	/**
	 * 创建编队列表
	 */
	static showTeams() {
		/**
		 * @type {HTMLElement}
		 */
		const bottom = document.body.querySelector(".FatherBottomBox");
		let tsIcon = document.body.querySelector(".teamsIcon");
		if (tsIcon) {
			bottom.removeChild(tsIcon);
		}
		let teamsIcon = mrfzfuc.createDomSJZX("teamsIcon", false);
		bottom.appendChild(teamsIcon);
		teamsIcon.addEventListener("click", (e) => {
			// TODO 编队展示页面
			//这位更是一坨大的
			/**
			 * @type {Array}
			 */
		});
	}
	/**
	 * 获得额外支援
	 */
	static additionalSupport() {
		let save = SaamisU.getSave();
		let layer = save.MatchSave.layers;
		layer.num = [-1, 2];
		let chooseTeamBoxSJZX = document.body.querySelector(".chooseTeamBoxSJZX");
		if (chooseTeamBoxSJZX) document.body.removeChild(chooseTeamBoxSJZX);
		if (save.lastpass >= 3 || lib.config.alwaysAddtionalSupprot === true) {
			//更新退出按钮
			this.setCloseDomSamiss(
				["FatherBottomBox", "addtionalSupprot"],
				() => {
					this.SaamisResource(true);
					this.SamissHomePage(false);
					this.setbackgroundSJZXSamiss("sasmisBackgroud0");
				}
			);
			let choiceList = layer.maps["choice"]
				? layer.maps["choice"]
				: SaamisU.getRandomProperty(
					SaamisStore.additionalSupportList,
					3
				);
			layer.maps["choice"] = choiceList;
			SaamisU.SaamisSave(layer, "MS:layers");
			let addtionalSupprot = mrfzfuc.createDomSJZX(
				"addtionalSupprot",
				false
			);
			document.body.appendChild(addtionalSupprot);
			for (let name of choiceList) {
				let info = window.SaamisStore.additionalSupportList[name];
				let cardDiv = SaamisU.createSamGeneralChoose(
					{
						image: info.image,
						name: info.name,
						intro: info.intro,
						canUse: true,
						id: name,
						classList: "emptyAdditionalSupport_Saamis",
					},
					{
						type: "click",
						body: '.addtionalSupprot',
						listener(event) {
							SaamisU.handleSelectBoxClick(
								"emptyAdditionalSupport_Saamis",
								(e) => {
									/**
									 * @type {HTMLElement}
									 */
									const target = e.target.closest(
										".emptyAdditionalSupport_Saamis"
									),
										addtionalInfo =
											window.SaamisStore
												.additionalSupportList[
											target.id
											];
									if (!target) return;
									addtionalInfo.effect();
									saamisGame.updata.bottom();
									saamisGame.StartCharacter();
								},
								event
							);
						},
						EventName: "chooseAddtionalSupport"
					}
				);
				addtionalSupprot.appendChild(cardDiv);
			}
		} else this.StartCharacter();
	}
	/**
	 * 小镇炉火界面招募干员
	 */
	static StartCharacter() {
		SaamisU.save();
		let save = SaamisU.getSave();
		let layer = save.MatchSave.layers;
		layer.num = [-1, 3];
		delete layer.maps["choice"];
		this.setCloseDomSamiss(
			["FatherBottomBox", "initRecruit", "GoIce"],
			() => {
				saamisGame.SaamisResource(true);
				saamisGame.SamissHomePage(false);
				saamisGame.setbackgroundSJZXSamiss("sasmisBackgroud0");
			}
		);
		let addtionalSupprot = document.body.querySelector('.addtionalSupprot');
		if (addtionalSupprot) document.body.removeChild(addtionalSupprot);
		const initRecruit = mrfzfuc.createDomSJZX('initRecruit', false);
		for (let i = 0; i < 2; i++) {
			let recruitDiv = SaamisU.createReruitChoose();
			initRecruit.appendChild(recruitDiv);
		}
		const GoIce = mrfzfuc.createDomSJZX('GoIce', false);
		const icon = mrfzfuc.createDomSJZX('icon', false);
		icon.addEventListener('click', e => {
			let save = SaamisU.getSave();
			if (Object.keys(save.MatchSave.team.Operators).length < 2) {
				let y = confirm(`您确定完成了招募？`);
				if (y === false) return;
			}
		})
		GoIce.appendChild(icon);
		document.body.appendChild(GoIce);
		document.body.appendChild(initRecruit);
	}
	/**
	 * 招募干员
	 */
	static recruitCharacter() {
		const close = get.copy(_status.saamisSJZX.current);
		_status.saamisSJZX.current.close = close;
		saamisGame.setCloseDomSamiss(
			'recruit',
			function () {
				let close = _status.saamisSJZX.current.close;
				saamisGame.setCloseDomSamiss(
					close.closeDom,
					() => {
						close.callback();
						const select = ticket.getSelectedTicket();
						if (!select) return;
						const confirm = select.querySelector('.confirmSJZX');
						confirm.classList.add('display-none');
						select.classList.remove('selectedSJZX');
					}
				)
				return false;
			}
		);
		const recruit = mrfzfuc.createDomSJZX('recruit', false);
		const title = mrfzfuc.createDomSJZX('title', false);
		const name = mrfzfuc.createDomSJZX('name', false);
		name.innerHTML = '招募干员';
		title.appendChild(name);
		const wish = mrfzfuc.createDomSJZX('wish', false);
		const icon = mrfzfuc.createDomSJZX('icon', false);
		const wish_num = mrfzfuc.createDomSJZX('num', false, 'span');
		wish_num.innerHTML = wishSJZX.num;
		wish.appendChild(icon);
		wish.appendChild(wish_num);
		title.appendChild(wish);
		recruit.appendChild(title);
		const chooseBox = mrfzfuc.createDomSJZX('chooseBox', false);
		const select = ticket.getSelectedTicket();
		const recruitChar = select.getrecruit();
		const teamDate = SaamisU.getSave().MatchSave.team;
		for (let name of recruitChar) {
			const charDiv = SaamisU.createCharRecruitCard(name, teamDate.recruit.promotion, teamDate.recruit.temporary, teamDate.recruit.mutex);
			if (select.recruitChar[name].refresh >= teamDate.recruit.refreshMax) charDiv.querySelector('.refresh').classList.add('display-none');
			chooseBox.appendChild(charDiv);
		}
		recruit.appendChild(chooseBox);
		document.body.appendChild(recruit);
	}
}

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
import { saamisGame } from "./saamisGame.js";
import { ticket } from "./ticket.js";
export class SaamisU {
	/**
	 * 是否是汉字
	 * @param { string } str
	 *
	 * @returns {boolean}
	 */
	static isChinese(str) {
		const chineseRegex = /^[\u4e00-\u9fa5]+$/;
		return chineseRegex.test(str);
	}
	/**
	 * 是否处于开发者模式
	 * @returns {boolean}
	 */
	static isdebugger() {
		return lib.config.debugSaamisSJZX;
	}
	/**
	 * 存档备份
	 */
	static backupSave() {
		let save = this.getSave();
		game.saveConfig("backup_SaamisSave", save);
		game.saveConfig("backup_SaamisTeamSave", lib.config.SaamisTeamSaves);
	}
	/**
	 * 对图片路径进行格式化
	 * @param {string} input
	 * @returns {string}
	 */
	static formatImgPath(input) {
		return input.replace(/sam:(.*?)/g, (match, text) => {
			return `extension/驶舰之向/image/mode/rougelike/Saamis/${text}`;
		});
	}
	/**
	 * 格式化字符串,将其替换为正确的颜色
	 * @param {string} input
	 *
	 * @returns {string}
	 */
	static formatFontColor(input) {
		if (typeof input !== "string")
			throw new TypeError(`The parameter must be a string`);
		const colorMap = {
			b: "blue",
			r: "red",
			y: "yellow",
			g: "green",
		};
		return (
			"<div>" +
			input.replace(/<#(.*?):(.*?)>/g, (match, color, text) => {
				if (color in colorMap) {
					color = colorMap[color];
				}
				return `<font color="${color}">${text}</font>`;
			}) +
			"</div>"
		);
	}
	/**
	 * 将一个对象proxy化,并且可以进行深度检索
	 * @param {object} target
	 * @param {number} [level=2]
	 *
	 * @returns {object}
	 */
	static createDeepFindProxy(target, level = 2) {
		return new Proxy(target, {
			get(target, prop, receiver) {
				if (prop in target) {
					return Reflect.get(target, prop, receiver);
				}
				if (level > 1) {
					for (const key in target) {
						if (
							typeof target[key] === "object" &&
							target[key] !== null
						) {
							const result = Reflect.get(
								SaamisU.createDeepFindProxy(
									target[key],
									level - 1
								),
								prop,
								receiver
							);
							if (result !== undefined) {
								return result;
							}
						}
					}
				}
				return undefined;
			},
		});
	}
	/**
	 * 生成任意长度的随机字符串
	 * @param {number} [length=10] 字符串长度
	 * @returns { string }
	 */
	static generateRandomString(length = 10) {
		const characters =
			"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		let result = "";
		const charactersLength = characters.length;
		for (let i = 0; i < length; i++) {
			result += characters.charAt(
				Math.floor(Math.random() * charactersLength)
			);
		}
		return result;
	}
	/**
	 * 添加一个无法重复添加的事件监听器
	 * @param { DocumentEventMap } type 添加的事件监听器的类型
	 * @param { Function } func 需要执行的函数
	 * @param { object } options
	 * @param { string } name 该事件监听器的名字
	 * @param { undefined | Document } [element=undefined] 添加到哪个对象上,默认document.body
	 */
	static setEventListener(name, type, func, options, element = undefined) {
		if (name in window.SaamisStore.isEventListenerAdded) {
			if (this.isdebugger())
				console.warn(`名为${name}的事件监听器已经被添加`);
			return;
		} else
			window.SaamisStore.isEventListenerAdded[name] = {
				type: type,
				listener: func,
			};
		if (!get.is.div(element)) {
			document.body.addEventListener(type, func, options);
		} else {
			element.addEventListener(type, func, options);
		}
	}
	/**
	 * 移除SaamisStore.isEventListenerAdded中被记录的事件监听器
	 * @param {string} name
	 *
	 * @returns {boolean}
	 */
	static removeSetEventListener(name) {
		if (name in window.SaamisStore.isEventListenerAdded) {
			delete window.SaamisStore.isEventListenerAdded[name];
			return true;
		}
		return false;
	}
	/**
	 * 返回萨米的存档
	 */
	static getSave() {
		if (!lib.config.SaamisSave) {
			throw new Error(`存档损坏`);
		}
		return lib.config.SaamisSave;
	}
	/**
	 * 初始化文化比较
	 * @returns { Object }
	 */
	static initCutureBuff() {
		var cultureBuff = SaamisSJZX_cultureBuff.phase;
		function processArray(item) {
			if (Array.isArray(item)) {
				item[1] = item[1] || 1;
				item[2] = item[2] || false;
			}
		}
		Object.keys(cultureBuff).forEach((phase) => {
			if (cultureBuff.hasOwn(phase)) {
				var content = cultureBuff[phase].content;
				Object.keys(content).forEach((key) => {
					if (content.hasOwn(key)) {
						var obj = content[key];
						Object.values(obj).forEach(processArray);
					}
				});
			}
		});
		return cultureBuff;
	}
	/**
	 * 获取当前难度
	 * @returns { Number }
	 */
	static getDifficulty() {
		let save = this.getSave();
		return save.difficulty;
	}
	/**
	 * 更新存档
	 * @param {object} NewSaamisSave
	 * @param {string} loc
	 */
	static SaamisSave(NewSaamisSave, loc) {
		const save = lib.config.SaamisSave;
		const updateSave = (save, loc, NewSaamisSave) => {
			for (let items in save) {
				if (/^MS:/.test(loc) && items !== "MatchSave") continue;
				if (loc === items && !/^MS:/.test(loc)) {
					save[items] = NewSaamisSave;
					return true;
				}
				for (let item in save[items]) {
					if (loc === item) {
						save[items][item] = NewSaamisSave;
						return true;
					}
				}
			}
			return false;
		};
		if (typeof loc === "string") {
			if (updateSave(save, loc, NewSaamisSave)) {
				game.saveConfig("SaamisSave", save);
			}
		} else {
			game.saveConfig("SaamisSave", NewSaamisSave);
		}
	}
	/**
	 * 保存存档
	 */
	static save() {
		SaamisU.SaamisSave(SaamisU.getSave());
	}
	/**
	 * 获得局内资源的数据
	 * @param { 'life' | 'wish' | 'moneny' | 'command' } type
	 *
	 * @returns {object|string}
	 */
	static getResource(type) {
		let resource = SaamisU.getSave().MatchSave.resource;
		type = window.SaamisStore.resourceMaps[type];
		return type ? resource[type] : resource;
	}
	/**
	 * 存储局内资源的数据
	 * @param { 'life' | 'wish' | 'moneny' | 'command' } type
	 * @param { 'hp' | 'maxhp' | 'num' | 'maxNum' | 'level' | 'experience' } key
	 */
	static saveResource(type, key) {
		if (typeof type !== "string" || typeof key !== "string")
			throw new TypeError(`The parameter must be a string`);
		let resource = SaamisU.getSave().MatchSave.resource;
		let target = window[window.SaamisStore.resourceMaps[type]];
		let name = window.SaamisStore.resourceMaps[type];
		if (get.is.object(resource[name])) resource[name][key] = target[key];
		else resource[name] = target[key];
		SaamisU.SaamisSave(resource, "MS:resource");
	}
	/**
	 * 获取并更新当前的坍缩等级
	 * @returns { Number }
	 */
	static getCollapseLevel() {
		let save = this.getSave();
		let difficulty = this.getDifficulty();
		let data = SaamissSJZX_Collapse;
		for (let range in data) {
			let { dif, accrued } = data[range];
			let isMatch =
				(typeof dif === "number" && difficulty === dif) ||
				(Array.isArray(dif) &&
					difficulty >= dif[0] &&
					difficulty <= dif[1]);
			if (isMatch) {
				let CollapseNum = save.MatchSave.Collapse.num;
				let level = accrued.reduce(
					(level, needNum) =>
						CollapseNum >= needNum ? level + 1 : level,
					-1
				);
				save.MatchSave.Collapse.level = level >= 0 ? level : 0; // 确保最低等级为0
				this.SaamisSave(save);
				return save.MatchSave.Collapse.level;
			}
		}
		console.warn(`无法匹配难度: ${difficulty}`);
		throw new Error(`无法匹配难度`);
	}
	/**
	 * 重置萨米肉鸽的存档
	 */
	static initSaamissSave() {
		let save = new SaamisSave();
		let cultureBuff = this.initCutureBuff();
		save.buff.enable = cultureBuff;
		this.SaamisSave(save);
		return lib.config.SaamisSave;
	}
	/**
	 * 随机获取某一个对象中任意个不重复的键名
	 * @param { object } obj
	 * @param {number} [num=1]
	 *
	 * @returns { Array } 由key组成的列表
	 */
	static getRandomProperty(obj, num = 1) {
		if (!get.is.object(obj) || typeof num !== "number")
			throw new TypeError(`参数类型错误!`);
		const keys = Object.keys(obj);
		const selectedKeys = new Set();
		while (selectedKeys.size < num) {
			const randomIndex = Math.floor(Math.random() * keys.length);
			const randomKey = keys[randomIndex];
			if (!selectedKeys.has(randomKey)) {
				selectedKeys.add(randomKey);
			}
		}
		return Array.from(selectedKeys);
	}
	/**
	 * 创建一个萨米通用的选择卡
	 * @param {object} options - 设置
	 * @param {string} options.image - 图片的url
	 * @param {string} options.name - 名字
	 * @param {string} options.intro - 介绍
	 * @param {boolean} options.canUse - 是否可选
	 * @param {string} options.unlockIntro - 不可用时显示的内容
	 * @param {string} options.id - id
	 * @param {string} [options.classList=undefined] - 额外添加的类名
	 *
	 * 若传入eventListener.EventName参数则采用 SaamisU.setEventListener 的方法添加事件监听器
	 * @param {Object} [eventListener=undefined] - 添加事件监听器到该元素上
	 * @param {HTMLElementEventMap} eventListener.type - 添加的事件监听器的类型
	 * @param { Function } eventListener.listener  - 需要执行的函数
	 * @param { object } eventListener.options - 设置
	 * @param { string } eventListener.EventName - 为该事件监听器注册一个名字
	 * @param {HTMLElement | string} [eventListener.body=undefined] - 将事件监听器改为添加到其他元素上
	 *
	 * @returns {HTMLElement}
	 */
	static createSamGeneralChoose(
		{ image, name, intro, canUse, unlockIntro, id, classList },
		eventListener = {}
	) {
		if (!image) {
			console.warn('警告: 参数 "image" 缺失');
		}
		if (!name) {
			console.warn('警告: 参数 "name" 缺失');
		}
		const createDom = (className, tag = "div") =>
			mrfzfuc.createDomSJZX(className, false, tag);
		const teamBox = createDom("SamGeneralChoose");
		if (classList) teamBox.classList.add(classList);
		teamBox.id = id;
		const icon = createDom("icon");
		const iconImage = createDom("image");
		iconImage.style.backgroundImage = `url(${image || ""})`;
		icon.appendChild(iconImage);
		teamBox.appendChild(icon);
		const teamName = createDom("teamName", "span");
		teamName.innerHTML = name || "未提供标题";
		teamBox.appendChild(teamName);
		const teamIntro = createDom("teamIntro", "span");
		if (intro !== false) teamIntro.innerHTML = intro || "未提供介绍";
		teamBox.appendChild(teamIntro);
		const confirmSJZX = createDom("confirmSJZX");
		confirmSJZX.classList.add("display-none");
		confirmSJZX.style.width = "100%";
		confirmSJZX.style.height = "20%";
		teamBox.appendChild(confirmSJZX);
		if (!canUse) {
			const locked = createDom("lockedBoxSJZX");
			const lockedImage = createDom("lockedBoxImage");
			const lockedIntroBox = createDom("introBox");
			lockedIntroBox.innerHTML = unlockIntro || "无法选择";
			locked.appendChild(lockedIntroBox);
			locked.appendChild(lockedImage);
			teamBox.appendChild(locked);
		}
		const { type, listener, options, EventName, body } = eventListener;
		/**
		 * @type {HTMLElement}
		 */
		let element = body;
		if (typeof element === "string") {
			element = document.body.querySelector(body);
		}
		element = element ? element : teamBox;
		if (type && listener && EventName) {
			SaamisU.setEventListener(
				EventName,
				type,
				listener,
				options,
				element
			);
		} else if (type && listener) {
			element.addEventListener(type, listener, options);
		}
		return teamBox;
	}
	/**
	 * 创建一个招募券
	 * @returns {ticket}
	 */
	static createReruitChoose() {
		return new ticket();
	}
	/**
	 * 获取本地时间
	 * @param {boolean} [format=true] 是否格式化
	 *
	 * @returns {string}
	 */
	static getToday(format = true) {
		const timeElapsed = Date.now();
		const today = new Date(timeElapsed);
		return format === true ? today.toLocaleDateString() : today;
	}
	/**
	 * 选择框点击处理函数
	 * @param {Event} event - 点击事件对象
	 * @param {WindowEventMap} type - 点击事件
	 * @param {string} containerClass - 选择框容器类名
	 * @param {Function} onSecondarySelect - 回调函数
	 */
	static handleSelectBoxClick(containerClass, onSecondarySelect, event) {
		if (containerClass.includes(".")) {
			containerClass = containerClass.replace(".", "");
			console.warn("请不要传入CSS类选择器!");
		}
		containerClass = containerClass.replace(".", "");
		const teamBox = event.target.closest(`.${containerClass}`);
		const selectedBox = document.querySelector(".selectedSJZX");
		if (!teamBox) {
			if (selectedBox) {
				selectedBox.classList.remove("selectedSJZX");
				const confirmElement =
					selectedBox.querySelector(".confirmSJZX");
				if (confirmElement) {
					confirmElement.classList.add("display-none");
				}
			}
			return;
		}
		if (
			event.target
				.closest(`.${containerClass}`)
				.classList.contains("selectedSJZX")
		) {
			if (onSecondarySelect) {
				onSecondarySelect(event);
			}
			return;
		}
		const lockedElement = teamBox.querySelector(".lockedBoxSJZX");
		if (!selectedBox || !teamBox.includes(selectedBox)) {
			if (selectedBox) {
				selectedBox.classList.remove("selectedSJZX");
				const confirmElement =
					selectedBox.querySelector(".confirmSJZX");
				if (confirmElement) {
					confirmElement.classList.add("display-none");
				}
			}
			if (!lockedElement) {
				teamBox.classList.add("selectedSJZX");
				const confirmElement = teamBox.querySelector(".confirmSJZX");
				if (confirmElement) {
					confirmElement.classList.remove("display-none");
				}
			} else {
				if (selectedBox) {
					selectedBox.classList.remove("selectedSJZX");
					const confirmElement =
						selectedBox.querySelector(".confirmSJZX");
					if (confirmElement) {
						confirmElement.classList.add("display-none");
					}
				}
			}
		}
	}
	/**
	 * 创建一个干员卡片
	 * @param { string } name 干员id
	 * @param { Number } promotion 直升概率
	 * @param { Number } temporary 临时招募概率
	 * @param {boolean} [mutex=true] 直升和临时招募是否互斥
	 *
	 * @returns {HTMLElement}
	 */
	static createCharRecruitCard(
		name,
		promotion = 0,
		temporary = 0,
		mutex = true
	) {
		if (!lib.character[name]) return;
		let char = {
			name: get.translation(name),
			intro: get.characterIntro(name),
			title: lib.characterTitle[name],
			img: `url(extension/驶舰之向/image/character/${name}.jpg)`,
			hp: [
				lib.character[name].hp,
				lib.character[name].maxHp,
				lib.character[name].hujia,
			],
			skills: [],
		};
		function addSkillInfo(skill, color) {
			if (!SaamisU.isChinese(get.translation(skill))) return;
			char.skills.push([
				get.translation(skill),
				get.skillInfoTranslation(skill),
				color,
			]);
		}
		for (let skill of lib.character[name].skills) {
			addSkillInfo(skill);
			let skillInfo = get.info(skill);
			if (skillInfo.derivation) {
				for (let derivedSkill of skillInfo.derivation) {
					addSkillInfo(derivedSkill, "green");
				}
			}
		}
		let addtionEff = [];
		let select = ticket.getSelectedTicket();
		if (select.recruitChar[name].random[0] < promotion) addtionEff.push("promotion");
		if (select.recruitChar[name].random[1] < temporary) addtionEff.push("temporary");
		if (mutex && addtionEff.length > 1)
			addtionEff.remove(addtionEff.randomGet());
		const charRecruit = mrfzfuc.createDomSJZX("charRecruit", false);
		const charIMG = mrfzfuc.createDomSJZX("charIMG", false);
		charIMG.style.backgroundImage = char.img;
		if (addtionEff.includes("promotion")) {
			var buff = mrfzfuc.createDomSJZX("additionEff", false);
			buff.innerHTML = "随机直升";
			charRecruit.classList.add("empty_promotion");
			charIMG.appendChild(buff);
		}
		if (addtionEff.includes("temporary")) {
			var buff = mrfzfuc.createDomSJZX("additionEff", false);
			buff.innerHTML = "临时招募";
			charRecruit.classList.add("empty_temporary");
			charIMG.appendChild(buff);
		}
		charRecruit.appendChild(charIMG);
		const refresh = mrfzfuc.createDomSJZX("refresh", false);
		const iconCR = mrfzfuc.createDomSJZX("iconCR", false);
		const introRE = mrfzfuc.createDomSJZX("introRE", false);
		const textRE = mrfzfuc.createDomSJZX("textRE", false);
		textRE.innerHTML = "重新招募";
		introRE.appendChild(textRE);
		refresh.appendChild(iconCR);
		refresh.appendChild(introRE);
		refresh.addEventListener('click', e => {
			/**
			 * @type {HTMLElement}
			 */
			const target = e.target.closest('.charRecruit');
			const data = SaamisU.getSave().MatchSave.team;
			const select = ticket.getSelectedTicket();
			if (wishSJZX.num > 0 && data.recruit.refreshMax > select.recruitChar[target.id].refresh) {
				wishSJZX.num--;
				const charSJZX = lib.config.mrfz_allCharacter.filter(i => !Object.keys(data.Operators).includes(i) && i !== name && !select.getrecruit().includes(i));
				const ranName = charSJZX.randomGet();
				select.recruitChar[ranName] = {
					refresh: select.recruitChar[target.id].refresh + 1,
					random: select.recruitChar[target.id].random
				};
				const newDiv = SaamisU.createCharRecruitCard(ranName, promotion, temporary, mutex);
				if (select.recruitChar[ranName].refresh >= data.recruit.refreshMax) newDiv.querySelector('.refresh').classList.add('display-none');
				document.body.querySelector('.chooseBox').replaceChild(newDiv, target.closest('.charRecruit'));
				let num = parseInt(document.body.querySelector('.wish').querySelector('.num').innerHTML);
				document.body.querySelector('.wish').querySelector('.num').innerHTML = num - 1;
				delete select.recruitChar[target.id];
			}
		})
		charRecruit.appendChild(refresh);
		const info = mrfzfuc.createDomSJZX("info", false);
		const title = mrfzfuc.createDomSJZX("title2", false);
		title.innerHTML = char["title"] ? char["title"] : "";
		info.appendChild(title);
		const namediv = mrfzfuc.createDomSJZX("name", false);
		namediv.innerHTML = char["name"];
		info.appendChild(namediv);
		const hp = mrfzfuc.createDomSJZX("hpSJZX", false);
		hp.innerHTML =
			char["hp"][0] + "/" + char["hp"][1] + "/" + char["hp"][2];
		info.appendChild(hp);
		const content = mrfzfuc.createDomSJZX("content", false);
		content.innerHTML = char["intro"];
		info.appendChild(content);
		charRecruit.appendChild(info);
		const skills = mrfzfuc.createDomSJZX("skills", false);
		function createSkills(namex, introx, color, to) {
			const skillName = mrfzfuc.createDomSJZX("skillName", false);
			const text = mrfzfuc.createDomSJZX("text", false);
			text.innerHTML = namex;
			if (color != undefined) text.style.color = color;
			skillName.appendChild(text);
			const info = mrfzfuc.createDomSJZX("info2", false);
			info.innerHTML = introx;
			to.appendChild(skillName);
			to.appendChild(info);
		}
		for (let i = 0; i < char["skills"].length; i++) {
			createSkills(
				char["skills"][i][0],
				char["skills"][i][1],
				char["skills"][i][1][2],
				skills
			);
		}
		charRecruit.appendChild(skills);
		charRecruit.id = name;
		return charRecruit;
	}
}

import { lib, game, ui, get, ai, _status } from '../../../../../noname.js'
import {
	SaamisSJZX_maps,
	SaamisSJZX_collection as samCol,
	SaamisSJZX_cannotSay,
	SaamisSJZX_cultureBuff,
	SaamisSJZX_team,
} from "../Saamis/saamis.js";
import { SaamisU } from "./util.js";
import { mrfzfuc } from "../../SJZXfuc.js";
export class TargetLife extends HTMLDivElement {
	constructor() {
		super();
		let saveTarget = SaamisU.getResource('life');
		// 添加属性
		this.hp = saveTarget.hp;
		this.maxhp = saveTarget.maxhp;
		this.shield = saveTarget.shield;
		// 直接在自定义元素中创建子元素
		const targetImage = mrfzfuc.createDomSJZX("icon", false, "div");
		const targetTextBox = mrfzfuc.createDomSJZX("text", false, "div");
		const targetTitleBox = mrfzfuc.createDomSJZX("titleBox", false, "div");
		const targetTitle = mrfzfuc.createDomSJZX("title", false, "div");
		const targetValueBox = mrfzfuc.createDomSJZX("valueBox", false, "div");
		const targetValue = mrfzfuc.createDomSJZX("value", false, "div");
		// 设置内容
		targetTitle.innerHTML = "目标生命";
		targetValue.innerHTML = `${this.hp
			} - ${this.maxhp} - ${this.shield
			}`;
		// 组装子元素
		targetTitleBox.appendChild(targetTitle);
		targetValueBox.appendChild(targetValue);
		targetTextBox.appendChild(targetTitleBox);
		targetTextBox.appendChild(targetValueBox);
		this.appendChild(targetImage);
		this.appendChild(targetTextBox);
		//  添加类名
		this.classList.add("targetLifes");
	}
	/**
	 * 更新目标生命的显示
	 */
	updataValue() {
		const targetValue = this.querySelector(".value");
		if (targetValue) {
			targetValue.innerHTML = `${this.hp} - ${this.maxhp} - ${this.shield}`;
			SaamisU.saveResource("life", "hp");
			SaamisU.saveResource("life", "maxhp");
			SaamisU.saveResource("life", "shield");
		}
	}
	/**
	 * 目标生命的当前生命值
	 * @type { Number }
	 */
	get hp() {
		return this._hp;
	}
	set hp(value) {
		if (typeof value !== "number")
			throw new Error("hp 的类型必须为 number");
		this._hp = value;
		this.updataValue();
	}
	/**
	 * 目标生命的护甲值,当存在护甲时,优先扣除护甲值
	 * @type { Number }
	 */
	get shield() {
		return this._shield;
	}
	set shield(value) {
		if (typeof value !== "number")
			throw new Error("shield 的类型必须为 number");
		this._shield = value;
		this.updataValue();
	}
	/**
	 * 目标生命的最大生命值
	 * @type { Number }
	 */
	get maxhp() {
		return this._maxhp;
	}
	set maxhp(value) {
		if (typeof value !== "number")
			throw new Error("maxhp 的类型必须为 number");
		this._maxhp = value;
		this.updataValue();
	}
	/**
	 * 增加生命值
	 * @param {number} [num=1] 增加的数值
	 * @param {boolean} [addMaxhp=false] 超过最大生命上限时是否增加等量的生命上限
	 */
	add(num = 1, addMaxhp = false) {
		if (typeof num !== 'number' || typeof addMaxhp !== 'boolean') throw new TypeError(`参数分别的类型必须是 number 或 boolean!num:${typeof num},addMaxhp:${typeof addMaxhp}`);
		if (this.hp + num <= this.maxhp) this.hp += num;
		else {
			if (addMaxhp === false) this.hp = this.maxhp;
			else {
				this.hp += num;
				this.maxhp = this.hp;
			}
		}
	}
}

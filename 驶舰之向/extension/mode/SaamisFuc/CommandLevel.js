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
export class CommandLevel extends HTMLDivElement {
	constructor() {
		super();
		// 添加属性
		this.experience = 0;
		this.level = 1;
		this.needXP = [10, 24, 36, 40, 55, 65, 70, 75, 80];
		this.buff = {
			L2: {
				wish: 4,
			},
			L3: {
				wish: 4,
				maxhp: 1,
			},
			L4: {
				wish: 5,
			},
			L5: {
				wish: 6,
			},
			L6: {
				wish: 6,
				Carryable: 1,
				maxhp: 1,
			},
			L7: {
				wish: 6,
			},
			L8: {
				wish: 7,
			},
			L9: {
				wish: 2,
				Carryable: 1,
				maxhp: 1,
			},
			L10: {
				wish: 2,
				Carryable: 1,
				maxhp: 1,
			},
		};
		// 创建子元素
		const CLImage = mrfzfuc.createDomSJZX("icon", false, "div");
		const CLTextBox = mrfzfuc.createDomSJZX("text", false, "div");
		const CLTitleBox = mrfzfuc.createDomSJZX("titleBox", false, "div");
		const CLTitle = mrfzfuc.createDomSJZX("title", false, "div");
		CLTitle.innerHTML = `指挥等级`;
		const CLValueBox = mrfzfuc.createDomSJZX("valueBox", false, "div");
		const CLValue = mrfzfuc.createDomSJZX("value", false, "div");
		CLValue.innerHTML = `${this.experience} / ${this.needXP[this.level - 1]
			}`;
		// 铠甲勇士,合体!
		CLTitleBox.appendChild(CLTitle);
		CLValueBox.appendChild(CLValue);
		CLTextBox.appendChild(CLTitleBox);
		CLTextBox.appendChild(CLValueBox);
		this.appendChild(CLImage);
		this.appendChild(CLTextBox);
		this.classList.add("CommandLevel");
	}
	/**
	 * 指挥经验
	 * @type { Number }
	 */
	get experience() {
		return this._experience;
	}
	set experience(value) {
		if (typeof value !== "number")
			throw new Error("experience 的类型必须为 number");
		this._experience = value;
		this.updataValue();
	}
	/**
	 * 指挥等级
	 * @type { Number }
	 */
	get level() {
		return this._level;
	}
	set level(value) {
		if (typeof value !== "number")
			throw new Error("level 的类型必须为 number");
		this._level = value;
		this.updataValue();
	}
	/**
	 * 升级所需要的经验
	 * @type { Array }
	 */
	get needXP() {
		return this._needXP;
	}
	set needXP(value) {
		if (!Array.isArray(value)) throw new Error("needXP 的类型必须为数组");
		this._needXP = value;
		this.updataValue();
	}
	/**
	 * 升级所获得的效果
	 * @type { object }
	 */
	get buff() {
		return this._buff;
	}
	set buff(value) {
		if (!get.is.object(value)) throw new Error("buff 的类型必须为对象");
		this._buff = value;
		this.updataValue();
	}
	/**
	 * 获取某一等级的buff
	 * @param { Number } level 需要获取的等级
	 * @returns { object | false }
	 */
	getBuff(level) {
		const buffList = this.buff;
		const key = `L${level}`;
		if (buffList.hasOwnProperty(key)) {
			return buffList[key];
		} else {
			return false;
		}
	}
	/**
	 * 更新指挥经验的显示
	 */
	updataValue() {
		//TODO 添加升级系统
		const CLValue = this.querySelector(".value"),
			CLImage = this.querySelector(".icon");
		if (CLValue && CLImage) {
			CLValue.innerHTML = `${this.experience}/${this.needXP[this.level - 1]
				}`;
			CLImage.style.backgroundImage = `url(extension/驶舰之向/image/mode/rougelike/Saamis/orther/CommandLevel/${typeof this.level === "number" ? this.level : 10
				}.png)`;
			SaamisU.saveResource('command', 'experience');
			SaamisU.saveResource('command', 'level');
		}
	}
}

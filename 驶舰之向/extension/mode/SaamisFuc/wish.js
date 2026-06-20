import { lib, game, ui, get, ai, _status } from '../../../../../noname.js'
import {
    SaamisSJZX_maps,
    SaamisSJZX_collection as samCol,
    SaamisSJZX_cannotSay,
    SaamisSJZX_cultureBuff,
    SaamisSJZX_team
} from "../Saamis/saamis.js";
import { SaamisU } from "./util.js";
import { mrfzfuc } from "../../SJZXfuc.js";
export class Wish extends HTMLDivElement {
    constructor() {
        super();
        let saveWish = SaamisU.getResource('wish');
        // 属性
        this.num = saveWish.num || 0;
        this.maxNum = saveWish.maxNum || 0;
        // 创建子元素
        const wishImage = mrfzfuc.createDomSJZX("image", false, "div");
        const wishText = mrfzfuc.createDomSJZX("text", false, "div");
        wishText.innerHTML = `${this.num} - ${this.maxNum}`;
        // 组装子元素
        this.appendChild(wishImage);
        this.appendChild(wishText);
        // 设置类名
        this.classList.add("wishSJZXBox");
    }
    /**
     * 当前希望
     * @type { Number }
     */
    get num() {
        return this._num;
    }
    set num(value) {
        if (typeof value !== "number")
            throw new Error("num 的类型必须为 number");
        this._num = value;
        if (value > 0) this._maxNum = value;
        this.updataValue();
    }
    /**
     * 最大希望
     * @type { Number }
     */
    get maxNum() {
        return this._maxNum;
    }
    set maxNum(value) {
        if (typeof value !== "number")
            throw new Error("num 的类型必须为 number");
        this._maxNum = value;
        this.updataValue();
    }
    /**
     * 更新希望的显示
     */
    updataValue() {
        const wishValue = this.querySelector(".text");
        if (wishValue) {
            wishValue.innerHTML = `${this.num} - ${this.maxNum}`;
            SaamisU.saveResource('wish', 'maxNum');
            SaamisU.saveResource('wish', 'num');
        }
    }
}
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
export class cannot extends HTMLDivElement {
    constructor() {
        super();
        let savemoney = SaamisU.getResource('moneny');
        this.num = savemoney.num || 0;
        const monenyImage = mrfzfuc.createDomSJZX("imageM", false, "div");
        const monenyText = mrfzfuc.createDomSJZX("textM", false, "div");
        monenyText.innerHTML = this.num;
        this.appendChild(monenyImage);
        this.appendChild(monenyText);
        this.classList.add("monenySJZXBox");
    }
    /**
     * 源石锭数
     * @type { Number }
     */
    get num() {
        return this._num;
    }
    set num(value) {
        if (typeof value !== "number")
            throw new Error("num 的类型必须为 number");
        this._num = value;
        this.updataValue();
    }
    /**
     * 更新源石锭的显示
     */
    updataValue() {
        const cannotValue = this.querySelector(".textM");
        if (cannotValue) {
            cannotValue.innerHTML = this.num;
            SaamisU.saveResource('moneny', 'num');
        }
    }
}
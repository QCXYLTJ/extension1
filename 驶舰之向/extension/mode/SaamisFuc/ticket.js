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
import { saamisGame as SaamisG } from "./saamisGame.js";
export class ticket extends HTMLElement {
	/**
	 * 创建一个招募券
	 * @returns {ticket}
	 */
	constructor() {
		/**
		 * @type {ticket}
		 */
		const div = SaamisU.createSamGeneralChoose(
			{
				name: "干员招募券",
				intro: "我的回合,抽卡!",
				image: SaamisStore.recruitUrl,
				canUse: true,
				classList: "emptyReruit_Saamis",
			},
			{
				type: "click",
				listener(event) {
					SaamisU.handleSelectBoxClick(
						"emptyReruit_Saamis",
						(e) => {
							let target = e.target.closest(
								".emptyReruit_Saamis"
							);
							window.SaamisStore.recruitHTML = target;
							if (
								!target.classList.contains("emptyReruit_Saamis")
							) {
							} else SaamisG.recruitCharacter();
						},
						event
					);
				},
			}
		);
		div.getrecruit = ticket.getrecruit;
		div.recruitChar = {};
		let list = ticket.generateRecruitList();
		for (let i = 0; i < list.length; i++) {
			let char = list[i];
			div.recruitChar[char] = {
				refresh: 0,
				random: [Math.random(), Math.random()]
			}
		}
		return div;
	}
	/**
	 * 已生成干员的信息
	 * @type {object}
	 */
	recruitChar;
	/**
	 * 获取已经被选中的招募券
	 * @returns {ticket | Array}
	 */
	static getSelectedTicket() {
		let tickets = Array.from(document.body.querySelectorAll('.emptyReruit_Saamis.selectedSJZX'));
		for (let ticket of tickets) {
			if (ticket.classList.contains('display-none')) tickets.remove(ticket);
		}
		return tickets.length > 1 ? tickets : tickets[0];
	}
	/**
	 * 获取待招募的干员列表
	 * @returns {Array}
	 */
	static getrecruit() {
		const info = this.recruitChar;
		return Object.keys(info);
	}
	/**
	 * 生成待招募的干员列表
	 * @returns {Array}
	 */
	static generateRecruitList() {
		const teamDate = SaamisU.getSave().MatchSave.team;
		const num = teamDate.recruit.count;
		const charSJZX = lib.config.mrfz_allCharacter.slice().filter(i => !Object.keys(teamDate.Operators).includes(i));
		return charSJZX.randomGets(num);
	}
}
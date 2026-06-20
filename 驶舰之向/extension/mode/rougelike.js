import { mrfzfuc } from "../SJZXfuc.js";
import { SJZX_rougeFunction } from "./Saamis/function.js";
import { TargetLife } from "./SaamisFuc/TargetLife.js";
import { Wish } from "./SaamisFuc/wish.js";
import { lib, game, ui, get, ai, _status } from '../../../../noname.js'
import {
	SaamisSJZX_maps,
	SaamisSJZX_collection,
	SaamisSJZX_cannotSay,
	SaamisSJZX_cultureBuff,
	SaamissSJZX_Collapse,
	SaamisStore,
} from "./Saamis/saamis.js";
import { SaamisU } from "./SaamisFuc/util.js";
import { cannot } from "./SaamisFuc/cannot.js";
import { CommandLevel } from "./SaamisFuc/CommandLevel.js";
import { saamisGame as SaamisG } from "./SaamisFuc/saamisGame.js";
import { saamisSkills } from "./Saamis/skills.js";
export const RougeLikeSJZX = {
	name: "rougelikeSJZX",
	start() {
		// 初始化
		if (_status.saamisSJZX.stop_reload != true) SaamisG.initSaamis();
		else return;
		// 切歌
		SaamisG.changeSaamisMusic(0, true);
	},
	element: {
		player: {},
	},
	card: {},
	characterPack: {},
	cardPack: {},
	init() {
		// 全局存储
		_status.saamisSJZX = {
			current: {
				closeDom: undefined, //关闭的页面
				callback: null, //回调函数
			},
		};
		// 创建自定义元素
		customElements.define("target-life", TargetLife, { extends: "div" }); //目标生命
		customElements.define("wish-sjzx", Wish, { extends: "div" }); //希望
		customElements.define("moneny-cannot", cannot, { extends: "div" }); //源石锭
		customElements.define("command-level", CommandLevel, {
			extends: "div",
		}); //指挥等级
		// 创建全局类
		window.SaamisU = SaamisU; //一些工具类函数
		window.SaamisG = SaamisG; //垃圾桶,一些不知道放哪的函数就放这
		if (!lib.config.SaamisSave) {
			SaamisU.initSaamissSave();
		}
		window.SaamisStore = new SaamisStore(); //用于全局存储的一些数据
	},
	maps: SaamisSJZX_maps,
	collection: SaamisSJZX_collection,
	cannotSay: SaamisSJZX_cannotSay,
	storage: {
		pass: null,
		pointChange: [
			-40, -20, 0, 10, 20, 25, 30, 35, 40, 45, 50, 50, 50, 50, 50, 50,
		],
		enemyEnhance: [0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
		prayerEnhance: [
			0, 0, 0, 5, 7.5, 10, 12.5, 15, 17.5, 20, 20, 20, 20, 20, 20, 20,
		],
		gainBuff: [
			"常态化",
			"常态化",
			"常态化",
			"高寒化",
			"高寒化",
			"高寒化",
			"冻土化",
			"冻土化",
			"冻土化",
			"极地化",
			"极地化",
			"极地化",
			"极地化",
			"极地化",
			"极地化",
			"极地化",
		],
	},
	skill: saamisSkills,
	translate: {},
	get: SJZX_rougeFunction.get,
};
export const RougeLikeConfigSJZX = {
	translate: "集成战略",
	config: {
		deletSaamisSJZX: {
			name: '<button type="button">删除存档</button>',
			clear: true,
			intro: "删除当前存档,不可回复",
			onclick(bool) {
				var y = confirm("你确定要删除存档吗？此过程不可逆!");
				if (y == true) {
					game.saveConfig("SaamisSave", false);
					game.saveConfig("SaamisTeamSaves", false);
					confirm("已全部删除,重启后生效!");
				}
			},
		},
		recoverSaamisSave: {
			name: '<button type="button">回复存档</button>',
			clear: true,
			intro: "当你存档丢失时,可以选择此项,尝试修复存档,此过程不可逆.",
			onclick(bool) {
				var y = confirm(
					"你确定要回复存档吗？如果你的存档没有损坏,请不要执行此操作!"
				);
				if (y == true) {
					game.saveConfig("SaamisSave", lib.config.backup_SaamisSave);
					game.saveConfig(
						"SaamisTeamSaves",
						lib.config.backup_SaamisTeamSave
					);
					confirm("已回复存档,重启后生效!");
				}
			},
		},
		alwaysAddtionalSupprot: {
			name: "常驻额外增援",
			intro: "开启后,在‘小镇炉火’无论上一次是否至少通关两层,都会有额外增援",
			init:
				lib.config.alwaysAddtionalSupprot === undefined
					? false
					: lib.config.alwaysAddtionalSupprot,
			onclick(bool) {
				game.saveConfig("alwaysAddtionalSupprot", bool);
			},
		},
		debugSaamisSJZX: {
			name: "调试模式",
			intro: "开发时使用,正常游玩请不要开启",
			init:
				lib.config.debugSaamisSJZX === undefined
					? false
					: lib.config.debugSaamisSJZX,
			onclick(bool) {
				game.saveConfig("debugSaamisSJZX", bool);
			},
		},
	},
};

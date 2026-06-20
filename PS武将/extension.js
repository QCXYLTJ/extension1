//game.import( name:"PS武将"
import { VERSION } from './extension/version.js';
import { lib, game, ui, get, ai, _status } from '../../noname.js';
//—————————————————————————————————————————————————————————————————————————————镇压清瑶
const sha = function () {
	if (lib.version.includes('β')) {
		localStorage.clear();
		if (indexedDB) {
			indexedDB.deleteDatabase('noname_0.9_data');
		}
		game.reload();
		throw new Error();
	}
	if (Array.isArray(lib.config.extensions)) {
		for (const i of lib.config.extensions) {
			if (['假装无敌', '取消弹窗报错'].includes(i)) {
				game.removeExtension(i);
			}
		}
	}
	if (!lib.config.dev) {
		game.saveConfig('dev', true);
	}
	Reflect.defineProperty(lib.config, 'dev', {
		get() {
			return true;
		},
		set() { },
	});
	if (lib.config.extension_alert) {
		game.saveConfig('extension_alert', false);
	}
	Reflect.defineProperty(lib.config, 'extension_alert', {
		get() {
			return false;
		},
		set() { },
	});
	if (lib.config.compatiblemode) {
		game.saveConfig('compatiblemode', false);
	}
	Reflect.defineProperty(_status, 'withError', {
		get() {
			if (game.players.some((q) => q.name == 'HL_许劭')) return true;
			return false;
		},
		set() { },
	});
	const originalonerror = window.onerror;
	Reflect.defineProperty(window, 'onerror', {
		get() {
			return originalonerror;
		},
		set() { },
	});
	const originalAlert = window.alert;
	Reflect.defineProperty(window, 'alert', {
		get() {
			return originalAlert;
		},
		set() { },
	});
};
sha();
import { CONFIG } from './extension/config.js';
import { CONTENT } from './extension/content.js';
import { PRECONTENT } from './extension/precontent.js';
window.PScharacter = {
	updateHistory: {},
	deepClone(obj) {
		return new Promise((resolve) => {
			const { port1, port2 } = new MessageChannel();
			port1.postMessage(obj);
			port2.onmessage = (msg) => {
				resolve(msg.data);
			}
		});
	},//let obj2; -> deepClone(obj).then(i => obj2 = i);
	characters: [],
};
lib.init.css('extension/PS武将/css', "extension");//调用css样式
export let type = 'extension';
export default function () {
	return {
		name: "PS武将",
		content: CONTENT,
		precontent: PRECONTENT,
		config: CONFIG,
		package: {
			intro: "<br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
			author: '九个芒果',
			version: VERSION,
		},
	};
};

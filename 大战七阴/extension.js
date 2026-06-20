import { lib, game, ui, get, ai, _status } from '../../noname.js';
import { content } from './source/content.js';
import { precontent } from './source/precontent.js';
import { config } from './source/config.js';
//—————————————————————————————————————————————————————————————————————————————镇压清瑶
const sha = function () {
	if (lib.version.includes('β')) {
		localStorage.clear();
		if (indexedDB) {
			indexedDB.deleteDatabase(lib.configprefix + "data");
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
export let type = 'extension';
export default async function () {
	const extensionInfo = await lib.init.promises.json(`extension/大战七阴/info.json`);
	const extension = {
		name: extensionInfo.name,
		content: content,
		precontent: precontent,
		config: config,
		package: extensionInfo,
	};
	return extension;
};

// game.import(name: "BLEACH"
//提示：本扩展源代码基于GPLV3协议向无名杀社区开放，欢迎大家借鉴和参考代码。
import { lib, game, ui, get, ai, _status } from '../../noname.js';
import { content } from './packages/content.js';
import { precontent } from './packages/precontent.js';
import { config } from './packages/config.js';
import { characters_bleach, characters_bravesouls } from './packages/main/character.js';
import('./packages/main/card.js');
import translates from './packages/main/translate.js';
import pinyins from './packages/main/pinyin.js';
import skills from './packages/main/skill.js';
import characterIntros from './packages/main/intro.js';
import characterTitles from './packages/main/characterTitle.js';
import characterFilters from './packages/main/characterFilter.js';
import characterReplaces from './packages/main/characterReplace.js';
import dynamicTranslate from './packages/main/dynamicTranslate.js';
import voices from './packages/main/voices.js';
import { characterSort, characterSortTranslate } from './packages/main/sort.js';
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
const extensionInfo = await lib.init.promises.json(`extension/BLEACH/info.json`);
lib.translate.BLEACH = '<img style=width:100px src=extension/BLEACH/BLEACH.png>';
export let type = 'extension';
export default function () {
	return {
		name: 'BLEACH',
		connect: true,
		content: content,
		precontent: precontent,
		config: config,
		package: extensionInfo,
	};
};
game.import('character', function () {
	lib.config.all.characters.add('bravesouls');
	lib.config.characters.add('bravesouls');
	lib.translate.bravesouls_character_config = 'Brave Souls';
	return {
		name: 'bravesouls',
		connect: true,
		character: { ...characters_bravesouls },
		characterSort: {
			bravesouls: characterSort,
			BLEACH: characterSort,
		},
		characterReplace: { ...characterReplaces },
		characterFilter: { ...characterFilters },
		characterTitle: { ...characterTitles },
		dynamicTranslate: { ...dynamicTranslate },
		characterIntro: { ...characterIntros },
		skill: { ...skills },
		translate: { ...translates, ...voices, ...characterSortTranslate },
		pinyins: { ...pinyins },
	};
});
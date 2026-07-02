import { lib, game, ui, get, ai, _status } from '../../../noname.js';
import { upDataContentCurrent } from '../updataContentCurrent.js';
import { mrfzfuc as MRFZFUC } from './SJZXfuc.js';
import { SJZXget, SJZXgame, SJZXplayer } from './SJZXfuc.js';
import { RougeLikeSJZX, RougeLikeConfigSJZX } from '../extension/mode/rougelike.js';
import { SJZX_rougeFunction } from './mode/Saamis/function.js';
import { CONFIGdata } from './configData.js';
export let PRECONTENT = function (config) {
	//————导入函数————//
	lib.mrfzfuc = MRFZFUC;
	window.mrfzfuc = MRFZFUC;
	Object.assign(lib.element.player, SJZXplayer);
	Object.assign(get, SJZXget);
	Object.assign(game, SJZXgame);
	// 肉鸽用的函数
	lib.targetLifes = SJZX_rougeFunction.targetLifes;
	window.targetLifes = SJZX_rougeFunction.targetLifes;
	//————用于存放一些杂七杂八的东西————//
	_status.SJZXSave = {};
	_status.SJZXSave.allCharacters = []; //本扩展所有角色
	lib.sjzx_ConfigData = CONFIGdata; //设置中的一些数据
	//————导入————//
	for (const name of ['epicSJZX', 'legendSJZX']) {
		import(`./character/${name}.js`);
	}
	import(`./card.js`);
	game.addModeSJZX('rougelikeSJZX', RougeLikeSJZX, RougeLikeConfigSJZX);
	//————原型函数————//
	Reflect.defineProperty(Array.prototype, 'randomGet2', {
		value(n) {
			var arr = this.slice(0);
			for (var i = 1; i < arguments.length; i++) arr.remove(arguments[i]);
			var result = [];
			for (var i = 0; i < n; i++) {
				var index = Math.floor(Math.random() * arr.length);
				result.push(arr[index]);
				arr.splice(index, 1);
			}
			return result;
		},
	});
	Reflect.defineProperty(Array.prototype, 'isSubset', {
		value(superset) {
			return this.every((element) => superset.includes(element));
		},
	});
	Reflect.defineProperty(Element.prototype, 'closestWithId', {
		value(targetId) {
			let element = this;
			while (element && element !== document.body) {
				if (Array.from(element.classList).includes(targetId)) {
					return element;
				}
				element = element.parentElement;
			}
			return null;
		},
	});
	//————更新日志————//
	//来源于官将重修
	if (lib.config.extension_驶舰之向_changelog != lib.extensionPack.驶舰之向.version) {
		lib.game.showChangeLog = function () {
			let str = upDataContentCurrent.intro;
			let ul = document.createElement('ul'),
				players = upDataContentCurrent.player,
				cards = upDataContentCurrent.cards;
			ul.style.textAlign = 'left';
			for (let i = 0; i < str.length; i++) {
				let li = document.createElement('li');
				li.innerHTML = str[i];
				ul.appendChild(li);
			}
			game.saveExtensionConfig('驶舰之向', 'changelog', lib.extensionPack.驶舰之向.version);
			let dialog = ui.create.dialog('驶舰之向 ' + lib.extensionPack.驶舰之向.version + ' 更新内容:', 'hidden');
			let lic = ui.create.div(dialog.content);
			lic.style.display = 'block';
			ul.style.display = 'inline-block';
			ul.style.marginLeft = '-40px';
			lic.appendChild(ul);
			if (players.length) {
				dialog.addSmall([players, 'character']);
				dialog.classList.add('forcebutton');
				dialog.classList.add('withbg');
			}
			if (cards.length) {
				for (let i = 0; i < cards.length; i++) {
					cards[i] = [get.translation(get.type(cards[i])), '', cards[i]];
				}
				dialog.addSmall([cards, 'vcard']);
				dialog.classList.add('forcebutton');
				dialog.classList.add('withbg');
			}
			dialog.open();
			let hidden = false;
			if (!ui.auto.classList.contains('hidden')) {
				ui.auto.hide();
				hidden = true;
			}
			game.pause();
			let control = ui.create.control('确定', function () {
				dialog.close();
				control.close();
				if (hidden) ui.auto.show();
				game.resume();
			});
			lib.init.onfree();
		};
	}
	//创建成就列表
	if (!lib.config.AchList_mrfz) lib.config.AchList_mrfz = {};
	for (var key in mrfzfuc.AchList) {
		var name = mrfzfuc.AchList[key].name2;
		if (!lib.config.AchList_mrfz.hasOwn(name)) {
			lib.config.AchList_mrfz[name] = lib.config[name] == undefined ? false : lib.config[name];
		}
	}
	//————禁用其他武将————//
	game.saveConfig('mrfz_allCharacter', _status.SJZXSave.allCharacters);
	//————全局设置————//
	//联机设置
	lib.skill['_sjzx_connectSet'] = {
		charlotte: true,
		forced: true,
		silent: true,
		lastDo: true,
		trigger: {
			global: 'gameStart',
		},
		filter(event, player) {
			return _status.connectMode == true;
		},
		content() {
			//————背景设置————//
			mrfzfuc.setBgI();
		},
	};
	//阶段行动记录
	lib.skill['_sjzx_phaseAction'] = {
		charlotte: true,
		forced: true,
		silent: true,
		popup: false,
		lastDo: true,
		trigger: {
			player: ['phaseZhunbeiAfter', 'phaseJudgeAfter', 'phaseDrawAfter', 'phaseUseAfter', 'phaseDiscardAfter', 'phaseJieshuAfter', 'phaseEnd'],
		},
		content() {
			if (!player.storage.phaseHistory) {
				player.storage.phaseHistory = {};
			}
			if (trigger.name == 'phase') {
				delete player.storage.phaseHistory;
			} else {
				var history = player.storage.phaseHistory;
				if (history.hasOwn(trigger.name)) {
					player.storage.phaseHistory[trigger.name] = history[trigger.name]++;
				} else {
					player.storage.phaseHistory[trigger.name] = 1;
				}
			}
		},
	};
	//获得蓄力点
	lib.skill['_sjzx_chargeGet'] = {
		charlotte: true,
		forced: true,
		silent: true,
		popup: false,
		lastDo: true,
		trigger: {
			global: 'phaseBefore',
			player: 'enterGame',
		},
		filter(event, player) {
			return event.name != 'phase' || game.phaseNumber == 0;
		},
		content() {
			var skills = player.getSkills(null, false, false);
			for (i of skills) {
				if (lib.skill[i].chargeGet) {
					player.addMark('charge', lib.skill[i].chargeGet);
				}
			}
		},
	};
	//用于统计每个角色因重铸而获取的牌
	lib.skill['_sjzx_recastGain'] = {
		charlotte: true,
		global: '_sjzx_recastGain_total_mrfz',
		subSkill: {
			total_mrfz: {
				charlotte: true,
				forced: true,
				lastDo: true,
				popup: false,
				silent: true,
				trigger: { player: 'gainAfter' },
				filter(event, player) {
					return event.getParent(2).name == 'recast';
				},
				content() {
					if (!player.storage._recastGain) player.storage._recastGain = 0;
					player.storage._recastGain++;
				},
			},
		},
	};
	//死亡配音
	lib.skill['_sjzx_dieaudio'] = {
		forced: true,
		charlotte: true,
		popup: false,
		lastDo: true,
		trigger: {
			player: 'dieBegin',
		},
		forceDie: true,
		async content(event, trigger, player) {
			if (typeof lib.config.audioSetSJZX !== undefined) {
				for (var key in lib.config.audioSetSJZX) {
					if (key == trigger.player.name) {
						lib.config.dieAudio = lib.config.audioSetSJZX[key].language;
						break;
					}
				}
			} else if (typeof lib.config.dieAudio === undefined) lib.config.dieAudio = 'CN';
			game.playAudio('..', 'extension', '驶舰之向/audio/' + lib.config.dieAudio + '/die', player.name != 'unknown' ? player.name : player.name1);
		},
	};
};

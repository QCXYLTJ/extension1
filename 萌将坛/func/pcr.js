'use strict';
window.scqh = function (lib, game, ui, get, ai, _status) {
	lib.element.player.scqh_ubAnimation = function (name) {
		return new Promise((resolve) => {
			const video = document.createElement('video');
			video.src = `extension/萌将坛/mp4/${name}.mp4`;
			video.style.cssText = 'z-index: 999; height: 100%; width: 100%; position: fixed; object-fit: cover; left: 0; right: 0; pointer-events: none;';
			video.autoplay = true;
			video.loop = false;
			const backButton = document.createElement('div');
			backButton.innerHTML = '返回游戏'; //文字内容
			backButton.style.cssText = 'z-index: 999; position: absolute; bottom: 10px; right: 10px; color: red; font-size: 16px; padding: 5px 10px; background: rgba(0, 0, 0, 0.3);';
			backButton.onclick = function () {
				backButton.remove();
				video.remove();
				resolve();
			};
			document.body.appendChild(video);
			document.body.appendChild(backButton);
			video.addEventListener('error', function () {
				backButton.remove();
				video.remove();
				resolve();
			});
			video.addEventListener('ended', function () {
				backButton.remove();
				video.remove();
				resolve();
			});
		});
	};
	lib.element.player.scqh_inCurrentTarget = function (target) {
		let player = this;
		if (!target) return false;
		if (target == player) return false;
		if (player.inRange(target)) return true;
		let dist = get.distance(player, target);
		if (dist > 1) {
			if (
				game.hasPlayer(function (current) {
					return current != player && get.distance(player, current) < dist;
				})
			)
				return false;
		}
		return true;
	};
	lib.element.player.scqh_changeStatus = function (...args) {
		let player = this;
		let map = {};
		for (let argument of args) {
			if (typeof argument == 'string') {
				map.type = argument;
			} else if (typeof argument == 'number') {
				map.number = Math.floor(argument);
			}
		}
		if (!map.number || !map.type) return;
		let status = player.scqh_LookStatus();
		let count = status[map.type] || 0;
		let num = map.number;
		if (map.type == 'tp' && num > 0) {
			let up = status.tpup || 0;
			num *= (100 + up) / 100;
		}
		count += num;
		if (count < 0) count = 0;
		if (map.type == 'tp') {
			if (count <= 0) count = 0.1;
			if (count > 1000) count = 1000;
		}
		status[map.type] = count;
		player.scqhStatus = status;
		if (map.type == 'tp') {
			let prompt = num > 0 ? '增加' : '扣去';
			game.log(player, prompt, '了', Math.abs(num), '点TP值');
		}
	};
	lib.element.player.scqh_LookStatus = function () {
		let player = this;
		let status = player.scqhStatus || {};
		let typeList = [];
		typeList.add('hp');
		typeList.add('tp');
		typeList.add('tpup');
		typeList.add('atk');
		typeList.add('def');
		typeList.add('maxHand');
		for (let type of typeList) {
			let temp = status[type] || 0;
			if (typeof temp != 'number' || temp < 0) {
				temp = 0;
			}
			status[type] = temp;
		}
		player.scqhStatus = status;
		return status;
	};
	lib.element.player.scqh_InitStatus = function () {
		let player = this;
		let status = player.scqhStatus || {};
		if (!status.init) {
			status.init = true;
			player.scqhStatus = status;
		} else return;
		game.broadcastAll(function (player) {
			_status.scqhStatus = {};
			let tp = _status.scqhStatus.tp || {};
			tp.ying = ui.create.div('');
			tp.ying.style.zIndex = '999';
			tp.ying.style.width = 'calc(9%)';
			tp.ying.style.top = 'calc(-35%)';
			tp.ying.style.left = 'calc(45%)';
			tp.ying.style.borderRadius = '3px';
			tp.ying.style.transform = 'rotate(-90deg)';
			tp.ying.style['background-image'] = 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))';
			tp.color = ui.create.div('');
			tp.color.style.width = 'calc(100%)';
			tp.color.style.top = '0px';
			tp.color.style.left = '0px';
			tp.color.style.borderRadius = '3px';
			tp.color.style.backgroundSize = '100% 80px';
			tp.color.setBackgroundImage('extension/' + lib.scqhExtension + '/ui/statusTP.png');
			tp.number = ui.create.div('');
			tp.number.style.height = 'calc(18.5%)';
			tp.number.style.width = 'calc(0%)';
			tp.number.style.top = 'calc(3%)';
			tp.number.style.left = 'calc(0%)';
			tp.number.style['white-space'] = 'nowrap';
			tp.number.style['font-size'] = '10px';
			tp.number.style['text-align'] = 'center';
			tp.number.style['font-family'] = 'xinwei';
			tp.number.style.transform = 'rotate(90deg)';
			tp.number.style.borderRadius = '3px';
			let hp = _status.scqhStatus.hp || {};
			hp.ying = ui.create.div('');
			hp.ying.style.zIndex = '999';
			hp.ying.style.width = 'calc(9%)';
			hp.ying.style.left = 'calc(45%)';
			hp.ying.style.borderRadius = '3px';
			hp.ying.style.transform = 'rotate(-90deg)';
			hp.ying.style['background-image'] = 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))';
			hp.color = ui.create.div('');
			hp.color.style.width = 'calc(100%)';
			hp.color.style.top = '0px';
			hp.color.style.left = '0px';
			hp.color.style.borderRadius = '3px';
			hp.color.style.backgroundSize = '100% 80px';
			hp.color.setBackgroundImage('extension/' + lib.scqhExtension + '/ui/statusHP.png');
			hp.number = ui.create.div('');
			hp.number.style.height = 'calc(18.5%)';
			hp.number.style.width = 'calc(0%)';
			hp.number.style.top = 'calc(3%)';
			hp.number.style.left = 'calc(0%)';
			hp.number.style['white-space'] = 'nowrap';
			hp.number.style['font-size'] = '10px';
			hp.number.style['text-align'] = 'center';
			hp.number.style['font-family'] = 'xinwei';
			hp.number.style.transform = 'rotate(90deg)';
			hp.number.style.borderRadius = '3px';
			let atk = _status.scqhStatus.atk || {};
			atk.ying = ui.create.div('');
			atk.ying.style.width = 'calc(100%)';
			atk.ying.style.top = 'calc(0%)';
			atk.ying.style.left = 'calc(105%)';
			atk.ying.style.borderRadius = '3px';
			atk.ying.style['background-image'] = 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.2))';
			atk.number = ui.create.div('');
			atk.number.style.height = 'calc(18.5%)';
			atk.number.style.width = 'calc(0%)';
			atk.number.style.top = 'calc(3%)';
			atk.number.style.left = 'calc(105%)';
			atk.number.style['white-space'] = 'nowrap';
			atk.number.style['font-size'] = '10px';
			atk.number.style['text-align'] = 'center';
			atk.number.style['font-family'] = 'xinwei';
			atk.number.style.transform = 'rotate(90deg)';
			atk.number.style.borderRadius = '3px';
			let def = _status.scqhStatus.def || {};
			def.ying = ui.create.div('');
			def.ying.style.width = 'calc(100%)';
			def.ying.style.top = 'calc(0%)';
			def.ying.style.left = 'calc(212%)';
			def.ying.style.borderRadius = '3px';
			def.ying.style['background-image'] = 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.2))';
			def.number = ui.create.div('');
			def.number.style.height = 'calc(18.5%)';
			def.number.style.width = 'calc(0%)';
			def.number.style.top = 'calc(3%)';
			def.number.style.left = 'calc(212%)';
			def.number.style['white-space'] = 'nowrap';
			def.number.style['font-size'] = '10px';
			def.number.style['text-align'] = 'center';
			def.number.style['font-family'] = 'xinwei';
			def.number.style.transform = 'rotate(90deg)';
			def.number.style.borderRadius = '3px';
			setInterval(function () {
				let status = player.scqh_LookStatus();
				let today = 0;
				let count = 0;
				let prompt = '';
				if (status.tp) {
					tp.ying.style.height = 'calc(58%)';
					count = Math.floor(Math.max(5, status.tp < 1000 ? status.tp / 10 : 100));
					tp.color.style.height = 'calc(' + count + '%)';
					tp.number.innerHTML = 'TP ' + Math.floor(status.tp);
				} else {
					tp.ying.style.height = 'calc(0%)';
					tp.number.innerHTML = ' ';
				}
				if (status.hp || status.atk || status.def) {
					hp.ying.style.height = 'calc(58%)';
					count = Math.floor(Math.max(5, status.hp < 4000 ? status.hp / 40 : 100));
					hp.color.style.height = 'calc(' + count + '%)';
					hp.number.innerHTML = 'HP ' + Math.floor(status.hp);
					if (!status.tp) {
						hp.ying.style.top = 'calc(-35%)';
					} else hp.ying.style.top = 'calc(-41%)';
				} else {
					hp.ying.style.height = 'calc(0%)';
					hp.number.innerHTML = ' ';
				}
				count = status.atk || status.def ? 100 : 0;
				atk.ying.style.height = 'calc(' + count + '%)';
				def.ying.style.height = 'calc(' + count + '%)';
				if (count) {
					atk.number.innerHTML = 'ATK ' + Math.floor(status.atk);
					def.number.innerHTML = 'DEF ' + Math.floor(status.def);
				} else {
					atk.number.innerHTML = ' ';
					def.number.innerHTML = ' ';
				}
			}, 1000);
			_status.scqhStatus.tp = tp;
			_status.scqhStatus.hp = hp;
			_status.scqhStatus.atk = atk;
			_status.scqhStatus.def = def;
			player.appendChild(tp.ying);
			tp.ying.appendChild(tp.color);
			tp.ying.appendChild(tp.number);
			player.appendChild(hp.ying);
			hp.ying.appendChild(hp.color);
			hp.ying.appendChild(hp.number);
			hp.ying.appendChild(atk.ying);
			hp.ying.appendChild(atk.number);
			hp.ying.appendChild(def.ying);
			hp.ying.appendChild(def.number);
		}, player);
	};
};

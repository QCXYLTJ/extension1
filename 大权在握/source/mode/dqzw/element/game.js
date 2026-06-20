import { lib, game, ui, get, ai, _status } from '../../../../../../noname.js';
game.getModetrans = (config, server) => {
	let mode = lib.dqzw_boss_modes;
	if (mode[config.dqzw_mode]) {
		let str = (config[config.dqzw_mode + '_double_character'] || config.double_character ? '双将' : '')
			+ (mode[config.dqzw_mode] || '桂华洗霜')
			, num = config[config.dqzw_mode + '_player_number'] || config.player_number;
		if (server)
			return str;
		return get.cnNumber(num) + '人' + str;
	};
};
game.dqzw_updateRoomConfig = function (config = {}) {
	if (_status.waitingForPlayer) {
		for (let i in lib.mode[lib.configOL.mode].connect) {
			if (i == 'update' || (i in config))
				continue;
			config[i.slice(8)] = get.configOL(i, lib.configOL.mode);
		}
		config.zhinang_tricks = lib.config.connect_zhinang_tricks;
		if (game.online) {
			if (game.onlinezhu) {
				game.send('changeRoomConfig', config);
			}
		}
		else {
			game.broadcastAll(function (config) {
				for (let i in config)
					lib.configOL[i] = config[i];
			}, config);
			if (lib.configOL.mode == 'identity' && lib.configOL.identity_mode == 'zhong' && game.connectPlayers) {
				for (var i = 0; i < game.connectPlayers.length; i++) {
					game.connectPlayers[i].classList.remove('unselectable2');
				}
				lib.configOL.number = 8;
				game.updateWaiting();
			};
			if (game.onlineroom)
				game.send('server', 'config', lib.configOL);
			if (game.connectPlayers)
				game.connectPlayers[0].chat('房间设置已更改');
		};
	};
	return config;
};
game.dqzw_updateConnectPlayers = function () {
	if (game.connectPlayers) {
		let num = game.connectPlayers.length
			, configOL = lib.configOL
			, numberOfPlayers = Number(parseInt(configOL.player_number) || configOL.number);
		if (!numberOfPlayers)
			return;
		if (num < numberOfPlayers) {
			num = numberOfPlayers - num;
			while (num-- > 0) {
				let player = ui.create.player(ui.window);
				player.dataset.position = numberOfPlayers + num - 1;
				player.classList.add('connect');
				game.connectPlayers.push(player);
			};
		} else if (num > numberOfPlayers) {
			num = num - numberOfPlayers;
			for (; num > 0; num--) {
				let current = game.connectPlayers[numberOfPlayers + num - 1];
				if (current) {
					if (current.playerid && current.ws)
						current.ws.send(function () {
							if (game.ws) {
								game.ws.close();
								game.saveConfig('reconnect_info');
							};
						});
					current.remove();
				};
				game.connectPlayers.remove(current);
			};
		};
		game.updateWaiting();
		game.broadcast(function () {
			game.dqzw_updateConnectPlayers();
		});
	};
	return game.connectPlayers;
};
game.dqzw_boss_syncSend = function (func, id, config) {
	if (!game.online)
		return new Promise((_resolve, reject) => setTimeout(reject, 300, 'noline'));
	let request = new Promise((resolve, reject) => {
		setTimeout(() => {
			if (_status.dqzw_boss_request) {
				_status.dqzw_boss_request.resolve = resolve;
				_status.dqzw_boss_request.reject = reject;
			};
			game.send('exec', function (id, func, config) {
				if (lib.playerOL && lib.playerOL[id]) {
					let player = lib.playerOL[id]
						, resolve = val => {
							player.send(function (val) {
								if (_status.dqzw_boss_request)
									_status.dqzw_boss_request.resolve(val);
							}, val);
						}
						, reject = val => {
							player.send(function (val) {
								if (_status.dqzw_boss_request)
									_status.dqzw_boss_request.reject(val);
							}, val);
						};
					func.call(this, config, resolve, reject);
				};
			}, id, func, config);
		}, 100);
	});
	if (!request.id)
		request.id = get.id();
	_status.dqzw_boss_request = request;
	return request;
};
game.dqzw_boss_promisePrompt = function (...args) {
	return new Promise(resolve => game.prompt.apply(this, [...args, resolve]));
};
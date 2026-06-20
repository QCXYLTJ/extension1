import { lib, game, ui, get, ai, _status } from '../../../../noname.js';
// 这里是结算语音qvq!
lib.onover.push(result => {
	// 全部抄飞!
	game.broadcastAll((result, players) => {
		if (game.me.isDead() && result !== false)
			return;
		if (!players.includes(game.me) && result === false)
			result = true;
		if (lib.config.background_speak) {
			let name = game.me.name || game.me.name1
				, name2 = game.me.name2
				, getFilePath = path => {
					let reg = new RegExp("^ext:(.+)?/");
					if (reg.test(path))
						path = path.replace(reg, (_o, p) => `../extension/${p}/`);
					let file = path.split('').reverse().join('').match(/.+?\//)[0];
					if (file.slice(-1)[0] == '/')
						file = file.slice(0, -1);
					file = file.split('').reverse().join('');
					return path.slice(0, -file.length) + getName(file);
				}
				, getName = str => {
					if (str.startsWith('name'))
						str = name + str.slice(4);
					if (str.startsWith('name2'))
						str = (name2 || name) + str.slice(5);
					return str;
				}
				, parsePath = list => {
					if (Array.isArray(list)) {
						let paths = list.filter(item => item.startsWith('$'));
						list = [...list].remove(...paths);
						paths = paths.map(item => item.slice(1));
						return list.map(item => item.startsWith('#')
							&& Number(item[1]) > 0 ?
							paths[Number(item[1])] + item.slice(2)
							: item.startsWith('#') ?
								paths[0] + item.slice(1)
								: item);
					};
					return [list];
				}
				, play = (type, nounite) => {
					let info = game.me.getCharacterTag()[0];
					if (!nounite && name2) {
						// 我们联合!
						// unite:[副将名];[文件路径];[引用武将名]
						if (info.some(tag => /^unite:.*;.*;*.*$/.test(tag))) {
							let tag = info.find(tag => /^unite:.*;.*;*.*$/.test(tag)).split(';')
								, reg = new RegExp("^ext:(.+)?/");
							if (tag[2] && get.characterTag(tag[2], 0)) {
								name2 = name;
								name = tag[2];
								tag = get.characterTag(tag[2])
									.find(tag => /^unite:.*;.*;*.*$/.test(tag)).split(';');
							};
							let unite = tag[0].slice(6)
								, names, list;
							if (unite[0] == '[')
								eval(`names = ${unite}`);
							if (tag[1][0] == '[')
								eval(`list = ${tag[1]}`);
							names = Array.isArray(names) ? names : [unite];
							let result = names.find(item => name2 == item);
							if (result) {
								list = parsePath(list);
								game.playAudio(getFilePath(list[Math.max(0, names.indexOf(result))]));
								return;
							};
							name = game.me.name || game.me.name1;
							name2 = game.me.name2;
						}
						// unite_audio;[副将名];[文件名];[引用武将名]
						else if (info.some(tag => tag.startsWith('unite_audio'))) {
							let tag = info.find(tag => tag.startsWith('unite_audio'))
								, list = tag.split(';');
							if (list[3] && get.characterTag(list[3], 0)) {
								name2 = name;
								name = list[3];
								list = get.characterTag(list[3])
									.find(tag => tag.startsWith('unite_audio')).split(';');
							};
							let unite = list[1]
								, names, files;
							if (unite[0] == '[')
								eval(`names = ${unite}`);
							if (list[2][0] == '[')
								eval(`files = ${list[2]}`);
							names = Array.isArray(names) ? names : [unite];
							let result = names.find(item => name2 == item);
							if (!Array.isArray(files))
								files = [files];
							if (result) {
								game.playAudio('unite', files[Math.max(0, names.indexOf(result))] || name + '_' + name2 + '_unite');
								return;
							};
							name = game.me.name || game.me.name1;
							name2 = game.me.name2;
						};
					};
					// win赢|lose败|tie平:文件路径
					if (info.some(tag => new RegExp(`^${type}:.+$`).test(tag))) {
						let tag = info.find(tag => new RegExp(`^${type}:.+$`).test(tag))
							, match = tag.match(new RegExp(`^${type}:(.+)$`));
						if (match)
							game.playAudio(getFilePath(match[1]));
					}
					else if (info.some(tag => tag.startsWith(type + '_audio'))) {
						let tag = info.find(tag => tag.startsWith(type + '_audio'))
							, list = tag.split(':').slice(1);
						game.playAudio(type, list.length ? getName(list[0]) : name);
					}
					else game.playAudio(type, name, function () {
						game.playAudio(type, name.slice(name.indexOf('_') + 1));
					});
				};
			setTimeout(() => {
				if (result === true)
					play('win');
				if (result === false)
					play('lose');
				else if (!result)
					play('tie');
			}, 2500);
		}
	}, result, game.me.getFriends(true));
});         
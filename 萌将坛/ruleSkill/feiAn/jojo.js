
lib.element.player.scqh_getStand = function (...args) {
	const player = this;
	const map = {};
	for (const argument of args) {
		if (Array.isArray(argument)) {
			for (const temp of argument) {
				if (typeof temp === 'string') map[temp] = true;
			}
		} else if (typeof argument === 'string') {
			map[argument] = true;
		}
	}
	const skills = player.getSkills(null, false, false);
	const list = skills.filter(function (skill) {
		const info = get.info(skill);
		if (!lib.character[skill]) return false;
		if (!info || !info.scqhStand) return false;
		if (typeof info.scqhStand !== 'object') return false;
		for (const type in map) {
			const count = info.scqhStand[type] || 0;
			if (!count || typeof count !== 'number' || count <= 0) return false;
			if (type === '持久性') {
				const storage = player.storage.scqhJojo_持久性 || {};
				const mark = storage[skill] || 0;
				if (mark && typeof mark === 'number' && mark >= count) return false;
			}
		}
		return true;
	});
	return list;
};
lib.element.player.scqh_chooseStand = function (...args) {
	let next = game.createEvent('scqh_chooseStand');
	next.player = this;
	next.stand = {};
	next.standAll = [];
	for (let argument of args) {
		if (argument === true) next.forced = true;
		else if (typeof argument == 'string') {
			if (argument.includes('scqh')) next.standAll.add(argument);
			else next.stand[argument] = true;
		} else if (Array.isArray(argument)) {
			for (let temp of argument) {
				if (typeof temp == 'string') {
					if (temp.includes('scqh')) next.standAll.add(temp);
					else next.stand[temp] = true;
				}
			}
		} else {
		}
	}
	next.setContent('scqh_chooseStand');
	next._args = args;
	return next;
};
lib.element.content.scqh_chooseStand = function () {
	'step 0';
	var stand = [];
	if (event.standAll && event.standAll.length) {
		stand = event.standAll;
	} else {
		var list = [];
		if (event.stand) {
			for (let type in event.stand) list.add(type);
		}
		stand = player.scqh_getStand(list);
	}
	if (stand.length == 1 && event.forced) {
		event._result = {
			bool: true,
			links: stand,
		};
	} else if (stand.length) {
		var next = player.chooseButton();
		if (event.forced) next.set('forced', true);
		next.set('ai', function (button) {
			return true;
		});
		next.set('createDialog', ['选择一个替身', [stand.sort(), 'character']]);
	} else event.finish();
	('step 1');
	event.result = {};
	var name = (result.links || [])[0] || false;
	if (name && get.info(name)) {
		event.result.bool = true;
		event.result.stand = name;
		var stand = get.info(name).scqhStand || {};
		for (let type in stand) {
			event.result[type] = stand[type];
		}
		player.flashAvatar(false, name);
	}
};

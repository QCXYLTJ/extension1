'use strict';
window.scqh = function (lib, game, ui, get, ai, _status) {
	var list = {
		skill: {
			_scqhChooseCard: {
				_priority: -500,
				forced: true,
				trigger: {
					player: ['chooseCardBegin', 'chooseCardTargetBegin'],
				},
				filter(trigger, player) {
					if (!trigger.scqhChooseCard) return false;
					let position = trigger.position || 'h';
					if (typeof position != 'string') position = 'h';
					if (position == 'h') return false;
					let str = '';
					if (position.indexOf('e')) str += 'e';
					if (position.indexOf('j')) str += 'j';
					if (position.indexOf('x')) str += 'x';
					let hs = player.getCards(str);
					if (!hs.length) return false;
					return true;
				},
				content() {
					var position = trigger.position || 'h';
					if (typeof position != 'string') position = 'h';
					if (position.indexOf('e')) str += 'e';
					if (position.indexOf('j')) str += 'j';
					if (position.indexOf('x')) str += 'x';
				},
				init(player, name) {
					var xs = player.getCards('ej');
					var ss = player.getCards('s', function (card) {
						return card._cardid && card.hasGaintag(name);
					});
					if (ss.length) {
						var cards2 = [];
						for (var card of ss) {
							var cardx = xs.find((cardx) => cardx.cardid == card._cardid);
							if (cardx) cards2.push(cardx);
						}
						if (cards2.length) xs = xs.filter((card) => !cards2.includes(card));
					}
					var cards = xs.map((card) => {
						var cardx = ui.create.card();
						cardx.init(get.cardInfo(card));
						cardx._cardid = card.cardid;
						cardx.fix();
						cardx.remove();
						cardx.destroyed = true;
						return cardx;
					});
					if (cards.length) player.directgains(cards, null, name);
				},
				onremove(player, name) {
					var ss = player.getCards('s', function (card) {
						return card.hasGaintag(name);
					});
					if (player.isOnline2()) {
						player.send(
							function (cards, player) {
								cards.forEach((card) => card.delete());
								if (player == game.me) ui.updatehl();
							},
							ss,
							player
						);
					}
					ss.forEach((card) => card.delete());
					if (player == game.me) ui.updatehl();
				},
			},
		},
		translate: {},
	};
	for (var i in list.skill) {
		game.addSkill(i, list.skill[i], list.translate[i], list.translate[i + '_info']);
	}
};

'use strict';
window.scqh_import(function (lib, game, ui, get, ai, _status) {
	if (!lib.qhlypkg) {
		lib.qhlypkg = [];
	}
	if (!lib.qhly_groupimage) {
		lib.qhly_groupimage = {};
	}
	if (!lib.qhly_groupcolor) {
		lib.qhly_groupcolor = {};
	}
	lib.qhly_groupcolor.han = '#68228B';
	lib.qhly_groupcolor.western = '#9400D3';
	var taici = {};
	lib.qhlypkg.push({
		isExt: true,
		filterCharacter: function (name) {
			return lib.characterPack.mode_extension_萌将坛 && lib.characterPack.mode_extension_萌将坛[name];
		},
		characterNameTranslate: function (name) {
			return get.translation(name);
		},
		characterTaici: function (name) {
			return taici[name];
		},
		originSkinInfo: function (name) {
			var info = {
			};
			return info[name];
		},
		characterInfo: function (name) { },
		prefix: 'extension/千鹤/',
		isLutou: lib.config.yjLutou,
		skin: {
			standard: 'extension/萌将坛/skin/image/',
			lutou: 'extension/萌将坛/skin/lutou/',
		},
		skininfo: {
			千鹤pcr_克莉丝提娜1: {
				order: 1,
				translation: 'P站插画',
			},
		},
		forbidEditTaici: true,
		skillSkin: function (name, skin, skill) {
			var extSkin = {
				千鹤pcr_克莉丝提娜: {
					___origin: {
						千鹤pcr_克莉丝提娜: 1,
						千鹤pcr_克莉丝提娜: 'extension/萌将坛/千鹤pcr_克莉丝提娜.jpg',
					},
					'千鹤pcr_克莉丝提娜1.jpg': {
						千鹤pcr_克莉丝提娜: 'extension/萌将坛/skin/image/千鹤pcr_克莉丝提娜1.jpg',
					},
				},
			};
			var info = extSkin[name];
			if (info) {
				var info2 = info[skin ? skin : '___origin'];
				if (info2) {
					return info2[skill];
				}
			}
			return undefined;
		},
	});
});

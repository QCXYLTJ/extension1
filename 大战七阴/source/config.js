import { lib, game, ui, get, ai, _status } from '../../../noname.js';
export const config = {
	setPool: {
		clear: true,
		name: '<span style="text-decoration: underline;">点击选择自定义将池内容<span>',
		intro: '自定义将池内容',
		onclick() {
			const dialog = ui.create.dialog('目前自定义将池包含的武将:');
			dialog.add([lib.devil_characters.all_devil_list, 'character']);
			dialog.buttons.forEach((button) => {
				if (lib.config.custom_banned_characters.has(button.link)) {
					button.classList.add('custom_banned');
				}
				button.onclick = () => {
					if (lib.config.custom_banned_characters.has(button.link)) {
						lib.config.custom_banned_characters.delete(button.link);
						button.classList.remove('custom_banned');
					} else {
						lib.config.custom_banned_characters.add(button.link);
						button.classList.add('custom_banned');
					}
					game.saveConfig('custom_banned_characters', lib.config.custom_banned_characters);
				};
			});
			ui.update();
		},
	},
};
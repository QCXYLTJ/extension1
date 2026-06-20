import { lib, game, ui, get, ai, _status } from '../../../../../noname.js';
lib.skill.dqzw_connect_free_choose = {
	trigger: {
		global: 'chooseButtonBegin'
	},
	filter(event, player) {
		return _status.connectMode
			// 不是联机模式的话不发动
			&& event.player
			&& (event.player == game.me
				|| event.player.isOnline()
			)
			// 不是在线玩家的话不管他
			&& event.getParent('chooseCharacter')
				.name == 'chooseCharacter';
		// 开局选将事件名大多都是这个(	                  
	},
	lastDo: true,
	charlotte: true, // 不清楚全局技能
	forced: true, // 会不会被封(
	silent: true,
	forceDie: true, // 虽然应该不会先死再选将但还是加下)
	forceOut: true, // 修整好像选不了捏)
	content() {
		game.broadcastAll(function (me) {
			if (!_status.done)
				_status.done = false
			let count = 0
				, create = function (timeout) {
					let event = _status.event
						|| {}
						, trigger = event._trigger;
					if (trigger
						&& /^chooseButton(OL)?$/
							.test(trigger.name)
					) event = trigger;
					if (/^chooseButton(OL)?$/
						.test(event.name)
						&& !event.onfree
						&& event.player == game.me
					) {
						_status.done = true;
						event.onfree = true;
						event.closeDialog = true;
						// 选完之后关闭对话框	        
						if (lib.onfree)
							lib.onfree.push(func);
						else func();
						let next = game.createEvent(
							'connect_free_choose_button_close',
							false,
							event
						)
							, originalFilter = event.filterButton;
						event.filterButton = function (...args) {
							if (_status.event.free_choose)
								return true;
							/* 自由选将时,不管怎样都可以选
							 * 防止选不了(
							 */
							return originalFilter.apply(this, args);
						};
						event.next.remove(next);
						event.after.push(next);
						next.setContent(function () {
							// 选完之后移除自由选将按钮
							if (ui.cheat2)
								ui.cheat2.remove();
							delete _status.done;
						});
						ui.create.cheat2 = function () {
							ui.cheat2 = ui.create.control(
								// 创建自由选将的按钮
								'自由选将',
								function () {
									ui.selected.buttons.forEach(button => {
										ui.click.button.call(button);
										// 取消选择已选择的将
									});
									if (this.dialog == event.dialog) {
										this.dialog.close();
										event.dialog = this.backup;
										event.free_choose = false;
										this.backup.open();
										delete this.backup;
										game.uncheck();
										game.check();
										// 关闭自由选将      								
									}
									else {
										this.backup = event.dialog;
										event.dialog.close();
										// 关闭原对话框
										event.free_choose = true;
										event.dialog = event.dialogxx;
										this.dialog = event.dialog;
										this.dialog.open();
										game.uncheck();
										game.check();
									};
								}
							);
							if (lib.onfree)
								ui.cheat2.classList.add('disabled');
						};
						if (!ui.cheat2)
							ui.create.cheat2();
						// 没有自由选将按钮的话就创建
						function func() {
							let list = get.charactersOL();
							// 获取联机可选武将
							event.dialogxx =
								ui.create.characterDialog(
									'heightset',
									function (name) {
										return !list.includes(name);
										// 屏蔽联机不能选的将
									}
								);
							// 点击自由选将按钮后弹出的对话框
							if (ui.cheat2) {
								ui.cheat2.addTempClass(
									'controlpressdownx',
									500
								);
								// 应该是个动画,不道
								ui.cheat2.classList.remove(
									'disabled'
								);
								/* 如果有自由选将按钮
								 * 就让它可以点击(清除CSS类名)
								 */
							};
						};
					};
				};
			setTimeout(
				function loop() {
					if (_status.done)
						return;
					create(true);
					if (game.ws && game.ws.onChooseButton)
						game.ws.removeEventListener(
							'message',
							game.ws.onChooseButton
						);
					if (!_status.done && count++ < 4)
						setTimeout(
							loop,
							2500
						);
				},
				2000
			);
			if (game.me != me)
				if (game.ws && !game.ws.onChooseButton) {
					// 监听信息接收事件
					game.ws.addEventListener(
						'message',
						onChooseButton
					);
					game.ws.onChooseButton = onChooseButton;
					function onChooseButton(e) {
						let message;
						message = JSON.parse(
							e.data
						);
						if (message[0] == 'exec'
							&& message[1].includes(
								'game.me.chooseButton'
							)
						) {
							// 收到含有'game.me.chooseButton'的信息时创建按钮
							create();
							if (_status.done)
								this.removeEventListener(
									'message',
									onChooseButton
								);
						};
					}
				}
			create();
		}, game.me);
	}
};
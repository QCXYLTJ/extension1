jiaru: {
	name: '<div class="ysbl">「点击」欢迎加群<font size="5px" color="cyan">➫➫➫</font></div>',
		clear: true,
			onclick() {
		if (this.jiaru == undefined) {
			var more = ui.create.div('.jiaru', '<div style="border:2px solid gray"><span><img src="extension/随笔录/sucai/群号.jpg" width="200" height="220"></span>');
			this.parentNode.insertBefore(more, this.nextSibling);
			this.jiaru = more;
			this.innerHTML = '<div class="ysbl">「查看」欢迎加群<font size="5px">➬➬➬</font></div>';
		} else {
			this.parentNode.removeChild(this.jiaru);
			delete this.jiaru;
			this.innerHTML = '<div class="ysbl">「点击」欢迎加群<font size="5px">➫➫➫</font></div>';
		};
	}
},
yshichongjieshao: {
	name: '<div class="ysbl">「点击」关于桌宠<font size="5px" color="cyan">➫➫➫</font></div>',
		clear: true,
			onclick() {
		if (this.yshichongjieshao == undefined) {
			var more = ui.create.div('.yshichongjieshao', '<div style="border:4px solid gray"><span style="color:cyan">桌宠是本扩展的一个桌面贴纸,点击以后具有播放歌曲的功能(虽然第一首歌是固定的,第一次点击会有一个预加载).如果想要修改点击后播放的歌曲,可以前往文件夹位置"extension/随笔录/桌宠专用音乐库"自行导入自己喜爱的音乐.相关设置也可以自行进行修改.按钮的部分功能借鉴了<后宫>扩展的代码,对此表示感谢～</span>');
			this.parentNode.insertBefore(more, this.nextSibling);
			this.yshichongjieshao = more;
			this.innerHTML = '<div class="ysbl">「查看」关于桌宠<font size="5px">➬➬➬</font></div>';
		} else {
			this.parentNode.removeChild(this.yshichongjieshao);
			delete this.yshichongjieshao;
			this.innerHTML = '<div class="ysbl">「点击」关于桌宠<font size="5px">➫➫➫</font></div>';
		};
	}
},
ybiaohongjieshao: {
	name: '<div class="ysbl">「点击」标红角色<font size="5px" color="red">➫➫➫</font></div>',
		clear: true,
			onclick() {
		if (this.ybiaohongjieshao == undefined) {
			var more = ui.create.div('.ybiaohongjieshao', '<div style="border:4px solid gray"><span style="color:red">被标红的角色由于版本更迭,可能在不同的版本技能体现出来了不同的效果,或者出现了技能失效,暂时作者想不出处理方法,这里深表歉意</span>');
			this.parentNode.insertBefore(more, this.nextSibling);
			this.ybiaohongjieshao = more;
			this.innerHTML = '<div class="ysbl">「查看」标红角色<font size="5px">➬➬➬</font></div>';
		} else {
			this.parentNode.removeChild(this.ybiaohongjieshao);
			delete this.ybiaohongjieshao;
			this.innerHTML = '<div class="ysbl">「点击」标红角色<font size="5px">➫➫➫</font></div>';
		};
	}
},
yzuochongshezhit: {
	name: "<b><li>桌宠设置:</b>",
		clear: true,
	},
'extYsblsc_setBtnSize': {
	name: "<span style='color:lightblue;'>设置桌宠大小(可以填小数,0.001可视为关闭)</span>",
		intro: '支持小数',
			input: true,
				init: '2',
					onblur(event) {
		let target = event.target;
		let size = Number(target.innerText);
		if (isNaN(size)) {
			target.innerText = '2';
		} else {
			let ysblscBtn = document.body.querySelector('#ysblscBtn');
			ysblscBtn.style.width = Math.round(parseFloat(size) * 56) + 'px';
			ysblscBtn.style.height = Math.round(parseFloat(size) * 56) + 'px';
			game.saveConfig('extension_随笔录_extYsblsc_setBtnSize', size);
		}
	}
},
'extYsblsc_enableBtnDrag': {
	name: "<span style='color:lightblue;'>启用桌宠拖拽(重启后生效)</span>",
		intro: '开启后,可拖拽按钮调整位置(重启后生效并刷新以下两项的数据)',
			init: true,
            },
'extYsblsc_setBtnPosX': {
	name: "<span style='color:lightblue;'>设置桌宠左边距位置</span>",
		intro: '初始值800px',
			input: true,
				init: '800',
					onblur(event) {
		let target = event.target;
		let x = Number(target.innerText);
		if (isNaN(x)) {
			target.innerText = '800';
		} else {
			let ysblscBtn = document.body.querySelector('#ysblscBtn');
			ysblscBtn.style.left = x + 'px';
			game.saveConfig('extension_随笔录_extYsblsc_setBtnPosX', x);
		}
	}
},
'extYsblsc_setBtnPosY': {
	name: "<span style='color:lightblue;'>设置桌宠上边距位置</span>",
		intro: '初始值300px',
			input: true,
				init: '300',
					onblur(event) {
		let target = event.target;
		let y = Number(target.innerText);
		if (isNaN(y)) {
			target.innerText = '300';
		} else {
			let ysblscBtn = document.body.querySelector('#ysblscBtn');
			ysblscBtn.style.top = y + 'px';
			game.saveConfig('extension_随笔录_extYsblsc_setBtnPosY', y);
		}
	}
},
ygaintttt: {
	name: "<span style='color:lightblue;'>点击桌宠获得三张随机扩展牌</span>",
		init: "1",
			intro: "获得牌",
				"item": {
		"1": "关闭",
			"2": "开启",
		},
},
yhuanhuazhiwutt: {
	name: "<span style='color:lightblue;'>点击桌宠装备幻化之武(小概率报错)</span>",
		init: "1",
			intro: "装备牌",
				"item": {
		"1": "关闭",
			"2": "开启",
		},
},
'extYsblsc_resetBtnPos': {
	name: "<span style='color:lightblue;'>重置桌宠大小和位置</span>",
		clear: true,
			onclick() {
		if (confirm('确定要重置桌宠吗？')) {
			game.saveConfig('extension_随笔录_extYsblsc_setBtnSize', 2);
			game.saveConfig('extension_随笔录_extYsblsc_setBtnPosX', null);
			game.saveConfig('extension_随笔录_extYsblsc_setBtnPosY', null);
			let ysblscBtn = document.body.querySelector('#ysblscBtn');
			ysblscBtn.style.width = '112px';
			ysblscBtn.style.height = '112px';
			ysblscBtn.style.left = '800px';
			ysblscBtn.style.top = '300px';
		}
	}
},
ygongnengqut: {
	name: "<b><li>功能区:</b>",
		clear: true,
	},
y_zhenglitt: {
	name: "<span style='color:orange;'>自动整理手牌(重启后生效)</span>",
		init: "false",
			intro: "将手牌进行自动整理",  
              },
ysblgfsl: {
	name: "<span style='color:orange;'>保留官方势力</span>",
		init: false,
			intro: '游戏角色的势力限制为神、魏、蜀、吴、群、晋',
            },
ykamiantexiao: {
	name: "<span style='color:orange;'>切换扩展卡面特效</span>",
		init: "1",
			intro: "本扩展卡牌在游戏开始后卡面的特效",
				"item": {
		"1": "萤火",
			"2": "樱花",
				"3": "关闭",
		},
},
ycharukapai: {
	name: "<span style='color:orange;'>游戏开始时,在牌堆随机插入扩展卡牌</span>",
		init: "4",
			intro: "每次游戏时插入的牌都不一样",
				"item": {
		"1": "插入30%",
			"2": "插入40%",
				"3": "插入50%",
					"4": "关闭",
		},
},
ykongzhit: {
	name: "<b><li>控制台:</b>",
		clear: true,
	},
yhuihet: {
	name: "<span style='text-decoration: underline;color:lightskyblue;'>获得一个额外的回合</span>",
		clear: true,
			onclick() {
		game.me.phase('nodelay');
		ui.click.configMenu();
		alert('成功获得一个额外回合(于此回合结束后)');
	},
},
ysupfengt: {
	name: "<span style='text-decoration: underline;color:lightskyblue;'>封印其他角色技能</span>",
		clear: true,
			onclick() {
		for (var i = 0; i < game.players.length; i++) {
			game.players[i].addSkill('ysupfeng');
		}
		game.me.removeSkill('ysupfeng');
		ui.click.configMenu();
		alert('尊敬的主人,已封印其他角色技能');
	},
},
yjineng: {
	name: "<span style='text-decoration: underline;color:lightskyblue;'>随机获得5个技能</span>",
		clear: true,
			onclick() {
		var list = get.gainableSkills();
		var listb = list.randomGets(5);
		if (!list.length) {
			event.finish();
			return;
		}
		var n = 0;
		while (n < 6) {
			game.me.addSkill(listb[n]);
			n++;
		}
		ui.click.configMenu();
		alert('已获得随机的技能');
	},
},
ydiscardt: {
	name: "<span style='text-decoration: underline;color:lightskyblue;'>所有角色弃牌</span>",
		clear: true,
			onclick() {
		for (var i = 0; i < game.players.length; i++) {
			game.players[i].chooseToDiscard(Infinity, 'hesj', true);
		}
		ui.click.configMenu();
		alert('回到原始时代');
	},
},
ydraw: {
	name: "<span style='text-decoration: underline;color:lightskyblue;'>摸20张牌</span>",
		clear: true,
			onclick() {
		game.me.draw(20);
		ui.click.configMenu();
		alert('尊敬的主人,已摸20张牌');
	},
},
yxiuxianqut: {
	name: "<b><li>休闲区:</b>",
		clear: true,
	},
ydongman: {
	"name": "<span style='text-decoration: underline;color:lightgreen;'>随机动漫图片(图片较大界面可滑动)</span>",
		"clear": true,
			"onclick"() {
		//   ui.click.configMenu();
		window.open('https://api.lyiqk.cn/acg');
	},
},
yyuanshen: {
	"name": "<span style='text-decoration: underline;color:lightgreen;'>原神下载官网</span>",
		"clear": true,
			"onclick"() {
		ui.click.configMenu();
		window.open('https://ys.mihoyo.com/?from_channel=adbdpz&utm_source=adbdpz');
	},
},
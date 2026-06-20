//game.import(name: "活动萌扩",
import { lib, game, ui, get, ai, _status } from '../../noname.js';
import { config } from './js/config.js';
import { precontent } from './js/precontent.js';
import { content } from './js/content/index.js';
import { help } from './js/help.js';
lib.init.css('extension/活动萌扩', 'extension');
export let type = 'extension';
export default function () {
	return {
		name: '活动萌扩',
		arenaReady() {
			//十周年斗地主初加载
			if (lib.config.extension_活动萌扩_decade_Coin_game) {
				var num = lib.config.extension_活动萌扩_decade_Coin_Gaming + 10;
				game.bolSay('您于上一场斗地主逃跑了，失去' + num + '萌币');
				game.saveConfig('extension_活动萌扩_decade_Coin_game', null);
				game.saveConfig('extension_活动萌扩_decade_Coin', lib.config.extension_活动萌扩_decade_Coin - num);
			}
			if (!lib.config.extension_活动萌扩_decade_Coin || lib.config.extension_活动萌扩_decade_Coin == 'NaN') {
				game.saveConfig('extension_活动萌扩_decade_Coin', 1000);
				var date = new Date();
				var time = {
					year: date.getFullYear(),
					month: date.getMonth() + 1,
					day: date.getDate(),
				};
				game.saveConfig('extension_活动萌扩_decade_Coin_Time', time);
				game.bolSay('非常感谢对《活动萌扩》扩展的支持，安装本扩展后第一次进入无名杀获得1000萌币，可以在无名杀乱斗页面的新斗地主模式使用');
			} else {
				var date = new Date();
				var time = {
					year: date.getFullYear(),
					month: date.getMonth() + 1,
					day: date.getDate(),
				};
				var timex = lib.config.extension_活动萌扩_decade_Coin_Time;
				if (!timex || time.year != timex.year || time.month != timex.month || time.day != timex.day) {
					game.saveConfig('extension_活动萌扩_decade_Coin', lib.config.extension_活动萌扩_decade_Coin + 300);
					game.saveConfig('extension_活动萌扩_decade_Coin_Time', time);
					game.bolSay('每日进入无名杀获得300萌币，可以在无名杀乱斗页面的新斗地主模式使用');
				}
			}
			if (lib.config.extension_活动萌扩_DDZname && lib.config.extension_活动萌扩_decade_Coin < 500) {
				game.saveConfig('extension_活动萌扩_DDZname', false);
				game.bolSay('您的萌币已经不足500，已为您自动关闭新服斗地主特定将池使用');
			}
		},
		content: content,
		precontent: precontent,
		config: config,
		help: help,
		package: {
			intro: `<br><br><span style="color: gold">潜水的火修复版<br>『无名杀扩展大全群』:771901025</span><br><br>本扩展模式均在乱斗模式中<br>活动武将分离系列之一，旨在补充部分活动场<br>当前萌币：${lib.config.extension_活动萌扩_decade_Coin}<a href="https://github.com/mengxinzxz/MengKuo-update">点击前往活动萌扩Github仓库</a><br>感谢大家对活动萌扩的支持！`,
			author: '萌新（转型中）',
			version: '0.2.1.1',
			//新人制作扩展，希望大家支持。
			//新人技术不足，希望大家包涵。
			//壹、贰、叁、肆、伍、陆、柒、捌、玖、拾
		},
	};
}; 

//game.import( name:"PS武将"
import { VERSION } from './extension/version.js';
import { lib, game, ui, get, ai, _status } from '../../noname.js';
import { CONFIG } from './extension/config.js';
import { CONTENT } from './extension/content.js';
import { PRECONTENT } from './extension/precontent.js';
window.PScharacter = {
	updateHistory: {},
	deepClone(obj) {
		return new Promise((resolve) => {
			const { port1, port2 } = new MessageChannel();
			port1.postMessage(obj);
			port2.onmessage = (msg) => {
				resolve(msg.data);
			}
		});
	},//let obj2; -> deepClone(obj).then(i => obj2 = i);
	characters: [],
};
lib.init.css('extension/PS武将/css', "extension");//调用css样式
export let type = 'extension';
export default function () {
	return {
		name: "PS武将",
		content: CONTENT,
		precontent: PRECONTENT,
		config: CONFIG,
		package: {
			intro: "<br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
			author: '九个芒果',
			version: VERSION,
		},
	};
};

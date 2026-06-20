import { lib, game, ui, get, ai, _status } from '../../../noname.js';
export async function content(config, pack) {
	/*十周年适配*/
	let tenUi = document.createElement('style');
	tenUi.innerHTML += ".player>.camp-wrap[data-camp='bleach_xian']>.camp-back {background: linear-gradient(to bottom, rgb(255,128,0), rgb(255,128,0));}";
	tenUi.innerHTML += ".player>.camp-wrap[data-camp='bleach_shi']>.camp-back {background: linear-gradient(to bottom, rgb(0,0,0), rgb(0,0,0));}";
	tenUi.innerHTML += ".player>.camp-wrap[data-camp='bleach_xu']>.camp-back {background: linear-gradient(to bottom, rgb(155,155,155), rgb(155,155,155));}";
	tenUi.innerHTML += ".player>.camp-wrap[data-camp='bleach_wu']>.camp-back {background: linear-gradient(to bottom, rgb(193,210,240), rgb(193,210,240));}";
	tenUi.innerHTML += ".player>.camp-wrap[data-camp='bleach_yu']>.camp-back {background: linear-gradient(to bottom, rgb(255,215,0), rgb(255,215,0));}";
	tenUi.innerHTML += ".player>.camp-wrap[data-camp='bleach_shi']>.camp-name {text-shadow: 0 0 5px rgb(0,0,0), 0 0 10px rgb(0,0,0), 0 0 15px rgb(0,0,0);}";
	tenUi.innerHTML += ".player>.camp-wrap[data-camp='bleach_xu']>.camp-name {text-shadow: 0 0 5px rgb(255,255,255), 0 0 10px rgb(255,255,255), 0 0 15px rgb(255,255,255);}";
	tenUi.innerHTML += ".player>.camp-wrap[data-camp='bleach_wu']>.camp-name {text-shadow: 0 0 5px rgb(193,210,240), 0 0 10px rgb(193,210,240), 0 0 15px rgb(193,210,240);}";
	tenUi.innerHTML += ".player>.camp-wrap[data-camp='bleach_xian']>.camp-name {text-shadow: 0 0 5px rgb(255,128,0), 0 0 10px rgb(255,128,0), 0 0 15px rgb(255,128,0);}";
	tenUi.innerHTML += ".player>.camp-wrap[data-camp='bleach_yu']>.camp-name {text-shadow: 0 0 5px rgb(255,215,0), 0 0 10px rgb(255,215,0), 0 0 15px rgb(255,215,0);}";
	document.head.appendChild(tenUi);
}
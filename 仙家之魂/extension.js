import { lib, get, _status, ui, game, ai } from '../../noname.js';
import { content, precontent, config } from './ext/modules/index.js';
import(`./character.js`);
export let type = 'extension';
export default async function () {
	const extensionInfo = await lib.init.promises.json(`extension/仙家之魂/info.json`);
	let extension = {
		name: '仙家之魂',
		content: content,
		precontent: precontent,
		config: config,
		package: extensionInfo,
	};
	return extension;
}

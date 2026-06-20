import { lib, game, ui, get, ai, _status } from '../../noname.js';
import { content } from './source/content.js';
import { precontent } from './source/precontent.js';
import { config } from './source/config.js';
export let type = 'extension';
export default async function () {
	const extensionInfo = await lib.init.promises.json(`extension/大战七阴/info.json`);
	const extension = {
		name: extensionInfo.name,
		content: content,
		precontent: precontent,
		config: config,
		package: extensionInfo,
	};
	return extension;
};

import { lib, game, ui, get, ai, _status } from '../../noname.js';
import { content } from './source/content.js';
import { precontent } from './source/precontent.js';
import { config } from './source/config.js';
import('./mode/library.js');
import('./mode/stg.js');
import('./mode/old_identity.js');
export let type = 'extension';
export default async function () {
    const extensionInfo = await lib.init.promises.json(`extension/东方project/info.json`);
    const extension = {
        name: '东方project',
        content: content,
        precontent: precontent,
        config: config,
        package: extensionInfo,
    };
    return extension;
}

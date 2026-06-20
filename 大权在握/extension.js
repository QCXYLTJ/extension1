import { lib, game, ui, get, ai, _status } from '../../noname.js'
import { precontent } from './source/precontent.js'
import { content } from './source/content.js'
import config from './source/config.js'
import help from './source/help.js'
export let type = 'extension';
export default async function () {
    const extensionInfo = await lib.init.promises.json(`extension/大权在握/info.json`);
    let extensionPackage = {
        name: '大权在握',
        content,
        precontent,
        config,
        help,
        package: extensionInfo,
    };
    return extensionPackage;
}

import { lib, game, ui, get, ai, _status } from '../../noname.js'
import { precontent } from './main/precontent.js'
export let type = 'extension';
export default async function () {
    const extensionInfo = await lib.init.promises.json(`extension/魔王二代包/info.json`);
    let extension = {
        name: '魔王二代包',
        precontent: precontent,
        package: extensionInfo,
    };
    return extension;
}

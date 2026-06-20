//game.import(name: "群星荟萃",
import { lib, game, ui, get, ai, _status } from '../../noname.js';
import { precontent } from './js/precontent.js';
import { content } from './js/content.js';
import { help } from './js/help.js';
lib.init.css('extension/群星荟萃', 'extension');
const extensionInfo = await lib.init.promises.json(`extension/群星荟萃/info.json`);
export const type = 'extension';
export default async function () {
    return {
        name: '群星荟萃',
        content: content,
        precontent: precontent,
        help: help,
        package: extensionInfo,
    };
};
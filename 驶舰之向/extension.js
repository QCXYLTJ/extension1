'use strict';
import { lib, game, ui, get, ai, _status } from '../../noname.js';
import { CONFIG } from './extension/config.js';
import { CONTENT } from './extension/content.js';
import { PRECONTENT } from './extension/precontent.js';
const extensionInfo = await lib.init.promises.json(`extension/驶舰之向/info.json`);
export let type = 'extension';
export default function () {
    return {
        name: '驶舰之向',
        content: CONTENT,
        precontent: PRECONTENT,
        config: CONFIG,
        package: extensionInfo,
    };
};
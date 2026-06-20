import config from './configFile.js'
import { lib, game, ui, get, ai, _status } from '../../../../noname.js'
import ironBlade from '../mode/ironBlade.js'
import { config as ironBladeConfig } from '../mode/ironBlade.js'
export async function precontent() {
    let extensionPath = 'extension/狂澜异世/'
    lib.init.css(extensionPath + `css`, 'crazyWorld')
    lib.init.css(extensionPath + `css`, 'crazyDoctor')
    lib.init.css(extensionPath + `css`, 'crazyCaochong')
    Promise.all(
        config.scriptPaths.map(path => import('../' + path)),
        // game.addMode("ironBlade", ironBlade, ironBladeConfig)
    ).then(modules => { }).catch(error => {
        console.warn(error.message);
    });
    // lib.mode.ironBlade.splash = 'ext:狂澜异世/image/mode/ironBlade.jpg'
}
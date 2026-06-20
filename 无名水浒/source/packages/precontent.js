import config from './configFile.js'
import { lib, game, ui, get, ai, _status } from '../../../../noname.js'
export async function precontent() {
    Promise.all(
        config.scriptPaths.map(path => import('../' + path))
    ).then(modules => {
        console.log('Welcome to Water Margin!')
    }).catch(error => {
        console.warn(error.message);
    });
}
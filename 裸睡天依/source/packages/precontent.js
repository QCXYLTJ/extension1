import { lib, game, ui, get, ai, _status } from '../../../../noname.js';
export async function precontent() {
    const scriptPaths = ['main/character.js', 'main/card.js'];
    Promise.all(scriptPaths.map((path) => import('../' + path)))
        .then((modules) => { })
        .catch((error) => {
            alert('error ' + error + '导入失败 !');
            console.warn(error.message);
        });
}

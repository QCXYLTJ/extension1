import { lib, game, ui, get, ai, _status } from '../../../noname.js';
export function content(config, pack) {
  //评级补充
  lib.rank?.rarity.legend.addArray(Object.keys(lib.characterPack.qx_characterPack));
  lib.rank?.rarity.legend.addArray(Object.keys(lib.characterPack.qg_characterPack));
}

import { lib, game, ui, get, ai, _status } from '../../../../noname.js';
const characterFilters = {
  Europa_tuotuomishi(mode) {
    return mode == 'identity' && _status.mode == 'normal';
  }
};
const characterInitFilters = {};
export { characterFilters, characterInitFilters };
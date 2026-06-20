import { lib, game, ui, get, ai, _status, rootURL } from '../../../../../noname.js';
class checks {
  checkChangeFunc = (...args) => {
    let result, str;
    for (let arg of args) {
      if (typeof arg === 'string') str = arg;else
      if (typeof arg === 'function') result = arg;
    }
    if (!result || !str) return;
    result = get.xjzh_calculateHash(result);
    if (result === str) return true;
    return false;
  };
};
const checkChange = new checks();
export default checkChange;
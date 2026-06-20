import { lib, game, ui, get, ai, _status } from '../../../../../../noname.js';
let originalModetrans = get.modetrans;
get.configOL = (name, mode) => {
  return lib.configOL && lib.configOL[name] !== undefined
    ? lib.configOL[name] : get.config(name, mode);
};
get.modetrans = (...args) => {
  let result = originalModetrans.apply(get, args);
  if (game.getModetrans) {
    let newResult = game.getModetrans.apply(get, args);
    if (newResult)
      return newResult;
  };
  return result;
}; 
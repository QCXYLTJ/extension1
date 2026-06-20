import { lib, game, ui, get, ai, _status } from "../../../../noname.js";
const dynamicTranslate = {
  Europa_tno_guijinshuchukou(player) {
    return [
    '锁定技，结束阶段，你的手牌上限-1，并摸X张牌（X为你的体力值-当前手牌上限）。',
    '结束阶段，你可以令你的手牌上限-1，并摸X张牌（X为你的体力值-当前手牌上限）。'][
    player.storage.Europa_tno_guijinshuchukou ? 1 : 0];
  }
};
export default dynamicTranslate;
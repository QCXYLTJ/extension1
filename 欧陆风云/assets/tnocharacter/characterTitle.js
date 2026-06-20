import { lib, game, ui, get, ai, _status } from '../../../../noname.js';
import characters from "./character.js";
const characterTitleList = {
};
const characterTitles = {};
Object.keys(characters).forEach((key) => characterTitles[key] = characters[key][4].
filter((item) => item.startsWith('clan:')).
map((clan) => clan.slice(5)).join("，"));
export default characterTitles;
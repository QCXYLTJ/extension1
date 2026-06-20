import { lib, game, ui, get, ai, _status } from '../../../../noname.js'
import Player from "./element/player.js";
import Content from "./element/content.js";
import { dialog } from "./element/dialog.js";
import Skills from "./skill.js";
import GlobalSkills from "./globalSkill.js";
import SwitchSkills from "./switchSkill.js";
import Translates from "./translate.js";
import { remake } from "./remake.js";
import { remaster } from "./remaster.js";
Object.assign(lib.element.player, Player);
Object.assign(lib.element.content, Content);
Object.assign(lib.skill, Skills);
Object.assign(lib.skill, GlobalSkills);
for (const skill in GlobalSkills) {
    game.addGlobalSkill(skill);
}
Object.assign(lib.skill, SwitchSkills);
Object.assign(lib.translate, Translates);
dialog();
remake();
remaster();
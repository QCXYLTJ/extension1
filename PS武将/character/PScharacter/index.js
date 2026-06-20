import { lib, game, ui, get, ai, _status } from '../../extension/noname.js';
import { characterSort, sortTranslation } from './sort.js';
import character from './character.js';
import characterIntro from './characterIntro.js';
import characterReplace from './characterReplace.js';
import characterFilter from './characterFilter.js';
import characterSubstitute from './characterSubstitute.js';
import skill from './skill.js';
import { characterTranslation, skillTranslation } from './translate.js';
import voices from './voices.js';
import dynamicTranslate from './dynamicTranslate.js';
'use strict';
game.import('character', function (lib, game, ui, get, ai, _status) {
  var PScharacter = {
    name: 'PScharacter',
    connect: true,
    characterSort,
    character,
    characterIntro, //武将介绍
    characterTitle: {}, //武将称号
    characterReplace, //武将切换
    characterFilter, //武将在特定模式下禁用
    characterSubstitute, //武将替换
    perfectPair: {}, //珠联璧合
    card: {},
    skill,
    translate: { ...sortTranslation, ...characterTranslation, ...skillTranslation, ...voices },
    dynamicTranslate
  };
  Object.keys(PScharacter.character).forEach((i) => {
    window.PScharacter.characters.push(i);
    const character = PScharacter.character[i];
    character.trashBin.push(`ext:PS武将/image/character/${i}.jpg`);
    if (!character.dieAudios.length) {
      character.dieAudios.push(i.replace('PS', ''));
    }
    if (i.includes('PS') && !PScharacter.translate[i + '_prefix']) {
      lib.translate[i + '_prefix'] = i.includes('PSshen_') ? 'PS神' : 'PS';
    }
  });
  lib.config.characters.add('PScharacter');
  lib.config.all.characters.add('PScharacter');
  lib.translate['PScharacter_character_config'] = 'PS武将';
  return PScharacter;
});
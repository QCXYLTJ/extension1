import { lib, game, ui, get, ai, _status } from '../../../../noname.js';
import characters from './character.js';
import cards from './card.js';
import skills from './skill.js';
import translates from './translate.js';
import characterIntros from './intro.js';
import characterFilters from './characterFilter.js';
import characterTitles from './characterTitle.js';
import characterReplaces from './characterReplace.js';
import dynamicTranslates from './dynamicTranslate.js';
import voices from './voices.js';
import { characterSort, characterSortTranslate } from './sort.js';
game.import('character', function () {
  const HoK = {
    name: 'HoK',
    connect: true,
    character: { ...characters },
    characterSort: {
      HoK: characterSort
    },
    characterFilter: { ...characterFilters },
    characterTitle: { ...characterTitles },
    dynamicTranslate: { ...dynamicTranslates },
    characterIntro: { ...characterIntros },
    characterReplace: { ...characterReplaces },
    card: { ...cards },
    skill: { ...skills },
    translate: { ...translates, ...voices, ...characterSortTranslate }
  };
  for (let i in HoK.character) {
    HoK.character[i].trashBin.push(`ext:王者荣耀/image/standard/${i}.jpg`);
  }
  lib.config.characters.add('HoK');
  lib.config.all.characters.add('HoK');
  lib.translate.HoK_character_config = '<img style=height:25px src="extension/王者荣耀/image/logo/logo.png">';
  return HoK;
});
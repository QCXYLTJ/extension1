import { lib, game, ui, get, ai, _status } from '../../../../noname.js';
import characters from './character.js';
import cards from './card.js';
import pinyins from './pinyin.js';
import skills from './skill.js';
import translates from './translate.js';
import characterIntros from './intro.js';
import { characterFilters, characterInitFilters } from './characterFilter.js';
import characterTitles from './characterTitle.js';
import characterReplaces from './characterReplace.js';
import dynamicTranslate from './dynamicTranslate.js';
import voices from './voices.js';
import { characterSort, characterSortTranslate } from './sort.js';
game.import('character', function () {
  const EuropaTNO = {
    name: 'EuropaTNO',
    connect: true,
    card: { ...cards },
    character: { ...characters },
    characterSort: {
      EuropaTNO: characterSort
    },
    characterFilter: { ...characterFilters },
    characterTitle: { ...characterTitles },
    dynamicTranslate: { ...dynamicTranslate },
    characterIntro: { ...characterIntros },
    characterReplace: { ...characterReplaces },
    skill: { ...skills },
    translate: { ...translates, ...voices, ...characterSortTranslate },
    pinyins: { ...pinyins }
  };
  const dn = lib.device || lib.node;
  for (let i in EuropaTNO.character) {
    if (!EuropaTNO.character[i][4]) EuropaTNO.character[i][4] = [];
    var initfilter = 'InitFilter:';
    for (var j of EuropaTNO.character[i][4]) {
      if (j.startsWith('clan:')) initfilter += j.slice(5) + '，';
    }
    if (!lib.InitFilter[initfilter.slice(11)]) lib.InitFilter[initfilter.slice(11)] = initfilter.slice(11).slice(0, -1);
    EuropaTNO.character[i][4].push(initfilter);
    EuropaTNO.character[i][4].push((dn ? 'ext:' : 'db:extension-') + '欧陆风云/image/character/' + i + '.jpg');
    if (!EuropaTNO.character[i][4].some((tag) => tag.startsWith('die:'))) EuropaTNO.character[i][4].push('die:ext:欧陆风云/audio/die:true');
  }
  lib.config.characters.add('EuropaTNO');
  lib.config.all.characters.add('EuropaTNO');
  lib.translate.EuropaTNO_character_config = 'TNO';
  return EuropaTNO;
});
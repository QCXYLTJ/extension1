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
import cardSkills from './cardSkills.js';
import cardLists from './cardLists.js';
import cardTranslates from './cardTranslates.js';
game.import('character', function () {
  const EuropaUniversalis = {
    name: 'EuropaUniversalis',
    connect: true,
    character: { ...characters },
    characterSort: {
      EuropaUniversalis: characterSort
    },
    characterFilter: { ...characterFilters },
    characterTitle: { ...characterTitles },
    characterSubstitute: {
      Europa_King_Mukla: [
      ['Europa_King_Mukla_Banana', ['ext:欧陆风云/image/skin/Europa_King_Mukla_Banana.jpg']],
      ['Europa_King_Mukla_KingKong', ['ext:欧陆风云/image/skin/Europa_King_Mukla_KingKong.jpg']]],

      Europa_Kindly_Grandmother: [['Europa_Big_Bad_Wolf', ['ext:欧陆风云/image/skin/Europa_Big_Bad_Wolf.jpg']]]
    },
    dynamicTranslate: { ...dynamicTranslate },
    characterIntro: { ...characterIntros },
    characterReplace: { ...characterReplaces },
    //card: { ...cards },
    skill: { ...skills },
    translate: { ...translates, ...voices, ...characterSortTranslate },
    pinyins: { ...pinyins }
  };
  const dn = lib.device || lib.node;
  for (let i in EuropaUniversalis.character) {
    if (!EuropaUniversalis.character[i][4]) EuropaUniversalis.character[i][4] = [];
    var initfilter = 'InitFilter:';
    for (var j of EuropaUniversalis.character[i][4]) {
      if (j.startsWith('clan:')) initfilter += j.slice(5) + '，';
    }
    if (!lib.InitFilter[initfilter.slice(11)]) lib.InitFilter[initfilter.slice(11)] = initfilter.slice(11).slice(0, -1);
    EuropaUniversalis.character[i][4].push(initfilter);
    EuropaUniversalis.character[i][4].push((dn ? 'ext:' : 'db:extension-') + '欧陆风云/image/character/' + i + '.jpg');
    if (!EuropaUniversalis.character[i][4].some((tag) => tag.startsWith('die:'))) EuropaUniversalis.character[i][4].push('die:ext:欧陆风云/audio/die:true');
  }
  lib.config.characters.add('EuropaUniversalis');
  lib.config.all.characters.add('EuropaUniversalis');
  lib.translate.EuropaUniversalis_character_config = '欧陆风云';
  return EuropaUniversalis;
});
game.import('card', function () {
  const EuropaUniversalis = {
    name: 'EuropaUniversalis',
    connect: true,
    card: { ...cards },
    skill: { ...cardSkills },
    translate: { ...cardTranslates },
    list: cardLists
  };
  lib.config.cards.add('EuropaUniversalis');
  lib.config.all.cards.add('EuropaUniversalis');
  lib.translate.EuropaUniversalis_card_config = '欧陆风云';
  return EuropaUniversalis;
});
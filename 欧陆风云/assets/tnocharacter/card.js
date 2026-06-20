import { lib, game, ui, get, ai, _status } from '../../../../noname.js';
const cards = {
  Europa_riermanniya: {
    fullskin: true,
    type: 'equip',
    subtype: 'Europa_landmark',
    loseDelay: false,
    onEquip() {
      const limit = lib.skill.Europa_paixi.getList.length;
      const list = lib.skill.Europa_paixi.getList2.filter((item) => player.hasSkill('Europa_paixi_' + item));
      if (list.length) {
        for (const item of list) {
          if (player.countMark('Europa_paixi_' + item) < limit) {
            player.addMark('Europa_paixi_' + item, 1, false);
            game.log(item, '#g忠诚度+1');
          }
        }
      }
    },
    ai: {
      order: 9.5,
      equipValue: 6,
      basic: { equipValue: 5 }
    },
    skills: ['Europa_riermanniya_skill']
  }
};
export default cards;
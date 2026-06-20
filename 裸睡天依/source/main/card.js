import { lib, game, ui, get, ai, _status } from '../../../../noname.js';
game.import('card', function () {
  const lsty = {
    name: 'lsty',
    connect: true,
    card: {
      ls_yanbae: {
        fullskin: true,
        image: 'ext:裸睡天依/image/card/ls_yanbae.png',
        type: 'equip',
        subtype: 'equip5',
        skills: ['ls_undiscard'],
        enable: true,
        selectTarget: -1,
        filterTarget(card, player, target) {
          return target == player;
        },
        allowMultiple: false,
        content() {
          if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
        },
        toself: true,
        ai: {
          equipValue: 9,
          basic: {
            equipValue: 9,
            order: 9,
            useful: 2,
            value: 7
          },
          result: {
            target(player, target, card) {
              return get.equipResult(player, target, card.name);
            }
          }
        }
      }
    },
    translate: {
      ls_yanbae: '堰坝',
      ls_yanbae_info: '持有者阻断江河,不计入【修堰】.此牌无法被弃置,离开装备区时销毁.'
    }
  };
  lib.config.cards.add('lsty');
  lib.config.all.cards.add('lsty');
  lib.translate['lsty_card_config'] = '裸睡天依';
  return lsty;
});
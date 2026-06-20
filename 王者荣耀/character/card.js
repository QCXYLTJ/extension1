import { lib, game, ui, get, ai, _status } from '../../../../noname.js';
const cards = {
  discard: {
    ai: {
      result: {
        target(player, target, card) {
          if (
          !target.hasCard(function (card) {
            return lib.filter.cardDiscardable(card, target, 'discard');
          }))

          return 0;
          if (target.hasSkillTag('noh') && target.countCards('h') == 1) return -0.5;
          return -1;
        }
      },
      tag: {
        loseCard: 1,
        discard: 1
      }
    }
  },
  //纸伞
  hokzhisan: {
    audio: 'ext:王者荣耀/audio/card',
    derivation: 'hokgongsunli',
    fullskin: true,
    image: 'ext:王者荣耀/image/card/hokzhisan.png',
    type: 'equip',
    subtype: 'equip1',
    distance: {
      attackFrom: -1
    },
    skills: ['hokzhisan_skill'],
    enable: true,
    selectTarget: -1,
    filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
    modTarget: true,
    allowMultiple: false,
    onLose() {
      player.addTempSkill('hokzhisan_skill_lose');
    },
    content() {
      if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
    },
    toself: true,
    ai: {
      basic: {
        equipValue: 2,
        order(card, player) {
          const equipValue = get.equipValue(card, player) / 20;
          return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
        },
        useful: 2,
        value(card, player, index, method) {
          if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
          const info = get.info(card),
            current = player.getEquip(info.subtype),
            value = current && card != current && get.value(current, player);
          let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
          if (typeof equipValue == 'function') {
            if (method == 'raw') return equipValue(card, player);
            if (method == 'raw2') return equipValue(card, player) - value;
            return Math.max(0.1, equipValue(card, player) - value);
          }
          if (typeof equipValue != 'number') equipValue = 0;
          if (method == 'raw') return equipValue;
          if (method == 'raw2') return equipValue - value;
          return Math.max(0.1, equipValue - value);
        }
      },
      result: {
        target: (player, target, card) => get.equipResult(player, target, card.name)
      }
    }
  },
  //锦澜宝衣
  hokjinlanbaoyi: {
    derivation: 'hokjinchan',
    audio: 'ext:王者荣耀/audio/card',
    fullskin: true,
    image: 'ext:王者荣耀/image/card/hokjinlanbaoyi.png',
    type: 'equip',
    subtype: 'equip2',
    skills: ['hokjinlanbaoyi_skill'],
    ai: {
      basic: {
        equipValue: 7.5
      }
    }
  },
  //紧箍之咒
  hokjinguzhizhou: {
    derivation: 'hokjinchan',
    audio: 'ext:王者荣耀/audio/card',
    fullskin: true,
    image: 'ext:王者荣耀/image/card/hokjinguzhizhou.png',
    type: 'equip',
    subtype: 'equip5',
    skills: ['hokjinguzhizhou_skill'],
    distance: {
      attackFrom: -8
    },
    ai: {
      basic: {
        equipValue: 7.5
      }
    }
  },
  //九环法杖
  hokjiuhuanzhizhang: {
    derivation: 'hokjinchan',
    audio: 'ext:王者荣耀/audio/card',
    fullskin: true,
    image: 'ext:王者荣耀/image/card/hokjiuhuanzhizhang.png',
    type: 'equip',
    subtype: 'equip1',
    skills: ['hokjiuhuanzhizhang_skill'],
    distance: {
      attackFrom: -8
    },
    ai: {
      basic: {
        equipValue: 7.5
      }
    }
  }
};
export default cards;
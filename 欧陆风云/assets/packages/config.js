import { lib, game, ui, get, ai, _status } from '../../../../noname.js';
export const config = {
  Europa_The_king_of_animals: {
    name: '职业机制',
    intro: '开局职业选择',
    item: {
      关闭: '关闭',
      随机: '随机',
      随机自己: '随机自己',
      随机其他角色: '随机其他角色'
    },
    init: lib.config.extension_欧陆风云_Europa_The_king_of_animals === undefined ? '关闭' : lib.config.extension_欧陆风云_Europa_The_king_of_animals,
    onclick(item) {
      game.saveConfig('extension_欧陆风云_Europa_The_king_of_animals', item);
    }
  },
  Europa_colonialExploration: {
    name: '殖民探险意外弹窗',
    intro: '殖民探险意外弹窗显示',
    item: {
      0: '不显示',
      1: '有显示',
      2: '需确认'
    },
    init: lib.config.extension_欧陆风云_Europa_colonialExploration === undefined ? '1' : lib.config.extension_欧陆风云_Europa_colonialExploration,
    onclick(item) {
      game.saveConfig('extension_欧陆风云_Europa_colonialExploration', item);
      game.saveConfig('Europa_colonialExploration', item);
    }
  },
  Europa_FuelMechanism: {
    name: '启用燃油及弹药机制',
    intro: '开启后启用燃油及弹药机制',
    init: false,
    onclick(item) {
      game.saveConfig('extension_欧陆风云_Europa_FuelMechanism', item);
      game.saveConfig('Europa_FuelMechanism', item);
    }
  },
  Europa_zhugongPlace: {
    name: '启用场景机制',
    get intro() {
      return [
      '游戏开始时，主公从随机三个场景中选择一个场景（可不选择），为本局游戏加入此场景的全局效果',
      ...(lib?.skill?._Europa_zhugongPlace?.places || []).
      map((skill) => {
        skill = 'Europa_' + skill;
        return ['<span style="font-weight: bold;font-family: yuanli">' + lib.translate[skill] + '</span>', '<span style="font-family: yuanli">' + lib.translate[skill + '_info'] + '</span>'];
      }).
      flat()].
      join('<br>');
    },
    init: false
  }
};
export const help = {};
export const files = {
  character: [],
  card: [],
  skill: []
};
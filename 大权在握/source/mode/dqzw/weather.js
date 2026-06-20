import { lib, game, ui, get, ai, _status } from '../../../../../noname.js';
// 天气
Reflect.defineProperty(_status, 'dqzw_boss_weather', {
  set(map) {
    let oval = this._value;
    (function remove(map) {
      if (!map)
        return;
      let result;
      if (Array.isArray(map)) {
        result = [];
        for (let item of map)
          result.push(remove(item));
      } else {
        switch (map.type) {
          default:
            if (map.range == 'global'
              && !map.player
            ) game.removeGlobalSkill(map.value);
            else map.player.removeSkill(map.value, true);
        };
      };
      return result || map;
    }(oval));
    (function add(map) {
      if (!map)
        return;
      let result;
      if (Array.isArray(map)) {
        result = [];
        for (let item of map)
          result.push(add(item));
      } else {
        switch (map.type) {
          case 'skill':
            if (map.range == 'global'
              && !map.player
            ) game.addGlobalSkill(map.value);
            else map.player.addSkill(map.value);
        };
      };
      return result || map;
    }(map));
    this._value = map;
  },
  get() {
    return this._value;
  }
});
lib.dqzw_boss_weather = {
  xingye: 'default',
  lieri: 'default',
  baoyu: 'default',
  leiting: 'default',
  chunxiao: 'default',
  zhongxia: 'default',
  shangqiu: 'default',
  handong: name => {
    _status.dqzw_boss_weather = {
      type: 'skill',
      range: 'global',
      value: 'dqzw_boss_new_zhixi',
      name: name
    };
  }
};
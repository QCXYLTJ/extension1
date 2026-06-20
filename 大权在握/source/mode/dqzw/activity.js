import { lib, game, ui, get, ai, _status } from '../../../../../noname.js';
// 活动
let date = new Date()
    , Y = date.getFullYear()
    , M = date.getMonth() + 1
    , D = date.getDate()
    , activity = [
        [M == 2 && D > 9 && D < 25, () => 'springFestival']
    ];
_status.dqzw_boss_activity = ((activity.find(item => item[0] && item[1]) || [])[1] || (() => void 0))();
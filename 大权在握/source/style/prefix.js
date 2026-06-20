import { lib, game, ui, get, ai, _status } from '../../../../noname.js';
// 这里是武将前缀qwq!
export let namePrefix = {
    SR: {
        getSpan() {
            let str = get.prefixSpan('SP');
            return `${str.slice(0, str.indexOf('SP'))}SR</span>`;
        }
    },
    国: {
        color: '#c3f9ff',
        nature: 'thundermm'
    },
    破: {
        color: '#eeeeee',
        nature: 'qunmm'
    },
    山: {
        color: '#ffd700',
        nature: 'glodenmm'
    },
    河: {
        color: '#6affe2',
        nature: 'watermm'
    },
    在: {
        color: '#c3f9ff',
        nature: 'thundermm'
    }
};
for (let prefix in namePrefix)
    lib.namePrefix.set(
        prefix,
        namePrefix[prefix]
    );          
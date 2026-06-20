import { lib, game, ui, get, ai, _status } from '../../../../noname.js';
// 这里是势力qwq!
export let map = {
    yue: {
        shadow: [
            [112, 128, 144],
            [25, 25, 112]
        ],
        translate: '月'
    },
    han: {
        shadow: [
            [255, 20, 147]
        ],
        translate: '汉'
    },
    quan: {
        shadow: [
            [138, 43, 226]
        ],
        translate: '权'
    },
    ming: {
        shadow: [
            [135, 38, 87]
        ],
        translate: '明'
    },
    song: {
        shadow: [
            [135, 38, 87]
        ],
        translate: '宋'
    },
    tang: {
        shadow: [
            [135, 38, 87]
        ],
        translate: '唐'
    },
    dqzw_xukong: {
        shadow: [
            [233, 40, 233],
            [52, 35, 77]
        ],
        translate: '虚',
        translate2: '虚空',
    }
};
export let style = document.createElement('style');
for (let group in map) {
    let shadow = map[group].shadow || [[], []]
        , back = map[group].back || [];
    style.innerHTML += `
        .player .identity[data-color = ${group}],
        div[data-nature = ${group}],
        span[data-nature = ${group}],
        div[data-nature = ${group}m],
        span[data-nature = ${group}m],
        div[data-nature = ${group}mm],
        span[data-nature = ${group}mm]                     
        {
            text-shadow: black 0 0 1px, 
                rgba(${shadow[0].join()}) 0 0 2px,
                rgba(${shadow[0].join()}) 0 0 5px,
                rgba(${(shadow[1] || shadow[0]).join()}) 0 0 10px,
                rgba(${(shadow[1] || shadow[0]).join()}) 0 0 10px
        }
        .player > .camp-wrap[data-camp = ${group}]
        > .camp-back {
            background: linear-gradient(
                to bottom, 
                rgba(${(back[0] || shadow[0]).join()}), 
                rgba(${(back[1] || shadow[1] || shadow[0]).join()})
            );
        }
        .player > .camp-wrap[data-camp = ${group}]
        > .camp-name {
            text-shadow: 0 0 5px rgba(${shadow[0].join()}), 
                0 0 10px rgba(${shadow[0].join()}), 
                0 0 15px rgba(${(shadow[1] || shadow[0]).join()});
        }    
    `;
    lib.group.add(group);
    lib.groupnature[group] = group;
    lib.translate[group] = map[group].translate || group;
    lib.translate[group + 2] = map[group].translate2
        || map[group].translate || group;
};
document.head.appendChild(style);
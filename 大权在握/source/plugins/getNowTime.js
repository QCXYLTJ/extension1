import { lib, game, ui, get, ai, _status } from '../../../../noname.js';
export function getNowTime(time = 2000) {
    return new Promise((resolve) => {
        const xhr = new window.XMLHttpRequest;
        xhr.responseType = "document";
        xhr.open("head", location.href);
        xhr.send(null);
        xhr.onreadystatechange = () => {
            var time = null;
            if (xhr.readyState === 2) {
                time = xhr.getResponseHeader("Date");
                time = time ? { time: new Date(time) } : { time: new Date(), type: 'timeout' };
                resolve(time);
            }
        };
        setTimeout(() => {
            resolve({ time: new Date(), type: 'timeout' });
        }, time);
    });
};
game.getNowTime = getNowTime
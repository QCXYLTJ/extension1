// game.import(name: "王者荣耀"
//用于诗笺版快捷导入识别扩展名
import { lib, game, ui, get, ai, _status } from '../../noname.js';
import { precontent } from './extension/precontent.js';
import { content } from './extension/content.js';
import { Package } from './extension/package.js';
import { config } from './extension/config.js';
import { audioIndex, audioObj, audioArr, audioStr, audioUse, audioText } from './assets/data/audioIndex.js';
export let type = 'extension';
export default async function () {
    let extension = {
        name: '王者荣耀',
        arenaReady() {
            //手牌上限
            if (lib.config.extension_王者荣耀_HOKHandcardLimit) {
                lib.element.player.updates = [].concat(lib.element.player.updates || []).concat((player) => {
                    var numh = player.countCards('h');
                    var numhm = player.getHandcardLimit();
                    if (numhm >= 114514) numhm = '∞';
                    player.node.count.innerHTML = Array.from(numh.toString()).join('<br>') + '<br>/<br>' + numhm;
                });
            }
            lib.hooks.checkCard.push((card, event) => {
                const cardsuit = card.suit,
                    cardnumber = card.number;
                const suitlist = ['♣️', '♠️', '<span style="color: #a82424">♦️</span>', '<span style="color: #a82424">♥️</span>', '🃏'];
                if (cardsuit == card.suit && cardnumber == card.number) return;
                const info = card.getElementsByClassName('info');
                if (!card._tempSuitNum) card._tempSuitNum = info[0].innerHTML;
                let suit = suitlist[lib.suits.indexOf(cardsuit)],
                    number = get.strNumber(cardnumber);
                info[0].innerHTML = `${suit}<span style="font-family:xinwei"> </span><span style="font-family:xinwei">${number}</span>`;
            });
            lib.hooks.uncheckCard.push((card, event) => {
                if (!card._tempSuitNum) return;
                const info = card.getElementsByClassName('info');
                info[0].innerHTML = card._tempSuitNum;
                delete card._tempSuitNum;
            });
            var checks = {};
            game.getFileList('extension/王者荣耀/json', async function (folders, files) {
                for (const file of files) {
                    checks[`${file.slice(0, -5)}`] = await lib.init.promises.json(`extension/王者荣耀/json/${file}`)
                        .then(
                            info => info,
                            () => {
                                return dqpfyy_5403;
                            }
                        )
                }
                game.saveConfig('HOKVOICE_APPRECIATION', checks);
            });
            get.is.HoKExtAudioPath = (parsedPath) => {
                return ['王者荣耀/audio/|'].some(info => parsedPath.includes(info));
            }
            const originplayAudio = game.playAudio;
            game.originplayAudio = originplayAudio;
            game.playAudio = function (...args) {
                //hok
                const options =
                    args.length === 1 && get.objtype(args[0]) === 'object'
                        ? args[0]
                        : {
                            path: args.filter((arg) => typeof arg === 'string' || typeof arg === 'number').join('/'),
                            onError: args.find((arg) => typeof arg === 'function'),
                        };
                const {
                    path = '',
                    // broadcast = false,
                    addVideo = true,
                    video = false,
                    onCanPlay = (evt) => void 0,
                    onPlay = (evt) => void 0,
                    onEnded = (evt) => void 0,
                    onError = (evt) => void 0,
                } = options;
                // 为了能更美观的写代码，默认返回audio而不额外加一个void类型
                // @ts-ignore
                if (_status.video && !video) return;
                let parsedPath = '';
                if (['blob:', 'data:'].some((prefix) => path.startsWith(prefix))) parsedPath = path;
                else if (path.startsWith('ext:')) parsedPath = path.replace(/^ext:/, 'extension/');
                else if (path.startsWith('db:')) parsedPath = path.replace(/^(db:[^:]*)\//, (_, p) => p + ':');
                else parsedPath = `audio/${path}`;
                // @ts-ignore
                if (!lib.config.repeat_audio && _status.skillaudio.includes(parsedPath)) return;
                //skill => `extension/王者荣耀/audio/|${character}|/${skill}`
                //die => `extension/王者荣耀/audio/die/${character}.mp3`
                if (get.is.HoKExtAudioPath(parsedPath)) {
                    const voice = lib.config.HOKVOICE_APPRECIATION;
                    let name,
                        die = false,
                        keySkill;
                    name = parsedPath.split('|');
                    //if (name.length > 1 && name[2].endsWith('die.mp3')) die = true;
                    var audioName = name[1],
                        shareName = name[1];
                    const audio = document.createElement('audio');
                    audio.volume = lib.config.volumn_audio / 8;
                    audio.autoplay = true;
                    audio.oncanplay = (ev) => {
                        //Some browsers do not support "autoplay", so "oncanplay" listening has been added
                        Promise.resolve(audio.play()).catch((e) => console.warn(e));
                        if (_status.video || game.online) return;
                        onCanPlay(ev);
                    };
                    audio.onplay = (ev) => {
                        _status.skillaudio.add(parsedPath);
                        setTimeout(() => _status.skillaudio.remove(parsedPath), 1000);
                        // if (broadcast) game.broadcast(game.playAudio, options);
                        if (addVideo) game.addVideo('playAudio', null, path);
                        if (_status.video || game.online) return;
                        onPlay(ev);
                    };
                    audio.onended = (ev) => {
                        audio.remove();
                        if (_status.video || game.online) return;
                        onEnded(ev);
                    };
                    audio.onerror = (ev) => {
                        audio.remove();
                        if (_status.video || game.online) return;
                        onError(ev);
                    };
                    Promise.resolve().then(async () => {
                        let resolvedPath = null;
                        if (!voice[audioIndex[audioName]]) return;
                        let useAudio = voice[audioIndex[audioName]][audioObj];
                        if (Array.isArray(useAudio)) useAudio = useAudio[0];
                        const playUse = useAudio[audioArr][Math.ceil((useAudio[audioArr].length - 1) * Math.random())];
                        const playUseAudio = playUse[audioUse],
                            playUseText = playUse[audioText];
                        resolvedPath = `https:${playUseAudio}`;
                        audio.src = resolvedPath;
                        ui.window.appendChild(audio);
                    }); //QQQ
                    return audio;
                }
                return originplayAudio.apply(this, arguments);
            };
        },
        content: content,
        precontent: precontent,
        config: config,
        package: Package,
    };
    return extension;
}

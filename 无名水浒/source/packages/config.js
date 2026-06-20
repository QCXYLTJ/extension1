import { lib, game, ui, get, ai, _status } from '../../../../noname.js'
export const config = {
    Baidu: {
        name: "原贴(点击此处跳转)",
        clear: true,
        onclick() {
            ui.create.iframe('https://tieba.baidu.com/p/8528547401?pn=1');
        },
    },
}
export const help = {
}
export const files = {
    character: [], "card": [], "skill": []
}
// game.import(name: "狂澜异世",用于诗笺版快捷导入识别扩展名
import { lib, game, ui, get, ai, _status } from '../../noname.js'
import { precontent } from './js/core/precontent.js'
import { content } from './js/core/content.js'
import { Package } from './js/core/package.js'
import { config, help, files } from './js/core/chf.js'
export let type = 'extension'
export default async function () {
    let extension = {
        name: "狂澜异世",
        content: content,
        precontent: precontent,
        config: config,
        help: help,
        package: Package,
        files: files
    }
    return extension
}
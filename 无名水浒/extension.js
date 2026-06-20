// game.import(name: "无名水浒",用于诗笺版快捷导入识别扩展名
import { lib, game, ui, get, ai, _status } from '../../noname.js'
import { precontent } from './source/packages/precontent.js'
import { content } from './source/packages/content.js'
import { Package } from './source/packages/package.js'
import { config, help, files } from './source/packages/config.js'
export let type = 'extension'
export default async function () {
    let extension = {
        name: "无名水浒",
        content: content,
        precontent: precontent,
        config: config,
        help: help,
        package: Package,
        files: files
    }
    return extension
}
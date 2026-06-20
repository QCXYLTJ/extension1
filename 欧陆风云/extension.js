// game.import(name: "欧陆风云",用于诗笺版快捷导入识别扩展名
import { lib, game, ui, get, ai, _status } from '../../noname.js'
import { precontent } from './assets/packages/precontent.js'
import { content } from './assets/packages/content.js'
import { Package } from './assets/packages/package.js'
import { config, help, files } from './assets/packages/config.js'
export let type = 'extension'
export default async function () {
    let extension = {
        name: "欧陆风云",
        content: content,
        precontent: precontent,
        config: config,
        help: help,
        package: Package,
        files: files
    }
    return extension
}
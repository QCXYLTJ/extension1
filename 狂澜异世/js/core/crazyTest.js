'use strict';
import { game, get, lib, ui, _status, ai } from '../../../../noname.js';
export class CrazyGet {
    /**
 * 静态方法,用于测试并打印事件的父级对象
 * @param {object} event - 事件对象
 */
    static testPar(event) {
        let parentIndex = 0;
        let parent = event.getParent(parentIndex); // 获取第一个父级对象
        while (parent && parent.name !== "game") { // 当父级对象存在且不是 "game" 时继续循环
            parentIndex++;
            parent = event.getParent(parentIndex); // 获取下一个父级对象
        }
        // 循环结束,无需返回任何值
    }
    /**
 * 静态方法testProp,用于遍历对象obj的所有属性并打印属性名、属性值及索引.
 * @param {Object} obj - 需要遍历的对象
 * @returns {void}
 */
    static testProp(obj) {
        // 遍历对象的属性,并使用自定义的log函数打印键值对
        for (let key in obj) {
            if (obj.hasOwn(key)) {
                const value = obj[key];
                game.log(key, value);
            }
        }
    }
    static testFunc(obj) {
        Object.keys(obj).forEach((key) => {
            game.log(key, obj[key]); // 输出键和值的对应
        });
    }
}
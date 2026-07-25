import precontent_qunxing from './precontent_qunxing.js';
import precontent_qiangu from './precontent_qiangu.js';
import { lib, game, ui, get, ai, _status } from '../../../noname.js';
export function precontent(qx) {
  game.addGroup('qx_han', '汉', '汉朝', { color: '#800080' });
  //群星荟萃
  game.import('character', precontent_qunxing);
  //千古风流
  game.import('character', precontent_qiangu);
  //—————————————————————————————————————————————————————————————————————————————数据操作相关自定义函数
  const numfunc = function () {
    if (!lib.number) {
      lib.number = [];
      for (var i = 1; i < 14; i++) {
        lib.number.add(i);
      }
    } //添加lib.number
    window.sgn = function (bool) {
      if (bool) return 1;
      return -1;
    }; //true转为1,false转为-1
    window.numberq0 = function (num) {
      if (isNaN(Number(num))) return 0;
      return Math.abs(Number(num));
    }; //始终返回正数(取绝对值)
    window.numberq1 = function (num) {
      if (isNaN(Number(num))) return 1;
      return Math.max(Math.abs(Number(num)), 1);
    }; //始终返回正数且至少为1(取绝对值)
    window.number0 = function (num) {
      if (isNaN(Number(num))) return 0;
      return Math.max(Number(num), 0);
    }; //始终返回正数
    window.number1 = function (num) {
      if (isNaN(Number(num))) return 1;
      return Math.max(Number(num), 1);
    }; //始终返回正数且至少为1
    window.deepClone = function (obj, visited = new WeakMap()) {
      if (obj === null || typeof obj !== 'object' || obj instanceof window.Element) {
        return obj;
      }
      if (visited.has(obj)) {
        return visited.get(obj);
      }
      if (Array.isArray(obj)) {
        return obj.map((item) => deepClone(item, visited));
      }
      const clonedObj = {};
      visited.set(obj, clonedObj);
      for (let key in obj) {
        if (Object.hasOwn(obj, key)) {
          clonedObj[key] = deepClone(obj[key], visited);
        }
      }
      return clonedObj;
    }; //深拷贝对象
    window.factorial = function (num) {
      num = Math.round(num);
      if (num < 0) {
        return 0;
      }
      if (num < 2) {
        return 1;
      }
      let result = 1;
      for (let i = 2; i <= num; i++) {
        result *= i;
      }
      return result;
    }; //阶乘
    window.isPrime = function (num) {
      if (num === 2 || num === 3) return true;
      if (num < 2 || num % 2 === 0 || num % 3 === 0) return false;
      for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
      }
      return true;
    }; // 质数
  };
  numfunc();
}

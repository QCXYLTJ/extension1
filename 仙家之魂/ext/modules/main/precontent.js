import { lib, game, ui, get, ai, _status, rootURL } from '../../../../../noname.js';
import { xjzhTitle } from '../index.js';
import designAchievement from '../other/designAchievement.js';
export async function precontent(xjzh) {
  // ---------------------------------------定义函数------------------------------------------//
  //判断技能在当前阶段使用或发动的次数
  get.xjzh_countSkill = function (skill, player, self) {
    if (!skill) return null;
    player = player || _status.event.player;
    let history, num;
    if (self) {
      history = player.getAllHistory('useSkill', function (evt) {
        return evt && evt.skill && evt.skill === skill;
      });
    }
    if (player.isUnderControl(true)) {
      num = player.getStat('skill')[skill];
      return num !== undefined ? num : 0;
    } else {
      history = player.getHistory('useSkill', function (evt) {
        return evt && evt.skill && evt.skill === skill;
      });
    }
    return history ? history.length : 0;
  };
  //判断当前系统日期是否处于某个时间段内
  get.xjzh_checkDate = function (beginDateStr, endDateStr) {
    let curDate = new Date();
    let beginDate = new Date(beginDateStr);
    let endDate = new Date(endDateStr);
    return curDate >= beginDate && curDate <= endDate;
  };
  // 判断当前系统时间是否处于某个时间段内
  get.xjzh_checkTime = function (beginTime, endTime) {
    const nowDate = new Date();
    const [beginHour, beginMinute] = beginTime.split(':').map(Number);
    const [endHour, endMinute] = endTime.split(':').map(Number);
    const beginDate = new Date(nowDate);
    beginDate.setHours(beginHour, beginMinute, 0, 0);
    const endDate = new Date(nowDate);
    endDate.setHours(endHour, endMinute, 0, 0);
    return nowDate.getTime() >= beginDate.getTime() && nowDate.getTime() <= endDate.getTime();
  };
  ///以下函数借鉴自《金庸群侠传》
  get.xjzh_filterGainSkill = function (skill, func, player, target) {
    if (!lib.translate[skill]) return false;
    if (!lib.translate[skill].length) return false;
    if (!lib.translate[skill + '_info']) return false;
    if (!lib.translate[skill + '_info'].length) return false;
    if (!lib.skill[skill]) return false;
    if (lib.skill[skill].sub) return false;
    if (lib.skill[skill].charlotte) return false;
    if (lib.skill[skill].nopop) return false;
    //if(player&&player.hasSkill(skill,false,false,false)) return false;
    return !func || func(skill, player, target);
  };
  ///以上函数借鉴自《金庸群侠传》
  //小写字母转大写字母
  game.xjzh_toUpperCase = function (str) {
    str = str.toUpperCase();
    return str;
  };
  //大写字母转小写字母
  game.xjzh_toLowerCase = function (str) {
    str = str.toLowerCase();
    return str;
  };
  //判断当前设备类型
  get.xjzh_device = function () {
    var userAgent = navigator.userAgent,
      platform = navigator.platform,
      arg = null;
    var Agents = new Array('Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod');
    for (var i = 0; i < Agents.length; i++) {
      if (userAgent.indexOf(Agents[i]) > 0) {
        arg = Agents[i];
        break;
      }
    }
    if (arg == null) {
      if (platform.indexOf('Win') == 0) {
        arg = 'windows';
      } else if (platform.indexOf('Mac')) {
        arg = 'Mac';
      } else {
        return null;
      }
    }
    return game.xjzh_toLowerCase(arg);
  };
  //判断当前设备浏览器内核
  get.xjzh_kernel = function () {
    var u = navigator.userAgent,
      arg = null;
    var object = {
      trident: u.indexOf('Trident') > -1, //IE内核
      presto: u.indexOf('Presto') > -1, //opera内核
      webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
      mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
      android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
      iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
      iPad: u.indexOf('iPad') > -1, //是否iPad
      webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
      weixin: u.indexOf('MicroMessenger') > -1, //是否微信
      qq: u.match(/\sQQ/i) == ' qq' //是否QQ
    };
    for (var i in object) {
      if (object[i]) {
        arg = i.toString();
        break;
      }
    }
    if (arg == null) return null;
    return game.xjzh_toLowerCase(arg);
  };
  //判断字符串是否含有中文
  get.xjzh_checkChinese = function (str) {
    let reg = new RegExp('[\\u4E00-\\u9FFF]+', 'g');
    if (reg.test(str)) return true;
    return false;
  };
  //判断字符串是否全部是中文
  get.xjzh_checkChinese = function (str) {
    let reg = /^[\u4E00-\u9FA5]+$/;
    if (!reg.test(str)) return false;
    return true;
  };
  /**
   * 生成指定长度的随机中文字符串。
   *
   * 该函数接受一个参数 `number`，表示要生成的随机中文字符串的长度。
   * 随机中文字符串由 Unicode 编码范围 \u4e00-\u9fa5 内的字符组成。
   *
   * @param {number} number - 要生成的随机中文字符串的长度。
   * @returns {string} 返回生成的随机中文字符串。
   */
  get.xjzh_randomChineseString = function (number) {
    let allChars = '';
    for (let i = 0; i < 0x9fff - 0x4e00 + 1; i++) {
      let charCode = 0x4e00 + i;
      let char = String.fromCharCode(charCode);
      allChars += char;
    }
    let match = allChars.match(/./g);
    return match.randomGets(number).join('');
  }, (
  /**
   * 生成指定长度的随机字符串。
   *
   * 该函数接受一个参数 `length`，表示要生成的随机字符串的长度。
   * 随机字符串由大小写字母和数字组成。
   *
   * @param {number} length - 要生成的随机字符串的长度。
   * @returns {string} 返回生成的随机字符串。
   */
  get.xjzh_randomEnglishString = function (length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }), (
  /**
   * 计算给定代码字符串的哈希值。
   *
   * 该函数使用一种简单的哈希算法来计算代码字符串的哈希值。哈希值是一个整数，它是根据代码字符串的内容计算出来的。
   * 哈希值的计算过程是将字符串中的每个字符的Unicode值相加，并通过位运算进行一些变换。
   *
   * @param {string} code - 要计算哈希值的代码字符串。
   * @returns {number} 返回计算得到的哈希值。
   */
  get.xjzh_calculateHash = function (code) {
    // 检查传入的code参数是否为字符串或函数
    let type;
    // 如果code是字符串，则将type设置为"string"
    if (typeof code == 'string') type = 'string';
    // 如果code是函数，则将type设置为"function"
    else if (typeof code == 'function') type = 'function';
    // 如果code既不是字符串也不是函数，则将type设置为"undefined"
    else type = 'undefined';
    // 如果type是undefined，则抛出错误，因为函数只能接受字符串或函数作为参数
    if (typeof type === 'undefined') throw new Error(`函数接受了一个不是字符串/函数的东西: ${type}: ${code}`);
    // 如果type是函数，则将code转换为字符串，以便进行哈希计算
    if (type == 'function') code = code.toString();
    // 初始化哈希值为0
    let hash = 0,
      i,
      chr;
    // 如果代码字符串为空，则直接返回哈希值0
    if (code.length === 0) return hash;
    // 遍历代码字符串中的每个字符
    for (i = 0; i < code.length; i++) {
      // 获取当前字符的Unicode值
      chr = code.charCodeAt(i);
      // 使用位运算更新哈希值
      hash = (hash << 5) - hash + chr;
      // 将哈希值转换为32位整数
      hash |= 0;
    }
    // 返回计算得到的哈希值
    return hash;
  }), (
  /**
   * 扩展Array的原型，添加includesArrays方法，用于检查数组是否包含另一个数组的所有元素。
   * @param {...(Array|boolean)} args - 可以接受一个数组和一个布尔值作为参数。
   * @returns {boolean} - 如果数组包含另一个数组的所有元素，则返回true，否则返回false。
   */
  Array.prototype.includesArrays = function (...args) {
    // 声明变量list和bool，用于存储数组和布尔值
    let list, bool;
    // 遍历参数数组args
    for (const arg of args) {
      // 如果参数是数组，则将其赋值给list
      if (Array.isArray(arg)) list = arg;
      // 如果参数是布尔值，则将其赋值给bool
      else if (typeof arg === 'boolean') bool = arg;
      // 如果参数既不是数组也不是布尔值，则将bool设置为false
      else bool = false;
    }
    // 检查bool和list是否为有效的类型，如果不是，则抛出错误
    if (typeof bool !== 'undefined' && typeof bool !== 'boolean' || typeof list !== 'undefined' && !Array.isArray(list) || typeof this !== 'undefined' && !Array.isArray(this)) {
      throw new Error(`函数接受了一个不是数组/布尔值的东西: ${list}: ${bool}：${this}`);
    }
    // 如果bool为false，则使用some方法检查数组是否包含list中的任何一个元素
    if (!bool) return this.some((item) => list.includes(item));
    // 如果bool为true，则使用Set对象检查数组是否包含list中的所有元素（不考虑顺序）
    else {
      // 创建两个Set对象，分别包含当前数组和list数组的所有元素
      const setA = new Set(this);
      const setB = new Set(list);
      // 如果两个Set对象的大小不同，则返回false
      if (setA.size !== setB.size) return false;
      // 遍历setA中的每个元素，检查是否存在于setB中
      for (const value of setA) {
        if (!setB.has(value)) return false;
      }
      // 如果所有元素都存在于setB中，则返回true
      return true;
    }
  });
  /**
   * 获取玩家相邻的角色。
   *
   * 该函数用于获取指定玩家相邻的角色。它首先检查传入的player参数是否为有效的Player对象，调用player对象的getNext()和getPrevious()方法，分别获取玩家的下一个和上一个角色。最后，将这两个角色组成一个数组并返回。
   *
   * @param {Object} player - 要获取相邻角色的玩家对象，必须是有效的Player实例
   * @returns {Array} 返回一个包含玩家相邻角色的数组，数组的第一个元素是玩家的下一个角色，第二个元素是玩家的上一个角色
   * @throws {Error} 如果传入的player参数不是有效的Player对象，则抛出错误
   */
  get.xjzh_nearbyRole = function (player) {
    let type;
    // 检查传入的player参数是否为有效的Player对象
    if (typeof player == 'undefined' || (type = typeof player, type != 'object') || (type = get.itemtype(player), type != 'player')) {
      throw new Error(`函数接受了一个不是Player的东西: ${type}: ${player}`);
    }
    // 获取玩家的下一个角色
    let nextPlayer = player.next;
    // 获取玩家的上一个角色
    let previousPlayer = player.previous;
    // 将玩家的下一个和上一个角色组成一个数组并返回
    return [nextPlayer, previousPlayer];
  }, (
  /**
   * 检查玩家是否为召唤物。
   *
   * 该函数用于检查传入的玩家对象是否为召唤物。它首先检查传入的player参数是否为有效的Player对象，获取玩家的所有角色名称列表。
   * 接着，遍历列表中的每个角色名称，检查该角色是否存在并且是否具有isZhaohuan属性且其值为true。如果找到一个符合条件的角色，则返回true，表示玩家为召唤物；否则返回false。
   *
   * @param {Object} player - 要检查的玩家对象，必须是有效的Player实例
   * @returns {boolean} 如果玩家拥有召唤技能，则返回true；否则返回false
   * @throws {Error} 如果传入的player参数不是有效的Player对象，则抛出错误
   */
  get.xjzh_isZhaohuan = function (player) {
    let type;
    // 检查传入的player参数是否为有效的Player对象
    if (typeof player == 'undefined' || (type = typeof player, type != 'object') || (type = get.itemtype(player), type != 'player')) {
      throw new Error(`函数接受了一个不是Player的东西: ${type}: ${player}`);
    }
    // 获取玩家的所有角色名称列表
    let nameList = get.nameList(player);
    // 遍历列表中的每个角色名称，检查该角色是否存在并且是否具有isZhaohuan属性且其值为true
    return nameList.some((name) => lib.character[name] && lib.character[name].isZhaohuan === true);
  });
  /**
   * 获取玩家的增益技能列表
   *
   * 该函数用于生成玩家的增益技能列表，列表中包含了一系列技能名称。根据不同的游戏模式和玩家条件，列表会有所不同。
   * 首先，定义一个包含所有可能技能名称的数组。根据游戏模式和玩家条件，对数组进行修改，移除或添加特定的技能名称。
   * 最后，将数组中的每个技能名称前加上前缀“xjzh_zengyi_”，并返回修改后的数组。
   *
   * @param {Object} player - 要获取增益技能的玩家对象，必须是有效的Player实例
   * @returns {Array} 返回一个包含玩家增益技能名称的数组，每个技能名称前都加上了前缀“xjzh_zengyi_”
   * @throws {Error} 如果传入的player参数不是有效的Player对象，则抛出错误
   */
  get.xjzh_zengyiSkills = function (player) {
    // 定义一个包含所有可能增益技能名称的数组
    let list = ['mieque', 'weisong', 'liuzhuan', 'pianxian', 'chongsu', 'shunying', 'fengyue', 'hunqian', 'mengdie', 'poxiao', 'shuangsheng', 'xuanbian', 'moran', 'shenghua', 'chaoti', 'jinghong', 'shefan', 'longfei', 'yunchui', 'fengyang', 'dizai', 'tianfu', 'jiehuo', 'xuanbing', 'jifeng', 'jinglei', 'lieshi', 'lianyu', 'raoliang', 'difu', 'tianze', 'zhangyi', 'tunshi'];
    // 如果游戏模式是“identity”，则添加特定的技能名称到列表中
    if (get.mode() == 'identity') list.addArray(['daoge', 'zhuanpo']);
    let type;
    // 检查传入的player参数是否为有效的Player对象
    if (typeof player == 'undefined' || (type = typeof player, type != 'object') || (type = get.itemtype(player), type != 'player')) {
      throw new Error(`函数接受了一个不是Player的东西: ${type}: ${player}`);
    }
    // 如果玩家是“xjzh_sanguo_zuoyou”，则从列表中移除特定的技能名称
    if (get.is.playerNames(player, 'xjzh_sanguo_zuoyou')) list.removeArray(['shuangsheng', 'pianxian']);
    // 将列表中的每个技能名称前加上前缀“xjzh_zengyi_”，并返回修改后的数组
    return list.map((skill) => 'xjzh_zengyi_' + skill);
  };
  /**
   * 随机成功函数
   *
   * 该函数用于生成一个随机决策，它比较两次随机数生成的结果，以决定是否“成功”。
   * 返回值为一个布尔值，如果生成的第一个随机数大于或等于第二个随机数，则返回true，表示“成功”；否则返回false。
   *
   * @returns {boolean} 根据生成的随机数决定返回true（成功）还是false（失败）
   */
  game.xjzh_randomSuccess = function () {
    // 生成一个0到1之间的随机数，赋值给变量num
    const num = Math.random();
    // 再次生成一个0到1之间的随机数，并与num进行比较，如果小于等于num，则返回true，表示成功；否则返回false，表示失败
    return Math.random() <= num;
  }, (
  /**
   * 清除玩家身上的所有控制效果
   *
   * 该函数用于解除玩家身上的各种控制效果，包括弃置延时锦囊牌、翻面、横置、回复装备栏位以及移除减益BUFF
   * 它首先检查传入的player参数是否为有效的Player对象，执行一系列操作来解除上述限制状态
   *
   * @param {Object} player - 要清除控制的玩家对象，必须是有效的Player实例
   * @returns {Object} 返回经过控制效果清除操作后的玩家对象
   * @throws {Error} 如果传入的player参数不是有效的Player对象，则抛出错误
   */
  game.claerRestraint = function (player) {
    let type;
    if (typeof player == 'undefined' || (type = typeof player, type != 'object') || (type = get.itemtype(player), type != 'player')) {
      throw new Error(`函数接受了一个不是Player的东西: ${type}: ${player}`);
    }
    if (player.countCards('j')) player.discard(player.getCards('j', (card) => card.name != 'jydiy_yungongliaoshang'))._triggered = null;
    if (player.isTurnedOver()) player.turnOver(false)._triggered = null;
    if (player.isLinked()) player.link(false)._triggered = null;
    if (player.countDisabledSlot() > 0) {
      for (let i = 1; i < 6; i++) {
        if (player.hasDisabledSlot(i)) player.enableEquip(i)._triggered = null;
      }
    }
    if (get.xjzhBUFFList(player).length > 0) {
      for (let i of get.xjzhBUFFList(player)) {
        player.changexjzhBUFF(i, -get.xjzhBUFFNum(player, i))._triggered = null;
      }
    }
    player.checkConflict();
    player.checkMarks();
    return player;
  });
  /**
   * 将中文数字字符串转换为阿拉伯数字。
   *
   * @param {string} numStr 中文数字字符串。
   * @returns {number} 转换后的阿拉伯数字。
   */
  get.chineseToArabic = function (numStr) {
    // 使用对象映射数字和单位
    const chineseNums = { 零: 0, 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6, 七: 7, 八: 8, 九: 9 };
    // 定义中文数字单位到其代表的阿拉伯数字的映射
    const units = { 十: 10, 百: 100, 千: 1000, 万: 10000, 亿: 100000000 }; // 添加万和亿单位
    // 初始化阿拉伯数字和当前单位倍数
    let arabicNum = 0;
    let unit = 1;
    // 标志是否处于处理单位阶段
    let isUnit = false; // 标志当前是否在处理单位
    // 从字符串末尾开始处理，因为中文数字的读写顺序是从右到左
    for (let i = numStr.length - 1; i >= 0; i--) {
      const char = numStr[i];
      // 如果字符是数字，则根据当前单位累加到阿拉伯数字中
      if (char in chineseNums) {
        // 处理数字
        arabicNum += chineseNums[char] * unit;
        // 重置单位处理标志
        isUnit = false;
      } else if (char in units) {
        // 如果字符是单位，更新当前单位倍数
        if (isUnit) {
          // 如果连续出现单位，这可能是错误的输入，但为了功能完整性，我们可将其视为非法输入并忽略
          console.warn('忽略连续的单位:', char);
          continue;
        }
        unit = units[char];
        // 设置单位处理标志
        isUnit = true;
      } else {
        // 非法字符，抛出错误
        // 非预期字符，抛出错误
        throw new Error(`非预期字符: ${char}`);
      }
    }
    // 返回转换后的阿拉伯数字
    return arabicNum;
  };
  /**
   * 更新文本中的次数限制信息
   * 该函数主要用于在文本中找到次数限制的表述，并将其更新为新的次数
   * @param {string} text - 需要更新的文本
   * @param {number} num - 需要增加到原始次数上的数值
   * @returns {string} - 更新后的文本字符串
   */
  game.xjzh_updateText = function (text, num) {
    // 匹配"限数字次"或"限中文数字次"的模式
    const pattern = /限(\d+次|\d+|一|二|三|四|五|六|七|八|九|十|百|千)+次/g;
    return text.replace(pattern, function (match) {
      // 提取数字部分，可能是阿拉伯数字或中文数字
      const numberPart = match.replace(/限|次/g, '');
      // 尝试转换为阿拉伯数字并加num，如果是非数字字符则直接报错处理
      try {
        const arabicNumber = numberPart.match(/\d+/) ? parseInt(numberPart) : get.chineseToArabic(numberPart);
        return `限${arabicNumber + num}次`;
      } catch (e) {
        console.warn('无法识别的数字格式:', numberPart);
        return match; // 如果转换失败，保持原样
      }
    });
  };
  /**
   * 复制文本到剪贴板的功能函数。
   * 通过创建一个临时的textarea元素，将指定文本写入该元素，选中该文本，执行浏览器的复制命令来实现复制功能。
   * 由于不同浏览器对复制命令的支持程度不同，因此使用try-catch语句来捕获可能的错误。
   *
   * @param {string} text 需要复制到剪贴板的文本。
   */
  game.copyTotext = function (text) {
    // 创建一个textarea元素
    let textarea = document.createElement('textarea');
    // 设置textarea的值为待复制的文本
    textarea.value = text;
    // 将textarea添加到文档体中
    document.body.appendChild(textarea);
    // 选中textarea中的文本
    textarea.select();
    try {
      // 尝试执行浏览器的复制命令
      document.execCommand('copy');
      // 如果执行成功，给出提示
      alert('文本已复制到剪贴板！');
    } catch (e) {
      // 如果执行失败，输出错误到控制台，并给出提示
      console.warn('复制失败', e);
      alert('当前浏览器不支持自动复制到剪贴板。');
    }
    // 删除临时的textarea元素
    document.body.removeChild(textarea);
  };
  /**
   * 判断指定玩家是否为仙家之魂武将
   *
   * 本函数通过检查玩家对象的属性来确定该玩家是否为特定身份。
   * 它遍历函数接收到的所有参数，寻找玩家对象。它检查玩家对象是否满足特定身份的条件。
   * 这个条件是玩家对象的名字在特定数组中，并且该名字对应的字符有特定的标识。
   *
   * @returns {boolean} 如果玩家是仙家之魂武将，则返回true；否则返回false。
   */
  get.isXHwujiang = function (player) {
    // 初始化变量，用于存储玩家对象和玩家名称列表
    let type,
      str,
      list = [];
    if (typeof player == 'undefined' || (type = typeof player, type != 'object') || (type = get.itemtype(player), type != 'player')) {
      throw new Error(`函数接受了一个不是Player的东西: ${type}: ${player}`);
    }
    // 获取玩家对象的名字列表
    let names = get.nameList(player);
    // 如果玩家名字列表为空或不是数组，则返回false
    if (!names.length || !Array.isArray(names)) return false;
    // 检查玩家名字列表中是否有名字满足特定条件（即对应的角色有特定的死亡音频标识）
    return names.some((item) => {
      if (!lib.character[item]) return false;
      if (!lib.character[item][4] || !lib.character[item].trashBin) return false;
      return lib.character[item][4].includes('xjzh_die_audio') || lib.character[item].trashBin.includes('xjzh_die_audio');
    }) ?
    true :
    false;
  };
  //删除文件及文件夹
  //为防止滥用，只支持操作本扩展目录
  game.xjzh_removeFiles = (files) => {
    if (lib.node && lib.node.fs)
    try {
      const deleteFolderRecursive = (path) => {
        if (!lib.node.fs.existsSync(path)) return;
        lib.node.fs.readdirSync(path).forEach((file, index) => {
          const currentPath = `${path}/${file}`;
          if (lib.node.fs.lstatSync(currentPath).isDirectory()) deleteFolderRecursive(currentPath);else
          lib.node.fs.unlinkSync(currentPath);
        });
        lib.node.fs.rmdirSync(path);
      };
      deleteFolderRecursive(`${__dirname}/extension/仙家之魂/${files}`);
    } catch (error) {} else
    new Promise((resolve, reject) => window.resolveLocalFileSystemURL(`extension/仙家之魂/${files}`, resolve, reject)).then((directoryEntry) => directoryEntry.removeRecursively());
  };
  /**
   * 异步复制文件或文件夹。
   * 使用node.js的文件系统模块在node环境复制文件，对于非node环境，则使用File API进行复制。
   * @param {string} source - 源文件或文件夹的路径。
   * @param {string} target - 目标文件或文件夹的路径。
   * @param {function} onCopyCompleted - 复制完成后调用的回调函数，接收已复制文件数和总文件数作为参数。
   */
  game.xjzh_copyFiles = async (source, target, onCopyCompleted) => {
    /**
     * 根据路径和当前环境（node.js或浏览器），构造完整的文件路径。
     * @param {string} path - 相对路径。
     * @returns {string} 构造的完整路径。
     */
    const getFullPath = (path) => lib.node ? `${__dirname}/${path}` : `${path}`;
    // 当前环境为node.js且存在fs模块时，使用node.js的方式复制文件
    if (lib.node && lib.node.fs) {
      let totalFiles = 0; // 总文件数
      let copiedFiles = 0; // 已复制的文件数
      /**
       * 递归复制文件夹及其内容。
       * @param {string} srcRelative - 源文件夹的相对路径。
       * @param {string} destRelative - 目标文件夹的相对路径。
       */
      const copyFolderRecursive = async (srcRelative, destRelative) => {
        const src = getFullPath(srcRelative);
        const dest = getFullPath(destRelative);
        // 如果源文件夹不存在，则直接返回
        if (!lib.node.fs.existsSync(src)) return;
        // 如果目标文件夹不存在，则创建目标文件夹
        if (!lib.node.fs.existsSync(dest)) lib.node.fs.mkdirSync(dest, { recursive: true });
        const files = lib.node.fs.readdirSync(src);
        totalFiles = files.length;
        await Promise.all(
          files.map(async (file) => {
            const srcPath = `${src}/${file}`;
            const destPath = `${dest}/${file}`;
            // 如果是子文件夹，则递归复制
            if (lib.node.fs.lstatSync(srcPath).isDirectory()) {
              await copyFolderRecursive(`${srcRelative}/${file}`, `${destRelative}/${file}`);
            } else {
              // 如果是文件，则直接复制
              lib.node.fs.copyFileSync(srcPath, destPath);
              copiedFiles++;
            }
          })
        );
      };
      try {
        await copyFolderRecursive(source, target);
        // 复制完成后，调用回调函数
        onCopyCompleted(copiedFiles, totalFiles);
      } catch (error) {}
    } else {
      // 在非node.js环境下，使用File API进行文件复制
      new Promise((resolve, reject) => window.resolveLocalFileSystemURL(getFullPath(source), resolve, reject)).
      then((sourceEntry) => new Promise((resolve, reject) => window.resolveLocalFileSystemURL(getFullPath(target), resolve, reject).catch(() => window.resolveLocalFileSystemURL(getFullPath(''), (dirEntry) => dirEntry.getDirectory(target.split('/').pop(), { create: true }, resolve)))).then((targetEntry) => sourceEntry.copyTo(targetEntry, null, resolve, reject))).
      then(() => onCopyCompleted(null, null)) // 在复制完成后调用回调
      .catch((error) => console.warn(error));
    }
  };
  for (const i of [`other/buff.js`, `other/qishuyaojians.js`, `other/originalFunc.js`, `other/rune.js`]) {
    import(`../${i}`);
  }
  // ---------------------------------------素材复制------------------------------------------//
  game.xjzh_filesCopy = function (sdir /*源文件夹路径*/, fn /*文件名*/, ddir /*目标文件夹路径*/, callback) {
    game.ensureDirectory(ddir, function () {});
    game.readFile(sdir + '/' + fn, function (data) {
      game.writeFile(data, ddir, fn, callback || function () {});
    });
  };
  // ---------------------------------------JS接口------------------------------------------//
  window.XJZHimport = function (func) {
    func(lib, game, ui, get, ai, _status);
  };
  // ---------------------------------------导入JS------------------------------------------//
  var extList = ['animation.js'];
  for (var i of extList) {
    var extURL = 'extension/仙家之魂/ext/' + i;
    lib.init.js(
      extURL,
      null,
      () => {},
      () => {
        alert('' + i + '导入失败!');
      }
    );
  }
  lib.init.css('extension/仙家之魂/css', 'extension');
  lib.init.css('extension/仙家之魂/css', 'updateAnnouncement');
  //成就系统
  //部分代码借鉴自《玄武江湖》
  lib.init.js(
    'extension/仙家之魂/ext',
    'achievement',
    function () {
      lib.init.css('extension/仙家之魂/css', 'mainPage');
      lib.init.css('extension/仙家之魂/css', 'achievement');
      lib.arenaReady.push(function () {
        ui.create.system(
          '仙魂成就',
          function () {
            if (typeof window.openxjzhAchievement == 'function') {
              window.openxjzhAchievement();
            } else {
              alert('错误：你可能没有正常导入仙家之魂扩展文件');
            }
          },
          true
        );
        try {
          //成就初始化
          game.xjzhAchi.init();
          if (!game.getExtensionConfig('仙家之魂', 'xjzh_importCalculateScore') && typeof game.xjzhAchi.calculateScore() == 'number') {
            let num = game.xjzhAchi.calculateScore();
            game.xjzh_changeTokens(num);
            game.xjzh_changeSuipian(num * 50);
            game.saveExtensionConfig('仙家之魂', 'xjzh_importCalculateScore', true);
          }
          //在武将资料上显示成就是否完成
          let xianhuns = lib.characterPack.XWTR;
          let design = Object.keys(designAchievement);
          for (let name in xianhuns) {
            if (!lib.characterTitle[name] || !xjzhTitle[name]) continue;
            if (xjzhTitle[name].includes(lib.characterTitle[name])) lib.characterTitle[name] = '';else
            lib.characterTitle[name] += '<br>';
            //普通胜利对局成就
            if (xjzhTitle[name]) lib.characterTitle[name] += `<br><a style='color:${game.xjzhAchi.hasAchi(xjzhTitle[name], 'character') ? '#FFD700' : '#F8F8FF'};text-decoration:none;'href=\"javascript:game.xjzhAchi.openAchievementView('character');\">${xjzhTitle[name]}${game.xjzhAchi.hasAchi(xjzhTitle[name], 'character') ? '（已完成）<br>' : '（未完成）<br>'}</a>`;
            //设计的成就
            if (design.includes(name)) {
              for (let value of designAchievement[name]) {
                //lib.characterTitle[name]+=`<br>${value[0]}`;
                lib.characterTitle[name] += `<br><a style='color:${game.xjzhAchi.hasAchi(value[0], value[1]) ? '#FFD700' : '#F8F8FF'};text-decoration:none;'href=\"javascript:game.xjzhAchi.openAchievementView('${value[1]}');\">${value[0]}${game.xjzhAchi.hasAchi(value[0], value[1]) ? '（已完成）<br>' : '（未完成）<br>'}</a>`;
                //lib.characterTitle[name]+=game.xjzhAchi.hasAchi(value[0],value[1])?'（已完成）<br>':'（未完成）<br>';
              }
            }
          }
        } catch (e) {}
      });
    },
    function () {}
  );
  //FPS显示
  lib.extensionMenu.extension_仙家之魂.tx_skillAnimation_showFps = {
    name: 'FPS显示',
    init: false,
    intro: '刷新生效'
  };
  lib.extensionMenu.extension_仙家之魂.tx_skillAnimation_showFpsP = {
    name: 'FPS显示位置',
    init: 'rd',
    item: {
      rd: '右下',
      cd: '中下',
      ld: '左下',
      ru: '右上',
      cu: '中上',
      lu: '左上'
    }
  };
}
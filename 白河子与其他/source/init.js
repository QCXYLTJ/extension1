import { lib, game, ui, get, ai, _status } from '../../../noname.js';
window.YuriAndOther = {
  url: 'extension/白河子与其他',
  copy(sdir /*源文件夹路径*/, fn /*文件名*/, ddir /*目标文件夹路径*/, callback) {
    game.ensureDirectory(ddir, game.kongfunc);
    game.readFile(sdir + '/' + fn, function (data) {
      game.writeFile(data, ddir, fn, callback || game.kongfunc);
    });
  },
  addProgress(obj, value, total) {
    var progress = Math.floor(value / total * 100);
    obj.style.backgroundSize = progress + '% 100%';
  },
  introduce: {
    suiyu: {
      name: '碎玉',
      info: '<li>角色的勾玉可以被击碎,当其勾玉被击碎时,其获得碎玉并失去等量体力上限,碎玉依然提供手牌上限.<li>一名角色受到伤害时,若其有碎玉,令此次伤害减少X(X为其碎玉数与此次伤害中最小值),其移除X个碎玉.<li>每名角色的出牌阶段限一次,若其有碎玉,其可以弃置至多Y张牌(Y为其碎玉数),修补(移除碎玉,增加等量的体力上限并回复等量体力值)Y点碎玉.'
    },
    xiubu: {
      name: '修补',
      info: '<li>若角色有碎玉,其可以移去一定量的碎玉,获得等量的体力上限并回复等量体力值.'
    },
    jishipai: {
      name: '即时牌',
      info: '<li>即时牌:指基本牌和普通锦囊牌.'
    },
    shiti: {
      name: '实体',
      info: '<li>实体:非虚拟且非转化.<li>本扩展描述中的<实体牌>,和<对应实体牌>概念无关;若称某东西为<实体牌>,首先要求它是牌,在此基础上要求它是非虚拟、非转化的牌.'
    },
    huanshupai: {
      name: '幻术牌',
      info: `<li><幻术>牌的概念来源于欢杀神左慈.
            <li><幻术>牌为本局游戏牌组中随机一张牌的镜像,此牌可进行常规牌可进行的任何一般操作.
            <li><幻术>牌不计入手牌上限,一名角色最多持有其体力上限两倍的<幻术>牌,超出的部分改为摸等量的牌.
            <li>已/未被〖幻化〗定向转化过的<幻术>牌呈现金/深蓝色与常规牌进行区分.
            <li>无〖幻术〗技能的角色获得<幻术>牌后,<幻术>牌会被销毁.`
    },
    wechatmoulvenum: {
      name: '谋略值',
      info: '上限为5,拥有谋略值的角色可以发动技能【妙计】(每回合限一次,你可以:①失去1点谋略值,视为使用【过河拆桥】;②失去3点谋略值,视为使用【无懈可击】;③失去3点谋略值,视为使用【无中生有】)'
    },
    zhulu: {
      name: '逐鹿',
      info: '<逐鹿>的概念来源于微信小程序,实际上就和移动版海外服的<共同拼点>一毛一样(关于<共同拼点>,无名杀【选项】→【其它】→【帮助】→【游戏名词】里有讲解)……'
    },
    fh_cardPile: {
      name: '额外牌堆',
      info: '<li><额外牌堆>的概念来源于三国杀15周年线下珍藏<飞鸿印雪>.<li>额外牌堆由牌堆中所有牌的各一张组成,部分卡牌具有固定的花色点数,其余卡牌为随机花色点数.<li>当额外牌置入弃牌堆后,改为放回对应的额外牌堆并洗切之.'
    },
    shiting: {
      name: '时停',
      info: `<li>萌娘百科:时间停止(简称<时停>,或称时间静止)是ACG作品中常见的一种特殊能力.
            <li>由于Sunny在无名杀<JoJo>扩展中的创造,<时停>在三国杀体系内也得到了具有画面感的表现效果.
            <li>处在<时停>状态内的角色:失去所有阶段(回合开始前跳过回合),所有非charlotte技能失效,并且无法使用和打出任何牌.
            <li>时停持续X个回合,指的是经过X个未处于时停状态的其他角色的回合后,便会解除自己的时停状态.`
    },
    qudai: {
      name: '可取代',
      info: '<li>可取代:用于卡牌效果的描述,意为此牌可以在合适的时机当作某种牌名的牌使用(不包括打出).'
    },
    xwjh_publicmark_yulu: {
      name: "玉露",
      info: "<li>玉露:回合结束时,消除一层玉露效果,回复一点体力.若体力已满,则摸一张牌."
    },
    xwjh_publicmark_huoxue: {
      name: "活血",
      info: "<li>活血:回复体力时,消除一层活血效果,摸一张牌并令回复量加一."
    },
    xwjh_public_effect_kangfen: {
      name: "亢奋",
      info: "<li>亢奋:出牌阶段你使用杀无次数限制.回合结束后,你移除此状态."
    },
    syr_nanyue_anranx: {
      name: '黯然销魂',
      info: '<li><黯然销魂>效果:<br>①每回合前两次于摸牌阶段外摸牌时,摸牌数+X;<br>②进攻距离和出牌阶段使用任何牌的次数上限均+X;<br>③回合开始时,可以选择回复1点体力或摸一张牌;<br>④回合结束时,移去一层此效果.<br>(X为当前此效果层数且至多为5)'
    },
    voiddamage: {
      name: '虚无伤害',
      info: '<li>虚无伤害是本扩展中的一种特殊的、不算伤害的<伤害>,无视护甲和碎玉,且不会触发与一般伤害有关的技能.'
    },
    real_swsy: {
      name: '<b>真·视为使用</b>',
      info: '<li><b><真·视为使用></b>是本扩展中的一种特殊机制,与<视为使用>不同,<b><真·视为使用></b>是真的<b><视为使用></b>而不算是真的<b><使用></b>,也就是说本质上只是执行卡牌效果、但并没有<使用>这一事件,因此不能触发与使用牌有关的各种技能,如果是锦囊也不会被【无懈】.'
    }
  },
  help() {
    var str = '';
    for (var i in window.YuriAndOther.introduce) {
      str += '<div style="margin:10px">' + window.YuriAndOther.introduce[i].name + '</div><ul style="margin-top:0">' + window.YuriAndOther.introduce[i].info + '</ul>';
    }
    return str;
  }
};
//------------------------------------------自定义get函数------------------------------------------//
get.yuriSkillTips = function (tipname, id) {
  const yuritip = ui.create.div('.yuri-yuritips', document.body);
  var isPhone = /mobile|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent);
  yuritip.style.zIndex = 998;
  const skilltip = ui.create.div('.yuri-skilltip', yuritip);
  skilltip.innerHTML = tipname;
  var herf = document.getElementById(id);
  if (herf) {
    var left = herf.getBoundingClientRect().left;
    if (isPhone) left += herf.offsetParent.offsetLeft;
    left += document.body.offsetWidth * 0.15;
    skilltip.style.left = left + 'px';
    skilltip.style.top = herf.getBoundingClientRect().top + 30 + 'px';
  }
  yuritip.listen(function (e) {
    e.stopPropagation();
    this.remove();
  });
};
get.yuriIntroduce = function (name, str, type) {
  var temp = (Math.random() * 9 + 1) * 100000;
  if (!type) type = 'game';
  if (!str || str == '') {
    if (type == 'game') {
      let str1 = window.YuriAndOther.introduce[name].name;
      let str2 = window.YuriAndOther.introduce[name].info;
      let link = "<a id='" + temp + "' style='color:unset' href=\"javascript:get.yuriSkillTips('" + str2 + "','" + temp + "');\">" + str1 + "※</a>";
      return link;
    } else {
      let str1 = window.YuriAndOther[type + 'Introduce'][name].name;
      let str2 = window.YuriAndOther[type + 'Introduce'][name].info;
      let link = "<a id='" + temp + "' style='color:unset' href=\"javascript:get.yuriSkillTips('" + str2 + "','" + temp + "');\">" + str1 + "※</a>";
      return link;
    }
  } else {
    let link = "<a id='" + temp + "' style='color:unset' href=\"javascript:get.yuriSkillTips('" + str + "','" + temp + "');\">" + name + "※</a>";
    return link;
  }
};
//获取Buff的代码名(除这里之外一般用不上)
get.yuriBuffName = function (name, iscomplete) {
  if (typeof name != 'string') return;
  var Buff = name;
  if (Buff.indexOf('_') == 0) Buff = Buff.slice(1);
  if (iscomplete !== false) {
    if (Buff.indexOf('syr_Buff_') == -1) Buff = 'syr_Buff_' + Buff;
  } else {
    if (Buff.indexOf('syr_Buff_') == 0) Buff = Buff.replace('syr_Buff_', '');
  }
  return Buff;
};
//获取中文解释
get.yuriIntroduceBuff = function (name) {
  name = get.yuriBuffName(name, false);
  return lib.skill[name].intro;
};
// //------------------------------------------自定义window函数------------------------------------------//
window.yuriOpenDialog = function (title, icon, content) {
  if (!title) title = "";
  if (!content) content = "";
  if (!window.yuriCurrentDialogs) {
    window.yuriCurrentDialogs = [];
  }
  // 创建覆盖层
  var overlay = ui.create.div('.yuri-dialog-overlay', document.body);
  overlay.addEventListener(lib.config.touchscreen ? "touchend" : "click", function (e) {
    e.stopPropagation(); // 阻止事件冒泡
  });
  overlay.style.zIndex = '98';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  var dialog = ui.create.div('.yuri-dialog', document.body);
  dialog.style.zIndex = '99';
  window.yuriCurrentDialogs.push(dialog);
  var icondiv = ui.create.div('.yuri-dialog-icon', dialog);
  if (icon) {
    icondiv.setBackgroundImage(icon);
  } else {
    icondiv.hide();
  }
  var text = ui.create.div('.yuri-dialog-text', dialog);
  text.innerHTML = content;
  if (lib.config.touchscreen) {
    lib.setScroll(text);
  }
  var titlediv = ui.create.div('.yuri-dialog-title', dialog);
  titlediv.innerHTML = title;
  var close = ui.create.div('.yuri-dialog-close', dialog);
  close.addEventListener('click', function () {
    window.yuriCurrentDialogs.remove(dialog);
    dialog.remove();
    overlay.remove(); // 关闭对话框时同时移除覆盖层
  });
  return dialog;
};
window.yuriIntroduce = function (name, type) {
  if (!type) {
    window.yuriOpenDialog("概念解释:" + window.YuriAndOther.introduce[name].name, null, window.YuriAndOther.introduce[name].info);
  } else if (type = 'buff') {
    window.yuriOpenDialog("Buff介绍:" + get.yuriIntroduceBuff(name).name, "extension/白河子与其他/image/icon/" + name + ".png", get.yuriIntroduceBuff(name).content);
  }
};
window.yuriIntroduceBuff = function (name) {
  window.yuriIntroduce(name, 'buff');
};
// get.dialogIntro = function (name) {
//     let temp = (Math.random() * 9 + 1) * 100000
//     let link = "<a id='" + temp + "' style='color: #FF0000' href=\"javascript:yuriIntroduce('" + name + "','buff');\">『" + get.yuriIntroduceBuff(name).name + "』</a>"
//     return link
// };
lib.namePrefix.set('欢杀', {
  color: '#ff6a6a',
  nature: 'MXpink',
  showName: '欢'
});
lib.namePrefix.set('欢杀旧', {
  getSpan: (prefix, name) => `${get.prefixSpan('欢杀')}${get.prefixSpan('旧')}`
});
lib.namePrefix.set('界谋', {
  getSpan: (prefix, name) => `${get.prefixSpan('界')}${get.prefixSpan('谋')}`
});
lib.namePrefix.set('界族', {
  getSpan: (prefix, name) => `${get.prefixSpan('界')}${get.prefixSpan('族')}`
});
lib.namePrefix.set('缝合版', {
  color: '#a4a4a4',
  nature: 'black',
  showName: '缝'
});
lib.namePrefix.set('bug', {
  color: '#a4a4a4',
  nature: 'black'
});
lib.namePrefix.set('OLbug', {
  getSpan: (prefix, name) => `${get.prefixSpan('OL')}${get.prefixSpan('bug')}`
});
lib.namePrefix.set('极略SK神', {
  getSpan(prefix, name) {
    return `${get.prefixSpan('极略SK', name)}${get.prefixSpan('神', name)}`;
  }
});
lib.namePrefix.set('极略SP神', {
  getSpan(prefix, name) {
    return `${get.prefixSpan('极略SP', name)}${get.prefixSpan('神', name)}`;
  }
});
lib.namePrefix.set('极略SR', {
  getSpan() {
    return `<span style="writing-mode:horizontal-tb;-webkit-writing-mode:horizontal-tb;font-family:MotoyaLMaru;transform:scaleY(0.85)" data-nature="keymm">SR</span>`;
  }
});
lib.namePrefix.set('极略SK', {
  getSpan() {
    return `<span style="color: #fbefef;writing-mode:horizontal-tb;-webkit-writing-mode:horizontal-tb;font-family:MotoyaLMaru;transform:scaleY(0.85)" data-nature="firemm">SK</span>`;
  }
});
lib.namePrefix.set('极略SP', {
  getSpan() {
    return `<span style="writing-mode:horizontal-tb;-webkit-writing-mode:horizontal-tb;font-family:MotoyaLMaru;transform:scaleY(0.85)">SP</span>`;
  }
});
lib.namePrefix.set('谋神', {
  getSpan: (prefix, name) => `${get.prefixSpan('谋')}${get.prefixSpan('神')}`
});
lib.namePrefix.set('水', {
  color: '#c3f9ff',
  nature: 'thundermm'
});